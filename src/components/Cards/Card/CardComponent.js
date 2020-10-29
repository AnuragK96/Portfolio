import React from "react";
import { Card, Typography } from "antd";
import CountUp from "react-countup";

import styles from "./Card.module.css";

const CardComponent = ({
  className,
  cardTitle,
  value,
  lastUpdate,
  cardSubtitle,
}) => (
  <Card>
    <Typography color="textSecondary" gutterBottom>
      {cardTitle}
    </Typography>
    <Typography variant="h5" component="h2">
      <CountUp start={0} end={value} duration={2.75} separator="," />
    </Typography>
    <Typography color="textSecondary">
      {new Date(lastUpdate).toDateString()}
    </Typography>
    <Typography variant="body2" component="p">
      {cardSubtitle}
    </Typography>
  </Card>
);

export default CardComponent;
