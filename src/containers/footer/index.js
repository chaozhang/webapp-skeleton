import React from 'react'
import { connect } from 'react-redux'
import Footer from 'WebCommon/components/footer/'


const mapStateToProps = (state, ownProps) => ({
    year: (new Date()).getFullYear().toString(),
    name: state.profile.name,
    title: state.profile.title,
    repo: {
        name: state.APP_NAME,
        user: state.gitRepo.user,
        url: state.gitRepo.url
    },
    gitBtns: state.gitRepo.gitBtns
})


export default connect(mapStateToProps)(Footer)