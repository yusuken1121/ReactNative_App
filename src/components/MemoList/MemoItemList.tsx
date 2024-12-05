import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MemoItemList = () => {
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
  );
};

const styles = StyleSheet.create({
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

export default MemoItemList;
