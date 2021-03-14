import {StyleSheet}  from 'react-native';
const styles = StyleSheet.create({
    signupContainer: {
        flex:1,
        backgroundColor:'#61AAFD',
    },

    header: {
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:20,

    },

    footer: {
        flex:3,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:40,
        width:'100%',
        
        
    },

    textheader: {
        fontSize:40,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },

    textFooter: {
        fontSize:18,
        
    },

    action: {
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#3F4246',
        paddingBottom:5,
    },

    textInput: {
        paddingLeft:10,
    },

    btnSign: {
        backgroundColor:'#61AAFD',
        height:40,
        justifyContent:'center',
        textAlign:'center',
        borderRadius:15,
        marginTop:'10%',
        color:'#fff',
        fontSize:18,
       
    }




 });

 export default styles;