import React, {Component} from 'react';
import './Navbar.css';


const navlist = [
  {id: 1, name: "home"},
  {id: 2, name: "reading"},
  {id: 3, name: "life"},
  {id: 4, name: "about"},
  {id: 5, name: "contact"}]

class ListItem extends Component {
  state = {hover: false}
  handleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  render() {
    var ste;
    if (this.state.hover) {
      ste = {color:'#C0C0C0'}
    }
    return (
      <li>
        <a role="button"
           style={ste}
           target="_self"
           onMouseOver={this.handleHover}
           onMouseLeave={this.handleHover}
           href="http://www.iread.live/">{this.props.value.toUpperCase()}</a></li>
    );
  }
}



function MyUl(props) {
  const items = props.items;
  const listitems = items.map((item) =>
    <ListItem key={item.id.toString()}
              value={item.name} />
  );
  return (
    <ul>
    {listitems}
    </ul>
  );
}

class Navbar extends Component {
  render() {
    return (
      <MyUl items={navlist} />
    );
  }
}

export default Navbar
