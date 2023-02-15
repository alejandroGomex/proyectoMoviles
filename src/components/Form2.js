import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  DatePickerIOS,
  Alert
} from 'react-native';
import DatePicker from 'react-native-date-picker';

export const Form2 = ({modalRegistro, setModalRegistro}) => {
  const [id,setId]= useState('');
  const [userEmail,setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [birthday, setBirthday] = useState(new Date());

  const users_email = [
    {
      userName: "alejandro",
      userEmail: "sapa@a.com",
      birthday: "2002-02-11"
    },
    {
      userName: "sapa",
      userEmail: "fhasf@b.com",
      birthday: "2002-02-11"
    },
  ]
  const handlerNewUser = () => {
    if ([userName,userEmail ,birthday].includes('')) {
      Alert.alert('Error', 'Campos sin diligenciar', [
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
    /* Validar si es un nuevo usuario o es uno existente */
    const new_user = {userName, userEmail,birthday};

    //console.log(user_exist);
    //insertar los datos de new_user en una lista de usuarios


    console.log(users_email);
    let buscar = users_email.find(i => i.userEmail == new_user.userEmail)
     if (buscar) {
      buscar.userName = new_user.userName
      buscar.birthday = new_user.birthday
      Alert.alert('Error', 'El correo ya existe', [
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ]);
    }
    //constusers_email.find(new_user.userEmail => userEmail === userEmail)

    if(id){
      new_user.id = id;
      //const user_updated = 
    }
    setModalRegistro(!modalRegistro);
    setUserName('');
    setUserEmail('');
    setBirthday(new Date());
  };
  return (
    <Modal animationType="slide" visible={modalRegistro}>
      <SafeAreaView >
        <ScrollView>
          {/* Titulo y subtitulo */}
          <Text style={styles.title}>
            Sign Up {''}
            <Text style={styles.subtitle}>User UAM</Text>
          </Text>

          {/* Botón para cerrar ventana modal */}
          <Pressable
            style={styles.exit_window}
            onPress={() => setModalRegistro(!modalRegistro)}>
            <Text style={styles.text_close_window}>X</Text>
          </Pressable>
          {/* Inicio del formulario */}
          <TextInput onChangeText={setUserName} value={userName} placeholder= "Nombre usuario "></TextInput>
          <TextInput onChangeText={setUserEmail} value={userEmail} placeholder = "Correo Usuario"></TextInput>
          <DatePickerIOS 
            style={styles.datePickerIOS}
            date={birthday}
            locale="es"
            mode="date"
            placeholder="select date"
            minDate = "1950-01-01"
            maxDate = "2021-12-31"
            onDateChange={date => setBirthday(date)}></DatePickerIOS>
          {/* Botón para aceptar envio de datos del formulario */}
          <Pressable style={styles.btn_user_add} onPress={handlerNewUser}>
            <Text style={styles.text_btn_user_add}>Acept</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
    datePickerIOS: {
        height: 216,
        width: 310,
      },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
      },
  content_date: {},
  btn_user_add: {
    marginVertical: 30,
    backgroundColor: '#1B5FDF',
    borderRadius: 10,
    padding: 15,
  },
  text_btn_user_add: {
    color: '#FCFCFC',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  exit_window: {
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: '#E2E3E5',
    borderRadius: 10,
    padding: 15,
  },
  text_close_window: {
    color: '#010101',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});