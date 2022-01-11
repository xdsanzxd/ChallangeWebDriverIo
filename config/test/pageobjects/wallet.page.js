const Page = require('./page');

class WalletPage extends Page {

    get inputBTC() {
        return $('//label[@for="btc"]');
    }
    get btnDeposit() {
        return $('//small[normalize-space()="Deposit"]');
    }
    get opcBitsoTransfer() {
        return $('(//div[@class="styles__Card-sc-1f103c8-3 fIYEfg"])[2]');
    }
    get btnIncreaseMyLimit() {
        return $('#helper-modal-onaccept-button');
    }
    get titleSomethingWrong() {
        return $('.Typography__H3-qw5r90-2.styles__Title-sc-2g5xjx-1.hOzFem.dEfThe');
    }
    get txtTransactionExceedsLimit() {
        return $('//small[normalize-space()="This transaction exceeds your limit. Increase your account limit to continue."]');
    }
    get logoModal() {
        return $('.styles__StyledCircleIcon-sc-19a7vlm-0.hlXPvi');
    }
    get closeModal() {
        return $('(//div[@class="styles__ActionButton-sc-1yl4qxp-1 fEsGTW"])[1]');
    }


    async SelectCoin(coinName) {
        await $('//label[@for="' + coinName + '"]').waitForExist();
        await $('//label[@for="' + coinName + '"]').click();
    }
    
    async ClickOnBtnDeposit() {
        await this.btnDeposit.waitForExist();
        await this.btnDeposit.click();
    }
    
    async TransferType(opc) {
        switch (opc) {
            case "BitsoTransfer":
                await this.opcBitsoTransfer.waitForExist();
                await this.opcBitsoTransfer.click();
                break;
            case "Bitcoin":
                // code block
                break;
            case "BitcoinCash":
                // code block
                break;
            case "Dai":
                // code block
                break;
            case "Ether":
                // code block
                break;
            case "Mana":
                // code block
                break;
            case "Xrp":
                // code block
                break;
            default:
                console.log('Please, Choose a existing coin');
        }
    }

    async ValidateDepositModal() {
        await this.titleSomethingWrong.waitForExist();
        const text = await this.titleSomethingWrong;
        await expect(text).toHaveText('Oops! Something went wrong');
        const text2 = await this.txtTransactionExceedsLimit;
        await expect(text2).toHaveText('This transaction exceeds your limit. Increase your account limit to continue.');
        await this.btnIncreaseMyLimit.isDisplayed();
        await this.logoModal.isDisplayed();
        await this.closeModal.click();
    }
}

module.exports = new WalletPage();
