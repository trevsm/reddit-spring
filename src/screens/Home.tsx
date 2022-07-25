import {View, Text} from 'react-native';
import styled from 'styled-components';

const Page = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Page>
      <Text>Homepage</Text>
    </Page>
  );
}
