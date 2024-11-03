import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';

import { custom } from '../custom';
import { components } from '../components';
import connectToSignalR from '../utils/signal-r-connect';
import { hooks } from '../hooks';
import { HubConnection } from '@microsoft/signalr';
import { utils } from '../utils';
import { imageUrlToFile } from '../utils/convert-image-to-file';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { TryOnOutfit } from '../api/ai-api';
import { theme } from '../constants';
import { text } from '../text';
import { selectImageFromGallery } from '../utils/choose-image';

type Props = NativeStackScreenProps<RootStackParamList, 'TryingRoom'>;

const TryingRoom: React.FC<Props> = ({ route }) => {

  const { PersonInfo, Categories, ProductImage } = route.params;

  const user = hooks.useSelector((state) => state.appState.user);

  const [loading, setLoading] = useState(false)

  const [connection, setConnection] = useState<HubConnection | null>(null);

  const [productImage, setProductImage] = useState<string>(ProductImage)

  const [humanImage, setHumanImage] = useState<any>(null)

  const [resultImage, setResultImage] = useState<string>('')

  const examples = [
    'https://res.cloudinary.com/dcjdtlnbl/image/upload/v1730225300/right2_vvzeur.jpg',
    'https://res.cloudinary.com/dcjdtlnbl/image/upload/v1730225300/right1_qljt9e.jpg'
  ]

  useEffect(() => {
    const setupConnection = async () => {
      const res = await connectToSignalR(user!.token, 'notification');
      if (res) {
        res.serverTimeoutInMilliseconds = 1000 * 60000;
        res.keepAliveIntervalInMilliseconds = 1000 * 10;
        setConnection(res);
      }
      res?.on('SendMessage', (response: any) => {
        setLoading(false);

        if (response.statusResponse == false) {
          utils.showMessage({
            message: response.message || 'Something went wrong',
            type: 'danger',
            icon: 'danger'
          })
        } else {
          setResultImage(response.data.url)
          utils.showMessage({
            message: 'Try out outfit successful',
            type: 'success',
            icon: 'success'
          })
        }
      });
    };

    if (!connection && user)
      setupConnection();

    return () => {
      if (connection) {
        connection.stop().then(() => {
          console.log("Connection closed.");
          setConnection(null);
        }).catch((err) => console.error("Error closing connection:", err));
      }
    };
  }, [connection]);

  const TryOutClothes = async () => {
    setLoading(true);
    utils.showMessage({
      message: 'Processing image',
      type: 'info',
      icon: 'info'
    })
    try {
      const productImageFile = await imageUrlToFile(productImage, 'image1.jpg');
      const humanImageFile = await imageUrlToFile(humanImage.uri, 'image2.jpg')

      if (!humanImageFile || !productImageFile) {
        utils.showMessage({
          message: 'Image conversion failed',
          type: 'danger',
          icon: 'danger'
        });
        setLoading(false);
        return;
      }

      const outfitToTry: ITryOnOutfitData = {
        PersonInfo: PersonInfo,
        Categories: Categories,
        HumanImage: humanImageFile,
        ProductImage: productImageFile
      };

      const data = new FormData();
      data.append('PersonInfo', outfitToTry.PersonInfo[0]);
      data.append('Categories', outfitToTry.Categories[0]);
      data.append('HumanImage', outfitToTry.HumanImage as File);
      data.append('ProductImage', outfitToTry.ProductImage as File);

      const res = await TryOnOutfit(data, user!.token);

      if (res) {
        console.log(res)
        if (res.success) {
          utils.showMessage({
            message: 'Image added to queue',
            type: 'success',
            icon: 'success'
          })
        } else {
          setLoading(false)
          utils.showMessage({
            message: 'Something went wrongg',
            type: 'danger',
            icon: 'danger'
          })
        }
      }
    } catch (error) {
      setLoading(false);
      utils.showMessage({
        message: 'Something went wrong',
        type: 'danger',
        icon: 'danger'
      })
    }
  };

  const handleGalleryPick = async () => {
    const selectedImage = await selectImageFromGallery();
    if (selectedImage) {
      setHumanImage(selectedImage);
    }
  };

  const renderHeader = () => {
    return <components.Header title='Trying room' goBack={true} />;
  };

  const renderStatusBar = () => {
    return <custom.StatusBar />;
  };

  const renderContent = () => {
    return (
      <View
        style={{
          marginTop: 30,
          marginBottom: 20,
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 30
        }}
      >
        {/* PRODUCT TO TRY */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <text.H3>Product to try</text.H3>
          <custom.ImageBackground
            source={{ uri: productImage }}
            style={{
              width: 300,
              height: 300,
              marginRight: 14,
            }}
            resizeMode='cover'
          />
        </View>

        {/* USER UPLOAD IMAGE */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <text.H3>Your image</text.H3>
          {humanImage ? (
            <custom.ImageBackground
              source={{ uri: humanImage.uri }}
              style={{
                width: 300,
                height: 300,
                marginRight: 14,
              }}
              resizeMode='cover'
            />
          ) : (
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 300,
                  height: 300,
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  backgroundColor: '#f9f9f9'
                }}
                onPress={handleGalleryPick}
              >
                <Text style={{ fontSize: 72, color: '#333' }}>+</Text>
              </TouchableOpacity>
              <Text style={{ marginTop: 20 }}>Examples</Text>
              <View
                style={{
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}
              >
                {examples.slice(0, 2).map((example, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setHumanImage({ uri: example })}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 8,
                      overflow: 'hidden',
                      borderWidth: 1,
                      borderColor: '#ddd',
                    }}
                  >
                    <custom.ImageBackground
                      source={{ uri: example }}
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* THE RESULT IMAGE */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <text.H3>Result</text.H3>
          {resultImage ? (
            <custom.ImageBackground
              source={{ uri: resultImage }}
              style={{
                width: 300,
                height: 300,
                marginRight: 14,
              }}
              resizeMode='cover'
            />
          ) : loading ? (
            <View
              style={{
                width: 300,
                height: 300,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 10,
                backgroundColor: '#f9f9f9'
              }}
            >
              <Text style={{ fontSize: 72, color: '#333' }}>Loading</Text>
            </View>
          ) : (
            <View
              style={{
                width: 300,
                height: 300,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 10,
                backgroundColor: '#f9f9f9'
              }}
            >
            </View>
          )}
        </View>
        {humanImage && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              marginBottom: 200,
            }}
          >
            <TouchableOpacity
              onPress={() => setHumanImage(null)}
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: '#ddd',
              }}
            >
              <Text style={{ color: '#333', fontWeight: 'bold' }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={TryOutClothes}
              style={{
                backgroundColor: 'white',
                borderRadius: 8,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderWidth: 1,
                borderColor: '#ddd',
              }}
            >
              <Text style={{ color: '#333', fontWeight: 'bold' }}>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}

      </View>
    );
  };


  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <custom.SmartView>
        {renderStatusBar()}
        {renderHeader()}
        {renderContent()}
      </custom.SmartView>
    </ScrollView>
  );
};

export default TryingRoom;
