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

function Header() {
  return (
    <nav className="navbar" style={styles.navbarStyle}>
      <div>
        <h1 style={{ color: "yellow" }}>Clicky Game: G.O.T. Edition</h1>
        <h5 style={{ color: "yellow" }}>
          Click each character once OR get sent to the wall
        </h5>
        
      </div>
    </nav>
  );
}

export default Header;