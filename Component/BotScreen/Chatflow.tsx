import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";


const chatFlow = {
  start: {
    bot: "Hi! I'm HealthBot. I can help you understand your insurance or give health tips. How can I help today?",
    options: [
      { text: "How much should I save for emergencies?" },
      { text: "Does Silver Care cover dental?" },
    ],
  },
  savings: {
    bot: "It’s recommended to save at least 3–6 months of expenses.",
    options: [{ text: "Back", next: "start" }],
  },
  insurance: {
    bot: "Sure 👍 What would you like to know about your health insurance?",
    options: [
      { text: "What is covered?", next: "covered" },
      { text: "How to claim?", next: "claim" },
    ],
  },
  covered: {
    bot: "Your insurance typically covers hospital visits, medications, and checkups.",
    options: [{ text: "Back", next: "insurance" }],
  },
  claim: {
    bot: "To claim, submit your hospital bills via your provider’s app or office.",
    options: [{ text: "Start again", next: "start" }],
  },
};

export default function Healthbot() {
  const flatListRef = useRef(null);

  const [messages, setMessages] = useState([
    { id: "1", type: "bot", text: chatFlow.start.bot },
  ]);
  const [currentStep, setCurrentStep] = useState("start");
  const [input, setInput] = useState("");

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const stepData = chatFlow[currentStep];

    const matchedOption = stepData.options.find((opt) => opt.text === text);

    let nextBotMessage =
      "I understand 👍. You can also use the options above.";

    if (matchedOption && matchedOption.next) {
      const nextStep = matchedOption.next;
      nextBotMessage = chatFlow[nextStep].bot;
      setCurrentStep(nextStep);
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString() + Math.random(),
        type: "user",
        text,
      },
      {
        id: Date.now().toString() + "_bot",
        type: "bot",
        text: nextBotMessage,
      },
    ]);

    setInput("");
  };

  const handleOptionPress = (option) => {
    sendMessage(option.text);
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={styles.SafeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesContainer}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
          renderItem={({ item }) => {
            const isUser = item.type === "user";

            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: isUser ? "flex-end" : "flex-start",
                  marginBottom: 10,
                }}
              >
                {/* Bot Avatar (outside bubble) */}
                {!isUser && (
                  <Image
                    style={{ width: 30, height: 30, marginRight: 6, }}
                    source={require("../../assets/images/bot icon.png")}
                  />
                )}

                {/* Bubble (UNCHANGED styles) */}
                <View
                  style={[
                    styles.messageBubble,
                    isUser ? styles.userBubble : styles.botBubble,
                  ]}
                >
                  <Text
                    style={isUser ? styles.userText : styles.botText}
                  >
                    {item.text}
                  </Text>
                </View>
              </View>
            );
          }}
        />

        {/* Options */}
        <View style={styles.optionsContainer}>
          <FlatList
            horizontal
            data={chatFlow[currentStep].options}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress(item)}
              >
                <Text style={styles.optionText}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Input */}
        <View style={{ marginBottom: 100, backgroundColor: "white" }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Ask about health or insurance..."
              value={input}
              onChangeText={setInput}
              onSubmitEditing={() => sendMessage(input)}
            />

            <TouchableOpacity
              disabled={!input.trim()}
              style={[
                styles.sendButton,
                !input.trim() && styles.disabledButton,
              ]}
              onPress={() => sendMessage(input)}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={require("../../assets/images/telegram.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "#D9D9D900",
  },

  messagesContainer: {
    padding: 16,
    paddingBottom: 8,
  },

  messageBubble: {
    padding: 14,
    borderRadius: 16,
    marginBottom: 10,
    maxWidth: "80%",
  },

  botBubble: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
  },

  userBubble: {
    backgroundColor: "#29A251",
    alignSelf: "flex-end",
    height:62
  },

  botText: {
    color: "#333",
  },

  userText: {
    color: "#fff",
  },

  optionsContainer: {
    paddingVertical: 10,
    paddingLeft: 12,
  },

  option: {
    backgroundColor: "#E9DFFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginRight: 10,
  },

  optionText: {
    color: "#681ABB",
    fontSize: 12,
    fontWeight: "500",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#EFEEEE",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#eee",
  },

  input: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
  },

  sendButton: {
    marginLeft: 8,
    height: 38,
    width: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2000,
    backgroundColor: "#B3B3B3",
  },

  disabledButton: {
    opacity: 0.4,
  },
});