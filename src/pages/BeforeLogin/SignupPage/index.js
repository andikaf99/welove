import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator
} from "react-native";

import * as Axios from 'axios';
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const SignupPage = ({navigation}) => {

  const SignupPageRef = useRef(null);

  const { control, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      NoTelp: '082186277470',
      Email: 'andikafadilla.af@gmail.com',
      Pass: 'welove123',
      Pass2: 'welove123',
    }
  });

  const [shouldShow, setShouldShow] = useState(false);

  const configAxios = {
    onUploadProgress: () => setShouldShow(true)
  }

  const onSubmit = (data) => {
    if(watch('Pass') == watch('Pass2'))
    {
      Axios.post('https://api.welove.web.id/index.php/BeforeLogin/SignupPage', data, configAxios).then(res => {
        // console.log(res.data.status);
        if(res.status == '200')
        {
          if(res.data.status == '1')
          {
            setShouldShow(false)
            // navigation.navigate('LoginPage',{statusSignup: 'success', emailParams: data.Email});
          }
          else if(res.data.status == '0')
          {
            setShouldShow(false)
            SignupPageRef.current.showMessage({
              message: "Server tidak merespon",
              description: "harap ulangi lagi",
              type: "default",
              backgroundColor: "#D82148",
              icon : "danger"
            });
          }
          else if(res.data.status == '2')
          {
            setShouldShow(false);
            SignupPageRef.current.showMessage({
              message: "email atau no telepon sudah digunakan",
              description: "silahkan login",
              type: "default",
              backgroundColor: "#D82148",
              icon : "danger"
            });
          }
          else
          {
            setShouldShow(false)
            SignupPageRef.current.showMessage({
              message: "Server tidak merespon",
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
          showMessage({
            message: "Server tidak merespon",
            description: "harap ulangi lagi",
            type: "default",
            backgroundColor: "#D82148",
            icon : "danger"
          });
        }
      });
    }
  }

  return (
    <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight}}>
    <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flexGrow:1}}
        showsVerticalScrollIndicator={false}>
        <Text style={SignupPageStyle.title}>
          Welove
        </Text>
        <Text style={SignupPageStyle.text}>
          Selamat Datang Penyelamat Bumi!
        </Text>

      <Controller
        control={control}
        rules={{
         required: true,
         minLength: 10,
         maxLength: 14,
         pattern: /^(\+62|62|0)8[1-9][0-9]{6,9}$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={SignupPageStyle.inputTelp}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder= "No Telp (ex : 08xxxx)"
            placeholderTextColor= 'black'
            keyboardType="numeric"
          />
        )}
        name="NoTelp"
      />
      {errors.NoTelp && <Text style={SignupPageStyle.NoTelpError}>nomor tidak valid</Text>}
      
      <Controller
        control={control}
        rules={{
         required: true,
         pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={SignupPageStyle.inputEmail}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder= "Email"
            placeholderTextColor= 'black'
          />
        )}
        name="Email"
      />
      {errors.Email && <Text style={SignupPageStyle.EmailError}>email tidak valid</Text>}

      {shouldShow ? <ActivityIndicator  size="large" /> : null}
      
      <Controller
        control={control}
        rules={{
         required: true,
         minLength: 8,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={SignupPageStyle.inputPass}
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
      {errors.Pass && <Text style={SignupPageStyle.PassError}>kata sandi minimal 8 karakter</Text>}

      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={SignupPageStyle.inputPass2}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder= "Konfirmasi Kata Sandi"
            placeholderTextColor= 'black'
            secureTextEntry={true}
          />
        )}
        name="Pass2"
      />
      {watch('Pass') != watch('Pass2') && <Text style={SignupPageStyle.Pass2Error}>kata sandi tidak sama</Text>}

        <TouchableOpacity style={SignupPageStyle.btnMsk} onPress={handleSubmit(onSubmit)}>
          <Text style={SignupPageStyle.txtMsk}>Daftar Sekarang</Text>
        </TouchableOpacity>

        {/* ANIMASI LOADING */}

        {/* <TouchableOpacity style={SignupPageStyle.btnLupa} onPress={() => navigation.navigate('LoginPage')}>
          <Text style={SignupPageStyle.txtLupa}>Sudah punya akun? Silahkan masuk!</Text>
        </TouchableOpacity> */}
    </KeyboardAwareScrollView>
    <FlashMessage position="top" ref={SignupPageRef}/>
    </SafeAreaView>
  );
};

const SignupPageStyle = StyleSheet.create(
  {
    title: {
      width: 151,
      height: 62,
      left: 137,
      top: 60,
      fontFamily: "WLUIBesley",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 36,
      display: "flex",
      alignItems: "flex-end",
      color: "#7D8F35",
    },
    text : {
      "width": 277,
      "height": 46,
      "left": 65,
      "top": 50,
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
      "width": 270,
      "height": 50,
      "left": 71,
      "top": 40,
      borderColor: '#FFA1A1',
      borderRadius: 8,
    },
    NoTelpError : {
      "width": 150,
      "height": 20,
      "left": 60,
      "top": 40,
      "fontFamily": "WLUIBesley",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 12,
      "lineHeight": 23,
      "textAlign": "center",
      "color": "#FC4F4F"
    },
    inputEmail: {
      borderWidth: 1,
      fontFamily: "Alice",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 15,
      "width": 270,
      "height": 50,
      "left": 71,
      "top": 50,
      borderColor: '#FFA1A1',
      borderRadius: 8,
    },
    EmailError : {
      "width": 150,
      "height": 20,
      "left": 60,
      "top": 50,
      "fontFamily": "WLUIBesley",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 12,
      "lineHeight": 23,
      "textAlign": "center",
      "color": "#FC4F4F"
    },
    inputPass: {
      borderWidth: 1,
      fontFamily: "Alice",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 15,
      "width": 270,
      "height": 50,
      "left": 71,
      "top": 60,
      borderColor: '#FFA1A1',
      borderRadius: 8,
    },
    PassError : {
      "width": 200,
      "height": 20,
      "left": 75,
      "top": 60,
      "fontFamily": "WLUIBesley",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 12,
      "lineHeight": 23,
      "textAlign": "center",
      "color": "#FC4F4F"
    },
    inputPass2: {
      borderWidth: 1,
      fontFamily: "Alice",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: 15,
      
      "width": 270,
      "height": 50,
      "left": 71,
      "top": 70,
      borderColor: '#FFA1A1',
      borderRadius: 8,
    },
    Pass2Error : {
      "width": 150,
      "height": 20,
      "left": 75,
      "top": 70,
      "fontFamily": "WLUIBesley",
      "fontStyle": "normal",
      "fontWeight": "600",
      "fontSize": 12,
      "lineHeight": 23,
      "textAlign": "center",
      "color": "#FC4F4F"
    },
    btnMsk: {
      "width": 270,
      "height": 50,
      "left": 71,
      "top": 125,
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
      "top": 15,
      "fontFamily": "Audrey",
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
      "top": 120,
      "backgroundColor": "##F8F8F8",
      "fontFamily": "Audrey",
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