import React, { Component } from 'react'

export class NewsItem extends Component {
    noPhotoSource = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeG8eNGIrLcY_4JsLdQS_GmbtCrsh-PvXWaQ&s'
    

    render() {

        let { title, description, imageUrl ,newsUrl} = this.props;
        return (
            <div className="card mx-2 my-3" style={{ width: '18rem' }}>
                <img src={(imageUrl===null)?this.noPhotoSource:imageUrl} className="card-img-top" alt="🤒🤒" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} target='_blank' className="btn btm-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default NewsItem
