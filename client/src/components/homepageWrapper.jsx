import React, { Component } from 'react'
import CookieBar from './cookieBar'
import Header from './header'
import Footer from './footer'
import TrendingMovieList from './trendingMovieList'

class HomepageWrapper extends Component {
  state = {
    data: null,
    dataIsReady: false
  }

  componentDidMount() {
    this.getTmdbApi()
  }

  getTmdbApi = async () => {
    try {
      const response = await fetch('/api/trending')
      const json = await response.json()
      this.setState({ data: json, dataIsReady: true })
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <div>
        {<CookieBar />}
        {<Header data={this.state.data} dataIsReady={this.state.dataIsReady} />}
        {
          <TrendingMovieList
            data={this.state.data}
            dataIsReady={this.state.dataIsReady}
          />
        }
        {<Footer />}
      </div>
    )
  }
}

export default HomepageWrapper