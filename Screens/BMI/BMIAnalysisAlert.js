export const BMIAnalysisAlert = {
  'underweight': {
    "title": "Underweight",
    "desc": "You are a bit underweight, let's practice sports and follow a good rest diet."
  },
  'normal': {
    "title": "Normal",
    "desc": "You have a fairly balanced body index. Keep your body in this condition with exercise and dietary rest."
  },
  'overweight': {
    "title": "Overweight",
    "desc": "Slightly overweight, but the condition is not too severe. Try to practice sports, follow a reasonable diet for an ideal physique. "
  },
  'obese': {
    "title": "Obese",
    "desc": "Warning. You should follow a healthy diet, set up a sports schedule to minimize the possibility of the disease."
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