import { render } from '@testing-library/react';
import React, {Component, useState} from 'react';
class Login extends Component {
    render(){
        
        
        return (
            <div class="main-content">
    <div class="section">
  <div class="column">
    <div class="content"></div>
    <h1 class="text-center">Login</h1>
            <form method="post" className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="iusername" class="control-label">Username *</label>
                        <input id="iusername" name="username" type="text"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ipassword" class="control-label">Password *</label>
                        <input id="ipassword" name="password" type="password" />
                    </div>
                    <div className="form-group form-action">
                        <button type="submit" className="btn btn-primary btn-submit" >
                            Login <i className=" icon-submit fa fa-sign-in"></i>
                        </button>
                    </div>
            </form>
            </div>
        </div>
        </div>
        )
    }
}
export default Login;
