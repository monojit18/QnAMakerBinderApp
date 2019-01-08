/*jshint esversion: 6 */

class AZRQnAMakerServer
{
    
    constructor()
    {
                
        const nodeModulesPathString = "../node_modules/";  
        const Http = require("http");
        const Path = require("path");
        const BodyParser = require(nodeModulesPathString + "body-parser");
        const Express = require(nodeModulesPathString + "express");
        const AZRConstants = require("./commons/AZRConstants");
        const AZRQnAMakerRouter = require("./routers/AZRQnAMakerRouter");
        const QnAMakerBinderProxy = require(nodeModulesPathString + "azure_qnamaker_binder");
        const DotEnv = require(nodeModulesPathString + "dotenv");

        const _self = this;
        let _express = Express();
        let _httpServer = Http.createServer(_express);
        
        var prepareServer = function()
        {

            _express.use(BodyParser.json
            ({
                limit: AZRConstants.UploadLimit
            }));
            
            _express.use(BodyParser.urlencoded
            ({
                
                limit: AZRConstants.UploadLimit,
                extended: true

            }));

            _express.use(BodyParser.text());

            const ENV_FILE = Path.join(__dirname, "../.env");
            DotEnv.config({ path: ENV_FILE });

        };
        
        var prepareDefaultResponse = function()
        {
            
            _express.get("/", (request, response) =>
            {
                
                response.send("Welcome to QnAMakerBinder");    
                
            });

        };

        var prepareRouters = function()
        {
            const qnaMakerInfo = Express.Router();             
            new AZRQnAMakerRouter(qnaMakerInfo, QnAMakerBinderProxy);
            _express.use("/qnamaker", qnaMakerInfo);

        };

        var bindServer = function()
        {

            const port = (process.env.PORT || 7010);
            const host = "0.0.0.0"; // for server to be accessible from within Docker swarm
            
           _httpServer.listen(port, host, function ()
            {

                console.log(`We have started our server on port ${_httpServer.address().port}`);

            });

            _httpServer.on("close", function ()
            {

                console.log("We are Closing");    


            });

            process.on("SIGINT", function()
            {
                _httpServer.close();

            });        

        };
        
        prepareServer();
        prepareDefaultResponse();
        prepareRouters();
        bindServer();
        
    }
    
}

module.exports = new AZRQnAMakerServer();
