import React from 'react'
import { connect } from 'react-redux'


const Home = (props) => {
    return (
        <div>
            <p>{props.conrent.data}</p>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    conrent: state.content.home
})


export default connect(mapStateToProps)(Home)