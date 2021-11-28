import React from 'react'
import ReuseableCode from './ReuseableCode.js';

export default function ReuseableExample() {
  return (
      <>
    <p id="showCode">this is the return method in the file using reuseable code:
    <pre>{`
      return (
      <>  
      <div>
        <center>
            <ReuseableCode/>
        </center>
      </div>
      <footer>
      <br/>
            <center><a href={"/"}><button>Return Home</button></a></center>
      </footer>
      </>
      )
`}</pre>
</p>
    <footer>
        <br/>
        <center><a href={"/react/reuseable-code/origin"}> <button>look again </button></a><a href={"/"}><button>Return Home</button></a></center>
    </footer>
    </>
  )
}
