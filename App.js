import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
    
      <Image
        source={{ uri: 'https://media.gettyimages.com/id/1317804578/es/foto/una-empresaria-dispar%C3%B3-con-la-cabeza-sonriendo-a-la-c%C3%A1mara.jpg?s=612x612&w=gi&k=20&c=DBv7bDPaz7FeB6bE2FD-B7ZP4nJWO_JW6YdYoaymLD0=' }}
        style={styles.avatar}
      />

     
      <Text style={styles.name}>Сніжана Остапишин</Text>
      <Text style={styles.profession}>Frontend Developer</Text>

   
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📞 Контакти</Text>
        <Text>Email: snow@gmail.com</Text>
        <Text>Телефон: +380 00 00 00 0000</Text>
        <Text>LinkedIn: linkedin.com/in/snow</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>💼 Досвід роботи</Text>
        <Text style={styles.jobTitle}>React Developer — IT Company</Text>
        <Text style={styles.jobPeriod}>2024 — зараз</Text>
        <Text>Розробка інтерфейсів</Text>
      </View>

   
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎓 Освіта</Text>
        <Text>ТНТУ, Комп’ютерні інженерія (2022-2026)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛠 Навички</Text>
        <Text>React, JavaScript, HTML, CSS, Git</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#517bae98',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  profession: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1a3e69ff',
  },
  jobTitle: {
    fontWeight: 'bold',
  },
  jobPeriod: {
    fontStyle: 'italic',
    color: '#555',
  },
});
