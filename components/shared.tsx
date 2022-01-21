import styled from "styled-components";
import { colors } from './colors'
import { Dimensions } from 'react-native'

export let Container = styled.View`
  flex: 1;
  align-items: 'center';
  background-color: ${colors.white};
`;

export let ScreenWidth = Dimensions.get('screen').width
export let ScreenHeight = Dimensions.get('screen').height