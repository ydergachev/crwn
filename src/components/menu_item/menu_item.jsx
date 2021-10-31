import React from 'react';
import './menu_item.scss';

import { withRouter } from 'react-router-dom';

function MenuItem ({title, imageUrl, size, linkUrl, match, history}) {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div className='background-image' style={{
      backgroundImage: `url(${imageUrl})`
      }} />
      <div className='content'>
        <h2 className='title'>{title}</h2>
        <p className='sub-title'>text</p>
      </div>
  </div>
  ); 
}

export default withRouter(MenuItem);