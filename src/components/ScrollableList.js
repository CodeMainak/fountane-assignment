import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function ScrollableList({
  posts,
  start,
  handleDataFetch,
  setStart,
  setPosts,
  showData,
  url,
}) {
  return (
    <div className="first_container">
      <InfiniteScroll
        dataLength={posts.length}
        next={(e) => handleDataFetch(start, setStart, setPosts, posts)}
        hasMore={start <= 4995}
        loader={posts.length > 0 && <h4>Loading...</h4>}
        height={400}
      >
        {posts.length > 0 && showData(posts, url)}
      </InfiniteScroll>
    </div>
  );
}

export default ScrollableList;
