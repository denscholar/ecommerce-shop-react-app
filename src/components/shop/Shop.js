import React, { Component } from 'react'
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, title, items, routeName }) => (
                        <CollectionPreview
                            key={id}
                            title={title}
                            items={items}
                            routeName={routeName}
                        />
                    ))
                }
            </div>
        )
    }
}
export default Shop;