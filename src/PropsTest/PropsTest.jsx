import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    {
      title: 'No NOOO NOO!!!!',
      body: 'lorem...',
      author: 'Luigi',
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title="All Blogs"
      /> */}
    </div>
  );
};

export default Home;
