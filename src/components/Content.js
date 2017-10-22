import React, {Component} from 'react'
import Blurb from './Blurb'
import Stats from './Stats'

class Content extends Component {
  render(){
    return(<div>
      <h2>Home</h2>
      <Stats location='Seattle' color='Certain shades of blue' sign='Capricorn, scorpio rising, libra moon' />
      <Blurb />
      </div>)
  }
}

export default Content;
