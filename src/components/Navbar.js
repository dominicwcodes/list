import React, { useState } from 'react';
import Popup from './Popup';


const Navbar = () => {
    const [aboutPopup, setAboutPopup] = useState(false);
    const [instructionsPopup, setInstructionsPopup] = useState(false);
    return ( 
        <div className="navbar">
            <h1>list</h1>
            <button type="button" onClick={() => setAboutPopup(true)}>about</button>
            <Popup trigger = {aboutPopup} setTrigger={setAboutPopup}>
                <h1>about</h1>
                <p>This is a project I used to learn React context and hooks. I have tried to make the UI as simple as possible so it's easy for anybody to use.</p>
            </Popup>
            <button type="button" onClick={() => setInstructionsPopup(true)}>instructions</button>
            <Popup trigger = {instructionsPopup} setTrigger={setInstructionsPopup}>
                <h1>instructions</h1>
                <p>To add a new item, type it into the 'new list item' text box and click the + button or hit enter. This will add a new item to the list</p>
                <p>To delete an item, click the item and it will be removed.</p>
            </Popup>
        </div>
     );
}
 
export default Navbar;
