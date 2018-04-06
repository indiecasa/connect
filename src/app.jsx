import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ListFilterableContacts />
      </div>
    );
  }
}

class ListFilterableContacts extends React.Component {
  render() {
    return (
      <div>
        <BarTitle />
        <ViewSplit />
      </div>
    );
  }
}

class BarTitle extends React.Component {
  render() {
    return (
      <div className="title-bar">
        <h1 className="title">Connect</h1>
        {/* <Search />
        <BtnNew /> */}
      </div>
    );
  }
}

class ViewSplit extends React.Component {
  render() {
    return (
      <div>
        <ListConnect />
        <ViewDetail />
      </div>
    );
  }
}

class ListConnect extends React.Component {
  render() {
    return (
      <ul>
        <li>James Dean</li>
        <li>John Lennon</li>
        <li>Paul McCartney</li>
      </ul>
    );
  }
}

class ViewDetail extends React.Component {
  render() {
    return (
      <div>
        <h3>Name</h3>
        <p>James Dean</p>
        <h3>Phone</h3>
        <p>832-394-9203</p>
      </div>
    )
  }
}