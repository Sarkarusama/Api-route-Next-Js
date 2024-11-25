import PostCard from "@/components/PostCard"

export interface Post {
  userId :number
  id:number
  title:string
  body:string
}

export default async function Home() {
  try {
    const response = await fetch("http://localhost:3000/api/external");
  
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  
    const data = await response.json();
    const posts: Post[] = data.data;
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-8 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} body={post.body} title={post.title} />
        ))}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Something went wrong</div>;
  }
  
}
