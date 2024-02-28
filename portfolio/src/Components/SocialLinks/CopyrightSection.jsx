// import React from 'react'
import "./copyrightsection.css";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CopyrightSection = () => {
  const handleEmailClick = () => {
    const email = "shruti08soni@gmail.com";
    const mailtoUrl = `mailto:${email}`;

    window.location.href = mailtoUrl;
  };
  return (
    <>
      <div className="mainSection">
        <div className="socialLinks">
          <div className="socialicon">
            <a onClick={handleEmailClick}>
              <GoogleIcon fontSize="large" />
            </a>
          </div>
          <div className="socialicon">
            <a href="https://github.com/shrutisoni08"
              onClick={() =>
                window.open("https://github.com/shrutisoni08", "_blank")
              }
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <div className="socialicon">
            <a href="https://www.linkedin.com/in/shruti-soni-12d081209/"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/shruti-soni-12d081209/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>

        <div className="copyRightDetails">
          <p>
            {" "}
            &copy;2024 Design and Developed by Shruti Soni. All rights reserved.
            Powered by creativity.
          </p>
        </div>
      </div>
    </>
  );
};

export default CopyrightSection;
