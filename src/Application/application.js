import React from 'react' 
import Receiver from './receiver/receiver';

class Application extends React.Component {

    state={
        number : 0
    }

    handleAdd = () => {
        const {number} = this.state
        this.setState({
            number : number + 1
        })
    }

    render () {
        const {number} = this.state
        return (
            <div>
                without redux
                <Receiver  number={number} onAdd={this.handleAdd} />
                <hr/>
            </div>
        )
    }
}

export default Application