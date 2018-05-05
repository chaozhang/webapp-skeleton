import React from 'react'
import { connect } from 'react-redux'
import Header from 'WebCommon/components/header/'
import Icon from 'WebCommon/components/icons/'


const mapStateToProps = (state, ownProps) => ({
    repo: `${state.gitRepo.url}${state.APP_NAME}`,
    issues: `${state.gitRepo.url}${state.APP_NAME}/issues/new`,
    logo: <Icon id="home"/>
})


export default connect(mapStateToProps)(Header)