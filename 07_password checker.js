class User {
    constructor(username, password) {
        this.username = username;
        this._password = password; // Use an underscore to denote it as a private property
    }

    getPassword() {
        return this._password.replace(/./g, '*'); // Replace each character with an asterisk
    }

    setPassword(newPassword) {
        if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

           //  -------------  ####### OR We Can Use That This without the this Mathod #########  ----------------
        //    setPassword(newPassword) {
        //     let containsNumber = false;
        //     let containsUppercase = false;
        //     for (let i = 0; i < newPassword.length; i++) {
        //       const char = newPassword.charAt(i);
        //       if (!isNaN(char)) {
        //         containsNumber = true;
        //       } else if (char === char.toUpperCase()) {
        //         containsUppercase = true;
        //       }
        //     }
        //     if (newPassword.length >= 8 && containsNumber && containsUppercase) {
        //       this.password = newPassword;
        //     } else {
        //       console.log(
        //         "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
        //       );
        //     }
        //   }
        // }
        



// Example usage:
const user = new User("Amin Khan", "Password@123");
console.log(user.getPassword()); // Output: ***********

user.setPassword("myPassword");  

 

user.setPassword("Mypassword123");
console.log(user.getPassword()); // Output: *************
