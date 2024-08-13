import {FC} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Login from '../screens/Login';
import {useAppDispatch} from '../redux/hooks';
import {colors} from '../theme/colors';
import WelcomeScreen from '../screens/WelcomeScreen';
import {Text} from 'react-native';
import EnterEmail from '../screens/signUpSteps/EnterEmail';
import HomeScreen from '../screens/Home/HomeScreen';
import {screenName} from './screenNames';
import SplashScreen from '../screens/auth/SplashScreen';
import {NativeStackNavigationOptions} from 'react-native-screens/lib/typescript/native-stack/types';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import IntroductionScreen from '../screens/auth/IntroductionScreen';
export type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  IntroductionScreen: undefined;
  HomeScreen: undefined;
};
const options: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_bottom',
  animationDuration: 500,
  gestureEnabled: true,
};
const Stack = createStackNavigator<RootStackParamList>();

const LogoHeader = () => {
  return <Text>hi</Text>;
};

const StackNavigator: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Stack.Navigator
      screenOptions={options}
      initialRouteName={screenName.SplashScreen}>
      <Stack.Screen name={screenName.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={screenName.IntroductionScreen} component={IntroductionScreen} />
      <Stack.Screen name={screenName.SignIn} component={SignIn} />
      <Stack.Screen name={screenName.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
