
// TODO: remove when natural exposes these

stopwords = [
'about', 'after', 'all', 'also', 'am', 'an', 'and', 'another', 'any', 'are', 'as', 'at', 'be',
'because', 'been', 'before', 'being', 'between', 'both', 'but', 'by', 'came', 'can',
'come', 'could', 'did', 'do', 'each', 'for', 'from', 'get', 'got', 'has', 'had',
'he', 'have', 'her', 'here', 'him', 'himself', 'his', 'how', 'if', 'in', 'into',
'is', 'it', 'like', 'make', 'many', 'me', 'might', 'more', 'most', 'much', 'must',
'my', 'never', 'now', 'of', 'on', 'only', 'or', 'other', 'our', 'out', 'over',
'said', 'same', 'see', 'should', 'since', 'some', 'still', 'such', 'take', 'than',
'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'those',
'through', 'to', 'too', 'under', 'up', 'very', 'was', 'way', 'we', 'well', 'were',
'what', 'where', 'which', 'while', 'who', 'with', 'would', 'you', 'your',
'http', 'ftp', 'co', 'ha', 'haha', 'de', 're', 'est', 've', 'en', 'back',
'yes', 'no', 'others', 'other', 'rt', 'la', 'will', 'lt', 'gt', 'ni',
'just', 'good', 'bad', 'di', 'je', 'van', 'km', 'maybe', 'may', 'que', 'aku', 'time', 'amp', 'not',
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '$', '1',
'2', '3', '4', '5', '6', '7', '8', '9', '0', '_'];

exports.stripStopWords = function(words){
  var ret = [];
  var number = /\d+/;
  var notword = /^\W+$/;
  var twochars = /^\w\w$/;
  for (var i = 0, len = words.length; i < len; ++i) {
    if (~stopwords.indexOf(words[i])) continue;
    if (number.test(words[i])) continue;
    if (notword.test(words[i])) continue;
    if (twochars.test(words[i])) continue;
    ret.push(words[i]);
  }
  return ret;
};

