import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthProvider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { storage, database } from '../firebase';
function Feed() {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
    }));
    const classes = useStyles();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { signout, currentUser } = useContext(AuthContext);
    const handleLogout = async () => {
        try {
            setLoading(true);
            // auth provider 
            await signout();
            setLoading(false);  
        } catch (err) {
            console.log(err);
            setLoading(false)
        }
    }
    useEffect(() => {
        const unsub = database.users.doc(currentUser.uid).onSnapshot((doc) => {
            setUserData(doc.data());
        })
        return unsub;
    }, [currentUser]);
    const handleInputFile = (e) => {
        e.preventDefault();
        let file = e?.target?.files[0];
        if (file != null) {
            const uploadTask = storage.ref(`/posts/${currentUser.userId}/${file.name}`).put(file);
            uploadTask.on("state_changed", f1, f2, f3);
            function f1(snapshot) {
                const progress = snapshot.bytesTransferred / snapshot.totalBytes;
                console.log(progress);
            }
            function f2(err) {
                alert(err);
            }
            function f3() {
                setLoading(true)
                uploadTask.snapshot.ref.getDownloadURL().then(async url => {
                    let obj = {
                        comments: [],
                        likes: [],
                        pUrl: url,
                        username: userData?.username,
                        uProfile: userData?.profileUrl,
                        userId: userData?.userId,
                        createdAt: database.getUserTimeStamp()
                    }
                    await database.posts.add(obj)
                    setLoading(false)
                });
            }
        }
    }
    return (
        <div>
            <div className="navbar">
                <button onClick={handleLogout} disabled={loading}>Logout</button>
            </div>
            <div className="uploadImage">
                <div className={classes.root}>
                    <input accept="file" className={classes.input} id="icon-button-file" type="file"
                        onChange={handleInputFile}
                    />
                    <label htmlFor="icon-button-file">
                        <Button variant="contained" color="primary" component="span" disabled={loading} endIcon={<PhotoCamera />}>
                            Upload
                        </Button>
                    </label>
                </div>
            </div>
            <div className="posts">
                posts
            </div>
        </div>
    )
}
export default Feed