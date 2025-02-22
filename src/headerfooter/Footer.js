import React from "react"
import logo2 from "../photo/LOGO2.png"


const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img src={logo2} className="footerlogo" alt="logo footer"/>
        <h1 className="kasafooter">© 2020 Kasa. All right reserved</h1>
      </div>
    </div>
  )
}
export default Footer