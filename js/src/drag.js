var oDrag = document.querySelector('.drag-items')
var tapX, tapY, curX, curY, x, y, result

/**
 * 手指触摸屏幕
 * tapX 触点距离 drag-items 左边框的距离
 * tapY 触点距离 drag-items 上边框的距离
 */
function down(event) {
  tapX = event.touches[0].clientX - oDrag.offsetLeft
  tapY = event.touches[0].clientY - oDrag.offsetTop
}

/**
 * 手指在屏上滑动
 * curX drag-items 左边框距离屏幕左侧的距离
 * curY drag-items 上边框距离屏幕上侧的距离
 * 拖动的过程中需阻止页面的默认事件（防止页面滑动）
 */
function moving(event) {
  // 阻止页面的滑动
  event.preventDefault()
  curX = event.touches[0].clientX - tapX
  curY = event.touches[0].clientY - tapY
  x = init(curX, 'clientWidth')
  y = init(curY, 'clientHeight')
  oDrag.style.left = x + 'px'
  oDrag.style.top = y + 'px'
}

/**
 * 格式化拖动的位置，控制在可见区域内
 */
function init(temp, name) {
  if (temp >= 0 && temp <= document.body[name] - oDrag[name]) {
    result = temp
  } else if (temp < 0) {
    result = 0
  } else {
    result = screen[name] - oDrag[name]
  }
  return result
}

/**
 * 监听手指触摸 drag-items 事件调动 down 方法
 */
oDrag.addEventListener('touchstart', down)

/**
 * 监听手指拖动 drag-items 事件调动 moving 方法
 */
oDrag.addEventListener('touchmove', moving)

/**
 * 监听 drag-items click 事件调动
 */
oDrag.addEventListener('click', function() {
  // alert('开心的一天！');
})
