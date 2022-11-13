import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import MainAppbar from '../components/bars/MainAppbar';

import { View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <MainAppbar contentTitle={'Three'} elevated />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Card style={{marginTop: 16, marginHorizontal: 16}}>
          <Card.Title title="Card One" subtitle="Card One Subtitle"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/id/243/200/300' }} />
        </Card>
        <Card style={{marginTop: 16, marginHorizontal: 16}}>
          <Card.Title title="Card Two Title" subtitle="Card Two Subtitle"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/id/244/200/300' }} />
        </Card>
        <Card style={{marginTop: 16, marginHorizontal: 16, marginBottom: 16}}>
          <Card.Title title="Card Three Title" subtitle="Card Three Subtitle"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/id/245/200/300' }} />
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
