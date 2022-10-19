import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.jpg",
    name: "Analysing Football Games using Neural Networks",
  },
  {
    img: "img/projects/project-2.jpg",
    name: "Plastic Waste: Visualised using R",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "Analysis of Consumer Behaviour using Unsupervised Machine Learning",
    format: "img",
  },
  {
    img: "img/projects/project-3.jpg",
    name: "On the Ethical Nature of Recidivism Algorithms",
    format: "img",
  },
  {
    img: "img/projects/project-4.jpg",
    name: "Predicting the Popularity of Music using Regression Analysis",
    format: "img",
  },
  {
    img: "img/projects/project-5.jpg",
    name: "Binary Classification of Multidimensional Data using Random Forests and Neural Networks",
    format: "img",
  },
  {
    img: "img/projects/project-6.jpg",
    name: "Modelling the Propagation of Fake News on Twitter",
    format: "img",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "‘Lapdog’ Media: Examining the Political Biases of the Times of India during the 2019 Indian General Elections",
    format: "img",
  },
  {
    img: "img/projects/project-7.jpg",
    name: "Analysis of the coverage of the 2019 Venezuelan Crisis",
    format: "img",
  },
  {
    img: "img/projects/project-7.jpg",
    name: "Revolutions and Power: The Impact of the French Revolution and the Paris Commune",
    format: "img",
  },
  {
    img: "img/projects/project-8.jpg",
    name: "Analysis of the coverage of the Syrian Civil War",
    format: "img",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "History of the Venezuelan Crisis, Explained",
    format: "img",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "Mediatisation of Politics: the Iraq War and Occupy Wall Street",
    format: "img",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "Moral Panic in Practice: Analysing Indian Media Coverage on the 2016 Uri Attack",
    format: "img",
  },
  {
    img: "img/projects/project-9.jpg",
    name: "Feel the Bern: A Critical Analysis of Sen. Sanders’ 2016 Presidential Campaign",
    format: "img",
  }
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              my <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
              a sample of my work
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>

                <a href="#" className="btn">
                  <span>
                    <i className="fa fa-external-link" />
                    View
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
