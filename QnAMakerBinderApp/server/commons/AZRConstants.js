/*jshint esversion: 6 */

const KAccountKey = "Account-Key";
const KRegionName = "Region";
const KRegionKey = "REGION_KEY";
const KBase64Key = "base64";
const KUploadLimit = "1000mb";


const ExceptionMessages =
{

    KArgumentNullMessage : "Invalid OR Null Argument",
    KRangeErrorMessage : "Out of Range or Bound",
    KReferenceErrorMessage : "Invalid Reference",
    KSyntaxErrorMessage : "Error in Parsing",
    KTypeErrorMessage : "Invalid Type",
    KURIErrorMessage : "Invalid URI Parameters",
    
};

const DefaultResponseMessages =
{

    KWelcomeMessage : "Welcome to Cognitive Binder API set for Azure!\n"  
    
};

const QnAMakerHeaders =
{

    KSubscriptionKey : "Ocp-Apim-Subscription-Key",
    KAuthKey : "Authorization"
        
};

const HttpStatusCodes =
{

    KBadRequest : 400,
    KUnAuthorized : 401,
    KForbidden : 402,
    KInternalServerError : 500,
    KServiceUnavailable : 503,
    KNoInternet : 1000,
    KSuccess : 200

};

class AZRConstants
{
        
    static get AccountKey()                 { return KAccountKey; }
    static get RegionName()                 { return KRegionName; }
    static get RegionKey()                  { return KRegionKey; }
    static get ContentModeratorApiKey()     { return KContentModeratorApiKey; }
    static get Base64Key()                  { return KBase64Key; }
    static get HttpStatusCodes()            { return HttpStatusCodes; }
    static get ExceptionMessages()          { return ExceptionMessages; }
    static get UploadLimit()                { return KUploadLimit; }
    static get DefaultResponseMessages()    { return DefaultResponseMessages; }
    static get QnAMakerHeaders()            { return QnAMakerHeaders; }

}

module.exports = AZRConstants;