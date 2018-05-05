import React from 'react'
import { connect } from 'react-redux'


const Home = (props) => {
    return (
        <div>
            <h2>Visual style guide is a collection of standard reusable styles and js components for your webapp development.</h2>
        	<br/><br/>
            <p>{props.conrent.type} page data: {props.conrent.data}</p>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    conrent: state.content.home
})


export default connect(mapStateToProps)(Home)