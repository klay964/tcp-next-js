async function getOnePost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function PostPage({ params }) {
  const post = await getOnePost(params.id);

  return (
    <div>
      <h1>Posts/{post.id}</h1>
      <div>
        <h3>Title:{post.title}</h3>
        <p>Body:{post.body}</p>
      </div>
    </div>
  );
}
