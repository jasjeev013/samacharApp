import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 16,
        category: 'general',
        totalResults: 0,
        page:1
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        props.setProgress(0);
        super();
        this.state = {
            
            articles: [],
            loading: false,
            page: 1,
        }
    }



    async componentDidMount() {
        this.props.setProgress(40);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        console.log(url);
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, publishedAt: parsedData.publishedAt, author: parsedData.author, loading: false });
        this.props.setProgress(100);
    }
    async updateData() {
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults, publishedAt: parsedData.publishedAt, author: parsedData.author, loading: false });
        
    }

    /*handlePreviousClick = () => {
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
    }*/

    fetchMoreData = () => {
        setTimeout(() => {
            this.setState({
                page: this.state.page+1
            });
            this.updateData();
        }, 1500);


    };

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
                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={!this.state.loading && <Spinner />}
                >
                    <div className="container">

                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (<div className="col-md-3" key={element.url}>
                                    <NewsItem title={(element.title == null) ? element.title : element.title.slice(0, 50)} description={(element.description == null) ? element.description : element.description.slice(0, 89)} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} mode={mode} />

                                </div>);
                            })}
                        </div>
                    </div>
                </InfiniteScroll>

                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr;  Prev </button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                </div> */}
            </div>
        )
    }
}

export default News
