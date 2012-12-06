$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#additem').on('pageinit', function(){

	var myForm = $('#addForm');
	    myForm.validate({
	    	errorPlacement: function(error, element) {
				if (element.attr("name") === "gage") {
					error.insertAfter($(element).parent());
				} else {
					error.insertAfter(element);
				};
			},
			invalidHandler: function(form, validator) {

			},
			submitHandler: function() {
				var data = myForm.serializeArray();
				storeData(data);
			}
		});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	var UUID = Math.floor(Math.random()*10000000000001),
		values = {}; 
	if (data.length === 20){
		values.gcomp = false;
	};
	for (i=0, j=data.length; i<j; i++) {
		var key = data[i].name,
			val = data[i].value;
		values[key] = val;
	};
	localStorage.setItem(UUID, JSON.stringify(values));
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


