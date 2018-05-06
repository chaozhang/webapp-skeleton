import React from 'react'
import { connect } from 'react-redux'


const Technologies = (props) => {
    return (
        <div>
            <h2>{props.conrent.type}:</h2>
            <br/>
            {props.conrent.data.map((item, index) => {
            	return <p key={index}>{item}</p>;
            })}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    conrent: state.content.technologies
})


export default connect(mapStateToProps)(Technologies)