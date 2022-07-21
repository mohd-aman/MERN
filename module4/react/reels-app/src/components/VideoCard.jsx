import { useState } from "react"
import "./videoCard.css"

const VideoCard = () => {
    let [playing, setPlaying] = useState(false);
    let [commentBoxOpen, setCommentBox] = useState(false);
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

            <video onClick={(e) => {
                if (playing) {
                    e.currentTarget.pause();
                    setPlaying(false)
                } else {
                    e.currentTarget.play();
                    setPlaying(true);
                }
            }} src="https://scontent-iad3-1.cdninstagram.com/v/t50.2886-16/289274473_728483738433015_5740849644072608638_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5jbGlwcy5iYXNlbGluZSIsInFlX2dyb3VwcyI6IltcImlnX3dlYl9kZWxpdmVyeV92dHNfb3RmXCJdIn0&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=103&_nc_ohc=4YnZGxrwVLsAX_CwenF&edm=ALQROFkBAAAA&vs=560801945403766_3826796533&_nc_vs=HBksFQAYJEdHbjZQUkgzTlhSV2paWUNBSDRqNEw5Vm1LdFBicV9FQUFBRhUAAsgBABUAGCRHQWFKT2hGLTVIdTBFZGNGQURZb2dZc3NJV0J5YnFfRUFBQUYVAgLIAQAoABgAGwAVAAAm0qCI9%2Bfc%2Bz8VAigCQzMsF0Ak7peNT987GBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX%2BBwA%3D&ccb=7-5&oe=62DC0369&oh=00_AT9SdrsEyDXGuzTKxH83J6tQhzs6Jzi1RZnI9nhIsQV9fA&_nc_sid=30a2ef&dl=1"
                crossrigin="anonymous" ></video>

        </div>

    )
}

export default VideoCard