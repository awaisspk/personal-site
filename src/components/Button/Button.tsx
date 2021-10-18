import {styled, CSS} from '@stitchesConfig';
import {motion} from 'framer-motion';
import type * as Stitches from '@stitches/react';

const Icon = styled('div', {});

const StyledButton = styled(motion.button, {
  display: 'inline-flex',
  flexShrink: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  border: 'none',
  outline: 'none',
  margin: '0',
  textDecoration: 'none',
  cursor: 'pointer',

  borderRadius: '0.4rem',
  backgroundColor: '$main',
  color: '$gray1',
  fontFamily: '$Inter',
  fontSize: '',
  fontWeight: '500',
  height: '44px',
  width: 'max-content',

  '&:focus': {},
  '&:focus:not(:focus-visible)': {},
  '&:focus-visible': {},
  '&:active': {},
  '&:hover': {},

  [`& ${Icon}`]: {
    marginRight: '5px',
  },

  variants: {
    size: {
      1: {
        height: '40px',
      },
      2: {
        py: '0.5rem',
        px: '1rem',
      },
    },
    variant: {
      blue: {},
      ghost: {},
    },
  },

  defaultVariants: {
    size: '2',
  },
});

type ButtonProps = Stitches.VariantProps<typeof StyledButton> & {
  isActice: boolean;
  css?: CSS;
};

export const Button: React.FC<ButtonProps> = ({
  isActice,
  children,
  ...rest
}) => (
  <StyledButton {...rest} initial={{scale: 1}} whileTap={{scale: 0.95}}>
    {isActice && <Icon>active</Icon>}
    {children?.toString()}
  </StyledButton>
);
