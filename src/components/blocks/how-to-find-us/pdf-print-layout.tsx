import Image from "next/image";
import { useTranslations } from "next-intl";

export function PdfPrintLayout() {
  const t = useTranslations("AboutUsPage.HowToFindUs");
  const routes = t.raw("DrivingDirections.routes");

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
              width: 220px !important;
              height: 77px !important;
            }
            .pdf-header-contact {
              text-align: left !important;
              font-size: 10px !important;
              line-height: 1.5 !important;
              color: #334155 !important;
              background: #fafafb !important;
              border: 1px solid #e2e8f0 !important;
              border-left: 3.5px solid #991b1b !important;
              border-radius: 6px !important;
              padding: 10px 14px !important;
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02) !important;
              max-width: 290px !important;
              box-sizing: border-box !important;
            }
            .pdf-header-contact strong {
              display: block !important;
              font-size: 11px !important;
              font-weight: 800 !important;
              color: #991b1b !important;
              margin-bottom: 6px !important;
              text-transform: uppercase !important;
              letter-spacing: 0.03em !important;
            }
            .pdf-header-contact-details {
              display: flex !important;
              flex-direction: column !important;
              gap: 2px !important;
            }
            .pdf-header-contact-details span {
              display: block !important;
            }
            .pdf-header-contact-meta {
              display: flex !important;
              flex-wrap: wrap !important;
              gap: 10px !important;
              margin-top: 6px !important;
              padding-top: 6px !important;
              border-top: 1px dashed #e2e8f0 !important;
              font-size: 9.5px !important;
            }
            .pdf-header-contact-meta strong {
              display: inline !important;
              color: #334155 !important;
              font-size: 9.5px !important;
              text-transform: none !important;
              letter-spacing: normal !important;
              margin-bottom: 0 !important;
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
            <strong>{t("Pdf.companyName")}</strong>
            <div className="pdf-header-contact-details">
              <span>{t("Pdf.addressL1")}</span>
              <span>{t("Pdf.addressL2")}</span>
              <div className="pdf-header-contact-meta">
                <span><strong>{t("Pdf.tel")}:</strong> +971 6 553 1250</span>
                <span><strong>{t("Pdf.web")}:</strong> www.tepth.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <div style={{ marginBottom: "1rem" }}>
          <span className="pdf-section-label">{t("HeroSection.badge")}</span>
          <h1 className="pdf-section-title">
            {t("HeroSection.title")} <span className="pdf-accent">{t("HeroSection.titleAccent")}</span>
          </h1>
          <p style={{ fontSize: "11px", color: "#475569", margin: 0, lineHeight: 1.6 }}>
            {t("HeroSection.description")}
          </p>
        </div>

        {/* Map + Location Details — two-column */}
        <div className="pdf-two-col pdf-avoid-break">
          {/* Location Map */}
          <div>
            <span className="pdf-section-label">{t("MapSection.badge")}</span>
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
              {t("MapSection.p1")} {t("MapSection.p2")}
            </p>
            <p style={{ fontSize: "11px", lineHeight: 1.65, color: "#1a1a1a", fontWeight: 700, marginBottom: "0.75rem" }}>
              {t("Pdf.destinationPrefix")}
              <span className="pdf-accent">
                {t("Pdf.companyName")}
              </span>
              {t("Pdf.destinationSuffix")}
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
                {t("Pdf.fullAddressBadge")}
              </div>
              {t("Pdf.fullAddressL1")}<br />
              {t("Pdf.fullAddressL2")}<br />
              {t("Pdf.fullAddressL3")}
            </div>

            <div style={{ marginTop: "0.65rem", fontSize: "11px", lineHeight: 1.65, color: "#475569" }}>
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>{t("Pdf.phoneLabel")} </span>+971 6 553 1250<br />
              <span style={{ fontWeight: 700, color: "#1a1a1a" }}>{t("Pdf.taxiLabel")} </span>600-525-252
            </div>
          </div>
        </div>

        <hr className="pdf-divider" />

        {/* Transport Options */}
        <div className="pdf-avoid-break">
          <span className="pdf-section-label">{t("Transportation.badge")}</span>
          <h2 className="pdf-section-title" style={{ fontSize: "13px" }}>
            {t("Transportation.title")} <span className="pdf-accent">{t("Transportation.titleAccent")}</span>
          </h2>

          {/* 01 Taxicab */}
          <div className="pdf-transport-item">
            <span className="pdf-transport-num">01</span>
            <div className="pdf-transport-body">
              <div className="pdf-transport-title">{t("Transportation.taxicabTitle")}</div>
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
              <strong>{t("Pdf.continued")}</strong>
              <div className="pdf-header-contact-details">
                <span>{t("Pdf.addressL1")}, {t("Pdf.addressL2")}</span>
                <div className="pdf-header-contact-meta">
                  <span><strong>{t("Pdf.tel")}:</strong> +971 6 553 1250</span>
                </div>
              </div>
            </div>
          </div>

          {/* Driving Directions */}
          <div className="pdf-avoid-break">
            <span className="pdf-section-label">{t("DrivingDirections.badge")}</span>
            <h2 className="pdf-section-title" style={{ fontSize: "13px" }}>
              {t("DrivingDirections.title")}
            </h2>

            {routes.map((route: any, idx: number) => (
              <div key={idx} className="pdf-route-item">
                <div className="pdf-route-num">0{idx + 1}</div>
                <div>
                  <div className="pdf-route-from">{t("Pdf.from")} {route.from}</div>
                  <div className="pdf-route-text">{route.text}</div>
                </div>
              </div>
            ))}
          </div>

          <hr className="pdf-divider" />

          {/* Parking Information */}
          <div className="pdf-parking-box">
            <div className="pdf-parking-title">{t("Pdf.parkingInfo")}</div>

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
            </p>
          </div>

          {/* Footer */}
          <div className="pdf-footer">
            <div>
              <span className="pdf-footer-brand">{t("Pdf.footerBrand")}</span><br />
              {t("Pdf.footerAddress")}
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
