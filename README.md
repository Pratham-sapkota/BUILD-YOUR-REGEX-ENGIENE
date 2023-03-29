# BUILD YOUR OWN REGEX ENGIENE

## REGULAR EXPRESSION

Regular expression are patterns that provide a powerful way to search and replace in text.

There are two syntaxes that can be used to create a regular expressions object.

The long syntax:

`regexp=new RegExp("patterns","flags");`

The short one using slashes "/";

`reggexp=/pattern/; //no flags`

`regexp==/pattern/gmi //with flags g,m and i`

````// no flag g
alert( "We will, we will".replace(/we/i, "I") ); // I will, we will

// with flag g
alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will```

````

## The Problem

Our regex engine will support the following syntax:

| Syntax | Meaning                                     | Example | Matches              |
| ------ | ------------------------------------------- | ------- | -------------------- |
| a      | Match the specified character literal       | q       | q                    |
| \*     | Matches 0 or more of the previous character | a\*     | "", a, aa, aaa       |
| ?      | Matches 0 or 1 of the previous character    | a?      | "", a                |
| .      | Matches any character literal               | .       | a, b, c, d, e ...    |
| ^      | Matches the start of a string               | ^c      | c, ca, caa, cbb ...  |
| $      | Matches the end of a string                 | a$      | ba, baaa, qwerta ... |

### Matching One Character

This is the first step where we compare one pattern character and one text character. We have created a function named `matchOne(pattern,text)`
which returns boolean value. At first we see whether we have patterns or not. If the pattern is empty then the function returns true as there is no pattern to compare to. But if the text is empty then it returns false. Anything that compares with "." returns true as (.) is a wild card character.

```
For Example:
matchOnw("c.e","cde");  //returns true

```

### Matching Same Length Strings

The `match` function is a recursive function that takes in two arguments: `pattern` and `text`. The function checks whether the `pattern` matches the `text` by comparing each character in the `pattern` to the corresponding character in the `text`.
If the `pattern` is an empty string, the function returns `true` because an empty pattern matches any string.
If the `pattern` is not an empty string, the function compares the first character in the pattern to the first character in the text using the `matchOne `function. If the characters match, the function recursively calls itself with the remaining pattern and text by slicing the first character off of each string. If the characters do not match, the function returns `false`.
The `match` function continues this process until the pattern is an empty string or the characters in the `pattern` and `text` do not match, at which point the function returns `false`.
