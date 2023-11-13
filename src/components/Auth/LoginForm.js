import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Keyboard
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import useAuth from '../../hooks/useAuth';

import { user, userDetails } from '../../utils/userDB';
const LoginForm = () => {
  const [error, setError] = useState("");
  const { login, userData } = useAuth();
  console.log(userData);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('');
      const { username, password } = formValue;

      if (username != user.username || password != user.password) {
        setError("El usuario o la contraseña no son correctos");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='password'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button
        title="Enter" onPress={formik.handleSubmit}
      />
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const initialValues = () => {
  return {
    username: "",
    password: "",
  };
}

const validationSchema = () => {
  return {
    username: Yup.string().required("El usuario es requerido"),
    password: Yup.string().required("La contraseña es requerida")
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20
  }
})

export default LoginForm;