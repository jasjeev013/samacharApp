import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 16,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageSize: 20
        }
    }



    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f0d8402b7c0046bf9c770fd27632ec28&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, publishedAt: parsedData.publishedAt, author: parsedData.author, loading: false });
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
        let { mode, pageSize } = this.props;
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
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (<div className="col-md-3" key={element.url}>
                            <NewsItem title={(element.title == null) ? element.title : element.title.slice(0, 50)} description={(element.description == null) ? element.description : element.description.slice(0, 89)} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} mode={mode} />

                        </div>);
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr;  Prev </button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News
