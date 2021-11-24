import React from 'react'

const NotFound = () => {

  return(
    <>
    <div id="errorBody">
    <div id="four0fourpage">
    <center><h3 id="see">See?</h3></center>

    <center><p class="four0four">It looks like you were trying to go to a page that is not part of this application. But, </p>
    <p>thanks to the Router that you imported from 'react-router-dom' dependency, the program will not break..</p></center>
    <hr></hr>
    <br></br>
    <p id="four0fourExplination" class="four0four"> The router will just keeping going to this annoying page if it is not sure where to go.</p>
    </div>
    <center><a href= {"/"} ><button id="returnHomeButton">Return to an existing page</button></a></center>
    </div>

    </>
  )
}
export default NotFound;