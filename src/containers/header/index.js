import React from 'react'
import { connect } from 'react-redux'
import { Header, Icon } from 'WebCommon/lib/js/'


const mapStateToProps = (state, ownProps) => ({
    repo: `${state.gitRepo.url}${state.gitRepo.appName}`,
    issues: `${state.gitRepo.url}${state.gitRepo.appName}/issues/new`,
    logo: <Icon id="home" />
})


export default connect(mapStateToProps)(Header)