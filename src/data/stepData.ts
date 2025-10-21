export const stepData = [
  {
    id: 1,
    title: "Welcome",
    content:
      "Welcome to our onboarding process! We'll guide you through a few simple steps to get you started. Our voice agent is here to help you every step of the way.",
  },
  {
    id: 2,
    title: "Payment Options",
    content: "Please select your preferred payment method to proceed:",
    paymentOptions: [
      {
        id: 1,
        title: "Credit Card",
        description: "Pay with credit card",
      },
      {
        id: 2,
        title: "Full Payment",
        description: "Pay in full",
      },
      {
        id: 3,
        title: "0% Loan EMI",
        description: "No cost EMI available",
      },
    ],
  },
  {
    id: 3,
    title: "EMI Plan",
    content:
      "Great choice! You've selected the 0% EMI option. We'll show you the available plans and help you select the best one for your needs.",
    modalImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Documents",
    content: "Please prepare the following documents to complete your application:",
    documents: [
      { id: 1, name: "Valid Government ID (Passport, Driver's License, etc.)" },
      { id: 2, name: "Proof of Address (Utility Bill, Bank Statement)" },
      { id: 3, name: "Recent Photograph" },
      { id: 4, name: "Income Proof (Last 3 months salary slips)" },
    ],
  },
];
