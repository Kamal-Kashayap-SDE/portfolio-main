import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently looking for job as a MERN stack web developer. You can text me by clicking on button given bellow at Instagram.
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.instagram.com/kamalkashyap3133_");
          }}
        >
          Say Hello
        </button>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
          Designed & Built by <span>kamal kashyap</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
