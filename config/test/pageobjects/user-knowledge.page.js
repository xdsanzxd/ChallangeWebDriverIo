const Page = require('./page');

class ModalUserKnowledge extends Page {

    get modalUserKnowledge() {
        return $('.modal-content');
    }
    get btnSkip() {
        return $('//button[normalize-space()="Skip"]');
    }


    async SkipUserKnowledgeModal() {
        console.log("Validating if UserKnowledged modal is present...");
        let isdisplayed = await this.modalUserKnowledge.isDisplayed();
        if (isdisplayed == true) {
            await this.btnSkip.click();
        }
    }
}

module.exports = new ModalUserKnowledge();
