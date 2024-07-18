import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Project.css";
import shape from "../../../src/img/Project/shape-bg.png";
import project1 from "../../../src/img/Project/project-5.png";
import project3 from "../../../src/img/Project/project-4.png";
import project2 from "../../../src/img/Project/project-10.png";

export default function Projects() {
 
  const projectsDetails = [
    {
      title: "Minimal Admin Dashboard",
      img: project1,
      description:
        "Minimal Admin Dashboard for Small scale business to moniter our sales",
      subHeading: "Technologies Used: React JS",
      link: "https://muhammadfazilsl.github.io/dashboard-demo-1/"
    }, 
     {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      img: project2,
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
    {
      title: "CRM Project",
      img: project3,
      description:
        "CRM Dashboard for Small scale business to moniter our sales",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
      link: "https://muhammadfazilsl.github.io/dashboard-2/"
    },
  
  ];

  return (
    <div id="Projects">
      <ScreenHeading
        title={"Projects"}
        subHeading={"What I Am Did"}
      />
      <section className="project-section">
        <div className="container">
          <div className="row">
            {
              projectsDetails.map((projects,index)=>(
                <div key={index} className="project-card">
                  <img src={projects.img} alt="" />
            <div className="project-details">
            <p>{projects.title}</p>
            <p>{projects.description}</p>
            <p>{projects.subHeading}</p>
            { index === 1 ?
              <></>
              :
              <a href={projects.link} target="blank">visit</a>
            }
            </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="image" />
      </div>
    </div>
  
  );
}
