import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from "expo-linear-gradient";
import { router, useRouter } from 'expo-router';
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
      Title: "Trusted Doctors \nNear You",
      subTitle:
        "Connect with certified healthcare professionals quickly and easily.",
    },
    {
      id: "3",
      BackgroundImage: require("../../assets/images/onboarding image 3.jpg"),
      Title: "Manage Your Health \nEffortlessly",
      subTitle:
        "Track your appointments, prescriptions, and medical history in one place.",
    },
    {
      id: "4",
      BackgroundImage: require("../../assets/images/onboarding image 3.jpg"),
      Title: "Your Health, Simplified",
      subTitle:
        "Everything you need to manage your health, all in one place.",
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
      {/* Gradient overlay */}
      <LinearGradient
        colors={["#681ABB40", "transparent"]}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Top row: Pagination + Skip */}
      <View style={styles.topRow}>
        <View style={styles.pagination}>
          {onboardingData.map((_, index) => (
            <View
              key={index.toString()}
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

      {/* Centered text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomContainer}>
        <ImageBackground
          source={require("../../assets/images/backgroundButton.png")}
          style={styles.bottomButton}
          resizeMode="stretch"
        >
        <TouchableOpacity onPress={goToNext} style={{flexDirection:'row', gap:5, justifyContent:'center', alignItems:'center'}}>
          <Text style={styles.bottomButtonText}>Next</Text>
          <Feather name="arrow-right" size={18} color="white" />

        </TouchableOpacity>
        </ImageBackground>
      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
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
  container: {
    // flex: 1,
  },
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
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  textContainer: {
    position: "absolute",
    top: "55%",
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "700",
   
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 20,
   
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0, // distance from bottom
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});