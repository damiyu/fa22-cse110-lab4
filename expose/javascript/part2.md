1. Line 12 will print out `3` because variable `i` has function scope and we looped 3 times.
2. Line 13 will print out `150` because variable `discountedPrice` has function scope and can be accessed.
3. Line 14 will print out `150` because variable `finalPrice` has function scope. At the last iteration of the for loop, `prices[2]` gets multipled by 0.5 and rounded to the nearest hundredths place, which simply makes `finalPrice = 300 * 0.5`.
4. This function returns an array of discounted prices based on your input array of prices and discount rate, basically multiplies each element of the prices' array by the discount rate. For example, in line 19, that function call would return `[50, 100, 150]`
5. A compiler error occurs at line 12 because variable `a` isn't defined by line 12 and only has block scope within the for loop.
6. Another compiler error occurs because `discountedPrice` is only defined inside the for loop and isn't declared within function scope for line 13 to access.
7. Line 14 will still print out `150` because we're calling `finalPrice` within range of the block scope declaration.
8. This function will do the same thing as the funtion in question number 4, and line 19 will return an array of the discounted prices `[50, 100, 150]`.
9. When we reach line 11, there will be a compiler error because variable `i` isn't in function scope, so it technically hasn't been defined yet.
10. The `console.log` statement on line 12 will print out `3` because the `prices` array has 3 elements.
11. This function does the same thing as the functions in question 4 and 8. Adding the `const` tag on the variable `discounted` means we can't reassign it, but that doesn't mean it isn't mutable. Thus, it returns the array `[50, 100, 150]` at line 17.
12. A. `student.name;`, B. `student["Grad Year"];`, C. `student.greeting();`, D. `student['Favorite Teacher'].name;`, and E. `student.courseLoad[0];`.
13. A. `32` they become strings and combine together, B. `1` string 3 becomes an int and we subtract, C. `3` null is equal to zero and we add, D. `3null` they become strings and concatenate, E. `4` true converts to one and we add, F. `0` they both evalute to zero and add, G. `3undefined` undefined becomes a string and they combine, and H. `NaN` undefined doesn't have a corresponding int so we get not-a-number.
14. A. `true` because the string 2 converts to an int and 2 is greater than 1, B. `false` because the become ints and 12 isn't smaller than 2, C. `true` because the string 2 converts to an int and 2 is equal to 2, D. `false` because they are not strictly equivalent, E. `false` because the boolean true becomes 1 and 1 isn't equal to 2, and F. `true` because we're converting an int into a boolean and 2 is greater than 0 so true is strictly equivalent to true.
15. `==` allows type conversion before the bit comparison. `===` doesn't allow type conversion, which makes a comparison more strict.
16. My loop prints out `21` and `5`.
17. The following function will return the array `[2, 4, 6]`. First, the function creates an array to store the new values. Second, we iterate through each element of the input array and insert that element inside the function `doSomething`. This second function doubles our input value, which is then pushed into the new values array `newArr`. After iterating through the input array, we return the new values in the stored array.
18. My functions outputs the current time every second.
19. The above code should print `1`, `4`, `3`, and `2` in that order. This is because `2` won't get printed out until 1 second passes and `3` has a slight delay, which allows `4` to get printed before them.
