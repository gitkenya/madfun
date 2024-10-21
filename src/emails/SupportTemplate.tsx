import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Heading,
  Img,
} from "@react-email/components";
import moment from "moment";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "https://madfun.lexacle.com";

export default function Email(props: any) {
  return (
    <Html>
      <Head />
      <Preview>{props?.message}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={titleSection}>
              <Row>
                <Column style={logo}>
                  <Img
                    src={`${baseUrl}/assets/img/logos/logo-512.png`}
                    alt="Madfun"
                    width="80"
                    height="80"
                  />
                </Column>
                <Column>
                  <Text style={textH}>MADFUN CUSTOMER INQUIRY</Text>
                  <Text style={textP}>
                    Events, Flights, and Exclusive Travel Experiences
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={upperSection}>
              <Heading style={h1}>Dear Madfun</Heading>
              <Section>
                <Text style={text}>{props?.message}</Text>
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
                  <span style={textBold}>Name: </span>
                  {props?.name}
                  <br />
                  <span style={textBold}>Phone: </span>
                  {props?.phone}
                  <br />
                  <span style={textBold}>Email: </span>
                  {props?.email}
                </Text>
              </Section>
            </Section>
          </Section>
          <Section style={footer}>
            <Row>
              <Text
                style={{
                  textAlign: "center",
                  color: "#040b17",
                  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
                }}
              >
                © {moment(new Date()).format("YYYY")} Madfun, All Rights
                Reserved
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const logo = {
  width: "90px",
};

const main = {
  backgroundColor: "#fff",
  color: "#212121",
  padding: "20px 0px 20px 0px",
  width: "100%",
  margin: "0",
};

const container = {
  padding: "15px",
  margin: "0 auto",
  backgroundColor: "#ffd100",
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

const lowerSection = { padding: "25px 35px" };

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const textBold = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "600",
  color: "#404040",
  lineHeight: "20px",
};

const textUl = {
  fontSize: "14px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
  padding: "0px 15px",
};

const button = {
  backgroundColor: "#000000",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "24px",
  letterSpacing: "5px",
  fontWeight: "700",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "220px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "none",
  color: "#ffd100",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(252,231,134)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "2px solid #ffd100",
  width: "102px",
};
