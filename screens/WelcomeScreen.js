import React, { Component } from 'react';
import { KeyboardAvoidingView,ScrollView,Modal,View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import SantaAnimation from '../components/SantaClaus.js';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      emailId : '',
      password: '',
      isModalVisible:'false',
      firstName:'',
      contact:'',
      lastName:'',
      address:'',
      confirmPassword:''
    }
  }
  showModal = ()=>{
    return(
      <Modal 
      animationType="fade"
      transparent={true}
      visible={this.state.isModalVisible}
      >
        <View style={styles.modalContainer}>
          <ScrollView>
            <KeyboardAvoidingView style={styles.keyboard}>
              <Text style={{fontSize:RFValue(20),color:'#32867d'}}>SIGNUP</Text>
              <Text style={styles.lable}>first Name</Text>
              <TextInput
              style={styles.TextInput}
              placeholder="first Name"
              maxLength={8}
              onChangeText={(text)=>{this.setState({firstName:text})}}
              />
              <Text style={styles.lable}>last Name</Text>
                    <TextInput
              style={styles.TextInput}
              placeholder="Last Name"
              maxLength={8}
              onChangeText={(text)=>{this.setState({lastName:text})}}
              />
              <Text style={styles.lable}>contact</Text>
                    <TextInput
              style={styles.TextInput}
              placeholder="contact"
              maxLength={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{this.setState({contact:text})}}
              />
              <Text style={styles.lable}>Address</Text>
                    <TextInput
              style={styles.TextInput}
              placeholder="Address"
              multiline={true}
              onChangeText={(text)=>{this.setState({address:text})}}
              />
              <Text style={styles.lable}>email</Text>
                    <TextInput
              style={styles.TextInput}
              placeholder="email"
              keyboardType={'email-address'}
              onChangeText={(text)=>{this.setState({emailId:text})}}

              />
              <Text style={styles.lable}>Password</Text>
                    <TextInput
              style={styles.TextInput}
              secureTextEntry={true}
              placeholder="Password"
     
              onChangeText={(text)=>{this.setState({password:text})}}
              />
              <Text style={styles.lable}>Confirm Password</Text>
                    <TextInput
              style={styles.TextInput}
              secureTextEntry={true}
              placeholder="Confirm password"
              maxLength={8}
              onChangeText={(text)=>{this.setState({confirmPassword:text})}}
              />
              <View style={{flex:0.2,alignItems:'center'}}><TouchableOpacity style={styles.registerButton} onPress={()=>{this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}}>
                <Text style={styles.registerButtontext}>Register</Text></TouchableOpacity></View>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity style={styles.cancelButton} onPress={()=>this.setState({"isModalVisible":false})}>
                    <Text style={styles.cancelButtonText}>
                    Cancel
                    </Text>
                  </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </Modal>
    )
  }
   
  userLogin = (emailId, password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
    .then(()=>{
      this.props.navigation.navigate('DonateBooks')
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (emailId, password,confirmPassword) =>{
     if(password !== confirmPassword)
     { 
       return Alert.alert("password doesn't match\nCheck your password.") }
     else{ firebase.auth().createUserWithEmailAndPassword(emailId, password) 
      .then(()=>{ 
        db.collection('users').add({ 
          first_name:this.state.firstName,
           last_name:this.state.lastName,
            contact:this.state.contact,
            email_id:this.state.emailId, address:this.state.address ,
            isBookRequest:'false'
          }) 
            
            return Alert.alert( 'User Added Successfully', '', [ {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})}, ] ); }) 
            .catch((error)=> { // Handle Errors here.
     var errorCode = error.code; 
     var errorMessage = error.message; 
     return Alert.alert(errorMessage) });
     } }

  
  

  render(){
    return(
      <View style={styles.container}>{this.showModal()}
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <View style={{flex:0.25}}/>
         <View style={{flex:0.15}}/>
         <View style={{flex:0.85,justifyContent:'center',alignItems:'center',padding:RFValue(10)}}>
       <Image
       source={require('../assets/santa.png')} style={{height:'100%',width:'70%',resizeMode:'stretch'}}/>

         </View></View><View style={{flex:0.45}}></View>
         <View style={{justifyContent:'center',alignItems:'center',flex:0.24}}></View>
        <View style={styles.profileContainer}>
         
          <Text style={styles.title}>Book Santa</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
          style={styles.loginBox}
          placeholder="example@booksanta.com"
          placeholderTextColor = "#ffff"
          keyboardType ='email-address'
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        />

        <TextInput
          style={styles.loginBox,[marginTop= RFValue(20)]}
          secureTextEntry = {true}
          placeholder="password"
          placeholderTextColor = "#ffff"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
          <TouchableOpacity
            style={[styles.button,{marginBottom:20, marginTop:20}]}
            onPress = {()=>{this.userLogin(this.state.emailId, this.state.password)}}
            >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>this.setState({"isModalVisible":true})}
            >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:0.3}}><Image source={require('../assets/book.png')} style={{width:100,resizeMode="stretch"}}/></View>
      </View>
    )
  }
}


const styles = StyleSheet.create({ container:{ flex:1, backgroundColor:'#F8BE85', alignItems: 'center', justifyContent: 'center' }, profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', }, title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' }, loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 }, KeyboardAvoidingView:{ flex:1, justifyContent:'center', alignItems:'center' }, modalTitle :{ justifyContent:'center', alignSelf:'center', fontSize:30, color:'#ff5722', margin:50 }
,
modalContainer:{ flex:1, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:"#ffff", marginRight:30, marginLeft : 30, marginTop:80, marginBottom:80, }, formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10 }, registerButton:{ width:200, height:40, alignItems:'center', justifyContent:'center', borderWidth:1, borderRadius:10, marginTop:30 }, registerButtonText:{ color:'#ff5722', fontSize:15, fontWeight:'bold' }, cancelButton:{ width:200, height:30, justifyContent:'center', alignItems:'center', marginTop:5, },
button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, padding: 10 }, buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 }


})