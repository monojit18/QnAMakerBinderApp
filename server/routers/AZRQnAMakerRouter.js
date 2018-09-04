/*jshint esversion: 6 */

const AZRQnABaseRouter = require("./AZRQnABaseRouter");
const AZRQnAMakerService = require("../services/AZRQnAMakerService");

class AZRQnAMakerRouter extends AZRQnABaseRouter
{
    
    constructor(routerInfo, AZRQnAMakerProxy)
    {
        
        super();
        
        this.prepareQnAMakerService = function()
        {
            
            let qnaMakerService = new AZRQnAMakerService(routerInfo, AZRQnAMakerProxy);
            qnaMakerService.checkStatusAsync(this.responseCallback);            
            qnaMakerService.getKnowledgeBasesForUserAsync(this.responseCallback);
            qnaMakerService.getKnowledgeBaseDetailsAsync(this.responseCallback);
            qnaMakerService.getEndpointKeysAsync(this.responseCallback);            
            qnaMakerService.getOperationDetailsAsync(this.responseCallback);
            qnaMakerService.downloadKnowledgeBaseAsync(this.responseCallback);
            qnaMakerService.downloadAlterationsAsync(this.responseCallback);
            qnaMakerService.createKnowledgeBaseAsync(this.responseCallback);
            qnaMakerService.createAndPublishKnowledgeBaseAsync(this.responseCallback);
            qnaMakerService.publishKnowledgeBaseAsync(this.responseCallback);
            qnaMakerService.updateKnowledgeBaseAsync(this.responseCallback);
            qnaMakerService.refreshEndpointKeysAsync(this.responseCallback);
            qnaMakerService.replaceKnowledgeBaseAsync(this.responseCallback);
            qnaMakerService.replaceAlterationAsync(this.responseCallback);            
            qnaMakerService.deleteKnowledgeBaseAsync(this.responseCallback);
            
        };
        
        this.prepareQnAMakerService();
        
    }
        
}

module.exports = AZRQnAMakerRouter;