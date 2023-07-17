import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {NoProfile} from '../../assets/svgs';
import styles from './styles';

function ContactBanner(props) {
  
  return(
    <TouchableOpacity 
    style={styles.rootContainer}
    onPress={() => {console.log('lmaooo'); return null;}}
    >
      <View style={styles.imageContainer}>
        <NoProfile {...styles.profileSVG}/>
      </View>
      <View style={styles.nameNdescContainer}>
        <Text style={styles.contactNameText}>
          Test Khandelwal
        </Text>
        <Text style={styles.contactDescText}>
          Test Desc pagaliya anusha hai
        </Text>
      </View>
      <View style={styles.timeNiconContainer}>
        <Text style={styles.timeText}>
        Yesterday
        </Text>
        <View style={styles.iconContainer}>

        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ContactBanner;