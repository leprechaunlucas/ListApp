
//onfocus="fillForm()"
/**
$("#select-choice-f").change(function() {
alert("whyohwhy");
  $("#select-choice-e").append("<option>hello</option>");
});
function up(){
 $("#select-choice-e").append("<option>hello</option>");


}
 $.fn.hideOption = function() {
            this.each(function() {

        $(this).wrap('<span style="display: none">').hide()
                    });

    }
	
$.fn.showOption = function() {
    this.each(function() {
     var opt = $(this).find('option').show();
    $(this).replaceWith(opt)
        
        });
     
}
*/
	if(localStorage["genreCount"])
				{
					for(var i=1; i<Number(localStorage["genreCount"]); i++)
					{
						/////alert(i);
						//////alert(localStorage["genre"+i]);
						////select.options[select.options.length] = new Option(localStorage["genre"+i], i);
						//option.text=localStorage["genre"+i];
						//option.value=i;
						//x.add(option,x.options[null]); 
						/////document.getElementById("list").innerHTML+="<p>"+localStorage["genre"+i]+"</p>";
						document.getElementById("select-choice-a").innerHTML+="<option value="+i+">"+localStorage["genre"+i]+"</option>";
						document.getElementById("select-choice-f").innerHTML+="<option value="+i+">"+localStorage["genre"+i]+"</option>";
						//////alert("good");
					}
				}
	if(localStorage["topCount"])
				{
					var op = document.getElementById("select-choice-e");
					for(var i=1; i<Number(localStorage["topCount"]); i++)
					{
						var arr= localStorage["topId"+i].split(".");
						
						/////alert(i);
						//////alert(localStorage["genre"+i]);
						////select.options[select.options.length] = new Option(localStorage["genre"+i], i);
						//option.text=localStorage["genre"+i];
						//option.value=i;
						//x.add(option,x.options[null]); 
						/////document.getElementById("list").innerHTML+="<p>"+localStorage["genre"+i]+"</p>";
						document.getElementById("select-choice-b").innerHTML+="<option value='"+arr[1]+"."+i+"'>"+localStorage["topPickGenre"+i]+": "+localStorage["topPickName"+i]+"</option>";
						//document.getElementById("select-choice-e").innerHTML+="<option id='op"+i+"' value="+i+">"+localStorage["topPickGenre"+i]+": "+localStorage["topPickName"+i]+"</option>";
						//document.getElementById("op"+i).hide();
						//$("#select-choice-e").on("click", function() {
						//  $("#op1").hide;})
						//$("#op2").hideOption();
						//////alert("good");
						//$("#op1").attr('disabled', 'disabled');
						//$("#op3").remove();
						//$("#select-choice-e").append("");
					}
				}
	
				/**
	function alert()
			{
				alert("hi");
				if(document.getElementById("select-choice-f").val())
				{
					alert("please select a genre first");
					alert(document.getElementById("select-choice-f").val());
				}
			
			}
			*/
	$("#lister").ready(function(){
	
	
	if(localStorage["selectionCount"])
				{
					
					//alert(localStorage["selectionCount"]);
					//alert("working");
					document.getElementById("list").innerHTML+= "<ul id='selectionList'></ul>";
					for(var i=1; i<Number(localStorage["genreCount"]);i++)
					{
						//alert("working second level");
						for(var j=1; j<Number(localStorage["selectionCount"]);j++)
						{
							if(localStorage["genre"+i]==localStorage["selectionGenre"+j])
							{
								//document.getElementById("selectionList").innerHTML+= "<li id='selectionType"+i+"'>"+localStorage["genre"+i]+"</li>";
								document.getElementById("list").innerHTML+= "<div data-role='collapsible' data-theme='a' data-content-theme='a' id='selectionType"+i+"'><h3>"+localStorage["genre"+i]+"</h3></div>";

								break;
							}
						}
					
					}
					//alert("made it");
					for(var n=1; n<Number(localStorage["selectionCount"]);n++)
					{
						//alert(localStorage["selection"+n]+localStorage["selectionName"+n]+localStorage["selectionGenre"+n]);
						var string = localStorage["selection"+n];
						var id = string.split(".");
						
						
						document.getElementById("selectionType"+id[0]).innerHTML+= "<ul><li id='selectionItem"+localStorage["selection"+n]+"'>"+localStorage["selectionName"+n]+"<a href='#confirmation' onclick='flares("+n+")' data-role='button' data-inline='true' data-icon='delete' data-mini='true'>Delete</a></li></ul>";
						if(localStorage["selectionNote"+n])
						{
							document.getElementById("selectionItem"+localStorage["selection"+n]).innerHTML += "<ul><li>Note: "+localStorage["selectionNote"+n]+"</li></ul>";
						}
					}
				
				
				}
	
	
	
	
	
	
	});
	/**
						alert("got here");
						alert(localStorage["selectionCount"]);
						if(localStorage["genre"+i]==localStorage["selectionGenre"+n])
						{
						alert("start");
						document.getElementById("selectionType"+id[0]).innerHTML+= "<li id='selectionItem"+localStorage["selectionId"+n]+"'>"+localStorage["selectionName"+n]+"</li>";
						alert("end");
						}
						**/
	function flares(number)
			{
				localStorage["deathrow"]=number;
				//alert(localStorage["deathrow"]);
				
			}
	function refresh()
			{
				if(localStorage["selectionCount"])
				{
					
					//alert(localStorage["selectionCount"]);
					//alert("working");
					document.getElementById("list").innerHTML+= "<ul id='selectionList'></ul>";
					for(var i=1; i<Number(localStorage["genreCount"]);i++)
					{
						//alert("working second level");
						for(var j=1; j<Number(localStorage["selectionCount"]);j++)
						{
							if(localStorage["genre"+i]==localStorage["selectionGenre"+j])
							{
								document.getElementById("selectionList").innerHTML+= "<li id='selectionType"+i+"'>"+localStorage["genre"+i]+"</li>";
								break;
							}
						}
					
					}
					//alert("made it");
					for(var n=1; n<Number(localStorage["selectionCount"]);n++)
					{
						//alert(localStorage["selection"+n]+localStorage["selectionName"+n]+localStorage["selectionGenre"+n]);
						var string = localStorage["selection"+n];
						var id = string.split(".");
						/**
						alert("got here");
						alert(localStorage["selectionCount"]);
						if(localStorage["genre"+i]==localStorage["selectionGenre"+n])
						{
						alert("start");
						document.getElementById("selectionType"+id[0]).innerHTML+= "<li id='selectionItem"+localStorage["selectionId"+n]+"'>"+localStorage["selectionName"+n]+"</li>";
						alert("end");
						}
						*/
						
						document.getElementById("selectionType"+id[0]).innerHTML+= "<ul><li id='selectionItem"+localStorage["selection"+n]+"'>"+localStorage["selectionName"+n]+"<button onclick='clearSelection("+n+")' data-theme='d'>Cancel</button></li></ul>";
						
					}
				
				
				}
			}

	function clearSelection()
			{
				$("'#selectionItem"+localStorage["selection"+localStorage["deathrow"]]+"'").remove();
				//alert(localStorage["selection"+localStorage["deathrow"]]);
				document.getElementById("selectionItem"+localStorage["selection"+localStorage["deathrow"]]).innerHTML="";
				delete localStorage["selection"+localStorage["deathrow"]];
				//alert (localStorage["selection"+localStorage["deathrow"]]);
				localStorage["selectionCount"]= Number(localStorage["selectionCount"])-1;
				for(var i=Number(localStorage["deathrow"]); i<Number(localStorage["selectionCount"]);i++)
				{
					
					localStorage["selection"+i]=localStorage["selection"+Number(i+1)];
					//alert (localStorage["selection"+i]);
					localStorage["selectionNote"+i] = localStorage["selectionNote"+Number(i+1)];
					localStorage["selectionName"+i] = localStorage["selectionName"+Number(i+1)];
					localStorage["selectionGenre"+i] = localStorage["selectionGenre"+Number(i+1)];
					//alert(localStorage["selectionCount"]);
				
				}
				window.location.reload(true);
			
			}
	function clearList()
			{
				delete localStorage["selectionCount"];
				//alert (localStorage["selectionCount"]);
				location.reload();
				/**
				for(var i=1; i<localStorage["selectionCount"]; i++)
				{
					localStorage.removeItem("selection);
				
				}
				*/
			
			}
	function submitSelect()
			{
				var selectionId = document.getElementById("select-choice-f").value+"."+document.getElementById("select-choice-e").value;
				//alert(selectionId);
				var sameness= new Boolean();
				if(!localStorage["selectionCount"])
				{
					localStorage["selectionCount"]=1;
				}
				for(var i=1; i<localStorage["selectionCount"]; i++)
				{
					//alert("checking....");
					if(selectionId==localStorage["selection"+i])
					{
						//alert("bad check");
						sameness = true;
						break;
					}
				}
				if(sameness!=true)
				{
					localStorage["selection"+localStorage["selectionCount"]]=selectionId;
					localStorage["selectionNote"+localStorage["selectionCount"]]=document.getElementById("note").value;
					localStorage["selectionName"+Number(localStorage["selectionCount"])]=localStorage["topPickName"+document.getElementById("select-choice-e").value];
					localStorage["selectionGenre"+localStorage["selectionCount"]]=localStorage["genre"+document.getElementById("select-choice-f").value];
					//alert("selection added. name= "+localStorage["selectionName"+Number(localStorage["selectionCount"])]+" genre = "+localStorage["selectionGenre"+Number(localStorage["selectionCount"])]);
					alert("selection added");
					localStorage["selectionCount"]= Number(localStorage["selectionCount"])+1;
					location.reload();
				}
				else
				{
					alert("selection has already been added");
				
				}
			
			
			}
	function submitSelect2()
			{
				var selectionId = document.getElementById("select-choice-b").value;
				var arrg= selectionId.split(".");
				//alert(selectionId);
				var sameness= new Boolean();
				if(!localStorage["selectionCount"])
				{
					localStorage["selectionCount"]=1;
				}
				for(var i=1; i<localStorage["selectionCount"]; i++)
				{
					//alert("checking....");
					if(selectionId==localStorage["selection"+i])
					{
						//alert("bad check");
						sameness = true;
						break;
					}
				}
				if(sameness!=true)
				{
					localStorage["selection"+localStorage["selectionCount"]]=selectionId;
					localStorage["selectionNote"+localStorage["selectionCount"]]=document.getElementById("note2").value;
					localStorage["selectionName"+Number(localStorage["selectionCount"])]=localStorage["topPickName"+arrg[1]];
					localStorage["selectionGenre"+localStorage["selectionCount"]]=localStorage["genre"+arrg[0]];
					//alert("selection added. name= "+localStorage["selectionName"+Number(localStorage["selectionCount"])]+" genre = "+localStorage["selectionGenre"+Number(localStorage["selectionCount"])]);
					alert ("selection added");
					localStorage["selectionCount"]= Number(localStorage["selectionCount"])+1;
					location.reload();
				}
				else
				{
					alert("selection has already been added");
				
				}
			
			
			}
	function message()
			{
				if(document.getElementById("select-choice-f").selectedIndex==0)
				{
					alert("Please select a genre before selecting a top 10");
				}
			
			}
	function pick()
			{
			/**
			$(function(){
  $("select#select-choice-f").change(function(){
   var options ="";
   for(var i=1; i<Number(localStorage["topCount"]); i++)
				{
				
					if(localStorage["topPickGenre"+i]==localStorage["genre"+genre])
					{
					
						alert("omg");
						alert(localStorage["topPickGenre"+i]);
						alert(localStorage["genre"+genre]);
						//document.getElementById("select-choice-e").innerHTML+="<option value="+i+">"+localStorage["topPickName"+i]+"</option>";
						//doc.add(new Option(localStorage["topPickName"+i],i));
						//doc.add(new Option("New Last Option", "4"), null);
						//doc.options[1]=new Option("blahblah", "4")
						options += "<option value="+i+">"+localStorage["topPickName"+i]+"</option>";
				
					}
				
				
				}
      $("select#select-choice-e").html(options);
    
  })
})
*/				document.getElementById("select-choice-e").options.length = 0;
				//alert("lol");
				var genre = document.getElementById("select-choice-f").value;
				var doc = document.getElementById("select-choice-e");
				var list = document.getElementById("list");
				var options ="";
				var opt={};
				for(var i=1; i<Number(localStorage["topCount"]); i++)
				{
				
					if(localStorage["topPickGenre"+i]==localStorage["genre"+genre])
					{
						
						//alert("i="+i+" topPickGenre= "+localStorage["topPickGenre"+i]);
						//alert(localStorage["topPickGenre"+i]);
						//alert(localStorage["genre"+genre]);
						document.getElementById("select-choice-e").innerHTML+="<option id='op"+i+"' value="+i+">"+localStorage["topPickGenre"+i]+": "+localStorage["topPickName"+i]+"</option>";
						//document.getElementById("select-choice-e").innerHTML+="<option value="+i+">"+localStorage["topPickName"+i]+"</option>";
						//doc.add(new Option(localStorage["topPickName"+i],i));
						//doc.add(new Option("New Last Option", "4"), null);
						//doc.options[1]=new Option("blahblah", "4")
						/**
						options += "<option value="+i+">"+localStorage["topPickName"+i]+"</option>";
						alert("hi");
						var opt = document.createElement("option");
opt.value = i;
opt.text = localStorage["topPickName"+i];;
 
				doc.add(opt, doc.options[i]);
				alert("hal;jdf;lj");
				**/
				/**
				alert("a;sljdfl;sadkfj");
				 opt=document.createElement('option');
				 opt.value=i;
				opt.text=localStorage["topPickName"+i];
				doc.appendChild(opt);
				alert("a;lsjdf");
				par=document.createTextNode("pdsalkfs;ldfjasjkdf");
				//par.text="hullllllo";
				//par.createTextNode("l;asdjfs;djlfajsdf;j");
				list.appendChild(par);
				*/
					}
				
				
				}
				//$('#select-choice-e').html(options).trigger('create');
				//doc.innerHTML+=options;
				//$("#select-choice-e").append(options);
				alert("done");
			}
	function hello()
			{
				alert("hello world");
			}
	function blank()
			{
				window.localStorage.clear();
				location.reload();
			}
	function add()
			{
				document.getElementById("adder").innerHTML+='<label for="name">Genre:</label><input type="text" id="genre" value=""  />';
			}
	function fillForm()
			{
			//alert("fill form");
			//alert(localStorage["genreCount"]);
			if(localStorage["genreCount"])
				{
					//var x=document.getElementById("select-choice-a");
					//var option=document.createElement("option");
					//alert("hi");
					/////document.getElementById("list").innerHTML+="<p>hi"+localStorage["genreCount"]+"</p>";
					for(var i=1; i<Number(localStorage["genreCount"]); i++)
					{
						//alert(i);
						//alert(localStorage["genre"+i]);
						////select.options[select.options.length] = new Option(localStorage["genre"+i], i);
						//option.text=localStorage["genre"+i];
						//option.value=i;
						//x.add(option,x.options[null]); 
						/////document.getElementById("list").innerHTML+="<p>"+localStorage["genre"+i]+"</p>";
						document.getElementById("select-choice-a").innerHTML+="<option value="+i+">"+localStorage["genre"+i]+"</option>";
						//alert("good");
					}
				}
					location.reload();
			
			}
	function submitForm()
			{
				//alert("hello");
				if(!localStorage["genreCount"])
				{
					localStorage["genreCount"]=1;
				}
			
				var genreName = document.getElementById("genre").value;
				//alert(genreName);
				var same = new Boolean();
				
				for (var i =1; i<Number(localStorage["genreCount"]); i++)
				{
					if(genreName==localStorage["genre"+i])
					{
						//alert("aaaaa");
						same=true;
						break;
					}
				}
				if(same!=true)
				{
					
					//alert("I am an alert box!");
					localStorage["genre"+Number(localStorage["genreCount"])]= genreName;
					localStorage["genreCount"]=Number(localStorage["genreCount"])+1;
					//alert(localStorage["genre"+Number(localStorage["genreCount"])]+localStorage["genreCount"]);
					alert("Success!!! The genre has been generated.");
					location.reload();
				}
				else
				{
					location.reload();
					alert("this genre has already been created");
					//document.getElementById("error").innerHTML+="<p>"+"genre has already been created"+"</p>";
				}
			
			}
	function submitF()
			{	
				if(document.getElementById("select-choice-a").value && document.getElementById("top").value)
				{
					//alert("hi");
					//alert(document.getElementById("select-choice-a").value);
					if(!localStorage["topCount"])
					{
						localStorage["topCount"]=1;
					}
				
					var topName = document.getElementById("top").value;
					var topId = document.getElementById("top").value+"."+document.getElementById("select-choice-a").value;
					//var topId = localStorage["topCount"]+"."+document.getElementById("select-choice-a").value;
					//alert("topId="+topId);
					var topPickGenre = localStorage["genre"+document.getElementById("select-choice-a").value];
					//alert(topPickGenre);
					//alert("id"+topId);
					//alert(topName);
					var sameA = new Boolean();
					
					for (var i =1; i<Number(localStorage["topCount"]); i++)
					{
						if(topId==localStorage["topId"+i])
						{
							//alert("aaaaa");
							sameA=true;
							break;
						}
					}
					if(sameA!=true)
					{
						location.reload();
						//alert("I am an alert box!");
						localStorage["topId"+Number(localStorage["topCount"])]=topId;
						localStorage["topPickName"+Number(localStorage["topCount"])]= topName;
						localStorage["topPickGenre"+Number(localStorage["topCount"])]=topPickGenre;
						localStorage["topCount"]=Number(localStorage["topCount"])+1;
						alert("Success!!! The Top 10 has been generated.");
					}
					else
					{
						location.reload();
						alert("this Top 10 has already been created");
						//document.getElementById("error").innerHTML+="<p>"+"genre has already been created"+"</p>";
					}
				}
				else
				{
					alert("please pick a genre and create a Top 10");
					location.reload();
					
				}
			
			}
			
	findByName = function(isGenre) {
		var options = [];
		if (isGenre){
			var list = "genre";
			var key = "#genre";
		}
		else{
			var list = "topPickCount";
			var key = "#select-choice-e";
		}
		var next = localStorage[list+"1"];
		var i=1;
		while(next != null){
			options.push(next);
			i++;
			next = localStorage[list+i];
		}
		console.log('findByName');
        this.store.findByName($(key).val(), function(options) {
            var l = options.length;
            var o;
            $('.options-list').empty();
            for (var i=0; i<l; i++) {
                o = options[i];
                $('.options-list').append('<li><a href="#options">' + o + '</a></li>');
            }
		});
	};    
	
	window.onload = function () 
			{
			
				if(localStorage["genreCount"])
					{
						/////var select=document.getElementById("select-choice-a");
						/////var option=document.createElement("option");
						/////alert("hi");
						//document.getElementById("list").innerHTML+="<p>hi"+localStorage["genreCount"]+"</p>";
						for(var i=1; i<Number(localStorage["genreCount"]); i++)
						{
							/////alert(i);
							/////alert(localStorage["genre"+i]);
							//select.options[select.options.length] = new Option(localStorage["genre"+i], i);
							/////option.text=localStorage["genre"+i];
							/////x.add(option,x.options[null]); 
							//document.getElementById("list").innerHTML+="<p>"+localStorage["genre"+i]+"</p>";
							/////document.getElementById("select-choice-a").innerHTML+="<option>"+localStorage["genre"+i]+"</option>";
						}
					}
				this.store = new MemoryStore();
				$('#genre').on('keyup', $.proxy(this.findByName(true), this));
				$('#select-choice-e').on('keyup', $.proxy(this.findByName(false), this));
			}

