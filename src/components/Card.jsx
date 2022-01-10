import React, { useState , useEffect } from "react";
import fbImg from "../images/Facebook.png";
import twitterImg from "../images/twitter.png";
import redditImg from "../images/reddit.png";
import "../styles/card.css";

function Card(props) {

  const [state, setState] = useState(false);


  const toggle = () => {
    setState(!state);
  };
  

  return (
    <div className="Card">
        <img  src={props.img} alt="nasa" />
        <div className="info" >
          <h4>{props.title}</h4>
          <br />
          <h5>{props.eDate}</h5>
          <br />
          <div className="btn-container">
            <button
              name="like"
              onClick={toggle}
              className={state ? "toggle-btn" : ""}
            >
              Like
            </button>
            <a
              target="_blank"
              href={`https://www.facebook.com/sharer.php?u=${props.img}`}
            >
              <button>
                <img src={fbImg} alt="Facebook" />
              </button>
            </a>
            <a
              target="_blank"
              href={`https://twitter.com/share?url=${props.img}`}
            >
              <button>
                <img src={twitterImg} alt="twitter" />
              </button>
            </a>
            <a
              target="_blank"
              href={`https://reddit.com/submit?url=${props.img}`}
            >
              <button>
                <img src={redditImg} alt="reddit" />
              </button>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Card;
