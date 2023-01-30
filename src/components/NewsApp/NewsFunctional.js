import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
export default function NewsFunctional() {
    const [News,setNews] = useState([])
    let GetNews = async()=> {
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d29434edd612440fa2d5b6c85b8c0a11"
        let data = await fetch(url)
        let parsedData = await data.json()
        setNews(parsedData.articles)
    }
    useEffect(()=> {
        GetNews()
    })
  return (
    <div className='container my-3'>
        <h2>Today's Top Headlines</h2>
        <div className='row'>

          {News.map((element) => {
            return <div className='col-md-3 my-4 mx-4' key={element.url}>
              <NewsItem title={element.title.slice(0,40)} description={element.description} urlToImage={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
  )
}
