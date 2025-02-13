import SearchForm from "@/components/SearchForm";
import {client} from "@/sanity/lib/client";
import {STARTUP_QUERY} from "@/sanity/lib/queries";
export default async function Home({searchParams}: {searchParams: Promise<{query?: string}>}) {
  const {query} = await searchParams;
  const startup = await client.fetch(STARTUP_QUERY);
  console.log('startup', startup);
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
    </>
  );
}
