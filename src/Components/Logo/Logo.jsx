import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to={"/"}>
      <div>
        <h1 className="text-3xl font-bold text-blue-600">GoTix</h1>
      </div>
    </Link>
  );
};

export default Logo;
