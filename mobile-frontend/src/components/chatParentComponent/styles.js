import { StyleSheet } from "react-native";
import lightTheme from "../../themes/lightTheme";
const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    // width 100% maane ki nahi ya stretch assume karle invisible parent ki properties
  },
  headerOuterContainer: {
    backgroundColor: lightTheme.bgc.baseOlive,
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: '3%',
    paddingTop: '4%',
    marginTop: 0,
  },
  titleText: {
    fontSize: 28,
    fontWeight: '500',
    color: lightTheme.txtc.white,
  },
  ctasOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '33%',
  },

  ctaContainer: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.bgc.grey,
    //alignItems stretch for text, where will it come, flexstart , or center , or will it be really stretched 
  },
  tabViewParent: {
    backgroundColor: lightTheme.bgc.grey,
    // height: '20%',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingHorizontal: '3%',
  },

})

export default styles;