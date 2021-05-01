	var type;
    $(document).ready(function(){
		$(function() {
		
			  $.extend($.tablesorter.themes.bootstrap, {
				table      : 'table table-bordered',
				header     : 'bootstrap-header',
				footerRow  : '',
				footerCells: '',
				icons      : '', // add "icon-white" to make them white; this icon class is added to the <i> in the header
				sortNone   : 'bootstrap-icon-unsorted',
				sortAsc    : 'icon-chevron-up',
				sortDesc   : 'icon-chevron-down',
				active     : '',
				hover      : '', 
				filterRow  : '',
				even       : '',
				odd        : ''  
			  });
		
			  $("table").tablesorter({
	//		    sortList : [[0,1]],
				theme : "bootstrap",
			
				widthFixed: true,
			
				headerTemplate : '{content} {icon}',
				widgets : [ "uitheme", "zebra", "filter" ],
			
				widgetOptions : {
				   zebra : ["even", "odd"],
				   
				   // css class applied to the table row containing the filters & the inputs within that row
				  filter_cssFilter   : 'tablesorter-filter',
			
				  // If there are child rows in the table (rows with class name from "cssChildRow" option)
				  // and this option is true and a match is found anywhere in the child row, then it will make that row
				  // visible; default is false
				  filter_childRows   : false,
			
				  // if true, filters are collapsed initially, but can be revealed by hovering over the grey bar immediately
				  // below the header row. Additionally, tabbing through the document will open the filter row when an input gets focus
				  filter_hideFilters : false,
			
				  // Set this option to false to make the searches case sensitive
				  filter_ignoreCase  : true,
			
				  // jQuery selector string of an element used to reset the filters
				  filter_reset : '.reset',
			
				  // Delay in milliseconds before the filter widget starts searching; This option prevents searching for
				  // every character while typing and should make searching large tables faster.
				  filter_searchDelay : 300,
			
				  // Set this option to true to use the filter to find text from the start of the column
				  // So typing in "a" will find "albert" but not "frank", both have a's; default is false
				  filter_startsWith  : false,
			
				  // if false, filters are collapsed initially, but can be revealed by hovering over the grey bar immediately
				  // below the header row. Additionally, tabbing through the document will open the filter row when an input gets focus
				  filter_hideFilters : false,
			
				  // Add select box to 4th column (zero-based index)
				  // each option has an associated function that returns a boolean
				  // function variables:
				  // e = exact text from cell
				  // n = normalized value returned by the column parser
				  // f = search filter input value
				  // i = column index
				  filter_functions : {
			
					// Add select menu to this column
					// set the column value to true, and/or add "filter-select" class name to header
					// 0 : true,
			
	/*		        // Exact match only
					1 : function(e, n, f, i) {
					  return e === f;
					},*/
			
					// Add these options to the select dropdown (regex example)
					// 1 : {
					  // "A - D" : function(e, n, f, i) { return /^[A-D]/.test(e); },
					  // "E - H" : function(e, n, f, i) { return /^[E-H]/.test(e); },
					  // "I - L" : function(e, n, f, i) { return /^[I-L]/.test(e); },
					  // "M - P" : function(e, n, f, i) { return /^[M-P]/.test(e); },
					  // "Q - T" : function(e, n, f, i) { return /^[Q-T]/.test(e); },
					  // "U - X" : function(e, n, f, i) { return /^[U-X]/.test(e); },
					  // "Y - Z" : function(e, n, f, i) { return /^[Y-Z]/.test(e); }
					// }
			
					// Add these options to the select dropdown (numerical comparison example)
					// Note that only the normalized (n) value will contain numerical data
					// If you use the exact text, you'll need to parse it (parseFloat or parseInt)
	/*		        4 : {
					  "< 10"      : function(e, n, f, i) { return n < 10; },
					  "10 - 100" : function(e, n, f, i) { return n >= 10 && n <=100; },
					  "> 100"     : function(e, n, f, i) { return n > 100; }
					}*/
				 }
				}
			  });
			/*  .tablesorterPager({
				container: $(".pager"),
				cssGoto  : ".pagenum",
				removeRows: false,
				output: '{startRow} - {endRow} / {filteredRows} ({totalRows})'
			
			  });
			
			  $(".content-2").mCustomScrollbar({set_Height:500px}); */
		
			$(".datepicker").datepicker({dateFormat:'yy-mm-dd'});
			$(".datetimepicker").datetimepicker({dateFormat:'yy-mm-dd', timeFormat: 'HH:mm:ss z', showTimezone: false, useLocalTimezone: false, defaultTimezone: '+0000'});
			
			$('#files').change(function(evt) {
				$('#startUploadBtn').trigger('click');
				setTimeout(function(){
					$.post(base_url+"index.php/database/import",{type:type}, 
					function (data){
						if (data == true) {
							$.msgBox({
							 title:"Alert",
							 content:"Sucessfully imported!"
							});
						}
						else {
							$.msgBox({
							 title:"Alert",
							 content:"Not export. Please try to import again!"
							});
						}
					});
				}, 2000);
				return true;
			});
		
		});
    });
    $(window).resize(function() {
        
    }).resize();
    (function($){
           $(window).load(function(){
                   $(".mCSB_dragger_bar").attr("style","width: 100%;border-radius: 0px;background-color: #964685;");
           });
   })(jQuery);

    function logout(){
        $.post(base_url+"index.php/login/out", {}, function (data){
                document.location.href = base_url+"index.php";
        });
    }
    function onBroadCast(nId){
        $.post(base_url+"index.php/devices/broadcast", {}, function (data){
            if (data)
                $.msgBox({
                     title:"Alert",
                     content:"Success!"
                });
            else
                $.msgBox({
                     title:"Alert",
                     content:"Failure!"
                });
            });
    }
	function onUsersDetails(nId){
        document.location.href = base_url+"index.php/users/details?id="+nId;
    }
	function onOrdersDetails(nId){
        document.location.href = base_url+"index.php/orders/details?id="+nId;
    }
	function onItemsDetails(nId){
        document.location.href = base_url+"index.php/items/details?id="+nId;
    }
	function onBarcodesDetails(nId){
        document.location.href = base_url+"index.php/barcodes/details?id="+nId;
    }
    function onUsersEdit(nId){
        document.location.href = base_url+"index.php/users/edit?id="+nId;
    }
	function onOrdersEdit(nId){
        document.location.href = base_url+"index.php/orders/edit?id="+nId;
    }
	function onItemsEdit(nId){
        document.location.href = base_url+"index.php/items/edit?id="+nId;
    }
	function onBarcodesEdit(nId){
        document.location.href = base_url+"index.php/barcodes/edit?id="+nId;
    }
	function onEditUsers_Back(){
        document.location.href = base_url+"index.php/users/index";
    }
	function onEditOrders_Back(){
        document.location.href = base_url+"index.php/orders/index";
    }
	function onEditItems_Back(){
        document.location.href = base_url+"index.php/items/index";
    }
	function onEditBarcodes_Back(){
        document.location.href = base_url+"index.php/barcodes/index";
    }
	function onUsers_Edit_Submit(nId){
    $("#myForm").validate({submitHandler:function(){
         $.post(base_url+"index.php/users/save",
         {
			id:nId,
			email: $("#email").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			confirmed_value: $("#confirmed_value").val(),
			role: $("#role").val(),
			social_type: $("#social_type").val(),
			time_zone: $("#time_zone").val(),
			push_enable:$("#push_enable").is(":checked")?'true':'false',
			sound_enable:$("#sound_enable").is(":checked")?'true':'false',
			theme_type: $("#theme_type").val(),
			push_sound: $("#push_sound").val(),
			user_status: $("#user_status").val(),
			auto_accept_friend:$("#auto_accept_friend").is(":checked")?'true':'false',
			auto_notify_friend:$("#auto_notify_friend").is(":checked")?'true':'false',
			avatar: $("#avatar").val(),
			authentication_token: $("#authentication_token").val()
    }, 
         function (data){
                if (data == true) {
                    $.msgBox({
		   				 title:"Alert",
						 content:"Successfully saved!"
				 });
                }
                else {
                    $.msgBox({
   			 title:"Alert",
			 content:"Not saved!"
		    });
            }
        });
        },
        invalidHandler: function(){
                    $.msgBox({
   			 title:"Alert",
			 content:"All fields are required to be filled out. Please check the form and try  again."
		    });
        }});
        return true;
    }
    function onOrders_Edit_Submit(nId){
		$("#myForm").validate({submitHandler:function(){
			 $.post(base_url+"index.php/orders/save",
			 {
			 id:nId, comment: $("#comment").val()
		}, 
         function (data){
                if (data == true) {
                    $.msgBox({
   			 title:"Alert",
			 content:"Successfully saved!"
		    });
                }
                else {
                    $.msgBox({
   			 title:"Alert",
			 content:"Not saved!"
		    });
                }
        });
        },
        invalidHandler: function(){
                    $.msgBox({
   			 title:"Alert",
			 content:"All fields are required to be filled out. Please check the form and try  again."
		    });
        }});
        return true;
    }
	function onItems_Edit_Submit(nId){
		$("#myForm").validate({submitHandler:function(){
			 $.post(base_url+"index.php/items/save",
			 {
			 id:nId, description: $("#description").val()
		}, 
         function (data){
                if (data == true) {
                    $.msgBox({
   			 title:"Alert",
			 content:"Successfully saved!"
		    });
                }
                else {
                    $.msgBox({
   			 title:"Alert",
			 content:"Not saved!"
		    });
                }
        });
        },
        invalidHandler: function(){
                    $.msgBox({
   			 title:"Alert",
			 content:"All fields are required to be filled out. Please check the form and try  again."
		    });
        }});
        return true;
    }
	function onBarcodes_Edit_Submit(nId){
		$("#myForm").validate({submitHandler:function(){
			 $.post(base_url+"index.php/barcodes/save",
			 {
				 id:nId, barcode: $("#barcode").val(), description: $("#description").val()
			}, 
			 function (data){
					if (data == true) {
						$.msgBox({
						 title:"Alert",
						 content:"Successfully saved!"
						});
					}
					else {
						$.msgBox({
						 title:"Alert",
						 content:"Not saved!"
						});
					}
			});
        },
        invalidHandler: function(){
                    $.msgBox({
					 title:"Alert",
					 content:"All fields are required to be filled out. Please check the form and try  again."
					});
        }});
        return true;
    }	
	function onUsers_Add_Submit(){
       $("#myForm").validate({submitHandler:function(){
		 $.post(base_url+"index.php/users/add",
		 {
			email: $("#email").val(),
			username: $("#username").val(),
			password: $("#password").val(),
			confirmed_value: $("#confirmed_value").val(),
			role: $("#role").val(),
			social_type: $("#social_type").val(),
			time_zone: $("#time_zone").val(),
			push_enable:$("#push_enable").is(":checked")?'true':'false',
			sound_enable:$("#sound_enable").is(":checked")?'true':'false',
			theme_type: $("#theme_type").val(),
			push_sound: $("#push_sound").val(),
			user_status: $("#user_status").val(),
			auto_accept_friend:$("#auto_accept_friend").is(":checked")?'true':'false',
			auto_notify_friend:$("#auto_notify_friend").is(":checked")?'true':'false',
			avatar: $("#avatar").val(),
			authentication_token: $("#authentication_token").val()
		 },
		 function (data){
			if (data == true) {
					$.msgBox({
						type:"info",
						title:"Info",
						content:"Successly saved!"
					});
				$("#email").val("");
				$("#username").val("");
				$("#password").val("");
				$("#confirmed_value").val("");
				$("#role").val("user");
				$("#social_type").val("email");
				$("#time_zone").val("0");
				$("#push_enable").prop("checked", false);
				$("#sound_enable").prop("checked", false);
				$("#theme_type").val("");
				$("#push_sound").val("");
				$("#user_status").val("0");
				$("#auto_accept_friend").prop("checked", false);
				$("#auto_notify_friend").prop("checked", false);
				$("#avatar").val("");
				$("#authentication_token").val("");

				$("#username").focus();
			}
			else {
				$.msgBox({
				 title:"Alert",
				 content:"Not saved!"
				});
			}
			});
        },
        invalidHandler: function(){
                    $.msgBox({
					 title:"Alert",
					 content:"All fields are required to be filled out. Please check the form and try  again."
					});
        }});
        return true;
    }
	function onBarcodes_Add_Submit(){
       $("#myForm").validate({submitHandler:function(){
			 $.post(base_url+"index.php/barcodes/add",
			 {
			 barcode: $("#barcode").val(), description: $("#description").val()
			}, 
			 function (data){
					if (data == true) {
						$("#barcode").val("");
						$("#description").val("");						
						$("#barcode").focus();
					}
					else {
						$.msgBox({
						 title:"Alert",
						 content:"Not saved!"
						});
					}
			});		
        },
        invalidHandler: function(){
                    $.msgBox({
					 title:"Alert",
					 content:"All fields are required to be filled out. Please check the form and try  again."
					});
        }});
        return true;
    }	
	function onUsersDelete(nId){
        $.msgBox({
			title: "Are You Sure",
			content: "Are you sure you want to delete the user?",
			type: "confirm",
			buttons: [{ value: "Yes" }, { value: "No" }],
			success: function (result) {
				if (result == "Yes") {
							$.post(base_url+"index.php/users/delete", {id:nId}, function(data){
								if (data == true) {
									$.msgBox({
										 title:"Alert",
										 content:"Successfully deleted!"
									});
									document.location.href = base_url+"index.php/users/index";
								}
								else {
									$.msgBox({
										 title:"Alert",
										 content:"Delete failed!"
									});
								}
							
						
					});
				}
			}
		});
        return true;
    }
    function onOrdersDelete(nId){
        $.msgBox({
			title: "Are You Sure",
			content: "Are you sure you want to delete the order?",
			type: "confirm",
			buttons: [{ value: "Yes" }, { value: "No" }],
			success: function (result) {
				if (result == "Yes") {
						$.post(base_url+"index.php/users/deleteCheck", {id:nId}, function(data){
							if (data == true){
								$.post(base_url+"index.php/users/delete", {id:nId}, function(data){
									if (data == true) {
										$.msgBox({
											 title:"Alert",
											 content:"Successfully deleted!"
										});
										document.location.href = base_url+"index.php/users/index";
									}
									else {
										$.msgBox({
											 title:"Alert",
											 content:"Delete failed!"
										});
									}
								});
							} else {
								$.msgBox({
					 title:"Alert",
					 content:"There are photos using this user!"
					});
							}
						});
					
				}
			}
		});
        return true;
    }
	function onBarcodesDelete(nId){
        $.msgBox({
			title: "Are You Sure",
			content: "Are you sure you want to delete the barcode?",
			type: "confirm",
			buttons: [{ value: "Yes" }, { value: "No" }],
			success: function (result) {
				if (result == "Yes") {
						$.post(base_url+"index.php/barcodes/deleteCheck", {id:nId}, function(data){
							if (data == true){
								$.post(base_url+"index.php/barcodes/delete", {id:nId}, function(data){
									if (data == true) {
										$.msgBox({
											 title:"Alert",
											 content:"Successfully deleted!"
										});
										document.location.href = base_url+"index.php/barcodes/index";
									}
									else {
										$.msgBox({
											 title:"Alert",
											 content:"Delete failed!"
										});
									}
								});
							} else {
								$.msgBox({
					 title:"Alert",
					 content:"There are items using this barcode!"
					});
							}
						});
					
				}
			}
		});
        return true;
    }
	function onAddUser(){
         document.location.href = base_url+"index.php/users/add_diag";
    }
	function onAddBarcode(){
         document.location.href = base_url+"index.php/barcodes/add_diag";
    }
    function onClick_QueueTr(nId){
       document.location.href = base_url+"index.php/queue/details?id="+nId;
    }
    
    function onChangePassword(){
 	$.msgBox({ type: "prompt",
		    title: "Change Password",
		    inputs: [
		    { header: "Old Password", type: "password", name: "opassword" },
		    { header: "New Password", type: "password", name: "npassword" },
   		    { header: "Confirm Password", type: "password", name: "cpassword" }],
		    buttons: [    { value: "OK" }, {value:"Cancel"}],
		    success: function (result, values) { 
		    	if(result == "OK"){
		    	    var passbuf = {opassword:"", npassword:"", cpassword:""};
		    	        $(values).each(function (index, input) {
			            passbuf[input.name] = input.value;
			        });
		    	    if(passbuf["npassword"] == passbuf["cpassword"]) {
			         $.post(base_url+"index.php/login/changepassword", 
			         	{oldpw: passbuf["opassword"], newpw: passbuf["npassword"]},
				        function (data){
				                if (data == true) {
				                    $.msgBox({
				   			 title:"Alert",
							 content:"Successfully Changed!"
						    });
						}
				                else {
				                    $.msgBox({
				   			 title:"Alert",
							 content:"Not Changed!"
						    });
				                }
				        }
			        );
			    }
			    else{
			         $.msgBox({
					 title:"Alert",
					 content:"New and Confirm passwords must match!"
				 });
			    }
			}
		  }
	});
    }
    

    function onUserChangePassword(username){
 	$.msgBox({ type: "prompt",
		    title: "Change Password",
		    inputs: [
    		    { header: "Username", type: "text", name: "username", value: username },
		    { header: "Old Password", type: "password", name: "opassword" },
		    { header: "New Password", type: "password", name: "npassword" },
   		    { header: "Confirm Password", type: "password", name: "cpassword" }],
		    buttons: [    { value: "OK" }, {value:"Cancel"}],
		    success: function (result, values) { 
		    	if(result == "OK"){
		    	    var passbuf = {"username":"", "opassword":"", "npassword":"", "cpassword":""};
		    	        $(values).each(function (index, input) {
			            passbuf[input.name] = input.value;
			        });
		    	    if(passbuf["npassword"] == passbuf["cpassword"]) {
			         $.post(base_url+"index.php/login/changeuserpassword", 
			         	{"username":passbuf["username"], oldpw: passbuf["opassword"], newpw: passbuf["npassword"]},
				        function (data){
				                if (data == true) {
				                    $.msgBox({
				   			 title:"Alert",
							 content:"Successfully Changed!"
						    });
						}
				                else {
				                    $.msgBox({
				   			 title:"Alert",
							 content:"Not Changed!"
						    });
				                }
				        }
			        );
			    }
			    else{
			         $.msgBox({
					 title:"Alert",
					 content:"New and Confirm passwords must match!"
				 });
			    }
			}
		  }
	});
    }
    function onUserDelete(nId){
            $.msgBox({
				title: "Are You Sure",
				content: "Are you sure you want to delete the user?",
				type: "confirm",
				buttons: [{ value: "Yes" }, { value: "No" }],
				success: function (result) {
					if (result == "Yes") {
						$.post(base_url+"index.php/login/deleteuser", {id:nId}, function(data){
							if (data == true) {
								$.msgBox({
						 title:"Alert",
						 content:"Successfully deleted!"
						});
								document.location.href = base_url+"index.php/login/manageuser";
							}
							else {
								$.msgBox({
						 title:"Alert",
						 content:"Delete failed!"
						});
							}
						});
					}
				}
			});
			return true;
    }
	function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','

                line += array[i][index];
            }

            str += line + '\r\n';
        }

        return str;
    }
	function onExport_Users(){
		$.post(base_url+"index.php/database/export_users",{}, 
		function (data){
			url = base_url + data;
			window.open(url);
		});
		return true;
    }
	function onExport_Orders(){
		$.post(base_url+"index.php/database/export_orders",{}, 
		function (data){
			url = base_url + data;
			window.open(url);		
		});
		return true;
    }
	function onImport(){
		type = "user";
		$("#files").trigger("click");
		return true;
    }
	function onImport_Barcodes(){
		type = "barcode";
		$("#files").trigger("click");
		return true;
    }	