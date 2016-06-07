(function() {
  var HTTP, parseXML;
  if (typeof window.DOMParser !== 'undefined') {
    parseXML = function(xmlStr) {
      return new window.DOMParser().parseFromString(xmlStr, 'text/xml');
    };
  } else if (typeof window.ActiveXObject(!+'undefined' && new window.ActiveXObject("Microsoft.XMLDOM"))) {
    parseXML = function(xmlStr) {
      var xmlDoc;
      xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = 'false';
      xmlDoc.loadXML(xmlStr);
      return xmlDoc;
    };
  } else {
    throw new Error("No XML parser found.");
  }
  HTTP = {
    ajax: function(options) {
      var request, type;
      type = options.type.toUpperCase();
      request = new XMLHttpRequest();
      request.open(type, options.url, true);
      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          return options.success(request.responseText);
        }
      };
      request.onerror = options.error;
      if (type === 'POST') {
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(options.data);
      } else {
        request.send();
      }
      return request;
    },
    get: function(url, callback) {
      return this.ajax({
        type: 'GET',
        url: url,
        success: callback
      });
    },
    post: function(url, data, callback) {
      return this.ajax({
        type: 'GET',
        url: url,
        data: data,
        success: callback
      });
    }
  };
  return window.HTTP = HTTP;
})();
