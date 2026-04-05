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
  ActivityIndicator,
} from "react-native";

type Option = {
  text: string;
  reply?: string;
};

type Step = {
  bot: string;
  options: Option[];
};

type ChatFlow = {
  [key: string]: Step;
};

type Message = {
  id: string;
  type: "bot" | "user" | "thinking";
  text: string;
};

const chatFlow: ChatFlow = {
  start: {
    bot: "Hi! I'm HealthBot. I can help you understand your insurance or give health tips. How can I help today?",
    options: [
      {
        text: "How much should I save for emergencies?",
        reply: "It’s recommended to save at least 3–6 months of expenses.",
      },
      {
        text: "Does Silver Care cover dental?",
        reply: "Yes 👍 Some plans cover dental depending on your provider.",
      },
      {
        text: "What is a 'deductible'?",
        reply: "A deductible is the amount you pay before insurance starts covering costs.",
      },
      {
        text: "Tips for chip healthy eating?",
        reply: "Eat more fruits, reduce sugar, and stay hydrated daily 🍎",
      },
    ],
  },
};

export default function Healthbot() {
  const flatListRef = useRef<FlatList<Message>>(null);
  const inputRef = useRef<TextInput>(null);

  const [messages, setMessages] = useState<Message[]>([
    { id: "1", type: "bot", text: chatFlow.start.bot },
  ]);
  const [currentStep] = useState<string>("start");
  const [input, setInput] = useState<string>("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const stepData = chatFlow[currentStep];
    const matchedOption = stepData.options.find((opt) => opt.text === text);

    const nextBotMessage =
      matchedOption?.reply || "I understand 👍. You can also use the options above.";

    // Add user message + placeholder thinking message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString() + Math.random(),
        type: "user",
        text,
      },
      {
        id: "thinking_" + Date.now().toString(),
        type: "thinking",
        text: "Bot is thinking...",
      },
    ]);

    setInput("");

    // Simulate delay for bot response
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.type === "thinking" ? { ...msg, type: "bot", text: nextBotMessage } : msg
        )
      );
    }, 1500); // 1.5s delay
  };

  const handleOptionPress = (option: Option) => {
    setInput(option.text);
    inputRef.current?.focus();
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
            const isThinking = item.type === "thinking";

            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: isUser ? "flex-end" : "flex-start",
                  marginBottom: 10,
                }}
              >
                {/* Bot avatar */}
                {!isUser && (
                  <Image
                    style={{ width: 30, height: 30, marginRight: 6 }}
                    source={require("../../assets/images/bot icon.png")}
                  />
                )}

                <View
                  style={[
                    styles.userMessage,
                    styles.messageBubble,
                    isUser ? styles.userBubble : styles.botBubble,
                  ]}
                >
                  {isThinking ? (
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
                      <ActivityIndicator size="small" color="#681ABB" />
                      <Text style={styles.botText}>Thinking......</Text>
                    </View>
                  ) : (
                    <Text style={isUser ? styles.userText : styles.botText}>
                      {item.text}
                    </Text>
                  )}
                </View>

                {/* User avatar */}
                {isUser && (
                  <Image
                    style={{ width: 30, height: 30, marginLeft: 6 }}
                    source={require("../../assets/images/user message icon.png")}
                  />
                )}
              </View>
            );
          }}
        />

        {/* Options */}
        <View style={styles.optionsContainer}>
          <FlatList
            horizontal
            data={chatFlow[currentStep].options}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => handleOptionPress(item)}
              >
                <Image
                  style={{ width: 15, height: 16 }}
                  source={require("../../assets/images/option text icon.png")}
                />
                <Text style={styles.optionText}>{item.text}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Input */}
        <View style={{ marginBottom: 100, backgroundColor: "white" }}>
          <View style={styles.inputContainer}>
            <TextInput
              ref={inputRef}
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
              {input.trim() ? (
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/images/active send.png")}
                />
              ) : (
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/images/disable send.png")}
                />
              )}
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
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 10,
    shadowColor: "#00000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    maxWidth: "70%",
  },
  botBubble: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
  },
  userBubble: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 10,
    backgroundColor: "#29A251",
    alignSelf: "flex-end",
  },
  botText: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    lineHeight: 25,
    color: "#333",
  },
  userMessage: {},
  userText: {
    fontFamily: "PoppinsRegular",
    fontSize: 12,
    lineHeight: 25,
    color: "#fff",
  },
  optionsContainer: {
    paddingVertical: 10,
    paddingLeft: 12,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: "#AE8FCF",
    backgroundColor: "#E9DFFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginRight: 10,
  },
  optionText: {
    fontFamily: "PoppinsRegular",
    color: "#681ABB",
    fontSize: 10,
    fontWeight: "400",
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
  },
  disabledButton: {
    opacity: 0.4,
  },
});