import {useSelector as useSelectorRN} from 'react-redux';
import {useDispatch as useDispatchRN} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import {useNavigation as useNavigationRN} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import type {RootState, AppDispatch} from '../store/store';
import {RootStackParamList} from '../types/RootStackParamList';

export const useDispatch: () => AppDispatch = useDispatchRN;
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorRN;
export const useNavigation: () => NativeStackNavigationProp<RootStackParamList> =
  useNavigationRN;

export type ShopScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Shop'
>;

export const Stack = createNativeStackNavigator<RootStackParamList>();

export const hooks = {
  useDispatch,
  useSelector,
  useNavigation,
};
