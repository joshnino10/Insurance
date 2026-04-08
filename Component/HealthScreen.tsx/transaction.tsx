import { ImageSourcePropType } from 'react-native';

export interface Transaction {
  id: string;
  icon: ImageSourcePropType;
  Title: string;
  Date: string;
  Amount: number;
  Color: string;
}

export const recentTransaction: Transaction[] = [
  {
    id: '1',
    icon: require('../../assets/images/check up icon.png'),
    Title: 'Dr. Smith - Check-up',
    Date: 'Dec 20, 2025',
    Amount: -45000.00, // no commas in number,
    Color: '#000000'
  },
  {
    id: '2',
    icon: require('../../assets/images/transfer icon.png'),
    Title: 'Dr. Smith - Check-up',
    Date: 'Dec 20, 2025',
    Amount: -45000.00, // no commas in number
    Color:'#1A934E',
  },
  {
    id: '1',
    icon: require('../../assets/images/check up icon.png'),
    Title: 'Dr. Smith - Check-up',
    Date: 'Dec 20, 2025',
    Amount: -45000.00, // no commas in number,
    Color: '#000000'
  },
  {
    id: '1',
    icon: require('../../assets/images/transfer icon.png'),
    Title: 'Dr. Smith - Check-up',
    Date: 'Dec 20, 2025',
    Amount: -45000.00, // no commas in number,
    Color: '#1A934E'
  },
];