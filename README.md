#BUILD YOUR OWN REGEX ENGIENE

##REGULAR EXPRESSION
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

Our regex engine will support the following syntax:

## | Syntax | Meaning | Example | Matches |

## | a | Match the specified character literal | q | q |

## | _ | Matches 0 or more of the previous character | a_ | "", a, aa, aaa |

## | ? | Matches 0 or 1 of the previous character | a? | "", a |

## | . | Matches any character literal | . | a, b, c, d, e ... |

## | ^ | Matches the start of a string | ^c | c, ca, caa, cbb ... |

## | $ | Matches the end of a string | a$ | ba, baaa, qwerta ... |
