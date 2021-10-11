import {motion} from 'framer-motion';
type TProps = {
  url: string;
};
export const Linkedin = ({url}: TProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          initial={{pathLength: 0}}
          animate={{pathLength: 1}}
          transition={{duration: 1}}
        ></motion.path>
        <motion.rect
          x="2"
          y="9"
          width="4"
          // height="12"
          initial={{height: '0'}}
          animate={{height: '12'}}
          transition={{duration: 2}}
        ></motion.rect>
        <motion.circle cx="4" cy="4" r="2"></motion.circle>
      </svg>
    </a>
  );
};
