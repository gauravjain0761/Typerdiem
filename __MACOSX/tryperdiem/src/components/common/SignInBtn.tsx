//import liraries
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {SignInBtnProps} from '../../utils/types';
import {commonFontStyle, hp, wp} from '../../theme/fonts';
import {colors} from '../../theme/colors';

const SignInBtn = ({
  iconName,
  onBtnPress,
  containerStyle,
  title,
  titleStyle,
  iconStyles,
}: SignInBtnProps) => {
  return (
    <TouchableOpacity
      onPress={onBtnPress}
      style={[styles.container, containerStyle]}>
      <Image
        source={iconName}
        resizeMode="contain"
        style={[styles.iconStyle, iconStyles]}
      />
      <Text style={[styles.titleText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(40),
    paddingLeft: wp(65),
    height: hp(50),
  },
  iconStyle: {
    width: wp(38),
    height: wp(38),
  },
  titleText: {
    marginLeft: wp(5),
    ...commonFontStyle(400, 18, colors.primary),
  },
});

export default SignInBtn;
