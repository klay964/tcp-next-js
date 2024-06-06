import Link from 'next/link';
import CreatePost from './CreatePost';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

export default async function Posts() {
  const data = await getPosts();
  return (
    <>
      <CreatePost />
      <h1 className='bg-red-500'>Posts</h1>
      {data.map((post, i) => (
        <li className='my-2'>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </>
  );
}
