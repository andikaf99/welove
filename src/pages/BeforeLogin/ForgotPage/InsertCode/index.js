import React, { useState } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";

export const InsertCode = ({route, navigation}) => {

  const InsertCodeRef = React.useRef();

  const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm({
    defaultValues: {
      Code: '',
      Email: '',
    }
  });
  const [shouldShow, setShouldShow] = useState(false);
  const configAxios = {
    onUploadProgress: () => setShouldShow(true)
  }
  const {EmailParams} = route.params;
  const onSubmit = (data) => {
    setValue("Email",EmailParams);
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
        <View>
          <Image
            source={require("../../../../assets/img/BeforeLogin/logo.png")}
            style={LoginPageStyle.Logo}
          />
          <Text style={LoginPageStyle.text}>
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
            style={LoginPageStyle.inputEmail}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder= "Masukkan 5 digit kode"
            placeholderTextColor= 'black'
          />
          )} 
          name="Code"
          />
          {errors.Code && <Text style={LoginPageStyle.EmailError}>kode tidak valid</Text>}
          <TouchableOpacity style={LoginPageStyle.btnMsk} onPress={handleSubmit(onSubmit)}>
            <Text style={LoginPageStyle.txtMsk}>Submit</Text>
          </TouchableOpacity>
          <FlashMessage position="top" ref={InsertCodeRef}/>
        </View>
      );
}

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
        "top": 235,
        "fontFamily": "WLUIBesley",
        "fontStyle": "normal",
        "fontWeight": "600",
        "fontSize": 15,
        "lineHeight": 25,
        "textAlign": "center",
        "color": "rgba(0, 0, 0, 0.41)"
      },
      EmailError : {
        "width": 150,
        "height": 20,
        "left": 50,
        "top": 365,
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
        "top": 510,
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

  export default InsertCode;