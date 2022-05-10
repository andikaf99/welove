import React from "react";
import {
  ScrollView,
  View,
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from "./pages/BeforeLogin/LandingPage";
import LoginPage from "./pages/BeforeLogin/LoginPage";
import SignupPage from "./pages/BeforeLogin/SignupPage";
import ForgotPage from "./pages/BeforeLogin/ForgotPage";
import InsertCode from "./pages/BeforeLogin/ForgotPage/InsertCode";
import ResetPass from "./pages/BeforeLogin/ForgotPage/ResetPass";
import DashboardUser from "./pages/DashboardUser";
import SuccessPage from "./pages/SuccessPage";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LandingPage" component={LandingPage}/>
          <Stack.Screen name="SignupPage" component={SignupPage}/>
          <Stack.Screen name="LoginPage" component={LoginPage}/>
          <Stack.Screen name="ForgotPage" component={ForgotPage}/>
          <Stack.Screen name="InsertCode" component={InsertCode}/>
          <Stack.Screen name="ResetPass" component={ResetPass}/>
          <Stack.Screen name="DashboardUser" component={DashboardUser}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
