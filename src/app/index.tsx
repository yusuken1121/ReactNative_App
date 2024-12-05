import { View, Text, StyleSheet } from "react-native";
import { shadowStyle } from "./styles";

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
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
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

export default Index;
