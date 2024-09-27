import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // เมื่อ login สำเร็จ ให้ navigate ไปที่หน้า Main
    navigation.navigate('AgentGrid');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../assets/Overwatch2_Logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>ลงชื่อเข้าใช้</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder=" "
          placeholderTextColor="transparent"
        />
        <Text style={[styles.placeholder, username && styles.placeholderActive]}>
          ชื่อผู้ใช้
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder=" "
          placeholderTextColor="transparent"
        />
        <Text style={[styles.placeholder, password && styles.placeholderActive]}>
          รหัสผ่าน
        </Text>
      </View>

      <View style={styles.footerWrapper}>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footerText}>ไม่สามารถลงชื่อเข้าใช้ได้ใช่ไหม?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footer}>
          <Text style={styles.footerText}>ลงทะเบียน</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>

      <View style={styles.socialLoginWrapper}>
          {/* เพิ่มเส้นขีดซ้ายขวาของ orText */}
          <View style={styles.orWrapper}>
            <View style={styles.line} />
            <Text style={styles.orText}>หรือล็อกอินด้วยวิธีดังนี้</Text>
            <View style={styles.line} />
          </View>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={{ backgroundColor: '#1877f2', padding: 8, borderRadius: 180, }}>
            <Ionicons name="logo-facebook" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 8, borderRadius: 180, }}>
            <Ionicons name="logo-google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#000', padding: 8, borderRadius: 180, }}>
            <Ionicons name="logo-apple" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#fff', padding: 8, borderRadius: 180, }}>
            <FontAwesome6 name="steam" size={24} color="#171A21" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#BDC8DA',
    padding: 20,
    paddingTop: 80,
  },
  logo: {
    width: '80%',
    height: 30,
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 15,
    position: 'relative',
    alignContent: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 14,
    height: 50,
  },
  placeholder: {
    position: 'absolute',
    left: 10,
    top: 15,
    color: '#888',
    fontSize: 14,
    paddingHorizontal: 5,
    zIndex: 1,
    transition: '0.2s ease',
  },
  placeholderActive: {
    top: 5,
    fontSize: 12,
    color: '#888',
  },
  footer: {
    marginTop: 0,
  },
  footerText: {
    color: '#888',
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  loginButton: {
    width: '70%',
    padding: 13,
    backgroundColor: '#FF7010',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 175,
    marginTop: 35,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  socialLoginWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
  },
  orText: {
    color: '#888',
    fontSize: 14,
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#888',
    top: -8
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '90%',
    marginBottom: 20,
    marginTop: 18,
    alignItems: 'center',
  },
});
