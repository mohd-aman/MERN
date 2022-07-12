import GrandChild from "./GrandChild"

function Children(){
    console.log("Redered children")
    return(
        <>
        <div> I am a Children</div>
        <GrandChild></GrandChild>
        </>
    )
}

export default Children