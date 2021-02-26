


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

        if (!valid.includes(username[let])){
            // console.log(username[let]);
            return false;
        }

    }

    return true

}


function modify(){
    var didnot = document.getElementById("validthinghere");

    if (check_validity()===false){

        didnot.innerText = "*Invalid username. Please check the spelling of your username1"

    }
    else{
        didnot.innerText = "That worked."

    }
}