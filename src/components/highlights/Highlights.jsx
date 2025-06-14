import PersonExec from "../../assets/person-exec.svg?react"; 
import CardIcon1 from "../../assets/card-icon1.svg?react";
// import CardIcon1 from "../../assets/card-icon1.png"
import './Highlights.css'


export default function Highlights() {
  
  const iconPath = "../../assets/";
  const highlightsData = [
    {
      caption: "Operating in 27+ countries",
      icon: "card-icon1.svg"
    },
    {
      caption: "34000+ employees",
      icon: "card-icon2.svg"
    },
    {
      caption: "Award-winning Tacos™",
      icon: "card-icon3.svg"
    },
    {
      caption: "CheeseBiscuit of the year Award",
      icon: "card-icon4.svg"
    },
    {
      caption: "17M+ orders delivered",
      icon: "card-icon5.svg"
    },
    {
      caption: "Fastest deliveries in the world*",
      icon: "card-icon6.svg"
    },
    {
      caption: "First taco chain in Mars",
      icon: "card-icon7.svg"
    },
    {
      caption: "Only Burger retailer in pyoengyang",
      icon: "card-icon8.svg"
    },
    {
      caption: "3M+ happy customers",
      icon: "card-icon9.svg"
    }
  ]

  /* for(card of highlightsData) */
  return (
  <div className="highlights-wrapper">
    {
      highlightsData.map((cardData,index)=> (
          <div key={index} className={"card card"+index} >
          <CardIcon1 />
            <p className="card-caption">{cardData.caption}</p>
          </div>
        )
      )
    }
  </div>
  )
}


    // <PersonExec className="person-exec-full"/>
            // <img src={iconPath+cardData.icon} alt={"image"+index} />

