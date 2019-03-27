import React from 'react';
import styled from 'react-emotion';
import { Typography } from '@material-ui/core';

const Routes: React.FC = () => {
  return (
    <TitleStyle variant='display1'>
      hazesoft.work
    </TitleStyle>
  );
}

const TitleStyle = styled(Typography)({
})

export default Routes;
