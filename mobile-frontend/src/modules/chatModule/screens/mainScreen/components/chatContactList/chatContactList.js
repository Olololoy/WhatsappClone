import React from 'react';
import {View, Text, Pressable, FlatList} from 'react-native';
import ContactBanner from '../../../../../../components/contactBanner/contactBanner';
import styles from './styles';
// import {Archive} from 'react-native-vector-icons/MaterialIcons';


function ChatContactList ({navigation}) {

  const Data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
    {id: 14},
  ];

  const renderItemContact = ({item}) => {
    return (
      <ContactBanner navigation={navigation}/>
    );
  }

  const listHeaderRenderer = () => {
    return (
      <Pressable
      style={styles.archivedTextContainer}
      onPress={()=>{null}}
      >
        <View
        style={styles.archiveSvgContainer}
        >
        </View>
        <Text style={styles.archiveText}>
          Archived
        </Text>
      </Pressable>
    )
  }



  return (
    <View style={styles.rootView}>
      <FlatList
      data={Data}
      renderItem={renderItemContact}
      ListHeaderComponent={listHeaderRenderer}
      />
    </View>
  )

}

export default ChatContactList;
