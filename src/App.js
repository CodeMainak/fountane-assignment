import axios from "axios";
import { useState } from "react";

import "./App.css";
import ScrollableList from "./components/ScrollableList";

function App() {
  const [posts, setPosts] = useState([]);
  const [posts2, setPosts2] = useState([]);
  const [start, setStart] = useState(0);
  const [start2, setStart2] = useState(0);
  const [limit] = useState(6);

  const URL = "https://jsonplaceholder.typicode.com/photos";

  const handleDataFetch = (curStart, curSetStart, curSetPosts, curPosts) => {
    fetehData(curStart, curSetPosts, curPosts);
    curSetStart((prev) => prev + limit);
  };

  const fetehData = async (newStart, setPostsHandler, curPosts) => {
    const res = await axios.get(`${URL}?_limit=${limit}&_start=${newStart}`);
    const newPosts = curPosts.concat(res.data);
    setPostsHandler(newPosts);
  };
  const showData = (posts, url) =>
    posts.map((post) => (
      <div className="card" key={post.id}>
        <div className="card_id">{post.id}</div>
        <div>
          <span className="card_title">{post.title}</span>
        </div>
        <div>{post.body}</div>
        <img src={url} alt="img1" />
      </div>
    ));
  return (
    <div>
      <header>
        <h1>Fountane Assignment</h1>
        <button
          onClick={(e) => {
            handleDataFetch(start, setStart, setPosts, posts);
            handleDataFetch(start2, setStart2, setPosts2, posts2);
          }}
        >
          Get List Data
        </button>
      </header>
      <div className="App">
        <ScrollableList
          posts={posts}
          start={start}
          handleDataFetch={handleDataFetch}
          setStart={setStart}
          setPosts={setPosts}
          showData={showData}
          url="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/gjs45tij6qkr1klstmwf"
        />
        <ScrollableList
          posts={posts2}
          start={start2}
          handleDataFetch={handleDataFetch}
          setStart={setStart2}
          setPosts={setPosts2}
          showData={showData}
          url="https://media.glassdoor.com/sql/2073019/fountane-squarelogo-1569868822139.png"
        />
      </div>
    </div>
  );
}

export default App;
