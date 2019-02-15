import React from 'react' 

const Numbers = ({number , onAdd}) => {

    return (<div>
        <h1>{number}</h1>
        <button onClick={onAdd}>add</button>
    </div>)
}

export default Numbers