import { View, Text, StyleSheet,SafeAreaView, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { useIsFocused } from '@react-navigation/native'
import UseStorage from '../../Hooks/UseStorage'

export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const {getItem, saveItem, removeItem,} = UseStorage();

    useEffect(() => {
        async function LoadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }
        LoadPasswords();
    },[focused])


    return (
        <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
            <Text style={styles.title}>
                Minhas senhas
            </Text>
        </View>

        <View style={styles.content}>
            <FlatList
            style={{ flex: 1, paddingTop: 14}}
                data={listPasswords}
                keyExtractor={(item) => String(item)}
                renderItem={ ({item}) => <Text>{item}</Text>}
            />
        </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
title: {
fontSize: 18,
color: "#FFF",
fontWeight: "bold"
},
header:{
    backgroundColor: "#392de9",
    paddingTop:58,
    paddingBottom:14,
    paddingLeft: 14,
    paddingRight: 14,
},
content:{
flex: 1,
paddingLeft: 14,
paddingRight: 14,
}
})