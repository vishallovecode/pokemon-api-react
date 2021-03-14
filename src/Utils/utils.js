
function getRequestOptions(
    payload = null,
    method = "GET",
  ) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

  
    var requestOptions = {
      method: method,
      headers: myHeaders,
    };
    if (payload) {
      requestOptions["body"] = JSON.stringify(payload);
    }
    return requestOptions;
  }
  export { getRequestOptions };