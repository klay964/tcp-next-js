'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        body: content,
        userId: 1,
      }),
    });

    setContent('');
    setTitle('');

    router.refresh();
  };

  return (
    <form onSubmit={create}>
      <h3>Create a new post</h3>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder='Content'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type='submit'>Create post</button>
    </form>
  );
}
