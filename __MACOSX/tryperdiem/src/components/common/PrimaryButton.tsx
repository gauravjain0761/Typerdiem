//import liraries
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { PrimaryButtonProps } from '../../utils/types';
import { commonFontStyle, hp, wp } from '../../theme/fonts';
import { colors } from '../../theme/colors';

const PrimaryButton = ({
  label,
  onPress,
  containerStyle,
  isAddIconShow,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Text style={styles.labelTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(60),
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: hp(15),
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  labelTextStyle: {
    textAlign: 'center',
    ...commonFontStyle(500, 20, colors.white),
  },
});

export default PrimaryButton;
