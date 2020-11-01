import React, { useEffect } from "react";
import { Typography } from "antd";
import ContactBody from "../components/ContactBody";
const { Title } = Typography;

function Contact() {
  useEffect(() => {
    document.title = "AK-Contact";
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "20px",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Title level={2}> CONTACT ME </Title>
        <ContactBody
          title="EMAIL"
          contactdetail="kurapatianurag1@gmail.com"
          mailId
        />
        <ContactBody title="PHONE" contactdetail="8192387859" />
        <ContactBody
          title="ADDRESS"
          contactdetail="408 rue codere, Sherbrooke, QC, J1E 2P1"
        />
        <ContactBody
          title="LINKEDIN"
          contactdetail="https://www.linkedin.com/in/anurag-kurapati-316951113"
          link
        />
        <ContactBody
          title="GITHUB"
          contactdetail="https://github.com/AnuragKurapati"
          link
        />
      </div>
    </>
  );
}

export default Contact;
