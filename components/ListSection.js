import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES, SHADOWS } from '../theme';

export default function ListSection({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <View style={styles.panel}>
      <View style={styles.panelHeader}>
        <Text style={styles.title}>Sıralanmış Sonuçlar ({items.length})</Text>
      </View>
      <ScrollView style={styles.panelBody} contentContainerStyle={styles.listBody}>
        {items.map((item, index) => (
          <View key={`${item}-${index}`} style={styles.listItem}>
            <Text style={styles.itemIndex}>{index + 1}.</Text>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: COLORS.bgCard,
    borderWidth: 1,
    borderColor: COLORS.borderOrnament,
    borderRadius: SIZES.radiusLg,
    flex: 1,
    overflow: 'hidden',
    ...SHADOWS.sm,
    marginBottom: 20,
    minHeight: 200,
  },
  panelHeader: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderSubtle,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: 16,
    color: COLORS.textCream,
    fontWeight: '600',
    fontFamily: FONTS.serif,
  },
  panelBody: {
    maxHeight: 400,
  },
  listBody: {
    padding: 18,
    gap: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.bgTertiary,
    borderWidth: 1,
    borderColor: COLORS.borderSubtle,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: SIZES.radiusSm,
  },
  itemIndex: {
    color: COLORS.accentPrimary,
    fontFamily: FONTS.serif,
    fontWeight: 'bold',
    marginRight: 10,
    width: 30,
  },
  itemText: {
    fontSize: 16,
    color: COLORS.textPrimary,
    fontFamily: FONTS.serif,
    flex: 1,
  },
});
