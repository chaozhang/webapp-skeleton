import React from 'react'
import { connect } from 'react-redux'
import { Footer } from 'WebCommon/lib/js/'


const mapStateToProps = (state, ownProps) => ({
    year: (new Date()).getFullYear().toString(),
    name: state.profile.name,
    title: state.profile.title,
    repo: {
        name: state.gitRepo.appName,
        user: state.gitRepo.user,
        url: state.gitRepo.url
    },
    gitBtns: state.gitRepo.gitBtns
})


export default connect(mapStateToProps)(Footer)