/* Search
Biary search is a technique for very rapidly searching a sorted collection by cutting the search space in half in every pass.

Given a sorted array, such as this:
[1,3,16,22,31,33,34]
You can search for the value 31, as follows:

1. pick the midpoint: 22

2. The value is higher than 22, so now consider only the right half of the previous array:
[...31,33,34]

3. pick the midpoint :33

4. the value is lower than 33, so now consider only the left half of the previous array:
[...31]
5. pick the midpoint 31

6 you've hit the value

7 return the index of the value

Notes 
* if you don't find the value, you can return null

* If at any point you calculate the index of the midpoint and get a fractional number , just round it down ("floor" it)


*/
