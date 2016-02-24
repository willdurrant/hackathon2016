function startNotifications(interval, notifications) {
  $( document ).ready(function() {
    var i = 0;
    var notifs = getNotifications();
    displayNotification(notifs[i++ % notifs.length], notifications);
    //notifications.closeAll();
    interval(function() {
      displayNotification(notifs[i % notifs.length], notifications);
      i++;
    }, 5000);
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
  return [{
    "level": "info",
    "msg": "Did you know you are entitled to use the lounge?"
  },{
    "level": "error",
    "msg": "Herd of wildebeest on the M25 between Jct 8 and Jct 9"
  }];
}
