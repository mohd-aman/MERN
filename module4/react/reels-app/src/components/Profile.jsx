import React, { useEffect, useState } from "react"
import "./profile.css"
import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import {db} from "../firebase"
import {doc,getDoc} from "firebase/firestore"

function Profile(){
    let cUser = useContext(AuthContext);
    let [loading,setLoading] = useState("")
    
    useEffect(function fn(){
        (async function(){
            if(cUser){
                //read from dabase
                const docRef = doc(db,"users",cUser.uid);
                const docSnap = await getDoc(docRef);
                console.log("Document Data: ",docSnap.data())
            }
        })()
    },[cUser])

    return (
            <>
                {cUser == null?<div>Need to login</div>:    
         <>
         <div className="header"></div>
         <div className="main">
             <div className="pimg_container">
                 <img src="data:image/png;base64,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" alt="" className="pimg" />
             </div>
             <div className="details">
                 <div className="content">Aman</div>
                 <div className="content">No of Posts: <span className="bold_text">Posts</span></div>
                 <div className="content">Email <span className="bold_text">Email.com</span></div>
             </div>
         </div>
         </>}
        </>
    )
}

export default Profile