import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    // Perform login logic here (e.g., validate credentials)
    console.log("Logging in with:", username, password);
    // Add your login logic to authenticate users
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login Page</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>Register with:</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity>
          <Image
            style={styles.socialButton}
            source={require('./assets/images/google_logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.socialButton}
            source={require('./assets/images/github_logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.socialButton}
            source={require('./assets/images/apple_logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.socialButton}
            source={require('./assets/images/ms_logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.socialButton}
            source={require('./assets/images/facebook_logo.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
    marginBottom: 40,
  },
  inputView: {
    width: "90%",
    backgroundColor: "#d3d3d3",
    borderRadius: 5,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#003f5c",
    fontWeight: "bold",
  },
  loginBtn: {
    width: "60%",
    backgroundColor: "#fb5b5a",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  socialButtons: {
    flexDirection: "row",
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    margin: 5,
    resizeMode: "contain",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
