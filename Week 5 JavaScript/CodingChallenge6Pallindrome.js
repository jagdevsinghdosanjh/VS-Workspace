// Description
// Write a program which has a function  to check whether the given string i.e, abcaaaaaacba is a palindrome or not.

// If the string is palindrome then print,”Given String is Palindrome”
// Else print “Given String is not a palindrome”

var s='madam';
const isPalindrome = function(str) 
{
    var left = 0
    var right = str.length - 1
    while (right > left) 
    {
        if (str.charAt(left) != str.charAt(right)) 
        {
            return false
        }
        left++ 
        right--
    }
    return true
}
var result=isPalindrome(s);
if(result)
console.log("Given String is a Palindrome");
else
 xcftconsole.log("Given String is not a Palindrome");