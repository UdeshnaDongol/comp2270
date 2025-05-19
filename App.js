import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, Picker } from 'react-native';




export default function App() {
  const [selectedDog, setSelectedDog] = useState("");
  const [selectedService, setSelectedService] = useState("");


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.heading}>Sigma Dog Care System (SDCS)</Text>
        <Image
          source={{ uri: 'https://s10443.pcdn.co/wp-content/uploads/2018/01/GettyImages-847808270-1.jpg' }}
          style={styles.image}
        />


       
        <Text style={styles.subHeading}>Select a Dog + Cost</Text>
        <Picker
          selectedValue={selectedDog}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedDog(itemValue)}
        >
          <Picker.Item label="Finn - $15" value="Finn-$15" />
          <Picker.Item label="Bluey - $18" value="Bluey-$18" />
          <Picker.Item label="Charlie - $22" value="Charlie-$22" />
          <Picker.Item label="Max - $20" value="Max-$20" />
          <Picker.Item label="Buddy - $20" value="Buddy-$20" />
        </Picker>


       
        <Text style={styles.subHeading}>Select a Service + Cost</Text>
        <Picker
          selectedValue={selectedService}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedService(itemValue)}
        >
          <Picker.Item label="Grooming - $20" value="Grooming-$20" />
          <Picker.Item label="Walking - $10" value="Walking-$10" />
          <Picker.Item label="Training - $25" value="Training-$25" />
          <Picker.Item label="Vet Check - $30" value="VetCheck-$30" />
          <Picker.Item label="Daycare - $10" value="Daycare-$10" />
        </Picker>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffcc',
  },
  row1: {
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    marginTop: 50,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Times New Roman',
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  picker: {
    width: 200,
    height: 30,
    marginTop: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 150,
    marginTop: 10,
    borderRadius: 15,
    borderWidth:3,
    borderColor:'orange'
  },
});





