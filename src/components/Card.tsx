import {View, Text} from 'react-native';

export default function Card({title}: {title: string}) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
