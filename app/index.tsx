import { View, Text, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'Skavenger',
        }}
      />
      
      <Link href='/hunt'>Continue</Link>
      <Text>{'\n'}</Text>
      <Link href='\'>New Game</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
