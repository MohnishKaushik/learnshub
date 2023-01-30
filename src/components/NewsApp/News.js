import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d29434edd612440fa2d5b6c85b8c0a11"
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles})
  }
  render() {

    return (
      <div className='container my-3'>
        <h2>Today's Top Headlines</h2>
        <div className='row'>

          {this.state.articles.map((element) => {
            return <div className='col-md-3 my-4 mx-4' key={element.url}>
              <NewsItem title={element.title.slice(0,40)} description={element.description} urlToImage={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}
