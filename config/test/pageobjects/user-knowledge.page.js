const Page = require('./page');

class ModalUserKnowledge extends Page {

    get modalUserKnowledge(){
        return $('.modal-content');
    }
    get btnSkip(){
        return $('//button[normalize-space()="Skip"]');
    }
    

    async skipUserKnowledgeModal() {
        console.log("Validating if UserKnowledged modal is present...");
        try{
            await this.modalUserKnowledge.waitForDisplayed();
        }catch(error){
            console.log(error);
        }
        let isdisplayed = await this.modalUserKnowledge.isDisplayed();
        if(isdisplayed==true){
            await this.btnSkip.click();
        }
    }
}

module.exports = new ModalUserKnowledge();
