import React, { useState, useEffect } from 'react'
import './News.css'
import axios from 'axios'
import blank from '../../assets/blank.png'

const News = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // List of credible sources
  const credibleSources = [
    'reuters.com',
    'bloomberg.com',
    'forbes.com',
    'techcrunch.com',
    'agriculture.com',
    'agfundernews.com',
    'futurefarming.com',
    'modernfarmer.com',
    'sciencedaily.com',
    'nature.com'
  ]

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api.thenewsapi.com/v1/news/all', {
          params: {
            api_token: 'FXBBTzuix590I7Sr4nfC7KCnI67llwvGnhv9nPLf',
            search: 'agricultural technology OR agtech OR farming innovation',
            language: 'en',
            limit: 3,
            sort: 'published_at',
            domains: credibleSources.join(',')
          }
        })

        // Verify and filter articles
        const verifiedArticles = response.data.data
          .filter(article => (
            article.title &&
            article.description &&
            !article.title.includes('Sponsored') &&
            !article.title.includes('Advertisement') &&
            article.description.length > 50
          ))
          .slice(0, 3)

        setNews(verifiedArticles)
        setLoading(false)
      } catch (err) {
        console.error('News fetch error:', err)
        setError('Unable to load latest news')
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) return (
    <div className="news">
      <div className="news-loading">
        <div className="loading-spinner"></div>
        <p>Loading latest agricultural technology news...</p>
      </div>
    </div>
  )

  if (error) return (
    <div className="news">
      <div className="news-error">
        <p>{error}</p>
        <p>Please try again later</p>
      </div>
    </div>
  )

  return (
    <div className='news'>
      <div className="news-grid">
        {news.map((article, index) => (
          <div className="news-card" key={index}>
            <img 
              src={article.image_url || blank} 
              alt="" 
              onError={(e) => e.target.src = blank} 
            />
            <div className="news-content">
              <div className="news-date">
                {new Date(article.published_at).toLocaleDateString()}
              </div>
              <div className="news-source">{article.source}</div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a 
                href={article.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-more-link"
              >
                <button className="read-more">Read Full Article</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
