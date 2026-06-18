import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, StatusBar, Text } from 'react-native';
import { COLORS, FONTS } from './theme';

import Header from './components/Header';
import InputSection from './components/InputSection';
import SortControls from './components/SortControls';
import ListSection from './components/ListSection';

export default function App() {
  const [words, setWords] = useState('');
  const [sortedItems, setSortedItems] = useState([]);

  const parseItems = (text) => {
    return text.split(/[\n,]+/).map(w => w.trim()).filter(w => w !== '');
  };

  const handleSortAsc = () => {
    const items = parseItems(words);
    if (items.length === 0) return;

    items.sort((a, b) => {
      // Check if both are numbers
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }
      return a.localeCompare(b, 'tr', { numeric: true });
    });

    setSortedItems(items);
  };

  const handleSortDesc = () => {
    const items = parseItems(words);
    if (items.length === 0) return;

    items.sort((a, b) => {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      if (!isNaN(numA) && !isNaN(numB)) {
        return numB - numA;
      }
      return b.localeCompare(a, 'tr', { numeric: true });
    });

    setSortedItems(items);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.bgPrimary} />
      
      <View style={styles.backgroundOverlay} />
      
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Header />

        <InputSection words={words} setWords={setWords} />

        <SortControls 
          onSortAsc={handleSortAsc} 
          onSortDesc={handleSortDesc} 
          isDisabled={!words.trim()} 
        />

        <ListSection items={sortedItems} />

        <Text style={styles.ornamentBottom}>✧ ✧ ✧</Text>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Yapımcı: Yurtseven</Text>
          <Text style={styles.footerText}>Dua Etmeyi Unutmayınız</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bgPrimary,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(196, 154, 60, 0.02)', 
    zIndex: -1,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  ornamentBottom: {
    textAlign: 'center',
    color: COLORS.accentPrimary,
    fontSize: 18,
    letterSpacing: 12,
    opacity: 0.5,
    marginTop: 30,
  },
  footer: {
    alignItems: 'center',
    paddingTop: 30,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.borderSubtle,
  },
  footerText: {
    color: COLORS.textMuted,
    fontFamily: FONTS.serif,
    fontSize: 14,
    lineHeight: 24,
  },
});
