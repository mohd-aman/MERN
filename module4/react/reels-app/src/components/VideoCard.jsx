import { useState } from "react"
import "./videoCard.css"

const VideoCard = (props) => {
    let [playing, setPlaying] = useState(true);
    let [commentBoxOpen, setCommentBox] = useState(false);
    console.log("props",props)
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
                    <div className="actual-comments">
                        <h5>User name</h5>
                        <p>This is actual comment</p>
                    </div>

                    <div className="comment-form">
                        <div className="post-user-comment">
                            <input type="text" />
                            <button>post</button>
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