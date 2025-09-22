import {useState, useRef, useEffect} from 'react'
import "./Testims.css"
import { useSwipeable } from 'react-swipeable';

import TestimPrevArrow from "../../assets/testim-prev-arrow.svg?react";
import TestimNextArrow from "../../assets/testim-next-arrow.svg?react";

const imgPath = "/samp-site/pics/";
// import Fisher from `{iconPath+fakeLines[0][pic]}`

export default function Testims() {
  const [testimIndex,setTestimIndex] = useState(0);
  const fakeLines = [
    {
  line: "Best gamebox i've ever had!",
      poet: "Robert Fisher",
      pic: "fisher.jpg"
    },
    {
      line: "They fixed my power-hunger!",
      poet: "Al gates",
      pic: "bill.jpg"
    },
    {
      line: "The Wierder, the wierdest",
      poet: "Wierdus Torvalds",
      pic: "linus.jpg"
    },
    {
line: "It's wierd, but not so. You don't know until you see for yourself.",
      poet: "Heisenberg",
      pic: "heisenberg.png"
    }
  ];
  const testimCardRef = useRef(null)
  const testimSwipeDirection = useRef(null)
  

  const testimSwipes = useSwipeable({
    onSwipedLeft: ()=> {
      testimSwipeDirection.current = 'left'
      changeTestim({currentTarget:{id:"next-testim"}});
    },
    onSwipedRight: ()=> {
      testimSwipeDirection.current = 'right'
      changeTestim({currentTarget:{id:"prev-testim"}})
    }
  });
  function changeTestim(e) {

    // use useEffect to add class for slide animation. proceeding to stash-commit


    if (e.currentTarget.id == "prev-testim") {
      if(testimIndex > 0){
        setTestimIndex(ind => ind-1)
      }
      else{
        setTestimIndex(fakeLines.length-1)
      }
    }
    else if(e.currentTarget.id == "next-testim") {
      if (testimIndex < fakeLines.length-1){
        setTestimIndex(ind => ind+1)
      }
      else {
        setTestimIndex(0)
      }
    }
  }

  useEffect(()=> {
    const testimCard = document.querySelector(".testim-card")
    const animationClass = testimSwipeDirection.current == 'left' ? 'testim-card-animation-left': 'testim-card-animation-right';

    console.log("tc3",testimCard,testimIndex, testimSwipeDirection, animationClass)

    testimCard?.classList.add(animationClass);
    setTimeout(()=> testimCard?.classList.remove(animationClass),1000)
  },[testimIndex])
  return(
    <>
      <div className="section-title" id="testims">Our clients say :</div>
        <div className="testims-wrapper">
          <button className="prev-testim-button" id="prev-testim" onClick={(e) => {testimSwipeDirection.current = 'left'; changeTestim(e);}}><TestimPrevArrow /></button>
          {
              <div id={testimIndex} key={testimIndex} ref={testimCardRef} className="testim-card" {...testimSwipes}>
                <div className="testim-pic"><img className="testim-img" src={imgPath+fakeLines[testimIndex].pic} alt={fakeLines[testimIndex].pic} /></div>
                <div className="testim-line-poet-wrap">
                  <div className="testim-line">{fakeLines[testimIndex].line}</div>
                  <div className="testim-poet">{"- "+fakeLines[testimIndex].poet}</div>
                </div>
              </div>
          }
          <button className="next-testim-button" id="next-testim" onClick={(e) => {testimSwipeDirection.current = 'right'; changeTestim(e);}}><TestimNextArrow /></button>
        </div> 
    </>
  )
}
