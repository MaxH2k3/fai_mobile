const Mulish_Bold = {fontFamily: 'Mulish-Bold'};
const Mulish_Regular = {fontFamily: 'Mulish-Regular'};
const Mulish_SemiBold = {fontFamily: 'Mulish-SemiBold'};

export const fonts = {
  // H1-5
  H1: {...Mulish_Bold, fontSize: 32, lineHeight: 32 * 1.2},
  H2: {...Mulish_Bold, fontSize: 22, lineHeight: 22 * 1.2},
  H3: {...Mulish_Bold, fontSize: 20, lineHeight: 20 * 1.2},
  H4: {...Mulish_SemiBold, fontSize: 18, lineHeight: 18 * 1.2},
  H5: {...Mulish_SemiBold, fontSize: 16, lineHeight: 16 * 1.2},
  // TS 14-16
  // textStyle_14: {...DMSans_400Regular, fontSize: 14, lineHeight: 14 * 1.5},
  // textStyle_16: {...DMSans_400Regular, fontSize: 16, lineHeight: 16 * 1.7},
  // Inter & DMSans
  Mulish_Bold: {...Mulish_Bold},
  Mulish_Regular: {...Mulish_Regular},
  Mulish_SemiBold: {...Mulish_SemiBold},
};
