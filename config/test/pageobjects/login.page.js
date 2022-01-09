const Page = require('./page');

class LoginPage extends Page {
    
    get inputUsername() {
        return $('#client_id');
    }
    get inputPassword() {
        return $('#password');
    }
    get btnSubmit() {
        return $('button[type="submit"]');
    }
    

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open(parameter) {
        return super.open(parameter);
    }
}

module.exports = new LoginPage();
