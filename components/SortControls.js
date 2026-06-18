import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../theme';

export default function SortControls({ onSortAsc, onSortDesc, isDisabled }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.btn, isDisabled && styles.btnDisabled]} 
        onPress={onSortAsc}
        disabled={isDisabled}
      >
        <Text style={[styles.btnText, isDisabled && styles.btnTextDisabled]}>Küçükten Büyüğe (A-Z)</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btn, isDisabled && styles.btnDisabled]} 
        onPress={onSortDesc}
        disabled={isDisabled}
      >
        <Text style={[styles.btnText, isDisabled && styles.btnTextDisabled]}>Büyükten Küçüğe (Z-A)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 20,
  },
  btn: {
    flex: 1,
    backgroundColor: COLORS.accentPrimary,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: SIZES.radiusLg,
    alignItems: 'center',
    ...SHADOWS.glow,
  },
  btnDisabled: {
    backgroundColor: COLORS.bgTertiary,
    shadowOpacity: 0,
    elevation: 0,
  },
  btnText: {
    color: COLORS.bgPrimary,
    fontSize: 14,
    fontFamily: FONTS.serif,
    fontWeight: '700',
    textAlign: 'center',
  },
  btnTextDisabled: {
    color: COLORS.textMuted,
  },
});
