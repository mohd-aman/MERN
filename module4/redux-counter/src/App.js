import { useDispatch, useSelector } from "react-redux";
import {incrementCounter} from "./redux/action"

function App() {
  let state  = useSelector(function(state){
    return state;
  });
  
  let dispatch = useDispatch();

  return (
    <>
      <p>{state}</p>
      <button
        onClick={()=>{//action dispatch
            dispatch(incrementCounter());
        }}
      >+</button>
    </>    
  );
}

export default App;
