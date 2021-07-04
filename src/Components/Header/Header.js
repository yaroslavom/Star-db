import React from 'react';
import { Link} from 'react-router-dom'

import './Header.css';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">
          StarDB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people/">People</Link>
        </li>
        <li>
          <Link to="/planets/">Planets</Link>
        </li>
        <li>
          <Link to="/starships/">Starships</Link>
        </li>
        <li>
          <Link to="/meet">Let's meet</Link>
        </li>
      </ul>
      <button onClick={onServiceChange} className="btn btn-primary btn-sm">Change Service</button>
    </div>
  );
};

export default Header;