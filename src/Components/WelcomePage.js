import React from 'react'

// put a picture in the middle on the welcome page. onClick can be a popup
function WelcomePage() {
  const copyright = "\u00a9";
  return (
    <>
    <div id="mainBorder">
      <div id="mainPageCenter">
        <center><h1 id="welcome">Welcome to React</h1></center>
        {/* <img  title="heartica_logo" src="redux-logo-landscape.png" alt="logo" width="150" height="50" /> */}
      {/* </div> */}
        <div class="navigationBar">
          <center>
          <a href="react/at-a-glance">The Frontend</a>
          <br/>
          <a href="react/reuseable-code">Reuseable Code</a>
          <br/>
          <a href="react/components">Class vs Functional</a>
          </center>
        </div>

        <br/>
        <div class="navigationBar2">
          <a href="react/component-state">Component State</a>
          <br/>
          <a href="react/reducers">Actions & Reducers</a>
          <br/>
          <a href="react/storing-state">Redux</a>
        </div>
    </div>
    </div>
    <div id="welcomeFooter"><center><i>Centralized State Management</i></center></div>
    <footer>
      <center>Pyramid Consulting </center>
      <center> {copyright} Anthony McMullen. 2021</center>
    </footer>
    </>
  )
}

export default WelcomePage;