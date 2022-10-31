export default function bs_arr(arr: number[], searchVal: number): boolean {
  let lo = 0;
  let hi = arr.length-1;
  
  // Don't forget in explanation to mention to not forget the exit case
  // that is the case where we stop iterating/searching
  while(lo <= hi){
    const mid = Math.floor((lo+hi)/2);

    if (searchVal < arr[mid]) {
      hi = mid - 1;
    } else if (searchVal > arr[mid]) {
      lo = mid + 1;
    } else {
      return true;
    }
  }

  return false;
}