
console.log("Hello Grayson");


function Find(){
  var username = "";
  username = document.getElementById('username').value;
  console.log("Username: " + username);
  
  if(username != "")
  {
    var link = "https://fortnitetracker.com/profile/all/";
    link = link.concat('', username);
    link = link.concat('', "/events");
    
    console.log("Link: " + link);
     window.open(link, '_blank').focus();

  }else
  {
    console.log("empty username");
  }
}

function AddFindListener(){
  var input = document.getElementById("username");

    input.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("findbtn").click();
              console.log("Find Button Clicked");

      }
    });
}