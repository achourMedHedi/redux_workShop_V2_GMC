import React from 'react' 
import {connect} from 'react-redux'
import Receiver from './receiver/receiver';

const AppWithRedux = () => {
    return (
        <div>
            with redux
            <Receiver />
        </div>
    )
}
export default AppWithRedux