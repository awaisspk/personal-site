import { styled } from '@stitchesConfig';
import Link from 'next/link';

export const Logo = () => {
  return (
    <>
      <Text aria-label="Awais's Blog">
        <Link href="/">
          <a>Awais.</a>
        </Link>
      </Text>
    </>
  );
};

const Text = styled('h2', {
  fontFamily: 'Inter',
  userSelect: 'none',
  cursor: 'pointer',
  '& a': {
    textDecoration: 'none',
    color: '$typeface-pri',
    padding: '4px 10px',
  },
});
