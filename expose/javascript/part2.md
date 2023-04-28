1. Line 12 will print out `3` because variable `i` has function scope.
2. Line 13 will cause a compiler error because `discountedPrice` has block scope inside the for loop.
3. Line 14 will print out `150` because variable `finalPrice` has function scope. At the last iteration of the for loop, `prices[2]` gets multipled by 0.5 and rounded to the nearest hundredths place, which simply makes `finalPrice = 300 * 0.5`
4. This function returns an array of discounted prices based on your input array of prices and discount rate, basically multiplies each element of the prices' array by the discount rate. For example, in line 19, that function call would return `[50, 100, 150]`
5. A compiler error occurs at line 12 because variable `a` isn't defined by line 12 and only has block scope within the for loop.
6. Another compiler error occurs because `discountedPrice` is only defined inside the for loop and isn't declared within function scope for line 13 to access.
7. Line 14 will still print out `150` because we're calling `finalPrice` within range of the block scope declaration.
8. This function will do the same thing as the funtion in question number 4, and line 19 will return an array of the discounted prices `[50, 100, 150]`
9. 