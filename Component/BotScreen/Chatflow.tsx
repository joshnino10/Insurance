import React, { useEffect, useRef, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
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
        reply: `That's a fantastic question for protecting your future! It's smart to think about saving for unexpected health needs.
Here’s a simple way to approach it:
Start small, stay consistent, Even setting aside $5 or $10 every week can build up surprisingly fast.
Think of common costs: Aim to save enough to cover things like basic medicines, a doctor's visit, or transport to a clinic.
Your "Comfort Fund": This saving helps give you peace of mind when small surprises pop up. Every single Dollar you put aside is a step towards a more secure you! You're doing great by planning ahead.`,
      },
      {
        text: "Does Silver Care cover dental?",
        reply: `That's an important question to ask about your coverage!
For specific details on what "Silver Care" covers, including dental, it's always best to:
Check your policy document:** This will have the most accurate and up-to-date information.
Contact the provider directly: They can confirm all the benefits included in your specific plan.
As HealthBot, I don't have access to the exact details of specific plans like "Silver Care." My goal is to help you understand insurance terms and general wellness tips!`,
      },
      {
        text: "What is a 'deductible'?",
        reply: `That's a great question, and it's super important to understand!
Think of a 'deductible' like this:
Your initial share: It's the amount you agree to pay for your medical costs *first* each year before your insurance starts paying its share.
A "personal threshold": For example, if your deductible is $1,000, you'll pay the first $1,000 of your medical bills. After you've paid that amount, your insurance will then step in to help cover the rest (according to your plan).
It helps keep your insurance premiums lower. You've got this – understanding these terms empowers you!`,
      },
      {
        text: "Tips for chip healthy eating?",
        reply: `That's a fantastic goal for your well-being and your wallet! Eating healthy doesn't have to be expensive.
Here are some simple tips:
Cook at home: Preparing your own meals is usually much cheaper and healthier than eating out.
Embrace local and seasonal: Fruits and veggies bought in season or from local markets are often more affordable and tastier.
Beans and lentils are superheroes: They're packed with protein and fiber, super cheap, and can be used in many dishes.
Drink water: It's free, keeps you hydrated, and often helps you feel full, reducing cravings for sugary drinks or snacks.
Small changes can make a big difference! You're doing great!`,
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
      matchedOption?.reply ||
      "I understand 👍. You can also use the options above.";

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

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.type === "thinking"
            ? { ...msg, type: "bot", text: nextBotMessage }
            : msg
        )
      );
    }, 1500);
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
                    <Text style={styles.botText}>Thinking...</Text>
                  </View>
                ) : (
                  <Text style={isUser ? styles.userText : styles.botText}>
                    {item.text}
                  </Text>
                )}
              </View>

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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={80}
      >
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