export default function OnlineClass({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Online Class for Course: {params.id}</h1>
    </main>
  );
}
