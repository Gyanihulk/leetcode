// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

function defangIPaddr(ipAddress) {
    // Using the replace method with a regular expression to replace all occurrences of '.' with '[.]'
    return ipAddress.replace(/\./g, "[.]");
}

// Example usage:
const ipAddress = "192.168.1.1";
const defangedIP = defangIPaddr(ipAddress);
console.log(defangedIP);
