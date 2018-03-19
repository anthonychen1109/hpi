import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import Chart from '../components/Chart';

// Images
import images from '../components/images';

const renderImg = images.renderBg;

class Render extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.renderData = this.renderData.bind(this);
  }

  renderData(stateName, index) {
    const name = stateName.dataset.name
    const start = stateName.dataset.start_date
    const end = stateName.dataset.end_date
    const data = stateName.dataset.data
    const date = stateName.dataset.data.map(data => data[0]).join()
    const value = stateName.dataset.data.map(data => data[1]).join()
    const formattedDate = date.split(',').join('\n')
    const formattedValue = value.split(',').join('\n')
    const reversedData = value.split(',').reverse()
    return (
      <div key={name+index} className="render">
        <h1>{name} from {start} to {end}</h1>

        <div className="data">

        <div className="rendered-chart">
          <Chart data={reversedData} color='black' />
        </div>

        <div className="data-box">
        {data.map((item, index) => {
          return (
            <div key={item+index} className="rendered-data">
              <p>Date: {item[0]}</p>
              <p>Value: {item[1]}</p>
            </div>
          )
        })}
        </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props.FetchAll);
  }

  render() {
    return (
      <div
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: "url(" + renderImg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%"
        }}
        >
        <div className="overlay">
          <div className="container">
            <Link to="/">
              Home
            </Link>
            {this.props.FetchAll.map(this.renderData)}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ FetchAll }) {
  return {
    FetchAll
  }
}

export default connect(mapStateToProps, null)(Render);
