import React from 'react'
import Swal from 'sweetalert2';


export default function Redux() {
    Swal.fire("Pause", "To better appreciate the magic of Redux you may want to add a dependency to your package.json file. In your terminal, type 'yarn add redux-devtools-extension' or 'npm install redux-devtools-extension' (based on which type on package lock you are using)")
    return (
        <>
      <div>
          <center><h1 id="welcome">Redux</h1></center>
          <center>testing the router from the Redux intro page</center>
      </div>

      {/* gonna have them enter their name and watch the state change? */}
      <center><a href={"/"}><button>return home</button></a></center>
      </>
    )
}
