/*jshint esversion: 6 */

const AZRConstants = require("../commons/AZRConstants");
const Utils = require("../../node_modules/utility_helper");

class AZRQnAMakerService
{
        
    constructor(routerInfo, azureQnAMakerProxy)
    {
        
        const _self = this;
        this.pepareQnAMakerClient = function(request, qnaMakerAPIKey)
        {
 
            if ((request === null) || (request === undefined))
                return null;
            
            let subscriptionKeyString = process.env[qnaMakerAPIKey];
            if (Utils.isNullOrEmptyString(subscriptionKeyString) == true)
            {

                subscriptionKeyString = request.get(AZRConstants.QnAMakerHeaders
                                                    .KSubscriptionKey);
                if (Utils.isNullOrEmptyString(subscriptionKeyString) == true)                
                    return null;

            }
            
            let qnaMakerClient = new _self.azureQnAMakerProxy(subscriptionKeyString);
            return qnaMakerClient;
            
        };
        
        this.processArgumentNullErrorResponse = function(response, responseCallback)
        {
            
            let evalError = new EvalError(AZRConstants.ExceptionMessages
                                                        .KArgumentNullMessage);
            responseCallback(response, null, evalError);
            
        };
        
        this.routerInfo = routerInfo;
        this.azureQnAMakerProxy = azureQnAMakerProxy;

    }

    getKnowledgeBasesForUserAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/knowledgebases/all",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.getKnowledgeBasesForUserAsync((responseBody,
                                                                error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    getKnowledgeBaseDetailsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/knowledgebase/details/:kbId",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let kbIdString = request.params.kbId;
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.getKnowledgeBaseDetailsAsync(kbIdString,
                                                            (responseBody,
                                                                error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });

    }

    getEndpointKeysAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/endpointkeys",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.getEndpointKeysAsync((responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    getOperationDetailsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/operations/:operationId",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let operationIdString = request.params.operationId;
            if (Utils.isNullOrEmptyString(operationIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.getOperationDetailsAsync(operationIdString,
                                                        (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    downloadKnowledgeBaseAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/knowledgebase/download/:kbId/:environmentId",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let kbIdString = request.params.kbId;
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let environmentIdString = request.params.environmentId;
            if (Utils.isNullOrEmptyString(environmentIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.downloadKnowledgeBaseAsync(kbIdString,
                                                            environmentIdString,
                                                            (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    downloadAlterationsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/alterations", (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.downloadAlterationsAsync((responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    createKnowledgeBaseAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/knowledgebase/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.createKnowledgeBaseAsync(request.body,
                                                        (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    createAndPublishKnowledgeBaseAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/knowledgebase/createandpublish",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.createAndPublishKnowledgeBaseAsync(request.body,
                                                                    (responseBody,
                                                                        error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    publishKnowledgeBaseAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/knowledgebase/:kbId/publish",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let kbIdString = request.params.kbId;
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.publishKnowledgeBaseAsync(kbIdString,
                                                            (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    updateKnowledgeBaseAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.patch("/knowledgebases/:kbId/update",
                                (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let kbIdString = request.params.kbId;
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.updateKnowledgeBaseAsync(kbIdString, request.body,
                                                        (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    refreshEndpointKeysAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.patch("/endpointkeys/:keyType/refresh",
                                (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let keyTypeString = request.params.keyType;
            if (Utils.isNullOrEmptyString(keyTypeString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.refreshEndpointKeysAsync(keyTypeString,request.body,
                                                        (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    replaceKnowledgeBaseAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/knowledgebases/:kbId", (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let kbIdString = request.params.kbId;
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.replaceKnowledgeBaseAsync(kbIdString,
                                                            request.body,
                                                            (responseBody,
                                                                error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    replaceAlterationAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/alterations", (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.replaceAlterationAsync(request.body,
                                                        (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    deleteKnowledgeBaseAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/knowledgebases/delete/:kbId", (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let kbIdString = request.params.kbId;
            if (Utils.isNullOrEmptyString(kbIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.deleteKnowledgeBaseAsync(kbIdString,
                                                            (responseBody,
                                                                error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    deleteAllKnowledgeBasesAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/knowledgebases/all/delete", (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let qnaMakerBinderProxy = self.pepareQnAMakerClient(request,
                                                                AZRConstants
                                                                .QnAMakerHeaders
                                                                .KSubscriptionKey);
            qnaMakerBinderProxy.deleteAllKnowledgeBasesAsync((responsesArray,
                                                                errorsArray) =>
            {

                let responseBody = {};
                responseBody.responses = responsesArray;
                responseBody.errors = errorsArray;

                responseCallback(response, responseBody, null);
                
            });
        });
    }
}

module.exports = AZRQnAMakerService;
