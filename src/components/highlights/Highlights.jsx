import PersonExec from "../../assets/person-exec.svg?react"; 
import CardIcon1 from "../../assets/card-icon1.svg?react";
import './Highlights.css'
import { LucideAward, LucideEarth, LucideHandPlatter, LucidePlane, LucideRocket, LucideSmilePlus, LucideTimer, LucideTrophy, LucideUsers } from "lucide-react";
import { IconCactus, IconCube3dSphere, IconCube3dSphereOff, IconCubeSend, IconCubeSpark } from "@tabler/icons-react";


export default function Highlights() {
  
  const iconPath = "../../assets/";
  const highlightsData = [
    {
      caption: "Operating in 27+ countries",
      icon: <LucideEarth size={65} strokeWidth={1} className="card-icon-right" />
    },
    {
      caption: "34000+ employees",
      icon: <LucideUsers size={65} strokeWidth={1} className="card-icon-right"/>
    },
    {
      caption: "#1 in SoC benchmarks 2021",
      icon: <LucideTrophy size={65} strokeWidth={1} className="card-icon-right" />
    },
    {
      caption: "Fastest SSD of the year Award",
      icon: <LucideAward size={65} strokeWidth={1} className="card-icon-right" />
    },
    {
      caption: "17M+ machines delivered",
      icon: <IconCubeSpark size={65} strokeWidth={1} className="card-icon-right" />
    },
    {
      caption: "Fastest deliveries in the world*",
      icon: <IconCubeSend size={65} strokeWidth={1} className="card-icon-right" />
    },
    {
      caption: "First network provider in Mars",
      icon: <LucideRocket size={65} strokeWidth={1} className="card-icon-right" />
    },
    // {
    //   caption: "Only Burger retailer in pyoengyang",
    //   icon: <NorthKor />
    // },
    {
      caption: "3M+ happy customers",
      icon: <LucideSmilePlus size={65} strokeWidth={1} className="card-icon-right" />
    }
  ]

  /* for(card of highlightsData) */
  return (
    <>
      <div className="section-title highlights-title" id="highlights">
        Highlights
      </div>
      <div className="highlights-wrapper">
        {
          highlightsData.map((cardData,index)=> (
              <div key={index} className={"card card"+index} >
                {cardData.icon||<CardIcon1 />}
                <p className="card-caption">{cardData.caption}</p>
              </div>
            )
          )
        }
      </div>
    </>
  )
}


    // <PersonExec className="person-exec-full"/>
            // <img src={iconPath+cardData.icon} alt={"image"+index} />

