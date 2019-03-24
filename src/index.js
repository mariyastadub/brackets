module.exports = function check(str, bracketsConfig) {
  const opening = { '(': ')', '[': ']', '{': '}','1':'2','3':'4','5':'6','7':'7','8':'8'}
  const closing = { ')': '(', ']': '[', '}': '{','2':'1','4':'3','6':'5','7':'7','8':'8'}

  const stack = [];

  for (c of str.split('')) {
    if (c in opening)
      stack.push(c)
    else if (stack.pop() !== closing[c])
      return false
  }

  return (stack.length === 0)
}
