import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";

interface State {
  email: string;
  password: string;
  emailTouched: boolean;
  passwordTouched: boolean;
}

export default class LoginScreen extends React.Component<{}, State> {
  // passwordInputRef = React.createRef<FormTextInput>();

  state = {
    email: "",
    password: "",
    emailTouched: false,
    passwordTouched: false
  };

  handleEmailChange = email => {
    this.setState({ email: email });
  };

  handlePasswordChange = password => {
    this.setState({ password: password });
  };

  handleEmailSubmitPress = () => {
    // if (this.passwordInputRef.current) {
    //   this.passwordInputRef.current.focus();
    // }
  };

  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
    this.props.navigation.navigate("drawerStack");
  };

  render() {
    const { email, password, emailTouched, passwordTouched } = this.state;
    // Show the validation errors only when the inputs
    // are empty AND have been blurred at least once
    const emailError = !email && emailTouched ? "Email required" : undefined;
    const passwordError =
      !password && passwordTouched ? "Password required" : undefined;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Text style={styles.titleLabel}>Login</Text>
        <View style={styles.form}>
          <FormTextInput
            value={this.state.email}
            onChangeText={this.handleEmailChange}
            onSubmitEditing={this.handleEmailSubmitPress}
            placeholder={"Email"}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize={"none"}
            onBlur={this.handleEmailBlur}
            error={emailError}
            blurOnSubmit={Platform.OS === "ios"}
          />
          <FormTextInput
            // ref={this.passwordInputRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={"Password"}
            secureTextEntry={true}
            returnKeyType="done"
            onBlur={this.handlePasswordBlur}
            error={passwordError}
          />
          <Button
            label={"LOGIN"}
            onPress={this.handleLoginPress}
            disabled={!email || !password}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  form: {
    top: 50,
    flex: 1,
    justifyContent: "flex-start",
    width: "80%"
    // backgroundColor:'red'
  },
  titleLabel: {
    paddingTop: 100,
    left: "30%",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "Verdana",
    marginBottom: 10,
    color: "#595856",
    // flex: 1,
    width: "100%"
  }
});
