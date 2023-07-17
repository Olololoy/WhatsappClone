import React from 'react';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {ROUTES} from './constants';
//screen component imports
import MainChatScreen from '../screens/chatScreen';
import ChatContactList from '../screens/mainScreen';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.CONTACT_LIST}
      > 
      <Stack.Screen
        name={ROUTES.CONTACT_LIST}
        component={ChatContactList}
        options={{headerShown: false,}}
      />
      <Stack.Screen
        name={ROUTES.MESSAGE_WINDOW}
        component={MainChatScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name={ROUTES.INFO_PAGE}
        component={SearchStockWithErrorBoundary}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
