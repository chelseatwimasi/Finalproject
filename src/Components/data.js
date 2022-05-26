let data = [
 {
   "year":"2019",
   "leading_cause":"Alzheimer's Disease (G30)",
   "sex":"Female",
   "race_ethnicity":"Asian and Pacific Islander",
   "deaths":"50",
   "death_rate":"7.719849741",
   "age_adjusted_death_rate":"6.207494885"
  },
{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"30"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"28"}
,{"year":"2019","leading_cause":"Insitu or Benign / Uncertain Neoplasms (D00-D48)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Septicemia (A40-A41)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Complications of Medical and Surgical Care (Y40-Y84, Y88)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Alzheimer's Disease (G30)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"3"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"3"}
,{"year":"2019","leading_cause":"Assault (Homicide: U01-U02, Y87.1, X85-Y09)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"3"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"3"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"5"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":"8.844176662","age_adjusted_death_rate":"12.14778648"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"9"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"14"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"9","death_rate":"9.949698745","age_adjusted_death_rate":"12.73357975"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"35"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"39"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"1578","death_rate":"158.2551418","age_adjusted_death_rate":"123.7629009"}
,{"year":"2019","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"96","death_rate":"9.627689234","age_adjusted_death_rate":"7.092763442"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"120","death_rate":"12.03461154","age_adjusted_death_rate":"10.40042785"}
,{"year":"2019","leading_cause":"Alzheimer's Disease (G30)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"171","death_rate":"17.14932145","age_adjusted_death_rate":"10.82707992"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"227","death_rate":"22.7654735","age_adjusted_death_rate":"16.24829465"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"242","death_rate":"24.26979995","age_adjusted_death_rate":"18.07759942"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"290","death_rate":"29.08364456","age_adjusted_death_rate":"20.45669126"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"316","death_rate":"31.69114373","age_adjusted_death_rate":"22.36321122"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"383","death_rate":"38.41046851","age_adjusted_death_rate":"27.78150486"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"1753","death_rate":"175.805617","age_adjusted_death_rate":"132.4018003"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Female","race_ethnicity":"Non-Hispanic Black","deaths":"2483","death_rate":"249.0161705","age_adjusted_death_rate":"173.1869461"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"2264","death_rate":"165.1004969","age_adjusted_death_rate":"96.12840989"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"125","death_rate":"9.115530969","age_adjusted_death_rate":"8.755260544"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"167","death_rate":"12.17834937","age_adjusted_death_rate":"7.049815954"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"197","death_rate":"14.36607681","age_adjusted_death_rate":"8.62864342"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"228","death_rate":"16.62672849","age_adjusted_death_rate":"8.218487701"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"308","death_rate":"22.46066831","age_adjusted_death_rate":"11.14077883"}
,{"year":"2019","leading_cause":"Alzheimer's Disease (G30)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"341","death_rate":"24.86716848","age_adjusted_death_rate":"10.50871683"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"390","death_rate":"28.44045662","age_adjusted_death_rate":"14.41986136"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"480","death_rate":"35.00363892","age_adjusted_death_rate":"19.22599409"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"2655","death_rate":"193.6138778","age_adjusted_death_rate":"124.3381382"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Female","race_ethnicity":"Non-Hispanic White","deaths":"4001","death_rate":"291.7699153","age_adjusted_death_rate":"141.5642319"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"401","death_rate":"61.91319492","age_adjusted_death_rate":"53.34011786"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"40","death_rate":"6.175879793","age_adjusted_death_rate":"5.373332294"}
,{"year":"2019","leading_cause":"Intentional Self-Harm (Suicide: U03, X60-X84, Y87.0)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"40","death_rate":"6.175879793","age_adjusted_death_rate":"5.346443053"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":"11.05522083","age_adjusted_death_rate":"14.64331729"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"40","death_rate":"6.175879793","age_adjusted_death_rate":"5.084314882"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"66","death_rate":"10.19020166","age_adjusted_death_rate":"8.354977901"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"64","death_rate":"70.7534133","age_adjusted_death_rate":"88.7919256"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"67","death_rate":"10.34459865","age_adjusted_death_rate":"8.518144202"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"78","death_rate":"12.0429656","age_adjusted_death_rate":"9.944715133"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"110","death_rate":"16.98366943","age_adjusted_death_rate":"14.15550557"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"582","death_rate":"89.85905098","age_adjusted_death_rate":"75.79927081"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Female","race_ethnicity":"Asian and Pacific Islander","deaths":"623","death_rate":"96.18932777","age_adjusted_death_rate":"78.8163246"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Female","race_ethnicity":"Hispanic","deaths":"1279","death_rate":"102.1702593","age_adjusted_death_rate":"93.37882892"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Female","race_ethnicity":"Hispanic","deaths":"98","death_rate":"7.828526512","age_adjusted_death_rate":"7.322347649"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Female","race_ethnicity":"Hispanic","deaths":"104","death_rate":"8.307824053","age_adjusted_death_rate":"8.039053498"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Female","race_ethnicity":"Hispanic","deaths":"151","death_rate":"12.06232146","age_adjusted_death_rate":"10.7897817"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Female","race_ethnicity":"Hispanic","deaths":"156","death_rate":"12.46173608","age_adjusted_death_rate":"11.18444404"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Female","race_ethnicity":"Hispanic","deaths":"178","death_rate":"14.2191604","age_adjusted_death_rate":"12.85579621"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Female","race_ethnicity":"Hispanic","deaths":"214","death_rate":"17.09494565","age_adjusted_death_rate":"15.49801993"}
,{"year":"2019","leading_cause":"Alzheimer's Disease (G30)","sex":"Female","race_ethnicity":"Hispanic","deaths":"231","death_rate":"18.45295535","age_adjusted_death_rate":"15.93330728"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Female","race_ethnicity":"Hispanic","deaths":"249","death_rate":"19.89084797","age_adjusted_death_rate":"17.65789189"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Female","race_ethnicity":"Hispanic","deaths":"1182","death_rate":"94.42161568","age_adjusted_death_rate":"87.06528773"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Female","race_ethnicity":"Hispanic","deaths":"1574","death_rate":"125.7357217","age_adjusted_death_rate":"111.7353368"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"125","death_rate":"153.7401914","age_adjusted_death_rate":"251.283561"}
,{"year":"2019","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73-K74)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":"17.21890143","age_adjusted_death_rate":"24.15790476"}
,{"year":"2019","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":"17.21890143","age_adjusted_death_rate":"12.84231049"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Use of Alcohol (F10)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":"17.21890143","age_adjusted_death_rate":"21.0146938"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"11","death_rate":"12.16074291","age_adjusted_death_rate":"15.98649499"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"12","death_rate":"13.26626499","age_adjusted_death_rate":"18.86074635"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":"17.21890143","age_adjusted_death_rate":"28.51477435"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"15","death_rate":"18.44882297","age_adjusted_death_rate":"28.63593587"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"17","death_rate":"20.90866603","age_adjusted_death_rate":"27.20905858"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"22","death_rate":"27.05827368","age_adjusted_death_rate":"48.36535015"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"34","death_rate":"41.81733205","age_adjusted_death_rate":"65.49320907"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"75","death_rate":"92.24411483","age_adjusted_death_rate":"146.1092186"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Male","race_ethnicity":"Not Stated/Unknown","deaths":"193","death_rate":"237.3748555","age_adjusted_death_rate":"414.5944733"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"10"}
,{"year":"2019","leading_cause":"Cholelithiasis and Disorders of Gallbladder (K80-K82)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Alzheimer's Disease (G30)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"15","death_rate":"16.58283124","age_adjusted_death_rate":"21.71794941"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Complications of Medical and Surgical Care (Y40-Y84, Y88)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Use of Alcohol (F10)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Septicemia (A40-A41)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Viral Hepatitis (B15-B19)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Intentional Self-Harm (Suicide: U03, X60-X84, Y87.0)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Aortic Aneurysm and Dissection (I71)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"61","death_rate":"67.43684705","age_adjusted_death_rate":"90.59242339"}
,{"year":"2019","leading_cause":"Assault (Homicide: U01-U02, Y87.1, X85-Y09)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"3"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"3"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"110","death_rate":"121.6074291","age_adjusted_death_rate":"161.6351392"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"5"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"6"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"15"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"19"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"27"}
,{"year":"2019","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73-K74)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"4"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"4"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Use of Alcohol (F10)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"4"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"17"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"4"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"4"}
,{"year":"2019","leading_cause":"Peptic Ulcer (K25-K28)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"5"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"5"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"8"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"9"}
,{"year":"2019","leading_cause":"Intentional Self-Harm (Suicide: U03, X60-X84, Y87.0)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"9"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"32"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Male","race_ethnicity":"Other Race/ Ethnicity","deaths":"66"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"1507","death_rate":"181.8458256","age_adjusted_death_rate":"182.6826072"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"150","death_rate":"18.10011536","age_adjusted_death_rate":"17.77687704"}
,{"year":"2019","leading_cause":"Assault (Homicide: U01-U02, Y87.1, X85-Y09)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"156","death_rate":"18.82411997","age_adjusted_death_rate":"18.99230593"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"185","death_rate":"22.32347561","age_adjusted_death_rate":"22.76463114"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"210","death_rate":"25.3401615","age_adjusted_death_rate":"25.6023163"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"211","death_rate":"25.46082894","age_adjusted_death_rate":"25.79699843"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"228","death_rate":"27.51217534","age_adjusted_death_rate":"27.14739223"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"294","death_rate":"35.4762261","age_adjusted_death_rate":"32.35415157"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"377","death_rate":"45.49162327","age_adjusted_death_rate":"44.92295145"}
,{"year":"2019","leading_cause":"Parkinson's Disease (G20)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"1421","death_rate":"171.4684262","age_adjusted_death_rate":"168.4803046"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Male","race_ethnicity":"Non-Hispanic Black","deaths":"2315","death_rate":"279.3451137","age_adjusted_death_rate":"279.643801"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"2366","death_rate":"180.5156063","age_adjusted_death_rate":"139.6400628"}
,{"year":"2019","leading_cause":"Intentional Self-Harm (Suicide: U03, X60-X84, Y87.0)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":"5.527610414","age_adjusted_death_rate":"6.979219825"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"181","death_rate":"13.80952018","age_adjusted_death_rate":"10.0100868"}
,{"year":"2019","leading_cause":"Intentional Self-Harm (Suicide: U03, X60-X84, Y87.0)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"194","death_rate":"14.80136417","age_adjusted_death_rate":"13.5805479"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"248","death_rate":"18.92133151","age_adjusted_death_rate":"14.48032854"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"266","death_rate":"20.29465396","age_adjusted_death_rate":"14.85203326"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"272","death_rate":"20.75242811","age_adjusted_death_rate":"16.68493048"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"342","death_rate":"26.09312652","age_adjusted_death_rate":"19.10848654"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"373","death_rate":"28.45829296","age_adjusted_death_rate":"20.77153997"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"418","death_rate":"31.89159908","age_adjusted_death_rate":"28.91253713"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"2785","death_rate":"212.4835011","age_adjusted_death_rate":"163.7927192"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Male","race_ethnicity":"Non-Hispanic White","deaths":"4034","death_rate":"307.7768198","age_adjusted_death_rate":"224.9990183"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"549","death_rate":"93.69224232","age_adjusted_death_rate":"90.70089869"}
,{"year":"2019","leading_cause":"Cholelithiasis and Disorders of Gallbladder (K80-K82)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Alzheimer's Disease (G30)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"41","death_rate":"6.997052705","age_adjusted_death_rate":"7.415199568"}
,{"year":"2019","leading_cause":"Intentional Self-Harm (Suicide: U03, X60-X84, Y87.0)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"48","death_rate":"8.191671459","age_adjusted_death_rate":"7.848126622"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"52","death_rate":"8.874310748","age_adjusted_death_rate":"8.389708675"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"56","death_rate":"9.556950036","age_adjusted_death_rate":"9.228507274"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"76","death_rate":"12.97014648","age_adjusted_death_rate":"11.96179248"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"80","death_rate":"13.65278577","age_adjusted_death_rate":"13.41842449"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"92","death_rate":"15.70070363","age_adjusted_death_rate":"15.27352088"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"105","death_rate":"17.91928132","age_adjusted_death_rate":"16.87065413"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"671","death_rate":"114.5127406","age_adjusted_death_rate":"105.9242636"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Male","race_ethnicity":"Asian and Pacific Islander","deaths":"731","death_rate":"124.7523299","age_adjusted_death_rate":"119.3723376"}
,{"year":"2019","leading_cause":"All Other Causes","sex":"Male","race_ethnicity":"Hispanic","deaths":"1395","death_rate":"119.0518861","age_adjusted_death_rate":"143.485633"}
,{"year":"2019","leading_cause":"Anemias (D50-D64)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Male","race_ethnicity":"Hispanic","deaths":"135","death_rate":"11.52115027","age_adjusted_death_rate":"15.71279828"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Male","race_ethnicity":"Hispanic","deaths":"170","death_rate":"14.50811516","age_adjusted_death_rate":"18.82042264"}
,{"year":"2019","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73-K74)","sex":"Male","race_ethnicity":"Hispanic","deaths":"171","death_rate":"14.59345701","age_adjusted_death_rate":"15.95641278"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Male","race_ethnicity":"Hispanic","deaths":"174","death_rate":"14.84948257","age_adjusted_death_rate":"16.10828575"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Male","race_ethnicity":"Hispanic","deaths":"182","death_rate":"15.5322174","age_adjusted_death_rate":"19.55837808"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Male","race_ethnicity":"Hispanic","deaths":"182","death_rate":"15.5322174","age_adjusted_death_rate":"19.85821025"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Male","race_ethnicity":"Hispanic","deaths":"245","death_rate":"20.9087542","age_adjusted_death_rate":"25.40934387"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Male","race_ethnicity":"Hispanic","deaths":"423","death_rate":"36.09960418","age_adjusted_death_rate":"35.70789583"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Male","race_ethnicity":"Hispanic","deaths":"1164","death_rate":"99.3379179","age_adjusted_death_rate":"121.5817693"}
,{"year":"2019","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"Male","race_ethnicity":"Hispanic","deaths":"1603","death_rate":"136.8029917","age_adjusted_death_rate":"176.783287"}
,{"year":"2019","leading_cause":"Septicemia (A40-A41)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Accidents Except Drug Poisoning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Intentional Self-Harm (Suicide: U03, X60-X84, Y87.0)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":"5.527610414","age_adjusted_death_rate":"6.724040882"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Use of Alcohol (F10)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"1"}
,{"year":"2019","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"2"}
,{"year":"2019","leading_cause":"Alzheimer's Disease (G30)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"3"}
,{"year":"2019","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"Female","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":"7.73865458","age_adjusted_death_rate":"6.390793995"}
,{"year":"2019","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"5"}
,{"year":"2019","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"Female","race_ethnicity":"Other Race/ Ethnicity","deaths":"17"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Hispanic","deaths":"199","death_rate":"16.7","age_adjusted_death_rate":"26.6"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"29","death_rate":"4.6","age_adjusted_death_rate":"5.1"}
,{"year":"2014","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"90","death_rate":"8.6","age_adjusted_death_rate":"7.1"}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"318","death_rate":"36.8","age_adjusted_death_rate":"42.2"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"115","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"63","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"2578","death_rate":"181.9","age_adjusted_death_rate":"110.7"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"502","death_rate":"37.4","age_adjusted_death_rate":"29.7"}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Hispanic","deaths":"165","death_rate":"13.8","age_adjusted_death_rate":"20.4"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Hispanic","deaths":"218","death_rate":"17.2","age_adjusted_death_rate":"18.8"}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"112","death_rate":"17.9","age_adjusted_death_rate":"19.1"}
,{"year":"2014","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Hispanic","deaths":"186","death_rate":"15.6","age_adjusted_death_rate":"23.2"}
,{"year":"2014","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Hispanic","deaths":"92","death_rate":"7.7","age_adjusted_death_rate":"8.7"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"657","death_rate":"114.5","age_adjusted_death_rate":"129.5"}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"207","death_rate":"19.7","age_adjusted_death_rate":"15.9"}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"59","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"398","death_rate":"37.9","age_adjusted_death_rate":"31.6"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"80","death_rate":"12.8","age_adjusted_death_rate":"14.1"}
,{"year":"2014","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"197","death_rate":"22.8","age_adjusted_death_rate":"26.4"}
,{"year":"2014","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"102","death_rate":"9.7","age_adjusted_death_rate":"8.5"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"462","death_rate":"73.8","age_adjusted_death_rate":"81.1"}
,{"year":"2014","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"48","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"50","death_rate":"8","age_adjusted_death_rate":"8.5"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"36","death_rate":"5.8","age_adjusted_death_rate":"6.3"}
,{"year":"2014","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"F","race_ethnicity":"Hispanic","deaths":"66","death_rate":"5.2","age_adjusted_death_rate":"5.4"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Hispanic","deaths":"1230","death_rate":"97.1","age_adjusted_death_rate":"106.7"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1958","death_rate":"226.8","age_adjusted_death_rate":"264.7"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Hispanic","deaths":"220","death_rate":"17.4","age_adjusted_death_rate":"19"}
,{"year":"2014","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"123","death_rate":"11.7","age_adjusted_death_rate":"9.2"}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"3142","death_rate":"234","age_adjusted_death_rate":"195.1"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"12","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"18","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"9","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"2194","death_rate":"209.1","age_adjusted_death_rate":"169.1"}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"31","death_rate":"5.4","age_adjusted_death_rate":"5.3"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Hispanic","deaths":"145","death_rate":"12.1","age_adjusted_death_rate":"19.3"}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Hispanic","deaths":"1146","death_rate":"96","age_adjusted_death_rate":"143.5"}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"71","death_rate":"12.4","age_adjusted_death_rate":"14.2"}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"12","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"242","death_rate":"28","age_adjusted_death_rate":"33.9"}
,{"year":"2014","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"74","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"4507","death_rate":"318","age_adjusted_death_rate":"161"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"3990","death_rate":"297.1","age_adjusted_death_rate":"238.4"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"180","death_rate":"12.7","age_adjusted_death_rate":"6.7"}
,{"year":"2014","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"28","death_rate":"4.5","age_adjusted_death_rate":"4.2"}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"50","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"424","death_rate":"73.9","age_adjusted_death_rate":"90.4"}
,{"year":"2014","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"339","death_rate":"54.2","age_adjusted_death_rate":"59"}
,{"year":"2014","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"28","death_rate":"4.9","age_adjusted_death_rate":"5.8"}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Hispanic","deaths":"64","death_rate":"5.1","age_adjusted_death_rate":"5.4"}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"73","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"563","death_rate":"39.7","age_adjusted_death_rate":"20.4"}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"175","death_rate":"13","age_adjusted_death_rate":"10.5"}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"12","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Hispanic","deaths":"116","death_rate":"9.2","age_adjusted_death_rate":"10.1"}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"95","death_rate":"16.6","age_adjusted_death_rate":"22.9"}
,{"year":"2014","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"314","death_rate":"23.4","age_adjusted_death_rate":"21.4"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Hispanic","deaths":"1281","death_rate":"107.3","age_adjusted_death_rate":"170.5"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"95","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"3153","death_rate":"222.5","age_adjusted_death_rate":"150.2"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"186","death_rate":"21.5","age_adjusted_death_rate":"25.4"}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"50","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1375","death_rate":"159.3","age_adjusted_death_rate":"177.8"}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"68","death_rate":"11.9","age_adjusted_death_rate":"13.3"}
,{"year":"2014","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"50","death_rate":"8.7","age_adjusted_death_rate":"8.7"}
,{"year":"2014","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"169","death_rate":"11.9","age_adjusted_death_rate":"7.4"}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"418","death_rate":"29.5","age_adjusted_death_rate":"15.6"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"554","death_rate":"96.5","age_adjusted_death_rate":"118.5"}
,{"year":"2014","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Hispanic","deaths":"1195","death_rate":"100.1","age_adjusted_death_rate":"143.3"}
,{"year":"2014","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"2275","death_rate":"169.4","age_adjusted_death_rate":"141.3"}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1852","death_rate":"176.5","age_adjusted_death_rate":"148.4"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"266","death_rate":"25.3","age_adjusted_death_rate":"20.6"}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"228","death_rate":"16.1","age_adjusted_death_rate":"10"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"515","death_rate":"36.3","age_adjusted_death_rate":"21"}
,{"year":"2014","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"204","death_rate":"15.2","age_adjusted_death_rate":"13.4"}
,{"year":"2014","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"186","death_rate":"21.5","age_adjusted_death_rate":"21.5"}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"9","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"399","death_rate":"29.7","age_adjusted_death_rate":"24"}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"91","death_rate":"15.9","age_adjusted_death_rate":"19.3"}
,{"year":"2014","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"96","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"292","death_rate":"21.7","age_adjusted_death_rate":"18.1"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"148","death_rate":"17.1","age_adjusted_death_rate":"17.7"}
,{"year":"2014","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"25","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"9","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"155","death_rate":"18","age_adjusted_death_rate":"21.6"}
,{"year":"2014","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"118","death_rate":"8.3","age_adjusted_death_rate":"4.7"}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"66","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"26","death_rate":"4.2","age_adjusted_death_rate":"4.7"}
,{"year":"2014","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"258","death_rate":"19.2","age_adjusted_death_rate":"16.4"}
,{"year":"2014","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"196","death_rate":"22.7","age_adjusted_death_rate":"21.7"}
,{"year":"2014","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"276","death_rate":"19.5","age_adjusted_death_rate":"8.6"}
,{"year":"2014","leading_cause":"Septicemia (A40-A41)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"42","death_rate":"6.7","age_adjusted_death_rate":"6.9"}
,{"year":"2014","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Hispanic","deaths":"176","death_rate":"14.7","age_adjusted_death_rate":"16.9"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Hispanic","deaths":"193","death_rate":"15.2","age_adjusted_death_rate":"16.8"}
,{"year":"2014","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"105","death_rate":"18.3","age_adjusted_death_rate":"25"}
,{"year":"2014","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Hispanic","deaths":"142","death_rate":"11.2","age_adjusted_death_rate":"12.5"}
,{"year":"2014","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Hispanic","deaths":"209","death_rate":"16.5","age_adjusted_death_rate":"17.9"}
,{"year":"2014","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Hispanic","deaths":"164","death_rate":"13.7","age_adjusted_death_rate":"16.7"}
,{"year":"2014","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Hispanic","deaths":"191","death_rate":"16","age_adjusted_death_rate":"16.6"}
,{"year":"2014","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"220","death_rate":"21","age_adjusted_death_rate":"17.9"}
,{"year":"2014","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"68","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Hispanic","deaths":"1154","death_rate":"91.1","age_adjusted_death_rate":"97.4"}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"277","death_rate":"20.6","age_adjusted_death_rate":"16.8"}
,{"year":"2014","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Hispanic","deaths":"1135","death_rate":"89.6","age_adjusted_death_rate":"96"}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1532","death_rate":"177.5","age_adjusted_death_rate":"199.6"}
,{"year":"2014","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1536","death_rate":"146.4","age_adjusted_death_rate":"126.4"}
,{"year":"2014","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2014","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"274","death_rate":"26.1","age_adjusted_death_rate":"21.4"}
,{"year":"2014","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"502","death_rate":"80.2","age_adjusted_death_rate":"80.6"}
,{"year":"2013","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"139","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1868","death_rate":"217.7","age_adjusted_death_rate":"258.5"}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"27","death_rate":"4.5","age_adjusted_death_rate":"5.2"}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"15","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"204","death_rate":"23.8","age_adjusted_death_rate":"23.2"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"249","death_rate":"18.5","age_adjusted_death_rate":"15.1"}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"156","death_rate":"11.6","age_adjusted_death_rate":"9.3"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"191","death_rate":"22.3","age_adjusted_death_rate":"25"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"4085","death_rate":"303.5","age_adjusted_death_rate":"244.3"}
,{"year":"2013","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"263","death_rate":"18.5","age_adjusted_death_rate":"8.4"}
,{"year":"2013","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"25","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Hispanic","deaths":"1307","death_rate":"110.7","age_adjusted_death_rate":"183.3"}
,{"year":"2013","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Hispanic","deaths":"1082","death_rate":"86.7","age_adjusted_death_rate":"94"}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Hispanic","deaths":"192","death_rate":"16.3","age_adjusted_death_rate":"24.9"}
,{"year":"2013","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"94","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"285","death_rate":"27.3","age_adjusted_death_rate":"22.5"}
,{"year":"2013","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"286","death_rate":"21.2","age_adjusted_death_rate":"19.5"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"72","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"63","death_rate":"11.4","age_adjusted_death_rate":"12.8"}
,{"year":"2013","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"106","death_rate":"10.1","age_adjusted_death_rate":"8"}
,{"year":"2013","leading_cause":"Viral Hepatitis (B15-B19)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"15","death_rate":"2.5","age_adjusted_death_rate":"2.5"}
,{"year":"2013","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"204","death_rate":"15.2","age_adjusted_death_rate":"13.6"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"71","death_rate":"12.8","age_adjusted_death_rate":"16.1"}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"35","death_rate":"5.8","age_adjusted_death_rate":"6.3"}
,{"year":"2013","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"320","death_rate":"53.3","age_adjusted_death_rate":"59"}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Hispanic","deaths":"60","death_rate":"4.8","age_adjusted_death_rate":"5.1"}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"427","death_rate":"30","age_adjusted_death_rate":"16.4"}
,{"year":"2013","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"32","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Hispanic","deaths":"188","death_rate":"15.9","age_adjusted_death_rate":"16.6"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"2365","death_rate":"226.4","age_adjusted_death_rate":"187.3"}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Hispanic","deaths":"221","death_rate":"17.7","age_adjusted_death_rate":"19.6"}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"166","death_rate":"11.7","age_adjusted_death_rate":"8.1"}
,{"year":"2013","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"2595","death_rate":"182.5","age_adjusted_death_rate":"111.1"}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"3132","death_rate":"232.7","age_adjusted_death_rate":"194.5"}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"437","death_rate":"32.5","age_adjusted_death_rate":"26.4"}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"467","death_rate":"77.8","age_adjusted_death_rate":"79.6"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Hispanic","deaths":"222","death_rate":"17.8","age_adjusted_death_rate":"19.8"}
,{"year":"2013","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1557","death_rate":"149.1","age_adjusted_death_rate":"129.5"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"106","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"135","death_rate":"9.5","age_adjusted_death_rate":"5"}
,{"year":"2013","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"17","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Hispanic","deaths":"120","death_rate":"9.6","age_adjusted_death_rate":"11"}
,{"year":"2013","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"16","death_rate":"2.7","age_adjusted_death_rate":"2.9"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"151","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"9","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"410","death_rate":"39.3","age_adjusted_death_rate":"33.1"}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"33","death_rate":"6","age_adjusted_death_rate":"8.4"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"80","death_rate":"13.3","age_adjusted_death_rate":"14.4"}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"622","death_rate":"43.7","age_adjusted_death_rate":"22.1"}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"60","death_rate":"10","age_adjusted_death_rate":"10.9"}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"19","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"2293","death_rate":"170.3","age_adjusted_death_rate":"143.3"}
,{"year":"2013","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Hispanic","deaths":"122","death_rate":"10.3","age_adjusted_death_rate":"11.3"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Hispanic","deaths":"158","death_rate":"13.4","age_adjusted_death_rate":"20.8"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Hispanic","deaths":"1261","death_rate":"101","age_adjusted_death_rate":"113.6"}
,{"year":"2013","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"274","death_rate":"31.9","age_adjusted_death_rate":"40"}
,{"year":"2013","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"15","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"96","death_rate":"17.3","age_adjusted_death_rate":"21.1"}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1592","death_rate":"185.5","age_adjusted_death_rate":"212.8"}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"78","death_rate":"13","age_adjusted_death_rate":"14.6"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"300","death_rate":"35","age_adjusted_death_rate":"41.1"}
,{"year":"2013","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"16","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"24","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"72","death_rate":"13","age_adjusted_death_rate":"18.5"}
,{"year":"2013","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Hispanic","deaths":"149","death_rate":"12.6","age_adjusted_death_rate":"15.7"}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"79","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"50","death_rate":"8.3","age_adjusted_death_rate":"9.3"}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"265","death_rate":"19.7","age_adjusted_death_rate":"16.4"}
,{"year":"2013","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Hispanic","deaths":"189","death_rate":"16","age_adjusted_death_rate":"19"}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Hispanic","deaths":"204","death_rate":"16.3","age_adjusted_death_rate":"18.5"}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"15","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"618","death_rate":"45.9","age_adjusted_death_rate":"36.7"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"41","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"99","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"238","death_rate":"16.7","age_adjusted_death_rate":"10.4"}
,{"year":"2013","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"Hispanic","deaths":"63","death_rate":"5","age_adjusted_death_rate":"4.9"}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"258","death_rate":"24.7","age_adjusted_death_rate":"20.8"}
,{"year":"2013","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"29","death_rate":"5.2","age_adjusted_death_rate":"5.4"}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1784","death_rate":"170.8","age_adjusted_death_rate":"145.5"}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"9","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"39","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"41","death_rate":"7.4","age_adjusted_death_rate":"7.2"}
,{"year":"2013","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"21","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"633","death_rate":"114.2","age_adjusted_death_rate":"130.9"}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Hispanic","deaths":"168","death_rate":"13.5","age_adjusted_death_rate":"14.8"}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"521","death_rate":"36.6","age_adjusted_death_rate":"21.6"}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"148","death_rate":"17.2","age_adjusted_death_rate":"20.9"}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"18","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"395","death_rate":"71.3","age_adjusted_death_rate":"89.8"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"271","death_rate":"25.9","age_adjusted_death_rate":"21.7"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"437","death_rate":"72.8","age_adjusted_death_rate":"81.8"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"531","death_rate":"95.8","age_adjusted_death_rate":"123.7"}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Hispanic","deaths":"1193","death_rate":"101","age_adjusted_death_rate":"146.4"}
,{"year":"2013","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"17","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"102","death_rate":"18.4","age_adjusted_death_rate":"26.8"}
,{"year":"2013","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Hispanic","deaths":"103","death_rate":"8.3","age_adjusted_death_rate":"9.3"}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"206","death_rate":"14.5","age_adjusted_death_rate":"7.5"}
,{"year":"2013","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"42","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"43","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"240","death_rate":"23","age_adjusted_death_rate":"18.9"}
,{"year":"2013","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"93","death_rate":"8.9","age_adjusted_death_rate":"7.6"}
,{"year":"2013","leading_cause":"Alzheimer's Disease (G30)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Hispanic","deaths":"142","death_rate":"12","age_adjusted_death_rate":"20"}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Hispanic","deaths":"1149","death_rate":"92.1","age_adjusted_death_rate":"99.9"}
,{"year":"2013","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"174","death_rate":"20.3","age_adjusted_death_rate":"20.6"}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"271","death_rate":"20.1","age_adjusted_death_rate":"17.9"}
,{"year":"2013","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"184","death_rate":"21.4","age_adjusted_death_rate":"26.1"}
,{"year":"2013","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"4535","death_rate":"319","age_adjusted_death_rate":"160.6"}
,{"year":"2013","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1341","death_rate":"156.3","age_adjusted_death_rate":"175.7"}
,{"year":"2013","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"107","death_rate":"10.2","age_adjusted_death_rate":"8.7"}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Hispanic","deaths":"1146","death_rate":"97.1","age_adjusted_death_rate":"148.5"}
,{"year":"2013","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"3187","death_rate":"224.2","age_adjusted_death_rate":"153.3"}
,{"year":"2013","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Hispanic","deaths":"233","death_rate":"19.7","age_adjusted_death_rate":"33.1"}
,{"year":"2013","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"159","death_rate":"18.5","age_adjusted_death_rate":"19.1"}
,{"year":"2012","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"17","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"56","death_rate":"10.4","age_adjusted_death_rate":"12"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Hispanic","deaths":"132","death_rate":"11.3","age_adjusted_death_rate":"19.2"}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"292","death_rate":"21.8","age_adjusted_death_rate":"18.1"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1563","death_rate":"182.7","age_adjusted_death_rate":"215.3"}
,{"year":"2012","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"9","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"29","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"48","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"20","death_rate":"3.7","age_adjusted_death_rate":"4.1"}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"39","death_rate":"6.7","age_adjusted_death_rate":"7.8"}
,{"year":"2012","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"57","death_rate":"9.8","age_adjusted_death_rate":"11.4"}
,{"year":"2012","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"136","death_rate":"13","age_adjusted_death_rate":"11.6"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"3184","death_rate":"237.7","age_adjusted_death_rate":"200.7"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"2269","death_rate":"217.1","age_adjusted_death_rate":"183.9"}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"285","death_rate":"21.3","age_adjusted_death_rate":"17.6"}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Hispanic","deaths":"129","death_rate":"11","age_adjusted_death_rate":"17.2"}
,{"year":"2012","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"199","death_rate":"14.9","age_adjusted_death_rate":"13.6"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"2316","death_rate":"172.9","age_adjusted_death_rate":"145.7"}
,{"year":"2012","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"235","death_rate":"27.5","age_adjusted_death_rate":"27.6"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"55","death_rate":"10.2","age_adjusted_death_rate":"15.1"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Hispanic","deaths":"1251","death_rate":"107.1","age_adjusted_death_rate":"182.5"}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"333","death_rate":"61.6","age_adjusted_death_rate":"79.7"}
,{"year":"2012","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Hispanic","deaths":"143","death_rate":"12.2","age_adjusted_death_rate":"15"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"352","death_rate":"26.3","age_adjusted_death_rate":"21.8"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Hispanic","deaths":"194","death_rate":"16.6","age_adjusted_death_rate":"26.1"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"39","death_rate":"6.7","age_adjusted_death_rate":"8"}
,{"year":"2012","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"34","death_rate":"5.8","age_adjusted_death_rate":"6.4"}
,{"year":"2012","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"76","death_rate":"14.1","age_adjusted_death_rate":"20.9"}
,{"year":"2012","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Hispanic","deaths":"103","death_rate":"8.8","age_adjusted_death_rate":"10.1"}
,{"year":"2012","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"24","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Hispanic","deaths":"169","death_rate":"13.6","age_adjusted_death_rate":"15.7"}
,{"year":"2012","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"327","death_rate":"56","age_adjusted_death_rate":"65"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"39","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"22","death_rate":"3.8","age_adjusted_death_rate":"4.3"}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Hispanic","deaths":"200","death_rate":"16.1","age_adjusted_death_rate":"18.4"}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"576","death_rate":"40.6","age_adjusted_death_rate":"20.2"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"507","death_rate":"35.7","age_adjusted_death_rate":"21.4"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"242","death_rate":"28.3","age_adjusted_death_rate":"37.4"}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"9","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"409","death_rate":"39.1","age_adjusted_death_rate":"33.8"}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"214","death_rate":"20.5","age_adjusted_death_rate":"17.4"}
,{"year":"2012","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"540","death_rate":"40.3","age_adjusted_death_rate":"32.3"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"295","death_rate":"28.2","age_adjusted_death_rate":"24.1"}
,{"year":"2012","leading_cause":"Septicemia (A40-A41)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"416","death_rate":"29.3","age_adjusted_death_rate":"15.4"}
,{"year":"2012","leading_cause":"Aortic Aneurysm and Dissection (I71)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Hispanic","deaths":"1109","death_rate":"89.5","age_adjusted_death_rate":"98.8"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"4156","death_rate":"310.3","age_adjusted_death_rate":"252.4"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Hispanic","deaths":"1263","death_rate":"102","age_adjusted_death_rate":"118.4"}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"199","death_rate":"14","age_adjusted_death_rate":"7.2"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"184","death_rate":"21.5","age_adjusted_death_rate":"27.3"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Hispanic","deaths":"205","death_rate":"17.5","age_adjusted_death_rate":"31.5"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"469","death_rate":"86.8","age_adjusted_death_rate":"116.9"}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"271","death_rate":"25.9","age_adjusted_death_rate":"22.1"}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"9","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"15","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"143","death_rate":"16.7","age_adjusted_death_rate":"21.3"}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"240","death_rate":"16.9","age_adjusted_death_rate":"10.3"}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"177","death_rate":"12.5","age_adjusted_death_rate":"8.5"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"36","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1912","death_rate":"182.9","age_adjusted_death_rate":"159.1"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Hispanic","deaths":"1125","death_rate":"90.8","age_adjusted_death_rate":"100.5"}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"308","death_rate":"36","age_adjusted_death_rate":"42.9"}
,{"year":"2012","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Hispanic","deaths":"1199","death_rate":"102.6","age_adjusted_death_rate":"150.5"}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Hispanic","deaths":"60","death_rate":"4.8","age_adjusted_death_rate":"5.2"}
,{"year":"2012","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Hispanic","deaths":"173","death_rate":"14.8","age_adjusted_death_rate":"15.5"}
,{"year":"2012","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"223","death_rate":"26.1","age_adjusted_death_rate":"25.8"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"204","death_rate":"19.5","age_adjusted_death_rate":"16.9"}
,{"year":"2012","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Hispanic","deaths":"126","death_rate":"10.2","age_adjusted_death_rate":"12.2"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"3256","death_rate":"229.6","age_adjusted_death_rate":"157.3"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"99","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1483","death_rate":"141.9","age_adjusted_death_rate":"127.3"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"34","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"286","death_rate":"21.4","age_adjusted_death_rate":"18.8"}
,{"year":"2012","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"113","death_rate":"8","age_adjusted_death_rate":"4.2"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"4719","death_rate":"332.7","age_adjusted_death_rate":"167.7"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Hispanic","deaths":"158","death_rate":"12.8","age_adjusted_death_rate":"14.6"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"461","death_rate":"78.9","age_adjusted_death_rate":"83.8"}
,{"year":"2012","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"53","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Hispanic","deaths":"191","death_rate":"16.3","age_adjusted_death_rate":"19.7"}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"170","death_rate":"19.9","age_adjusted_death_rate":"23.3"}
,{"year":"2012","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"272","death_rate":"20.3","age_adjusted_death_rate":"18.7"}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"F","race_ethnicity":"Hispanic","deaths":"54","death_rate":"4.4","age_adjusted_death_rate":"4.6"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"402","death_rate":"68.8","age_adjusted_death_rate":"81.2"}
,{"year":"2012","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"40","death_rate":"7.4","age_adjusted_death_rate":"7.3"}
,{"year":"2012","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"115","death_rate":"11","age_adjusted_death_rate":"8.9"}
,{"year":"2012","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1320","death_rate":"154.3","age_adjusted_death_rate":"175"}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"39","death_rate":"7.2","age_adjusted_death_rate":"10.8"}
,{"year":"2012","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"33","death_rate":"5.6","age_adjusted_death_rate":"5.8"}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"70","death_rate":"13","age_adjusted_death_rate":"17.5"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"152","death_rate":"17.8","age_adjusted_death_rate":"18.6"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Hispanic","deaths":"209","death_rate":"16.9","age_adjusted_death_rate":"19.6"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"622","death_rate":"115.1","age_adjusted_death_rate":"138.4"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"74","death_rate":"12.7","age_adjusted_death_rate":"15.1"}
,{"year":"2012","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"76","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"222","death_rate":"15.7","age_adjusted_death_rate":"7.2"}
,{"year":"2012","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1940","death_rate":"226.8","age_adjusted_death_rate":"280.7"}
,{"year":"2012","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Hispanic","deaths":"1126","death_rate":"96.4","age_adjusted_death_rate":"151"}
,{"year":"2012","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"76","death_rate":"7.3","age_adjusted_death_rate":"6.3"}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Hispanic","deaths":"101","death_rate":"8.2","age_adjusted_death_rate":"9.5"}
,{"year":"2012","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"2444","death_rate":"172.3","age_adjusted_death_rate":"105.1"}
,{"year":"2012","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"78","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"22","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"153","death_rate":"11.4","age_adjusted_death_rate":"9.3"}
,{"year":"2012","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"76","death_rate":"14.1","age_adjusted_death_rate":"18"}
,{"year":"2012","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"53","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2012","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"102","death_rate":"17.5","age_adjusted_death_rate":"20.7"}
,{"year":"2012","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"38","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"444","death_rate":"33.3","age_adjusted_death_rate":"27.8"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"3222","death_rate":"241.6","age_adjusted_death_rate":"206.1"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"452","death_rate":"85.5","age_adjusted_death_rate":"117.8"}
,{"year":"2011","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Hispanic","deaths":"218","death_rate":"17.8","age_adjusted_death_rate":"21.5"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"451","death_rate":"79.1","age_adjusted_death_rate":"86.1"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"402","death_rate":"70.5","age_adjusted_death_rate":"86.1"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"73","death_rate":"13.8","age_adjusted_death_rate":"22"}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"410","death_rate":"39.2","age_adjusted_death_rate":"34.7"}
,{"year":"2011","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Hispanic","deaths":"200","death_rate":"17.3","age_adjusted_death_rate":"29.2"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"43","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"19","death_rate":"3.6","age_adjusted_death_rate":"4.2"}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"154","death_rate":"18.1","age_adjusted_death_rate":"21.7"}
,{"year":"2011","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"277","death_rate":"32.5","age_adjusted_death_rate":"31.8"}
,{"year":"2011","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"466","death_rate":"32.9","age_adjusted_death_rate":"17.6"}
,{"year":"2011","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"290","death_rate":"21.7","age_adjusted_death_rate":"18.2"}
,{"year":"2011","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"21","death_rate":"3.7","age_adjusted_death_rate":"3.7"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"94","death_rate":"17.8","age_adjusted_death_rate":"28.7"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"2243","death_rate":"214.3","age_adjusted_death_rate":"186.7"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"550","death_rate":"104.1","age_adjusted_death_rate":"130.4"}
,{"year":"2011","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"254","death_rate":"19","age_adjusted_death_rate":"17.3"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"33","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"200","death_rate":"23.4","age_adjusted_death_rate":"28.1"}
,{"year":"2011","leading_cause":"Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Viral Hepatitis (B15-B19)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"142","death_rate":"10.6","age_adjusted_death_rate":"8.8"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"83","death_rate":"14.5","age_adjusted_death_rate":"17.8"}
,{"year":"2011","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Hispanic","deaths":"180","death_rate":"15.6","age_adjusted_death_rate":"18.9"}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1918","death_rate":"183.2","age_adjusted_death_rate":"163.3"}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"225","death_rate":"21.5","age_adjusted_death_rate":"18.7"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Hispanic","deaths":"156","death_rate":"12.7","age_adjusted_death_rate":"15"}
,{"year":"2011","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Hispanic","deaths":"70","death_rate":"5.7","age_adjusted_death_rate":"5.7"}
,{"year":"2011","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"90","death_rate":"8.6","age_adjusted_death_rate":"7.4"}
,{"year":"2011","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Hispanic","deaths":"1207","death_rate":"104.7","age_adjusted_death_rate":"151.1"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"62","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"61","death_rate":"11.5","age_adjusted_death_rate":"14.8"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"273","death_rate":"26.1","age_adjusted_death_rate":"22.8"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"510","death_rate":"36","age_adjusted_death_rate":"21"}
,{"year":"2011","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"231","death_rate":"16.3","age_adjusted_death_rate":"7.2"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Hispanic","deaths":"1085","death_rate":"88.6","age_adjusted_death_rate":"99.6"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Hispanic","deaths":"1201","death_rate":"104.2","age_adjusted_death_rate":"180.8"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"31","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"144","death_rate":"13.8","age_adjusted_death_rate":"12.4"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"30","death_rate":"5.3","age_adjusted_death_rate":"6.6"}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Hispanic","deaths":"83","death_rate":"6.8","age_adjusted_death_rate":"8.1"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Hispanic","deaths":"1348","death_rate":"110","age_adjusted_death_rate":"131.8"}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"60","death_rate":"11.4","age_adjusted_death_rate":"14.3"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"36","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"4220","death_rate":"316.4","age_adjusted_death_rate":"260.2"}
,{"year":"2011","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"24","death_rate":"4.2","age_adjusted_death_rate":"5.4"}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"258","death_rate":"19.3","age_adjusted_death_rate":"16.3"}
,{"year":"2011","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"43","death_rate":"7.5","age_adjusted_death_rate":"8.5"}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"42","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"281","death_rate":"26.8","age_adjusted_death_rate":"23.6"}
,{"year":"2011","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Hispanic","deaths":"167","death_rate":"14.5","age_adjusted_death_rate":"18.8"}
,{"year":"2011","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Hispanic","deaths":"147","death_rate":"12.8","age_adjusted_death_rate":"20.9"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"696","death_rate":"49.1","age_adjusted_death_rate":"25.4"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Hispanic","deaths":"209","death_rate":"18.1","age_adjusted_death_rate":"34.4"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"5016","death_rate":"354.1","age_adjusted_death_rate":"179.8"}
,{"year":"2011","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Hispanic","deaths":"1025","death_rate":"83.7","age_adjusted_death_rate":"94.8"}
,{"year":"2011","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"184","death_rate":"13","age_adjusted_death_rate":"8.2"}
,{"year":"2011","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"266","death_rate":"31.2","age_adjusted_death_rate":"31.5"}
,{"year":"2011","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Hispanic","deaths":"145","death_rate":"12.6","age_adjusted_death_rate":"13"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Hispanic","deaths":"179","death_rate":"14.6","age_adjusted_death_rate":"17.3"}
,{"year":"2011","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"278","death_rate":"48.7","age_adjusted_death_rate":"57.4"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1590","death_rate":"186.4","age_adjusted_death_rate":"224.4"}
,{"year":"2011","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"Hispanic","deaths":"56","death_rate":"4.6","age_adjusted_death_rate":"4.5"}
,{"year":"2011","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"135","death_rate":"15.8","age_adjusted_death_rate":"14.8"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"38","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"98","death_rate":"17.2","age_adjusted_death_rate":"20.6"}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"79","death_rate":"15","age_adjusted_death_rate":"18.5"}
,{"year":"2011","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Hispanic","deaths":"162","death_rate":"14.1","age_adjusted_death_rate":"16.2"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"243","death_rate":"28.5","age_adjusted_death_rate":"38"}
,{"year":"2011","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"49","death_rate":"9.3","age_adjusted_death_rate":"9.4"}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"46","death_rate":"8.1","age_adjusted_death_rate":"10.2"}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Hispanic","deaths":"196","death_rate":"16","age_adjusted_death_rate":"18.5"}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"51","death_rate":"8.9","age_adjusted_death_rate":"10.7"}
,{"year":"2011","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1473","death_rate":"140.7","age_adjusted_death_rate":"128.8"}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"14","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Hispanic","deaths":"123","death_rate":"10.7","age_adjusted_death_rate":"19.2"}
,{"year":"2011","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"272","death_rate":"20.4","age_adjusted_death_rate":"18.1"}
,{"year":"2011","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"2165","death_rate":"162.3","age_adjusted_death_rate":"139.5"}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"199","death_rate":"14","age_adjusted_death_rate":"6.8"}
,{"year":"2011","leading_cause":"Tuberculosis (A16-A19)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Hispanic","deaths":"90","death_rate":"7.3","age_adjusted_death_rate":"9.1"}
,{"year":"2011","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"307","death_rate":"36","age_adjusted_death_rate":"43.9"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"221","death_rate":"21.1","age_adjusted_death_rate":"18.6"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"27","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"83","death_rate":"7.9","age_adjusted_death_rate":"6.9"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"200","death_rate":"23.4","age_adjusted_death_rate":"29.1"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"646","death_rate":"48.4","age_adjusted_death_rate":"39.3"}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"88","death_rate":"6.2","age_adjusted_death_rate":"6.1"}
,{"year":"2011","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1337","death_rate":"156.7","age_adjusted_death_rate":"181.7"}
,{"year":"2011","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"27","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"340","death_rate":"64.3","age_adjusted_death_rate":"85.1"}
,{"year":"2011","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"2445","death_rate":"172.6","age_adjusted_death_rate":"105.4"}
,{"year":"2011","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"177","death_rate":"13.3","age_adjusted_death_rate":"12"}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"253","death_rate":"17.9","age_adjusted_death_rate":"11.1"}
,{"year":"2011","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Parkinson's Disease (G20)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"37","death_rate":"7","age_adjusted_death_rate":"10.5"}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"3371","death_rate":"238","age_adjusted_death_rate":"161.1"}
,{"year":"2011","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Hispanic","deaths":"1144","death_rate":"99.2","age_adjusted_death_rate":"157.7"}
,{"year":"2011","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2011","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1840","death_rate":"215.7","age_adjusted_death_rate":"268.3"}
,{"year":"2011","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"46","death_rate":"8.8","age_adjusted_death_rate":"8.7"}
,{"year":"2010","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"297","death_rate":"34.9","age_adjusted_death_rate":"34"}
,{"year":"2010","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"238","death_rate":"42.3","age_adjusted_death_rate":"51.6"}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"501","death_rate":"35","age_adjusted_death_rate":"20.7"}
,{"year":"2010","leading_cause":"Insitu or Benign / Uncertain Neoplasms (D00-D48)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Hispanic","deaths":"189","death_rate":"16.5","age_adjusted_death_rate":"18.4"}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Hispanic","deaths":"1057","death_rate":"92.5","age_adjusted_death_rate":"150"}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"271","death_rate":"20.2","age_adjusted_death_rate":"18.4"}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"259","death_rate":"24.7","age_adjusted_death_rate":"22.2"}
,{"year":"2010","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"182","death_rate":"13.6","age_adjusted_death_rate":"12.3"}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"5351","death_rate":"374.2","age_adjusted_death_rate":"189.2"}
,{"year":"2010","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1230","death_rate":"144.5","age_adjusted_death_rate":"166.2"}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"219","death_rate":"15.3","age_adjusted_death_rate":"7.7"}
,{"year":"2010","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Hispanic","deaths":"138","death_rate":"12.1","age_adjusted_death_rate":"12.9"}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"382","death_rate":"26.7","age_adjusted_death_rate":"14.1"}
,{"year":"2010","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"17","death_rate":"3","age_adjusted_death_rate":"2.9"}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"478","death_rate":"91.8","age_adjusted_death_rate":"130"}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"414","death_rate":"73.6","age_adjusted_death_rate":"79.9"}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"2282","death_rate":"217.7","age_adjusted_death_rate":"194.2"}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"202","death_rate":"23.7","age_adjusted_death_rate":"30.9"}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"384","death_rate":"36.6","age_adjusted_death_rate":"33"}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Hispanic","deaths":"1316","death_rate":"108.1","age_adjusted_death_rate":"133.2"}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Hispanic","deaths":"132","death_rate":"11.6","age_adjusted_death_rate":"13.9"}
,{"year":"2010","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"107","death_rate":"7.5","age_adjusted_death_rate":"4.3"}
,{"year":"2010","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Atherosclerosis (I70)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"18","death_rate":"3.5","age_adjusted_death_rate":"3.1"}
,{"year":"2010","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"247","death_rate":"17.3","age_adjusted_death_rate":"7.5"}
,{"year":"2010","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"152","death_rate":"14.5","age_adjusted_death_rate":"12.9"}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"54","death_rate":"10.4","age_adjusted_death_rate":"13.7"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"163","death_rate":"11.4","age_adjusted_death_rate":"7.8"}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"70","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"2015","death_rate":"236.7","age_adjusted_death_rate":"307.7"}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"3408","death_rate":"254.1","age_adjusted_death_rate":"216.6"}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"29","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"86","death_rate":"8.2","age_adjusted_death_rate":"7.4"}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"153","death_rate":"11.4","age_adjusted_death_rate":"9.4"}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"83","death_rate":"15.9","age_adjusted_death_rate":"21.3"}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"25","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1326","death_rate":"126.5","age_adjusted_death_rate":"117.4"}
,{"year":"2010","leading_cause":"Viral Hepatitis (B15-B19)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Hispanic","deaths":"1007","death_rate":"82.7","age_adjusted_death_rate":"94.6"}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1768","death_rate":"168.6","age_adjusted_death_rate":"151.8"}
,{"year":"2010","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"2034","death_rate":"151.6","age_adjusted_death_rate":"130.9"}
,{"year":"2010","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"614","death_rate":"45.8","age_adjusted_death_rate":"37.6"}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"526","death_rate":"101","age_adjusted_death_rate":"124.5"}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"12","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"275","death_rate":"26.2","age_adjusted_death_rate":"23.6"}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"89","death_rate":"15.8","age_adjusted_death_rate":"19.2"}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"276","death_rate":"20.6","age_adjusted_death_rate":"17.2"}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"147","death_rate":"17.3","age_adjusted_death_rate":"18.3"}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Hispanic","deaths":"95","death_rate":"7.8","age_adjusted_death_rate":"9.5"}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"50","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"279","death_rate":"32.8","age_adjusted_death_rate":"41"}
,{"year":"2010","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"27","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"2140","death_rate":"149.7","age_adjusted_death_rate":"93.9"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"108","death_rate":"20.7","age_adjusted_death_rate":"31.7"}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"34","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"3438","death_rate":"240.4","age_adjusted_death_rate":"163"}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"30","death_rate":"5.8","age_adjusted_death_rate":"8.7"}
,{"year":"2010","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"299","death_rate":"35.1","age_adjusted_death_rate":"35.5"}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Hispanic","deaths":"1045","death_rate":"85.9","age_adjusted_death_rate":"98.5"}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"61","death_rate":"11.7","age_adjusted_death_rate":"17.8"}
,{"year":"2010","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"88","death_rate":"8.4","age_adjusted_death_rate":"7.3"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"201","death_rate":"23.6","age_adjusted_death_rate":"31.8"}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"388","death_rate":"28.9","age_adjusted_death_rate":"24.2"}
,{"year":"2010","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"211","death_rate":"15.7","age_adjusted_death_rate":"14.5"}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"245","death_rate":"18.3","age_adjusted_death_rate":"15.6"}
,{"year":"2010","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"18","death_rate":"3.2","age_adjusted_death_rate":"4"}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"4495","death_rate":"335.1","age_adjusted_death_rate":"277"}
,{"year":"2010","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"32","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1540","death_rate":"180.9","age_adjusted_death_rate":"224.1"}
,{"year":"2010","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"308","death_rate":"59.2","age_adjusted_death_rate":"77.2"}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"51","death_rate":"9.1","age_adjusted_death_rate":"11.3"}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Hispanic","deaths":"219","death_rate":"18","age_adjusted_death_rate":"21.5"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"707","death_rate":"49.4","age_adjusted_death_rate":"24.8"}
,{"year":"2010","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Viral Hepatitis (B15-B19)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Hispanic","deaths":"156","death_rate":"12.8","age_adjusted_death_rate":"15.4"}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Hispanic","deaths":"58","death_rate":"4.8","age_adjusted_death_rate":"5.2"}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"64","death_rate":"12.3","age_adjusted_death_rate":"15.5"}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"25","death_rate":"4.4","age_adjusted_death_rate":"5.1"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Hispanic","deaths":"228","death_rate":"18.7","age_adjusted_death_rate":"23.1"}
,{"year":"2010","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Hispanic","deaths":"150","death_rate":"13.1","age_adjusted_death_rate":"17.6"}
,{"year":"2010","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"18","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Hispanic","deaths":"187","death_rate":"16.4","age_adjusted_death_rate":"27.3"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Insitu or Benign / Uncertain Neoplasms (D00-D48)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Hispanic","deaths":"71","death_rate":"5.8","age_adjusted_death_rate":"7.5"}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"171","death_rate":"20.1","age_adjusted_death_rate":"23.9"}
,{"year":"2010","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"52","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"28","death_rate":"5","age_adjusted_death_rate":"6.7"}
,{"year":"2010","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"258","death_rate":"18","age_adjusted_death_rate":"11.1"}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"70","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"33","death_rate":"5.9","age_adjusted_death_rate":"7.1"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Hispanic","deaths":"235","death_rate":"20.6","age_adjusted_death_rate":"38.9"}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"178","death_rate":"20.9","age_adjusted_death_rate":"27.7"}
,{"year":"2010","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"46","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Hispanic","deaths":"149","death_rate":"13","age_adjusted_death_rate":"23.9"}
,{"year":"2010","leading_cause":"Mental and Behavioral Disorders due to Use of Alcohol (F10)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Hispanic","deaths":"168","death_rate":"13.8","age_adjusted_death_rate":"16.7"}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Hispanic","deaths":"140","death_rate":"12.3","age_adjusted_death_rate":"21.4"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"25","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"394","death_rate":"70.1","age_adjusted_death_rate":"89.7"}
,{"year":"2010","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"206","death_rate":"19.6","age_adjusted_death_rate":"17.7"}
,{"year":"2010","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"74","death_rate":"13.2","age_adjusted_death_rate":"16.9"}
,{"year":"2010","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Hispanic","deaths":"79","death_rate":"6.5","age_adjusted_death_rate":"6.5"}
,{"year":"2010","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Hispanic","deaths":"1354","death_rate":"118.5","age_adjusted_death_rate":"215.5"}
,{"year":"2010","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"252","death_rate":"24","age_adjusted_death_rate":"21.4"}
,{"year":"2010","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Hispanic","deaths":"1167","death_rate":"102.1","age_adjusted_death_rate":"150"}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Hispanic","deaths":"84","death_rate":"7","age_adjusted_death_rate":"8.8"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"17","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"3236","death_rate":"240.5","age_adjusted_death_rate":"205.6"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"5168","death_rate":"384.2","age_adjusted_death_rate":"319.8"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"220","death_rate":"43.1","age_adjusted_death_rate":"56.1"}
,{"year":"2009","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Hispanic","deaths":"145","death_rate":"12.9","age_adjusted_death_rate":"13.5"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"1684","death_rate":"117.2","age_adjusted_death_rate":"77.2"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"245","death_rate":"23.4","age_adjusted_death_rate":"21.3"}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"188","death_rate":"18","age_adjusted_death_rate":"16.4"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"11","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"220","death_rate":"40.1","age_adjusted_death_rate":"48.9"}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Hispanic","deaths":"96","death_rate":"8","age_adjusted_death_rate":"8.1"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"390","death_rate":"27.1","age_adjusted_death_rate":"15.2"}
,{"year":"2009","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"371","death_rate":"27.6","age_adjusted_death_rate":"23.3"}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"48","death_rate":"9.4","age_adjusted_death_rate":"13.3"}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Hispanic","deaths":"119","death_rate":"10.6","age_adjusted_death_rate":"14.1"}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Hispanic","deaths":"172","death_rate":"15.3","age_adjusted_death_rate":"25.4"}
,{"year":"2009","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Hispanic","deaths":"215","death_rate":"18","age_adjusted_death_rate":"22.2"}
,{"year":"2009","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"208","death_rate":"19.9","age_adjusted_death_rate":"17.9"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Hispanic","deaths":"143","death_rate":"12.7","age_adjusted_death_rate":"21.1"}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Hispanic","deaths":"1097","death_rate":"91.6","age_adjusted_death_rate":"107.2"}
,{"year":"2009","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Septicemia (A40-A41)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"14","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"506","death_rate":"99.1","age_adjusted_death_rate":"127"}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Hispanic","deaths":"183","death_rate":"16.3","age_adjusted_death_rate":"30.9"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"2068","death_rate":"243.5","age_adjusted_death_rate":"318.9"}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Hispanic","deaths":"1180","death_rate":"105.1","age_adjusted_death_rate":"172.2"}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1735","death_rate":"165.7","age_adjusted_death_rate":"151.1"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"111","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"84","death_rate":"16.5","age_adjusted_death_rate":"26.1"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Hispanic","deaths":"154","death_rate":"12.9","age_adjusted_death_rate":"16"}
,{"year":"2009","leading_cause":"Congenital Malformations, Deformations, and Chromosomal Abnormalities (Q00-Q99)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"448","death_rate":"81.6","age_adjusted_death_rate":"108.7"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"18","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"329","death_rate":"38.7","age_adjusted_death_rate":"38.5"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"94","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Hispanic","deaths":"1382","death_rate":"123.1","age_adjusted_death_rate":"227.9"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"40","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"79","death_rate":"7.5","age_adjusted_death_rate":"6.8"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Hispanic","deaths":"775","death_rate":"64.7","age_adjusted_death_rate":"75.3"}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"83","death_rate":"15.1","age_adjusted_death_rate":"20.3"}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"148","death_rate":"11","age_adjusted_death_rate":"9.1"}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"55","death_rate":"10.8","age_adjusted_death_rate":"12.3"}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"629","death_rate":"43.8","age_adjusted_death_rate":"23.1"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"2535","death_rate":"242.1","age_adjusted_death_rate":"220.9"}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Hispanic","deaths":"111","death_rate":"9.9","age_adjusted_death_rate":"18.3"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"6297","death_rate":"438.3","age_adjusted_death_rate":"226.2"}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"227","death_rate":"21.7","age_adjusted_death_rate":"19.6"}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"16","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Hispanic","deaths":"196","death_rate":"17.5","age_adjusted_death_rate":"20"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"5","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"51","death_rate":"10","age_adjusted_death_rate":"16.9"}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"229","death_rate":"15.9","age_adjusted_death_rate":"9.5"}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":"19","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"134","death_rate":"15.8","age_adjusted_death_rate":"16.8"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"61","death_rate":"11.1","age_adjusted_death_rate":"14.1"}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Hispanic","deaths":"56","death_rate":"4.7","age_adjusted_death_rate":"5.3"}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"178","death_rate":"12.4","age_adjusted_death_rate":"8.3"}
,{"year":"2009","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"75","death_rate":"5.2","age_adjusted_death_rate":"5.1"}
,{"year":"2009","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"384","death_rate":"36.7","age_adjusted_death_rate":"33.7"}
,{"year":"2009","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"17","death_rate":"3.3","age_adjusted_death_rate":"3.5"}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"290","death_rate":"21.6","age_adjusted_death_rate":"18.2"}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"1305","death_rate":"124.6","age_adjusted_death_rate":"117.3"}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"3346","death_rate":"232.9","age_adjusted_death_rate":"159"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"38","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Hispanic","deaths":"155","death_rate":"12.9","age_adjusted_death_rate":"16"}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"41","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Atherosclerosis (I70)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"26","death_rate":"5.1","age_adjusted_death_rate":"7.2"}
,{"year":"2009","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"8","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"154","death_rate":"18.1","age_adjusted_death_rate":"22.8"}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"281","death_rate":"26.8","age_adjusted_death_rate":"24.5"}
,{"year":"2009","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"35","death_rate":"6.9","age_adjusted_death_rate":"6.7"}
,{"year":"2009","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"14","death_rate":"2.5","age_adjusted_death_rate":"3.6"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"55","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1557","death_rate":"183.4","age_adjusted_death_rate":"228.8"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"227","death_rate":"16.9","age_adjusted_death_rate":"14.2"}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"37","death_rate":"6.7","age_adjusted_death_rate":"8"}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"207","death_rate":"24.4","age_adjusted_death_rate":"33.3"}
,{"year":"2009","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"10","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"F","race_ethnicity":"Hispanic","deaths":"1349","death_rate":"112.7","age_adjusted_death_rate":"143.8"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"58","death_rate":"11.4","age_adjusted_death_rate":"15.5"}
,{"year":"2009","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"205","death_rate":"14.3","age_adjusted_death_rate":"6.5"}
,{"year":"2009","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"F","race_ethnicity":"Hispanic","deaths":"57","death_rate":"4.8","age_adjusted_death_rate":"4.7"}
,{"year":"2009","leading_cause":"Cerebrovascular Disease (Stroke: I60-I69)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Other Race/ Ethnicity","deaths":"12","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"147","death_rate":"17.3","age_adjusted_death_rate":"22.6"}
,{"year":"2009","leading_cause":"Alzheimer's Disease (G30)","sex":"F","race_ethnicity":"Hispanic","deaths":"56","death_rate":"4.7","age_adjusted_death_rate":"6.2"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Hispanic","deaths":"1067","death_rate":"95","age_adjusted_death_rate":"138.1"}
,{"year":"2009","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Black Non-Hispanic","deaths":"75","death_rate":"7.2","age_adjusted_death_rate":"6.7"}
,{"year":"2009","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"191","death_rate":"14.2","age_adjusted_death_rate":"13"}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"55","death_rate":"10","age_adjusted_death_rate":"12.7"}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"F","race_ethnicity":"Hispanic","deaths":"216","death_rate":"18","age_adjusted_death_rate":"22.8"}
,{"year":"2009","leading_cause":"Mental and Behavioral Disorders due to Accidental Poisoning and Other Psychoactive Substance Use (F11-F16, F18-F19, X40-X42, X44)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"221","death_rate":"16.4","age_adjusted_death_rate":"14.8"}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"398","death_rate":"72.5","age_adjusted_death_rate":"83.5"}
,{"year":"2009","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"285","death_rate":"33.6","age_adjusted_death_rate":"41.4"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"1246","death_rate":"146.7","age_adjusted_death_rate":"167.7"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"1818","death_rate":"135.1","age_adjusted_death_rate":"118.5"}
,{"year":"2009","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"47","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"131","death_rate":"15.4","age_adjusted_death_rate":"19"}
,{"year":"2009","leading_cause":"Influenza (Flu) and Pneumonia (J09-J18)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"555","death_rate":"41.3","age_adjusted_death_rate":"34.3"}
,{"year":"2009","leading_cause":"Diseases of Heart (I00-I09, I11, I13, I20-I51)","sex":"M","race_ethnicity":"Asian and Pacific Islander","deaths":"554","death_rate":"108.5","age_adjusted_death_rate":"158.8"}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"215","death_rate":"15","age_adjusted_death_rate":"7.8"}
,{"year":"2009","leading_cause":"Intentional Self-Harm (Suicide: X60-X84, Y87.0)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"17","death_rate":"3.1","age_adjusted_death_rate":"3.1"}
,{"year":"2009","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"26","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"18","death_rate":"3.3","age_adjusted_death_rate":"4.6"}
,{"year":"2009","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Black Non-Hispanic","deaths":"255","death_rate":"30","age_adjusted_death_rate":"30"}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"6","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"Hispanic","deaths":"170","death_rate":"15.1","age_adjusted_death_rate":"17.9"}
,{"year":"2009","leading_cause":"Nephritis, Nephrotic Syndrome and Nephrisis (N00-N07, N17-N19, N25-N27)","sex":"F","race_ethnicity":"Other Race/ Ethnicity","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Asian and Pacific Islander","deaths":"30","death_rate":"5.5","age_adjusted_death_rate":"7.4"}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"458","death_rate":"31.9","age_adjusted_death_rate":"19.1"}
,{"year":"2009","leading_cause":"Human Immunodeficiency Virus Disease (HIV: B20-B24)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Certain Conditions originating in the Perinatal Period (P00-P96)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":".","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Chronic Lower Respiratory Diseases (J40-J47)","sex":"F","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2009","leading_cause":"Accidents Except Drug Posioning (V01-X39, X43, X45-X59, Y85-Y86)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"279","death_rate":"20.7","age_adjusted_death_rate":"18.7"}
,{"year":"2009","leading_cause":"Assault (Homicide: Y87.1, X85-Y09)","sex":"M","race_ethnicity":"Not Stated/Unknown","deaths":"7","death_rate":".","age_adjusted_death_rate":"."}
,{"year":"2008","leading_cause":"Diabetes Mellitus (E10-E14)","sex":"M","race_ethnicity":"White Non-Hispanic","deaths":"246","death_rate":"18.3","age_adjusted_death_rate":"15.6"}
,{"year":"2008","leading_cause":"Malignant Neoplasms (Cancer: C00-C97)","sex":"F","race_ethnicity":"Hispanic","deaths":"1046","death_rate":"88.5","age_adjusted_death_rate":"104.7"}
,{"year":"2008","leading_cause":"Essential Hypertension and Renal Diseases (I10, I12)","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"151","death_rate":"10.5","age_adjusted_death_rate":"5.9"}
,{"year":"2008","leading_cause":"Chronic Liver Disease and Cirrhosis (K70, K73)","sex":"M","race_ethnicity":"Hispanic","deaths":"149","death_rate":"13.5","age_adjusted_death_rate":"16.8"}
,{"year":"2008","leading_cause":"All Other Causes","sex":"F","race_ethnicity":"White Non-Hispanic","deaths":"1706","death_rate":"118.9","age_adjusted_death_rate":"78.6"}
]








export default data;