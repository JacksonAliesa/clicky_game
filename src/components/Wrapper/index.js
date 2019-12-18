import React from "react";

const styles = {
  wrapperStyles: {
    backgroundImage: `url("https://wallpaperaccess.com/full/808172.png")`,
    backgroundSize: "contain",
    justifyContent: "flex-end"
  }
};

function Wrapper(props) {
  return <div className="wrapper" style={styles.wrapperStyles}>{props.children}</div>;
}

export default Wrapper;