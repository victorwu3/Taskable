import React from 'react';


class SortingContainer extends React.Component {

  render() {
    return (
      <div className="recommendations-filter-container">
        <div className="recommendations-filter-panel">
          <div className="recommendations-filter">
            <h4 className="recommendations-filter-title">
              <span>Sorted By:</span>
            </h4>
            <select className="filter-dropdown" onChange={this.props.handleChange('sort')}>
              <option value="Recommended">Recommended</option>
              <option value="priceAsc">Price (lowest to highest)</option>
              <option value="priceDsc">Price (highest to lowest)</option>
              <option value="num_completed">Number of Sessions Completed</option>
              <option value="Rating">Most Reviews</option>
            </select>
          </div>
          <div className="recommendations-filter">
            <h4 className="recommendations-filter-title">
              <span>Task Date & Time:</span>
            </h4>
            <div className="filter-time-container">
              <div className="datetime-window-container">
                {this.props.dateBoxes}
              </div>
              <div className="time-period-dropdown">
                <select className="time-dropdown" onChange={this.props.handleChange('time')}>
                  <option value={[1,2,3]}>I'm Flexible</option>
                  <option value={1}>Morning 8AM - 12PM</option>
                  <option value={2}>Afternoon 12PM - 4PM</option>
                  <option value={3}>Evening 4PM - 8PM</option>
                </select>
              </div>
              <div>
                <span className="filter-subtitle">You can agree later on an exact start time with your selected Tutor.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SortingContainer;
