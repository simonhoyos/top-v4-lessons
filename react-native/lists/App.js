import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native';

const data = [
  { id: '1', name: 'arepa', price: '5' },
  { id: '2', name: 'mantequilla', price: '7' },
  { id: '3', name: 'leche', price: '4' },
];

const sectionData = [
  { header: 'A', data: [{ id: 1, name: 'Ana' }] },
  { header: 'J', data: [{ id: 2, name: 'Juan' }] },
  { header: 'M', data: [{ id: 3, name: 'Maria' }] },
  { header: 'S', data: [{ id: 4, name: 'Simon' }] }
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
        keyExtractor={({ id }) => `product_${id}`}
      />
      <SectionList
        sections={sectionData}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.title}>{section.header}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold'
  }
});
