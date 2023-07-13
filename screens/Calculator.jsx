import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Calculator({ navigation }) {
  const buttons = [
    [
      { value: "C", type: "operation", operation: "cancel" },
      { value: "Del", type: "operation" },
      { value: "%", type: "operation" },
      { value: "/", type: "operation" },
    ],

    [
      { value: "7", type: "digit" },
      { value: "8", type: "digit" },
      { value: "9", type: "digit" },
      { value: "*", type: "operation" },
    ],
    [
      { value: "4", type: "digit" },
      { value: "5", type: "digit" },
      { value: "6", type: "digit" },
      { value: "-", type: "operation" },
    ],

    [
      { value: "1", type: "digit" },
      { value: "2", type: "digit" },
      { value: "3", type: "digit" },
      { value: "+", type: "operation" },
    ],

    [
      { value: "", type: "operation" },
      { value: "0", type: "digit" },
      { value: ",", type: "operation" },
      { value: "=", type: "operation" },
    ],
  ];
  const [result, setResult] = React.useState(0);
  const [previewResult, setPreviewResult] = React.useState(0);

  const handleButtonPress = (button) => {
    if (button.type === "digit") {
      if (result !== 0) {
        setResult((prev) => prev + button.value);
      } else {
        setResult(button.value);
      }
    }
    if (button.type === "operation") {
      if (button.value === "+") {
        if (result !== 0) {
          setResult((prev) => prev + button.value);
        }
      }
      if (button.value === "C") {
        setResult(0);
      }
    }
  };

  const calculate = () => {};
  const add = () => {
    if (value === "=") {
    }
  };
  const increase = () => {
    if (value === "=") {
    }
  };
  const multiple = () => {
    if (value === "=") {
    }
  };
  const divide = () => {
    if (value === "=") {
    }
  };
  const clear = () => {
    if (value === "=") {
    }
  };
  const remove = () => {
    if (value === "=") {
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.display]}>
        <Text style={styles.result}>{result}</Text>
        {result !== 0 && (
          <Text style={[styles.result, { fontSize: 30, color: "gray" }]}>
            ={previewResult}
          </Text>
        )}
      </View>
      <View style={styles.calc}>
        {buttons.map((row, idx) => (
          <View key={idx} style={{ display: "flex", flexDirection: "row" }}>
            {row.map((button) => (
              <TouchableOpacity style={styles.digitWrapper}>
                <Text
                  onPress={() => handleButtonPress(button)}
                  key={button.value}
                  style={[
                    styles.digit,
                    button.type === "operation" ? styles.operation : "",
                    button.value === "="
                      ? {
                          backgroundColor: "green",
                          color: "white",
                          borderRadius: 50,
                        }
                      : "",
                  ]}
                >
                  {button.value}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  display: {
    height: "45%",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  result: {
    fontSize: 50,
  },
  calc: {
    height: "55%",
  },
  digitWrapper: {
    width: "25%",
  },
  digit: {
    textAlign: "center",
    fontSize: 35,
    width: "100%",
    lineHeight: 100,
  },
  operation: {
    color: "green",
  },
});
