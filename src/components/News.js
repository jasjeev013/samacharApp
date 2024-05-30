import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }



    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f0d8402b7c0046bf9c770fd27632ec28&page=${this.state.page}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults   });
    }

    handlePreviousClick = () => {
        this.setState({
            page: --this.state.page
        })
        this.componentDidMount();
    }
    handleNextClick = () => {

        this.setState({
            page: ++this.state.page
        })

        this.componentDidMount();
    }
    render() {
        let { mode } = this.props;
        return (

            <div className='container my-3'>
                <h1 className=' mx-3' style={{
                    color: (mode === 'light') ? 'black' : 'white',
                    backgroundColor: (mode === 'light') ? '#D3712C' : '#490D0D',
                    borderRadius: '20px',
                    padding: '10px',
                    margin: '20px',
                    textAlign: 'center'

                }}> <i><b> ---- 📰 TOP HEADLINES 📰 ----- </b></i>  </h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (<div className="col-md-3" key={element.url}>
                            <NewsItem title={(element.title == null) ? element.title : element.title.slice(0, 50)} description={(element.description == null) ? element.description : element.description.slice(0, 89)} imageUrl={element.urlToImage} newsUrl={element.url} mode={mode} />

                        </div>);
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr;  Prev </button>
                    <button disabled={this.state.page>= Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
