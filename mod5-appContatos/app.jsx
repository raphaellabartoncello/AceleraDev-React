import React, { Component } from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/contact'
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      loading: true
    };
  }
  componentDidMount() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then(res => res.json())
      .then(res => this.setState({ items: res }))
      .finally(() => this.setState({ loading: false }))
  }
  render() {
    return (
      <>
        <Topbar />
        <Filters />
        <Contacts>
          {this.state.items.map(item => <Contact data={item} />)}
        </Contacts>
      </>
    )
  }
}

export default App;