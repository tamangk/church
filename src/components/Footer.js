import React from 'react';
import CopyrightYear from 'react-copyright-year';

const style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}


function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}> <CopyrightYear/> Karan Tamang</div>
        </div>
        
    )
}

export default Footer