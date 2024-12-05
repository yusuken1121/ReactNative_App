import { View, Text, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
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
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#FFFFFF",
    height: 104,
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1, // 影の透明度 (0〜1)
    shadowRadius: 4, // 影のぼかし具合
    // Shadow for Android
    elevation: 5,
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

export default Index;
