import { Header } from '@src/components/Header';
import { MobileNav } from '@src/components/Navigation';
import { Footer } from '@components/Footer';
import { styled } from '@stitchesConfig';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Layout: React.FC = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width : 420px)',
  });
  return (
    <Wrapper>
      {/* Footer*/}
      <Header />
      {children}
      <MobileNav />
      {isDesktop && <Footer />}
    </Wrapper>
  );
};

const Wrapper = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
});
