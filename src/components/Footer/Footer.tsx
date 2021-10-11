import {Github} from './Social/Github';
import {Linkedin} from './Social/LinkedIn';
import {Twitter} from './Social/Twitter';
import {styled} from '@stitchesConfig';

export const Footer = () => {
  return (
    <Grid>
      <FooterWrapper>
        <HR />
        <FooterContent>
          <div>© {new Date().getFullYear()} Awais iqbal</div>
          <SocialContainer>
            <Github url="https://github.com/awaisspk" />
            <Linkedin url="https://www.linkedin.com/in/awais-iqbal-7b1819213/" />
            <Twitter url="https://twitter.com/iamawaisiqbal" />
          </SocialContainer>
        </FooterContent>
      </FooterWrapper>
    </Grid>
  );
};

const SocialContainer = styled('div', {
  display: 'flex',
  gap: '10px',
});

const FooterContent = styled('div', {
  display: ' flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '48px',
  width: '100%',
});

const Grid = styled('div', {
  'display': 'grid',
  'gridTemplateColumns': '10px 1fr 10px',
  'maxWidth': '900',

  'transition': '0.5s',
  'height': '130px',
  'width': '100%',
  'background': '$bg',
  '@bp1': {
    gridTemplateColumns: '1fr 4fr 1fr',
  },
});

const FooterWrapper = styled('div', {
  'paddingTop': '30px',
  'marginTop': '30px',
  'gridColumn': '2',
  'width': '100%',
  'zIndex': '4',
  'display': 'flex',
  'alignItems': 'center',
  'color': '$typeface-pri',
  'fontWeight': '500',
  'fontSize': '14px',
  'flexDirection': 'column',
  'justifyContent': 'space-evenly',
  'margin': '0 auto',
  '& a ': {
    color: 'inherit',
  },
});

const HR = styled('hr', {
  height: '1px',
  width: '100%',
  backgroundColor: '$gray5',
  border: 'none',
});
