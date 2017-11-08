function start(){
var request;
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}
let url = document.getElementById("urltext").value;
request.open('GET', url);
request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

						var output = '<ul class="ul-treefree">';
						var buffer = JSON.parse(request.responseText);
						

						function t(buffert)
						{
									
									for (var i = 0; i < buffert.length; i++)
										{
											output += '<li>' + '<ul>';
											for (key in buffert[i]) 
											{

												if (buffert[i].hasOwnProperty(key))	{
													if (typeof buffert[i][key] == 'string' || typeof buffert[i][key] === 'boolean' || typeof buffert[i][key] === 'number'){
													//if(typeof buffert[i][key] !== 'object'){
																	output +=  '<li>' + 
																	 key + 
																	' : ' + buffert[i][key] +
																	'</li>';
													}
													else if (buffert[i][key].length == undefined) { 
														output += '<li>' + '<ul>' + key + ' : ';

															var arr = [];
															arr.push(buffert[i][key]);
															
															t(arr);
															output += '</ul>' + '</li>';}
													else {


														output += '<li>' + key + ' : ' + '<ul>';
														if (buffert[i][key][0].length == undefined) {t(buffert[i][key]);}
														else {
														output += '<li>' + buffert[i][key] + '</li>';
														}
														output +=  '</ul>' + '</li>';
													}
												}// hasOwnProperty проверка
												else {alert('hasOwnProperty fail');}
											} //для каждо го объекта
											output += '</li>' + '</ul>';
										} //для каждого элемента массива
								
							
						}
					//первый идет объект
					function k(bufferk){
						for (key in bufferk)
							{
								if (typeof bufferk[key] == 'string') 
								{
									output += '<li>' +  key + ' : ' +  bufferk[key] +  '</li>';
								}


								else
								{
									output += '<li>' + key + ' : ' + '<ul>';
									
									t(bufferk[key]);
									output += '</ul>' + '</li>';
									
								}
							}
					}

					
					if (buffer.length === undefined){
						k(buffer);
					}
					else{
						t(buffer);
					}

					output += '</ul>';
					var update = document.getElementById('info');
						update.innerHTML = output;
	}//ready
}//event




request.send();

};