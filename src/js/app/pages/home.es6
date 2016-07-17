import React from 'react'
import Store from '../store/store.es6'

 
class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.context = context;      
  }

  state = {
    data: null
  }

  render() {
    return <div className="content home">
      <label>Home</label>
    </div>;
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};
 
export default Home