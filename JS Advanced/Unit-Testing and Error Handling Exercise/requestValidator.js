function requestValidator(obj){
    const method = ['GET','POST','DELETE','CONNECT'];
    const validversion = ['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];
     const uriPattern = /(^[\w.]+$)/;
     const messagePattern = /([<>\\&'"])/;
    if(!obj.method || !method.includes(obj.method)){
       throw new Error('Invalid request header: Invalid Method');
    }
    if(!obj.uri || obj.uri === '' || !uriPattern.test(obj.uri)){
       throw new Error('Invalid request header: Invalid URI');
    }
    if(!obj.version || !validversion.includes(obj.version)){
       throw new Error('Invalid request header: Invalid Version');
    }
    if (obj.message == undefined || messagePattern.test(obj.message)) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return obj;
 }
console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
  } ))