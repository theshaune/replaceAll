// # replaceAll()
// A Very simple function to extend upon the native .replace()
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

module.exports = function(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
