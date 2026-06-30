const fs = require('fs');
let code = fs.readFileSync('src/components/blocks/how-to-find-us/pdf-print-layout.tsx', 'utf8');

code = code.replace(
  /export function PdfPrintLayout\(\) \{\n  const routes = \[\n(?:    \{\n      from: "Dubai",\n      text: "Take Al Ittihad Road \(E11\) towards Sharjah\. Follow the signs towards Al Mamzar\. Turn right onto Al Mamzar Road and continue until you reach Tabarak Tower on your right\.",\n    \},\n    \{\n      from: "Ajman, Umm Al Quwain, or Ras Al Khaimah",\n      text: "Drive towards Sharjah on Sheikh Mohammed Bin Zayed Road \(E311\)\. Take the exit for Al Mamzar, and follow the signs to reach Al Mamzar Road\. Tabarak Tower will be on your right\.",\n    \},\n    \{\n      from: "Abu Dhabi",\n      text: "Head towards Dubai on Sheikh Zayed Road \(E11\)\. Continue towards Al Ittihad Road \(E11\) into Sharjah\. Follow the signs to Al Mamzar, and turn right onto Al Mamzar Road\. Tabarak Tower will be on your right\.",\n    \},\n  \];/g,
  `import { useTranslations } from "next-intl";

export function PdfPrintLayout() {
  const t = useTranslations("AboutUsPage.HowToFindUs");
  const routes = t.raw("DrivingDirections.routes");`
);

code = code.replace(
  `          <div className="pdf-header-contact">
            <strong>The Exam Preparation &amp; Testing House L.L.C</strong>
            <div className="pdf-header-contact-details">
              <span>Suite 701, 7th Floor, Tabarak Tower</span>
              <span>Corniche Rd, Al Mamzar, Sharjah, UAE</span>
              <div className="pdf-header-contact-meta">
                <span><strong>Tel:</strong> +971 6 553 1250</span>
                <span><strong>Web:</strong> www.tepth.org</span>`,
  `          <div className="pdf-header-contact">
            <strong>{t("Pdf.companyName")}</strong>
            <div className="pdf-header-contact-details">
              <span>{t("Pdf.addressL1")}</span>
              <span>{t("Pdf.addressL2")}</span>
              <div className="pdf-header-contact-meta">
                <span><strong>{t("Pdf.tel")}:</strong> +971 6 553 1250</span>
                <span><strong>{t("Pdf.web")}:</strong> www.tepth.org</span>`
);

code = code.replace(
  `          <span className="pdf-section-label">Location Guide</span>
          <h1 className="pdf-section-title">
            How to Find Our <span className="pdf-accent">Centre</span>
          </h1>
          <p style={{ fontSize: "11px", color: "#475569", margin: 0, lineHeight: 1.6 }}>
            Reaching our centre in Sharjah is straightforward. Below you will find our location map,
            transport options and driving directions to help you navigate your journey with ease.
          </p>`,
  `          <span className="pdf-section-label">{t("HeroSection.badge")}</span>
          <h1 className="pdf-section-title">
            {t("HeroSection.title")}<span className="pdf-accent">{t("HeroSection.titleAccent")}</span>
          </h1>
          <p style={{ fontSize: "11px", color: "#475569", margin: 0, lineHeight: 1.6 }}>
            {t("HeroSection.description")}
          </p>`
);

code = code.replace(
  `            <span className="pdf-section-label">Location Map</span>`,
  `            <span className="pdf-section-label">{t("MapSection.badge")}</span>`
);

code = code.replace(
  `            <p style={{ fontSize: "11px", lineHeight: 1.65, color: "#475569", marginBottom: "0.75rem" }}>
              Route to our centre is easy to follow. The map on the left shows
              our exact location. You can select street view or satellite imagery
              to plan your journey.
            </p>
            <p style={{ fontSize: "11px", lineHeight: 1.65, color: "#1a1a1a", fontWeight: 700, marginBottom: "0.75rem" }}>
              Destination:{" "}
              <span className="pdf-accent">
                The Exam Preparation &amp; Testing House L.L.C
              </span>
              , Sharjah
            </p>`,
  `            <p style={{ fontSize: "11px", lineHeight: 1.65, color: "#475569", marginBottom: "0.75rem" }}>
              {t("MapSection.p1")} {t("MapSection.p2")}
            </p>
            <p style={{ fontSize: "11px", lineHeight: 1.65, color: "#1a1a1a", fontWeight: 700, marginBottom: "0.75rem" }}>
              {t("Pdf.destinationPrefix")}
              <span className="pdf-accent">
                {t("Pdf.companyName")}
              </span>
              {t("Pdf.destinationSuffix")}
            </p>`
);

code = code.replace(
  `              <div style={{ fontWeight: 900, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#1a1a1a", marginBottom: "4px" }}>
                📍 Full Address
              </div>
              Tabarak Tower, Suite 701, 7th Floor<br />
              Corniche Road, Al Mamzar<br />
              Sharjah, United Arab Emirates
            </div>

            <div style={{ marginTop: "0.65rem", fontSize: "11px", lineHeight: 1.65, color: "#475569" }}>
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>Phone: </span>+971 6 553 1250<br />
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>Taxi (Sharjah): </span>600-525-252
            </div>`,
  `              <div style={{ fontWeight: 900, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#1a1a1a", marginBottom: "4px" }}>
                {t("Pdf.fullAddressBadge")}
              </div>
              {t("Pdf.fullAddressL1")}<br />
              {t("Pdf.fullAddressL2")}<br />
              {t("Pdf.fullAddressL3")}
            </div>

            <div style={{ marginTop: "0.65rem", fontSize: "11px", lineHeight: 1.65, color: "#475569" }}>
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>{t("Pdf.phoneLabel")} </span>+971 6 553 1250<br />
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>{t("Pdf.taxiLabel")} </span>600-525-252
            </div>`
);

code = code.replace(
  `          <span className="pdf-section-label">Movement &amp; Access</span>
          <h2 className="pdf-section-title" style={{ fontSize: "13px" }}>
            Ways to <span className="pdf-accent">Reach Us</span>
          </h2>`,
  `          <span className="pdf-section-label">{t("Transportation.badge")}</span>
          <h2 className="pdf-section-title" style={{ fontSize: "13px" }}>
            {t("Transportation.title")}<span className="pdf-accent">{t("Transportation.titleAccent")}</span>
          </h2>`
);

code = code.replace(
  `              <div className="pdf-transport-title">By Taxicab</div>
              From anywhere in Sharjah, hire a taxi to Tabarak Tower, Al Mamzar.
              Call <strong>600-525-252</strong> to book with Sharjah Taxi Corporation.
              Drivers will pick you up and take you directly to our centre.
            </div>
            <div style={{ clear: "both" }} />
          </div>

          {/* 02 Public Bus */}
          <div className="pdf-transport-item">
            <span className="pdf-transport-num">02</span>
            <div className="pdf-transport-body">
              <div className="pdf-transport-title">Public Bus</div>
              Take a Sharjah public bus towards Al Mamzar or Al Taawun, disembarking
              at the nearest bus stop to Tabarak Tower. The bus ride will get you
              within a short walking distance of the centre.
            </div>
            <div style={{ clear: "both" }} />
          </div>

          {/* 03 Metro & Bus */}
          <div className="pdf-transport-item">
            <span className="pdf-transport-num">03</span>
            <div className="pdf-transport-body">
              <div className="pdf-transport-title">Dubai Metro &amp; Bus</div>
              <strong>1.</strong> Take the Dubai Metro Red Line → alight at <strong>Union Metro Station</strong>.<br />
              <strong>2.</strong> Walk to Union Square Bus Station → board <strong>E303 bus</strong> to Al Jubail Bus Station, Sharjah.<br />
              <strong>3.</strong> From Al Jubail Bus Station, take a taxi to <strong>Tabarak Tower, Al Mamzar</strong>.<br />
              <em>Alternatives: E306 (Al Ghubaiba → Al Jubail) · E307 (Deira City Centre → Al Jubail).</em><br />
              <span style={{ color: "#d12c2c", fontWeight: 700 }}>
                Note: Allow extra travel time due to possible traffic.
              </span>
            </div>`,
  `              <div className="pdf-transport-title">{t("Transportation.taxicabTitle")}</div>
              {t("Transportation.taxicabDescriptionPart1")}
              <strong>{t("Transportation.taxicabNumber")}</strong>
              {t("Transportation.taxicabDescriptionPart2")}
            </div>
            <div style={{ clear: "both" }} />
          </div>

          {/* 02 Public Bus */}
          <div className="pdf-transport-item">
            <span className="pdf-transport-num">02</span>
            <div className="pdf-transport-body">
              <div className="pdf-transport-title">{t("Transportation.publicBusTitle")}</div>
              {t("Transportation.publicBusDescription")}
            </div>
            <div style={{ clear: "both" }} />
          </div>

          {/* 03 Metro & Bus */}
          <div className="pdf-transport-item">
            <span className="pdf-transport-num">03</span>
            <div className="pdf-transport-body">
              <div className="pdf-transport-title">{t("Transportation.metroTitle")}</div>
              <strong>1.</strong> {t("Transportation.metroStep1Text")}<br />
              <strong>2.</strong> {t("Transportation.metroStep2Text1")} {t("Transportation.metroStep2Text2")}<br />
              <strong>3.</strong> {t("Transportation.metroStep3Text")}<br />
              <em>{t("Pdf.alternatives")}</em><br />
              <span style={{ color: "#d12c2c", fontWeight: 700 }}>
                {t("Transportation.note")}
              </span>
            </div>`
);

code = code.replace(
  `              <strong>How to Find Us — Continued</strong>
              <div className="pdf-header-contact-details">
                <span>Suite 701, Tabarak Tower, Sharjah, UAE</span>
                <div className="pdf-header-contact-meta">
                  <span><strong>Tel:</strong> +971 6 553 1250</span>`,
  `              <strong>{t("Pdf.continued")}</strong>
              <div className="pdf-header-contact-details">
                <span>{t("Pdf.addressL1")}, {t("Pdf.addressL2")}</span>
                <div className="pdf-header-contact-meta">
                  <span><strong>{t("Pdf.tel")}:</strong> +971 6 553 1250</span>`
);

code = code.replace(
  `            <span className="pdf-section-label">Driving Directions</span>
            <h2 className="pdf-section-title" style={{ fontSize: "13px" }}>
              Get <span className="pdf-accent">Directions</span>
            </h2>

            {routes.map((route, idx) => (
              <div key={idx} className="pdf-route-item">
                <div className="pdf-route-num">0{idx + 1}</div>
                <div>
                  <div className="pdf-route-from">From {route.from}</div>
                  <div className="pdf-route-text">{route.text}</div>`,
  `            <span className="pdf-section-label">{t("DrivingDirections.badge")}</span>
            <h2 className="pdf-section-title" style={{ fontSize: "13px" }}>
              {t("DrivingDirections.title")}
            </h2>

            {routes.map((route: any, idx: number) => (
              <div key={idx} className="pdf-route-item">
                <div className="pdf-route-num">0{idx + 1}</div>
                <div>
                  <div className="pdf-route-from">{t("Pdf.from")} {route.from}</div>
                  <div className="pdf-route-text">{route.text}</div>`
);

code = code.replace(
  `            <div className="pdf-parking-title">🅿 Parking Information</div>

            <div>
              <span className="pdf-parking-dot" />
              <span className="pdf-parking-label">On-Site Parking</span>
            </div>
            <p className="pdf-parking-text">
              Visitor parking spaces are available at the back of{" "}
              <strong>Tabarak Tower</strong>.
            </p>

            <hr className="pdf-divider" />

            <div>
              <span className="pdf-parking-dot" />
              <span className="pdf-parking-label">Public Parking</span>
            </div>
            <p className="pdf-parking-text">
              Metered parking is available near the tower at approximately{" "}
              <strong>AED 2 per hour</strong>. Please check with SRTA Sharjah
              for the most recent rates.
            </p>

            <p className="pdf-parking-note">
              &ldquo;This guide is aimed at helping you reach The Exam Preparation &amp; Testing
              House L.L.C in Sharjah with ease.&rdquo;
            </p>`,
  `            <div className="pdf-parking-title">{t("Pdf.parkingInfo")}</div>

            <div>
              <span className="pdf-parking-dot" />
              <span className="pdf-parking-label">{t("DrivingDirections.onSiteParking")}</span>
            </div>
            <p className="pdf-parking-text">
              {t("DrivingDirections.onSiteParkingText1")}
              <strong>{t("DrivingDirections.onSiteParkingText2")}</strong>.
            </p>

            <hr className="pdf-divider" />

            <div>
              <span className="pdf-parking-dot" />
              <span className="pdf-parking-label">{t("DrivingDirections.publicParking")}</span>
            </div>
            <p className="pdf-parking-text">
              {t("DrivingDirections.publicParkingText1")}
              <strong>2 AED{t("DrivingDirections.publicParkingText2")}</strong>.
            </p>

            <p className="pdf-parking-note">
              &ldquo;{t("DrivingDirections.quote")}&rdquo;
            </p>`
);

code = code.replace(
  `              <span className="pdf-footer-brand">TEPTH — The Exam Preparation &amp; Testing House L.L.C</span><br />
              Tabarak Tower, Suite 701, Corniche Rd, Al Mamzar, Sharjah, UAE`,
  `              <span className="pdf-footer-brand">{t("Pdf.footerBrand")}</span><br />
              {t("Pdf.footerAddress")}`
);

fs.writeFileSync('src/components/blocks/how-to-find-us/pdf-print-layout.tsx', code);
console.log("Updated");
