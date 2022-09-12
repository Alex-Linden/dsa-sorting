function merge(left, right) {
  let out = [];
  let lIdx = 0;
  let rIdx = 0;

  while (lIdx < left.length && rIdx < right.length) {
    if (left[lIdx] < right[rIdx]) {
      out.push(left[lIdx]);
      lIdx++;
    } else {
      out.push(right[rIdx]);
      rIdx++;
    }
  }

  if (lIdx < left.length) {
    for (lIdx; lIdx < left.length; lIdx++) {
      out.push(left[lIdx]);
    }
  } else {
    for (rIdx; rIdx < right.length; rIdx++) {
      out.push(right[rIdx]);
    }
  }
  return out;

}

function mergeSort(arr) {

    const half = Math.ceil(arr.length / 2);
    let firstHalf = arr.slice(0, half);
    let secondHalf = arr.slice(half);


  if(firstHalf.length > 1){
    firstHalf = mergeSort(firstHalf)
  }

  if(secondHalf.length > 1){
    secondHalf = mergeSort(secondHalf)
  }

  return merge(firstHalf, secondHalf)

}

module.exports = { merge, mergeSort };