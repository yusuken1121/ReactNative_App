import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { shadowStyle } from "../../app/styles";

const CircleButton = ({ children }: { children: ReactNode }) => {
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Button
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    right: 40,
    bottom: 40,
    ...shadowStyle,
  },
  circleButtonLabel: {
    fontSize: 40,
    lineHeight: 48,
  },
});

export default CircleButton;
