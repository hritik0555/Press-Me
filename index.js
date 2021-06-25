

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
       handleClick(this.innerHTML);
       makeAnimationOn(this.innerHTML);
      
    });
}

document.addEventListener("keypress",function()
{
   handleClick(event.key);
   makeAnimationOn(event.key);
   
});

function handleClick(key)
{
   switch (key)
 {
   case "h": var audio=new Audio('sounds/crash.mp3');
   audio.play();
   
       
      break;

     case "r": 
     var audio=new Audio('sounds/kick-bass.mp3');
     audio.play(); 
     break;

     case "i":var audio=new Audio('sounds/snare.mp3');
              audio.play(); 
              break;

      case "t":    
      var audio=new Audio('sounds/tom-1.mp3');
        audio.play(); 
        break;
        
        case "g":

         var audio=new Audio('sounds/tom-2.mp3');
        audio.play(); 
        break;

        case "a":var audio=new Audio('sounds/tom-3.mp3');
        audio.play(); 
        break;

        case "u":
         var audio=new Audio('sounds/tom-4.mp3');
         audio.play(); 
         break;





   default:
      break;
}
}


function makeAnimationOn(currentKey)
{

   
   var element=document.querySelector("." + currentKey);
   
   element.classList.add("pressed");

   setTimeout(function(){
      element.classList.remove("pressed");
   },100);

   
   

  
   console.log(document.querySelector("." + currentKey).classList);
}









