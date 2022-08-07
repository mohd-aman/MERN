import { useSelector } from "react-redux"


function Preview(){
    let state = useSelector((state)=>state);
    let contact = state.contactReducer;
    console.log("preview",contact)
    return(
        <>
        <div>{contact.fname}</div>
        <div>{contact.lname}</div>
        <div>{contact.email}</div>
        <div>{contact.summary}</div>
        <div>{contact.phone}</div>
        <div>{contact.prof}</div>
        <div>{contact.street}</div>
        <div>{contact.state}</div>
        <div>{contact.city}</div>
        <div>{contact.pin}</div>
        </>
    )
}


export default Preview