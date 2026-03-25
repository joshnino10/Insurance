import { ImageSourcePropType } from "react-native";

type Goal = {
  id: string;
  Title: string;
  Monthly: string;
  Saved: number;
  Color: string;
  Target: number;
  icon: ImageSourcePropType;
  LastSeen: string
};

export const goals: Goal[] = [
  {
    id: "1",
    Title: "Emergency Fund",
    Monthly: "$50/month",
    Saved: 110000,
    Color: '#1A48BB',
    Target: 500000,
    LastSeen: '• 16 months to go',
    icon: require("../../assets/images/emergency goal.png"),
  },
  {
    id: "2",
    Title: "Surgery Reserve",
    Monthly: "$100/month",
    Saved: 200000,
    Color: '#681ABB',
    Target: 500000,
    LastSeen: '• 22 months to go',
    icon: require("../../assets/images/surgery goal.png"),
  },
];