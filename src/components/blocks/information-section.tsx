const data = [
  {
    label: "Exams Offered",
    value: "10+",
  },
  {
    label: "Course Types",
    value: "4",
  },
  {
    label: "Mock Test Results",
    value: "72h",
  },
  {
    label: "Registered Centre",
    value: "UAE",
  },
];
function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-6 text-center">
      <p className="text-primary text-3xl font-bold leading-none tracking-tight text-maroon-700 sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-xs font-medium text-gray-600 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default function InformationSection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:divide-x lg:divide-[#F1E7E7] md:grid-cols-4 divide-y-0">
          {data.map((item, index) => {
            return (
              <InfoItem key={index} label={item.label} value={item.value} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
