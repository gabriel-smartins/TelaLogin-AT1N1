import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from "react-native";

function App() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("./assets/camera.png")}
        style={{ width: 100, height: 100,}}
      />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Telefone, nome de usuário ou email"
        />
        
        <TextInput style={styles.input} 
        placeholder="Senha" />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        
        <View style={styles.forgotPassword}>
          <Text style={{ color: "#007BFF", fontSize: 13, paddingTop: 15 }}>
            Esqueceu a senha?
          </Text>
        </View>
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

  form: {
    padding: 40,
    width: "100%",
  },

  input: {
    backgroundColor: "#f2f2f2",
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#007BFF",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
  },

  forgotPassword: {
    alignItems: "flex-end",
  },
});

export default App;
