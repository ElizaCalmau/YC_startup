import SearchForm from "@/components/SearchForm";
import {client} from "@/sanity/lib/client";
import {STARTUP_QUERY} from "@/sanity/lib/queries";
import {StartupCard} from "@/components/StartupCard";
export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const {query} = await searchParams;
  const startups = await client.fetch(STARTUP_QUERY);
  console.log('startup', startups);
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : 'All Startups'}
          <ul className="mt-7 card_grid">
            {startups?.length > 0 ? (startups.map((startup: StartupCardType, index: number) => (
                <StartupCard key={startup._id} startup={startup} />
            ))) : <p>No startups found.</p>}
          </ul>
          </p>
      </section>
    </>
  );
}
