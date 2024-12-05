import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import MemoItemList from "../../components/MemoList/MemoItemList";
import CircleButton from "../../components/MemoList/CircleButton";

const List = () => {
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

export default List;
