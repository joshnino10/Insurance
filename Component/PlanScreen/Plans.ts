export type Plan = {
    id: string;
    title: string;
    planType: string;
    price: number;
    duration: string;
    coverageLimit: number;
    benefits: string[];
    isSelected: boolean;
  };
  
  
  export const plan: Plan[] = [
    {
      id: "1",
      title: "Daily Shield",
      planType: "DAILY PLAN",
      price:500,
      duration: "/day",
      coverageLimit: 1000000,
      benefits: ["Accident Cover", "Basic Meds", "24/7 Hotline"],
      isSelected: true,
    },

    {
      id: "2",
      title: "Silver Care",
      planType: "MONTHLY PLAN",
      price:15000,
      duration: "/mo",
      coverageLimit: 5000000,
      benefits: ["Hospital Stay", "Specialist Visits", "Dental Checkup"],
      isSelected: false,
    },

    {
      id: "3",
      title: "Gold Family",
      planType: "MONTHLY PLAN",
      price:45000,
      duration: "/mo",
      coverageLimit: 25000000,
      benefits: ["Full Coverage", "Family of 4", "Vision & Dental", "Critical Illness"],
      isSelected: false,
    },
  ];