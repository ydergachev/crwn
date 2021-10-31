import React from 'react';
import './collection_preview.scss';

import CollectionItem from '../collection_item/collection_item';

function CollectionPreview({title, items}) {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {items.filter((item, idx) => idx < 4).map(({id, ...restProps}) => {
          return ( 
            <CollectionItem key={id} {...restProps}/>
          )
        })}
      </div>
    </div>
  )
}

export default CollectionPreview;