function Register(){
  return(


<div id="register">
            {/* {status === "Register" ? ( */}
              <div id="rig">
                <h1>{status}</h1>
                <input type="text" placeholder="     Name" />
                <br></br>
                <br></br>
                <input type="password" placeholder="     Password" />
                <br></br>
                <br></br>
                <input type="password" placeholder="     Re-Enter Password" />
                <br></br>
                <br></br>
                <input type="text" placeholder="     Email name" />
                <br></br>
                <br></br>
                <select id="myDropdown">
                  <option value="Student">Student</option>
                  <option value="Recruiter">Recruiter</option>
                </select>
                <div id="g2">
                  <input type="submit" />
                  <br></br>
                </div>
                <button
                  id="registerlogin"
                  onClick={() => {
                    setstatus("Login");
                  }}
                >
                  Login
                </button>
              </div>
            {/* ) : (
              <div></div>
            )} */}
          </div>

);
}
export default Register;