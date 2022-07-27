import {StatusBar, TextInput} from 'react-native';
import {View} from 'react-native';
import styled from 'styled-components/native';
import Menu from '../icons/Menu';
import {useLoading} from '../stores/useLoading';
import Loading from './Loading';
import Popup from './Popup';

const PageStyled = styled(View)`
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 55 : 0}px;
`;

const Header = styled(View)`
  position: absolute;
  left: 0;
  right: 0;
  flex: 1;

  z-index: 9999;
  padding: 10px 0;
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 0}px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  elevation: 6;
`;

const Input = styled(TextInput)`
  background-color: #edf1f3;
  padding: 3px 10px;
  border-radius: 4px;
  width: 80%;
`;

export default function Page({children}: {children: any}) {
  const {loading} = useLoading();

  const Content = () => {
    if (loading) return <Loading />;
    return children;
  };

  return (
    <>
      <Popup />
      <PageStyled>
        <Header>
          <Menu />
          <Input value={'asdf'} />
        </Header>
        <Content />
      </PageStyled>
    </>
  );
}
