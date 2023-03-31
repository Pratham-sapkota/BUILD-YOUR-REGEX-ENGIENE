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

This is the first step where we compare one `pattern` character and one `text` character. We have created a function named `matchOne(pattern,text)`
which returns boolean value. At first we see if `pattern` is not empty. If the `pattern` is empty then the function returns `true` as there is no `pattern` to compare to. But if the `text` is empty then it returns `false`. Anything that compares with "." returns `true` as (.) is a wild card character.

```
For Example:
matchOne("c.e","cde");  //returns true

```

### Matching Same Length Strings

The `match` function is a recursive function that takes in two arguments: `pattern` and `text`. The function checks whether the `pattern` matches the `text` by comparing each character in the `pattern` to the corresponding character in the `text`.
If the `pattern` is an empty string, the function returns `true` because an empty pattern matches any string.
If the `pattern` is not an empty string, the function compares the first character in the pattern to the first character in the text using the `matchOne `function. If the characters match, the function recursively calls itself with the remaining pattern and text by slicing the first character off of each string. If the characters do not match, the function returns `false`.
The `match` function continues this process until the pattern is an empty string or the characters in the `pattern` and `text` do not match, at which point the function returns `false`.

### The $ Character

The `$` character matches the last charcter in the string. In a `pattern` , the `$` symbol is found at the last.

```
For example:
"a$" returns true for "baa"

```

From the example above we understand that the first character of `pattern` must match the last character of `text`. Thus after slicing `pattern` and `text` in arrays the first element of `pattern` i.e `pattern[0]` must match `text[text.length-1]` to return `true`. These statements of code is placed inside the `search(pattern,text)` function.

### The ^ Character

The first character of the `pattern` string is `"^"`. If it is, it means that the `pattern` is intended to match the beginning of the `text` string.
To match the beginning of the `text` string, the code `slices` the `pattern` string starting from the second character (i.e., excluding the "^" character) using the `slice()` method. It then passes the sliced `pattern` string and the original `text` string to the `match()` function recursively.
This recursive call effectively removes the "^" character from the `pattern` string and matches the remaining pattern with the `text` string starting from its beginning. If the pattern matches the beginning of the `text` string, the `match()` function will return `true`.

### Matches Starting Anywhere

The `some()` method returns `true` as soon as there is a match between the `pattern` string and any substring of the `text` string starting from each character position in the `text` string. This early termination is possible because of the `some()` method's behavior of stopping iteration as soon as the callback function returns `true`. If no match is found for any of the substrings, the `some()` method returns `false`.

Overall, this function checks if there is a match between the `pattern` string and any substring of the `text` string starting from each character position in the `text` string. The `_` parameter is used as a placeholder to indicate that the current character value is not used in the function, and the `index` parameter is used to obtain the current `index` of the iteration.
