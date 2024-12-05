import { View, Text, StyleSheet } from "react-native";

const Index = () => {
  const data = [
    {
      title: "Shopping List 1",
      date: "2024/12/3",
    },
    {
      title: "Shopping List 2",
      date: "2024/12/4",
    },
    {
      title: "Shopping List 3",
      date: "2024/12/5",
    },
  ];

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
        {data.map((item, index) => (
          <View key={index} style={styles.memoListItem}>
            <View>
              <Text style={styles.memoListItemTitle}>{item.title}</Text>
              <Text style={styles.memoListItemDate}>{item.date}</Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Floating Button */}
      <View style={styles.floatingButton}>
        <Text style={styles.floatingButtonText}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  // Header
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

  // List
  memoListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
});

export default Index;
