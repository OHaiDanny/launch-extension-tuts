'use strict';

module.exports = function(settings) {
  const sfPDP = settings.pdp;
  const salesforceUrl = "https://pages.communications.bestbuypromotions.ca/page.aspx?QS="
    + turbine.getExtensionSettings().siteKey +
    "&a=8&s=" + btoa("TEST@TEST.COM").replace("=", "%3D") + // btoa to be changed to cookie dtmEMI
    "&c=" + sfPDP.category + 
    "&n=" + sfPDP.prodName +
    "&p=" + sfPDP.prodID +
    "&u=" + sfPDP.prodPrice +
    "&i=" + sfPDP.prodStatus + 
    "&r=" + sfPDP.prodInv;

  fetch(`${salesforceUrl}`, {mode:'no-cors'} );
};
