
import React from 'react'
import "./footer.css";

export const Footer = () => {
  return (
    <>
     <div className="footer flex">
        <p>
          © 2022, Made with ❤️ by <a href="">ThemeSelection</a>{" "}
        </p>
        <div className="flex purpleText">
          <span>License</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>More</span>&nbsp;&nbsp;&nbsp;
          <span>Documentation</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>Support</span>
        </div>
      </div>
      </>
  )
}

