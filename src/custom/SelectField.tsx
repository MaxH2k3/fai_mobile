import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
} from 'react-native';

import { theme } from '../constants';
import { svg } from '../assets/svg';

type Props = {
  containerStyle?: object;
  label?: string;
  placeholder?: string;
  value?: string;
  data: { label: string; value: string }[];
  onValueChange?: (value: string) => void;
};

const SelectField: React.FC<Props> = ({
  containerStyle,
  label,
  placeholder = 'Select an option',
  value,
  data,
  onValueChange,
}): JSX.Element => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSelect = (item: { label: string; value: string }) => {
    setSelectedValue(item.label);
    onValueChange?.(item.value);
    toggleModal();
  };

  return (
    <View
      style={{
        height: 50,
        borderColor: theme.colors.lightBlue,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderRadius: 25,
        marginBottom: 20,
        ...containerStyle,
      }}
    >
      {label && (
        <View
          style={{
            position: 'absolute',
            top: -11,
            left: 20,
            paddingHorizontal: 10,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text
            style={{
              ...theme.fonts.Mulish_SemiBold,
              fontSize: 12,
              textTransform: 'uppercase',
              color: theme.colors.textColor,
              lineHeight: 12 * 1.7,
            }}
          >
            {label}
          </Text>
        </View>
      )}

      <TouchableOpacity
        style={{
          flex: 1,
          paddingLeft: 30,
          height: '100%',
          justifyContent: 'center',
        }}
        onPress={toggleModal}
      >
        <Text style={{ color: selectedValue ? theme.colors.mainColor : '#A7AFB7', fontSize: 16 }}>
          {selectedValue || placeholder}
        </Text>
      </TouchableOpacity>

      {/* Right arrow or custom icon */}
      {/* <View style={{ paddingHorizontal: 20 }}>
        <svg.ChevronDownSvg />
      </View> */}

      {/* Modal for options */}
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={toggleModal}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionItem}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    maxHeight: '50%',
    borderRadius: 8,
    paddingVertical: 10,
  },
  optionItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
});

export default SelectField;
