import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import wheelItems from './wheel-items';
import { toggleSpin, setSpinResult } from '../../store/actions/app.actions';

 const Wheel = ({}) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const isSpinning = useSelector(({ app }) => app.isSpinning);
    const spinResult = useSelector(({ app }) => app.spinResult);
    const dispatch = useDispatch();
    
    const wheelVars = {
    '--nb-item': wheelItems.length,
    '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    useEffect(() => {
        if(isSpinning){
            selectItem()
        }
    }, [isSpinning]);

    const selectItem = () => {
        if (selectedItem === null) {
            const spinItem = Math.floor(Math.random() * wheelItems.length);
            // if (this.props.onSelectItem) {
            //     this.props.onSelectItem(selectedItem);
            // }

            const prize = wheelItems.find(item => item.id === spinItem);
            dispatch(setSpinResult(prize));
            setSelectedItem(spinItem);
            dispatch(toggleSpin(false))
        } else {
            setSelectedItem(null);
            setTimeout(selectItem(), 1000);
        }
    }



    return (
        <div className="wheel-container">
            <div className={`wheel ${spinning}`} style={wheelVars}>
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