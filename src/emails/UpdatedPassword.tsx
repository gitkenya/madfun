/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Text,
} from "@react-email/components";
import * as React from "react";
import moment from "moment";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "https://www.tuhustle.com";

export default function UpdatedPassword(props: any) {
  return (
    <Html>
      <Head />
      <Preview>Your Account Password was changed</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={titleSection}>
              <Text style={textH}>TUHUSTLE FREELANCE PLATFORM</Text>
              <Text style={textP}>
                The Ultimate Freelance Platform where opportunities meet talent
              </Text>
            </Section>
            <Section style={upperSection}>
              <Heading style={h1}>Your Account Password was changed</Heading>
              <Text style={mainText}>Hello {props.fname},</Text>
              <Text style={mainText}>
                This email is to inform you that the password for your Tuhustle
                account has recently been updated. Please use the new password
                you created to sign in to your Tuhustle account.
              </Text>
              <Text style={mainText}>
                <span style={boldText}>
                  If you did not initiate this password change
                </span>
                , please contact us immediately by replying to this email to
                report unauthorized access and secure your account.
              </Text>
              <Text style={mainText}>Happy Job Hunting!</Text>

              <Section style={sectionsBorders}>
                <Row>
                  <Column style={sectionBorder} />
                  <Column style={sectionCenter} />
                  <Column style={sectionBorder} />
                </Row>
              </Section>
              <Text style={text}>
                Sincerely,
                <br />
                The Tuhustle Team
              </Text>
            </Section>
          </Section>
          <Section style={footer}>
            <Row>
              <Text
                style={{
                  textAlign: "center",
                  color: "#706a7b",
                  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
                }}
              >
                © {moment(new Date()).format("YYYY")} Tuhustle, All Rights
                Reserved <br />
                Nairobi, Kenya
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#212121",
  padding: "20px 0px 20px 0px",
};

const container = {
  padding: "15px",
  margin: "0 auto",
  backgroundColor: "#eee",
  width: "580px",
  maxWidth: "100%",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const textH = {
  color: "#fff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  margin: "10px 0",
  fontWeight: "bold",
};
const textP = {
  color: "#fff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "16px",
  margin: "10px 0",
};
const titleSection = {
  backgroundColor: "#252f3d",
  display: "flex",
  padding: "20px 0",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingLeft: "30px",
  paddingRight: "30px",
  color: "#fff",
};

const coverSection = { backgroundColor: "#fff" };

const upperSection = { padding: "25px 35px" };

const boldText = {
  fontWeight: "bold",
};

const footer = {
  maxWidth: "100%",
  margin: "0 auto",
  padding: "0 5px",
  textAlign: "center" as const,
};

const mainText = { ...text, marginBottom: "14px" };

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(202,202,207)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid #252f3d",
  width: "102px",
};
