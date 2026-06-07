import Link from "next/link";

export default function CaelInfo() {
  return (
    <div>
      <h2 className="text-4xl font-semibold text-primary mb-4">CAEL Information</h2>
      <div className="bg-primary/5 border border-primary/10 rounded-md p-6 max-w-2xl">
        <div className="space-y-3">
          <p className="text-sm text-justify">
            The CAEL (Canadian Academic English Language) Test is a computer-based test
            designed to measure the English proficiency of students planning to study at
            Canadian universities and colleges. Unlike general English tests, CAEL simulates the
            language use required in a first-year Canadian post-secondary environment,
            involving tasks like listening to a lecture or writing an essay based on academic
            readings.
            The CAEL test is administered at TEPTH Dubai not at our centre in Sharjah. To see
            the available test dates and book the test directly with the exam provider.
          </p>
          <div className="bg-white/50 rounded-md p-3 border border-primary/10">
            <p className="text-base font-bold text-primary">
              Important Notice:
            </p>
            <p className="text-sm mt-1">
              The CAEL test is administered at **TEPTH Dubai**, not at our
              Sharjah centre.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <Link
              href="https://cael.ca/centre/tepth/"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white font-bold text-xs capitalize rounded-md hover:bg-secondary transition-colors"
            >
              Book Now
            </Link>
            <div className="text-[12px]">
              Questions? Call{" "}
              <span className="text-secondary font-bold">+97165531250</span>{" "}
              or email{" "}
              <span className="text-secondary font-bold">info@tepth.org</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
