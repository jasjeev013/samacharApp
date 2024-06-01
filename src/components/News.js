
import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setpage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)



    useEffect(() => {
        setData();
        // eslint-disable-next-line
    }, []);

    const setData = async () => {
        props.setProgress(40);
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        // console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    const updateData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        // console.log(url);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    }

    const fetchMoreData = () => {
        setTimeout(() => {
            setpage(page + 1)
            updateData();
        }, 1500);


    };

    let { mode } = props;
    return (

        <div className='container' >

            <h1 className=' mx-3' style={{
                color: (mode === 'light') ? 'black' : 'white',
                backgroundColor: (mode === 'light') ? '#D3712C' : '#490D0D',
                borderRadius: '20px',
                padding: '10px',
                margin: '20px',
                textAlign: 'center',
                marginTop: '90px'

            }}> <i><b> ---- 📰 TOP HEADLINES 📰 ----- </b></i>  </h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={!loading && <Spinner />}
            >
                <div className="container">

                    <div className="row my-5">
                        {articles.map((element) => {
                            return (<div className="col-md-3" key={element.url}>
                                <NewsItem title={(element.title == null) ? element.title : element.title.slice(0, 50)} description={(element.description == null) ? element.description : element.description.slice(0, 89)} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} mode={mode} />

                            </div>);
                        })}
                    </div>
                </div>
            </InfiniteScroll>


        </div>
    )

}

export default News

News.lengthdefaultProps = {
    country: 'in',
    pageSize: 16,
    category: 'general',
    totalResults: 0,
    page: 1
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}