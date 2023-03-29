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
``matchOnw("c.e","cde");`` //returns true

```

### Matching Same Length Strings

In this step we want to add support for pattern and text of greater lengths. In this step we take characters of same length . For this step we define a function `match(pattern,text)` where we call the `matchOne(pattern[0],text[0])` repeatedly and also call itself rescursively. Here
`matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))` , `matchOne(pattern[0], text[0])` checks calls the "matchOne" function and hence compares the 1st character of both pattern and text and then the `match(pattern.slice(1), text.slice(1))` is the point where the function calls itself and send the character starting from position of index one. The above code advances character by character across the the pattern/text pair. It first compares `pattern[0]` to `text[0]` and then `pattern[1]` to `text[1]` and continues comparing `pattern[i] to text[i]` until `i === pattern.length - 1`. If they ever don't match, then we know that the pattern cannot match the text.
