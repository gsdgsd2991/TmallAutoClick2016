// ==UserScript==
// @name        Tmall
// @namespace   https://pages.tmall.com/
// @description Tmall red pocket click
// @include     https://pages.tmall.com/wow/act/16495/11111pcyr?acm=lb-zebra-159335-883742.1003.4.1198106&lb-zebra-159335-883742.OTHER_1_1198106&scm=1048.1.7.8
// @version     1
// @grant       none
// ==/UserScript==
//alert('script running');
window.onload = function () {
  //autoclick();
  //setInterval('autoclick()', 7000);
window.setInterval(function(){
  var name = 'opera-block J_CouponStatus';
  //for(;;)
  //{
  try {
    var doc = document.getElementsByClassName('opera-block J_CouponStatus'); //.getElementsByClassName('opera-st  J_GetCoupon').getElementsByClassName('btn-get').document;
    // doc = doc.document.getElementsByClassName('opera-st  J_GetCoupon');
    //var d = doc[0].childNodes[1].childNodes[3].innerHTML;
   // var c = doc[0].childNodes[1].innerHTML;
   doc[0].childNodes[1].click();
    //  doc[0].childNodes[1].childNodes[3].click();

  } 
  catch (e) {
 
  }
},4000);
};