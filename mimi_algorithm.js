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

  this.endsWithIng = function (stringBodyB) {
    result = [];
    var stringBodyB = stringBodyB.split(" ");
    stringBodyB.forEach((element) => {
      var lowStr = element.toLowerCase();
      if (lowStr.endsWith("ing")) {
        result.push(element);
      }
    });

    return result;
  };

  var palindromeResult = this.isPalindrome(stringBody);
  var endsWithResults = this.endsWithIng(stringBody);

  return {
    palindrome: palindromeResult,
    ing: endsWithResults,
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

console.log(testAlgorithm("ommo fmom ollo following going"));
