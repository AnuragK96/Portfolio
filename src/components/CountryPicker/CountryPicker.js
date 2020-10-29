import React, { useState, useEffect } from "react";
import { Select, Form } from "antd";

import { fetchCountries } from "../../api";

import styles from "./CountryPicker.module.css";
const { Option } = Select;

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <Form className={styles.formControl}>
      <Select defaultValue="" onChange={handleCountryChange}>
        <Option value="">Canada</Option>
        {countries.map((country, i) => (
          <Option key={i} value={country}>
            {country}
          </Option>
        ))}
      </Select>
    </Form>
  );
};

export default Countries;
