import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import {MenuContext,
    Menu,
    MenuOption,
    MenuOptions,
    MenuTrigger,
    MenuProvider
} from'react-native-popup-menu';
import Icon from '../components/Icon';
import colors from '../config/colors';


function DropDrown({style}) {
    return (
        
        <MenuProvider style={[styles.container,style]}>
        <View>
            <Menu>
                <MenuTrigger>
                <Icon  name='chevron-down-circle' iconColor={colors.black} size={30}/>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={()=>alert('你确定要举报吗？')}>
                    <Text style={{color :'black'}}>举报</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
        </MenuProvider>
       
        
    );
}


const styles = StyleSheet.create({
    container :{
        paddingTop: 50,
        position :"absolute"
        
       
      
    },
    
})
export default DropDrown;