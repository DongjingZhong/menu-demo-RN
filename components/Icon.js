import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

function Icon({
    name,
    size = 40,
    backgroundColor="#000",
    iconColor = "#fff",
    onPress,
    style,

}) {
    return (
      
        <MaterialCommunityIcons name={name} size={size} color={iconColor} style={style} onPress={onPress}/>  
        
    );
}
const styles = StyleSheet.create({
    
})
export default Icon;