import React, {Component} from 'react'
import Blurb from './Blurb'
import Stats from './Stats'
import About from './About'
import Contact from './Contact'
import Home from './Home'

class Content extends Component {
  render(){
    let page = {
      'about': <About />,
      'home': <Home />,
      'contact': <Contact />
    }
    return(<div>
      {page[this.props.currentPage]}
      </div>)
  }
}

export default Content;
