import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import { components } from '../components';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    gap: 20,
    display: 'flex',
    flexDirection: 'column'
  },
});

interface Prop {
  setSortBy: (sort: string) => void
  setIsAscending: (asc: boolean) => void
  isModalOpen: boolean
  setIsModalOpen: (open: boolean) => void
}

const ProductSort: React.FC<Prop> = ({
  setSortBy,
  setIsAscending,
  isModalOpen,
  setIsModalOpen
}) => {

  const handleSortChange = (sortBy: string, isAsc: boolean) => {
    setSortBy(sortBy)
    setIsAscending(isAsc)
    setIsModalOpen(false)
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* <custom.ScrollView style={{}}> */}
            <components.Button
              title={`Price (Low to high)`}
              onPress={() => { handleSortChange('unitPrice', true) }}
            />
            <components.Button
              title={`Price (High to low)`}
              onPress={() => { handleSortChange('unitPrice', false) }}
            />
            <components.Button
              title={`Default`}
              onPress={() => { handleSortChange('', false) }}
            />
            <components.Button
              title={`Cancel`}
              onPress={() => { setIsModalOpen(false) }}
            />
            {/* </custom.ScrollView> */}
          </View>
        </View>
      </Modal >
    </View >
  );

};

export default ProductSort;
