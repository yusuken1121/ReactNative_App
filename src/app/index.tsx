import { View, Text, StyleSheet } from "react-native";
import { shadowStyle } from "./styles";
import Header from "../components/Header";
import MemoItemList from "../components/MemoList/MemoItemList";
import CircleButton from "../components/MemoList/CircleButton";

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Content */}
      <MemoItemList />

      {/* Floating Button */}
      <CircleButton>+</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});

export default Index;
