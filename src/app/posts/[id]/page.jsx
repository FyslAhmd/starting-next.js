export const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

export default async function SinglePost({ params }) {
  const p = await params;
  const SinglePost = await getSinglePost(p.id);

  return (
    <div>
      <p>{SinglePost.id}</p>
      <h1>{SinglePost.title}</h1>
      <p>{SinglePost.body}</p>
    </div>
  );
}
