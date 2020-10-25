const HttpRequests = require('../external/HttpRequests');
const HttpMethod = require('../config/HTTPMethod');
const ContentExternalService = require('../config/ContentExternalService');

const externalGetAllContents = async () => {
    const options = {
        hostname: ContentExternalService.HOSTNAME,
        path: ContentExternalService.GET,
        port: ContentExternalService.PORT,
        method: HttpMethod.GET
    };
    try{
        return JSON.parse(await HttpRequests.sendRequest('', options));
    }catch (e){
        return e;
    }
}

const externalGetContentById = async (id) => {
    const options = {
        hostname: ContentExternalService.HOSTNAME,
        path: `${ContentExternalService.GET}/${id}`,
        port: ContentExternalService.PORT,
        method: HttpMethod.GET
    };
    try{
        return JSON.parse(await HttpRequests.sendRequest('', options));
    }catch (e){
        return e;
    }
}

exports.externalGetAllContents = externalGetAllContents;
exports.externalGetContentById = externalGetContentById;