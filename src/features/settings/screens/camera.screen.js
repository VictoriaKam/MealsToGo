import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Button } from "react-native";
import { Text } from "../../../components/typography/text.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
`;

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
`;

const CameraButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 140px;
  flex-direction: row;
  flex: 1;
  width: 100%;
  padding: ${(props) => props.theme.space[4]};
  justify-content: space-between;
`;

const CameraButton = styled(Button).attrs({
  mode: "contained",
  icon: "camera",
})``;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <CameraContainer>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={CameraType.front}
        ratio={"16:9"}
      >
        <CameraButtonContainer>
          <CameraButton title="Snap!" onPress={snap} />
        </CameraButtonContainer>
      </ProfileCamera>
    </CameraContainer>
  );
};
