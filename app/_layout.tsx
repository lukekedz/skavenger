import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFDE00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: 'black',
        },
      }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='hunt' />
    </Stack>
  );
}
