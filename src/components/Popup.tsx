import {animated as A, useSpring} from '@react-spring/native';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {usePopup} from '../stores/usePopup';

const StyledPopup = styled(A.View)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 9998;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Blur = styled(View)`
  position: absolute;
  top: 0;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #00000090;
`;

const Content = styled(View)`
  background-color: white;
  padding: 10px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 3px;
`;

export default function Popup() {
  const {visible, setVisibility, element} = usePopup();

  return (
    <StyledPopup
      pointerEvents={visible ? 'auto' : 'none'}
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      <Blur onTouchEnd={() => setVisibility(false)} />
      <Content>{element}</Content>
    </StyledPopup>
  );
}
