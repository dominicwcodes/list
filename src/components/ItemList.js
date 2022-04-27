import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetails from './ItemDetails';

const ItemList = () => {
    const {items} = useContext(ItemContext);
    return items.length ? ( 
        <div className="item-list">
            <ul>
                {items.map(item => {
                    return ( <ItemDetails item={item} key={item.id} />);
                })}
            </ul>
        </div>
     ) : (
        <div className="empty">
             <p>There are no items on this list!</p>
        </div>
     );
}
 
export default ItemList;
