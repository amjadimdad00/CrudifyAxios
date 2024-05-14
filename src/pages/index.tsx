import React from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";
export default function Home() {
  const [post, setPost] = React.useState<any>([]);

  React.useEffect(() => {
    axios.get(`${baseUrl}/4`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseUrl, {
        title: "Wassup Buddy!",
        body: "Created The Post For You!",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function updatePost() {
    axios
      .put(`${baseUrl}/4`, {
        title: "Hey Buddy!",
        body: "Updated The Post For You!",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function deletePost() {
    axios
     .delete(`${baseUrl}/4`)
     .then(() => {
      alert("Post Deleted Successfully!")
        setPost(null);
      })
  }

  if (!post) return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className="flex flex-col justify-center items-center h-screen px-5"
    >
      <div className="text-center bg-[#fff] py-10 px-14 rounded-md">
        <h1 className="font-bold text-[2rem] pb-4">No Post!</h1>
        <div className="flex justify-center gap-1">
          <button
            className="bg-blue-400 p-2 mt-2 rounded-md font-bold hover:bg-blue-500"
            onClick={createPost}
          >
            Create Post
          </button>
          <button
            className="bg-blue-400 p-2 mt-2 rounded-md font-bold hover:bg-blue-500"
            onClick={updatePost}
          >
            Update Post
          </button>
          <button
            className="bg-blue-400 p-2 mt-2 rounded-md font-bold hover:bg-blue-500"
            onClick={deletePost}
          >
            Delete Post
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className="flex flex-col justify-center items-center h-screen px-5"
    >
      <div style={{
        lineHeight: "1.73rem",
      }} className="text-center bg-[#fff] py-10 px-14 rounded-md">
        <h1 className="text-[23px] font-bold">{post.title}</h1>
        <p className="text-[14px]">{post.body}</p>
        <div className="flex justify-center gap-1">
          <button
            className="bg-blue-400 p-2 mt-2 rounded-md font-bold hover:bg-blue-500"
            onClick={createPost}
          >
            Create Post
          </button>
          <button
            className="bg-blue-400 p-2 mt-2 rounded-md font-bold hover:bg-blue-500"
            onClick={updatePost}
          >
            Update Post
          </button>
          <button
            className="bg-blue-400 p-2 mt-2 rounded-md font-bold hover:bg-blue-500"
            onClick={deletePost}
          >
            Delete Post
          </button>
        </div>
      </div>
    </div>
  );
}
