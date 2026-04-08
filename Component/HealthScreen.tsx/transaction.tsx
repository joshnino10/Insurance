import { ImageSourcePropType } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export interface Transaction {
  id: string;
  icon: React.ReactNode | ImageSourcePropType;
  Title: string;
  Date: string;
  Amount: number;
  Color: string;   // For the text (amount)
  bgColor: string; // For the icon container
}

export const recentTransaction: Transaction[] = [
  {
    id: '1',
    icon: <Feather name="arrow-up-right" size={25} color="#1A48BB" />,
    Title: 'Dr. Smith - Check-up',
    Date: 'Dec 20, 2025',
    Amount: -45000.0,
    Color: '#000000',
    bgColor:"#1A48BB", // red-ish for expense
  },
  {
    id: '2',
    icon: <Feather name="arrow-down-left" size={25} color="#29A251" />,
    Title: 'Monthly savings transfer',
    Date: 'Dec 20, 2025',
    Amount: 45000.0,
    Color: '#1A934E',
    bgColor: '#C8E6C9',
  },
  {
    id: '3',
    icon: <Feather name="arrow-up-right" size={25} color="#1A48BB" />,
    Title: 'Dr. Smith - Check-up',
    Date: 'Dec 19, 2025',
    Amount: -85000.0,
    Color: '#000000',
    bgColor:"#1A48BB",
  },
  {
    id: '4',
    icon: <Feather name="arrow-down-left" size={25} color="#29A251" />,
    Title: 'Dr. Smith - Check-up',
    Date: 'Dec 20, 2025',
    Amount: 100000.0,
    Color: '#1A934E',
    bgColor: '#C8E6C9',
  },
];