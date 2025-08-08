
function setupUI(){
    document.getElementById("btn").addEventListener("click",doStuff);
        function doStuff(){
            const userInfo = {
                firstName: document.getElementById("nm").value,
                lastName: document.getElementById("ls").value,
                sheet: document.getElementById("sheet").value
            };
        }    
            sendToServer(userInfo);
            document.getElementById("nm").value = "";
            document.getElementById("ls").value = "";
            document.getElementById("sheet").value = "";
}
      