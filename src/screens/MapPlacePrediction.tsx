import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { components } from '../components';
import { selectImageFromGallery, takePhotoWithCamera } from '../utils/choose-image';
import { truncateText } from '../utils/truncate-text';
import { hooks } from '../hooks';

type Props = {
  mapPlaces: MapPlace[]
  modalVisible: boolean
  setModalVisible: (isOpen: boolean) => void
  getLocation: (id: string) => Promise<void>
  setAddress: (address: string) => void
}

const MapPlacePrediction: React.FC<Props> = ({ modalVisible, setModalVisible, mapPlaces, getLocation, setAddress }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 400,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      gap: 20
    },
  });

  const onChooseLocation = (placeId: string, address: string) => {
    setAddress(address)
    getLocation(placeId)
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {mapPlaces.map((place) => (
              <components.Button
                title={`${truncateText(place.description, 50)}`}
                onPress={() => onChooseLocation(place.place_id, place.description)}
              />
            ))}
            <components.Button
              title={`Cancel`}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MapPlacePrediction;
