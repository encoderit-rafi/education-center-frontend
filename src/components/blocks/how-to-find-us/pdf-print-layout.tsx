import Image from "next/image";

export function PdfPrintLayout() {
  const routes = [
    {
      from: "Dubai",
      text: "Take Al Ittihad Road (E11) towards Sharjah. Follow the signs towards Al Mamzar. Turn right onto Al Mamzar Road and continue until you reach Tabarak Tower on your right.",
    },
    {
      from: "Ajman, Umm Al Quwain, or Ras Al Khaimah",
      text: "Drive towards Sharjah on Sheikh Mohammed Bin Zayed Road (E311). Take the exit for Al Mamzar, and follow the signs to reach Al Mamzar Road. Tabarak Tower will be on your right.",
    },
    {
      from: "Abu Dhabi",
      text: "Head towards Dubai on Sheikh Zayed Road (E11). Continue towards Al Ittihad Road (E11) into Sharjah. Follow the signs to Al Mamzar, and turn right onto Al Mamzar Road. Tabarak Tower will be on your right.",
    },
  ];

  return (
    <>
      {/* ─── Print Styles ─────────────────────────────────────────────────── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Elements visible on screen, hidden when printing */
          .print-hide {
            /* visible on screen — overridden inside @media print */
          }

          /* The entire print document: hidden on screen */
          .pdf-document {
            display: none;
          }

          /* Watermark: hidden on screen */
          .print-watermark {
            display: none;
          }

          @media print {
            /* Force exact colour rendering */
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }

            /* Hide global site chrome */
            header, footer, nav,
            .global-header, .global-footer,
            [role="navigation"], #header, #footer {
              display: none !important;
            }

            /* Reset page background */
            body, main {
              background: white !important;
              color: #1a1a1a !important;
              padding: 0 !important;
              margin: 0 !important;
              font-size: 13px !important;
              font-family: system-ui, -apple-system, sans-serif !important;
            }

            /* Disable transforms / filters that break fixed positioning */
            html, body, main, div {
              transform: none !important;
              filter: none !important;
            }

            /* Hide all web-page content on print */
            .print-hide {
              display: none !important;
            }

            /* ── Watermark ── */
            .print-watermark {
              display: flex !important;
              position: fixed !important;
              top: 0 !important;
              left: 0 !important;
              right: 0 !important;
              bottom: 0 !important;
              align-items: center !important;
              justify-content: center !important;
              pointer-events: none !important;
              opacity: 0.04 !important;
              z-index: 99999 !important;
            }
            .print-watermark-inner {
              transform: rotate(-35deg) !important;
              width: 620px !important;
              height: 620px !important;
              position: relative !important;
            }

            /* ── Show the PDF document ── */
            .pdf-document {
              display: block !important;
              width: 100% !important;
              max-width: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
              color: #1a1a1a !important;
            }

            /* ── Branded Header ── */
            .pdf-header {
              display: flex !important;
              flex-direction: row !important;
              justify-content: space-between !important;
              align-items: flex-start !important;
              padding-bottom: 1rem !important;
              margin-bottom: 1.5rem !important;
              border-bottom: 2.5px solid #e2e8f0 !important;
            }
            .pdf-header-logo {
              position: relative !important;
              width: 160px !important;
              height: 56px !important;
            }
            .pdf-header-contact {
              text-align: right !important;
              font-size: 11px !important;
              line-height: 1.7 !important;
              color: #475569 !important;
            }
            .pdf-header-contact strong {
              display: block !important;
              font-size: 12px !important;
              font-weight: 800 !important;
              color: #1a1a1a !important;
              margin-bottom: 2px !important;
            }

            /* ── Section title bar ── */
            .pdf-section-label {
              display: inline-block !important;
              font-size: 9px !important;
              font-weight: 900 !important;
              letter-spacing: 0.15em !important;
              text-transform: uppercase !important;
              color: #64748b !important;
              margin-bottom: 4px !important;
            }
            .pdf-section-title {
              font-size: 16px !important;
              font-weight: 900 !important;
              color: #1a1a1a !important;
              margin: 0 0 0.75rem !important;
              text-transform: uppercase !important;
              letter-spacing: -0.01em !important;
            }
            .pdf-accent {
              color: hsl(var(--primary, 215 90% 40%)) !important;
            }

            /* ── Two-column layout ── */
            .pdf-two-col {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 1.5rem !important;
              margin-bottom: 1.25rem !important;
            }

            /* ── Map image block ── */
            .pdf-map-wrap {
              position: relative !important;
              width: 100% !important;
              height: 260px !important;
              border-radius: 6px !important;
              overflow: hidden !important;
              border: 1px solid #e2e8f0 !important;
            }

            /* ── Page break ── */
            .pdf-page-break {
              page-break-before: always !important;
              break-before: always !important;
              padding-top: 1.5rem !important;
            }
            .pdf-avoid-break {
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }

            /* ── Divider ── */
            .pdf-divider {
              border: none !important;
              border-top: 1px solid #e2e8f0 !important;
              margin: 0.75rem 0 !important;
            }

            /* ── Transport option ── */
            .pdf-transport-item {
              break-inside: avoid !important;
              page-break-inside: avoid !important;
              padding: 0.6rem 0 !important;
              border-bottom: 1px solid #f1f5f9 !important;
            }
            .pdf-transport-num {
              font-size: 28px !important;
              font-weight: 900 !important;
              color: #e2e8f0 !important;
              line-height: 1 !important;
              margin-right: 0.5rem !important;
              float: left !important;
            }
            .pdf-transport-title {
              font-size: 12px !important;
              font-weight: 900 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.05em !important;
              color: hsl(var(--primary, 215 90% 40%)) !important;
              margin-bottom: 3px !important;
            }
            .pdf-transport-body {
              font-size: 11px !important;
              line-height: 1.6 !important;
              color: #475569 !important;
              overflow: hidden !important;
            }

            /* ── Driving direction row ── */
            .pdf-route-item {
              display: flex !important;
              gap: 0.6rem !important;
              padding: 0.5rem 0 !important;
              border-bottom: 1px solid #f1f5f9 !important;
              break-inside: avoid !important;
            }
            .pdf-route-num {
              font-size: 22px !important;
              font-weight: 900 !important;
              color: #e2e8f0 !important;
              line-height: 1 !important;
              flex-shrink: 0 !important;
              padding-top: 2px !important;
            }
            .pdf-route-from {
              font-size: 10px !important;
              font-weight: 900 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.08em !important;
              color: hsl(var(--primary, 215 90% 40%)) !important;
              margin-bottom: 2px !important;
            }
            .pdf-route-text {
              font-size: 11px !important;
              line-height: 1.55 !important;
              color: #475569 !important;
            }

            /* ── Parking info box ── */
            .pdf-parking-box {
              background: #f8fafc !important;
              border: 1px solid #e2e8f0 !important;
              border-radius: 8px !important;
              padding: 0.85rem 1rem !important;
              break-inside: avoid !important;
            }
            .pdf-parking-title {
              font-size: 13px !important;
              font-weight: 900 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.05em !important;
              color: #1a1a1a !important;
              margin-bottom: 0.5rem !important;
            }
            .pdf-parking-dot {
              display: inline-block !important;
              width: 6px !important;
              height: 6px !important;
              border-radius: 50% !important;
              background: hsl(var(--primary, 215 90% 40%)) !important;
              margin-right: 5px !important;
              vertical-align: middle !important;
            }
            .pdf-parking-label {
              font-size: 10px !important;
              font-weight: 900 !important;
              text-transform: uppercase !important;
              letter-spacing: 0.1em !important;
              color: #1a1a1a !important;
            }
            .pdf-parking-text {
              font-size: 11px !important;
              line-height: 1.55 !important;
              color: #475569 !important;
              margin: 3px 0 0.5rem 14px !important;
            }
            .pdf-parking-note {
              font-size: 10.5px !important;
              font-style: italic !important;
              color: #64748b !important;
              border-top: 1px solid #e2e8f0 !important;
              padding-top: 0.5rem !important;
              margin-top: 0.5rem !important;
            }

            /* ── Footer ── */
            .pdf-footer {
              margin-top: 1.25rem !important;
              padding-top: 0.75rem !important;
              border-top: 1.5px solid #e2e8f0 !important;
              display: flex !important;
              justify-content: space-between !important;
              align-items: center !important;
              font-size: 10px !important;
              color: #94a3b8 !important;
            }
            .pdf-footer-brand {
              font-weight: 900 !important;
              color: #475569 !important;
              font-size: 11px !important;
            }
          }
        `,
        }}
      />

      {/* ─── Watermark (screen: hidden | print: fixed overlay) ─────────── */}
      <div className="print-watermark" aria-hidden="true">
        <div className="print-watermark-inner">
          <Image
            src="/images/tepth-logo.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* ─── Full PDF Document (screen: display:none | print: visible) ──── */}
      <div className="pdf-document" aria-hidden="true">

        {/* ── Page 1 ─────────────────────────────────────────────────────── */}

        {/* Branded Header */}
        <div className="pdf-header">
          <div className="pdf-header-logo">
            <Image
              src="/images/tepth-logo.png"
              alt="TEPTH Logo"
              fill
              className="object-contain object-left"
            />
          </div>
          <div className="pdf-header-contact">
            <strong>The Exam Preparation &amp; Testing House L.L.C</strong>
            Tabarak Tower, Suite 701, 7th Floor<br />
            Corniche Rd, Al Mamzar, Sharjah, UAE<br />
            Tel: +971 6 553 1250<br />
            www.tepth.com
          </div>
        </div>

        {/* Page Title */}
        <div style={{ marginBottom: "1rem" }}>
          <span className="pdf-section-label">Location Guide</span>
          <h1 className="pdf-section-title">
            How to Find Our <span className="pdf-accent">Centre</span>
          </h1>
          <p style={{ fontSize: "11px", color: "#475569", margin: 0, lineHeight: 1.6 }}>
            Reaching our centre in Sharjah is straightforward. Below you will find our location map,
            transport options and driving directions to help you navigate your journey with ease.
          </p>
        </div>

        {/* Map + Location Details — two-column */}
        <div className="pdf-two-col pdf-avoid-break">
          {/* Location Map */}
          <div>
            <span className="pdf-section-label">Location Map</span>
            <div className="pdf-map-wrap">
              <Image
                src="/images/about-us/TEPTH-Sharjah-Location-Map.jpg"
                alt="TEPTH Sharjah Location Map"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Address + Map Notes */}
          <div style={{ paddingTop: "18px" }}>
            <p style={{ fontSize: "11px", lineHeight: 1.65, color: "#475569", marginBottom: "0.75rem" }}>
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
            </p>

            {/* Address card */}
            <div style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              padding: "0.65rem 0.85rem",
              fontSize: "11px",
              lineHeight: 1.7,
              color: "#475569",
            }}>
              <div style={{ fontWeight: 900, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#1a1a1a", marginBottom: "4px" }}>
                📍 Full Address
              </div>
              Tabarak Tower, Suite 701, 7th Floor<br />
              Corniche Road, Al Mamzar<br />
              Sharjah, United Arab Emirates
            </div>

            <div style={{ marginTop: "0.65rem", fontSize: "11px", lineHeight: 1.65, color: "#475569" }}>
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>Phone: </span>+971 6 553 1250<br />
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>Taxi (Sharjah): </span>600-525-252
            </div>
          </div>
        </div>

        <hr className="pdf-divider" />

        {/* Transport Options */}
        <div className="pdf-avoid-break">
          <span className="pdf-section-label">Movement &amp; Access</span>
          <h2 className="pdf-section-title" style={{ fontSize: "13px" }}>
            Ways to <span className="pdf-accent">Reach Us</span>
          </h2>

          {/* 01 Taxicab */}
          <div className="pdf-transport-item">
            <span className="pdf-transport-num">01</span>
            <div className="pdf-transport-body">
              <div className="pdf-transport-title">By Taxicab</div>
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
            </div>
            <div style={{ clear: "both" }} />
          </div>
        </div>

        {/* ── Page 2 ─────────────────────────────────────────────────────── */}
        <div className="pdf-page-break">

          {/* Repeat mini-header on page 2 */}
          <div className="pdf-header" style={{ marginBottom: "1rem" }}>
            <div className="pdf-header-logo">
              <Image
                src="/images/tepth-logo.png"
                alt="TEPTH Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="pdf-header-contact">
              <strong>How to Find Us — Continued</strong>
              Tabarak Tower, Suite 701, Sharjah, UAE<br />
              Tel: +971 6 553 1250
            </div>
          </div>

          {/* Driving Directions */}
          <div className="pdf-avoid-break">
            <span className="pdf-section-label">Driving Directions</span>
            <h2 className="pdf-section-title" style={{ fontSize: "13px" }}>
              Get <span className="pdf-accent">Directions</span>
            </h2>

            {routes.map((route, idx) => (
              <div key={idx} className="pdf-route-item">
                <div className="pdf-route-num">0{idx + 1}</div>
                <div>
                  <div className="pdf-route-from">From {route.from}</div>
                  <div className="pdf-route-text">{route.text}</div>
                </div>
              </div>
            ))}
          </div>

          <hr className="pdf-divider" />

          {/* Parking Information */}
          <div className="pdf-parking-box">
            <div className="pdf-parking-title">🅿 Parking Information</div>

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
            </p>
          </div>

          {/* Footer */}
          <div className="pdf-footer">
            <div>
              <span className="pdf-footer-brand">TEPTH — The Exam Preparation &amp; Testing House L.L.C</span><br />
              Tabarak Tower, Suite 701, Corniche Rd, Al Mamzar, Sharjah, UAE
            </div>
            <div style={{ textAlign: "right" }}>
              +971 6 553 1250<br />
              www.tepth.com
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
