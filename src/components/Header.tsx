import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { shadowStyle } from "../app/styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Header
  header: {
    backgroundColor: "#FFFFFF",
    height: 104,
    justifyContent: "flex-end",
    ...shadowStyle,
  },
  headerInner: {
    alignItems: "center",
  },
  headerRight: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "rgba(0,0,0,0.7)",
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "regular",
  },
});

export default Header;
