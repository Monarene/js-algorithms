var testAlgorithm = function (stringBody) {
  this.isPalindrome = function (stringBody) {
    result = [];
    var stringBodyArray = stringBody.split(" ");
    stringBodyArray.forEach((element) => {
      var re = /[\W_]/g;
      var lowRegStr = element.toLowerCase().replace(re, "");
      var reverseStr = lowRegStr.split("").reverse().join("");
      if (reverseStr === lowRegStr) {
        result.push(element);
      }
    });

    return result;
  };

  var palindromeResult = this.isPalindrome(stringBody);

  return {
    palindrome: palindromeResult,
  };
};

// write a palindrome test algotihm
const isPalindrome = function (stringBody) {
  result = [];
  var stringBodyArray = stringBody.split(" ");
  stringBodyArray.forEach((element) => {
    var re = /[\W_]/g;
    var lowRegStr = element.toLowerCase().replace(re, "");
    var reverseStr = lowRegStr.split("").reverse().join("");
    if (reverseStr === lowRegStr) {
      result.push(element);
    }
  });

  return result;
};

console.log(testAlgorithm("ommo fmom ollo"));
