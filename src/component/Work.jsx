import './WorkCard.css';
import WorkCard from "./WorkCard";
// import WorkCardData from "WorkCardData"
import WorkCardData from './WorkCardData';


const Work = () => {
    return (<div className="Work-container" style={{backgroundColor: "rgb(0, 0, 0, 0.8)"}}> 
    <h1 className="project-heading" style={{color: "aliceblue"}}>Project </h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return (
                    <WorkCard key={ind}
                    imgsrc={val.imgsrc}
                    title = {val.title}
                    text={val.text}
                    view= {val.view}
                    source= {val.source}/>
                )
            })}
        </div>
        </div>)
}

export default Work;