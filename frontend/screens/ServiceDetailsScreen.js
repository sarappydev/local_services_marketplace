import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ServiceDetailsScreen = ({ route, navigation }) => {
  const { serviceId } = route.params;

  // In a real app, you would fetch the service details using the serviceId
  const service = {
    id: serviceId,
    name: 'House Cleaning',
    description: 'Professional house cleaning service',
    price: 50,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{service.name}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <Text style={styles.price}>Price: ${service.price}</Text>
      <Button
        title="Book Now"
        onPress={() => navigation.navigate('Booking', { serviceId: service.id })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ServiceDetailsScreen;