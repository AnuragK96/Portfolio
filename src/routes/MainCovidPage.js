import React, { Component } from "react";

import { Cards, CountryPicker, Chart } from "../components";
import { fetchData } from "../api";
import styles from "../index.css";

import image from "../images/image.png";

class MainCovidPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      country: "",
    };
  }

  async componentDidMount() {
    const data = await fetchData();
    console.log("data :>> ", data);
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default MainCovidPage;
