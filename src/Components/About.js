import React from 'react'

export default function About() {

    function centerHeader(){
        let signs = Document.getElementByClass("header");
        signs.setAttribute("align", "center");
        

    }
    return (
        <>
      <div>
          <center><h1 id="welcome">React At-A-Glance</h1></center>
      </div>
      <header>
          <h1 class="header">This h1 element is in the header.</h1>
          <p class="header">(but wouldn't it look nicer in the middle?)</p><button onClick={centerHeader()}>Click to move it</button>
      </header>
      <footer>
          <br/>
      <center><a href={"/"}><button id="homeButton">return home</button></a></center>
      </footer>
      </>
    )

}
