# Day 36 – Frontend Task (24/01/2026)

# Deep Theory: React Native Advanced Mobile Features

---

# 1. Native Modules in React Native

Native Modules allow React Native applications to communicate with platform-specific code written in Java/Kotlin (Android) or Objective-C/Swift (iOS).

They are used when JavaScript cannot directly access native device features.

## Why Native Modules are Used

* Access device hardware features
* Improve performance
* Use platform-specific APIs
* Integrate third-party SDKs

## Architecture Flow

1. JavaScript sends request
2. Bridge communicates with native layer
3. Native code executes operation
4. Result is returned to JavaScript

## Common Use Cases

* Camera access
* Bluetooth functionality
* Payment gateways
* File system operations
* Background services

## Example

```js
import { NativeModules } from 'react-native';

const { CustomModule } = NativeModules;

CustomModule.showMessage();
```

## Advantages

* Direct access to native APIs
* Better performance
* Reuse existing native libraries

## Limitations

* Requires native development knowledge
* More complex debugging

---

# 2. Using Camera in React Native

Camera functionality allows apps to capture photos, scan QR codes, and record videos.

Two popular libraries:

* expo-camera
* react-native-camera

---

## Using expo-camera

### Installation

```bash
npx expo install expo-camera
```

### Basic Example

```js
import { CameraView, useCameraPermissions } from 'expo-camera';
import { View, Button } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission?.granted) {
    return <Button title="Grant Permission" onPress={requestPermission} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} />
    </View>
  );
}
```

## Features

* Photo capture
* Video recording
* Barcode scanning
* Front/back camera support

## Advantages of expo-camera

* Easy setup
* Works well with Expo projects
* Cross-platform support

---

# 3. Push Notifications via FCM

FCM (Firebase Cloud Messaging) is used to send notifications from server to mobile devices.

## Types of Notifications

* Push notifications
* Scheduled notifications
* Background notifications
* Foreground notifications

## Working Flow

1. App registers with Firebase
2. Device receives unique FCM token
3. Server sends notification using token
4. Notification appears on device

## Installation

```bash
npm install @react-native-firebase/app
npm install @react-native-firebase/messaging
```

## Example

```js
import messaging from '@react-native-firebase/messaging';

async function requestPermission() {
  await messaging().requestPermission();
}

messaging().onMessage(async remoteMessage => {
  console.log(remoteMessage);
});
```

## Features

* Real-time alerts
* Background delivery
* Cross-platform notifications

## Use Cases

* Chat applications
* Order updates
* Reminder systems
* News alerts

---

# 4. Deep Linking in Mobile Apps

Deep Linking allows opening a specific screen inside the mobile app using a URL.

## Example

```txt
myapp://profile/101
```

This URL directly opens the profile page.

## Types of Deep Links

1. Basic Deep Links
2. Universal Links (iOS)
3. App Links (Android)

## Configuration Example

```js
const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Profile: 'profile/:id',
    },
  },
};
```

## Use Cases

* Payment confirmation
* Password reset links
* Promotional offers
* Sharing content links

## Advantages

* Better user navigation
* Improves user engagement
* Smooth app-to-app interaction

---

# 5. App Permissions Model

Permissions allow apps to access sensitive device resources securely.

## Common Permissions

* Camera
* Location
* Microphone
* Notifications
* Storage
* Contacts

## Permission Types

### Android

Permissions declared in:

```xml
AndroidManifest.xml
```

### iOS

Permissions declared in:

```xml
Info.plist
```

---

## Example Using Permissions

```js
import * as Location from 'expo-location';

const { status } = await Location.requestForegroundPermissionsAsync();

if (status !== 'granted') {
  console.log('Permission denied');
}
```

## Permission Best Practices

* Request only necessary permissions
* Explain why permission is needed
* Handle denied permissions gracefully
* Ask permissions at correct time

## Importance of Permission Model

* Protects user privacy
* Prevents unauthorized access
* Improves app security

---

