import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <div className="not-found-title">
      404
    </div>
    <div className="not-found-subtitle">
      Oops, the page you&apos;re looking for doesn&apos;t exist.
    </div>
    <div className="not-found-buttons">
      <Link className="styled-link" to="/">
        <span className="not-found-button">Go to homepage</span>
      </Link>
    </div>
  </div>
);

export default NotFound;
