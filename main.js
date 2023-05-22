
let n = 0,
  delay = 50,
  activeAction = null,
  delayMap = {
    slow: 100,
    normal: 50,
    fast: 10
  }
const code = document.querySelector('#code');
const styleTag = document.querySelector('#styleTag')
const actions = document.querySelector('.actions')

// 绑定按钮事件
Array.from(actions.children).forEach(action => {
  if (action.dataset.speed == 'normal') {
    activeAction = action
    action.classList.add('actions-active')
  }
  action.addEventListener('click', () => {
    delay = delayMap[action.dataset.speed]
    activeAction && activeAction.classList.remove('actions-active')
    activeAction = action
    action.classList.add('actions-active')
  })
})

/** 将样式填入文档中 */
function writeCode(styleStr) {
  let timer = setTimeout(() => {
    n += 1
    code.textContent = styleStr.substring(0, n)
    code.scrollTop = code.scrollHeight

    styleTag.textContent = styleStr.substring(0, n)
    if (n < styleStr.length) {
      clearTimeout(timer)
      writeCode(styleStr)
    }
  }, delay)
}

const styleStr = `
/*
 * 首先，需要准备皮卡丘的皮
 */
.preview-wrapper {
    background-color: #FEE433;
}
.preview-wrapper-content {
    position: relative;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose {
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top-color: black;
    border-radius: 12px;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -12px;
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #2E2E2E; 
    border: 2px solid black;
    position: absolute;
}
/*
 * 画眼珠
 */
.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: -1px;
    left: 6px;
}
/*
 * 左眼
 */
.eye.left {
    right: 50%;
    margin-right: 90px;
}
/*
 * 右眼
 */
.eye.right {
    left: 50%;
    margin-left: 90px;
}
/*
 * 然后，画皮卡丘的脸
 */
.face {
    width: 68px;
    height: 68px;
    background-color: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
/*
 * 将脸放到正确的位置
 */
.face.left {
    right: 50%;
    margin-right: 116px;
}
.face.right {
    left: 50%;
    margin-left: 116px;
}
/*
 * 上嘴唇
 */
.upperLip {
    width: 80px;
    height: 25px;
    border: 2px solid black;
    position: absolute;
    top: 35%;
    background: #FDE348;
}
.upperLip.left {
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-left-radius: 40px 25px;
    transform:rotate(-20deg);
    right: 50%;
}
.upperLip.right {
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-right-radius: 40px 25px;
    transform:rotate(20deg);
    left: 50%;
}
/*
 * 下嘴唇
 */
.lowerLip-wrapper {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 300px;
    height: 100px;
    overflow: hidden;
}
.lowerLip {
  height: 3500px;
  width: 300px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
 * 小舌头
 */
.lowerLip::after {
  content: '';
  position: absolute;
  bottom: -20px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}
/*
 * 好了，这只皮卡丘送给你
 */
`

writeCode.call(undefined, styleStr)