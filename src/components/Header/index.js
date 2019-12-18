import React from "react";

const styles = {
  navbarStyle: {
    backgroundColor: "black",
    justifyContent: "flex-end",
    height: "100px",
    textAlign: "center",
    opacity: 0.5


  }
};

function Header (){
    return (
      <nav className="navbar" style={styles.navbarStyle}>
  
    <h1 style={{color: "yellow"}}>
      Click On Each Character Without Clicking It Twice
      Or Get Sent To The Wall
     
    </h1>


  <h3 style={{color: "yellow"}}> Score:</h3>
</nav>
      );
}

export default Header;