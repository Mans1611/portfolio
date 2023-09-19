import React from 'react';
import Wave from '../../assets/waves.svg';

const Waves = () => {
  return <div dangerouslySetInnerHTML={{ __html: Wave }} />;
};

export default Waves;