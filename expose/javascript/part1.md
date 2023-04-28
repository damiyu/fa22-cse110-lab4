1. The `console.log statement` on line 9 will print out `values added:  20`
2. The `console.log statement` on line 13 will print out `final result:  20`
3. Technically, this file would cause a compiler error, and nothing will get printed. But, if we're compiling as we go, line 9 will print `values added:  20`
4. A compiler error occur at this line because `result` hasn't been defined by line 13. The variable `result` at line 5 only has a scope within the if statement.
5. There is a compiler error at line 9 because variable `result` can't be reassigned because of the `const` keyword.
6. Again, since `const` only allows a variable to have block scope, `result` isn't defined and we get a compiler error.