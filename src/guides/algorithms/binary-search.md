# Binary Search

Binary search is one of the simplest algorithms you can find.

## How it works

It's premise is simple. Given an ordered array:

- First, define a loop and the condition in which it will break/stop. This is simply whenever `hi` is less than `lo`;
- Get the mid point value;
- If the search value is less than the mid point search on the left half of the array. This is done by setting the `hi` pointer to `mid - 1`;
- If the search value is bigger than the mid point then do the opposite and search the right half of the array. Setting `lo` to `mid + 1` will do the trick
- Otherwise we have found our value and simply return `true`;
- If the loop reaches it's end and the value wasn't found it means that it isn't in the array that we are searching and we simply return `false`

</br>

And that's it :) easy as pie!
