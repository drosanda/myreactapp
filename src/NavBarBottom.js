import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';

class NavBarBottom extends Component {
    render(){
        return (
            <div class="navbar navbar-bottom">
  <div>
    <Link to="/"><i class="fa fa-home"></i></Link>
    <Link to="/about"><i class="fa fa-search"></i></Link>
    <Link to="/project"><i class="fa fa-wechat"></i></Link>
    <Link to="/login"><i class="fa fa-user"></i></Link>
  </div>
</div>
        )
    }
}

export default NavBarBottom;