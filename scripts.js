function myFunction(){
    var FirstName = document.getElementById('firstName').value;
    var LastName = document.getElementById('lastName').value;
    var Age= document.getElementById('age').value;
    var PhoneNumber = document.getElementById('phoneNumber').value;
    var Address = document.getElementById('address').value;
    
    var numberArray =[];
    numberArray.push(Age);
    numberArray.push(PhoneNumber);
    
  for(var i =0; i <= numberArray.length; i++){
    
    if(numberArray[i] <= 100){
       document.getElementById('postAge').innerHTML = "Age: " + Age;
   }
    
    if(numberArray[i] > 100){
        document.getElementById('postPhoneNumber').innerHTML = "Phone Number: " + PhoneNumber;
    }
  }
    
    document.getElementById('postFirstName').innerHTML = "Full Name: " + FirstName + " " + LastName;
    document.getElementById('postAddress').innerHTML = "Address: " + Address;
    
}