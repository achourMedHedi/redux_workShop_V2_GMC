import React from 'react' 
import {connect} from 'react-redux'
class Receive extends React.Component {

    render() {
        return (
            <h1>
               reducers {this.props.number} <br />
               state {this.props.nb}
            </h1>
        )
    }
}

const mapStateToProps = state => ({
    number : state.Experience.nb
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps , mapDispatchToProps)(Receive)