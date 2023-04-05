
var firebaseConfig = {
    apiKey: "AIzaSyDgHyo10LSbrWr9X51RXOKhihSux2HUhRU",
    authDomain: "class100activity.firebaseapp.com",
    databaseURL: "https://class100activity-default-rtdb.firebaseio.com",
    projectId: "class100activity",
    storageBucket: "class100activity.appspot.com",
    messagingSenderId: "111809977530",
    appId: "1:111809977530:web:ae786136d910851c1bf683"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}