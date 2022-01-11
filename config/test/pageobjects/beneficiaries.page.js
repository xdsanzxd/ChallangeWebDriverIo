const Page = require("./page");

class BeneficiariesPage extends Page {
    get btnAdd() {
        return $("//button[normalize-space()='Add']");
    }
    get btnAddSucess() {
        return $("//button[@type='primary']");
    }
    get inputName() {
        return $("#first_name");
    }
    get inputLastName() {
        return $("#last_name");
    }
    get inputSecondLastName() {
        return $("#second_last_name");
    }
    get inputBenefitProcentage() {
        return $("#percentage");
    }
    get inputPin() {
        return $("#pin");
    }
    get btnConfirm() {
        return $("//button[normalize-space()='Confirm']");
    }
    get dropDownRelationship() {
        return $(
            "//div[@class='styles__Wrapper-sc-6qm6qf-6 gLhA-DK']//div[@class='css-16ljna5']"
        );
    }
    get txtErrorPin() {
        return $("//div[@class='styles__Message-a4dq6g-2 ebgnCy']");
    }
    get txtGotIt() {
        return $("//button[normalize-space()='Got it']");
    }

    
    async SetName(name) {
        await this.inputName.waitForExist();
        await this.inputName.setValue(name);
    }

    async SetLastName(lastName) {
        await this.inputLastName.setValue(lastName);
    }
    
    async SetSecondLastName(secondLastName) {
        await this.inputSecondLastName.setValue(secondLastName);
    }
    
    async SetBenefitPorcentage(porcentage) {
        await this.inputBenefitProcentage.setValue(porcentage);
    }

    async ClickOnBtnAdd() {
        await this.btnAdd.waitForExist();
        await this.btnAdd.click();
    }

    async ClickOnBtnAddSuccess() {
        const text = await this.txtGotIt.isDisplayed();
        if (text == true) {
            await this.txtGotIt.click();
        }
        await this.btnAddSucess.waitForExist();
        await this.btnAddSucess.click();
    }

    async SelectDate(day, month, year) {
        await $("(//div[@class='css-tdzd0p'])[1]").click();
        await browser.keys(day);
        await browser.keys("Enter");
        await $("(//div[@class='css-tdzd0p'])[2]").click();
        await browser.keys(month);
        await browser.keys("Enter");
        await $("(//div[@class='css-tdzd0p'])[3]").click();
        await browser.keys(year);
        await browser.keys("Enter");
    }

    async SelectRelationship(relationship) {
        await this.dropDownRelationship.click();
        await $("//div[contains(text(),'" + relationship + "')]").click();
    }

    async InsertPin(pin) {
        await this.inputPin.setValue(pin);
    }

    async ConfirmPin() {
        await this.btnConfirm.click();
    }

    async VerifyErrorPinMessage(message) {
        let elem = await $("//div[@type='error']").getText();
        await expect(elem).toHaveText(message);
    }
}

module.exports = new BeneficiariesPage();
