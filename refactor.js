const fs = require('fs');
const path = require('path');

const componentsToMove = {
  'ContactForm.tsx': 'contact-form.tsx',
  'CoreServices.tsx': 'core-services.tsx',
  'CTASection.tsx': 'cta-section.tsx',
  'ExperienceExcellence.tsx': 'experience-excellence.tsx',
  'Footer.tsx': 'footer.tsx',
  'FreeConsultationForm.tsx': 'free-consultation-form.tsx',
  'GlobalTestPartners.tsx': 'global-test-partners.tsx',
  'HeroSection.tsx': 'hero-section.tsx',
  'LatestBlogs.tsx': 'latest-blogs.tsx',
  'MockTestBookingForm.tsx': 'mock-test-booking-form.tsx',
  'Testimonials.tsx': 'testimonials.tsx',
  'TopNavBar.tsx': 'top-nav-bar.tsx'
};

const srcComponentsDir = path.join(process.cwd(), 'src/components');
const blocksDir = path.join(srcComponentsDir, 'blocks');

if (!fs.existsSync(blocksDir)) {
  fs.mkdirSync(blocksDir, { recursive: true });
}

// Move files
for (const [oldName, newName] of Object.entries(componentsToMove)) {
  const oldPath = path.join(srcComponentsDir, oldName);
  const newPath = path.join(blocksDir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${oldName} to blocks/${newName}`);
  } else {
    console.log(`Warning: ${oldName} not found.`);
  }
}

// Helper to iterate all files
function walkFiles(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walkFiles(p, callback);
    } else {
      if (p.endsWith('.tsx') || p.endsWith('.ts')) {
        callback(p);
      }
    }
  }
}

// Update imports
walkFiles(path.join(process.cwd(), 'src'), (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  for (const [oldName, newName] of Object.entries(componentsToMove)) {
    const oldBase = oldName.replace('.tsx', '');
    const newBase = newName.replace('.tsx', '');
    
    // Replace absolute imports like "@/components/OldName"
    const regex = new RegExp(`@/components/${oldBase}(['";x])`, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, `@/components/blocks/${newBase}$1`);
      changed = true;
    }
    
    // Replace relative imports (like "../components/OldName" or "../../components/OldName")
    const regexRelative = new RegExp(`\\.\\./components/${oldBase}(['";x])`, 'g');
    if (regexRelative.test(content)) {
      content = content.replace(regexRelative, `../components/blocks/${newBase}$1`);
      changed = true;
    }
    
    const regexRelative2 = new RegExp(`\\.\\./\\.\\./components/${oldBase}(['";x])`, 'g');
    if (regexRelative2.test(content)) {
      content = content.replace(regexRelative2, `../../components/blocks/${newBase}$1`);
      changed = true;
    }
    
    // Also handle simple ./ if it happened to be in the same folder before (e.g. within components)
    // Actually, if a component imported another component via "./OldName", now they are both in the "blocks" directory,
    // so it would be "./new-name". If not both, we would need to fix.
    const regexLocal = new RegExp(`\\.\\/${oldBase}(['";x])`, 'g');
    if (regexLocal.test(content) && filePath.includes('src/components/blocks')) {
      content = content.replace(regexLocal, `./${newBase}$1`);
      changed = true;
    }

    // if inside pages not in blocks, etc. Handled mostly above
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated imports in ${filePath}`);
  }
});
