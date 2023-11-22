// import img from '../images/istockphoto-1315139408-612x612.jpg';
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    const redirectToHome = () => {
    // Redirect to the Register route
    navigate("/Home");
  };
  return (
    <div className='container-fluid' id="Welcome" >
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
        <div className="col-12">
            {/* You can keep this div empty or add other content as needed */}
            <h1 id='h1w'>
               Welcome To  Job Portal
            </h1>

        </div>
        <br></br>

        <div className='' id='startb'>
            <button className='btn btn-primary lg-2 ' id='sb' onClick={redirectToHome}>Click Here For Your feature </button>
        </div>


    </div>
  );
}

export default Welcome;
