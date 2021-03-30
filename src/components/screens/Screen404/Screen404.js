import React from 'react';
import { Lottie } from '@crello/react-lottie';
import Text from '../../foundation/Text';
import Animation404 from './animation/Animation404.json';

export default function AboutScreen() {
  return (
    <>
      <Lottie
        height="300px"
        config={{
          animationData: Animation404,
          loop: true,
          autoplay: true,
        }}
      />
      <Text tag="p" mobile="paragraphS" desktop="paragraphMD">Please try again with a valid url</Text>
    </>
  );
}
