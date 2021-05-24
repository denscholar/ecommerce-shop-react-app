import React from 'react'
import './MenuItem.css';
import { withRouter } from 'react-router-dom'; //Higher Order Component. A function that takes a component as an argument and returns a modified component.

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return(
    <div onClick={() => history.push(`${match.url}${linkUrl}`)}
        className={`${size} menu-item`}>
        <div className='backgroundImage'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
    )
}

export default withRouter(MenuItem)
