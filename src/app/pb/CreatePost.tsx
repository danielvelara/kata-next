"use client";

import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");

  const createPost = async (e: any) => {
    e.preventDefault();
    const res = await fetch(
      "http://127.0.0.1:8090/api/collections/posts/records",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
        // body: JSON.stringify({ title }),
      }
    );
    console.log(JSON.stringify({ title }));
  };

  return (
    <>
      <form onSubmit={createPost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-black"
        />
        <button className="" type="submit">
          Create posts
        </button>
      </form>
    </>
  );
}
