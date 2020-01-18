import React from "react";
import Score from "../Score";

const styles = {
  navbarStyle: {
    backgroundColor: "black",
    justifyContent: "center",
    height: "100px",
    textAlign: "center",
    opacity: 0.5
  }
};

function Header() {
  return (
    <nav className="navbar" style={styles.navbarStyle}>
      <div>
        <h1 style={{ color: "yellow" }}>
          *Try clicking on each character OR get sent to the wall*
        </h1>
      </div>
    </nav>
  );
}

export default Header;