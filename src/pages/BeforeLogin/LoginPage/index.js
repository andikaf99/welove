import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import * as Axios from 'axios';

import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const LoginPage = ({navigation}) => {

  const LoginRef = React.useRef(null);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      Email: 'andikafadilla.af@gmail.com',
      Pass: 'welvoe123',
    }
  });

  const [shouldShow, setShouldShow] = useState(false);

  const configAxios = {
    onUploadProgress: () => setShouldShow(true)
  }

  const onSubmit = (data) => {
    Axios.post('https://api.welove.web.id/index.php/BeforeLogin/LoginPage', data, configAxios).then(res => {
    if(res.status == '200')
      {
        if(res.data.status == '1')
        {
          setShouldShow(false)
          navigation.navigate('DashboardUser');
        }
        else if(res.data.status == '0')
        {
          setShouldShow(false)
          LoginRef.current.showMessage({
            message: "Email dan kata sandi salah!",
            description: "harap ulangi lagi",
            type: "default",
            backgroundColor: "#D82148",
            icon : "danger"
          });
        }
      }
    else
      {
        setShouldShow(false)
        LoginRef.current.showMessage({
          message: "Server tidak merespon",
          description: "harap ulangi lagi",
          type: "default",
          backgroundColor: "#D82148",
          icon : "danger"
        });
      }
    })
  };

  return (
    <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight}}>
    <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flexGrow:1}}
        showsVerticalScrollIndicator={false}>
            <Image
              source={require("../../../assets/img/BeforeLogin/logo.png")}
              style={LoginPageStyle.Logo}
            />
            <Text style={LoginPageStyle.text}>
              menjadi lebih peduli lingkungan dengan langkah kecil memilah sampah secara mandiri!
            </Text>

            <Image source={require("../../../assets/img/BeforeLogin/user.png")} style={LoginPageStyle.imgEmail}/>
            <Controller
              control={control}
              rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={LoginPageStyle.inputEmail}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder= "Email"
                  placeholderTextColor= 'black'
                />
              )}
              name="Email"
            />
            {errors.Email && <Text style={LoginPageStyle.EmailError}>email tidak valid</Text>}
            
            {shouldShow ? <ActivityIndicator  size="large" /> : null}

            <Image source={require("../../../assets/img/BeforeLogin/pass.png")} style={LoginPageStyle.imgPass}/>
            <Controller
              control={control}
              rules={{
              required: true,
              minLength: 8,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={LoginPageStyle.inputPass}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder= "Kata Sandi"
                  placeholderTextColor= 'black'
                  secureTextEntry={true}
                />
              )}
              name="Pass"
            />
            {errors.Pass && <Text style={LoginPageStyle.PassError}>kata sandi tidak valid</Text>}
            <TouchableOpacity style={LoginPageStyle.btnMsk} onPress={handleSubmit(onSubmit)}>
              <Text style={LoginPageStyle.txtMsk}>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={LoginPageStyle.btnLupa} onPress={() => navigation.navigate('ForgotPage')}>
              <Text style={LoginPageStyle.txtLupa}>Lupa Kata Sandi?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={LoginPageStyle.btnNew} onPress={() => navigation.navigate('SignupPage')}>
              <Text style={LoginPageStyle.txtNew}>Registrasi</Text>
            </TouchableOpacity>
    </KeyboardAwareScrollView>
    <FlashMessage position="top" ref={LoginRef}/>
    </SafeAreaView>
  );
};

const LoginPageStyle = StyleSheet.create(
  {
    Logo : {
      "width": 222,
      "height": 185,
      "left": 95,
      "top": 30
    },
    text : {
      "width": 350,
      "height": 46,
      "left": 25,
      "top": 30,
      "fontFamily": "Amiko",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 16,
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
      "width": 270,
      "height": 44,
      "left": 71,
      "top": 20,
      borderColor: '#FFA1A1',
      borderRadius: 8,
    },
    EmailError : {
      "width": 150,
      "height": 20,
      "left": 60,
      "top": 20,
      "fontFamily": "WLUIBesley",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 12,
      "lineHeight": 23,
      "textAlign": "center",
      "color": "#FC4F4F"
    },
    imgEmail: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      top: 60,
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
      "width": 270,
      "height": 44,
      "left": 71,
      "top": 0,
      borderColor: '#FFA1A1',
      borderRadius: 8,
    },
    PassError : {
      "width": 200,
      "height": 20,
      "left": 50,
      "top": 0,
      "fontFamily": "WLUIBesley",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 12,
      "lineHeight": 23,
      "textAlign": "center",
      "color": "#FC4F4F"
    },
    imgPass: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      top: 40,
      left: 30,
      resizeMode: 'stretch',
      alignItems: 'center',
    },
    btnMsk: {
      "width": 270,
      "height": 40,
      "left": 71,
      "top": 30,
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
      "width": 270,
      "height": 40,
      "left": 71,
      "top": 40,
      "backgroundColor": "#F8F8F8",
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
      "width": 270,
      "height": 40,
      "left": 71,
      "top": 50,
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
    txtNew: {
      flex: 1,
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
      "color": "#fff"
    },
  }
)

export default LoginPage;