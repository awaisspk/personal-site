import {CodeBlock} from '@src/components/MDX/Code/CodeBlock';
import {styled} from '@stitchesConfig';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Container>
      <h1>Home page</h1>
      <CodeBlock />
    </Container>
  );
};

export default Home;

const Container = styled('div', {
  paddingTop: '250px',
  display: 'Grid',
  gridTemplateColumns: '10px 1fr 10px',
  maxWidth: '900',
  alignItems: 'center',
  height: 'inherit',
  '@bp1': {
    gridTemplateColumns: '1fr 4fr 1fr',
  },
  '& * ': {
    gridColumn: '2',
  },
});
