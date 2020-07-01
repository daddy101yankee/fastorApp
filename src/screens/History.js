import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class History extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Image
          source={require('../assets/moveforward.png')}
          style={{transform: [{rotate: '180deg'}]}}
        />
        <Text style={styles.txt}>Orders</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View>
            <Text>Total</Text>
            <Text style={styles.txt}>23010</Text>
            <Text>Restraunt</Text>
            <Text style={styles.txt}>23010</Text>
          </View>
          <View>
            <Text>Orders</Text>
            <Text style={styles.txt}>1207</Text>
            <Text>Fastor</Text>
            <Text style={styles.txt}>1207</Text>
          </View>
        </View>
        
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={({item}) => <Item title={item.title} />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt: {fontSize: 25, fontWeight: 'bold'},
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#E0E0E0',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});
