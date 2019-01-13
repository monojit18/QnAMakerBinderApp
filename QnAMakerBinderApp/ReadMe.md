AZRQnAMakerServer
A set of REST services for Azure QnAMaker APIs.These Binder APIs can be called from both Mobile and Web applications using the exposed endpoints.
Dockerfile is included which would help containerize the service and also can be used seamlessly with Azure Container Registry or Docker Cloud or running locally. This would help in local testing and then hosting in Azure as Web API (or any other hosting services)
No need to send API subscription details as part of the request (although that option is open); these secured information can be in Azure Web API layer and service can read from process.env dictionary
Server host address is kept at 0.0.0.0 - so that it can be accesses from containerized hosting solutions like Docker Swarm
API Endpoints:
## Default

### URL - GET
*https://<host_server_details>*

## APIs

### URL - GET
*https://<host_server_details>/qnamaker/knowledgebases/all*

### URL - GET
*https://<host_server_details>/qnamaker/knowledgebases/details/:kbId*

### URL - GET
*https://<host_server_details>/qnamaker/endpointkeys*

### URL - GET
*https://<host_server_details>/qnamaker/operations/:operationId*

### URL - GET
*https://<host_server_details>/qnamaker/knowledgebase/download/:kbId/:environmentId*

### URL - GET
*https://<host_server_details>/qnamaker/alterations*

### URL - PUT
*https://<host_server_details>/qnamaker/knowledgebase/create*

 ### body

  {
    "name": "QnA Maker New FAQ - 1109",
    "qnaList": [
      {
        "id": 0,
        "answer": "Feeling good!!!",
        "source": "",
        "questions": [
          "Sports?"
        ],
        "metadata": []
      }
    ]
  }

### URL - PUT
*https://<host_server_details>/qnamaker/knowledgebase/createandpublish*

 ### body

  {
    "name": "QnA Maker New FAQ - 1708(2)",
    "qnaList": [
        {
            "id": 0,
            "answer": "Feeling good!!!",
            "source": "",
            "questions": [
            "Any Venetarian options you have?"
            ],
            "metadata": []
        }
    ]
  }

### URL - PUT
*https://<host_server_details>/qnamaker/knowledgebase/:kbId/publish*

### URL - POST
*https://<host_server_details>/qnamaker/knowledgebase/:kbId/update*

 ### body

  {
      "update":
      {
        "questions":
        [
          "Do you have any vegetarian options today?"
        ]
      }
  }

### URL - POST
*https://<host_server_details>/qnamaker/endpointkeys/:keyType/refresh*

### URL - POST
*https://<host_server_details>/qnamaker/knowledgebases/:kbId/replace*

 ### body

{
    "qnAList": [
        {
            "id": 0,
            "answer": "string",
            "source": "string",
            "questions": [
                "string"
            ],
            "metadata": [
                {
                    "name": "string",
                    "value": "string"
                }
            ]
        }
    ]
}

### URL - POST request
*https://<host_server_details>/qnamaker/alterations/replace*

### body

{
    "wordAlterations": [
        {
            "alterations": [
                "qnamaker",
                "qna maker"
            ]
        },
        {
            "alterations": [
                "botframework",
                "bot framework"
            ]
        },
        {
            "alterations": [
                "webchat",
                "web chat"
            ]
        }
    ]
}

### URL - DELETE
*https://<host_server_details>/qnamaker/knowledgebases/delete/:kbId*

### URL - DELETE
*https://<host_server_details>/qnamaker/knowledgebases/all/delete*
