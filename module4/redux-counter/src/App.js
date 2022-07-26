import { useDispatch, useSelector } from "react-redux";
import {incrementCounter,
        decrementCounter,
        loginCreator,
        logoutCreator} from "./redux/action"

function App() {
  let count  = useSelector(function(state){
    return state.count; 
  });

  let logged = useSelector(function(state){
    return state.logged
  })
  
  let dispatch = useDispatch();

  return (
    <>
    <button
    onClick={()=>{dispatch(loginCreator())}}
    >login</button>
    <button
    onClick={()=>{dispatch(logoutCreator())}}
    >logout</button>
    {/* <p>{count}</p>
      <button
        onClick={()=>{//action dispatch
            dispatch(incrementCounter());
        }}
      >+</button>
      <button
      onClick={()=>dispatch(decrementCounter())}
      >-</button> */}
    {logged?(<>
      <p>{count}</p>
      <button
        onClick={()=>{//action dispatch
            dispatch(incrementCounter(1));
        }}
      >+1</button>
      <button onClick={()=>{
        dispatch(incrementCounter(10))
      }}>+10</button>
      <button
      onClick={()=>dispatch(decrementCounter())}
      >-</button>
    </>):""}
      
    </>    
  );
}

export default App;
