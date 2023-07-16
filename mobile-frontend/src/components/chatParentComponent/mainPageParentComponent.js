import React, {useState} from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import {TabView, SceneMap } from 'react-native-tab-view';
import styles from './styles';
import en from '../../localization';
import {tabViewRoutes} from './constants';
import MainChatScreen from '../../modules/chatModule/screens/mainScreen/';
import MainStatusScreen from '../../modules/statusModule/screens/mainStatusScreen/mainStatusScreen';
import MainVcScreen from '../../modules/vcModule/screens/mainVcScreen/mainStatusScreen';



function MainPageParentComponent () {
  
  const [index, setindex] = useState(0);

  const scene = SceneMap({
    chats: MainChatScreen,
    status: MainStatusScreen,
    calls: MainVcScreen,
  });



  function onPressCamera() {
    null;
  }

  function onPressSearch() {
    null;
  }

  function onPressMenu() {
    null;
  }

return (
  <SafeAreaView style={styles.safeAreaViewContainer}>
    <View style={styles.headerOuterContainer}>
      <View>
        <Text style={styles.titleText}>
          {en.whatsapp}
        </Text>
      </View>
      <View style={styles.ctasOuterContainer}>
        <TouchableOpacity
          onPress={() => onPressCamera()}
          style={styles.ctaContainer}
        >
          <Text 
          style={{fontSize: 28}}
          >
          C
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressSearch()}
          style={styles.ctaContainer}
        >
          <Text 
            style={{fontSize: 28}}
          >
          S
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressMenu()}
          style={styles.ctaContainer}
        >
          <Text 
            style={{fontSize: 28}}
          >
          M
          </Text>
        </TouchableOpacity>
      </View>
    </View>
      {/* 
          doubt with rerenders, whatsapp top header ka alag component banana better hoga kya rerendering ke wajah se
            components probably give two functionalities
              reusability
              sectional rerendering
      */}
    {/* <View style={styles.tabViewParent}>
      
    </View> */}
    <TabView
      navigationState={{index, routes: tabViewRoutes}}
      onIndexChange={setindex}
      renderScene={scene}
    />
  </SafeAreaView>
  )
}
export default MainPageParentComponent;