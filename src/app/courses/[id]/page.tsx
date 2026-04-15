export default function CourseDetails({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Course Details: {params.id}</h1>
    </main>
  );
}
