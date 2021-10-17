import {styled} from '@stitchesConfig';
const About = () => {
  return (
    <Container>
      <h1>About Page</h1>
    </Container>
  );
};

export default About;

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  paddingTop: '250px',
  '& *': {
    gridColumn: '2',
  },
});
