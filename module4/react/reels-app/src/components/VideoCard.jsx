import { useEffect } from "react";
import { useState } from "react"
import { getDoc, setDoc, doc, updateDoc } from "firebase/firestore"
import "./videoCard.css"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../firebase"


const VideoCard = (props) => {
    let user = useContext(AuthContext)
    let [playing, setPlaying] = useState(true);
    let [commentBoxOpen, setCommentBox] = useState(false);
    let [currUserComment, setCurrUserComment] = useState("");
    let [comments, setComments] = useState([]);
    useEffect(async () => {
        let commentsIdArr = props.data.comments;
        let arr = [];
        for (let i = 0; i < commentsIdArr.length; i++) {
            const commentRef = doc(db, "comments", commentsIdArr[i]);
            const commentSnap = await getDoc(commentRef);
            arr.push(commentSnap.data())
        }
        console.log("Array ", arr)
        setComments(arr);
    }, [props])

    console.log("props", props)
    return (
        <div className="video-card">
            <p className="video-card-username">Fake User</p>
            <span className="video-card-music">
                <span>
                    music note
                </span>
            </span>

            <span onClick={(e) => {
                if (commentBoxOpen) {
                    setCommentBox(false)
                } else {
                    setCommentBox(true)
                }
            }}>Chat</span>

            {commentBoxOpen ? (
                <div className="video-card-comment-box">
                    {comments.map((comment) => {
                        return (
                            <div className="actual-comments">
                                <h5>{comment.email}</h5>
                                <p>{comment.comment}</p>
                            </div>
                        )
                    })}

                    <div className="actual-comments">
                        <h5>User name</h5>
                        <p>This is actual comment</p>
                    </div>

                    <div className="comment-form">
                        <div className="post-user-comment">
                            <input type="text" value={currUserComment} onChange={(e) => setCurrUserComment(e.currentTarget.value)} />
                            <button
                                onClick={async () => {
                                    let commentId = user.uid + "$" + Date.now();
                                    await setDoc(doc(db, "comments", commentId), {
                                        email: user.email,
                                        comment: currUserComment,
                                    });
                                    setCurrUserComment("");
                                    let postCommentsArr = props.data.comments
                                    postCommentsArr.push(commentId)
                                    const postsRef = doc(db, "posts", props.data.id);
                                    await updateDoc(postsRef, {
                                        comments: postCommentsArr
                                    });

                                }}
                            >post</button>
                        </div>

                    </div>
                </div>
            ) : ("")}

            <video className="video-card-video" onClick={(e) => {
                if (playing) {
                    e.currentTarget.pause();
                    setPlaying(false)
                } else {
                    e.currentTarget.play();
                    setPlaying(true);
                }
            }} src={props.data.url}
                crossrigin="anonymous" ></video>

        </div>

    )
}

export default VideoCard