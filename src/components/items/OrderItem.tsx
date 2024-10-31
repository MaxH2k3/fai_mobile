import React from 'react';
import { View, Text } from 'react-native';
import { hooks } from '../../hooks';
import { custom } from '../../custom';
import { theme } from '../../constants';
import { ICartItem } from '../../constants/model/cart-interface';
import { Currency } from '../../constants/enum/currency-enum';
import { svg } from '../../assets/svg';
import { actions } from '../../store/actions';
import { truncateText } from '../../utils/truncate-text';
import formatNumber from '../../utils/format-number';

type Props = { lastItem: boolean; item: ICartItem };

const OrderItem: React.FC<Props> = ({ item, lastItem }) => {

  const navigation = hooks.useNavigation();
  const dispatch = hooks.useDispatch();

  const containerStyle = {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginBottom: lastItem ? 20 : 14,
  };

  const renderImage = () => {
    return (
      <custom.ImageBackground
        source={{ uri: item.image }}
        style={{
          width: 100,
          height: 100,
          marginRight: 14,
        }}
        resizeMode='cover'
      />
    );
  };

  const renderDetails = () => {
    return (
      <View style={{ marginRight: 'auto' }}>
        <Text
          style={{
            marginRight: 'auto',
            ...theme.fonts.Mulish_Regular,
            fontSize: 14,
            lineHeight: 14 * 1.7,
            color: theme.colors.textColor,
          }}
          numberOfLines={1}
        >
          {truncateText(item.name, 20)}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 14,
              lineHeight: 14 * 1.5,
              color: theme.colors.mainColor,
            }}
          >
            {formatNumber(item.price)}{Currency.VND}
          </Text>
        </View>

        <View style={{ marginTop: 'auto' }}>
          <Text
            style={{
              fontSize: 14,
              color: theme.colors.textColor,
              ...theme.fonts.Mulish_Regular,
              lineHeight: 14 * 1.6,
            }}
          >
            Size: {item.size ? item.size.toUpperCase() : 'No size'}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: theme.colors.textColor,
              marginRight: 14,
              ...theme.fonts.Mulish_Regular,
              lineHeight: 14 * 1.6,
            }}
          >
            Color: {item.color ? item.color : 'No color'}
          </Text>
        </View>

      </View>
    );
  };

  const renderCounter = () => {
    return (

      <View
        style={{
          height: 100,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <custom.TouchableOpacity
          onPress={() => {
            dispatch(actions.addToCart(item));
          }}
        >
          <svg.PlusSvg />
        </custom.TouchableOpacity>
        <Text
          style={{
            ...theme.fonts.Mulish_SemiBold,
            fontSize: 14,
            color: theme.colors.textColor,
          }}
        >
          {item.quantity}
        </Text>
        <custom.TouchableOpacity
          onPress={() => {
            dispatch(actions.removeFromCart(item));
          }}
        >
          <svg.MinusSvg />
        </custom.TouchableOpacity>
      </View>
    )
    // < product.ProductCounter item = { item } />;
  };

  const onPress = () => {
    navigation.navigate('ProductDetail', { name: item.name });
  };

  return (
    <custom.TouchableOpacity
      style={{ ...containerStyle }}
      onPress={() => onPress()}
    >
      {renderImage()}
      {renderDetails()}
      {renderCounter()}
    </custom.TouchableOpacity>
  );
};

export default OrderItem;
