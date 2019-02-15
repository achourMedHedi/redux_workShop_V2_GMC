import React from 'react' 
import {connect} from 'react-redux'
import {Add} from '../../../../actions/PointsActions'

const Numbers = (props) => {

    return (<div>
        <h1>{props.number}</h1>
        <button onClick={props.Add}>add</button>
    </div>)
}

const mapStateToProps = state => ({
    number : state.Points.number
})

const mapDispatchToProps = {
  Add
}
export default connect(mapStateToProps , mapDispatchToProps)(Numbers)
