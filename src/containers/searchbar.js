import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchData } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.term.length === 2) {
      try {
        this.props.fetchData(this.state.term)
        this.props.history.push("/render")
      } catch(err){
        alert(err)
      }
    } else {
      alert('Please Enter A Valid State Abbreviation')
    }
    this.setState({ term: ''})
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <input
          className="form-control"
          placeholder="Get House Price Index Of A State"
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button
            className="btn btn-lighten">
              Submit
          </button>
        </span>
      </form>
    )
  }
}

SearchBar.defaultProps = {
  term: ''
}

export default withRouter(connect(null, { fetchData })(SearchBar));
