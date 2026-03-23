function printUserDetails(user) {
    var _a;
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Email: ".concat(user.email));
    console.log("Membership Level: ".concat((_a = user.membershipLevel) !== null && _a !== void 0 ? _a : "None"));
}
var premiumUser = {
    id: 101,
    name: "Alice",
    email: "alice@example.com",
    membershipLevel: "Gold"
};
printUserDetails(premiumUser);
// This would cause an error:
// premiumUser.id = 202;
