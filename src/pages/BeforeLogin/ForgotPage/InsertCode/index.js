import React, { useState } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const InsertCode = ({route, navigation}) => {

  const InsertCodeRef = React.useRef();

  const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
    defaultValues: {
      Code: '',
      Email: '',
    }
  });

  const {EmailParams} = route.params;
  setValue("Email",EmailParams);
  
  const [shouldShow, setShouldShow] = useState(false);
  const configAxios = {
    onUploadProgress: () => setShouldShow(true)
  }

  const onSubmit = (data) => {
      Axios.post('https://api.welove.web.id/index.php/BeforeLogin/InsertCode', data, configAxios).then(res => {  
      console.log(res);
      if(res.status == '200')
        {
          if(res.data.status == '1')
          {
            setShouldShow(false)
            navigation.navigate('ResetPass',{EmailParams : getValues("Email")});
          }
          else if(res.data.status == '0')
          {
            setShouldShow(false)
            InsertCodeRef.current.showMessage({
              message: "Kode yang dimasukkan salah!",
              description: "harap ulangi lagi",
              type: "default",
              backgroundColor: "#D82148",
              icon : "danger"
            });
          }
          else if(res.data.status == '2')
          {
            setShouldShow(false)
            InsertCodeRef.current.showMessage({
              message: "silahkan klik tombol submit lagi",
              description: "",
              type: "default",
              backgroundColor: "#D82148",
              icon : "danger"
            });
          }
        }
        else{
          setShouldShow(false)
          InsertCodeRef.current.showMessage({
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
          showsVerticalScrollIndicator={false}>
          <Image
            source={require("../../../../assets/img/BeforeLogin/logo.png")}
            style={InsertCodeStyle.Logo}
          />
          <Text style={InsertCodeStyle.text}>
          Cek kotak email kamu untuk mendapatkan kode verifikasi perubahan kata sandi
          </Text>
          {shouldShow ? <ActivityIndicator  size="large" /> : null}
          <Controller
          control={control}
          rules={{
          required: true,
          pattern: /^([a-z0-9]+)$/i,
          minLength: 5,
          maxLength: 5,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
            style={InsertCodeStyle.inputCode}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder= "Masukkan 5 digit kode"
            placeholderTextColor= 'black'
          />
          )} 
          name="Code"
          />
          {errors.Code && <Text style={InsertCodeStyle.CodeError}>kode tidak valid</Text>}
          <TouchableOpacity style={InsertCodeStyle.btnSubmit} onPress={handleSubmit(onSubmit)}>
            <Text style={InsertCodeStyle.txtSubmit}>Submit</Text>
          </TouchableOpacity>
          </KeyboardAwareScrollView>
          <FlashMessage position="top" ref={InsertCodeRef}/>
        </SafeAreaView>
      );
}

const InsertCodeStyle = StyleSheet.create(
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
        "top": 30,
        "fontFamily": "WLUIBesley",
        "fontStyle": "normal",
        "fontWeight": "600",
        "fontSize": 15,
        "lineHeight": 25,
        "textAlign": "center",
        "color": "rgba(0, 0, 0, 0.41)"
      },
      CodeError : {
        "width": 150,
        "height": 20,
        "left": 50,
        "top": 50,
        "fontFamily": "WLUIBesley",
        "fontStyle": "normal",
        "fontWeight": "600",
        "fontSize": 12,
        "lineHeight": 23,
        "textAlign": "center",
        "color": "#FC4F4F"
      },
      inputCode: {
        borderWidth: 1,
        fontFamily: "Alice",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 15,
        "width": 270,
        "height": 44,
        "left": 71,
        "top": 50,
        borderColor: '#7D8F35',
        borderRadius: 8,
      },
      btnSubmit: {
        "width": 270,
        "height": 40,
        "left": 71,
        "top": 150,
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
      txtSubmit: {
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
    }
  )

  export default InsertCode;