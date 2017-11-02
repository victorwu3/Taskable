import React from 'react';


class Results extends React.Component {


  render() {
    return (
      <ul id="search-results">
        <li className="search-result">
          <a className="search-link">
            <div className="search-result-row">
              <div className="search-pic-container">
                <div className="search-pic-coding"></div>
              </div>
              <div className="search-result-text">Coding</div>
            </div>
          </a>
        </li>
        <li className="search-result">
          <a className="search-link">
            <div className="search-result-row">
              <div className="search-pic-container">
                <div className="search-pic-accounting"></div>
              </div>
              <div className="search-result-text">Accounting</div>
            </div>
          </a>
        </li>
        <li className="search-result">
          <a className="search-link">
            <div className="search-result-row">
              <div className="search-pic-container">
                <div className="search-pic-physics"></div>
              </div>
              <div className="search-result-text">Physics</div>
            </div>
          </a>
        </li>
      </ul>
    )
  }
}


export default Results;
