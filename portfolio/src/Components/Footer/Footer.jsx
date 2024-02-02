// import React from 'react'
import "./footer.css";

const Footer = () => {
        const handleEmailClick = () => {
          const email = 'shruti08soni@gmail.com';
          const mailtoUrl = `mailto:${email}`;
      
          window.location.href = mailtoUrl;
        };
  return (
    <>
      <div className="footerbody">
        <h1 className="heading">Get In Touch</h1>
        <p className="details">
          Thank you for exploring my portfolio! I&#39;m always excited to
          connect with like-minded individuals, potential collaborators. Whether
          you have a project in mind, want to discuss potential
          collaborations, I&#39;m open to new opportunities, challenges, and
          conversations that contribute to the vibrant exchange of ideas in our
          field. I&#39;d love to hear from you, Feel free to reach out through the contact 
          form below or connect with me.
        </p>
        <button className="btn" onClick={handleEmailClick}>Contact Me</button>
      </div>
    </>
  );
};

export default Footer;
