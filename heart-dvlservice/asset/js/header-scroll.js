const Header = document.querySelector('PC-Header')

let lastScroll = document.documentElement.scrollTop || 0
document.addEventListener('scroll', function(){
  let scrollTop = document.documentElement.scrollTop
  if(scrollTop > lastScroll) {
    // down
  } else {
    //up
  }
  lastScroll = scrollTop
})