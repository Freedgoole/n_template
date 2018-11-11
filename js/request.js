class Request {
    handlerRequest(data) {
        let hr = new XMLHttpRequest();
        let url = "validate.php";
        let vars = "&first_name="+data.firstName+"&last_name="+data.lastName+"&email="+data.email+"&country="+data.country+"&tel="+data.tel;

        hr.open("POST", url, true);
        hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        hr.onreadystatechange = function() {
            if(hr.readyState == 4 && hr.status == 200) {
                let return_data = hr.responseText;
                ui.getMsgRequest(return_data)

            } else {
                ui.getMsgRequest('errors')  
            }
        }
        hr.send(vars);
        ui.getMsgRequest("processing...")
    }
}