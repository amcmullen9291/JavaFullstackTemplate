import React from 'react'
import Swal from 'sweetalert2';


export default function functionalComponents() {

  function buttonCode(e){
    e.preventDefault();
    Swal.fire("The button's JSX",
    "(button id='buttonToCenter' onClick={centerHeader})Click to move it(/button)");
  }

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
    Swal.fire('Well,', "it's not exactly the same.")
}

function headerCode(e){
  e.preventDefault();
  Swal.fire("The Header's JSX",
  "const header = (center)(h1 id='welcome')Reuseable code(/h1)(/center)");
}



  const infoBanner = (
    <>
    <div>
        <center><h1 id="welcome" onMouseOver={headerCode}>Reuseable code</h1></center>
    </div>
    </>
  );

  function orderedListCode(e){
    e.preventDefault();
    Swal.fire("The Main Section's JSX",
    "const mainSection = (ol)(li )Lorem Ipsum is (br/) gibberish. But,(/li)(br/)(li)It is rooted in a(br/)real language: Latin(/li)(br/)(li)It is just used to fill up space.(/li)(/ol)");
  
  }

  const mainSection = (
    <>
          <main class="mainSection">
          <p id="gibberishHeading" onMouseOver={orderedListCode}> We'll use <em><strong>Lorem Ipsum</strong></em> in the Main section.</p>
          <ul>
              <li id="mainSection">This is (almost) the exact same page As the introduction page. But, look how little code is in the the return statement! In any of the other components you can import this file's constants and reuse the JSX without re writing code!  Hover over each element to see the code that created it.</li>
              <ol>
                  <li >Lorem Ipsum is <br/> gibberish. But,</li>
                  <br/>
                  <li >It is rooted in a<br/>real language: Latin</li>
                  <br/>
                  <li>It is just used to fill up space.</li>
              </ol>
          </ul>
      </main>

    </>
  );

  function hOneCode(e){
    e.preventDefault();
    Swal.fire("H1 Header Code","const header = (h1 id='headerText1')This h1 element is in the header.(/h1)(p id='headerText2')(but wouldn't it look nicer in the middle?)(/p)")
}

  const header = (
    <>
    <header id ="header" >
      <h1 id="headerText3" onMouseOver={hOneCode}>This h1 element is in the header.</h1>
      <p id="headerText3">(but wouldn't it look nicer in the middle?)</p>
      <button id="buttonToCenter" onMouseOver={buttonCode} onClick={centerHeader}>Click to move it</button>
  </header>

    </>
);

const blahBlah = (
  <>
        <section >
          <p id="meSection">return (<br/>
            (div class='background')<br/>
            (infoBanner) <br/>
    (header) <br/>
    (mainSection) <br/>
    (blahBlah) <br/>
    (footer)<br/>
    (/div)<br/>
          )
          </p>
          <span id="mainSpan">Duh</span>
      </section>
  </>
);

const footer = (
  <>
        <footer>
          <br/>
      <center><a href={"/"}><button id="homeButton">return home</button></a></center>
      </footer>

  </>
)


  
  return (
    <>
    <div class="background">
    {infoBanner}
    {header}
    {mainSection}
    {blahBlah}
    {footer}
    </div>
  </>
)

}
