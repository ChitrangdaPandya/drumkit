document.addEventListener("keypress",keyboard);
function nandleClick(){
  var buttonletters=this.innerHTML;
  switch (buttonletters) {

      case "w":
      var audio=new Audio("crash.mp3");
      audio.play();

        break;
        case "a":
        var audio=new Audio("kick-bass.mp3");
        audio.play();

          break;
          case "s":
          var audio=new Audio("snare.mp3");
          audio.play();

            break;
            case "d":
            var audio=new Audio("tom-1.mp3");
            audio.play();

              break;
              case "j":
              var audio=new Audio("tom-2.mp3");
              audio.play();

                break;
                case "k":
                var audio=new Audio("tom-3.mp3");
                audio.play();

                  break;
                  case "l":
                  var audio=new Audio("tom-4.mp3");
                  audio.play();

                    break;
    default:

  }

  //this.style.color="grey";
}

var count=0;
while (count<8) {
  document.querySelectorAll('button')[count].addEventListener("click",nandleClick);

  count++;
}
function keyboard(event){
  console.log(event);;
  switch (event.key) {

      case "w":
      var audio=new Audio("crash.mp3");
      audio.play();

        break;
        case "a":
        var audio=new Audio("kick-bass.mp3");
        audio.play();

          break;
          case "s":
          var audio=new Audio("snare.mp3");
          audio.play();

            break;
            case "d":
            var audio=new Audio("tom-1.mp3");
            audio.play();

              break;
              case "j":
              var audio=new Audio("tom-2.mp3");
              audio.play();

                break;
                case "k":
                var audio=new Audio("tom-3.mp3");
                audio.play();

                  break;
                  case "l":
                  var audio=new Audio("tom-4.mp3");
                  audio.play();

                    break;
    default:

  }

}
//document.addEventListener("keypress",keyboard);
