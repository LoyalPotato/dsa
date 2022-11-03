function partition_lomuto(
  nums: number[],
  lo: number,
  hi: number,
  pivotIdx: number,
): number {
  // Get pivot val
  const pivotVal = swapPivot(nums, hi, pivotIdx);

  let swapIdx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (nums[i] <= pivotVal) {
      ++swapIdx;
      const temp = nums[i];
      nums[i] = nums[swapIdx];
      nums[swapIdx] = temp;
    }
  }

  ++swapIdx;
  nums[hi] = nums[swapIdx];
  nums[swapIdx] = pivotVal;

  return swapIdx;
}

function partition_hoare(
  nums: number[],
  lo: number,
  hi: number,
  pivotIdx: number,
): number {
  // I'm not sure if I should do the swap here
  const pivotVal = nums[pivotIdx];

  let i = lo - 1;
  let j = hi + 1;

  while (true) {
    do {
      ++i;
    } while (nums[i] < pivotVal);

    do {
      --j;
    } while (nums[j] > pivotVal);

    if (i >= j) return j;

    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}

function swapPivot(nums: number[], swapPos: number, pivotIdx: number): number {
  // Get pivot val
  const pivotVal = nums[pivotIdx];

  // Put pivot at one end. Here I chose hi position
  nums[pivotIdx] = nums[swapPos];
  nums[swapPos] = pivotVal;

  return pivotVal;
}

export default function qs_lomuto(
  nums: number[],
  lo: number,
  hi: number,
): number[] | undefined {
  if (hi >= nums.length || lo < 0) return;
  if (lo > hi) return;

  const pivotIdx = Math.floor((lo + hi) / 2);
  const pivotLocationIdx = partition_lomuto(nums, lo, hi, pivotIdx);
  qs_lomuto(nums, lo, pivotLocationIdx - 1);
  qs_lomuto(nums, pivotLocationIdx + 1, hi);

  return nums;
}

export function qs_hoare(
  nums: number[],
  lo: number,
  hi: number,
): number[] | undefined {
  if (hi >= nums.length || lo < 0) return;
  if (lo >= hi) return;

  const pivotIdx = Math.floor((lo + hi) / 2);
  const pivotLocationIdx = partition_hoare(nums, lo, hi, pivotIdx);
  qs_hoare(nums, lo, pivotLocationIdx);
  qs_hoare(nums, pivotLocationIdx + 1, hi);

  return nums;
}

const array = [551, 5, 36, 51, 1, -5, 2, 85];

console.log(qs_hoare(array, 0, array.length - 1));
console.log(qs_lomuto(array, 0, array.length));
