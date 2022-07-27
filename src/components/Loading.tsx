import {ActivityIndicator, Text} from 'react-native';
import {View} from 'react-native';

export default function Loading() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        scaleX: 1.5,
        scaleY: 1.5,
      }}
    >
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
}
