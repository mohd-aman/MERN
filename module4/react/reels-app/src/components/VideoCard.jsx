import { useState } from "react"



const VideoCard = ()=>{
    let [playing,setPlaying] = useState(false);
    return(
            <div className="video-card">
                <p>Fake User</p>
                <span>
                    Song name
                </span>
                <video onClick={(e)=>{
                    if(playing){
                        e.currentTarget.pause();
                        setPlaying(false)
                    }else{
                        e.currentTarget.play();
                        setPlaying(true);
                    }
                }} src=""></video>

            </div>
            
    )
}

export default VideoCard