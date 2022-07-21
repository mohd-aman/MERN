import React, { useEffect, useState } from "react"
import "./profile.css"
import {useContext} from "react"
import {AuthContext} from "../context/AuthContext"
import {db} from "../firebase"
import {doc,getDoc} from "firebase/firestore"

function Profile(){
    let cUser = useContext(AuthContext);
    let [loading,setLoading] = useState(true)
    let [user,setUser] = useState(null);
    useEffect(function fn(){
        (async function(){
            if(cUser){
                //read from dabase
                const docRef = doc(db,"users",cUser.uid);
                const userObj = await getDoc(docRef);
                console.log("Document Data: ",userObj.data())
                setUser(userObj.data());
                setLoading(false);
            }
        })()
    },[])

    return (
            <>
                {loading == true?<div>...Loading</div>:    
            <>


         <div
        className="header"></div>
         <div className="main">
             <div className="pimg_container">
                 <img src={user.profileImgUrl} className="pimg" />
             </div>
             <div className="details">
                 <div className="content">{user.name}</div>
                 <div className="content">No of Posts: {user.reelsIds.length} </div>
                 <div className="content">{user.email}</div>
             </div>
         </div>
         </>}
        </>
    )
}

export default Profile