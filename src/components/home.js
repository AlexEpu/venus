import React from 'react';
import {Link} from 'react-router-dom'
import Button from './login/logout'


class Home extends React.Component {
    render() {
      return (
        <div className="Home">
          <h3>Home</h3>
          <Button/>
        </div>
  );
    }
  }
  export default Home;