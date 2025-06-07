import "./Intro.css";

export default function Intro() {

  // fetch this from server, well that will be alt part
  const [introHeader,introContent] = ["A Good Company","We are a nice company working on a number of things like donuts, tacos and dr..umsticks. We mayn't be so professional, but get the work done, in time. We are eager to work with you!"];
  console.log(introHeader,introContent);

  return(
    <div className="intro">
      <div className="intro-header">{introHeader}</div>
      <div className="intro-content">{introContent}</div>
    </div>
  )
}
