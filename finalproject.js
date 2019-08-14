function homepageopen(){
  document.getElementById("homepage").style.display = "block";
  document.getElementById("movieparampage").style.display = "none";
}

function openmovieparampage() {
  // document.getElementsByClassName("moviegenrehide").style.display = "none"
  document.getElementById("homepage").style.display = "none"
  document.getElementById("movieparampage").style.display = "block"
}




function choosemovie(){
  var query = "http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=4bhjp3ueqj7vpvprfpdna6qy";
  // query = query.replace(/ /g, "%20")

  moviesRequest = new XMLHttpRequest();
  moviesRequest.open('GET', query, true);
  moviesRequest.onload = processmoviesrequest



  // alert("Everything: " + moviesRequest);
  // alert("ready State:   " + moviesRequest.readyState);
  // alert("status:    " + moviesRequest.status);
  // alert("response:   " + moviesRequest.responseText);
  moviesRequest.send();
}

function processmoviesrequest() {
  if (moviesRequest.readyState != 4){
    return;
  }
  var movieinfo = JSON.parse(moviesRequest.responseText);

  document.getElementById("homepage").style.display = "none";
  document.getElementById("movieparampage").style.display = "none";
  alert("status:    " + moviesRequest.status);
  alert("response:   " + moviesRequest.responseText);
}
// define choosebutton function
window.onload = homepageopen;
