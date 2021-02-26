


function check_validity(){
    
    var username =String( document.getElementById("name"));

    if (username.length>30){
        return false
    }

    var valid = ['a', 'b', 'c', 'd', 'e', 'f',
     'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
      'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
       'w', 'x', 'y', 'z','.','1','2','3','4','5','6','7','8','9','0','_'];

    for (let in username){

        if (valid.includes(let)){
            return false
        }

    }

    return true

}


function modify(){
    if (check_validity()===false){
        var didnot = document.getElementById("validthinghere");

        didnot.innerText = "*Invalid username. Please check the spelling of your username"

    }
    else{
        return true
    }
}