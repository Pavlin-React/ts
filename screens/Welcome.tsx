
import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Container } from '../components/shared';
import { colors } from '../components/colors'

let WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const Welcome: FC = () => {
  return (
    <>
      <StatusBar style='light' />
    </>
  );
};

export default Welcome;

