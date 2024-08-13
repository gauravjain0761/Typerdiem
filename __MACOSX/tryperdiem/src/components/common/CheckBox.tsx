//import liraries
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { hp, wp } from "../../theme/fonts";
import { colors } from "../../theme/colors";
import { Icons } from "../../assets";


const CheckBox = ({ onPress, isValue }: CheckBoxProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {isValue ? (
        <Image
          source={Icons.check}
          resizeMode="contain"
          style={styles.iconStyle}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    height: hp(22),
    width: wp(22),
    borderRadius: 8,
    borderColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    height: hp(10),
    width: wp(13),
  },
});

export default CheckBox;
