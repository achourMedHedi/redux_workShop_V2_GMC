import React from 'react' 
import Counter from './Counter/Counter'

const Receiver = ({number , onAdd}) => {

    return (<div>
        <Counter number={number} onAdd={onAdd} />
    </div>)
}

export default Receiver