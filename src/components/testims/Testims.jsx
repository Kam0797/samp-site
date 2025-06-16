import {useState} from 'react'
import "./Testims.css"

import TestimPrevArrow from "../../assets/testim-prev-arrow.svg?react";
import TestimNextArrow from "../../assets/testim-next-arrow.svg?react";

const imgPath = "/samp-site/pics/";
// import Fisher from `{iconPath+fakeLines[0][pic]}`

export default function Testims() {
  const [testimIndex,setTestimIndex] = useState(0);
  const fakeLines = [
    {
  line: "Best tacos i've ever had!",
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
  function changeTestim(e) {
    // console.log(e.currentTarget.id);
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
  console.log(imgPath+fakeLines[testimIndex].pic)
  return(
    <>
      <div className="section-title">Our clients say :</div>
        <div className="testims-wrapper">
          <button className="prev-testim-button" id="prev-testim" onClick={changeTestim}><TestimPrevArrow /></button>
          {
            // fakeLines.map((fline,index)=>(
              <div key={testimIndex} className="testim-card">
                <div className="testim-pic"><img className="testim-img" src={imgPath+fakeLines[testimIndex].pic} alt={fakeLines[testimIndex].pic} /></div>
                <div className="testim-line-poet-wrap">
                  <div className="testim-line">{fakeLines[testimIndex].line}</div>
                  <div className="testim-poet">{"- "+fakeLines[testimIndex].poet}</div>
                </div>
              </div>
            // ))
          }
          <button className="next-testim-button" id="next-testim" onClick={changeTestim}><TestimNextArrow /></button>
        </div> 
    </>
  )
}
