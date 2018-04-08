import React from 'react';

var jd = {
  uid: 0,
  firstName: "James",
  lastName: "Dean",
  mobile: "832-392-3949",
  org: "Google",
  loc: "Hollywood, CA",
  imgPath: "https://avatars3.githubusercontent.com/u/1170938"
}
var jl = {
  uid: 1,
  firstName: "John",
  lastName: "Lennon",
  mobile: "832-392-3949",
  org: "Airbnb",
  loc: "New York, NY",
  imgPath: "https://avatars3.githubusercontent.com/u/1170938"
}
var pm = {
  uid: 2,
  firstName: "Paul",
  lastName: "McCartney",
  mobile: "832-392-3949",
  org: "Apple",
  loc: "London, UK",
  imgPath: "https://avatars3.githubusercontent.com/u/1170938"
}
var contacts = [jd, jl, pm]

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

function ListItemConnect(props) {
  return (
    <li className="list-item">
      <div className="prof-cont">
        <img src={props.imgPath} className="profile-pic" />
      </div>
      <div className="list-deets">
        <h3 className="list-name">{props.firstName} {props.lastName}</h3>
        <svg width="8px" height="12px" viewBox="0 0 8 12" fill="#535353">
          <path d="M4,12 L3.78159319,11.7280453 C3.62722351,11.5359608 0,6.98996122 0,4.2674441 C0,1.91457411 1.79427688,0 4,0 C6.20572312,0 8,1.91457411 8,4.2674441 C8,6.98996122 4.37277649,11.5359608 4.21840681,11.7280453 L4,12 L4,12 Z M4,0.613878269 C2.11136891,0.613878269 0.575406032,2.25286724 0.575406032,4.2674441 C0.575406032,6.40380649 3.2133024,10.0174372 4,11.0474986 C4.78638824,10.0174372 7.42459397,6.40248632 7.42459397,4.2674441 C7.42459397,2.25286724 5.88863109,0.613878269 4,0.613878269 L4,0.613878269 Z" id="Fill-55"></path>
          <path d="M4,6 C2.8969574,6 2,5.10263692 2,4 C2,2.89736308 2.8969574,2 4,2 C5.1030426,2 6,2.89736308 6,4 C6,5.10263692 5.1030426,6 4,6 L4,6 Z M4,3 C3.44885993,3 3,3.4485342 3,4 C3,4.5514658 3.44885993,5 4,5 C4.55114007,5 5,4.5514658 5,4 C5,3.4485342 4.55114007,3 4,3 L4,3 Z" id="Fill-56"></path>
        </svg>
        <p className="list-loc">
          {props.loc}
        </p>
        <br />
        <p className="list-org">{props.org}</p>
      </div>
    </li>
  )
}

const listConnectItems = contacts.map((c) =>
  <ListItemConnect firstName={c.firstName} lastName={c.lastName}
    loc={c.loc} org={c.org} key={c.uid} imgPath={c.imgPath}/>
);

class ListConnect extends React.Component {
  render() {
    return (
      <ul className="connect-list">
        {listConnectItems}
      </ul>
    );
  }
}

function aggContactDetails(c) {
  var ret = []
  var ignore = ["uid", "firstName", "lastName", "org", "loc", "imgPath"]
  for (var x in c) {
    if (ignore.indexOf(x) == -1) {
      ret.push(x);
    }
  }
  return ret;
}

const listDetailItems = aggContactDetails(contacts[1]).map((d) =>
  <p>{d}</p>
);

class ListDetail extends React.Component {
  render() {
    return (
      <table>
        {listDetailItems}
      </table>
    )
  }
}

class ViewDetail extends React.Component {
  render() {
    return (
      <div className="detail-view">
        <img src={contacts[0].imgPath} className="detail-pic" />
        <h3>{contacts[1].firstName} {contacts[1].lastName}</h3>
        <p className="list-org-active">{contacts[1].org}</p>
        <br />
        <svg width="8px" height="12px" viewBox="0 0 8 12" fill="#535353">
          <path d="M4,12 L3.78159319,11.7280453 C3.62722351,11.5359608 0,6.98996122 0,4.2674441 C0,1.91457411 1.79427688,0 4,0 C6.20572312,0 8,1.91457411 8,4.2674441 C8,6.98996122 4.37277649,11.5359608 4.21840681,11.7280453 L4,12 L4,12 Z M4,0.613878269 C2.11136891,0.613878269 0.575406032,2.25286724 0.575406032,4.2674441 C0.575406032,6.40380649 3.2133024,10.0174372 4,11.0474986 C4.78638824,10.0174372 7.42459397,6.40248632 7.42459397,4.2674441 C7.42459397,2.25286724 5.88863109,0.613878269 4,0.613878269 L4,0.613878269 Z" id="Fill-55"></path>
          <path d="M4,6 C2.8969574,6 2,5.10263692 2,4 C2,2.89736308 2.8969574,2 4,2 C5.1030426,2 6,2.89736308 6,4 C6,5.10263692 5.1030426,6 4,6 L4,6 Z M4,3 C3.44885993,3 3,3.4485342 3,4 C3,4.5514658 3.44885993,5 4,5 C4.55114007,5 5,4.5514658 5,4 C5,3.4485342 4.55114007,3 4,3 L4,3 Z" id="Fill-56"></path>
        </svg>
        <p className="list-loc">{contacts[1].loc}</p>
        <h3>Name</h3>
        <p>{contacts[0].firstName}</p>
        <h3>Phone</h3>
        <p>832-394-9203</p>
        <ListDetail />
      </div>
    )
  }
}