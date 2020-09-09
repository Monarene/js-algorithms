var testAlgorithm = function (stringBody) {
  this.capitalized = function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  };

  this.changeCase = function (stringBodyC) {
    str2 = "";

    for (var i = 0; i < stringBodyC.length; i++) {
      if (stringBodyC.charAt(i) === stringBodyC.charAt(i).toLowerCase()) {
        str2 += stringBodyC.charAt(i).toUpperCase();
      } else if (
        stringBodyC.charAt(i) === stringBodyC.charAt(i).toUpperCase()
      ) {
        str2 += stringBodyC.charAt(i).toLowerCase();
      } else {
        str2 += stringBodyC.charAt(i);
      }
    }

    return str2;
  };

  this.changeCaseSentence = function (stringBodyD) {
    var stringList = stringBodyD.split(" ");
    var caseResults = [];

    stringList.forEach((element) => {
      var relement = this.changeCase(element);
      if (relement[0] === relement[0].toUpperCase()) {
        caseResults.push(relement);
      }
    });

    return caseResults;
  };

  this.isPalindrome = function (arrayBody) {
    result = [];

    arrayBody.forEach((element) => {
      var re = /[\W_]/g;
      var lowRegStr = element.toLowerCase().replace(re, "");
      var reverseStr = lowRegStr.split("").reverse().join("");
      if (reverseStr === lowRegStr) {
        result.push(element.toLowerCase());
      }
    });

    if (result.length == 1) {
      return result[0];
    } else {
      return result;
    }
  };

  this.endsWithIng = function (stringBodyB) {
    result = [];
    var stringBodyB = stringBodyB.split(" ");
    stringBodyB.forEach((element) => {
      var lowStr = element.toLowerCase();
      if (lowStr.endsWith("ing")) {
        result.push(this.capitalized(element));
      }
    });

    return result;
  };

  var endsWithResults = this.endsWithIng(stringBody);
  var upperCasedResults = this.changeCaseSentence(stringBody);
  var palindromeResult = this.isPalindrome(upperCasedResults);

  return {
    upperCased: upperCasedResults,
    ing: endsWithResults,
    palindrome: palindromeResult,
  };
};

console.log(testAlgorithm("oMMo Fmom ollo Following going a"));
