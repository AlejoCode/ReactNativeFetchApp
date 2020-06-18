import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
    color: '#ffffff'
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
    color: '#ffffff'

  },
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../IMG_20200616_163141.jpg')}
        />
        <Text style={styles.name}>Full Stack Dev</Text>
      </View>

      <Text
        style={styles.item}
      >
        Daniel Alejandro Salgado 
      </Text>

      <Text
        style={styles.item}
      >
        daniel.salgado02@gmail.com
      </Text>
      <Text
        style={styles.item}
      >
       +57 3045648027
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};