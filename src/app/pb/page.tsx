import CreatePost from "./CreatePost";

async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30",
    { cache: "no-store" }
    // { next: { revalidate: 5 } }
  );
  const data = await res.json();

  return data?.items as any[];
}

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      <CreatePost />
    </div>
  );
}
