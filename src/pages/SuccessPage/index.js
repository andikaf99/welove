import React, { PureComponent } from 'react'
import { Text, StatusBar, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class index extends PureComponent {
  render() {
    return (
     <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight}}>
         <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flexGrow:1}}
        showsVerticalScrollIndicator={false}>
            <Text style={SuccessPageStyle.title}>Welove</Text>
         </KeyboardAwareScrollView>
     </SafeAreaView>
    )
  }
};

const SuccessPageStyle = StyleSheet.create(
    {
        title: {
            "width": 200,
            "height": 30,
            "left": 107,
            "top": 200,
            "fontFamily": "WLUIBesley",
            "fontStyle": "normal",
            "fontWeight": "400",
            "fontSize": 36,
            "lineHeight": 25,
            "display": "flex",
            "alignItems": "flex-end",
            "textAlign": "center",
            "color": "#7D8F35"
          },
    }
);
