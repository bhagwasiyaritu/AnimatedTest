import { StyleSheet } from 'react-native'
import { Colors } from '../../utils/colors'

export const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        paddingHorizontal:12,
        backgroundColor:Colors.statusBarColor,
        paddingVertical:24
    },
    title:{
        flex:1,
        textAlign:'center',
        color:Colors.white,
        fontWeight:'900',
        fontSize:15
    },
    backText:{
        color:Colors.white,
        fontWeight:'500',
    }
})