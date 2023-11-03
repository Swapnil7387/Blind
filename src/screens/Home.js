// HomeScreen.js
import * as React from 'react';
import {View, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View>
      <Button
        title="Enter a text"
        onPress={() => navigation.navigate('EnterText')}
      />
      <Button
        title="Scan the text"
        onPress={() => navigation.navigate('ScanText')}
      />
    </View>
  );
}

export default Home;
