import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { error } from 'util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})  
export class AuthService {

  constructor(private router:Router) { }


  signUp(email:string, password: string){
 
   firebase.auth().createUserWithEmailAndPassword(email,password).then(

   // error=>console.log(error)
    response=>{
      alert('Registration success');
    },
      error=>alert('REGISTRATION FAILED!!!')

   );
   

  }

  signIn(email:string, password:string){

    firebase.auth().signInWithEmailAndPassword(email,password).then(
      
      response=>{
        this.router.navigate(['/']);
        this.getCurrentUserToken();
        
      },
              error=>alert('Invalid Login')
          
              
    );

      }

   signOut(){
     firebase.auth().signOut().then(
      
      response=>{
      localStorage.removeItem('isLoggedIn')
      this.router.navigate(['/login'])
      }
      )
     
   }   
    
   getCurrentUserToken(){
     firebase.auth().currentUser.getIdToken().then(
       (token:string)=>{
         localStorage.setItem('isLoggedIn',token);

       }
     )
       localStorage.getItem('isLoggedIn');
     
   }
   isAuthenticated(){
     return(localStorage.getItem('isLoggedIn'))? true:false;

   }

}
