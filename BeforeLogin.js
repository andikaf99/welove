import React from "react";

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";

export const LandingPage = () => {
  return (
    <View>
      <Image
        source={require("./assets/img/LandingPage/logo.png")}
        style={LandingPageStyle.logo}
      />
      <Text style={LandingPageStyle.title}>Welove</Text>
      <Text style={LandingPageStyle.title2}>
        Sayangi sampah skincare mu sayangi bumi hari ini
      </Text>

      <TouchableOpacity>
        <ImageBackground
          source={require("./assets/img/LandingPage/btn.png")}
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

export const LoginPage = () => {
  return (
    <View>
      <Image
        source={require("./assets/img/LandingPage/logo.png")}
        style={LoginPageStyle.Logo}
      />
      <Text style={LoginPageStyle.text}>
        menjadi lebih peduli lingkungan dengan langkah kecil memilah sampah secara mandiri!
      </Text>
      
      <TextInput 
        style={LoginPageStyle.inputEmail}
        placeholder= "Masukkan Email"
        placeholderTextColor= 'black'
      />
      <TextInput 
        style={LoginPageStyle.inputPass}
        placeholder= "Masukkan Kata Sandi"
        placeholderTextColor= 'black'
      />
      <TouchableOpacity style={LoginPageStyle.btnMsk}>
        <Text style={LoginPageStyle.txtMsk}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LoginPageStyle.btnLupa}>
        <Text style={LoginPageStyle.txtLupa}>Lupa Kata Sandi?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LoginPageStyle.btnNew}>
        <Text style={LoginPageStyle.txtNew}>Buat Akun Baru</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginPageStyle = StyleSheet.create(
  {
    Logo : {
      "position": "absolute",
      "width": 222,
      "height": 185,
      "left": 95,
      "top": 40
    },
    text : {
      "position": "absolute",
      "width": 277,
      "height": 46,
      "left": 65,
      "top": 245,
      "fontFamily": "Amiko",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 12,
      "lineHeight": 23,
      "textAlign": "center",
      "color": "rgba(0, 0, 0, 0.41)"
    },
    inputEmail: {
      borderWidth: 1,
      fontFamily: "Alice",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 15,
      "position": "absolute",
      "width": 270,
      "height": 44,
      "left": 71,
      "top": 320,
      borderColor: '#7D8F35',
      borderRadius: 8,
    },
    inputPass: {
      borderWidth: 1,
      fontFamily: "Alice",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 15,
      "position": "absolute",
      "width": 270,
      "height": 44,
      "left": 71,
      "top": 380,
      borderColor: '#7D8F35',
      borderRadius: 8,
    },
    btnMsk: {
      "position": "absolute",
      "width": 270,
      "height": 40,
      "left": 71,
      "top": 460,
      "backgroundColor": "#7D8F35",
      "borderWidth": 1,
      "borderColor": "#7D8F35",
      "borderStyle": "solid",
      "boxSizing": "border-box",
      "borderTopLeftRadius": 6,
      "borderTopRightRadius": 6,
      "borderBottomRightRadius": 6,
      "borderBottomLeftRadius": 6
    },
    txtMsk: {
      "position": "absolute",
      "width": 158,
      "left": 55,
      "top": 10,
      "fontFamily": "Alice",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": 20,
      "lineHeight": 21,
      "textAlign": "center",
      "letterSpacing": 0.25,
      "color": "#ffff"
    },
    btnLupa: {
      "position": "absolute",
      "width": 270,
      "height": 40,
      "left": 71,
      "top": 510,
      "backgroundColor": "##F8F8F8",
      "borderWidth": 1,
      "borderColor": "#7D8F35",
      "borderStyle": "solid",
      "boxSizing": "border-box",
      "borderTopLeftRadius": 6,
      "borderTopRightRadius": 6,
      "borderBottomRightRadius": 6,
      "borderBottomLeftRadius": 6
    },
    txtLupa: {
      "position": "absolute",
      "width": 200,
      "left": 35,
      "top": 10,
      "fontFamily": "Alice",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": 20,
      "lineHeight": 21,
      "textAlign": "center",
      "letterSpacing": 0.25,
      "color": "#7D8F35"
    },
    btnNew: {
      "position": "absolute",
      "width": 270,
      "height": 40,
      "left": 71,
      "top": 560,
      "backgroundColor": "##F8F8F8",
      "borderWidth": 1,
      "borderColor": "#7D8F35",
      "borderStyle": "solid",
      "boxSizing": "border-box",
      "borderTopLeftRadius": 6,
      "borderTopRightRadius": 6,
      "borderBottomRightRadius": 6,
      "borderBottomLeftRadius": 6
    },
    txtNew: {
      "position": "absolute",
      "width": 200,
      "left": 35,
      "top": 10,
      "fontFamily": "Alice",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": 20,
      "lineHeight": 21,
      "textAlign": "center",
      "letterSpacing": 0.25,
      "color": "#7D8F35"
    }
  }
)