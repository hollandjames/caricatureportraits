function showImage(){
if(this.files&&this.files[0]){
    var obj = new FileReader();
    obj.onload=function(data){
        var imageUpload =document.getElementById("uploaded-image");
        imageUpload.src=data.target.result;
        imageUpload.style.display="block";
        imageUpload.style.width="100px";

    }
obj.readAsDataURL(this.files[0]);
}
////////////////////////////////////////
}

function _(id){ return document.getElementById(id); }
function submitForm(){

	_("mybtn").disabled = true;
	_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "customer-name", _("customer-name").value );
	formdata.append( "customer-email", _("customer-email").value );
	formdata.append( "description-box", _("description-box").value );
	
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "../email/PHP/email_parser.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Thanks '+_("customer-name").value+', your message has been sent.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}

function sendImage(){
	 
    formdata = new FormData();      
    
        var file = _('uploaded-image').files[0];
        if (formdata) {
            formdata.append("image", file);
            jQuery.ajax({
                url: "destination_ajax_file.php",
                type: "POST",
                data: formdata,
                processData: false,
                contentType: false,
                success:function(){


					window.alert('helo');
				}
            });
        }                       
    
}




