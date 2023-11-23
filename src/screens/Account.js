import { View } from 'react-native';
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

const Account = () => {
  const { userData } = useAuth();

  return (
    <View>
      {userData ? <UserData /> : <LoginForm />}
    </View>
  );
}

export default Account;