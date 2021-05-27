import React from 'react'
import ColelctItem from '../collecttionItem/CollectionItem';
import '../collection-preview/CollectionPreview.css';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 class="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, index) => index < 4)
                .map(({id, ...otherCollectionItemProps}) => (
                    <ColelctItem key={id} {...otherCollectionItemProps}  />
                    
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview
