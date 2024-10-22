import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BookingScreen = ({ route }) => {
  const { serviceId } = route.params;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = () => {
    // In a real app, you would send the booking data to your API
    console.log('Booking:', { serviceId, date, time });
    alert('Booking submitted!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book a Service</Text>
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Submit Booking" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default BookingScreen;