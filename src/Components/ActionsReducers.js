import React from 'react'

export default function ActionsReducers() {
    return (
        <>
        <div className="background">
    <div>
          <center><h1 id="welcome">Actions <br/>and Reducers</h1></center>
    </div>
    <div id="actionArea">
    <pre>{`
export const setUserName = (userName) => {
    return {
        type: ActionTypes.SET_NAME,
        payload: userName
    }
};
    `}</pre>
<span><center>An Action is used to describe what <i>action</i> is taking place.<br/></center></span>
</div>
<div id="reducerArea">
<pre>{`
export const NameReducer = (state=name, {type, payload}) => {    
    switch (type) {
        case ActionTypes.SET_NAME:
            return { ...state, yourName: payload};
        default:
            return state
    }
};
`}</pre>
<span><center>A Reducer returns a single value.<br/></center></span>
    </div>
    <footer>
        <br/>
        <center><a href={"/"}><button>return home</button></a></center>
    </footer>
    </div>
      </>
    )
}
