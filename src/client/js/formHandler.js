function handleSubmit(event) {
    event.preventDefault()
    var userURL=  document.getElementById('url').value;
    console.log(userURL);
    // check what text was put into the form field
   let formText = document.getElementById('name').value
    Client.checkForName(formText)
    //Verify that input is a valid url
    if(Client.ValidURL(userURL))
    {
               console.log("::: FORM userURL VALID :::") 
               console.log("BUILDING REQUEST");
               fetch('http://localhost:8081/article', {
                   method: 'POST',
                   mode: 'cors',
                   headers: { 'Content-Type': 'application/json',  },
                   body: JSON.stringify({text: userURL})
               })
               .then(res=>res.json())
               
               .then(res=>{document.getElementById('polarity').innerHTML = res.polarity;
               document.getElementById('subjectivity').innerHTML = res.subjectivity;
               document.getElementById('text').innerHTML = res.text;

               console.log(res);
              })
              
            }else{
               // Display error message if URL is not valide
               var error_section = document.querySelector('section.errors');
               var error = document.querySelector('section.errors #error');
               error.innerHTML = "The URL:[" +userURL+"] is not valide. Please enter a valid url"
               error_section.style.display = "block";  
               } 
           }
export { handleSubmit }