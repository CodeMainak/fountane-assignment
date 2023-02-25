import axios from "axios";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [start, setStart] = useState(0);
  const [limit] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const handleDataFecth = () => {
    let newStart = start + limit;
    setStart((prev) => prev + limit);
    fetehData(newStart);
  };

  // time slicing

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    handleDataFecth();
  };

  const fetehData = async (newStart) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_start=${newStart}`
    );
    if (newStart === start) {
    }
    const newPosts = posts.concat(res.data);
    setPosts(newPosts);
  };

  return (
    <div>
      <button onClick={(e) => handleDataFecth()}>Get Next</button>
      <div className="App">
        <div className="first_container">
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height={400}
          >
            {posts.length}
            {posts.map((post) => (
              <div className="card">
                <div key={post.id}>
                  <span>{post.title}</span>
                </div>
                <img src={post.url} alt="img1" />
              </div>
            ))}
          </InfiniteScroll>
        </div>
        <div className="first_container">
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height={400}
          >
            {posts.length}
            {posts.map((post) => (
              <div className="card">
                <div key={post.id}>
                  <span>{post.title}</span>
                </div>
                <img src={post.url} alt="img1" />
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default App;
