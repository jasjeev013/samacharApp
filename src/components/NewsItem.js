import React, { Component } from 'react'
import './NewItem.css'

export class NewsItem extends Component {
    noPhotoSource = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeG8eNGIrLcY_4JsLdQS_GmbtCrsh-PvXWaQ&s';




    render() {

        let { title, description, imageUrl, newsUrl, mode } = this.props;
        return (
            <div className="card mx-2 my-3" style={{
                width: '18rem',
                backgroundColor: (mode === 'light') ? '#D3712C' : '#490D0D',
                color: 'white',
                borderRadius: '20px'
            }} >
                <img src={(imageUrl === null) ? this.noPhotoSource : imageUrl} className=" imgs card-img-top mx-1 my-1" alt="🤒🤒" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a rel="noreferrer"  href={newsUrl} target='_blank' className="btn btm-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
