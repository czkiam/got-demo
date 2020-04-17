//source: https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
module.exports = {
  //Informational 1xx
  Continue: {
    code: 100,
    message: "The client SHOULD continue with its request.",
  },
  SwitchingProtocols: {
    code: 101,
    message:
      "The protocol SHOULD be switched only when it is advantageous to do so.",
  },
  //Successful 2xx
  OK: {
    code: 200,
    message: "The request has succeeded.",
  },
  Created: {
    code: 201,
    message:
      "The request has been fulfilled and resulted in a new resource being created.",
  },
  Accepted: {
    code: 202,
    message:
      "The request has been accepted for processing, but the processing has not been completed.",
  },
  NonAuthoritativeInformation: {
    code: 203,
    message:
      "The returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. The set presented MAY be a subset or superset of the original version.",
  },
  NoContent: {
    code: 204,
    message:
      "The server has fulfilled the request but does not need to return an entity-body, and might want to return updated metainformation.",
  },
  ResetContent: {
    code: 205,
    message:
      "The server has fulfilled the request and the user agent SHOULD reset the document view which caused the request to be sent.",
  },
  PartialContent: {
    code: 206,
    message:
      "The server has fulfilled the partial GET request for the resource.",
  },
  //Redirection 3xx
  MultipleChoices: {
    code: 300,
    message:
      "The requested resource corresponds to any one of a set of representations, each with its own specific location, and agent- driven negotiation information (section 12) is being provided so that the user (or user agent) can select a preferred representation and redirect its request to that location.",
  },
  MovedPermanently: {
    code: 301,
    message:
      "The requested resource has been assigned a new permanent URI and any future references to this resource SHOULD use one of the returned URIs.",
  },
  Found: {
    code: 302,
    message:
      "The requested resource resides temporarily under a different URI.",
  },
  SeeOther: {
    code: 303,
    message:
      "The response to the request can be found under a different URI and SHOULD be retrieved using a GET method on that resource.",
  },
  NotModified: {
    code: 304,
    message:
      "If the client has performed a conditional GET request and access is allowed, but the document has not been modified, the server SHOULD respond with this status code.",
  },
  UseProxy: {
    code: 305,
    message:
      "The requested resource MUST be accessed through the proxy given by the Location field.",
  },
  TemporaryRedirect: {
    code: 307,
    message:
      "The requested resource resides temporarily under a different URI.",
  },
  //Client Error 4xx
  BadRequest: {
    code: 401,
    message:
      "The request could not be understood by the server due to malformed syntax.",
  },
  Unauthorized: {
    code: 401,
    message: "The request requires user authentication.",
  },
  Forbidden: {
    code: 403,
    message:
      "The server understood the request, but is refusing to fulfill it.",
  },
  NotFound: {
    code: 404,
    message: "The server has not found anything matching the Request-URI.",
  },
  MethodNotAllowed: {
    code: 405,
    message:
      "The method specified in the Request-Line is not allowed for the resource identified by the Request-URI.",
  },

  NotAcceptable: {
    code: 406,
    message:
      "The resource identified by the request is only capable of generating response entities which have content characteristics not acceptable according to the accept headers sent in the request.",
  },
  ProxyAuthenticationRequired: {
    code: 407,
    message:
      "This code is similar to 401 (Unauthorized), but indicates that the client must first authenticate itself with the proxy.",
  },
  RequestTimeout: {
    code: 408,
    message:
      "The client did not produce a request within the time that the server was prepared to wait.",
  },
  Conflict: {
    code: 409,
    message:
      "The request could not be completed due to a conflict with the current state of the resource.",
  },
  Gone: {
    code: 410,
    message:
      "The requested resource is no longer available at the server and no forwarding address is known.",
  },
  LengthRequired: {
    code: 411,
    message:
      "The server refuses to accept the request without a defined Content- Length.",
  },
  PreconditionFailed: {
    code: 412,
    message:
      "The precondition given in one or more of the request-header fields evaluated to false when it was tested on the server.",
  },
  RequestEntityTooLarge: {
    code: 413,
    message:
      "The server is refusing to process a request because the request entity is larger than the server is willing or able to process.",
  },
  RequestURITooLong: {
    code: 414,
    message:
      "The server is refusing to service the request because the Request-URI is longer than the server is willing to interpret.",
  },
  UnsupportedMediaType: {
    code: 415,
    message:
      "The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.",
  },
  //Server Error 5xx

  InternalServerError: {
    code: 500,
    message:
      "The server encountered an unexpected condition which prevented it from fulfilling the request.",
  },
  NotImplemented: {
    code: 501,
    message:
      "The server does not support the functionality required to fulfill the request.",
  },
  BadGateway: {
    code: 502,
    message:
      "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
  },
  ServiceUnavailable: {
    code: 503,
    message:
      "The server is currently unable to handle the request due to a temporary overloading or maintenance of the server. The implication is that this is a temporary condition which will be alleviated after some delay.",
  },
  GatewayTimeout: {
    code: 504,
    message:
      "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (e.g. HTTP, FTP, LDAP) or some other auxiliary server (e.g. DNS) it needed to access in attempting to complete the request.",
  },
  HTTPVersionNotSupported: {
    code: 505,
    message:
      "The server does not support, or refuses to support, the HTTP protocol version that was used in the request message. ",
  },
};
