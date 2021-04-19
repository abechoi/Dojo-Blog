import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "Mario", id: 1 },
    { title: "Welcome Party", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips!",
      body: "lorem ipsum...",
      author: "Mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect ran");
    console.log(blogs);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
