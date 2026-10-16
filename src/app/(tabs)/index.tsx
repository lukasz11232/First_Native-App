import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import '../../../global.css';
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
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

      <Link href="/subscription/spotify" className="mt-4 rounded bg-primary text-white p-4">
        Go to Spotify Subscription Details
      </Link>
      <Link
        href={{
          pathname: '/subscription/[id]',
          params: { id: 'claude' },
        }}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go To Claude Max Subscription Details
      </Link>
    </SafeAreaView>
  );
}