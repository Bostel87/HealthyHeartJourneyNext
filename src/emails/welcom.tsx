import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
// import Image from 'next/image';
  
  interface SlackConfirmEmailProps {
    email?: string;
  }
  
  export const SlackConfirmEmail = ({email}: SlackConfirmEmailProps) => (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Healthy Heart Journey</Preview>
        <Container style={container}>
          <Heading style={h1}>Healthy Heart Information</Heading>
          <Text style={heroText}>
            Somebody needs information about Healthy Heart Journey Please Make a contact.
          </Text>
  
          <Section style={codeBox}>
            <Text style={confirmationCodeText}>{email}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default SlackConfirmEmail;

  
  const main = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  };
  
  const container = {
    margin: '0 auto',
    padding: '0px 20px',
  };
  
  
  const h1 = {
    color: '#1d1c1d',
    fontSize: '36px',
    fontWeight: '700',
    margin: '30px 0',
    padding: '0',
    lineHeight: '42px',
  };
  
  const heroText = {
    fontSize: '20px',
    lineHeight: '28px',
    marginBottom: '30px',
  };
  
  const codeBox = {
    background: 'rgb(245, 244, 245)',
    borderRadius: '4px',
    marginBottom: '30px',
    padding: '40px 10px',
  };
  
  const confirmationCodeText = {
    fontSize: '30px',
    textAlign: 'center' as const,
    verticalAlign: 'middle',
  };
  

  