import os

directory = 'src/components/blocks/forms'

old_pattern = """    const subtotal = baseFee + serviceFee + coursePrice + workshopPrice;

    return {
      baseFee,
      serviceFee,
      coursePrice,
      workshopPrice,
      subtotal,
      vat: 0,
      total: subtotal,
    };"""

new_pattern = """    const subtotal = baseFee + serviceFee + coursePrice + workshopPrice;
    const vatAmount = calculateVat(subtotal);

    return {
      baseFee,
      serviceFee,
      coursePrice,
      workshopPrice,
      subtotal,
      vat: vatAmount,
      total: subtotal + vatAmount,
    };"""

import_str = 'import { VAT_PERCENT, calculateVat } from "@/lib/vat";\n'

for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith('.tsx') and f != "form-ielts-general-registration.tsx" and f != "form-toefl-ibt-registration.tsx":
            path = os.path.join(root, f)
            with open(path, 'r') as file:
                content = file.read()
                
            if old_pattern in content:
                print(f"Updating {path}")
                content = content.replace(old_pattern, new_pattern)
                
                if 'calculateVat' not in content:
                    lines = content.split('\n')
                    for i, line in enumerate(lines):
                        if line.startswith('import ') and 'zod' in line:
                            lines.insert(i+1, import_str.strip())
                            break
                    content = '\n'.join(lines)
                
                with open(path, 'w') as file:
                    file.write(content)
