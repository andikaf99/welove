import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const LandingPage = () => {
  return (
    <View>
      <Image
        source={require("./assets/img/LandingPage/logo.png")}
        style={styles.logoLP}
      />
      <Text style={styles.titleLP}>Welove</Text>
      <Text style={styles.title2LP}>
        Sayangi sampah skincare mu sayangi bumi hari ini
      </Text>

      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          source={require("./assets/img/LandingPage/btn.png")}
          style={styles.buttonLP}
        />
        <Text style={styles.textbtnLP}>Ayo Mulai!</Text>
      </TouchableOpacity>
    </View>
  );
};

const onPress = () => {
  return <Text>dika</Text>;
};

const styles = StyleSheet.create({
  logoLP: {
    position: "absolute",
    width: 237,
    height: 214,
    left: 87,
    top: 100,
  },
  titleLP: {
    position: "absolute",
    width: 151,
    height: 62,
    left: 137,
    top: 350,
    fontFamily: "WLUIBesley",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 36,
    display: 'flex',
    alignItems: 'flex-end',
    color: '#7D8F35',
  },
  title2LP: {
    position: "absolute",
    width: 269,
    height: 51,
    left: 71,
    top: 461,
    fontFamily: "WLUIAlata",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 19,
    lineHeight: 26,
    textAlign: "center",
    letterSpacing: 0.25,
    color: "#7D8F35",
  },
  buttonLP: {
    position: "absolute",
    width: 248.45,
    height: 49.79,
    left: 81,
    top: 559,
  },
  textbtnLP: {
    position: 'absolute',
    width: 269,
    height: 30,
    left: 71,
    top: 569,
    fontFamily: 'WLUIAlata',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default LandingPage;
