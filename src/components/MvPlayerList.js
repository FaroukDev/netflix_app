import React, { Component } from "react";

class MvPlayerList extends Component {
  render() {
    const position = "1";
    const total = "1";
    return (
      <div className="mvPlayerList">
        <div className="mvPlayerList--header">
          <h3>{this.props.selectedMovie.title}</h3>
          <div className="mvPlayerList--badge">
            {position}/{total}
          </div>
        </div>
        <div className="mvPlayerList--list">{this.renderList(this.props)}</div>
      </div>
    );
  }
}

export default MvPlayerList;
