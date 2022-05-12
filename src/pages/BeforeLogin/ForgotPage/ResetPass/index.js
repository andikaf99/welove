import React from 'react'

import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ResetPass = ({route, navigation}) => {
  const ResetPassRef = React.useRef();

  const { control, handleSubmit, watch, setValue, getValues, formState: { errors } } = useForm({
    defaultValues: {
      Pass: '',
      Pass2: '',
    }
  });

  const {EmailParams} = route.params;
  setValue("Email",EmailParams);

  const [shouldShow, setShouldShow] = React.useState(false);
  const configAxios = {
    onUploadProgress: () => setShouldShow(true)
  }

  const onSubmit = (data) => {
    Axios.post('https://api.welove.web.id/index.php/BeforeLogin/ResetPass', data, configAxios).then(res => {  
    console.log(res);
    if(res.status == '200')
      {
        if(res.data.status == '1')
        {
          setShouldShow(false)
          navigation.navigate('DoneReset');
        }
        else if(res.data.status == '0')
        {
          setShouldShow(false)
          ResetPassRef.current.showMessage({
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
          ResetPassRef.current.showMessage({
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
        ResetPassRef.current.showMessage({
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
              style={ResetPassStyle.Logo}
            />
            <Text style={ResetPassStyle.text}>
              Silahkan masukkan kata sandi yang baru
            </Text>
            {shouldShow ? <ActivityIndicator  size="large" /> : null}
            <Controller
              control={control}
              rules={{
              required: true,
              minLength: 8,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={ResetPassStyle.inputPass}
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
            {errors.Pass && <Text style={ResetPassStyle.PassError}>kata sandi minimal 8 karakter</Text>}

            <Controller
            control={control}
            rules={{
            required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={ResetPassStyle.inputPass2}
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
          {watch('Pass') != watch('Pass2') && <Text style={ResetPassStyle.Pass2Error}>kata sandi tidak sama</Text>}

            <TouchableOpacity style={ResetPassStyle.btnSubmit} onPress={handleSubmit(onSubmit)}>
              <Text style={ResetPassStyle.txtSubmit}>Ganti Kata Sandi</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      );
}

const ResetPassStyle = StyleSheet.create(
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
        "top": 40,
        "fontFamily": "WLUIBesley",
        "fontStyle": "normal",
        "fontWeight": "600",
        "fontSize": 15,
        "lineHeight": 25,
        "textAlign": "center",
        "color": "rgba(0, 0, 0, 0.41)"
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
        "top": 60,
        borderColor: '#7D8F35',
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
        "height": 44,
        "left": 71,
        "top": 80,
        borderColor: '#7D8F35',
        borderRadius: 8,
      },
      Pass2Error : {
        "width": 150,
        "height": 20,
        "left": 75,
        "top": 80,
        "fontFamily": "WLUIBesley",
        "fontStyle": "normal",
        "fontWeight": "600",
        "fontSize": 12,
        "lineHeight": 23,
        "textAlign": "center",
        "color": "#FC4F4F"
      },
      btnSubmit: {
        "width": 270,
        "height": 40,
        "left": 71,
        "top": 100,
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

  export default ResetPass;