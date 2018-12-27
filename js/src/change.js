var bodyWrap = document.getElementsByTagName('body')[0];
var snowObj = document.getElementById('btn-snow');
var snowStopObj = document.getElementById('btn-stop');
var sunObj = document.getElementById('btn-sun');
var moonObj = document.getElementById('btn-moon');
var snowBoxObj = document.getElementById('snow-box');

// 下雪啦
snowObj.addEventListener('click', function () {
  snowObj.style.display = 'none';
  snowStopObj.style.display = 'block';
  snowBoxObj.style.display = 'block';
});
// 雪停啦
snowStopObj.addEventListener('click', function () {
  snowStopObj.style.display = 'none';
  snowObj.style.display = 'block';
  snowBoxObj.style.display = 'none';
});
// 日间模式
sunObj.addEventListener('click', function () {
  sunObj.style.display = 'none';
  moonObj.style.display = 'block';
  toggleClass(bodyWrap, "night-mode", "day-mode");
});
// 夜间模式
moonObj.addEventListener('click', function () {
  moonObj.style.display = 'none';
  sunObj.style.display = 'block';
  toggleClass(bodyWrap, "day-mode", "night-mode");
});

/**
 * 类名控制
 * hasClass: 是否存在 class
 * addClass: 添加 class
 * removeClass: 删除 class
 * toggleClass: toggle class
 */
function hasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
function addClass(ele, cls) {
  if (!this.hasClass(ele, cls)) ele.className += "" + cls;
}
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, "");
  }
}
function toggleClass(ele,cls,als) { 
  if(hasClass(ele,cls)) { 
    removeClass(ele, cls);
    addClass(ele, als);
  }
}
