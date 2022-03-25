import React from 'react';
import HeroSection from '../../HeroSection';
import {matchesObjOne, matchesObjTwo,matchesObjThree,matchesObjFour,matchesObjFive,matchesObjSix} from './Data';

function Matches() {
  return (
    <>

        <HeroSection {...matchesObjOne} />
        <HeroSection {...matchesObjTwo} />
        <HeroSection {...matchesObjThree} />
        <HeroSection {...matchesObjFour} />
        <HeroSection {...matchesObjFive} />
        <HeroSection {...matchesObjSix} />
    </>
  )
}

export default Matches