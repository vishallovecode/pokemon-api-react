

// call api
async function fetchData(url, options) {
    options = options || {};
    const response = await fetch(url, options);
    try {
      const json = response ? await response.json() : "";
      return json;
    } catch (ex) {
      return ex;
    }
  }

  export { fetchData };
  