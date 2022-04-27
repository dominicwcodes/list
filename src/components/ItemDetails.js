import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemDetails = ({item}) => {
    const { dispatch } = useContext(ItemContext);
    return ( 
        <li onClick={() => dispatch({type: "REMOVE_ITEM", id: item.id})}>
            <div className="content">{item.content}</div>
        </li>
     );
}
 
export default ItemDetails;
