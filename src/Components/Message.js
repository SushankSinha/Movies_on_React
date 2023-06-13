import Counter from "./Counter";
import {useState} from 'react'
const Message = ({ movieName, poster, rating, summary }) => {
  // const nickName = "Mahi";
  // const personName = "Welcome to my Profile!";
  const [show,setShow]=useState(true)

  // Conditional Styling

  // if else
  // conditiontrue?true:false
  
  const toggleSummary={
      display:show?"block":"none"
  }
  return (
    <div className="main">
      <div className="profile">
        <img className="poster" src={poster} alt="" />
        <div className="movieSpecs">
          <h5 className="movieName"> {movieName} </h5>
          <button type="button" class="downBtn"
          onClick={()=>{
            setShow(!show)
        }}
>
            <span role="img" aria-label="rating">
              🔽
            </span>
          </button>
          <h5 className="rating">
            <span role="img" aria-label="rating">
              ⭐
            </span>
            {rating}
          </h5>
          <br />
          <p className="summary" style={toggleSummary}> {summary} </p>
          <Counter />
        </div>
      </div>
    </div>
  );
};
export default Message;
