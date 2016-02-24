function startNotifications(interval, notifications, http) {
  $( document ).ready(function() {
    var notifs = null;
    var newNotifs = null;
    var count = 0;
    notifications.showSuccess("Welcome to Amego");
    interval(function() {
      http.get('/api/alerts').success(function(alerts) {
        newNotifs = alerts;
      });

      if (notifs && notifs.length > 0) {
        for (var i = 0; i < notifs.length; i++) {
          if (notifs[i].uniqueId > count) {
            count = notifs[i].uniqueId;
            displayNotification(notifs[i], notifications);
          }
        }
      }
      notifs = newNotifs;
    }, 2000);
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
