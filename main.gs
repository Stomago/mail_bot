function main() {
  var mail_to   = "XXXXXXXXXX.gmail.com";//送信先のメールアドレス
  var title     = "title";//メールのタイトル
  var mail_from = "YYYYYYYYYY.gmail.com";//送信者のメール
  
  var eventName     = "Event"; // Googleカレンダーで認識するイベント名
  var Google_Doc_ID = "ID"//GoogleカレンダーのID()
  
  var eventDetails = GetDetail(eventName,1);

  if (eventDetails !== null) {
    Send_Email(mail_from, mail_to, title, Replacement(eventDetails, Google_Doc_ID))
  }
}
