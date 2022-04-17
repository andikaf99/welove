import React from "react";

import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";


export const LoginPage = ({navigation}) => {
  return (
    <View>
      <Image
        source={require("../../../assets/img/BeforeLogin/logo.png")}
        style={LoginPageStyle.Logo}
      />
      <Text style={LoginPageStyle.text}>
        menjadi lebih peduli lingkungan dengan langkah kecil memilah sampah secara mandiri!
      </Text>
      
      <Image source={require("../../../assets/img/BeforeLogin/user.png")} style={LoginPageStyle.imgEmail}/>
      <TextInput 
        style={LoginPageStyle.inputEmail}
        placeholder= "Masukkan Email"
        placeholderTextColor= 'black'
      />
      <Image source={require("../../../assets/img/BeforeLogin/pass.png")} style={LoginPageStyle.imgPass}/>
      <TextInput 
        style={LoginPageStyle.inputPass}
        placeholder= "Masukkan Kata Sandi"
        placeholderTextColor= 'black'
      />
      <TouchableOpacity style={LoginPageStyle.btnMsk}>
        <Text style={LoginPageStyle.txtMsk}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LoginPageStyle.btnLupa} onPress={() => navigation.navigate('ForgotPage')}>
        <Text style={LoginPageStyle.txtLupa}>Lupa Kata Sandi?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={LoginPageStyle.btnNew} onPress={() => navigation.navigate('SignupPage')}>
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
    imgEmail: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      top: 325,
      left: 30,
      resizeMode: 'stretch',
      alignItems: 'center',
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
    imgPass: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      top:360,
      left: 30,
      resizeMode: 'stretch',
      alignItems: 'center',
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
    },
  }
)

export default LoginPage;