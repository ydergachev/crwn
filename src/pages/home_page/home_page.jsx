import React from 'react';
import './home_page.scss';

import Directory from '../../components/directory/directory';

export function HomePage () {
  return (
    <div className='homepage'>
      <Directory />
  </div>
  );
}

export default HomePage;