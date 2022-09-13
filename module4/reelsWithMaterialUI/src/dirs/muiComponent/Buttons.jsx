import * as React from 'react';
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SendIcon from "@material-ui/icons/Send";
function Buttons() {
    return (
        <div >
            <h2> Buttons</h2>
            <div >
                <Button variant="text"  >Hello</Button>
                <Button variant="contained" >Hello</Button>
                <Button variant="outlined" disabled href="https://material.io/design">Hello</Button>
            </div>
            <h2>Colors sizes & Event Listeners</h2>
            <div >
                <Button variant="contained" color="primary" size="large" style={{ marginRight: "8px" }} onClick={() => { alert("hello") }}>Hello</Button>
                <Button variant="contained" color="secondary" size="small" onClick={() => { alert("hello") }}>Hello</Button>
            </div>
            <h2>Buttons with icons</h2>
            <div>
                <Button variant="outlined" startIcon={<DeleteIcon></DeleteIcon>} style={{ marginRight: "8px" }} >Delete</Button>
                <Button variant="contained" endIcon={<SendIcon></SendIcon>} color="primary" >Send</Button>
            </div>
            <h2>Icon Buttons</h2>
            {/* isese click ki functionality aati hai  */}
            <IconButton >
                <DeleteIcon fontSize="large"></DeleteIcon>
            </IconButton>
            <IconButton size="small" disabled>
                <DeleteIcon ></DeleteIcon>
            </IconButton>
            <IconButton color="primary">
                <DeleteIcon ></DeleteIcon>
            </IconButton>
        </div >

    )
}
export default Buttons;