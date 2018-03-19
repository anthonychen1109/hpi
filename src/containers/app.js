import React, { Component } from 'react';
import { connect } from 'react-redux';

// Images
import images from '../components/images';

// Containers
import SearchBar from './searchbar';

const headerImg = images.headerBg;

class App extends Component {

  renderData(stateName) {
    const name = stateName.dataset.name;
    console.log(name);
    return (
      <div>
        testing
      </div>
    )
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: "url(" + headerImg + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100%"
          }}
        >
          <div className="overlay">
            <div className="search">
              <h1>House Price Index</h1>
              <br />
              <h2>What is the HPI?</h2>
              <p>
                The FMHPI provides a measure of typical price inflation for houses within the U.S. Values are calculated monthly but are released at the end of the following quarter.
              </p>
              <p>
                A House Price Index (HPI) is a tool that measures changes in single-family home prices across a designated market. These tools can show you areas where home values are increasing or decreasing so you can estimate prices
              </p>
              <p>
                A House Price Index (HPI) measures the price changes of residential housing. Methodologies commonly used to calculate HPI are the hedonic regression (HR), simple moving average (SMA) and repeat-sales regression (RSR)
              </p>
              <h2>Please Enter a State Abbreviation:</h2>
              <p>Example: NY, NJ</p>
              <br />
              <SearchBar />
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetchAll: state.fetchAll
  }
}

export default connect(mapStateToProps, null)(App);
