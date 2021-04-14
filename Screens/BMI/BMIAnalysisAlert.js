export const BMIAnalysisAlert = {
  'underweight': {
    "title": "Underweight",
    "desc": "You are a bit underweight, let's practice sports and follow a good rest diet.",
    "tips":"Provide 2000 - 2200 calories per day, plus practice yoga regularly every day according to the instructions so as not to be underweight."
  },
  'normal': {
    "title": "Normal",
    "desc": "You have a fairly balanced body index. Keep your body in this condition with exercise and dietary rest.",
    "tips": "Provide 1300 - 1500 calories a day to keep in shape. Limit those foods that are greasy, fat, high in starch."
  },
  'overweight': {
    "title": "Overweight",
    "desc": "Slightly overweight, but the condition is not too severe. Try to practice yoga, follow a reasonable diet for an ideal physique. ",
    "tips":"Limit the amount of calories provided to the body to only 1000 - 1200 calories per day, in addition to following the yoga regime so as not to be overweight."
  },
  'obese': {
    "title": "Obese",
    "desc": "Warning. You should follow a healthy diet, set up a yoga schedule to minimize the possibility of the disease.",
    "tips":"Slowly reduce the amount of calories provided into the body every day. To lose weight, every day should provide only 1000 - 1200 calories. Limit the amount of greasy, high-fat, starchy feed."
  },
  'default': {
    "title": "Unknow",
    "desc": "Unknow"
  }
}


export const BMIAnalysis = (bmi) => {
  if (bmi < 18.5) {
      return BMIAnalysisAlert['underweight'];
  } else if (bmi < 25) {
      return BMIAnalysisAlert['normal'];
  } else if (bmi < 30) {
      return BMIAnalysisAlert['overweight'];
  } else if (bmi > 35) {
      return BMIAnalysisAlert['obese'];
  } else {
    return BMIAnalysisAlert['default'];
  }
}