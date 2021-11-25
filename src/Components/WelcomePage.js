import React from 'react'

// put a picture in the middle on the welcome page. onClick can be a popup
function WelcomePage() {
  const copyright = "\u00a9";
  return (
    <>
    <div>
      <div id="mainPageCenter">
        <center><h1 id="welcome">Welcome to React</h1></center>
      {/* </div> */}
        <div class="navigationBar">
          <center>
          <a href="react/at-a-glance">React</a>
          <br/>
          <a href="react/functional-components">Functional Components</a>
          <br/>
          <a href="react/class-components">Class Components</a>
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
    <div id="welcomeFooter"><center><i>Some stuff here</i></center></div>
    <footer>
      <center> {copyright} Pyramid Consulting Anthony McMullen. 2021</center>
    </footer>
    </>
  )
}

export default WelcomePage;