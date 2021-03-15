function fadeInOut(type) {
  switch(type) {
    case 1:
      $("#content2").fadeOut("fast");
      $("#content3").fadeOut("fast");
      $("#content1").fadeIn("slow");
      $("#content1Show").fadeIn("slow");
      break;
    case 2:
      $("#content1").fadeOut("fast");
      $("#content1Show").fadeOut("fast");
      $("#content3").fadeOut("fast");
      $("#content2").fadeIn("slow");
      break;
    case 3:
      $("#content1").fadeOut("fast");
      $("#content1Show").fadeOut("fast");
      $("#content2").fadeOut("fast");
      $("#content3").fadeIn("slow");
      break;
    default:
      break;
  }
}
