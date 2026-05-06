export default function ExperienceExcellence() {
  return (
    <section className="base-px base-py relative overflow-hidden ">
      <div className="section-container flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content Block */}
        <div className="flex-1 space-y-8">
          <h2 className="section-label">Experience Our Excellence</h2>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-secondary leading-tight">
              Comprehensive Exam Services from Highly-Qualified Instructors
            </h2>
            <p className="text-base text-on-surface-variant leading-relaxed">
              TEPTH is a renowned UAE-based institution that helps students in
              preparing for and undertaking different international aptitude
              tests in order to meet admission requirements. We provide expert
              guidance for various English-based examinations and assessments,
              in addition to facilitating the registration, booking, and
              preparation for the tests.
            </p>
            <p className="text-2xl font-headline font-bold text-primary italic">
              Ace the Test, Secure Your Future.
            </p>
          </div>
        </div>
        {/* Right Media Block */}
        <div className="flex-1 w-full space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border-4 border-white">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.youtube.com/embed/Fg26wJ1lPOE"
              title="TEPTH Testing Center"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
