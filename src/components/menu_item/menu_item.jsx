import React from 'react';
import './menu_item.scss';
 
function MenuItem ({title, imageUrl, size}) {
  return (
    <div className={`${size} menu-item`}>
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

export default MenuItem;