import React, { useEffect } from "react";

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";

export const LandingPage = ({navigation}) => {
  return (
    <View>
      <Image
        source={require("../../../assets/img/BeforeLogin/logo.png")}
        style={LandingPageStyle.logo}
      />
      <Text style={LandingPageStyle.title}>Welove</Text>
      <Text style={LandingPageStyle.title2}>
        Sayangi sampah skincare mu sayangi bumi hari ini
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
        <ImageBackground
          source={require("../../../assets/img/BeforeLogin/btn.png")}
          style={LandingPageStyle.button}
        />
        <Text style={LandingPageStyle.textbtn}>Ayo Mulai!</Text>
      </TouchableOpacity>
    </View>
  );
};

const LandingPageStyle = StyleSheet.create({
  logo: {
    position: "absolute",
    width: 237,
    height: 214,
    left: 87,
    top: 100,
  },
  title: {
    position: "absolute",
    width: 151,
    height: 62,
    left: 137,
    top: 350,
    fontFamily: "WLUIBesley",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 36,
    display: "flex",
    alignItems: "flex-end",
    color: "#7D8F35",
  },
  title2: {
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
  button: {
    position: "absolute",
    width: 248.45,
    height: 49.79,
    left: 81,
    top: 559,
  },
  textbtn: {
    position: "absolute",
    width: 269,
    height: 30,
    left: 71,
    top: 569,
    fontFamily: "WLUIAlata",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default LandingPage;