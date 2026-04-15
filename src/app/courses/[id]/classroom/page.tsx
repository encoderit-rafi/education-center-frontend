export default function Classroom({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Classroom for Course: {params.id}</h1>
    </main>
  );
}
