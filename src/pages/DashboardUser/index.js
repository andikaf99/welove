import React from 'react'
import {
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function DashboardUser() {
  return (
    <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight}}>
        <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flexGrow:1}}
        showsVerticalScrollIndicator={false}>
          
          <SafeAreaView style={DashboardUserStyle.ViewImgFront}>
            <ImageBackground
                source={require("../../assets/img/DashboardUser/DashboardUserImgFront.jpg")}
                style={DashboardUserStyle.ImgFront} imageStyle={{borderRadius: 58}}
              >
                <SafeAreaView style={DashboardUserStyle.ViewTextFront}>
                  <Text style={DashboardUserStyle.TextFront}>Powerful Bikin Kulit Cerah Bercahaya, Ini 5 Skincare dengan Kandungan AHA 10%</Text>
                </SafeAreaView>
          </ImageBackground>
          </SafeAreaView>

          <SafeAreaView>
             <Text style={DashboardUserStyle.TxtWelove}>Welove</Text>
             <Text style={DashboardUserStyle.TxtArtikel}>Baca Artikel Lainnya</Text>
          </SafeAreaView>

          <SafeAreaView style={{left:50,flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <SafeAreaView style={{backgroundColor:"rgba(125, 143, 53, 0.15);"}}>
              <Image source={require("../../assets/img/DashboardUser/SendWaste.png")}
                style={DashboardUserStyle.imgWaste}
              />
              <TouchableOpacity style={DashboardUserStyle.btnWaste}>
              <Text style={DashboardUserStyle.txtWaste}>Send Waste</Text>
            </TouchableOpacity>
            </SafeAreaView>

            <SafeAreaView style={{backgroundColor:"rgba(125, 143, 53, 0.15);"}}>
              <Image source={require("../../assets/img/DashboardUser/BeliSkincare.png")}
                style={DashboardUserStyle.imgBuy}
              />
              <TouchableOpacity style={DashboardUserStyle.btnBuy}>
              <Text style={DashboardUserStyle.txtBuy}>Beli Skincare</Text>
            </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>

        </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

const DashboardUserStyle = StyleSheet.create(
  {
    ViewImgFront: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    ImgFront: {
      "width": 252.96,
      "height": 347.27,
      "left": 2.57,
      "top": -2,
      justifyContent: 'center',
      alignItems: 'center'
    },
    ViewTextFront: {
      backgroundColor:'black',
      opacity:0.8,
      borderRadius: 10,
      paddingTop:10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      top: 100,
      width: 210,
    },
    TextFront: {
      "fontFamily": "Montserrat",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": 11,
      "lineHeight": 13,
      "textAlign": "center",
      "letterSpacing": 0.25,
      color: "white",
    },
    TxtWelove: {
      "fontFamily": "Besley",
      "fontStyle": "normal",
      "fontSize": 24,
      "left": 33,
      "color": "#7D8F35"
    },
    TxtArtikel: {

      "left": 46,
      "fontFamily": "Alice",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": 12,
      "lineHeight": 23
    },
    imgWaste: {
      "width": 102.65,
      "height": 116.56,
      "left": 5,
    },
    btnWaste: {
      "width": 114,
      "height": 31,
      "backgroundColor": "#7D8F35",
      "borderTopLeftRadius": 6,
      "borderTopRightRadius": 6,
      "borderBottomRightRadius": 6,
      "borderBottomLeftRadius": 6
    },
    txtWaste: {
      "fontFamily": "Montserrat",
      "textAlign": "center",
      "letterSpacing": 0.25,
      "top" : 5,
      "color": "#FFFFFF"
    },
    imgBuy: {
      "width": 102.65,
      "height": 116.56,
    },
    btnBuy: {
      "width": 114,
      "height": 31,
      "backgroundColor": "#FFFFFF",
      "borderTopLeftRadius": 6,
      "borderTopRightRadius": 6,
      "borderBottomRightRadius": 6,
      "borderBottomLeftRadius": 6
    },
    txtBuy: {
      "fontFamily": "Montserrat",
      "textAlign": "center",
      "letterSpacing": 0.25,
      "top" : 5,
      "color": "#7D8F35"
    }
  }
)

export default DashboardUser;