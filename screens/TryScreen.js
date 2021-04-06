import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import DropDrown from '../components/DropDrown';

function TryScreen(props) {
    return (
        <View style ={styles.bg}>
            
         <ImageBackground source ={require('../assets/gift.png')} style={styles.img}>
        
             <Image source={require("../assets/red_jacket.png")} style={styles.profile_img}/>
             <DropDrown/>
        
         </ImageBackground>
        
        </View>
    );
}

const styles = StyleSheet.create({
    pop:{
      position :"absolute",
      
    },
    bg :{
        flex :1,
        justifyContent :'center',
        alignItems :"center",
         
    },
   img :{
       width : 300,
       height :300,
       justifyContent :'center',
        alignItems :"center"
   },
   profile_img :{
       width : 100,
       height :100,
       borderRadius :50,
   }
})
export default TryScreen;