import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../theme';

export default function InputSection({ words, setWords }) {
  return (
    <View style={styles.panel}>
      <View style={styles.panelHeader}>
        <Text style={styles.headerTitle}>Sıralanacak Listeyi Girin</Text>
      </View>
      <View style={styles.panelBody}>
        <TextInput
          style={styles.textArea}
          placeholder="Öğeleri virgülle veya alt alta yazın..."
          placeholderTextColor={COLORS.textMuted}
          multiline
          numberOfLines={6}
          value={words}
          onChangeText={setWords}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: COLORS.bgCard,
    borderWidth: 1,
    borderColor: COLORS.borderOrnament,
    borderRadius: SIZES.radiusLg,
    marginBottom: 20,
    overflow: 'hidden',
    ...SHADOWS.sm,
  },
  panelHeader: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSubtle,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: COLORS.textCream,
    fontWeight: '600',
    fontFamily: FONTS.serif,
  },
  panelBody: {
    padding: 18,
  },
  textArea: {
    backgroundColor: COLORS.bgTertiary,
    borderWidth: 1,
    borderColor: COLORS.borderSubtle,
    borderRadius: SIZES.radiusMd,
    padding: 16,
    color: COLORS.textPrimary,
    fontFamily: FONTS.serif,
    fontSize: 16,
    minHeight: 120,
    textAlignVertical: 'top',
  },
});
