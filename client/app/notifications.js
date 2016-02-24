var i = 0;

function startNotifications(interval, notifications) {
  $( document ).ready(function() {

    var notifs = getNotifications();
    if(i <= notifs.length) {

      displayNotification(notifs[i++ % notifs.length], notifications);
      //notifications.closeAll();
      interval(function () {
        displayNotification(notifs[i % notifs.length], notifications);
        i++;
      }, 20000);
    }
  });
};

function displayNotification(notif, notifications) {
  var level = notif.level;
  var newText = notif.msg;
  if (level == "info") {
    notifications.showSuccess(newText);
  } else {
    notifications.showError(newText);
  }
}

function getNotifications() {
  return [
  //  {
  //  "level": "info",
  //  "msg": "Did you know you are entitled to use the lounge?"
  //},
    {
    "level": "warning",
    "msg": "Herd of wildebeest on the M25 between Jct 8 and Jct 9!"
    },{
      "level": "info",
      "msg": "Because you love football, why not let us book your tickets to the Barcelona match"
    }
  //  {
    //  "level": "info",
    //  "msg": "Early checking for your outbound flight is open"
    //},{
    //  "level": "warning",
    //  "msg": "Your flight to Barcelona has been delayed!"
    //},{
    //  "level": "warning",
    //  "msg": "Reported trafic delays around Gatwick!"
    //},{
    //  "level": "info",
    //  "msg": "See your Platinum offers for Barcelona"
    //}
  ];
}
