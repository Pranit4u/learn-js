import React from 'react'

const Footer = () => {
  return (
        <div className="navbar footer">
            <button className="nav-button" style={{color:"whitesmoke", backgroundColor:"transparent",borderWidth:0.5, borderColor:"whitesmoke"}}>
                {"< BACK"}
            </button>
            <button className="nav-button">
                NEXT
            </button>
        </div>
  )
}

export default Footer