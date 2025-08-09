function doGet(){
  
  return HtmlService.createHtmlOutputFromFile("page");
}


function userClicking(userInfo){
  var id = "1kgLfZp4m634mJPTBDqfj9cmHncVanMhNdAuuOhNuFiY";
  var ss = SpreadsheetApp.openById(id);
  var ws = ss.getSheetByName("data");

  ws.appendRow([userInfo.firstName, userInfo.lastName, userInfo.sheet,new Date()]);

  
}
