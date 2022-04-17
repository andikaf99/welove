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


export const SignupPage = ({navigation}) => {
  return (
    <View>
      <Text style={SignupPageStyle.title}>
        Welove
      </Text>
      <Text style={SignupPageStyle.text}>
        Selamat Datang Penyelamat Bumi!
      </Text>
      <TextInput 
        style={SignupPageStyle.inputTelp}
        placeholder= "Nomor Telepon"
        placeholderTextColor= 'black'
      />
      <TextInput 
        style={SignupPageStyle.inputEmail}
        placeholder= "Masukkan Email"
        placeholderTextColor= 'black'
      />
      <TextInput 
        style={SignupPageStyle.inputPass}
        placeholder= "Kata Sandi"
        placeholderTextColor= 'black'
      />
      <TextInput 
        style={SignupPageStyle.inputPass2}
        placeholder= "Konfirmasi Kata Sandi"
        placeholderTextColor= 'black'
      />
      <TouchableOpacity style={SignupPageStyle.btnMsk}>
        <Text style={SignupPageStyle.txtMsk}>Daftar Sekarang!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={SignupPageStyle.btnLupa} onPress={() => navigation.navigate('LoginPage')}>
        <Text style={SignupPageStyle.txtLupa}>Sudah punya akun? Silahkan masuk!</Text>
      </TouchableOpacity>
    </View>
  );
};

const SignupPageStyle = StyleSheet.create(
  {
    Logo : {
      "position": "absolute",
      "width": 222,
      "height": 185,
      "left": 95,
      "top": 40
    },
    title: {
      position: "absolute",
      width: 151,
      height: 62,
      left: 137,
      top: 40,
      fontFamily: "WLUIBesley",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 36,
      display: "flex",
      alignItems: "flex-end",
      color: "#7D8F35",
    },
    text : {
      "position": "absolute",
      "width": 277,
      "height": 46,
      "left": 65,
      "top": 100,
      "fontFamily": "WLUIBesley",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 15,
      "lineHeight": 23,
      "textAlign": "center",
      "color": "rgba(0, 0, 0, 0.41)"
    },
    inputTelp: {
      borderWidth: 1,
      fontFamily: "Alice",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 15,
      "position": "absolute",
      "width": 270,
      "height": 44,
      "left": 71,
      "top": 160,
      borderColor: '#7D8F35',
      borderRadius: 8,
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
      "top": 220,
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
      "top": 280,
      borderColor: '#7D8F35',
      borderRadius: 8,
    },
    inputPass2: {
      borderWidth: 1,
      fontFamily: "Alice",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 15,
      "position": "absolute",
      "width": 270,
      "height": 44,
      "left": 71,
      "top": 340,
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
      "top": -1,
      "fontFamily": "Alice",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": 16,
      "lineHeight": 21,
      "textAlign": "center",
      "letterSpacing": 0.25,
      "color": "#7D8F35"
    },
  }
)

export default SignupPage;