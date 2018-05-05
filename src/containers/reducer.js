import { combineReducers } from 'redux'
import home from './home/reducer'
import color from './colors/reducer'
import profileData from 'WebCommon/data/profile'
import baseGitRepoData from 'WebCommon/data/gitRepo'


const gitRepoData = {
    ...baseGitRepoData,
    appName: 'webapp-skeleton-react-redux'
};

const content = combineReducers({
    home,
    color
});

const profile = (state=profileData) => {
    return state;
}

const gitRepo = (state=gitRepoData) => {
    return state;
}


const reducers = combineReducers({
    content,
    profile,
    gitRepo
});


export default reducers
