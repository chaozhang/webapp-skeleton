import React from 'react'
import { connect } from 'react-redux'


const Colors = (props) => {
    return (
        <h2>
            {props.conrent.type} page data: {props.conrent.data}
        </h2>
    )
}

const mapStateToProps = (state, ownProps) => ({
    conrent: state.content.color
})


export default connect(mapStateToProps)(Colors)