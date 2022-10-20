import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
        I like analysing things.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/ph1.png"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
            My name is Advait Varma - or Advyt for short - and {`I'm`} a data science postgraduate based in the UK.
            With a combination of my unique academic background in the social sciences,
            as well as my expertise in data science, I like to analyse data through a truly multi-dimensional approach.
            In other words, I just like analysing things and finding ways to communicate my analysis in the clearest ways possible.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">Name:</span>
                    Advait Varma
                  </h6>
                </li>

                <li>
                  <h6>
                    <span className="font-weight-600">Nickname:</span>
                    Advyt
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate:</span>
                    21 September 1999
                  </h6>
                </li>

                <li>
                  <h6>
                    <span className="font-weight-600">Nationality:</span>
                    Indian
                  </h6>
                </li>

                <li>
                  <h6>
                    <span className="font-weight-600">Address:</span>
                    Newcastle, UK
                  </h6>
                </li>

              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">

              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Languages:</span>
                    English, Hindi, Marathi, Urdu
                  </h6>
                </li>

                <li>
                  <h6>
                    <span className="font-weight-600">Phone:</span>
                    +44 7907 433165
                  </h6>
                </li>

                <li>
                  <h6>
                    <span className="font-weight-600">Email:</span>
                    advyt@outlook.com
                  </h6>
                </li>

                <li>
                  <h6>
                    <span className="font-weight-600">Skype:</span>
                    advyt.varma
                  </h6>
                </li>

                <li>
                  <h6>
                    <span className="font-weight-600">Dribbble:</span>
                    advyt.dribbble
                  </h6>
                </li>

              </ul>
            </div>

            <div className="col-12 resume-btn-container">
              <a href="#" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  download my cv
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>

      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}

      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">

            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Durham University
                        <span className="separator" />
                        <span className="font-weight-700">Masters in Data Science (MDS)</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      <b> Modules Taken:</b>
                          <li> Machine Learning </li>
                          <li> Data Visualisation and Unsupervised Learning </li>
                          <li> Programming for Data Science </li>
                          <li> Strategic Leadership </li>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}

                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2017 - 2020
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Middlesex University
                        <span className="separator" />
                        <span className="font-weight-700">B.A.(Hons) in Media, Advertising, and PR</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      <b> Modules Taken:</b>
                          <li> Global Journalism </li>
                          <li> Advertising </li>
                          <li> Public Relations in Context </li>
                          <li> Research Techniques and Approaches </li>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2018 - 2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Amity University
                        <span className="separator" />
                        <span className="font-weight-700">Coursework Towards B.A. in Economics</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      <b> Modules Taken:</b>
                          <li> Microeconomics </li>
                          <li> Macroeconomics </li>
                          <li> Business Intelligence and Data Analysis </li>
                          <li> Economic History of India </li>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}



            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Experience
              </h2>
                <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - 2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Social Media Marketing Intern: Weber Shandwick
                        <span className="separator" />
                        <span className="font-weight-700">
                          Dubai, UAE
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                      <li>Handled the administration of the social media accounts of several high profile companies in the Middle East.</li>
                      <li>Responsible for creating content for the social media accounts, collecting data and compiling them into KPIs. </li>
                      <li>Moderating and cultivating positive community relationships on the social media platforms managed by Weber Shandwick. </li>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}

                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2016-2017
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        International Student Delegate
                        <span className="separator" />
                        <span className="font-weight-700">
                          Boxmeer, The Netherlands
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                          <li> Part of an cultural exchange programme by Smt. Sulochanadevi Singhania School. </li>
                          <li> Member of the student representative body assigned to the Netherlands. </li>
                          <li> Responsible for fostering a positive relationship between Smt. Sulochanadevi Singhania School and Metameer Jenaplan. </li>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}

              </div>
            </div>

            {/* Experience Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                Volunteering
              </h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2015 - 2015
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        ESL Teacher
                        <span className="separator" />
                        <span className="font-weight-700">
                          Thane, India
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                          <li> Part of a social outreach programme by Smt. Sulochanadevi Singhania School. </li>
                          <li> Taught a class of 30 underpriviledged middle school students in the slums of Thane, India. </li>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - 2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Participant: DurHack
                        <span className="separator" />
                        <span className="font-weight-700">
                          Durham, UK
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                          <li> Tackled a data analytics problem using machine learning and statistical tools. </li>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2019 - 2019
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Marketing Assistant: Melltoo
                        <span className="separator" />
                        <span className="font-weight-700">
                          Dubai, UAE
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                          <li> Assisted a local p2p charity platform in marketing and operations </li>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Volunteering Ends */}
          </div>


          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">python</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">R</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Java</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={50}
                  style={{ width: "50%" }}
                />
                <span className="percent" style={{ right: "calc(50% - 21px)" }}>
                  50%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">SQL</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={50}
                  style={{ width: "50%" }}
                />
                <span className="percent" style={{ right: "calc(50% - 21px)" }}>
                  50%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Tableau</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={50}
                  style={{ width: "50%" }}
                />
                <span className="percent" style={{ right: "calc(50% - 21px)" }}>
                  50%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Power BI</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={40}
                  style={{ width: "40%" }}
                />
                <span className="percent" style={{ right: "calc(60% - 21px)" }}>
                  40%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Adobe InDesign</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Adobe Premiere Pro</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
