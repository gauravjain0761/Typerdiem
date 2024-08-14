import { NavigationProp, Route, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
  TextInputProps,
  KeyboardTypeOptions,
  ImageURISource,
  StyleProp,
  ReturnKeyType,
} from "react-native";
import { RootStackParamList } from "../navigations/StackNavigator";
import store from "../redux";
import { ImageRequireSource } from "react-native";

type UniversalScreenRouteProp = RouteProp<RootStackParamList>;

type UniversalScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type UniversalProps = {
  route: UniversalScreenRouteProp;
  navigation: UniversalScreenNavigationProp;
};

export interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<any, any>;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type SignInBtnProps = {
  iconName: ImageSourcePropType;
  title: string;
  onBtnPress: () => void;
  containerStyle?: ViewStyle;
  iconStyles?: ImageStyle;
  titleStyle?: TextStyle;
};

export type InputProps = {
  placeholder: string;
  label: string;
  value: string;
  onChangeText: (params: string) => void;
  isShowEyeIcon?: boolean;
  secureTextEntry?: boolean;
  onPressEye?: () => void;
  onSubmitEditing?: () => void;
  theme?: string;
  autoCorrect?: boolean;
  rest?: TextInputProps[];
  inputRef?: any;
  returnKeyType?: ReturnKeyType;
};

export type SecondaryInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (params: string) => void;
  theme?: string;
  keyboardType?: KeyboardTypeOptions;
  onPressMapIcon?: () => void;
  onPressInput?: () => void;
  editable?: boolean;
  maxLength?: number;
  inputStyle?: TextStyle;
  ref?: any;
  returnKeyType?: ReturnKeyType;
  onSubmitEditing?: () => void;
};

export type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  isAddIconShow?: boolean;
};
