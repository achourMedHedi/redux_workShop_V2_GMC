import React from 'react' 
import Numbers from './Numbers/Numbers'

const Counter = ({number , onAdd}) => {

    return (<div>
        <Numbers number={number} onAdd={onAdd} />
        
    </div>)
}

export default Counter