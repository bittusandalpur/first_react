import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      articles: [],
      error: null,
      page: 1,
      pageSize: 6,
      totalResults: 0,
    };
  }

  componentDidMount() {
    this.fetchNews();
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.category !== this.props.category || prevState.page !== this.state.page) {
      this.fetchNews();

    }
  }

   capitalizedFirstLatter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
   }

  fetchNews = async () => {
    this.setState({ loading: true });
    const { page, pageSize } = this.state;
    const { country, category } = this.props;
   document.title=` ${this.capitalizedFirstLatter(this.props.category )} -News Monkey`

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ec5e16644fe1401c83d0f3f0ae46b6a9&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const parsedData = await response.json();
      if (parsedData.status !== "ok") {
        throw new Error(parsedData.message);
      }
    
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error: error.toString(), loading: false });
    }
  };

  handlePrev = () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      () => {
        this.fetchNews();
      }
    );
  };

  handleNext = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => {
        this.fetchNews();
      }
    );
  };
  fetchMoreData=async()=>{
    this.setState({ loading: true });
    const { page, pageSize } = this.state;
    const { country, category } = this.props;
   document.title=` ${this.capitalizedFirstLatter(this.props.category )} -News Monkey`
   this.props.setProgerss(10)

    try {
      this.setState({page:this.state.page+1})
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7282e5847f2c4a86af50464e9480c99d&page=${page}&pageSize=${pageSize}`;
      const response = await fetch(url);
      const parsedData = await response.json();
      if (parsedData.status !== "ok") {
        throw new Error(parsedData.message);
      }
    
      this.setState({
        articles: this.state.articles.concat(parsedData.articles) ,
        totalResults: parsedData.totalResults,
        loading: false,
        error: null,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ error: error.toString(), loading: false });
    }

  }

  render() {
    const { articles, page, totalResults, pageSize, loading, error } = this.state;

    return (
      <div className="container my-5 text-center" >
        <h2 style={{margin:"80px"}}>News Monkey Top - {this.capitalizedFirstLatter(this.props.category)} Heading</h2>
        {loading && <Spinner />}

        <div className="row">
       
          {!loading &&
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title.slice(0, 45)}
                  description={element.description ? element.description.slice(0, 45) : "Not described"}
                  imgurl={element.urlToImage ? element.urlToImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QYq-W2TIXp0aTBLCEb84AEcTFWH7tptOoQ&s"}
                  newsurl={element.url} author={element.author?element.author:"Unknown "} date={element.publishedAt} source={element.source.name}
                />
              </div>
              
            ))}
           
          <div className="container d-flex justify-content-evenly">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrev}
              disabled={page <= 1}
            >
              Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
              disabled={page >= Math.ceil(totalResults / pageSize)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
