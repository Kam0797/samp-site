import {useState} from 'react'
import "./Testims.css"

export default function Testims() {
  const [testimIndex,setTestimIndex] = useState(0);
  const fakeLines = [
    {
  line: "Best tacos i've ever had!",
      poet: "Robert Fisher",
      pic: ""
    },
    {
      line: "They fixed my power-hunger!",
      poet: "Al gates",
      pic: ""
    },
    {
      line: "The Wierder, the wierdest",
      poet: "Wierdus Torvalds",
      pic: ""
    },
    {
line: "It's wierd, but not so. You don't know until you see for yourself.",
      poet: "Heisenberg",
      pic: ""
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
  return(
    <>
      <div className="section-title">They testified!</div>
      <div className="testims-top-level-wrapper">
        <div className="testims-wrapper">
          <button className="prev-testim-button" id="prev-testim" onClick={changeTestim}></button>
          {
            // fakeLines.map((fline,index)=>(
              <div key="{index}" className="testim-card">
                <div className="testim-pic"></div>
                <div className="testim-line-poet-wrap">
                  <div className="testim-line">{fakeLines[testimIndex].line}</div>
                  <div className="testim-poet">{fakeLines[testimIndex].poet}</div>
                </div>
              </div>
            // ))
          }
          <button className="next-testim-button" id="next-testim" onClick={changeTestim}></button>
        </div> 
      </div>
    </>
  )
}
