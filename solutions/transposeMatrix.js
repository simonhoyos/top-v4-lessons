const transpose = list => {
  let transposeList = []
  for(let i=0; i < list[0].length; i++){
      let innerList = []
      for(let j=0; j<list.length; j++){
          innerList.push(list[j][i])
      }
      transposeList.push(innerList)
  }
  return transposeList
}
