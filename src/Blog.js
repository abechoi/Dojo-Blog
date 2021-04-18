const  = () => {
  return <div className="blog-prev" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>;
}
 
export default ;