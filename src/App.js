import React from "react";
import {
  ScrollView,
  View,
} from "react-native";

import LandingPage from "./pages/BeforeLogin/LandingPage";
import LoginPage from "./pages/BeforeLogin/LoginPage";
import SignupPage from "./pages/BeforeLogin/SignupPage";
const App = () => {
  return (
    <View>
        {/* <LandingPage/> */}
        {/* <LoginPage/> */}
        <SignupPage/>
    </View>
  );
};

export default App;
