import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isServiceProvider, setIsServiceProvider] = useState(false);

  const handleRegister = () => {
    // In a real app, you would send the registration data to your API
    console.log('Register:', { name, email, password, isServiceProvider });
    alert('Registration successful!');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isServiceProvider ? "I'm a Service Provider" : "I'm a Customer"}
        onPress={() => setIsServiceProvider(!isServiceProvider)}
      />
      <Button title="Register" onPress={handleRegister} />
      <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
        Already have an account? Login here
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginLink: {
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default RegisterScreen;