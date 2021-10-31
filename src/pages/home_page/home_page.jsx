import React from 'react';
import './home_page.scss';

// import {Route, Link} from 'react-router-dom';

import Directory from '../../components/directory/directory';

export function HomePage (props) {
  return (
    <div className='homepage'>
      <Directory />
  </div>
  );
}

export default HomePage;