import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Image, Picker, Button } from 'react-native';

export default function App() {
  const [selectedDog, setSelectedDog] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [dogHours, setDogHours] = useState("");
  const [serviceQty, setServiceQty] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const extractPrice = (item) => {
    const match = item.match(/\$(\d+)/);  //look for a dollar sign (the \ escapes it so it’s treated as a real $).(\d+) → capture one or more digits (\d means digit, + means "1 or more").//
    return match ? parseInt(match[1], 10) : 0;  
  };              //parseInt(match[1], 10) turns "18" (a string) into 18 (a number).if no match is found (e.g., string doesn’t contain $ and digits), it returns 0.//

  const handleCalculate = () => {
    if (!selectedDog || !selectedService || !dogHours || !serviceQty) {
    setTotalPrice(0);
    return;
  }
    const dogPrice = extractPrice(selectedDog) * parseInt(dogHours);
    const servicePrice = extractPrice(selectedService) * parseInt(serviceQty);
    setTotalPrice(dogPrice + servicePrice);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Sigma Dog Care System (SDCS)</Text>

      <Image
        source={{ uri: 'https://s10443.pcdn.co/wp-content/uploads/2018/01/GettyImages-847808270-1.jpg' }}
        style={styles.image}
      />

      <View style={styles.row}>
        <Picker
          selectedValue={selectedDog}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedDog(itemValue)}
        >
          <Picker.Item label="Select A Dog" value="" />
          <Picker.Item label="Finn - $15" value="Finn-$15" />
          <Picker.Item label="Bluey - $18" value="Bluey-$18" />
          <Picker.Item label="Charlie - $22" value="Charlie-$22" />
          <Picker.Item label="Max - $20" value="Max-$20" />
          <Picker.Item label="Buddy - $20" value="Buddy-$20" />
        </Picker>

        <Picker
          selectedValue={dogHours}
          style={styles.picker}
          onValueChange={(itemValue) => setDogHours(itemValue)}
        >
          <Picker.Item label="Hours of Care" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      <View style={styles.row}>
        <Picker
          selectedValue={selectedService}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedService(itemValue)}
        >
          <Picker.Item label="Select A Service" value="" />
          <Picker.Item label="Grooming - $20" value="Grooming-$20" />
          <Picker.Item label="Walking - $10" value="Walking-$10" />
          <Picker.Item label="Training - $25" value="Training-$25" />
          <Picker.Item label="Vet Check - $30" value="VetCheck-$30" />
          <Picker.Item label="Daycare - $10" value="Daycare-$10" />
        </Picker>

        <Picker
          selectedValue={serviceQty}
          style={styles.picker}
          onValueChange={(itemValue) => setServiceQty(itemValue)}
        >
          <Picker.Item label="Quantity" value="" />
          <Picker.Item label="1" value="1" />
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="CALCULATE" onPress={handleCalculate} color="#3399ff" />
      </View>

      <Text style={styles.totalText}>Total Cost is: $ {totalPrice}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffcc',
    alignItems: 'center',
    paddingTop: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 150,
    marginTop: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'orange',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 10,
  },
  picker: {
    flex: 1,
    height: 40,
    marginHorizontal: 5,
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    marginVertical: 20,
    width: '90%',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});
