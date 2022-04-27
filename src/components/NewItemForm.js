import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const NewItemForm = () => {
    const {dispatch} = useContext(ItemContext)
    const [content, setContent] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: "ADD_ITEM", item: {
            content
        }});
        setContent("");
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="new list item" value={content}
            onChange ={(event) => setContent(event.target.value)} required />
            <input type="submit" value="+" />
        </form>
     );
}
 
export default NewItemForm;
