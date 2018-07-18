var run = require('./run.js');
var platform = require('../platforms/piCommands.js');

exports.getStatus = getStatus;

/*
 * Determine whether we have a wired Ethernet connection with the `ethtool
 * eth0` command. This function returns a Promise that resolves to a
 * string.  On my Rasberry Pi, the string is "Link detected: no"
 * when there is no connection and is "Link detected: yes" when
 * there is a connection.
 */
function getStatus() {
  return run(platform.getEthernetStatus);
}
