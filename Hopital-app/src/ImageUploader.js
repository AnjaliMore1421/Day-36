import React, { useState } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImageUploader() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Upload Patient Photo" onPress={pickImage} />

      {image && (
        <Image source={{ uri: image }} style={styles.img} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 10 },
  img: { width: 120, height: 120, marginTop: 10, borderRadius: 10 },
});