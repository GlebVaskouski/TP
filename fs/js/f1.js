const client = axios.create({
    baseURL: "http://127.0.0.1:8000"
  });
  
  function registrationButtonPressed(){
    const password = document.getElementById("password").val;
    const confPassword = document.getElementById("confirm-password").val;
    const name = document.getElementById("first-name").val;
    const phone = document.getElementById("phone").val;
    const email = document.getElementById("email").val;
    const secondName = document.getElementById("last-name").val;
    const fullName = name + secondName;
    if(confPassword == password)
     client.post(
            "/api/ticketshopapp/create/visitor/",
            {
                name:fullName,
                code:ParseInt(phone.substring(4)),
                Phone:phone,
                Myphone:phone,
                email: email
            }
     )
  }