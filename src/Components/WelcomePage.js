import React from 'react'

function WelcomePage() {
  return (
    <div>
      <div id="mainPageCenter">
        <center><h1 id="welcome">Welcome to React</h1></center>
      {/* </div> */}
        <div class="navigationBar">
          <a href="react/at-a-glance">Option #1</a>
          <br/>
          <a href="react/functions">Option #2</a>
          <br/>
          <a href="react/next">Option #3</a>
        </div>

        <br/>
        <div class="navigationBar2">
          <a href="react/at-a-glance">Option #1</a>
          <br/>
          <a href="react/functions">Option #2</a>
          <br/>
          <a href="react/next">Option #3</a>
        </div>
    </div>
    </div>
  )
}

export default WelcomePage;