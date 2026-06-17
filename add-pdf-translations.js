const fs = require('fs');

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8'));

const enPdf = {
  "companyName": "The Exam Preparation & Testing House L.L.C",
  "addressL1": "Suite 701, 7th Floor, Tabarak Tower",
  "addressL2": "Corniche Rd, Al Mamzar, Sharjah, UAE",
  "tel": "Tel",
  "web": "Web",
  "destinationPrefix": "Destination: ",
  "destinationSuffix": ", Sharjah",
  "fullAddressBadge": "📍 Full Address",
  "fullAddressL1": "Tabarak Tower, Suite 701, 7th Floor",
  "fullAddressL2": "Corniche Road, Al Mamzar",
  "fullAddressL3": "Sharjah, United Arab Emirates",
  "phoneLabel": "Phone:",
  "taxiLabel": "Taxi (Sharjah):",
  "continued": "How to Find Us — Continued",
  "footerBrand": "TEPTH — The Exam Preparation & Testing House L.L.C",
  "footerAddress": "Tabarak Tower, Suite 701, Corniche Rd, Al Mamzar, Sharjah, UAE",
  "alternatives": "Alternatives: E306 (Al Ghubaiba → Al Jubail) · E307 (Deira City Centre → Al Jubail).",
  "from": "From",
  "parkingInfo": "🅿 Parking Information"
};

const arPdf = {
  "companyName": "ذا اكزام بريباريشن اند تيستنج هاوس ذ.م.م",
  "addressL1": "جناح 701، الطابق 7، برج تبارك",
  "addressL2": "شارع الكورنيش، الممزر، الشارقة، الإمارات",
  "tel": "هاتف",
  "web": "الموقع",
  "destinationPrefix": "الوجهة: ",
  "destinationSuffix": "، الشارقة",
  "fullAddressBadge": "📍 العنوان الكامل",
  "fullAddressL1": "برج تبارك، جناح 701، الطابق 7",
  "fullAddressL2": "شارع الكورنيش، الممزر",
  "fullAddressL3": "الشارقة، الإمارات العربية المتحدة",
  "phoneLabel": "الهاتف:",
  "taxiLabel": "تاكسي الشارقة:",
  "continued": "كيف تجد مركزنا — يتبع",
  "footerBrand": "TEPTH — ذا اكزام بريباريشن اند تيستنج هاوس ذ.م.م",
  "footerAddress": "برج تبارك، جناح 701، شارع الكورنيش، الممزر، الشارقة، الإمارات",
  "alternatives": "بدائل: E306 (الغبيبة ← الجبيل) · E307 (ديرة سيتي سنتر ← الجبيل).",
  "from": "من",
  "parkingInfo": "🅿 معلومات مواقف السيارات"
};

en.AboutUsPage.HowToFindUs.Pdf = enPdf;
ar.AboutUsPage.HowToFindUs.Pdf = arPdf;

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2) + '\n');
fs.writeFileSync('messages/ar.json', JSON.stringify(ar, null, 2) + '\n');
console.log("Translations added.");
