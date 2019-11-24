// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CoordinateConversion/nls/strings":{_widgetLabel:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0456\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"\u0414\u0435\u0441\u044f\u0442\u043a\u043e\u0432\u0456 \u0433\u0440\u0430\u0434\u0443\u0441\u0438 - \u0428\u0438\u0440\u043e\u0442\u0430/\u0434\u043e\u0432\u0433\u043e\u0442\u0430",
DDLongLatNotation:"\u0414\u0435\u0441\u044f\u0442\u043a\u043e\u0432\u0456 \u0433\u0440\u0430\u0434\u0443\u0441\u0438 - \u0414\u043e\u0432\u0433\u043e\u0442\u0430/\u0448\u0438\u0440\u043e\u0442\u0430",DDMLatLongNotation:"\u0413\u0440\u0430\u0434\u0443\u0441\u0438, \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u0432\u0456 \u0445\u0432\u0438\u043b\u0438\u043d\u0438 - \u0428\u0438\u0440\u043e\u0442\u0430/\u0434\u043e\u0432\u0433\u043e\u0442\u0430",DDMLongLatNotation:"\u0413\u0440\u0430\u0434\u0443\u0441\u0438, \u0434\u0435\u0441\u044f\u0442\u043a\u043e\u0432\u0456 \u0445\u0432\u0438\u043b\u0438\u043d\u0438 - \u0414\u043e\u0432\u0433\u043e\u0442\u0430/\u0448\u0438\u0440\u043e\u0442\u0430",
DMSLatLongNotation:"\u0413\u0440\u0430\u0434\u0443\u0441\u0438, \u0445\u0432\u0438\u043b\u0438\u043d\u0438, \u0441\u0435\u043a\u0443\u043d\u0434\u0438 - \u0428\u0438\u0440\u043e\u0442\u0430/\u0434\u043e\u0432\u0433\u043e\u0442\u0430",DMSLongLatNotation:"\u0413\u0440\u0430\u0434\u0443\u0441\u0438, \u0445\u0432\u0438\u043b\u0438\u043d\u0438 \u0441\u0435\u043a\u0443\u043d\u0434\u0438 - \u0414\u043e\u0432\u0433\u043e\u0442\u0430/\u0448\u0438\u0440\u043e\u0442\u0430",GARSNotation:"GARS",GEOREFNotation:"GEOREF",
MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - \u043b\u0456\u0442\u0435\u0440\u0430 \u043a\u0430\u043d\u0430\u043b\u0443",UTMHemNotation:"UTM - \u043f\u0456\u0432\u043a\u0443\u043b\u044f (N/S)",formatInput:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u0443",copyAll:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438 \u0432\u0441\u0456",copySuccessful:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u043d\u043d\u044f \u0443\u0441\u043f\u0456\u0448\u043d\u0435",
copyFailed:"\u041d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u043a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438. \u042f\u043a \u0432\u0430\u0440\u0456\u0430\u043d\u0442, \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c ctrl+c.",parseCoordinatesError:"\u041d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u043e \u0430\u043d\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0438. \u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0441\u0432\u043e\u0454 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f.",
comfirmInputNotation:"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0443\u043c\u043e\u0432\u043d\u043e\u0433\u043e \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",latLongWarningMessage:"\u0411\u0443\u043b\u043e \u0432\u0438\u044f\u0432\u043b\u0435\u043d\u043e, \u0449\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442 \u043c\u0430\u0454 \u044f\u043a \u043f\u0440\u0435\u0444\u0456\u043a\u0441, \u0442\u0430\u043a \u0456 \u0441\u0443\u0444\u0456\u043a\u0441 \u0434\u043b\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0448\u0438\u0440\u043e\u0442\u0438 \u0430\u0431\u043e \u0434\u043e\u0432\u0433\u043e\u0442\u0438; \u0432\u0438\u0432\u0435\u0434\u0435\u043d\u0430 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 \u043f\u0440\u0435\u0444\u0456\u043a\u0441\u0456.",
inputLabel:"\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044f",outputLabel:"\u0412\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044f",cancelButtonLabel:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438",applyButtonLabel:"\u0417\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0442\u0438",posNegPrefixLabel:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043f\u0440\u0435\u0444\u0456\u043a\u0441 \u00ab+/-\u00bb \u0434\u043e \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u0445 \u0442\u0430 \u043d\u0435\u0433\u0430\u0442\u0438\u0432\u043d\u0438\u0445 \u0447\u0438\u0441\u0435\u043b",
editCoordinateDialogTitle:"\u0417\u0430\u0434\u0430\u0442\u0438 \u0440\u044f\u0434\u043e\u043a \u0444\u043e\u0440\u043c\u0430\u0442\u0443 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442",rememberDecisionLabel:"\u0417\u0430\u043f\u0430\u043c\u2019\u044f\u0442\u0430\u0442\u0438 \u043c\u0456\u0439 \u0432\u0438\u0431\u0456\u0440 \u0442\u0430 \u043d\u0435 \u043f\u0438\u0442\u0430\u0442\u0438 \u0437\u043d\u043e\u0432\u0443.\x3cbr/\x3e",coordinateInputLabel:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0438 \u0430\u0431\u043e \u043a\u043b\u0430\u0446\u043d\u0456\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0456",
zoomLabel:"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0443\u0432\u0430\u043d\u043d\u044f",multipleNotationLabel:"\u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u0443\u043c\u043e\u0432\u043d\u0456 \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f, \u044f\u043a\u0456 \u0437\u0431\u0456\u0433\u0430\u044e\u0442\u044c\u0441\u044f \u0437 \u0432\u0430\u0448\u0438\u043c \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044f\u043c. \u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c, \u044f\u043a\u0456 \u0432\u0438 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438:",
copyToClipboard:"\u041a\u043e\u043f\u0456\u044e\u0432\u0430\u0442\u0438 \u0434\u043e \u0431\u0443\u0444\u0435\u0440\u0443 \u043e\u0431\u043c\u0456\u043d\u0443",formatOutput:"\u0412\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044f \u0444\u043e\u0440\u043c\u0430\u0442\u0443",addNewNotation:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0435 \u0443\u043c\u043e\u0432\u043d\u0435 \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f",notationAddedMessage:"\u041d\u043e\u0432\u0435 \u0443\u043c\u043e\u0432\u043d\u0435 \u043f\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0434\u043e\u0434\u0430\u043d\u043e",
addLabel:"\u0414\u043e\u0434\u0430\u0442\u0438",removeCoordinate:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0443",expandOutput:"\u0420\u043e\u0437\u0433\u043e\u0440\u043d\u0443\u0442\u0438 \u0432\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044f",latitudeLabel:"\u0428\u0438\u0440\u043e\u0442\u0430",longitudeLabel:"\u0414\u043e\u0432\u0433\u043e\u0442\u0430",quadrantLabel:"\u041a\u0432\u0430\u0434\u0440\u0430\u043d\u0442",keyLabel:"\u041a\u043b\u044e\u0447",
fifteenDegreeLabel:"\u041a\u0432\u0430\u0434\u0440\u0430\u043d\u0442 15\u00b0",oneDegreeLabel:"\u041a\u0432\u0430\u0434\u0440\u0430\u043d\u0442 1\u00b0",eastingLabel:"\u0412\u0456\u0434\u043b\u0456\u043a \u043f\u043e \u043e\u0441\u0456 \u0430\u0431\u0441\u0446\u0438\u0441",northingLabel:"\u0412\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u043e\u0440\u0434\u0438\u043d\u0430\u0442\u0438",zoneLabel:"\u0417\u043e\u043d\u0430",bandLabel:"\u041a\u0430\u043d\u0430\u043b",gzdLabel:"GZD",gridSquareLabel:"\u041a\u0432\u0430\u0434\u0440\u0430\u0442 \u0441\u0456\u0442\u043a\u0438",
hemisphereLabel:"\u041f\u0456\u0432\u043a\u0443\u043b\u044f",addPointLabel:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0442\u043e\u0447\u043a\u0443",_localized:{}}});