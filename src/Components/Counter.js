import { useState } from "react";

const Counter = () => {
  // let like = 0;
  // let dislikeCount = 0;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <span role="img" aria-label="like">
          👍
        </span>
        {like}
      </button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        <span role="img" aria-label="dislike">
          👎
        </span>
        {dislike}
      </button>
    </div>
  );
};

export default Counter;
