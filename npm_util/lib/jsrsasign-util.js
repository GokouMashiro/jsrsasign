/*! jsrsasign-util-1.0.0 (c) 2016 Kenji Urushima | kjur.github.com/jsrsasign/license
 */
/*! nodeutil-1.0.0 (c) 2015 Kenji Urushima | kjur.github.com/jsrsasign/license
 */
function readFileUTF8(a){return require("fs").readFileSync(a,"utf8")}function readFileHexByBin(c){var b=require("jsrsasign");var a=require("fs");return b.rstrtohex(a.readFileSync(c,"binary"))}function readFile(b){var a=require("fs");return a.readFileSync(b,"binary")}function saveFile(c,b){var a=require("fs");a.writeFileSync(c,b,"binary")}function saveFileBinByHex(e,b){var a=require("fs");var c=require("jsrsasign");var d=c.hextorstr(b);a.writeFileSync(e,d,"binary")};
exports.readFileUTF8 = readFileUTF8;
exports.readFileHexByBin = readFileHexByBin;
exports.readFile = readFile;
exports.saveFile = saveFile;
exports.saveFileBinByHex = saveFileBinByHex;

