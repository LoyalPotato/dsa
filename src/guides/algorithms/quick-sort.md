# Quick Sort

Quick Sort, or Partition Exchange Sort, is a simple, and quite popular, sorting algorithm.

It's defining feature is that it is, like [MergeSort](merge-sort.md) a divide and conquer type algorithm. But unlike MergeSort, it sorts the data in place, that is, without the help of another array.

## How it works

It's comprised of two different methods:

- *quickSort*
- *partition*

To note that there are two different methods of partitioning the array, **Hoare** and **Lomuto**.

### quickSort

This method is responsible:

- Setting the base recursion exit condition;
- Picking a pivot index;
- Partition the array with the pivot index and receive the pivot's new location;
- Sort the partitioned array recursively

One small difference when using the Hoare partition method is that when recursing, we will include the pivotIdx on the left sorting as opposed to excluding it like you do in Lomuto. For example:

```sh
# Hoare 
quick_sort(arr, lo, pivotIdx)
quick_sort(arr, pivotIdx + 1, hi)

# Lomuto
quick_sort(arr, lo, pivotIdx - 1)
quick_sort(arr, pivotIdx + 1, hi)
```

### partition

Like mentioned above, there are two ways to perform the partition on an array.

#### Lomuto

I'll start with Lomuto as I think it's the easiest/simplest of the two.

Here are the steps in the algorithm:

1. Use the pivot index picked in the *quickSort* method to first, save it's value and then perform a swap with the last element of the arrary;
2. Create an index, `swapIdx` which will be used to track the last position where a swap was made. Initialize it to `lo - 1` so that it starts out of the partition that you're sorting;
3. Loop, starting in `lo` until it's less than `hi`;
4. In the loop you're going to check, if the number in the current position is less than the pivot value. If yes then we are going to increment the previous index created to track swaps and then we are going to swap the current value, say `array[i]` with the value in the index created `array[swapIdx]`;
5. After the loop is over, everything on the left, including the `swapIdx` will be less than the pivot value. Because of that we will increment the `swapIdx` once and then swap the pivot, which is in the last element of the array, with the first element that is bigger than the pivot;
6. At the end we will return the `swapIdx` to serve as a partitioning point.

#### Hoare

For Hoare you will need two pointers, one for `lo` and another for `hi` (at the start they're the edges of the array).

Here's how it goes:

1. First get the pivot value and save it;
2. Create the two pointers, one with `lo - 1` and another with `hi + 1`;
3. Wrap the next steps in an infinite loop;
4. Loop while the first pointer doesn't find a value bigger than the pivot value;
5. Do the same but in reverse for the second pointer, so reduce until you find a value smaller than the pivot;
6. If the first pointer is bigger or equal to the last pointer return the last pointer;
7. Else swap the values between the first and last pointer

And that's it :)

## Time Complexity

The best case for QuickSort is the same for the average case which is **O(n*log n)**. The best case happens if we pick the median of the array as the pivot element every time.

But QuickSort has a time complexity of **O(n^2)** for it's worst case. This will happen if we pick the largest or the smallest element as the pivot. For example in a sorted array, `[12, 10, 9, 4, 1]` we pick the last element. The size of the subarray after partitioning will be `n-1`, which then if we sum and drop the constants will become `n^2`.

## Resources

- [Hoare Visualization - csanim](https://csanim.com/tutorials/hoares-quicksort-algorithm-python-animated-visualization-code)
- [QuickSort Algorithm - Interview Kickstart](https://www.interviewkickstart.com/learn/quick-sort)
