import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Adrian",
        image: "https://picsum.photos/100" 
      },
      _id: 1,
      description: "This is a description",
      image: "https://picsum.photos/1200/600",
      category: "Robots",
      title: "We Robots"
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, Connect With Enterpreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
           <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  )
}