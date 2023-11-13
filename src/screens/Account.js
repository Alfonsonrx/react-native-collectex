import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

const Account = () => {
  const { userData, logout } = useAuth();

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>
          {`${userData.firstname} ${userData.lastname}`}
        </Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Nombre" text={`${userData.firstname} ${userData.lastname}`} />
        <ItemMenu title="Username" text={userData.username} />
        <ItemMenu title="Email" text={userData.email} />
        <ItemMenu title="N° Favoritos" text={`0 favoritos`} />
      </View>
      <View style={styles.btnBlock}>
        <Button title="Desconectarse" onPress={logout} />
      </View>
    </View>
  );
}

const ItemMenu = (props) => {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}: </Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  dataContent: {
    marginBottom: 20
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF'
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  btnBlock: {
    paddingTop: 20
  }
})

export default Account;