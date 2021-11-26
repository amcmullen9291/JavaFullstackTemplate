import React from 'react'
import Swal from 'sweetalert2';

export default function About() {

    function centerHeader(e){
            e.preventDefault();
            let header = document.getElementById("header");
            let button = document.getElementById("buttonToCenter");
            let headerText1 = document.getElementById("headerText1");
            let headerText2 = document.getElementById("headerText2");

            header.style.textAlign = "center";
            headerText1.innerText = "Welcome!"
            headerText1.style.color = "orange";
            headerText1.className = "show";
            button.innerText = "(Thank you, that's better)"
            button.className = "hidden";
            headerText2.style.visibility = "hidden";
            Swal.fire('Nice.', "CSS made the header move (and part of it disapper) and JavaScript changed the words. All from an onClick React function")
    }

    return (
        <>
        <div class="background">
      <div>
          <center><h1 id="welcome">HTML At-A-Glance</h1></center>
      </div>
      <header id ="header">
          <h1 id="headerText1">This h1 element is in the header.</h1>
          <p id="headerText2">(but wouldn't it look nicer in the middle?)</p>
          <button onClick={centerHeader} id="buttonToCenter">Click to move it</button>
      </header>
      <main class="mainSection">
          <p id="gibberishHeading"> We'll use <em><strong>Lorem Ipsum</strong></em> in the Main section.</p>
          <ul>
              <li id="mainSection">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae. Ultrices eros in cursus turpis massa. Porttitor eget dolor morbi non. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nibh tellus molestie nunc non blandit massa enim nec. Pellentesque id nibh tortor id aliquet lectus proin. Parturient montes nascetur ridiculus mus mauris. Purus sit amet volutpat consequat mauris nunc. Ornare quam viverra orci sagittis eu volutpat odio.</li>
              <ol>
                  <li>Lorem Ipsum is <br/> gibberish. But,</li>
                  <br/>
                  <li>It is rooted in a<br/>real language: Latin</li>
                  <br/>
                  <li>It is just used to fill up space.</li>
              </ol>
          </ul>
      </main>
      <section>
          <p id="meSection"><u>Here is a little about me:</u> <br/><br/>
          blah blah blah, blah blah,blah,blah blah blah, blah blah,blah,blah blah blah, blah blah,blah,blah blah blah, blah blah,blah. Oh yeah, I forgot! <br/><br/>Blah,blah,blah,blah,blah.
          <li> Doesn't the gibberish look at lot nicer?</li>
          </p>
          <span id="mainSpan">Duh</span>

      </section>
      <footer>
          <br/>
      <center><a href={"/"}><button id="homeButton">return home</button></a></center>
      </footer>
      </div>
      </>
    )

}
