import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import UserHuntDetail from '../components/UserHuntDetail'

export default function Hunt() {
  return (
    <View style={styles.container}>
        <Stack.Screen
            options={{
              headerTitle: '',
            }}
        />

        <View style={styles.liveFeed} />
        <View style={styles.userHuntDetail}>
            <UserHuntDetail />
        </View>
        <View style={styles.snapshot} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  liveFeed: {
    flex: 0.1,
    margin: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
  },
  userHuntDetail: {
    flex: 0.75,
    margin: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
  },
  snapshot: {
    flex: 0.15,
    margin: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
  },
});
