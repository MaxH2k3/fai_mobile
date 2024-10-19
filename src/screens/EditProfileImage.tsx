import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { components } from '../components';
import { selectImageFromGallery, takePhotoWithCamera } from '../utils/choose-image';

type Props = {
  setImage: (image: any) => void
  modalVisible: boolean
  setModalVisible: (isOpen: boolean) => void
}

const EditProfileImage: React.FC<Props> = ({ setImage, modalVisible, setModalVisible }) => {

  const handleGalleryPick = async () => {
    setModalVisible(false)
    const selectedImage = await selectImageFromGallery();
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  const handleCameraCapture = async () => {
    setModalVisible(false)
    const capturedImage = await takePhotoWithCamera();
    if (capturedImage) {
      setImage(capturedImage);
    }
  };

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
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
      gap: 20
    },
  });

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
            <components.Button
              title='Take new picture'
              onPress={handleCameraCapture}
            />
            <components.Button
              title='Choose from device'
              onPress={handleGalleryPick}
            />
            <components.Button
              title='Cancel'
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfileImage;
