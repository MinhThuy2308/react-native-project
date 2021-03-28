export const BMIAnalysisAlert = {
  'underweight': {
    "title": "Underweight",
    "desc": "Bạn được xem là có cân nặng chuẩn nếu có chỉ số BMI dao động từ 18,5 – 24,9"
  },
  'normal': {
    "title": "Normal",
    "desc": "Bạn được xem là có cân nặng chuẩn nếu có chỉ số BMI dao động từ 18,5 – 24,9"
  },
  'overweight': {
    "title": "Overweight",
    "desc": "Tôi có bị thừa cân hay không? Bạn sẽ bị xem là béo phì độ 1 nếu chỉ số BMI từ 25 đến 29,9. Làm thế nào để giảm cân? Để có thể giảm cân, bạn cần nắm rõ nhu cầu calo của cơ thể phục vụ cho hoạt động hàng ngày và từ đó tính toán chế độ ăn uống để dung nạp ít calo hơn mức cần thiết. Bạn có thể cắt giảm từ 300–500 kcal trong khẩu phần ăn hàng ngày và từ đó giảm được từ 0,5–1 kg mỗi tuần. Ví dụ: Nếu lượng calo hàng ngày của bạn là 2.100, bạn chỉ cần bổ sung 1.600 kcal từ các loại đồ ăn và thức uống. Lượng calo tối thiểu mọi người cần là bao nhiêu? Trung bình, phụ nữ cần khoảng 2.000 kcal hàng ngày trong khi nam giới cần 2.500 kcal. Để có thể giảm cân, bạn cần cắt giảm 500 kcal mỗi ngày. Tuy nhiên, mỗi người cần ít nhất 1.200 kcal để duy trì các hoạt động của cơ thể hàng ngày. Nếu bạn dung nạp ít hơn lượng calo tiêu chuẩn thì sẽ ảnh hưởng xấu đến cơ thể. Một vài thông tin cần thiết để giúp giảm cân thành công:"
  },
  'obese': {
    "title": "Obese",
    "desc": "Bạn được xem là có cân nặng chuẩn nếu có chỉ số BMI dao động từ 18,5 – 24,9"
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