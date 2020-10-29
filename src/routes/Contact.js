import React, { useEffect } from "react";
import HeaderTitle from "../components/HeaderTitle";
import { Typography } from "antd";
import ContactBody from "../components/ContactBody";
const { Title } = Typography;

function Contact() {
  useEffect(() => {
    document.title = "MR-Contact";
  });
  return (
    <>
      <HeaderTitle name="CONTACT" />
      <div
        style={{ display: "flex", paddingTop: "20px", flexDirection: "column" }}
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
      </div>
    </>
  );
}

export default Contact;
