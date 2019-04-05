import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Platform,
  View
} from "react-native";

type Props = TextInputProps;

class FormTextInput extends React.Component<Props> {
  // textInputRef = React.createRef<TextInput>();
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({ isFocused: false });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  render() {
    const { error, onFocus, onBlur, style, ...otherProps } = this.props;

    const { isFocused } = this.state;

    return (
      <View style={[styles.container, style]}>
        <TextInput
          ref={this.textInputRef}
          selectionColor={"#428AF8"}
          underlineColorAndroid={isFocused ? "#428AF8" : "#D3D3D3"}
          style={styles.textInput}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...otherProps}
        />
        <Text style={styles.errorText}>{error || ""}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  textInput: {
    height: 40,
    ...Platform.select({
      ios: {
        borderColor: "#BEBEBE",
        borderBottomWidth: StyleSheet.hairlineWidth
      },
      android: {
        paddingLeft: 6
      }
    })
  },
  errorText: {
    height: 20,
    color: "red",
    ...Platform.select({
      android: {
        paddingLeft: 6
      }
    })
  }
});

export default FormTextInput;
