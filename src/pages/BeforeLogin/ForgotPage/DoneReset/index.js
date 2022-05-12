import React from 'react'

import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const DoneReset = ({navigation}) => {
    return (
        <SafeAreaView>
            <Image
              source={require("../../../../assets/img/BeforeLogin/logo.png")}
              style={DoneResetStyle.Logo}
            />
            <Text style={DoneResetStyle.Text}>Kata sandi kamu berhasil diubah, sekarang cobalah untuk login ulang</Text>
            <TouchableOpacity style={DoneResetStyle.btnSubmit} onPress={() => navigation.navigate('LoginPage')}>
              <Text style={DoneResetStyle.txtSubmit}>Masuk</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const DoneResetStyle = StyleSheet.create(
    {
        Logo : {
            "width": 222,
            "height": 185,
            "left": 95,
            "top": 40
          },
        Text: {
            "width": 212,
            "height": 46,
            "left": 95,
            "top": 40,
            "fontFamily": "Amiko",
            "fontStyle": "normal",
            "fontWeight": "600",
            "fontSize": 12,
            "lineHeight": 23,
            "textAlign": "center",
            "color": "#00000069",
          },
          btnSubmit: {
            "width": 270,
            "height": 40,
            "left": 71,
            "top": 300,
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