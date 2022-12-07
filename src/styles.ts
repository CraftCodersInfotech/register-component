import { StyleSheet } from "react-native";
export  const styles = StyleSheet.create({
    Safrareview : {
      flex:1
    },
    mainView :{
      paddingHorizontal:20,flex:1
    },
    image :
    {height:'80%',width:"100%",alignSelf:'center',resizeMode:"stretch"},
  
    registerLabel :{fontSize:22,fontWeight:'bold',color:'#1E3056'},
  
    label: {marginVertical:5,fontSize:13,fontWeight:'500',color:'#1E3056'},
  
    footer :{justifyContent:'center',alignItems:'center',width:"100%"},
  
    Font :{marginTop:10,fontSize:13, lineHeight:18, padding:10},
  
    BoldText :{color:'#5625CC',fontWeight:'bold'},
    containerStyleInput:{
      borderWidth: 0.2,
      height: 35,
      alignItems: "center",
      borderRadius:4,
    },
  
    orMain : {flexDirection:"row",alignItems:"center",opacity:0.5},
    Line :{borderBottomWidth:1,width:"30%",marginVertical:20,opacity:0.5},
    containerStyleFooter:{justifyContent:"center", alignItems:'center', height:40,borderRadius:5},
    textStyleFooter:{color:'white', fontWeight:'700'}
  
  });