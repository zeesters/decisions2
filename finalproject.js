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
  var query = "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";
  // query = query.replace(/ /g, "%20")

  moviesRequest = new XMLHttpRequest();
  moviesRequest.open('GET', query, true);
  moviesRequest.onload = processmoviesrequest



  // alert("Everything: " + moviesRequest);
  // alert("ready State:   " + moviesRequest.readyState);
  // alert("status:    " + moviesRequest.status);
  // alert("response:   " + moviesRequest.responseText);
  moviesRequest.send()
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
