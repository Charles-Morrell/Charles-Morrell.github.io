class User {
    constructor(firstName, lastName, email, contactform_message, phnumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phnumber;
        this.contactform_message = contactform_message;
    }
}
function sendContact() {
    fields.gender = getGender(); //This is wrong//

    if (isValid()) {
        let usr = new User(firstName.value, lastName.value, email.value, contactform_message.value, phone.value);

        alert(`${usr.firstName}) thanks for getting in Touch. `)

    } else {
        alert(`There was an error`)
    }
}

