import React from 'react';
import {View,Text, Button,StyleSheet,TouchableOpacity} from 'react-native';
import container from './Styles';
//import NumeralComponent from './NumeralComponent';
class Calc extends React.Component
{
  state={
    operand1:undefined,
    operator:undefined,
    operand2:undefined,
    
    result:0
  }
  
  handle=(operand1,operator,operand2)=>
  {
    const temp=0;
    if(operator=='+')
    {
      temp =operand1+operand2;
    }
    else if(operator=='-')
    {
      temp =operand1-operand2; 
    }
    else if(operator=='*')
    {
      temp =operand1*operand2; 

    }
    else 
    {
      temp =operand1/operand2; 
    }

    
    
      this.setState(
        {
          result:{temp}
        }
      )
    
  }
  

    render()
    {
        return(
          <View style={container.main}>
            <View style={container.outputContainer}>
              <Text style={container.resulttext}>{this.state.operand1} {this.state.operator} </Text>
          </View>
            <View style={container.inputContainer}>
              <View style={container.row1}>
              
                <TouchableOpacity style = {container.col1} > 
                 <Text onPress={()=>{this.setState({result:0})}} style={container.textclear}>Clear</Text ></TouchableOpacity >
               <TouchableOpacity onPress={()=>{this.setState({operator:'/'})}} style={[container.col2]}><Text style={{alignSelf:'center',fontSize:100}}>÷</Text></TouchableOpacity></View>
              
               {/* <NumeralComponent col1='7' col2='8' col3='9' col4='-' ></NumeralComponent>
              <NumeralComponent col1='4' col2='5' col3='6' col4='+' ></NumeralComponent>
              <NumeralComponent col1='1' col2='2' col3='3' col4='=' ></NumeralComponent> */}
               <View style={container.row2}>
                 <TouchableOpacity style={container.column} onPress={()=>{this.setState({operand1:7})}}><Text style={container.textt}>7</Text></TouchableOpacity>
                 <TouchableOpacity style={container.column} onPress={()=>{this.setState({operand1:8})}}><Text style={container.textt} >8</Text></TouchableOpacity>
                 <TouchableOpacity style={container.column} onPress={()=>{this.setState({operand1:9})}}><Text style={container.textt} >9</Text></TouchableOpacity>
                 <TouchableOpacity style={container.column} onPress={()=>{this.setState({operator:'-'})}} ><Text style={container.textt} >-</Text></TouchableOpacity>                
                

               </View>
               <View style={container.row2}>
               <TouchableOpacity style={container.column} onPress={()=>{this.setState({operand1:4})}}><Text style={container.textt}>4</Text></TouchableOpacity>
               <TouchableOpacity style={container.column} onPress={()=>{this.setState({operand1:5})}}><Text style={container.textt}>5</Text></TouchableOpacity>
               <TouchableOpacity style={container.column}onPress={()=>{this.setState({operand1:6})}} ><Text style={container.textt}>6</Text></TouchableOpacity>
               <TouchableOpacity style={container.column} onPress={()=>{this.setState({operator:'+'})}}  ><Text style={container.textt}>+</Text></TouchableOpacity>
               
              
            

               </View>
               <View style={container.row2}>
               <TouchableOpacity style={container.column}onPress={()=>{this.setState({operand1:1})}} ><Text style={container.textt}>1</Text></TouchableOpacity>
               <TouchableOpacity style={container.column} onPress={()=>{this.setState({operand1:2})}}><Text style={container.textt}>2</Text></TouchableOpacity>
               <TouchableOpacity style={container.column} onPress={()=>{this.setState({operand1:3})}}><Text style={container.textt}>3</Text></TouchableOpacity>
               <TouchableOpacity style={container.column} ><Text style={container.textt}>=</Text></TouchableOpacity>
               
               
               </View>
              
                



              
              
             
            </View>



          </View>
       





          
            
            
            
              
              
              
              
              
              
              
              
        )
    }
}
export default Calc;


    