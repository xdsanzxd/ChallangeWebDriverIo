const Page = require("../pageobjects/page");

class ToolsMethods extends Page {

    async RandomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min).toString();
    }

    async RandomName() {
        var randomChars = "ABCDEFGHAIJEKLMSNOZ";
        var result = "";
        var length = 8;
        for (var i = 0; i < length; i++) {
            result += randomChars.charAt(
                Math.floor(Math.random() * randomChars.length)
            );
        }
        return result;
    }

    async RandomMonth() {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "Agust",
            "September",
            "October",
            "November",
            "December",
        ];
        const random = Math.floor(Math.random() * 12);
        return months[random];
    }

    async RandomRelationship() {
        const realationship = ["Relative", "Acquaintance", "Friendship"];
        const random = Math.floor(Math.random() * realationship.length);
        return realationship[random];
    }
}

module.exports = new ToolsMethods();