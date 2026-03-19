import {StyleSheet, Text, View } from "react-native";

const plays = ["O", "", "X", "X", "", "O", "", "X", ""];

const Cell = ({ play }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{play}</Text>
    </View>
  );
};
export default function Home({navigation}) {
    const goToRules = () => navigation.navigate("Rules")
    const goToCredit = () => navigation.navigate("Credit")

  return (
    <View style={styles.container}>
       <View style={styles.table}>
              <View style={styles.board}>
                {plays.map((p, i) => (
                  <Cell key={i} play={p} />
                ))}
              </View>
            </View>
            
            <View style = {styles.button}>
              <Text style={styles.buttonText} onPress={goToRules}> View Rules </Text>
            </View>

            <View style = {styles.button}>
              <Text style={styles.buttonText} onPress={goToCredit}> View Credits </Text>
            </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  table: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  board: {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "orange",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 30,
    // alignItems: "center",
  },
  box: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#090",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  button: {
  backgroundColor: "#007AFF",
  padding: 10,
  borderRadius: 8,
  marginTop: 20,
  alignItems: "center",
},

buttonText: {
  color: "white",
  fontSize: 18,
  fontWeight: "bold",
},
});