import {useContext} from 'react'
import {Context} from './ContextMemo'
function GrandChild(){
    let message = useContext(Context);
    console.log("rendered grandchild")
    return (
        <>
        <div> ---------------------------------------- </div>
        <div>I am a grandChild</div>
        <div>God send this message { message}</div>
        </>
    )
}

export default GrandChild;