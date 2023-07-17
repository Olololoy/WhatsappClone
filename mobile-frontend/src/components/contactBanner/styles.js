import { StyleSheet } from "react-native";
import lightTheme from "../../themes/lightTheme";
import cfs from "../../themes/fontStyles";
import {ms, mvs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  rootContainer: {
    paddingHorizontal: ms(12),
    height: mvs(60),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(8),
    // borderWidth: 0.4,
    marginVertical: mvs(3),
    // backgroundColor: lightTheme.bgc.baseOlive,
  },
  imageContainer: {
    borderRadius: ms(10),
    width: ms(20),
    height: ms(20),
    marginRight: ms(20),
  },
  nameNdescContainer: {
    height: mvs(20),
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: ms(70),
    flex: 1,
    marginLeft: ms(10),
  },
  contactNameText: {
    ...cfs.bannerTitle,
    color: lightTheme.txtc.black,

  },
  contactDescText: {
    ...cfs.bannerDesc,
    color: lightTheme.txtc.black,
  },
  timeNiconContainer: {
    height: '100%',
    maxWidth: ms(50),
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  timeText: {
    ...cfs.bannerDesc,
    color: lightTheme.txtc.black,
  },
  imageContainer: {
    // borderRadius: ms(22),
    width: ms(44),
    height: ms(44),
    marginRight: ms(2),
    // backgroundColor:'green',
  },
  profileSVG: {
    // borderRadius: ms(5),
    width: ms(44),
    height: ms(44),
    // marginRight: ms(2),
  },

  



  // ctasOuterContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   width: '33%',
  // },

  // ctaContainer: {
  //   width: '25%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: lightTheme.bgc.grey,
  //   //alignItems stretch for text, where will it come, flexstart , or center , or will it be really stretched 
  // },
  // tabViewParent: {
  //   backgroundColor: lightTheme.bgc.grey,
  //   // height: '20%',
  //   // flexDirection: 'row',
  //   // justifyContent: 'space-between',
  //   // paddingHorizontal: '3%',
  // },

})

export default styles;