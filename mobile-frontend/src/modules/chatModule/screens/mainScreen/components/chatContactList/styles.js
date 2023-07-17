import { StyleSheet } from "react-native";
import lightTheme from "../../../../../../themes/lightTheme";
import cfs from "../../../../../../themes/fontStyles";
import {ms, mvs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  archivedTextContainer: {
    paddingHorizontal: ms(12),
    height: mvs(40),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mvs(11),
    // borderWidth: 0.4,
    // marginVertical: mvs(3),
    backgroundColor: lightTheme.bgc.white,
  },
  archiveText: {
    ...cfs.bannerTitle,
    color: lightTheme.txtc.black,
    marginLeft: ms(5),
  },
  archiveSvgContainer: {
    borderRadius: ms(15),
    width: ms(30),
    height: ms(30),
    marginLeft: ms(22),
    backgroundColor: '#80808080',
  },
  rootView: {
    flex: 1, 
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
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