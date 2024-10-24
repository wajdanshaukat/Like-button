import { useState } from "react";
export default function Likebutton() {
  let [isLiked, setIsLiked] = useState(false);
  let [clicks, setClicks] = useState(0);
  let toggleLiked = () => {
    setIsLiked(!isLiked);
    setClicks(clicks + 1);
  };
  return (
    <div>
        <p>clicks : {clicks}</p>
      <p onClick={toggleLiked}>
        {isLiked ? (
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
        ) : (
          <i className="fa-regular fa-heart"></i> 
        )}
      </p>
    </div>
  );
}
