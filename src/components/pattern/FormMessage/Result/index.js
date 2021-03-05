import React from 'react';
import PropTypes from 'prop-types';
import { Lottie } from '@crello/react-lottie';
import Box from '../../../foundation/Box';
import ErrorAnimation from '../animations/ErrorAnimation.json';
import LoadingAnimation from '../animations/LoadingAnimation.json';
import SuccessAnimation from '../animations/SuccessAnimation.json';

export default function Result({ animation }) {
  if (animation === 'DONE') {
    return (

      <Box display="flex" justifyContent="center" marginBottom="6rem">
        <Lottie
          width="150px"
          height="150px"
          config={{
            animationData: SuccessAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </Box>
    );
  }
  if (animation === 'LOADING') {
    return (
      <Box display="flex" justifyContent="center" marginBottom="6rem">
        <Lottie
          width="150px"
          height="150px"
          config={{
            animationData: LoadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </Box>
    );
  }
  if (animation === 'ERROR') {
    return (
      <Box display="flex" justifyContent="center" marginBottom="6rem">
        <Lottie
          width="150px"
          height="150px"
          config={{
            animationData: ErrorAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </Box>
    );
  }
}
Result.defaultProps = {
  animation: ['ERROR', 'LOADING', 'DONE'],
};
Result.propTypes = {
  animation: PropTypes.string,
};
