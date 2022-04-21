import React from 'react'
import { Text, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'

function DashboardUser() {
  return (
    <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight}}>
        <KeyboardAwareScrollView  keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flexGrow:1}}
        showsVerticalScrollIndicator={false}></KeyboardAwareScrollView>
        <Text style={{fontSize:50}}>Halo !</Text>
    </SafeAreaView>
  )
}

export default DashboardUser