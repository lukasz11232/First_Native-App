import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import '../../../global.css';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboardingScreen" className="mt-4 rounded bg-primary text-white p-4">
        Go to Onboarding Screen
      </Link>

      <Link href="/(auth)/sing_in" className="mt-4 rounded bg-primary text-white p-4">
        Go to Sign In
      </Link>

      <Link href="/(auth)/sign_up" className="mt-4 rounded bg-primary text-white p-4">
        Go to Sign Up
      </Link>

      <Link href="/(tabs)/subscription/spotify" className="mt-4 rounded bg-primary text-white p-4">
        Go to Spotify Subscription Details
      </Link>
      <Link
        href={{
          pathname: '/(tabs)/subscription/[id]',
          params: { id: 'claude' },
        }}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go To Claude Max Subscription Details
      </Link>
    </View>
  );
}