import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
  Input,
  IconButton,
  Checkbox,
  Text,
  Box,
  VStack,
  HStack,
  Heading,
  Icon,
  Center,
  NativeBaseProvider,
} from "native-base";

export default function App() {
  return (
      <NativeBaseProvider>
        <Center flex={1}>
          <Text>Merhaba!</Text>
        </Center>
      </NativeBaseProvider>
  );
}


