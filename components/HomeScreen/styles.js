import {StyleSheet}  from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#61AAFD',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
 
    yogaContainer: {
      display: 'flex',
    },
 
    titles: {
      alignItems:'center',
      width:'100%',
      marginTop:'10%',
    },
 
    title: {
      fontSize:40,
      fontWeight:'bold',
      color:'#fff',
     
    },

    subtitle: {
      fontSize:14,
      color:'#fff',
      marginTop:'3%',
    },

    logo:{
      width: '35%',
      height: '35%',
      // marginLeft: '15%',
      marginTop: '5%'
    }

   
 });

 export default styles;