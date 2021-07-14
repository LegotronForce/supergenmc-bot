function getPerms(username) {
    try {
        return fs.readFileSync(`../resources/data/users/${username.toLowerCase()}.json`).toJSON(); // We get the permissions of a person
    } catch {
        return {};
    }
}

function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = `${hours}:${minutes} ${ampm} - ${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`;
    return strTime;
}

function checkPerms(permsList, perms) { for(let i = 0; i < permsList.length; i++) { if(perms.includes(permsList[i])) { return true; }}; return false; }

function attachIsImage(msgAttach) {
    var url = msgAttach.url; // Gets the URL of the object
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/ ) !== -1; // Checks if it is an image.
}

module.exports = {checkPerms, getPerms, attachIsImage, getTime};