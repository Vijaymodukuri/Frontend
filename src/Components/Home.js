function Home(){
    return(
<div>
{/* {status === "home" ? ( */}
  <div id="home">
    {/* <img id="homeimg" alt="" src={homeimg} /> */}
    <div id="hometext">
      <h1>
        Find the job<br></br> That fits for your life
      </h1>
      <button
        title="Register"
        onClick={() => {
          setstatus("Register");
        }}
      >
        Register <b>→</b>
      </button>
    
    </div>
  </div>
{/* ) : (
  <div></div>
)} */}
</div>
);
}
export default Home;