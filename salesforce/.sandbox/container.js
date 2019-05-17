module.exports = {
  "dataElements": {
    "Category": {
      "modulePath": "sandbox/localStorage.js",
      "settings": {
        "name": "catgory"
      },
      "storageDuration": "pageview",
      "defaultValue": "tv"
    }
  },
  "rules": [{
    "id": "RL1558055383471",
    "name": "Salesforce PDP Test",
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "salesforce/src/lib/actions/salesforcePDP.js",
      "settings": {
        "pdp": {
          "category": "%Category%",
          "pageName": "samsung 50 inch tv",
          "prodID": "123456789",
          "prodName": "samsung 50 inch tv",
          "prodPrice": "1234.56",
          "prodStatus": "InStock",
          "prodInv": "2"
        }
      }
    }]
  }],
  "extensions": {
    "salesforce": {
      "displayName": "Salesforce",
      "settings": {
        "siteKey": "1550dccf35ce5f7405aa26e85196de0945e390241b2d8b6"
      }
    }
  },
  "property": {
    "settings": {
      "domains": ["example.com"]
    }
  },
  "company": {
    "orgId": "ABCDEFGHIJKLMNOPQRSTUVWX@AdobeOrg"
  },
  "buildInfo": {
    "turbineVersion": "25.4.1",
    "turbineBuildDate": "2019-05-17T01:09:45.646Z",
    "buildDate": "2019-05-17T01:09:45.646Z",
    "environment": "development"
  }
}