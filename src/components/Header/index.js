import React from "react";

const styles = {
  navbarStyle: {
    backgroundColor: "black",
    justifyContent: "center",
    height: "100px",
    textAlign: "center",
    opacity: 0.5
  }
};

function Header(props) {
  return (
    <nav className="navbar" style={styles.navbarStyle}>
      <div>
        <h1 style={{ color: "yellow" }}>
          *Try clicking on each character OR get sent to the wall*
        </h1>
        <h3 style={{ color: "yellow", justifyContent: "flex-end" }}>
          <p className="border border-dark">Current Score: {props.score}</p>
          {/* <p className="border border-dark">High Score: {props.jhighscore}</p> */}

        </h3>
      </div>





    </nav>
  );
}

export default Header;