const LoginPage = require('../pageobjects/login.page');
const userKnowledgePage = require('../pageobjects/user-knowledge.page');
const WalletPage = require('../pageobjects/wallet.page');

describe('Scenario 1: Verify error message - "transaction exceeds your limit" ', () => {
    it('should try a deposit with BTC coin, and validate limit account massage', async () => {
        await LoginPage.open("login");
        await LoginPage.login('xdsanzxd@gmail.com', '6671445882fxF!');
        await userKnowledgePage.skipUserKnowledgeModal();
        await WalletPage.selectCoin("btc");
        await WalletPage.clickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.validateDepositModal();
    });

    it('should try a deposit with ETH coin, and validate limit account massage', async () => {
        await WalletPage.selectCoin("eth");
        await WalletPage.clickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.validateDepositModal();
    });    

    it('should try a deposit with BCH coin, and validate limit account massage', async () => {
        await WalletPage.selectCoin("bch");
        await WalletPage.clickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.validateDepositModal();
    });

    it('should try a deposit with DAI coin, and validate limit account massage', async () => {
        await WalletPage.selectCoin("dai");
        await WalletPage.clickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.validateDepositModal();
    });    

    it('should try a deposit with XRP coin, and validate limit account massage', async () => {
        await WalletPage.selectCoin("xrp");
        await WalletPage.clickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.validateDepositModal();
    });

    it('should try a deposit with MANA coin, and validate limit account massage', async () => {
        await WalletPage.selectCoin("mana");
        await WalletPage.clickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.validateDepositModal();
    });    
        
});


