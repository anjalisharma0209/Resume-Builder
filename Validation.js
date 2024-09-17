function check() {
    const fullName = document.getElementById('floatingInput').value;
    const phoneNumber=document.getElementById("contact").value;
    const lettersOnly = /^[A-Za-z\s]+$/;
    const digitsOnly = /^\d{10}$/;
  
    if (fullName.trim() === "") {
      alert('Please enter a valid string');
      return false;
    } else if (!lettersOnly.test(fullName)) {
      alert('Please enter only letters');
      return false;
    } 
    else if(phoneNumber.length<10 || phoneNumber.length>10){
        alert("Number should be of 10 digits");
        return false;
    }
    else if(isNaN(phoneNumber)){
        alert("Please Enter Valid Number");
        return false;
    }
    else {
      alert('Details Filled Successfully');
      return false;
    }
    
  }
  