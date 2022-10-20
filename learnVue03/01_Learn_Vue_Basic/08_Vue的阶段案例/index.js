let obj = {
  _array : ['a','b','c']
}
Object.defineProperty(obj,
  'array',
  {
  get(){
    console.log("obj array get excute")
    return obj._array
  },
  set(value){
    obj._array = value
    console.log("obj array set excute")
  }
})
//  obj.array.push('1')
// obj.array.splice(1,0,"aaa")

//只是触发了get，没有触发set
// vue2总源码实现了当使用array.push等方法是，还会触发set
 obj.array[3] = 'z'
console.log(obj)
