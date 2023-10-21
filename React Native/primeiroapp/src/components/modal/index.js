import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as ClipBoard from 'expo-clipboard'
import UseStorage from '../../Hooks/UseStorage';


export function ModalPassword({ password, handleClose}){
const { getItem, saveItem, removeItem, } = UseStorage();


    async function handleCopyPassword(){
     await ClipBoard.setStringAsync(password)
     await saveItem("@pass", password)
     alert("senha salva com sucesso!")

     handleClose();
    }


    return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}> Senha gerada</Text>
          
          <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
            <Text style={styles.text}> {password}</Text>
          </Pressable>

          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button} onPress={handleClose}>
                <Text style={styles.btnback} > Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCopyPassword}>
                <Text style={styles.btnsave}> Salvar senha </Text>
            </TouchableOpacity>

          </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: "rgba(24,24,24,0.6)",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
  backgroundColor: "#FFF",
  width: "85%",
  paddingTop: 24,
  paddingBottom: 24,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#000",
        marginBottom: 24
    },
    innerPassword: {
        backgroundColor: '#f0f0f0',
        width: "90%",
        padding: 14,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2, // Necessário para Android
      },
    text:{
        color: "#000",
        textAlign: "center",

    },
    buttonArea: {
    flexDirection: "row",
    width: '90%',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: "space-between", 
    },
    button: {
        marginTop: 14,
        marginBottom: 14,
    },
    btnsave:{
    backgroundColor: "#00C247",
    padding: 10,
    borderRadius: 5,
    color: "#FFF"
    },
    btnback:{
        backgroundColor: "#F33",
        padding: 10,
        borderRadius: 5,
        color: "#FFF" 
    }
})

// verde #00C247
// vermelho #F33