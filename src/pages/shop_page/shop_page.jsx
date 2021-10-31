import React from 'react';

import SHOP_DATA from './shop_data';

import CollectionPreview from '../../components/collection_preview/collection_preview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    }
  }

  render () {
    const {collections} = this.state;

    return (<div className='shop-page'>
      {collections.map((collection) => {
        return <CollectionPreview key={collection.id} title={collection.title} routeName={collection.routeName} items={collection.items}/>
      })}
    </div> )
      
  }
}
export default ShopPage;