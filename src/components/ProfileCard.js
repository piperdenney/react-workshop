import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(<div>
      Hi, Im where the profile card goes
      <h3>{this.props.name}</h3>
      <p>I like coding, being outdoors & forensic files</p>
      </div>)
  }
}
export default ProfileCard;
