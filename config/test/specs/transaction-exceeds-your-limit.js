const LoginPage = require('../pageobjects/login.page');
const userKnowledgePage = require('../pageobjects/user-knowledge.page');
const WalletPage = require('../pageobjects/wallet.page');

describe('Scenario 1: Verify error message - "transaction exceeds your limit" ', () => {
    it('should try a deposit with BTC coin, and validate limit account massage', async () => {
        await LoginPage.open("login");
        await LoginPage.Login('xdsanzxd@gmail.com', '6671445882fxF!');
        await userKnowledgePage.SkipUserKnowledgeModal();
        await WalletPage.SelectCoin("btc");
        await WalletPage.ClickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.ValidateDepositModal();
    });

    it('should try a deposit with ETH coin, and validate limit account massage', async () => {
        await WalletPage.SelectCoin("eth");
        await WalletPage.ClickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.ValidateDepositModal();
    });    

    it('should try a deposit with BCH coin, and validate limit account massage', async () => {
        await WalletPage.SelectCoin("bch");
        await WalletPage.ClickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.ValidateDepositModal();
    });

    it('should try a deposit with DAI coin, and validate limit account massage', async () => {
        await WalletPage.SelectCoin("dai");
        await WalletPage.ClickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.ValidateDepositModal();
    });    

    it('should try a deposit with XRP coin, and validate limit account massage', async () => {
        await WalletPage.SelectCoin("xrp");
        await WalletPage.ClickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.ValidateDepositModal();
    });

    it('should try a deposit with MANA coin, and validate limit account massage', async () => {
        await WalletPage.SelectCoin("mana");
        await WalletPage.ClickOnBtnDeposit();
        await WalletPage.TransferType("BitsoTransfer");
        await WalletPage.ValidateDepositModal();
    });    
        
});


