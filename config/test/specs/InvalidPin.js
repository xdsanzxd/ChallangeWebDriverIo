const LoginPage = require("../pageobjects/login.page");
const userKnowledgePage = require("../pageobjects/user-knowledge.page");
const beneficiariesPage = require("../pageobjects/beneficiaries.page");
const tools = require("../tools/tools.methods")

describe("Scenario 2: Verify Incorrect PIN error", () => {
    it("should fill the form, and validate pin error message", async () => {
        var name = await tools.RandomName();
        var lastname = await tools.RandomName();
        var ndlastname = await tools.RandomName();
        var day = await tools.RandomNum(1, 29);
        var month = await tools.RandomMonth();
        var year = await tools.RandomNum(1995, 2022);
        var relationship = await tools.RandomRelationship();
        var porcentage = await tools.RandomNum(1, 50);
        var message = "Incorrect PIN";

        await LoginPage.open("login");
        await LoginPage.Login("xdsanzxd@gmail.com", "6671445882fxF!");
        await userKnowledgePage.SkipUserKnowledgeModal();
        await LoginPage.open("r/user/beneficiaries");
        await beneficiariesPage.ClickOnBtnAdd();
        await beneficiariesPage.SetName(name);
        await beneficiariesPage.SetLastName(lastname);
        await beneficiariesPage.SetSecondLastName(ndlastname);
        await beneficiariesPage.SelectDate(day, month, year);
        await beneficiariesPage.SelectRelationship(relationship);
        await beneficiariesPage.SetBenefitPorcentage(porcentage);
        await beneficiariesPage.ClickOnBtnAddSuccess();
        await beneficiariesPage.InsertPin("1234");
        await beneficiariesPage.ConfirmPin();
        await beneficiariesPage.VerifyErrorPinMessage(message);
    });
});
