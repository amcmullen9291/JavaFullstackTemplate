import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { setFunctionalComponentFacts, setClassComponentFacts } from '../Actions/ComparisonList'

function Components() {

  let [funcComp, funcCompList ] = useState([
      {id: 1, test: "This will hold class functional component facts"}
  ])
  let [classComp, classCompList ] = useState([
      {id:1, test: "this will hold class component facts"}
  ]);

  const dispatch = useDispatch();

  function ShowData(e, attribute){
    e.preventDefault();
    let summary = document.querySelector("#factsArea");
    summary.style.visibility = "visible";
    summary.innerHTML = "";
    switch (attribute)
        {
        case "1": summary.innerHTML =  "Switch Statement #1,Switch Statement #1,Switch Statement #1,Switch Statement #1,Switch Statement #1,Switch Statement #1,Switch Statement #1,Switch Statement #1,Switch Statement #1";
        break;
        case "2": summary.innerHTML =  "Switch Statement #2";
        break;
        case "3": summary.innerHTML =  "Switch Statement #3";
        break;
        case "4": summary.innerHTML =  "Switch Statement #4";
        break;
        case "5": summary.innerHTML =  "Switch Statement #5";
        break;
        case "6": summary.innerHTML =  "Switch Statement #6";
        break;
        case "7": summary.innerHTML =  "Switch Statement #7";
        break;
        case "8": summary.innerHTML =  "Switch Statement #8";
        break;


        default: 
        alert('Default case');
        }
  }

  const setFunctionalFacts = () => {
    dispatch(setFunctionalComponentFacts(funcComp));
    console.log("Functional component facts:", funcCompList)
  };
  
  useEffect(() => {
    setFunctionalFacts();
  }, []);

  const setClassFacts = () => {
    dispatch(setClassComponentFacts(classComp));
    console.log("Class component facts:", classCompList)
  };
  
  useEffect(() => {
    setClassFacts();
  }, []);

    return (
        <>
      <div>
          <center><h1 id="welcome">Class Components <br/> vs. Functional Components</h1></center>
      </div>
    <>
    <div id="switchPageBorder">
      <div id="mainPageCenter2">
        <div class="navigationBar">
        <center><div id="factsArea">Did this go to the center?</div></center>
          <center>
            <span class="comparedTop">Lifecycle Methods</span>
          <button onClick={(e) => {ShowData(e, '1')}}><a href="#factsArea">Component Did Mount</a></button>
          <br/>
          <button onClick={(e) => {ShowData(e, '2')}}><a href="#factsArea">Component Should Update</a></button>
          <br/>
          <button onClick={(e) => {ShowData(e, '3')}}><a href="#factsArea">Component Did Update</a></button>
          <br/>
          <button onClick={(e) => {ShowData(e, '4')}}><a href="#factsArea">Component Did UnMount</a></button>
          </center>
        </div>
        {/* <center><div id="factsArea">Did this go to the center?</div></center> */}
        <div class="navigationBar">
          <center>
          <span class="comparedTop">React Hooks</span>
          <button onClick={(e) => {ShowData(e, '5')}}><a href="#factsArea">useState / setState</a></button>
          <br/>
          <button onClick={(e) => {ShowData(e, '6')}}><a href="#factsArea">useEffect</a></button>
          <br/>
          <button onClick={(e) => {ShowData(e, '7')}}><a href="#factsArea">useDispatch</a></button>
          </center>
        </div>
    </div>
    </div>
    <center><a href={"/"}><button>return home</button></a></center>
    </>
      </>
    )
  }

  const mapStateToProps = (state) => {
    return {
      functionalComponents: state.FunctionalFacts,
      classComponents: state.classFacts
    }
  
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      classComponents: (classComp) => { dispatch({type: 'SET_FACTS', classComp})},
      functionalComponents: (funcComp) => { dispatch({type: 'SET_FACTS', funcComp})}
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Components);