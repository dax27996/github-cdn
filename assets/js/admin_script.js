function myAccFunc() {
  var x = document.getElementById("sub-master-list");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    $(".sub-nav-master-list").addClass('master-list-expand');
    $(".sub-nav-master-list i").removeClass('icon-minimal-down');
    $(".sub-nav-master-list i").addClass('icon-minimal-up');
  } else { 
    x.className = x.className.replace(" w3-show", " w3-hide");
    $(".sub-nav-master-list").removeClass('master-list-expand');
    $(".sub-nav-master-list i").removeClass('icon-minimal-up');
    $(".sub-nav-master-list i").addClass('icon-minimal-down');
  }
}

