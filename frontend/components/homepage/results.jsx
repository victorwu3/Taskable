import React from 'react';
import { Link } from 'react-router-dom';


class Results extends React.Component {


  render() {
    return (
        <li className="search-result">
          <Link to="tutors/form" className="search-link" onMouseDown={this.props.updateSubject(this.props.subject[1])}>
            <div className="search-result-row">
              <div className="search-pic-container">
                <div className={`search-pic search-pic-${this.props.subject[0]}`}></div>
              </div>
              <div className="search-result-text">{`${this.props.subject[0]}`}</div>
            </div>
          </Link>
        </li>
    )
  }
}


export default Results;
