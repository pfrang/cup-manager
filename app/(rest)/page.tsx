import { getAllMatches } from "@/lib/sanity/queries/match";

export default async function Home() {
  const matches = await getAllMatches();
  return (
    <div className="flex flex-col h-full items-center justify-center p-24">
      {matches.map((match) => (
        <div key={match._id}>
          <h2>{match.title}</h2>
        </div>
      ))}
    </div>
  );
}
