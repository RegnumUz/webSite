import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/home.css";

const index = () => {
  return (
        <div className="headerNav nav">
          <Link className="navPage mr-50" to='/' >HOME</Link>
          <Link className="navPage mr-50" to='/bags' >BAGS</Link>
          <Link className="navPage mr-50" to='/sneakers' >SNEAKERS</Link>
          <Link className="navPage mr-50" to='/belt' >BELT</Link>
          <Link className="navPage" to='/contact' >CONTACT</Link>
        </div>
  );
};

export default index;
