


function check_validity(){
    
    var username =document.getElementById("name").value;

    if (username.length>30 || username.length<1){
        // console.log(`${username.length} was too much`)
        return false
    }

    var valid = ['a', 'b', 'c', 'd', 'e', 'f',
     'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
       'w', 'x', 'y', 'z','.','1','2','3','4','5','6','7','8','9','0','_'];

    // console.log(username);
    for (let in username){

        if (!valid.includes(username[let].toLowerCase())){
            // console.log(username[let]);
            return false;
        }

    }

    return true

}


// function send_username(){
//     var username = document.getElementById('name');
//     var form = document.createElement('form');
//     form.setAttribute('method', 'POST');

    
//     form.style.content = username.value;
//     form.id = 'username_given';
//     form.name = 'username_given';
//     form.enctype = 'multipart/form-data';
//     form.style.display = 'hidden';

//     document.body.appendChild(form);

//     form.submit();
// }
function send_username(){

    $("#contactForm").submit(function(e) {
        e.preventDefault();
    });
    



}


function submitForm(form) {
    const submitFormFunction = Object.getPrototypeOf(form).submit;
    submitFormFunction.call(form);
}


function modify(){

    var didnot = document.getElementById("validthinghere");

    // if (check_validity()===false){

    didnot.innerText = "Unfortunately the bot is inactive right now. This username has been added to the database."

    // }
    // else{
    //     didnot.innerText = "Please wait as the bot finds your account...";
    send_username();
    //     window.location.href = "/verify";

    // }
}