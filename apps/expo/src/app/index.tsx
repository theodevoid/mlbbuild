import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack, useRouter } from "expo-router";

import { api, type RouterOutputs } from "../utils/api";

const Index = () => {

  return (
    <SafeAreaView>
      {/* Changes page title visible on the header */}
      <Stack.Screen options={{ title: "Home Page" }} />

<View
>
  <Text>Hello World</Text>
</View>
    </SafeAreaView>
  );
};

export default Index;
