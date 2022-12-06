import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
    Safrareview : {
      flex:1,justifyContent:'center'
    },
    mainView :{
      flex:1,paddingHorizontal:20
    },
    image :
    {height:'85%',width:"100%",alignSelf:'center'},
  
    registerLabel :{fontSize:22,fontWeight:'bold',marginVertical:15,color:'#1E3056'},
  
    label: {marginVertical:7,fontSize:13,fontWeight:'500',color:'#1E3056'},
  
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
  