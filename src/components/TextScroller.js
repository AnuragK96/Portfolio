import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Typography } from "antd";
const { Text } = Typography;

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 11000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>
        <Text style={{ fontSize: "30px", fontFamily: "serif" }} level={3}>
          {text}
        </Text>
      </animated.div>
    </div>
  );
};

export default TextScroller;
