import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import MainPageParentComponent from './src/components/chatParentComponent/mainPageParentComponent';


function App(){ 
  return (
  <GestureHandlerRootView style={{flex: 1, backgroundColor: 'blue'}}>        
    {/* <Provider store={store}> */}
      {/* <AppScreen /> */}
      <MainPageParentComponent/>
    {/* </Provider> */}
  </GestureHandlerRootView>
  );
}

export default App;



// const a = function (name) {
//   // bla bla bla
//   return function (dispatch) {
//     dispatch({
//       type: SET_USER_NAME,
//       payoad: name,
//     });
//   }
// }

// a('lolwa');  // XXX


// dispatch = useDispatch(); // returns a function definition / reference 
// dispatch(a('lolwa'));
// dispatch(func) {
//   func()
//   return null;
// }


