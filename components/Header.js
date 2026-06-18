import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../theme';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.ornamentTop}>Bismillahirrahmanirrahim</Text>
      <Text style={styles.title}>Liste Sıralama Programı</Text>
      
      <View style={styles.ornamentLineContainer}>
        <View style={styles.lineLeft} />
        <Text style={styles.ornamentCenter}>✧</Text>
        <View style={styles.lineRight} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 24,
  },
  ornamentTop: {
    color: COLORS.accentPrimary,
    fontSize: 18,
    opacity: 0.8,
    paddingVertical: 8,
    fontFamily: FONTS.arabic,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontFamily: FONTS.serif,
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textCream,
    lineHeight: 30,
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
    marginBottom: 10,
    textAlign: 'center',
  },
  ornamentLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    width: '100%',
  },
  lineLeft: {
    height: 1,
    flex: 1,
    maxWidth: 80,
    backgroundColor: COLORS.accentPrimary,
    opacity: 0.4,
    marginRight: 12,
  },
  lineRight: {
    height: 1,
    flex: 1,
    maxWidth: 80,
    backgroundColor: COLORS.accentPrimary,
    opacity: 0.4,
    marginLeft: 12,
  },
  ornamentCenter: {
    color: COLORS.accentPrimary,
    fontSize: 20,
    opacity: 0.8,
  },
});
