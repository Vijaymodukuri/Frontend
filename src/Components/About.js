import React from "react";
import { useNavigate } from "react-router-dom";
function About(){
  const navigate = useNavigate();

  const redirectToRegister = () => {
    // Redirect to the Register route
    navigate("/Home");
  }; 
  return(

<div>
<div>
      <header className="site-header">
        <div className="container d-flex justify-content-between align-items-center">
          <a href="#" className="brand-logo">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {<path d="M8.098.649A12.037 12.037 0 0 0 1.088 7h3.525C5.305 4.302 6.541 2.065 8.098.65ZM6.544 7C7.359 3.45 9.014.832 11 .166V7H6.544Zm-2.33 2H.378A12.022 12.022 0 0 0 0 12c0 1.403.24 2.749.683 4h3.703A20.558 20.558 0 0 1 4 12c0-1.032.074-2.037.214-3Zm2.127 7A23.07 23.07 0 0 1 6 12c0-1.036.066-2.041.189-3H11v7H6.341Zm-1.44 2H1.605a12.037 12.037 0 0 0 6.493 5.351c-1.36-1.237-2.475-3.1-3.197-5.35ZM11 23.834C9.205 23.232 7.681 21.037 6.803 18H11v5.834Zm4.902-.483a12.037 12.037 0 0 0 6.493-5.35h-3.296c-.722 2.25-1.837 4.113-3.197 5.35ZM17.197 18c-.878 3.037-2.402 5.232-4.197 5.834V18h4.197Zm2.417-2h3.703A11.98 11.98 0 0 0 24 12c0-1.036-.131-2.041-.378-3h-3.836c.14.963.214 1.968.214 3 0 1.396-.135 2.74-.386 4Zm-1.803-7c.123.959.189 1.964.189 3 0 1.403-.12 2.749-.341 4H13V9h4.811Zm-.355-2H13V.166C14.986.832 16.641 3.45 17.456 7Zm1.931 0c-.692-2.698-1.928-4.935-3.485-6.351A12.037 12.037 0 0 1 22.912 7h-3.525Z" />}
            </svg>
            <span className="logo-text">Job Portal</span>
          </a>
          <nav className="header-nav">
            <ul className="nav__list">
              <li className="list-item">
                <a href="Home" className="nav__link">
                  Home
                </a>
              </li>
              <li className="list-item">
                <a href="Jobs" className="nav__link">
                  Jobs
                </a>
              </li>
              <li className="list-item">
                <a href="Info" className="nav__link">
                  Info
                </a>
              </li>
              <li className="list-item">
                <a href="Support" className="nav__link">
                  Support
                </a>
              </li>
              {/* <li className="list-item">
                <a href="Register" className="nav__link">
                  Register
                </a>
              </li> */}
              <li className="list-item">
                <a href="Login" className="nav__link">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
            <div>
              {/* {status === "About" ? ( */}
                <div id="about">
                  <h1>Find the job That fits for your life</h1>
                  <div id="about2">
                    <h2>Who We Are</h2>
                    {/* <img id="aboutimg" alt="" src={aboutimg} /> */}
                    <p>
                      The Jobs Portal has come into being with a vision to
                      provide excellent platform to both job seekers <br></br>
                      and the employers. We believe firmly that there is no
                      other alternative of Quality Services and a client
                      <br></br> could only feel happy if we can provide them the
                      best value for their money
                    </p>
                    <br></br>
                    <p>
                      A job portal is an online platform that serves as an
                      intermediary between <br></br>
                      <b>job seekers </b>and <b>employers</b>, offering a range
                      of features and services to facilitate <br></br>the job
                      search and recruitment process. Job portals have become an
                      integral part of <br></br>the modern job market,
                      revolutionizing the way people search for employment
                      <br></br>
                      and companies hire talent. Here is some information about
                      job portals:
                    </p>
                    <br></br>
                    <p>
                      <b>1. Job Listings:</b> Job portals host a vast database
                      of job listings across various industries, <br></br> job
                      types,and geographic locations. These listings are posted
                      by employers looking to <br></br> hire candidates for
                      specific roles.<br></br>
                      <br></br>
                      <b>2. Resume Upload and Creation:</b> Job seekers can
                      create and upload their resumes to job portals. <br></br>
                      These platforms often offer tools to build and format
                      resumes to attract potential employers.<br></br>
                      <br></br>
                      <b>3. Search and Filter :</b> Users can search for jobs
                      based on specific criteria such as location, <br></br>
                      industry, job title, and salary. Advanced filtering
                      options help job seekers refine their searches.<br></br>
                      <br></br>
                      <b>4. Application Submission :</b> Job seekers can apply
                      for jobs directly through the portal. <br></br>Some
                      portals facilitate one-click applications, making the
                      process more efficient.<br></br>
                      <br></br>
                      <b>5. Company Profiles :</b> Employers can create profiles
                      on job portals, showcasing their company culture,{" "}
                      <br></br>
                      values, and job openings. This allows job seekers to learn
                      more about potential employers.<br></br>
                      <br></br>
                      <b>6. Email Alerts :</b> Job portals often provide email
                      notification services that alert job seekers to <br></br>
                      new job listings that match their criteria. This feature
                      saves time and ensures that users don't miss out on
                      relevant opportunities.<br></br>
                      <br></br>
                      <b>7. Career Resources :</b> Many job portals offer
                      additional resources such as articles, tips, <br></br>and
                      advice on resume writing, interview preparation, career
                      development, and job market trends.<br></br>
                      <br></br>
                      <b>8. Salary Information :</b> Some portals provide salary
                      information for specific job roles and industries,{" "}
                      <br></br>
                      helping job seekers negotiate better compensation
                      packages.
                      <br></br>
                      <br></br>
                      <b>9. User Accounts :</b> Both job seekers and employers
                      typically create accounts on job portals, <br></br>which
                      allow for a personalized experience. Job seekers can save
                      favorite job listings, and employers can track applicant
                      profiles.<br></br>
                      <br></br>
                      <b>10. Mobile Apps :</b> Job portals often offer mobile
                      applications, making it convenient for users to access{" "}
                      <br></br>the platform from their smartphones and tablets.
                      <br></br>
                      <br></br>
                      <b>11. Privacy and Security :</b> Job portals prioritize
                      the privacy and security of user data, including personal{" "}
                      <br></br>information and resumes. They typically have
                      strict policies in place to protect user data.<br></br>
                      <br></br>
                      <b>12. Paid Services :</b> While basic access to job
                      portals is usually free, some offer premium services,{" "}
                      <br></br>such as improved visibility of job applications
                      or the ability to contact employers directly, for a fee.
                      <br></br>
                      <br></br>
                      <b>13. Global Reach :</b> Many job portals have a global
                      presence, connecting job seekers with opportunities
                      worldwide. <br></br>This is especially beneficial for
                      those seeking international job opportunities.<br></br>
                      <br></br>
                      <b>14. Feedback and Reviews :</b> Some job portals
                      incorporate features for job seekers and employees to
                      leave <br></br>feedback and reviews about companies and
                      their hiring processes, promoting transparency.
                    </p>
                  </div>
                  <div>
                    <button id="aboutregi"
                      onClick= {redirectToRegister}>
                      Register <b>→</b>
                    </button>
                  </div>
                </div>
              {/* ) : (
                <div></div>
              )} */}
            </div>
          </div>
          );
        }
        export default About;
