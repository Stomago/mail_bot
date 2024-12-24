//メールを送信するコード
function Send_Email(mail_from, mail_to, title, content) {
  var recipient = mail_to;
  var subject   = title;
  var sender    = mail_from;

  // setting of email
  var options = {
    body: content,// setting contant
    from: sender  // setting sending adress
  };

  // send email
  GmailApp.sendEmail(recipient, subject, content, options);
}
