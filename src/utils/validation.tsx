import {Alert} from 'react-native';

const isValidate = false;

type ValidationProps = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  phone?: string;
  code?: string;
};

export const validation = ({
  username,
  email,
  password,
  confirmPassword,
  phone,
  code,
}: ValidationProps) => {
  let isValid = true;

  if (!isValidate) {
    return isValid;
  }

  if (username !== undefined) {
    if (username === '') {
      Alert.alert('', 'Please fill name field');
      isValid = false;
      return isValid;
    } else if (username.length < 3) {
      Alert.alert('Name must be at least 3 characters');
      isValid = false;
      return isValid;
    }
  }

  if (email !== undefined) {
    if (email === '') {
      Alert.alert('', 'Please fill email field');
      isValid = false;
      return isValid;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      Alert.alert('', 'Email address is invalid');
      isValid = false;
      return isValid;
    }
  }

  if (password !== undefined) {
    if (password === '') {
      Alert.alert('', 'Please fill password field');
      isValid = false;
      return isValid;
    } else if (password.length < 6) {
      Alert.alert('', 'Password must be at least 6 characters');
      isValid = false;
      return isValid;
    }
  }

  if (confirmPassword !== undefined) {
    if (confirmPassword === '') {
      Alert.alert('', 'Please fill confirm password field');
      isValid = false;
      return isValid;
    } else if (password !== confirmPassword) {
      Alert.alert('', 'Passwords do not match');
      isValid = false;
      return isValid;
    }
  }

  if (phone !== undefined) {
    if (phone.length < 9) {
      Alert.alert('', 'Phone number must be at least 9 characters');
      isValid = false;
      return isValid;
    }
  }

  if (code !== undefined) {
    if (code === '') {
      Alert.alert('', 'Please fill OTP field');
      isValid = false;
      return isValid;
    } else if (code.length < 5) {
      Alert.alert('', 'OTP must be at least 5 characters');
      isValid = false;
      return isValid;
    }
  }

  return isValid;
};
