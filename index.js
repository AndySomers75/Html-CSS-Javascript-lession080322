let Name = "Andy"

function myname(){
    Name = window.prompt("Whats your name?");
    
}

function greetings(value){
   if(value === 'Goodmorning'){
    window.alert(`Goodmorning ${Name}!`);
        
}
else if (value === 'Goodafternoon'){
    window.alert(`Goodafternoon ${Name}!`);
    
}

 else if (value === 'Goodevening'){
    window.alert(`Goodevening ${Name}!`);
    }
}
