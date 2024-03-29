import { StyleSheet } from "react-native";

const stylesForm = StyleSheet.create({

    container: {
        flex:1,
        alignItems: 'center',
    },

    form: {
        gap: 20,
    },

    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#fff",
        
    },

    button: {
        backgroundColor: "#122F61",
        width: 250,
        height: 40,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textWhite: {
        color: "#fff"
    },

    title:{ 
        fontFamily: 'Aldrich_400Regular',
        fontSize: 22,
        marginBottom: 80,
    },

    img:{
        width: 300,
        height: 300,
    }
    

}) 

export {stylesForm}