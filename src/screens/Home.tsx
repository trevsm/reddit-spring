import {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Page = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

export default function Home() {
  const [data, setData] = useState({});

  return (
    <Page>
      <Text>Home Screen</Text>
    </Page>
  );
}
