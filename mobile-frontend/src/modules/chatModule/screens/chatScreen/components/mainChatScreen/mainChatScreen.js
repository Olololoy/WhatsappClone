import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';

const NonGroupText = (item, uId) => {
  const sent = (uId === item.uId ? true : false);
  return (<View style={{
    ...styles.messageContainer.common,
    ...(sent ? styles.messageContainer.sent : styles.messageContainer.received),
  }}>
    <Text style={styles.messageText}>
      {item.message}
    </Text>
    <Text style={styles.timeText}>
      {item.timeStamp}
    </Text>
  </View>
  );
}

const GroupText = () => {
  
}


const MainChatScreen = ({navigation}, uId) => {

  const renderMessageItem = ({item}) => {
    if(isGroup){

    } else {
      <NonGroupText uId={uId} item={item}/>
    }
    return null;
  }

  const onBackPress = () => {
    navigation.goBack();
  }



  return(
    <View style={styles.rootContainer}>
      {/* <Header onBack={onBackPress}
      /> */}
      <FlatList
      data={Data}
      renderItem={renderMessageItem}
      style={styles.flatlistContainer}
      contentContainerStyle={styles.flatlistContentContainerStyles}
      inverted
      ListHeaderComponent
      ListFooterComponent
      />
      {/* <Footer/> */}
    </View>
  );
}

export default MainChatScreen ; 