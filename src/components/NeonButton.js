import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NeonButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <LinearGradient
        colors={['#00FFFF', '#007FFF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    color: '#121212',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },  
});

export default NeonButton;
