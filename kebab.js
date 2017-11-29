
/* ********* kebab case implementation *****************************/
//function returns the kebab case string
function toKebab (str) {
    //remove leading and trailing '-'
    var tmpStr1 = str.replace(/^-+|-+$/gm,'');

    //remove leading and trailing '_'
    var tmpStr2 = tmpStr1.replace(/^_+|_+$/gm,'');

    //remove leading and trailing ' '
    var tmpStr3 = tmpStr2.replace(/^\s+|\s+$/gm,'');

    var tmpStr4 = tmpStr3.replace(/-+/gm,'-');
    var tmpStr5 = tmpStr4.replace(/_+|\s_\s/gm,'-');
    var tmpStr6 = tmpStr5.replace(/\s+/gm,'-');
    var resStr = tmpStr6.toLowerCase();

    console.log(resStr);
    return resStr;

  }
  
  var TEST_INPUTS = [
    ' ',
    '-^-',
    ' ',
    '  are you_my  Friend ',
    'ILIKETURTLES',
    '____',
    '_ a _ b _',
    '---ab c--',
    'A Cantankerous Walrus eats BIG_FISH!'
  ]
  var TEST_OUTPUTS = [
    '',
    '^',
    '',
    'are-you-my-friend',
    'iliketurtles',
    '',
    'a-b',
    'ab-c',
    'a-cantankerous-walrus-eats-big-fish!'
  ]
  
  function assert (a, b) {
    $('body').append(a === b ? '<p>PASS</p>' : `<p>FAIL: "${a}" !== "${b}"</p>`)
  }
  
  TEST_INPUTS.forEach(function (input, i) {
    assert(TEST_OUTPUTS[i], toKebab(TEST_INPUTS[i]));
  })