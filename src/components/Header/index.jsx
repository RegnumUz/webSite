import React from "react";
import { Link } from "react-router-dom";
import '../../assets/style/header.css'

const index = () => {
  return (
        <div>
          <div className="navbar dflex">
            <span className="newBrend">newBrend</span>
            <Link className="link " to='/' >HOME</Link>
            <Link className="link" to='/bags' >BAGS</Link>
            <Link className="link" to='/sneakers' >SNEAKERS</Link>
            <Link className="link" to='/belt' >BELT</Link>
            <Link className="link" to='/contact' >CONTACT</Link>
          </div>
        </div>
  );
};

export default index;
