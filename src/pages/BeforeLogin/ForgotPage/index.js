import React, { useState } from 'react'

import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, Controller } from "react-hook-form";
import * as Axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";

export const ForgotPage = ({navigation}) => {

  const ForgotPageRef = React.useRef();

  const { control, handleSubmit, getValues, formState: { errors } } = useForm({
    defaultValues: {
      Email: '',
    }
  });

  const [shouldShow, setShouldShow] = useState(false);

  const configAxios = {
    onUploadProgress: () => setShouldShow(true)
  }

  const onSubmit = (data) => {
      Axios.post('https://api.welove.web.id/index.php/BeforeLogin/ForgotPass', data, configAxios).then(res => {
        if(res.status == '200')
        {
          if(res.data.status == '1')
          {
            setShouldShow(false)
            navigation.navigate('InsertCode',{EmailParams : getValues("Email")});
          }
          else if(res.data.status == '0')
          {
            setShouldShow(false)
            ForgotPageRef.current.showMessage({
              message: "Email tidak ditemukan!",
              description: "harap ulangi lagi",
              type: "default",
              backgroundColor: "#D82148",
              icon : "danger"
            });
          }
        }
        else{
          setShouldShow(false)
          ForgotPageRef.current.showMessage({
            message: "Server tidak merespon",
            description: "harap ulangi lagi",
            type: "default",
            backgroundColor: "#D82148",
            icon : "danger"
          });
        }
      });
  }

    return (
        <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight}}>
          <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
          contentContainerStyle={{flexGrow:1}}
          showsVerticalScrollIndicator={false} >
            {shouldShow ? <ActivityIndicator  size="large" /> : null}
            <Image
              source={require("../../../assets/img/BeforeLogin/logo.png")}
              style={ForgotPageStyle.Logo}
            />
            <Text style={ForgotPageStyle.text}>
              Kami akan mengirimkan kode untuk mengatur ulang kata sandi anda
            </Text>
            
            <Image source={require("../../../assets/img/BeforeLogin/user.png")} style={ForgotPageStyle.imgEmail}/>
            <Controller
          control={control}
          rules={{
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={ForgotPageStyle.inputEmail}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder= "Email"
              placeholderTextColor= 'black'
            />
          )}
          name="Email"
        />
        {errors.Email && <Text style={ForgotPageStyle.EmailError}>email tidak valid</Text>}

            {/* <TextInput 
              style={ForgotPageStyle.inputEmail}
              placeholder= "Masukkan email yang terdaftar"
              placeholderTextColor= 'black'
            /> */}

            <TouchableOpacity style={ForgotPageStyle.btnSend} onPress={handleSubmit(onSubmit)}>
              <Text style={ForgotPageStyle.txtSend}>Kirim Kode</Text>
            </TouchableOpacity>
            <TouchableOpacity style={ForgotPageStyle.btnNew} onPress={() => navigation.navigate('SignupPage')}>
              <Text style={ForgotPageStyle.txtNew}>Buat Akun Baru</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
          <FlashMessage position="top" ref={ForgotPageRef}/>
        </SafeAreaView>
      );
}

const ForgotPageStyle = StyleSheet.create(
    {
      Logo : {
        "width": 222,
        "height": 185,
        "left": 95,
        "top": 40
      },
      text : {
        "width": 277,
        "height": 46,
        "left": 65,
        "top": 35,
        "fontFamily": "WLUIBesley",
        "fontStyle": "normal",
        "fontWeight": "600",
        "fontSize": 15,
        "lineHeight": 25,
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
        "top": 30,
        borderColor: '#7D8F35',
        borderRadius: 8,
      },
      EmailError : {
        "width": 150,
        "height": 20,
        "left": 50,
        "top": 30,
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
        top: 70,
        left: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      btnSend: {
        "width": 270,
        "height": 40,
        "left": 71,
        "top": 80,
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
      txtSend: {
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
      btnNew: {
        "width": 270,
        "height": 40,
        "left": 71,
        "top": 100,
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

  export default ForgotPage;