import { View, Text, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Text>Memo</Text>
        <Text>ログアウト</Text>
      </View>

      {/* Content */}
      <View>
        <View>
          <Text>Shopping List</Text>
          <Text>2024/12/3</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>Shopping List</Text>
          <Text>2024/12/3</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>Shopping List</Text>
          <Text>2024/12/3</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
