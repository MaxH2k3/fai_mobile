import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export const selectImageFromGallery = async () => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    includeBase64: false, // Add if you need the base64 string
  });

  if (result.didCancel) {
    // console.log('User cancelled image picker');
  } else if (result.errorMessage) {
    // console.log('ImagePicker Error: ', result.errorMessage);
  } else {
    const { uri, fileName, type } = result!.assets![0];
    return { uri, name: fileName, type }
  }
};

export const takePhotoWithCamera = async () => {
  const result = await launchCamera({
    mediaType: 'photo',
    includeBase64: false,
    saveToPhotos: true, // Save the photo to the device gallery
  });

  if (result.didCancel) {
    // console.log('User cancelled camera');
  } else if (result.errorMessage) {
    // console.log('Camera Error: ', result.errorMessage);
  } else {
    const { uri, fileName, type } = result!.assets![0];
    return { uri, name: fileName, type }
  }
};
