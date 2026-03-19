import {StyleSheet, Text, View } from "react-native";

export default function Rules( {navigation}) {
    const back = () => navigation.goBack()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rules Screen</Text>
      <Text style={styles.text} onPress={back}>Go Back</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    margin: 10,
  },
});