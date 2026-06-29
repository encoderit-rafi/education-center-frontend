import os
import re

directory = 'src/components/blocks/forms'
import_str = 'import { VAT_PERCENT, calculateVat } from "@/lib/vat";\n'

for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            if 'calculateVat(' in content and 'import { VAT_PERCENT, calculateVat }' not in content:
                print(f"Fixing {path}")
                # Insert right after the last import
                lines = content.split('\n')
                last_import_idx = -1
                for i, line in enumerate(lines):
                    if line.startswith('import '):
                        last_import_idx = i
                
                if last_import_idx != -1:
                    lines.insert(last_import_idx + 1, import_str.strip())
                else:
                    lines.insert(0, import_str.strip())
                
                with open(path, 'w', encoding='utf-8') as file:
                    file.write('\n'.join(lines))
