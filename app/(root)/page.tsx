import SearchForm from "@/components/SearchForm";
import {STARTUP_QUERY} from "@/sanity/lib/queries";
import {StartupCard, StartupTypeCard} from "@/components/StartupCard";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";

export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const {query} = await searchParams;
  const {data: startups} = await sanityFetch({query:STARTUP_QUERY});//revalidate whenever changes are made
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
          {query ? `Search results for ${query}` : 'All Startups'}</p>
          <ul className="mt-7 card_grid">
            {startups?.length > 0 ? (startups.map((startup : StartupTypeCard) => {
              return (
                  <StartupCard key={startup._id} startup={startup}/>
              );
            })) : <p>No startups found.</p>}
          </ul>

      </section>
      <SanityLive />
    </>
  );
}
