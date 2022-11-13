import { View } from '../components/Themed';
import { ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Card style={{marginTop: 16, marginHorizontal: 16}}>
          <Card.Title title="Card One" subtitle="Card One Subtitle"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/id/240/200/300' }} />
        </Card>
        <Card style={{marginTop: 16, marginHorizontal: 16}}>
          <Card.Title title="Card Two Title" subtitle="Card Two Subtitle"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/id/241/200/300' }} />
        </Card>
        <Card style={{marginTop: 16, marginHorizontal: 16, marginBottom: 16}}>
          <Card.Title title="Card Three Title" subtitle="Card Three Subtitle"/>
          <Card.Cover source={{ uri: 'https://picsum.photos/id/242/200/300' }} />
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

