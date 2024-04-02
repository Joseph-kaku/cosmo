export const analyzeNextSteps = (step, userResponse) => {
    return step === 0
      ? {
          purpose: "specify service needed",
          message: `Nice to meet you, ${userResponse}! What service are you looking for?`,
          options: ["hair styling", "hair color", "skincare", "makeup", "haircut"]
        }
      : step === 1
      ? {
          purpose: "ask for details",
          message:
            "Great! What details do you want to share with me? (i.e. hair color, hair length, etc.)",
        }
      : step === 2
      ? {
          purpose: "Day for service",
          message:
            "Awesome! What day of the week are you available? (i.e. Monday, Tuesday, etc.)",
          options: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        }
      : step === 3 && ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(userResponse)
      ? {
          purpose: "specify time",
          message:
            `Awesome! What time on ${userResponse} are you available? (i.e. 10:00 AM, 2:00 PM, etc.)`,
          options: ["10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"]
        }
      : step === 4
      ? {
          purpose: "location of service",
          message: "Do you need directions to the salon?",
          options: ["Yeah sure!", "I don't need directions."]
        }
      : step === 5
      ? userResponse === "Yeah sure!"
        ? {
            purpose: "give location",
            message: "We are located at 415 W 6th S, Rexburg ID 83440.",
            options: ["Keep going."]
          }
        : {
            purpose: "do not give location",
            message: "You can also find out location on the website.",
            options: ["Keep going."]
          }
      : step === 6
      ? {
          purpose: "specify any more details",
          message:
            "Awesome! Any more details you want to share with me?",
        }
      : step === 7
      ? {
          purpose: "specify if they want to be a recurring customer",
          message:
            "Alright, noted! One last question before we finish, would you like to make a return appointment?",
          options: ["Yes", "No"]
        }
      : step === 8
      ? {
          purpose: "set up return appointment",
          message:
            "enter your email address to set up your return appointment. If not ignore this message.",
        }
      : step === 9
      ? {
          purpose: "end",
          message:
            "Thank you so much for spending time chatting with me. Have a great day! See you soon!",
        }
      : {
          purpose: "bye",
          message: "Bye!"
        };
  };
  