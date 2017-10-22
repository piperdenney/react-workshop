import React, {Component} from 'react'

class Stats extends Component {
  render() {
    return(<div>
      <h4 className='q'>Where am I located?</h4>
      <p>{this.props.location}</p>
      <h4 className='q'>What is my favorite color?</h4>
      <p>{this.props.color}</p>
      <h4 className='q'>What is my sign, you ask?</h4>
      <p>{this.props.sign}</p>
    </div>)
  }
}

export default Stats;
