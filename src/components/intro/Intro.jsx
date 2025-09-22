import "./Intro.css";

export default function Intro() {

  // fetch this from server, well that will be alt part
  const [introHeader,introContent] = ["Wierder.","We are a nice company working on a number of things like Servers, PCs and software. \nWe mayn't be so professional, but get the work done, in time. We are eager to work with you!\nFrom now, get your work done - faster and smarter"];
  console.log(introHeader,introContent);

  return(
    <div className="intro">
      <div className="intro-header"  id="about-us">{introHeader}</div>
      <div className="intro-content">{introContent}</div>
    </div>
  )
}
