/*
  This file contains functions for handling events handled by an instance
  of pushNotificationsHandler

const pushNotifications = require('../global/PushNotifications.js');
pushNotifications.functionName(param);
*/

module.exports = {
  // Function to be called when push notification is received
  onNotification: function (notification, params) {

    params.banner.showWithMessage(notification.message.body, params.banner.onPress);

    if (notification.foreground) {
      switch (notification.data.code) {
        case "MATCH":
          break;
        case "MESSAGE":
          break;
        default:
      }
    }
  },
  onRegister: async function (token, params) {
    let url = "https://jumbosmash2017.herokuapp.com/profile/device/".concat(params.profile.id).concat("/").concat(token.token).concat("/").concat(params.authToken.val);
    console.log("URL " + url);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      console.log("Successfully added device");
    }).catch((error) => {
      console.log(error);
    });
  },
}