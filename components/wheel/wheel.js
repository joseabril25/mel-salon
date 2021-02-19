import React, { useState } from 'react';
import wheelItems from './wheel-items'
 const Wheel = ({}) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const wheelVars = {
    '--nb-item': wheelItems.length,
    '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    const selectItem = () => {
        if (selectedItem === null) {
            const spinItem = Math.floor(Math.random() * wheelItems.length);
            // if (this.props.onSelectItem) {
            //     this.props.onSelectItem(selectedItem);
            // }
            setSelectedItem(spinItem);
        } else {
            setSelectedItem(null);
            setTimeout(selectItem(), 500);
        }
    }



    return (
        <div className="wheel-container">
            <div className={`wheel ${spinning}`} style={wheelVars} onClick={selectItem}>
                {
                    wheelItems.map(item => 
                        <div className="wheel-item" style={{ '--item-nb': item.id }}>
                            {item.title}
                        </div>
                    )
                }
        </div>
      </div>
    );
}

export default Wheel;