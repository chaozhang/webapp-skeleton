import React from 'react'
import { connect } from 'react-redux'


const Dependency = (props) => {
    return (
        <div>
            <p>{props.content.data}</p>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    content: state.content.dependency
})


export default connect(mapStateToProps)(Dependency)