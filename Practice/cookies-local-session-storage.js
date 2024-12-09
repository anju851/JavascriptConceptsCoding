// both local and session storage are like js objects and stores data in key-value format

//local storage
//creating a local storage
localStorage.setItem("god", "mahadev");

//printing/fetching the local storage item
console.log("get from localStorage: " + localStorage.getItem("name"));
console.log("get from localStorage: " + localStorage.getItem("god"));
//remove the local storage item
localStorage.removeItem("god");

console.log("get from localStorage: " + localStorage.getItem("god"));

//session storage
sessionStorage.setItem("name", "sessionName");
console.log("get from sessionStorage: " + sessionStorage.getItem("myname"));
sessionStorage.setItem("name", "krishna"); //updating the key value
sessionStorage.removeItem("myname");

//cookies - needs to be accessed from document object only
//creates a new cookie
document.cookie = "name=Shiva";

//creates expiration date for cookie, here semicolon indicates that we are going to other attribute of the cookie object
document.cookie = "name=Shiva; expires=" + new Date(2025, 0, 1).toUTCString();

document.cookie =
  "lastname=Parvati; expires=" + new Date(2025, 0, 2).toUTCString();

//to view cookie on cosnole
console.log("cookies: " + document.cookie);
