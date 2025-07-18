import Link from "next/link";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
export default async function Posts() {
  const data = await getPosts();
  return (
    <div className="grid grid-cols-4 gap-6">
      {data.map((post, index) => {
        return (
          <div key={index} className="border">
            <p>{post.id}</p>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/posts/${post.id}`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
}
