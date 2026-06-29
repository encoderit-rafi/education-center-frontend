import os
import re

directory = 'src/components/blocks/forms'

import_str = 'import { VAT_PERCENT, calculateVat } from "@/lib/vat";'

for root, _, files in os.walk(directory):
    for f in files:
        if f.endswith('.tsx') and f not in ["form-ielts-general-registration.tsx", "form-toefl-ibt-registration.tsx", "form-ielts-academic-registration.tsx"]:
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            
            original_content = content
            
            content = re.sub(
                r'(const subtotal = baseFee \+ serviceFee \+ coursePrice \+ workshopPrice;)\s*return \{\s*baseFee,\s*serviceFee,\s*coursePrice,\s*workshopPrice,\s*subtotal,\s*vat: 0,\s*total: subtotal,?\s*\};',
                r'\1\n    const vatAmount = calculateVat(subtotal);\n\n    return {\n      baseFee,\n      serviceFee,\n      coursePrice,\n      workshopPrice,\n      subtotal,\n      vat: vatAmount,\n      total: subtotal + vatAmount,\n    };',
                content
            )

            content = re.sub(
                r'const total = baseFee \+ serviceFee \+ coursePrice \+ workshopPrice;\s*return \{\s*baseFee,\s*serviceFee,\s*coursePrice,\s*workshopPrice,\s*subtotal: total,\s*vat: 0,\s*total,?\s*\};',
                r'const subtotal = baseFee + serviceFee + coursePrice + workshopPrice;\n    const vatAmount = calculateVat(subtotal);\n\n    return {\n      baseFee,\n      serviceFee,\n      coursePrice,\n      workshopPrice,\n      subtotal,\n      vat: vatAmount,\n      total: subtotal + vatAmount,\n    };',
                content
            )
            
            if content != original_content:
                print(f"Updated {path}")
                if 'calculateVat' not in original_content:
                    content = re.sub(r'(import \* as z from "zod";)', r'\1\n' + import_str, content)
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(content)
