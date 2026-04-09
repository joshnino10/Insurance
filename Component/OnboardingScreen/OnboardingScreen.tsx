import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import React, { useRef, useState } from "react";
import {
    Dimensions,
    FlatList,
    ImageBackground,
    Pressable,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Animated , { FadeIn, Easing, } from "react-native-reanimated"

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const onboardingData = [
    {
      id: "1",
      BackgroundImage: require("../../assets/images/onboarding image 1.jpg"),
      Title: "Healthcare for \nEveryone",
      subTitle:
        "Access quality medical care that fits your budget. No hidden fees, just genuine care when you need it.",
    },
    {
      id: "2",
      BackgroundImage: require("../../assets/images/onboarding image 2.jpg"),
      Title: "Smart Health \nSavings",
      subTitle:
        "Build your health fund daily with micro-savings. Your secure digital wallet dedicated to your wellness.",
    },
    {
      id: "3",
      BackgroundImage: require("../../assets/images/onboarding image 3.jpg"),
      Title: "Micro- \nInsurance",
      subTitle:
        "Get protected instantly. Choose plans that match your needs, starting with pocket change.",
    },
    {
      id: "4",
      BackgroundImage: require("../../assets/images/onboarding image 4.jpg"),
      Title: "Emergency \nReady",
      subTitle:
        "Instant claims and 24/7 access to guidance. We are here to support you when life happens.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const router = useRouter()

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const goToNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
        router.replace('/(auth)/login')
    }
  };

  const renderItem = ({ item }: any) => (
    <ImageBackground
      source={item.BackgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
         colors={["#681ABB40", "transparent"]}
         start={{ x: 0, y: 0 }}
         end={{ x: 0, y: 1 }}
         style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.topRow}>
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <Animated.View
              key={index.toString() + currentIndex}
              entering={FadeIn
                .duration(900)
                .easing(Easing.out(Easing.exp))}
              style={[ 
                styles.dot,
                currentIndex === index ? styles.activeDot : null,
              ]}
            />
          ))}
        </View>

        <Pressable style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </Pressable>
      </View>

      <View style={styles.textContainer}>
        <Animated.Text
          key={currentIndex}
          entering={FadeIn
            .duration(900)
            .easing(Easing.out(Easing.exp))}
          style={styles.title}
        >
          {item.Title}
        </Animated.Text>

        <Animated.Text
          key={currentIndex + "sub"}
          entering={FadeIn
          
            .duration(1000)
            .easing(Easing.out(Easing.exp))}
          style={styles.subTitle}
        >
          {item.subTitle}
        </Animated.Text>
      </View>

      <View style={styles.bottomContainer}>
        <ImageBackground
          source={require("../../assets/images/backgroundButton.png")}
          style={styles.bottomButton}
          resizeMode="stretch"
        >
        <TouchableOpacity onPress={goToNext} style={{flexDirection:'row', gap:5, justifyContent:'center', alignItems:'center'}}>
          
          <Animated.Text
            key={currentIndex + "btn"}
            entering={FadeIn
            
              .duration(1000)
              .easing(Easing.out(Easing.exp))}
            style={styles.bottomButtonText}
          >
            Next
          </Animated.Text>

          <Feather name="arrow-right" size={20} color="white" />
        </TouchableOpacity>
        </ImageBackground>
      </View>
    </ImageBackground>
  );

  return (
    <View 
  
    style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {},
  background: {
    width: width,
    height: height,
    justifyContent: "center",
  },
  topRow: {
    position: "absolute",
    top: 65,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  pagination: {
    flexDirection: "row",
  },
  dot: {
    width: 7,
    height: 5,
    borderRadius: 20,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: "#681ABB",
    width: 26,
    height: 5,
    borderRadius: 20,
  },
  skipButton: {
    position: "absolute",
    right: 20,
    padding: 10,
  },
  skipText: {
    fontFamily: 'PoppinsBold',
    color: "#D9D9D9",
    fontWeight: "700",
    fontSize: 16,
  },
  textContainer: {
    position: "absolute",
    top: "55%",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: { 
    fontFamily: 'PoppinsBold',
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "700",
    marginBottom: 10,
  },
  subTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  bottomButton: {
    width: "100%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtonText: {
    fontFamily: 'PoppinsBold',
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});