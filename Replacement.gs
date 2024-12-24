//メール本文を変換するコード
//containtにある文章を置換してメール本文を書き換える
function Replacement(EventDetails, ID) {
  // Google Docs ID
  var docId = ID;

  // map for replacement
  var replacementMap = {
    "<title>"        : EventDetails.title,
    "<start>"        : EventDetails.startTime,
    "<end>"          : EventDetails.endTime,
    "<location>"     : EventDetails.location,
    "<description>"  : EventDetails.description 
  };

  // open Google Docs file
  var doc = DocumentApp.openById(docId);

  // get and copy the body
  var body = doc.getBody();
  var originalText = body.getText();

  // replace the text
  for (var key in replacementMap) {
    originalText = originalText.replace(new RegExp(escapeRegExp(key), 'g'), replacementMap[key]);
  }
  return originalText
}

// escape the Escaping special characters in regular expressions
function escapeRegExp(string) {
  return string.replace(/[.*+?^=!:${}()|\[\]\\]/g, "\\$&");
}
