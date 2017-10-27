import React from 'react';

class DateBoxItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let date = this.props.date;
    return (
      <div className="pick-date-window">
        <input type="radio" value={date.day} className="is-hidden"></input>
        <label className={this.props.selected===date.date ? "selected-date" : ""}>
          <span>
            <strong>{date.day_string}</strong>
          </span>
          <span>{date.date}</span>
        </label>
      </div>
    );
  }
}


export default DateBoxItem;
