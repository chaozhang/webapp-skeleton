import { combineReducers } from 'redux'
import home from './home/reducer'
import technologies from './technologies/reducer'
import dependency from './dependency/reducer'
import profileData from 'WebCommon/src/data/profile'
import baseGitRepoData from 'WebCommon/src/data/gitRepo'


const gitRepoData = {
    ...baseGitRepoData,
    appName: 'webapp-skeleton-react-redux'
};

const content = combineReducers({
    home,
    technologies,
    dependency
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
