var wheeboxtesttype = "", userBasedTestSettings = {}, questionsViewedByUser = {},  questionsMarkedByUser = {}, windowLoadStatus = "freshWindow";
var preShownInst, lastViewQuesID = 1;
var imageRepeateImageFinished = false;
var intervaltoclear;
var counterdownloaretry=0;
var istestdownloaded=false;
var isappletloaded=false;
var totalwarningcounter=-50;
var subjectiveInt;
var calledResumeTestWriteFromOnCheeting = false;
var calledResumeTestWriteFromClearResponse = false;
var showCameraClicked = false;
var isSubjectiveCheetingCalled = false;
function getHtml(id) {
	var getTest=document.getElementById(id).value;

	return getTest;                // Function returns the product of a and b
}
var isStopLastVideoRecordingMethodCalled = false;
var isAutoSubmitCalled = false;
var callFromResume = false;
var callButtonGreen = true;
/*Var for Section Timer Start*/
var isSecForFirst = true;
var switchQuestion = false;
/*Var for Section Timer End*/
/* var for audio question Start*/
var editableCodeMirror; 
var lastsub_check= false;
var pwcPannel = true;
var audioList = Array();
/*audioCompreJsonData : it contains only distinct audio list*/
var audioCompreJsonData = {};
var isAudioPlaying = false;
var isSecTimerComplete = false;
var audioPath = "";
var endTestShow = false;
/*Var for subjective*/ 
var couterforsub=0;
var lastansval="";
var currentQuestion="";
var storingQflag="";
var doit=true;
/*Var for subjective end */
var timeCheck = true;
var autosubmit=false;
var nextQuestionImage=false;
var previousQuestionImage=false;
var allowcheeting=true;
var adpnewque = 1;
var secsecque = 0;
var newnewADP=0;
var adp_attempt = 0;
var Nor_chk=0;
var isPaused = true;
var testIsSubimiting=false;
var skip_compre="";
var istestImageCalled = true;
var ignoreFirstWarning=false; 
var valueADP="1";			//Adaptive Question No variable which is only use for Printing
var valueOTH="1";
var arr = Array();
var arr1 = Array();
var arr2 = Array();
var arr3 = Array();
var arr4 = Array();
var arr5 = Array();
var arr6 = Array();
var opt7 = Array();
var arr7 = Array();
var arr8 = Array();
var arr9 = Array();
var images = Array();
var images1 = Array();
var ques_no = Array();
var arr10 = Array();
var arr11 = Array();
var arr12 = Array(); 
var arr13 = Array(); 
var arr15= Array();
var arr16= Array();
var arr17= Array();
var arr18= Array();
var arr37= Array();//sectiontmer
//option image
var op1_images = Array();
var op2_images = Array();
var op3_images = Array();
var op4_images = Array();
var op5_images = Array();
var op6_images = Array();
var op7_images = Array();
//option image
var display_secName = Array();
var section_change_warning = Array();
var sec_inst = Array();
var attemptedQuesSNO = Array();
var que_id = Array();
var qtype = Array();
var psqn = "";var psqflg = "";var psop1max = "";var psop1min = "";
var psop2max = "";var psop2min = "";var psop3max = "";var psop3min = "";
var psop4max = "";var psop4min = "";var psop5max = "";var psop5min = "";
var psop6max = "";var psop6min = "";var psop7max = "";var psop7min = "";
var istimerstarted=true;
var qbankjson;
var oprtionWithtextarea="";
var timeRemaining;
		var hrs,mins,secs,TimerRunning,TimerID;
            var tamp,inc="false";
            TimerRunning=false;
            var ino=0;
	    var cnt=0;	
	    var imgpath="";
	   
	    function testImage()
		{ timeTakenPerQues();
try{
allowtogo=false;
}catch(e){
	alert(e);
}
//            	alert("enter--2");
var compCode = document.getElementById("comp_code").value;
if(compCode == "0176002"){
	document.getElementById('b').innerHTML =
		'<img id="testImage2" style="display: none;" ' +
		'src = "/WET-2/assest/images/internet.png?'+Math.random() + '" ' +
		'onerror="testFail();" ' + 'onload="testImagedone();">';
}else{
		document.getElementById('b').innerHTML =
		'<img id="testImage2" style="display: none;" ' +
		'src = "/WET-2/assest/images/internet.png?'+Math.random() + '" ' +
		'onerror="testFail();" ' + 'onload="testImagedone();">';
}
        }
	    var myAutoSubmit = true;
        function testImagedone()
        {	 
        	$(".containerlandscape").fadeOut(100);
        	document.getElementById("testSubmitMsg").style.display="block";
    		document.getElementById("form").style.display="none";
        	document.getElementById("ImageLoader").style.display = "block";			
        	var email=document.getElementById('email').value;
        	var email=document.getElementById('email').value;
        	
        	
        	var submitBy=document.getElementById('submitBy').innerHTML;
        	if(submitBy=="")submitBy="autoSubmit";
        	
        	allowtogo=false;
        	autosubmit=true;
        	
        	var lastvalue=document.getElementById('hid').value;
        	 
        	if(storingQflag == "4" && lastsub_check == false){
        		callingparentforsub_lastques(storingQflag,lastvalue);
        		WritingLastQuestion("next",'','',lastvalue);
            	return false;
            }
        	if(storingQflag == "5"){
        		//callingparentforspro(storingQflag);
        	}
        	if(storingQflag == "18"){
        		if(document.getElementById("typing_clock_check"+lastvalue).value=='on'){
        			stopTyping(lastvalue);
        		}
        	}
        	if(storingQflag=="13"){
           	 var user_ans="";
               
               var a1 = document.getElementsByName("option"+lastvalue);
               user_ans=a1[0].value.replace(new RegExp(';', 'g'), '');   //alert("a1 = "+a1.length);
              
              try{if(a1[1].value==null){a1[1].value='';}user_ans+="#:#"+a1[1].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
             	try{if(a1[2].value==null){a1[2].value='';}user_ans+="#:#"+a1[2].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
             	try{if(a1[3].value==null){a1[3].value='';}user_ans+="#:#"+a1[3].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
             	try{if(a1[4].value==null){a1[4].value='';}user_ans+="#:#"+a1[4].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
             	try{if(a1[5].value==null){a1[5].value='';}user_ans+="#:#"+a1[5].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
             	
            	document.getElementById("user_typedans"+lastvalue).value =user_ans ; 
            	user_ans=user_ans.replace(/\ /g,'');   	   
               document.getElementById("user_ans"+lastvalue).value =user_ans ; 
              }
        	
        	if(myAutoSubmit){
        		
//        		var isRecordingEnabled = document.getElementById('isRecordingEnabled').innerHTML;
        		//alert(isRecordingEnabled+"====="+isStopLastVideoRecordingMethodCalled+"==="+isAutoSubmitCalled);
        		/*
        		 * Roll back last video capture code in 8th Dec2020
        		 */
// 				if(isRecordingEnabled == "1" && !isStopLastVideoRecordingMethodCalled){
// 					isAutoSubmitCalled = true;
// 					isStopLastVideoRecordingMethodCalled = true;
// 					stopLastVideoRecording();
// 					return false;
// 				}
        		
        	var url="EndTestV2.obj?login_id="+email+"&submitBy="+submitBy;
      		document.form.action="EndTestV2.obj?login_id="+email+"&submitBy="+submitBy;
              document.form.submit();
              myAutoSubmit = false;
        	}
        	 return true ;
        }
	    function showMessage(str) {
	    	//alert("61"+str); 
	    	try{
	    	if(str=="endtest"){  
	    		document.getElementById("allbutton").style.display='none';
	    		document.getElementById("testSubmitMsg").style.display="block";
	    		document.getElementById("form").style.display="none";
	    	}else{  
	    		document.getElementById("messagebox").innerHTML = str;
	    		var tim = window.setTimeout("end('"+str+"')", 6000);  // show for 4 seconds
	    	}  
	    	}catch (e) {
				// TODO: handle exception
			}
	    	 
    		}
    		
    		function end(str) {
    			try{
    		    	if(str=="endtest"){ 
    		    		document.getElementById("testSubmitMsg").style.display="none";
    		    		document.getElementById("form").style.display="block";
    		    	}   
    		    	}catch (e) {
    					// TODO: handle exception
    				}
    		document.getElementById("messagebox").innerHTML = "";  // clear the messagebox
    		}
	    
            function AccessClipboardData() {
                try {
                    window.clipboardData.setData('text', "No print data");
                } catch (err) {
                    txt = jsonObj[49030]+"\n\n";
                    txt +=jsonObj[49031]+err.description + "\n\n";
                    txt += jsonObj[49032]+"\n\n"; mainchekingforcheeet=true;
                    swal("Error",txt,"error");
                }
            }
            
            function getRan_Opt(name){
         	   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
         	      return decodeURIComponent(name[1]);
         	}
            function Init() //call the Init function when u need to start the timer
            {
            	wheeboxtesttype = $("#wheeboxtesttype").val();
            	try{
            		if(wheeboxtesttype == "CBTBASEDTEST") {
            		function disableScrolling(){
            		    var x=window.scrollX;
            		    var y=window.scrollY;
            		    window.onscroll=function(){window.scrollTo(x, y);};
            		}
            		disableScrolling();
            		setTimeout(function(){
                	allowcheeting=true;
                     IMG_CHK_SUB();
                    mins=document.getElementById("timer").value;
                    if(mins>60)
                    {   hrs=mins/60;
                        hrs= parseInt(hrs);
                        mins=mins-(hrs*60);
                    }else hrs=0;
                    secs=0;
                    call();
                    $("#ImageLoader").css("display","none");
                    $(".containerlandscape").css("display","block");
                    function enableScrolling(){
                        window.onscroll=function(){};
                    }
                    enableScrolling();
                    }, 1000);
            		}else {
            			//alert("");
                    	allowcheeting=true;
                    	//changeHashOnLoad();
                    	//document.getElementById("chkbox").checked = true;
                    	//constructKeyboard();
                    			//keyStart();	
                         IMG_CHK_SUB();	
                         //alert("HI");
                        mins=document.getElementById("timer").value;
                        if(mins>60)
                        {   hrs=mins/60;
                            hrs= parseInt(hrs);
                            mins=mins-(hrs*60);
                        }else hrs=0;
                        secs=0;                call();          //      StopTimer();
            		}
            	}catch (e) {alert(e.lineNumber);
					// TODO: handle exception
				}            
            }
            function StopTimer()
            {  
            	
            	if(TimerRunning)
                clearTimeout(TimerID);
                TimerRunning=false;
            }
          
           
            function myFunction()
            {
            	TimerID=setInterval(function(){StartTimer();},1000);
            }
            var isPausedtimer=0;
            function StartTimer()
            {  
            	if(isPaused){
            		
            		isPausedtimer=0;
            	 
            	// alert("start--Timer----64");
            	TimerRunning=true;
            	timeview=document.getElementById("timeV").value;
            	
		if(timeview==null||timeview=="")
			timeview="HMS"
            	if(timeview=="HMS"){
            		document.getElementById("timediv").innerHTML="<i class='fa icon-time'></i> "+Pad(hrs)+":"+Pad(mins)+":"+Pad(secs)+"";
            		setTimeInCookies(Pad(hrs)+"--"+Pad(mins)+"--"+Pad(secs));    
            	} 
            	else{
            		document.getElementById('timediv').innerHTML ="<i class='fa ficon-time'></i> "+Pad(hrs)+":"+Pad(mins)+"";
            		setTimeInCookies(Pad(hrs)+"--"+Pad(mins)+"--"+Pad(secs));    
            	}
               Check();
                if(hrs==0 && mins==0 && secs==0)                    StopTimer();
                if(mins==0 && hrs>0)
                {   mins=60; hrs--; }
                if(secs==0)
                {   mins--;secs=60; }secs--;
            	}else{
            		isPausedtimer++;
            		if(isPausedtimer==1800){
            			$("html").html("<b style='color:red;'>"+jsonObj[46022]+"</b>");
            			//document.getElementById("form").innerHTML ="";
            		}
            	}
            }
            function Check()
            {   
            	//alert("153");
            	timeRemaining = hrs+":"+mins+":"+secs;
            	document.getElementById("timeRemaining").value = timeRemaining;
            	if(hrs==0 && mins==0 && (secs<=10 && secs>0)){ 
            	//	alert("155"+jsonObj[49013]);
            	document.getElementById('subsub').style.display='none';
            	autosubmit=true;
            	if(secs==10){
            		showMessage(jsonObj[49013]);	
            	}
            	
        		return false;
    			}
                if(hrs==0 && mins==5 && secs==0){
                	//alert("161");
                	if(document.getElementById("timer").value > 5){
                	//	alert("164"+jsonObj[49001]);
                	showMessage(jsonObj[49001]);
                    return false;
                }
                }
            	var comp_code = document.getElementById("comp_code").value;            	
            	if(comp_code=='0143000' || comp_code=='0143001'){
            	if(hrs==0 && mins==30  ){
//            		alert(comp_code+" "+mins);
                	if(mins == 30){
                	//	alert("164"+jsonObj[49001]);
//                	showMessage(jsonObj[49166]);
                		var str30min ="You have only thirty minutes remaining !";
                		showMessage(str30min);
                    return false;
                }
                }
            	}
                if(hrs==0 && mins==1 && secs==0){  
                //	alert("170");
                if(document.getElementById("timer").value <= 5){
                //	alert("172"+jsonObj[49029]);
                showMessage(jsonObj[49029]);
                return false;
                }
                }
            	else if(hrs==0 && mins==0 && (secs<12 && secs >8)){
            		
            	//----new ----
                    if(secs==8&&cnt==0 ) 
           		 	{	document.getElementById("ImageObject").complete=false;
           				//document.getElementById("ImageLoader").complete=false;
           				ino =Math.floor((Math.random()*1000)+1001);
           				cnt=99;
           			}
       				//swal(" no ="+ino+" ese="+secs+ "  CNT="+cnt );
           			imgpath=IMG(ino);
           			//---------new	
            	
            	
            	
            	
            	
            	
            	 showMessage(jsonObj[49033]+" "+secs+" " +jsonObj[49034]);
            	//swal("You have only five minutes remaining !");
            	return false;
        		} 
                else if(mins==0 && secs==0 && hrs==0)
                {	 var lastvalue=document.getElementById('hid').value;
                	document.getElementById("next").style.display='none';
                document.getElementById("previous").style.display='none';
                document.getElementById("flag").style.display='none'; 
                      timeCheck = false;
                    //swal('last valuie'+lastvalue);
                   // var email=document.getElementById('email').value;
                    var a1=document.getElementsByName("option"); //a1.sort();
                   
                    for(var j=0;j<a1.length;j++)
                    {   //jswal('ka haakl')
                        if(a1[j].checked==true)
                        {   //jswal(a1[j].value);
                            document.getElementById(lastvalue).value=a1[j].value;
                        }
                    }
                    //showMessage(jsonObj[49013]);
                    //jswal("Your allotted time is over.");
                    //changeAuto();
                   // IMG_CHK(email);
                    if(istestImageCalled){
                    	istestImageCalled=false;
                   testImage(); 
                    }
                   /*document.f1.action="final_result_layout.jsp?email="+email;
                    document.f1.submit();
                    return true ;*/
                }
            }
            function Pad(number) //pads the mins/secs with a 0 if its less than 10
            {   if(number<10)
                    number=0+""+number;
                return number;
            }
            
            //-----------    option random --------------------------------------------------------------------------------------- 
            function shuffle(array) {
            	  var currentIndex = array.length
            	    , temporaryValue
            	    , randomIndex
            	    ;
            	  if(document.getElementById('ran_opt').value=="on"){
	            	  // While there remain elements to shuffle...
	            	  var newvar=document.getElementById('randOp').value;
	            	  while (0 != currentIndex) {
	
	            	    // Pick a remaining element...
	            	    randomIndex = Math.floor(newvar* currentIndex);
	//            	    swal("currentIndex issss.."+currentIndex);
	            	    currentIndex -= 1;
	
	            	    // And swap it with the current element.
	            	    temporaryValue = array[currentIndex];
	            	    array[currentIndex] = array[randomIndex];
	            	    array[randomIndex] = temporaryValue;
	            		
	            	  }
            	  }

            	  return array;
            	}
            
          //-----------    START ---------------------------------------------------------------------------------------
			function changeAuto()
            {       xmlHttp=GetXmlHttpObject1();
                    if (xmlHttp==null)
                    {   swal ("Browser does not support HTTP Request.");
                        return
                    }
                    var url="getInternet.jsp?check=YES";
                    xmlHttp.onreadystatechange=stateChangedAuto;
                    xmlHttp.open("GET",url,true);
                    xmlHttp.send(null);                
             }
            function stateChangedAuto()
            {   if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                {	var showdata = xmlHttp.responseText;
                	showdata=showdata.replace(/^\s+|\s+$/g, '');
                	if(showdata=="INTERNET CONNECTION AVAILABLE")
                	{	document.f1.action="final_result_layout.jsp?email="+email;
                        document.f1.submit();                        return true ;	
                    }		
                	else	
                	{	testFail();						return false;                	}               	
                }           	
            }  
            function changeSecond()
            {       xmlHttp=GetXmlHttpObject1();
                    if (xmlHttp==null)
                    {   swal ("Browser does not support HTTP Request.");
                        return
                    }
                    var url="getInternet.jsp?check=YES";
                    xmlHttp.onreadystatechange=stateChanged1;
                    xmlHttp.open("GET",url,true);
                    xmlHttp.send(null);                
             }
            function stateChanged1()
            {   if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                {	var showdata = xmlHttp.responseText;
                	showdata=showdata.replace(/^\s+|\s+$/g, '');                	//swal("INT CHECK |"+showdata+"|")
                	if(showdata=="INTERNET CONNECTION AVAILABLE")
                	{   submitConfirm();		}		
                	else	
                	{	testFail();	}                	
                }
            }    


            function GetXmlHttpObject1()
            {   req = false;
                // branch for native XMLHttpRequest object
                if(window.XMLHttpRequest && !(window.ActiveXObject)) {
                    try {
                        req = new XMLHttpRequest();
                    } catch(e) {                        req = false;                    }
                    // branch for IE/Windows ActiveX version
                } else if(window.ActiveXObject) {
                    try {
                        req = new ActiveXObject("Msxml2.XMLHTTP");
                    } catch(e) {
                        try {
                            req = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch(e) {                  req = false;                   }
                    }
                }    return req;
            }   
            //----------AJAX----------------------------------------------------	
				function  IMG(ipath)
				{	//var ImageObject = new Image();
					//var ipath="http://170.225.164.12/patengine/images/"+ipath+".png";
					var ipath="assest/images/pre-loader.gif";
					document.getElementById("ImageObject").src=ipath;
					//document.write("<img id=ImageObject src=" +ipath+"  alt=Computerman  style=display: none;  />");
					//showMessage("Image loaded: " + document.getElementById("ImageObject").complete+" PATH="+ipath );
					return ipath;
				}
				function IMG_CHK(email)
				{	var heig =document.getElementById("ImageObject").complete;
					var heig1 =parseInt(document.getElementById("ImageObject").height);
					var comp_code = document.getElementById("comp_code").value;
					if(comp_code=="0001003"){
					//swal('The INTERNET is available. The HEIGHT  ' +heig1 );
					document.f1.action="final_result_layout.jsp?email="+email;
			                document.f1.submit();
			               	return true ;
						//submitConfirm();
					}else{
					if(heig1>0){
					//swal('The INTERNET is available. The HEIGHT  ' +heig1 );
					document.f1.action="final_result_layout.jsp?email="+email;
			                document.f1.submit();
			               	return true ;
						//submitConfirm();	
					}else 
					{	swal({title:jsonObj[49143],text:jsonObj[49036] +"  H="+heig, confirmButtonText:jsonObj[16117],type:"warning" });
						testFail();
					}
				   }		
					//return false;
				}	
				function IMG_CHK_SUB()
				{	//document.getElementById("ImageObject").complete=false;
       				//document.getElementById("ImageLoader").complete=false;
       				ino =Math.floor((Math.random()*1000)+1001);
       				cnt=99;
       				imgpath=IMG(ino);
       				imgpath=IMG(ino);
       				imgpath=IMG(ino);
       				imgpath=IMG(ino);
       				
       				/*var heig =document.getElementById("ImageObject").complete;
       				var heig1 =parseInt(document.getElementById("ImageObject").height);
       				showMessage("Time SUBMIT="+heig+ " hello=" +heig1 );
					if(heig){						submitConfirm();	
					}else 					{	testFail();					}*/
       				//submitConfirm();
       				}
            
            function testEndSubmit()
            { // alert("293---entry testEndSubmit");
            	// jConfirm('Are you sure you want to Submit Test?', 'Confirmation Dialog', function(r)

            	var comp_code = document.getElementById("comp_code").value;
            	var domainName = document.getElementById("domainName").value;
            	var allQuestionMandatory = document.getElementById("allQuestionMandatory").value;
                if(comp_code=="0055000" || comp_code=="0180000" || comp_code=="0224000" || comp_code=="0296000" || allQuestionMandatory == "ON" || allQuestionMandatory == "on"){
                	
               
                	
                	count=0;
                    var zero=0;
                    var lastvalue=document.getElementById('hid').value;
                    //alert(lastvalue);
                    var email=document.getElementById('email').value;
                    var a1=document.getElementsByName("option"); //a1.sort();
                    var lastqf=document.getElementById('lastQF').value;
                 //  alert(lastqf);
                    var pat =document.getElementById('test_pattern').value;
                    
                    
                  	//swal("LAST "+a1[0].value);
                  	var checkedFLAG=0;  var fru= Array();
                    for(var j=0;j<a1.length;j++)
                    {   //   swal('ka haakl')
                        if(a1[j].checked==true)
                        {	checkedFLAG=1;
                            //swal(a1[j].value);
    	                   // document.getElementById(lastvalue).value=a1[j].value;
    	                    
    	                    if(lastqf=="3")
    	                    {	fru.push(a1[j].value);
    	                    	fru.sort();
    	                    	document.getElementById(lastvalue).value=fru;
    	                    	var ans1="";
    	                    	ans1=document.getElementById(lastvalue).value;                                            	
    	                    	if(ans1.match(',')){
    	                    	ans1 = ans1.replace(/,/gi,'').replace(/^\s+|\s+$/g, '');
    	                    	}
    	                    	document.getElementById("user_ans"+lastvalue).value=ans1;
    	                    }
    	                    else
    	                    { document.getElementById(lastvalue).value=a1[j].value;
    	                    	user_ans =a1[j].value;
    	                    	document.getElementById("user_ans"+lastvalue).value=a1[j].value;
    	                 //   alert(a1[j].value);
    	                    }
                        }else if(lastqf == "4"){
    	                    	try{
    	                    	var subAns = "";
    	                    	var subAnsTemp = tinymce.get('option').getContent();
    	                    	if(subAnsTemp == ""){
    	                    		subAns = "";
    	                    	}else{
    	                    		subAns = "SubjectiveAttempted";
    	                    	}
    	                    	document.getElementById("user_ans"+lastvalue).value = subAns;
    	                    	}catch(e){
//    	                    		alert(e);
    	                    	}
    	                    }
                    }
                    
                    if(lastqf=="13"){
                    	 var user_ans="";
                        
                        var a1 = document.getElementsByName("option"+lastvalue);
                        user_ans=a1[0].value.replace(new RegExp(';', 'g'), '');   //alert("a1 = "+a1.length);
                       
                       try{if(a1[1].value==null){a1[1].value='';}user_ans+="#:#"+a1[1].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                      	try{if(a1[2].value==null){a1[2].value='';}user_ans+="#:#"+a1[2].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                      	try{if(a1[3].value==null){a1[3].value='';}user_ans+="#:#"+a1[3].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                      	try{if(a1[4].value==null){a1[4].value='';}user_ans+="#:#"+a1[4].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                      	try{if(a1[5].value==null){a1[5].value='';}user_ans+="#:#"+a1[5].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                      	
                     	document.getElementById("user_typedans"+lastvalue).value =user_ans ; 
                     	user_ans=user_ans.replace(/\ /g,'');   	   
                        document.getElementById("user_ans"+lastvalue).value =user_ans ; 
                       }
                var a1 ="";
            	for(var i=1;i<=parseInt(document.getElementById('size').value);i++)
                {
                	a1 = document.getElementById('user_ans'+i).value;
                	if(a1==""){
                		document.getElementById("subsub").style.display='block';
                		document.getElementById("exitexit").style.display='block';
        		        document.getElementById("ImageLoader").style.display = "none";
                		swal("Information !!","Please attempt all questions.","warning");
                		return false;
                	}else if(i==document.getElementById('size').value){
                		var endMSGVAL = jsonObj[49143];
                		var endTestPopupMessage = jsonObj[49003];
                		var endTest_confirmButtonText = "Yes, Submit it";
                		var custom_endTestPopupMessage = document.getElementById("custom_endTestPopupMessage").value;
                		if(custom_endTestPopupMessage === undefined || custom_endTestPopupMessage === null || custom_endTestPopupMessage === "") {
                			
                		}else {
                			endTestPopupMessage = custom_endTestPopupMessage;
                			endTest_confirmButtonText = "Yes";
                		}
                		if(document.getElementById("comp_code").value === "0311000") {
                			endMSGVAL = endMSGVAL + "- You have attempted " + getAllAttemptedCount() + " out of " + document.getElementById("MaxAllowedtoAttempt").value + " questions.";
                    	}
                    	swal({   title: endMSGVAL,   text: endTestPopupMessage,   type: "success",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: endTest_confirmButtonText,   closeOnConfirm: true }, function(r)
                    			 
              					{
                          if (r)
                          {  

                    	mainchekingforcheeet=true;
                    	document.getElementById("subsub").style.display='none';
                		document.getElementById("exitexit").style.display='none';
        		document.getElementById("ImageLoader").style.display = "block";
        		showMessage("endtest");
        		//showMessage(jsonObj[61075]);
                        //changeSecond();
                        IMG_CHK_SUB();
                        var compCode = document.getElementById("comp_code").value;
                        if(compCode == "0176002"){
                        	document.getElementById('a').innerHTML =
                        		'<img id="testImage6" style="display: none;" ' +
                        		'src = "/WET-2/assest/images/internet.png?'+Math.random() + '" ' +
                        		'onerror="testFail1();" ' + 'onload="testConfirmCheck();">';
                        }else{
                        	
                        	 document.getElementById('a').innerHTML =
        			         '<img id="testImage6" style="display: none;" ' +
        			         'src = "/WET-2/assest/images/internet.png?'  +Math.random() + '" ' +
        			         'onerror="testFail1();" ' + 'onload="testConfirmCheck();">';
                        }
                          }else
                          {	document.getElementById("subsub").style.display='block';
                  		/*document.getElementById("exitexit").style.display='block';
                  		if(pat=="ADP"){  document.getElementById("exitexit").style.display='none';                  }*/
                  		document.getElementById("ImageLoader").style.display = "none";    	
                          return false;
                      } });
                        
                	}
                }
                }else{
            	if(wheeboxtesttype == "CBTBASEDTEST") {
            		if (true)
                    {
            			var value=document.getElementById('hid').value;
            			var a1=document.getElementsByName("option");
                        for(var j=0;j<a1.length;j++)
                        {
                            if(a1[j].checked==true)
                            {
		                    	document.getElementById("user_ans"+value).value=a1[j].value;
                            }
                        }
            			showMyCurrentScore(value);
            			mainchekingforcheeet=true;
            			$(".containerlandscape").fadeOut(100);
                      	document.getElementById("subsub").style.display='none';
                  		document.getElementById("exitexit").style.display='none';
                  		document.getElementById("ImageLoader").style.display = "block";
                  		showMessage("endtest");
                        IMG_CHK_SUB();
                        var compCode = document.getElementById("comp_code").value;
                        document.getElementById('a').innerHTML =
                        	'<img id="testImage6" style="display: none;" ' +
          			    	'src = "/WET-2/assest/images/internet.png?'  +Math.random() + '" ' +
          			    	'onerror="testFail1();" ' + 'onload="testConfirmCheck();">';
                    }
            	}else {
            	var endMSGVAL = jsonObj[49143];
            	var endTestPopupMessage = jsonObj[49003];
        		var endTest_confirmButtonText = jsonObj[49149];
        		var custom_endTestPopupMessage = document.getElementById("custom_endTestPopupMessage").value;
        		if(custom_endTestPopupMessage === undefined || custom_endTestPopupMessage === null || custom_endTestPopupMessage === "") {
        			
        		}else {
        			endTestPopupMessage = custom_endTestPopupMessage;
        			endTest_confirmButtonText = "Yes";
        		}
            	if(document.getElementById("comp_code").value === "0311000") {
            		endMSGVAL = endMSGVAL + "- You have attempted " + getAllAttemptedCount() + " out of " + document.getElementById("MaxAllowedtoAttempt").value + " questions.";
                }
            	swal({   title: endMSGVAL,   text: endTestPopupMessage,   type: "success",   showCancelButton: true,cancelButtonText:jsonObj[16118],   confirmButtonColor: "#DD6B55",   confirmButtonText: endTest_confirmButtonText,   closeOnConfirm: true }, function(r)
            			 
      					{
                  if (r)
                  {  

            	mainchekingforcheeet=true;
            	document.getElementById("subsub").style.display='none';
        		document.getElementById("exitexit").style.display='none';
		document.getElementById("ImageLoader").style.display = "block";
		showMessage("endtest");
		//showMessage(jsonObj[61075]); 
                //changeSecond();
                IMG_CHK_SUB();
                
                var compCode = document.getElementById("comp_code").value;
                if(compCode == "0176002"){
                	document.getElementById('a').innerHTML =
                		'<img id="testImage6" style="display: none;" ' +
                		'src = "/WET-2/assest/images/internet.png?'+Math.random() + '" ' +
                		'onerror="testFail1();" ' + 'onload="testConfirmCheck();">';
                }else{
                	
                	
                	 document.getElementById('a').innerHTML =
			         '<img id="testImage6" style="display: none;" ' +
			         'src = "/WET-2/assest/images/internet.png?'  +Math.random() + '" ' +
			         'onerror="testFail1();" ' + 'onload="testConfirmCheck();">';
                	
                }
                  }else
                  {	document.getElementById("subsub").style.display='block';
          		/*document.getElementById("exitexit").style.display='block';
          		if(pat=="ADP"){  document.getElementById("exitexit").style.display='none';                  }*/
          		document.getElementById("ImageLoader").style.display = "none";    	
                  return false;
              } });
                }
                }
            }
            
            
            function testConfirmCheck()
            { 	
            	//alert("505");
            	var compCode = document.getElementById("comp_code").value;
                if(compCode == "0176002"){
                	document.getElementById('b').innerHTML =
                		'<img id="testImage4" style="display: none;" ' +
                		'src = "/WET-2/assest/images/internet.png?'+Math.random() + '" ' +
                		'onerror="testFail1();" ' + 'onload="submitConfirm();">';
                }else{
                	
            	document.getElementById('b').innerHTML =
                    '<img id="testImage4" style="display: none;" ' +
                    'src = "/WET-2/assest/images/internet.png?'+Math.random() + '" ' +
                    'onerror="testFail1();" ' + 'onload="submitConfirm();">';
            //	setTimeout(function() { settinginterval(); }, 1000);
                }
            }
            
            
            function testFail1(){
            //	alert("512");
            	setTimeout(function() { testFail(); }, 1000);
            	
            }
            function testFail()
            {	//alert("m 521");
            	doit=false;
            //setTimeout(function() { settinginterval(); }, 1000);
            //	alert("testfail"+doit);
            	//alert();
            	mainchekingforcheeet=true;
            	swal({   title:  jsonObj[49005],   text: "<div align='left'>"+ jsonObj[49006]+"<br>"+ jsonObj[49007]+"<br>"+
            		jsonObj[49008]+"<br>"+
            		jsonObj[49009]+"<br>"+
            		jsonObj[49010]+"<br>"+
            		jsonObj[49011]+"</div>",   type: "warning",  html: true,  showCancelButton: true,   confirmButtonColor: "#DD6B55",  confirmButtonText:jsonObj[16117],   cancelButtonText: jsonObj[49151],   closeOnConfirm: true,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {        } else {     swal({title:" ", text:jsonObj[49150],confirmButtonText:jsonObj[16117], type:"error"});   } });
            	
             
      				/*	I am also thinking for ome thing that after 5-0 attempts we should tell the user like.
						Sorry....it seems you have permanently lost your internet connection. You may have to re-appear for the test.
      				*/
      				document.getElementById("subsub").style.display='block';
        			document.getElementById("exitexit").style.display='block';
        			document.getElementById("allbutton").style.display='block';
        			document.getElementById("form").style.display='block';
        			document.getElementById("testSubmitMsg").style.display="none";
        			document.getElementById("ImageLoader").style.display = "none";    	
					return false;
           	}
            function submitConfirm(){ 
            	
            	mainchekingforcheeet=true;
            
            	var lastvalue=document.getElementById('hid').value;
            	if(storingQflag=='25'){
              	//var userSqlQueryResp = document.getElementById('optionT').value;
              	var userSqlQueryResp = "";//editableCodeMirror.getValue();
                    if(userSqlQueryResp!=""){
  	            	if(userSqlQueryResp!=""){
  	               	 insertinSqlResp(userSqlQueryResp,lastvalue);
  	            	}
                    }
              	}  
          //Submitting last question of Subjective
            	
//            	alert(storingQflag+"-------"+lastvalue);
            	testIsSubimiting=true;
            	if(storingQflag == "4" && lastsub_check == false){
            		callingparentforsub_lastques(storingQflag,lastvalue);
            		WritingLastQuestion("next",'','',lastvalue);
            	return false;
            	}
            	//alert("616------"+lastsub_check);
            	
            	// Submitting last question Flag 21
            	if(storingQflag=='21'){
            		var value = lastvalue;
            	 try{ 
             	    opt0 = document.getElementById("totalOptionInQuestion").value; //alert(opt0); 
             	    var actans="";  
             	var value = lastvalue;
             	   for(var j=1;j<(parseInt(opt0)+1);j++)
                    { 
             		   var e = document.getElementById("select"+value+""+j);
             		   var strUserAns = e.options[e.selectedIndex].value;//alert(strUserAns); 
             		   if(strUserAns==''){    	
             			   swal({title:jsonObj[49143],text:jsonObj[49048],confirmButtonText:jsonObj[16117],type:"success"});
                            return false;
             		   }
             		   if(actans==''){
             			   actans=strUserAns;   
             		   }else{ 
             			   actans=actans+"-"+strUserAns;
             		   }
                    } //alert(actans+"----"+value);
					}catch(e){alert(e);} 
					//alert(actans);
					  document.getElementById("user_ans"+value).value=actans;
                  }
            	
            	// Submitting last question Flag 21 END
            	
        	
        	//Submitting last question of Programming
        	//callingparentforspro(storingQflag);
        	timeTakenPerQues(); 
        	
            
                count=0;
                var zero=0;
                
                 
                try{
                	  var lastQno=document.getElementById('QUESNO'+lastvalue).value;
                	var ansFromCookies=cookiesOptionAns(lastvalue,lastQno);//alert(ansFromCookies); 
              		var cookiesIsSetNow=callForSetCookies("next",(oldvalueHID),lastQno);	
                }catch (e) {alert(e);    
					// TODO: handle exception
				}
                
                var email=document.getElementById('email').value;
                var a1=document.getElementsByName("option"); //a1.sort();
                var lastqf=document.getElementById('lastQF').value;
              
           
                var pat =document.getElementById('test_pattern').value;
              	//swal("LAST "+a1[0].value);
              	var checkedFLAG=0;  var fru= Array();
                for(var j=0;j<a1.length;j++)
                {   //   swal('ka haakl')
                    if(a1[j].checked==true)
                    {	checkedFLAG=1;
                        //swal(a1[j].value);
	                   // document.getElementById(lastvalue).value=a1[j].value;
	                    
	                    if(lastqf=="3")
	                    {	fru.push(a1[j].value);
	                    	fru.sort();
	                    	document.getElementById(lastvalue).value=fru;
	                    	var ans1="";
	                    	ans1=document.getElementById(lastvalue).value;                                            	
	                    	if(ans1.match(',')){
	                    	//ans1 = ans1.replace(/,/gi,'').replace(/^\s+|\s+$/g, '');
	                    	}
	                    	document.getElementById(lastvalue).value=ans;
	                    	document.getElementById("user_ans"+lastvalue).value=ans1;
	                    }else if(lastqf==20)
	                	{	  
	                		  try{
	                    	var ans =""; 
	                		ans = a1[j].value;  
	                    	//var actm=ans.split("-");
	                    	var compassQues=document.getElementById("compassQues").value;
	                    	var mycompassQues=compassQues.split("&&&");
	                    	var sizecompass=mycompassQues.length;  
                       	 var actm=ans.split("-");
                           var rw=mycompassQues[sizecompass-1].split("-"); 
                           //alert(ans+"-"+sizecompass+"---"+mycompassQues[sizecompass-1]+"------"+actm[1]+"----"+rw[0]);
                        	if(actm[1]==rw[0]){   
                        		document.getElementById("compassRight"+(sizecompass-1)).value=rw[0];
                        		document.getElementById('compassWrong'+(sizecompass-1)).value=rw[1];
                        	}else if(actm[1]==rw[1]){
                        		 document.getElementById("compassRight"+(sizecompass-1)).value=rw[1];
                        		 document.getElementById('compassWrong'+(sizecompass-1)).value= rw[0];
                        	}     document.getElementById("user_ans"+lastvalue).value=actm[0];
	                		  }catch (e) {alert(e); 
								// TODO: handle exception
							}//alert(actm[0]+"---"+lastvalue);
	            			  
	                		//swal ("IN");
	                	}else if(lastqf==8)
						{
                       	 var psy="";
                        	 var x="";
                        	 var y="";
                        	 var a2 = "NO";
                        	 var Pcheck=false;
                        	var a1=document.getElementsByName("option");
                             a2 = document.getElementsByName("option1");
                             for(var j=0;j<a1.length;j++)
                             {   if(a1[j].checked==true) {  x=a1[j].value; Pcheck=true; } }
                            
                             for(var j=0;j<a2.length;j++)
                             {    if(a2[j].checked==true) { y=a2[j].value; Pcheck=true; } }
                             psy=x+"XX"+y;
                             document.getElementById("user_ans"+lastvalue).value=psy;   
						}
	                    else
	                    { document.getElementById(lastvalue).value=a1[j].value;
	                    	user_ans =a1[j].value;
	                    	document.getElementById("user_ans"+lastvalue).value=a1[j].value;
	                 //   alert(a1[j].value);
	                    }
                    }
                }
                if(checkedFLAG==0 )
                {	if(lastqf==2)//subjective change
                	
                	{	var ans ="";
                		ans = a1[0].value;
            			ans = ans.replace(/,/gi,'&#44;').replace(/^\s+|\s+$/g, '');
            			document.getElementById(lastvalue).value=ans;
                		//swal ("IN");
                	}
                	/*if(lastqf==5) //comment by amar
                	{	document.getElementById(lastvalue).value=a1[0].value+a1[1].value+a1[2].value+a1[3].value+a1[4].value+a1[5].value;
                		//swal ("IN");
                	}*/
if(lastqf==13){
                 var user_ans="";
                      
                 var a1 = document.getElementsByName("option"+lastvalue);
                 user_ans=a1[0].value.replace(new RegExp(';', 'g'), '');   //alert("a1 = "+a1.length);
                
                try{if(a1[1].value==null){a1[1].value='';}user_ans+="#:#"+a1[1].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
               	try{if(a1[2].value==null){a1[2].value='';}user_ans+="#:#"+a1[2].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
               	try{if(a1[3].value==null){a1[3].value='';}user_ans+="#:#"+a1[3].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
               	try{if(a1[4].value==null){a1[4].value='';}user_ans+="#:#"+a1[4].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
               	try{if(a1[5].value==null){a1[5].value='';}user_ans+="#:#"+a1[5].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
               	
              	document.getElementById("user_typedans"+lastvalue).value =user_ans ; 
              	user_ans=user_ans.replace(/\ /g,'');   	   
                 document.getElementById("user_ans"+lastvalue).value =user_ans ; 
                 
                }if(lastqf==22){

              	   //viva
              	   var vivaMark = document.getElementById("viva").value;
              	   var vivaRemark = document.getElementById("vivaRemark").value;
              	   var maxMark = document.getElementById("hid_marks"+lastvalue).value;
              //	alert(vivaMark);
            	 if (isNaN(vivaMark)){
        		   document.getElementById("viva").value = "";
        		   document.getElementById("viva").focus();
        		   if(vivaMark.toString().indexOf('.') != -1){
        			   swal("Information !!","Please don't enter decimal value.","error");
        			   testIsSubimiting=false;
            		   return false;
        		   }else if(parseInt(vivaMark) < 0){
        			   swal("Information !!","Assigned marks can not less than 0.","error");
        			   testIsSubimiting=false;
            		   return false;
        		   }else if(parseInt(vivaMark) > parseInt(maxMark)){
        			   swal("Information !!","Assigned marks should be less than maximum marks.","error");
        			   testIsSubimiting=false;
            		   return false;
        		   }else if(vivaMark==""){
        			   swal("Information !!","Please enter assign marks.","error");
        			   testIsSubimiting=false;
            		   return false;
        		   }
        		   else if(vivaMark!="0"){
        		   swal("Information !!","Please enter numeric value.","error");
        		   testIsSubimiting=false;
        		   return false;
        		   }
        		   
        	   }else{
        		   if(vivaMark.toString().indexOf('.') != -1){
        			   document.getElementById("subsub").style.display='block';
           			   document.getElementById("exitexit").style.display='block';
           			   document.getElementById("allbutton").style.display='block';
           			   document.getElementById("form").style.display='block';
           			   document.getElementById("testSubmitMsg").style.display="none";
           			   document.getElementById("ImageLoader").style.display = "none";
        			   swal("Information !!","Please don't enter decimal value.","error");
        			   testIsSubimiting=false;
            		   return false;
        		   }else if(vivaMark==""){
        			   document.getElementById("subsub").style.display='block';
           			   document.getElementById("exitexit").style.display='block';
           			   document.getElementById("allbutton").style.display='block';
           			   document.getElementById("form").style.display='block';
           			   document.getElementById("testSubmitMsg").style.display="none";
           			   document.getElementById("ImageLoader").style.display = "none";
        			   swal("Information !!","Please enter assigned marks.","error");
        			   testIsSubimiting=false;
            		   return false;
        		   }
        		   if(parseInt(vivaMark) > parseInt(maxMark)){
        			   document.getElementById("subsub").style.display='block';
           			   document.getElementById("exitexit").style.display='block';
           			   document.getElementById("allbutton").style.display='block';
           			   document.getElementById("form").style.display='block';
           			   document.getElementById("testSubmitMsg").style.display="none";
           			   document.getElementById("ImageLoader").style.display = "none";
        			   swal("Information !!","Assigned marks should be less than maximum marks.","error");
        			   testIsSubimiting=false;
            		   return false;
        		   }else if(parseInt(vivaMark) < 0){
        			   document.getElementById("subsub").style.display='block';
           			   document.getElementById("exitexit").style.display='block';
           			   document.getElementById("allbutton").style.display='block';
           			   document.getElementById("form").style.display='block';
           			   document.getElementById("testSubmitMsg").style.display="none";
           			   document.getElementById("ImageLoader").style.display = "none";
        			   swal("Information !!","Assigned marks can not less than 0.","error");
        			   testIsSubimiting=false;
            		   return false;
        		   }else{
        		   document.getElementById("hid_marks"+lastvalue).value=vivaMark;
        		   document.getElementById("vivaMark"+lastvalue).value=vivaMark;
        		   document.getElementById("user_ans"+lastvalue).value="Viva";
        		   if(!lastsub_check) {
        			   insertinUser_response(vivaRemark,lastvalue);
        			   return false;
        		   }
        		   
        		   }
        	   }
              	   
                 
                 }
                	if(lastqf==6){ 		var ans="";
					//alert("1064");
					var ul = document.getElementById("swappable");// Get the LI in the UL 
					var liNodes = ul.getElementsByTagName("li");// Iterate through the LI's 
					//alert(ul);alert(liNodes);
					//alert("1067----"+liNodes.length);
					for( var i = 0; i < liNodes.length; i++ ) 
					{// Get the child nodes of the LI 
					var liChildren = liNodes.item(i).childNodes;// Iterate through the child nodes of the LI 
					for( var j = 0; j < liChildren.length; j++ ) 
					{// Look for text nodes 
					if( liChildren.item(j).nodeType == liChildren.item(j).TEXT_NODE ) 
					{// Get the text node value 
						if((i+1)==liNodes.length)
							ans=ans+liChildren.item(j).nodeValue;
						else
							ans=ans+liChildren.item(j).nodeValue+"&#165;";
					}}} 
					/*for(var i=0;i<qt_ans.length;i++){
						for(var j=0;j<us_ans.length;j++){
							if(us_ans[i]==qt_ans[j]){var an="";
								if(j==0){an="a";}else if(j==1){an="b";}else if(j==2){an="c";}else if(j==3){an="d";}else if(j==4){an="e";}else if(j==5){an="f";}
								if(i==(us_ans.length-1))
									new_ans=new_ans+an;
								else
									new_ans=new_ans+an+",";
							}
						}
					}*/
					//alert("ans "+ans);
					//alert("qtxt_ans "+qtxt_ans);
					document.getElementById("user_ans"+lastvalue).value = ans.replace(/^\s+|\s+$/g, '');
					
					}
                }
                var flg=document.getElementsByName("hidflag");
                for(var j=0;j<flg.length;j++)
                {   if(flg[j].value=="flag")
                        count++;
                }
                if(parseInt(count)>parseInt(zero))
                {mainchekingforcheeet=true;
                var popupFlagMessage = jsonObj[49002];
				var custom_flagButtonName = document.getElementById("custom_flagButtonName").value;
				if(custom_flagButtonName === undefined || custom_flagButtonName === null || custom_flagButtonName === "") {
					
				}else {
					popupFlagMessage = popupFlagMessage.replace("flagged", custom_flagButtonName+"ed");
				}
//                    jConfirm('There are some flagged questions. Do you want to attempt them?', 'Confirmation Dialog', function(r)
                    		 swal({   title: jsonObj[49143],   text:popupFlagMessage,   type: "success", html: true ,   showCancelButton: true, cancelButtonText: jsonObj[16118],  confirmButtonColor: "#DD6B55",   confirmButtonText: jsonObj[49152],   closeOnConfirm: true,   closeOnCancel: false }, function(r1)
                    {
                     document.getElementById("qnoFrameDiv").style.display='block';
                    if (r1)
                    {	document.getElementById("subsub").style.display='block';
            			document.getElementById("exitexit").style.display='block';
            			if(pat=="ADP"){  document.getElementById("exitexit").style.display='none';                  }
            			 document.getElementById("form").style.display="block";
            			 document.getElementById("allbutton").style.display="block";

               		  document.getElementById("testSubmitMsg").style.display="none";   
            			document.getElementById("ImageLoader").style.display = "none";    	
                        return false ;
                    } 
                    else
                    {mainchekingforcheeet=true;
                    if(autosubmit==false){
                    	var endTestPopupMessage = jsonObj[49003];
                		var endTest_confirmButtonText = jsonObj[49149];
                		var custom_endTestPopupMessage = document.getElementById("custom_endTestPopupMessage").value;
                		if(custom_endTestPopupMessage === undefined || custom_endTestPopupMessage === null || custom_endTestPopupMessage === "") {
                			
                		}else {
                			endTestPopupMessage = custom_endTestPopupMessage;
                			endTest_confirmButtonText = "Yes";
                		}
//                     jConfirm('Are you sure you want to Submit the Test ?', 'Confirmation Dialog', function(r)
                    		 swal({   title: jsonObj[49143],   text: endTestPopupMessage,   type: "success",   showCancelButton: true,   confirmButtonColor: "#DD6B55",cancelButtonText: jsonObj[16118],  confirmButtonText: endTest_confirmButtonText,   closeOnConfirm: true ,   closeOnCancel: true}, function(isConfirm)
                                {
                        if (isConfirm)
                        {	document.getElementById("subsub").style.display='none';
                        	document.getElementById("exitexit").style.display='none';
                        	document.getElementById("ImageLoader").style.display = "block"; 
                        	
                        	showMessage("endtest"); 
                        	//showMessage(jsonObj[61075]);
                        	 
                        	 var comp_code = document.getElementById("comp_code").value;
                             var exam_name = document.getElementById("exam_name").value;
                 			if((comp_code=="0002003" && exam_name=="SAP -SD") || (comp_code=="0008000")){                    				 
                 				 window.iframe.take_snapshot();
                 				 timeoutTest();
                 			}else if(!((comp_code=="0002003" && exam_name=="SAP -SD") || (comp_code=="0008000"))){
                 				 StopTimer();
                 				var submitBy="userSubmit";
                 				allowtogo=false;
        	var url="EndTestV2.obj?login_id="+email+"&submitBy="+submitBy;
      		 document.form.action="EndTestV2.obj?login_id="+email+"&submitBy="+submitBy;
                                  
                                  document.form.submit();
                                  return true ;
                 			}
                        }else
                        {	document.getElementById("subsub").style.display='block';
                    		document.getElementById("exitexit").style.display='block';
                    		if(pat=="ADP"){  document.getElementById("exitexit").style.display='none';                  }
                    		document.getElementById("ImageLoader").style.display = "none";    
                    		 document.getElementById("form").style.display="block";
                			 document.getElementById("allbutton").style.display="block";

                   		  document.getElementById("testSubmitMsg").style.display="none";   
                			document.getElementById("ImageLoader").style.display = "none";  
                            return false;
                        }
                                });
                        
                        
                    }
                    }
                    });
                    
                    
                    
                }else{mainchekingforcheeet=true;autosubmit = false;
                if(autosubmit==false){
                	
                    // var conf= confirm(' Are you sure you want to Submit Test?');
                    
                     
                     	document.getElementById("ImageLoader").style.display = "block";    	
                     	
                     	
                     	var comp_code = document.getElementById("comp_code").value;
                         
             		 StopTimer();
             		 var submitBy="userSubmit";
             		allowtogo=false;
             		
//             		var isRecordingEnabled = document.getElementById('isRecordingEnabled').innerHTML;
//     				if(isRecordingEnabled == "1" && !isStopLastVideoRecordingMethodCalled){
//     					isStopLastVideoRecordingMethodCalled = true;
//     					stopLastVideoRecording();
//     					return false;
//     				}
     				var submitBy="userSubmit";
     				try{
     				
     				}catch(e){
     					
     				}
        	var url="EndTestV2.obj?login_id="+email+"&submitBy="+submitBy;
      		 document.form.action="EndTestV2.obj?login_id="+email+"&submitBy="+submitBy;
                        
                        document.form.submit();
                        return true ;
             	 		
                     
                 } 
              }
            
            }
            function exit_confirm(){mainchekingforcheeet=true;
                var conf= confirm(jsonObj[49038]);
                if (conf== true)
                {	//document.f1.action="login.jsp";
                	//document.f1.action="<%=comp_url%>";
                	document.f1.action="end_test.jsp";
                    document.f1.submit();
                    return true ;
                }else    return false;        
            }
            objImage = new Image();
            function download(img_src){
                // preload the image file
                objImage.src=images[img_src];
            }
            function GUID ()
{
    var S4 = function ()
    {
        return Math.floor(
                Math.random() * 0x10000 /* 65536 */
            ).toString(16);
    };

    return (
            S4() + S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + S4() + S4()
        );
}
            
            function call()
            {   
            	
            	xmlHttp=GetXmlHttpObject();
                //document.getElementById('containerSB2').innerHTML = xmlHttp.responseText;
                if (xmlHttp==null)
                {   swal ("Browser does not support HTTP Request.");
                    return;
                }
                var guid = GUID();
              // var url="http://www.wheebox.com/WET-2/qq.jsp?id="+guid;
             // var url="http://119.81.48.75/WET-2/qq.jsp?id="+guid; 
            //var url="http://www.mywheebox.com:8080/WET-2/qq.jsp?id="+guid;
               
                var url="questionLoadV2.obj?id="+guid+"&key=&randomnumberkforkey="+encodeURI(randomnumberkforkey);
            //    alert(url)
                
                xmlHttp.onreadystatechange=stateChanged;
                xmlHttp.onerror = function () {
                istestdownloaded=false;
              	  console.log("** An error occurred during the transaction");
              	document.getElementById("form").style.display = 'none';	
              	try{
	      	      if(document.getElementById("proctoringLoaderDiv")){
	      	      	 document.getElementById("proctoringLoaderDiv").style.display="none";
	      	      	}
	      	      if(document.getElementById("beforeTestLoad")){
		      	     document.getElementById("beforeTestLoad").style.display="none";
		      	    }
              	}catch(e){}
	              if(counterdownloaretry<3){
	                 document.getElementById("downloadinit").style.display="block";
	                    swal("Warning !!","There was an issue in downloading your test. Please try reloading your test by clicking on the button 'Retry Test Download'.","error");
	                 }else if(counterdownloaretry>2){
	                    swal("Warning !!","Sorry, we are not able to download your test. There could be multiple reasons for this. Absence of good internet speed could be one of the most obvious reasons. Please check your internet connection once and try to re-login.","error");
	                 }
	                   counterdownloaretry++;                    	    
              };
                xmlHttp.open("GET",url,true);
                xmlHttp.send(null);
            }
              
			function optionvalue(val){
        	if(val=="a") return 1;
        	if(val=="b") return 2;
        	if(val=="c") return 3;
        	if(val=="d") return 4;
        	if(val=="e") return 5;
        	if(val=="f") return 6;
        } 
           var columns = new Array('option','option1');
			function getSelectedIndex(array) {for (var i=0; i<array.length; i++) {if (array[i].checked) return i;}}
			function checkMatrixRow(input) {
           	var n = getSelectedIndex(input.form[input.name]);
           	for (var i=0; i<columns.length; i++) {if (columns[i] != input.name) {input.form[columns[i]][n].checked = false;}}
           	
         
           }//End Hitesh Work
			function checkMatrixRowNew(input) {  	  
			try{
				var compassValue=input.value;
				compassValueArr=compassValue.split("-");                
				//alert("d----"+document.getElementById('b').checked); 
			if(compassValueArr[0]=='a'){input.form["option1"][1].checked=true;}
			else if(compassValueArr[0]=='b'){input.form["option1"][0].checked=true;}  
			else if(compassValueArr[0]=='c'){input.form["option"][1].checked=true;}   
			else if(compassValueArr[0]=='d'){input.form["option"][0].checked=true;}
			                                        
				var n = getSelectedIndex(input.form[input.name]);
	           	for (var i=0; i<columns.length; i++) {
	           		if (columns[i] != input.name) {input.form[columns[i]][n].checked = false;}
	           
	           	}
			}catch (e) {alert(e); 
				// TODO: handle exception
			}
			}
			
			function doit(){
				doit=true;
				//alert(doit);
			}
			
			
			
			
			
			var storecompilername={};
			var codechangestate={};
			var attemptdetails = {};
			var storecompilersubmission={};
			
			function stchange(){
				try{
					var j=store;
					mainchekingforcheeet1=false;
	      	      	    if (xmlHttp.readyState==4 && xmlHttp.status == 200)
	                      {
	                          try{
	      	      	 document.getElementById("downloadinit").style.display="none";
	      	      	 istestdownloaded=true;
	      	      	if(document.getElementById("proctoringLoaderDiv")){
	      	      	 document.getElementById("proctoringLoaderDiv").style.display="none";
	      	      	}
	      	        if(document.getElementById("beforeTestLoad")){
		      	     document.getElementById("beforeTestLoad").style.display="none";
		      	    }
	      	      	       }catch(e){}
	      	      	       
	      	      	    	if(istimerstarted){
	      	      	    	myFunction();
	      	      	    	istimerstarted=false;
	      	      	    	try {
				      	      	if(userBasedTestSettings.hasOwnProperty("gracePeriodAutoSubmitTest") && parseInt(userBasedTestSettings["gracePeriodAutoSubmitTest"]) == 1) {
			      	      	    	testExpiredCountDown(userBasedTestSettings);
		      	      	    	}
	      	      	    	}
	      	      	    	catch(e) {
	      	      	    		console.log(e);
	      	      	    	}
	      	      	    	}
	              	  	var value=document.getElementById('hid').value;
	        			//showdata=showdata.replace(/&#32;/g, ' ').replace(/&quote;/g, '"');
	        			
	        			var rans="";var system_marks="";
	        				var rsec="";
	        				var rqno="";
	        				var rightAns="";

	        				var totalquestionofjsen=parseInt(document.getElementById('size').value); 
	        				
	        				if(!((j==="mark"||j==="unmark"||j=="next")||(j=="previous")||(j=="flag")||(j=="unflag")||(j=="autoglide")||(j=="qsection")||(!isNaN(parseInt(j))) ))
	        					{ 
	        					var showdata ="";
	        					showdata=xmlHttp.responseText;
	        					
	        					//alert("..showData...." +showdata );
	        					//hpe error logout
	        					if(showdata.indexOf('error0325000') != -1){
	        						
	        						var msgHpecoc = showdata.replace('error0325000##',''); 
	        						
	        						document.getElementById("mainBody").style.display = "none"; 
	        						document.getElementById("hpeError").style.display = "block";
	        						document.getElementById("errorhpeMsg").innerHTML = msgHpecoc;
	        						//window.location.href = "hpeErrorPage.obj?msg="+msgHpecoc;
	        						
	        						
	        					}
	        					
	        					//alert(showdata);
	        					//console.log(showdata);
	        					showdata = decodeURIComponent(showdata);	
	        					//console.log(showdata);
	        					showdata=showdata.replace(/&#32;/g, ' ').replace(/&quote;/g, '"');
	        					try{
	        						qbankjson=JSON.parse(showdata);
	        					}catch(e){  
	        						qbankjson=JSON.stringify(showdata);
	        						try{console.log("*SJson Error");
	        							 if(qbankjson.indexOf('Your browser sent an invalid request') != -1){
	        								 qbankjson="invalid request";
	        							 }   
	        						}catch(e){}
	        					}
	        					
	        					 try{//console.log("qbankjson3: "+qbankjson);
		     							if(qbankjson=="400 application not found\n" || showdata=="400 application not found\n" || qbankjson=="invalid request"){
		     								allowcheeting=false;  
		     								//alert(qbankjson+"--"+showdata);       
		     								 Init();     
		                                  	return false;
		     							}    
		     		                }catch(e){
		     		                	
		     		                }
		     		                
	        					arr.push(""); //qtext insertion
	        					arr1.push("");//OP1 insertion
	        					arr2.push("");//OP2 insertion
	        					arr3.push("");//OP3 insertion
	        					arr4.push("");//OP4 insertion
	        					arr5.push("");//OP5 insertion
	        					arr6.push("");//OP6 insertion
	        					opt7.push("");//OP7 insertion
	        					arr15.push(""); 
	        					system_marks=system_marks+""+"|";//marks insertion
	        					arr7.push("");
	        					rans=rans+""+"|";// ANS INSERTION
	        					rightAns=rightAns+"";// Right Ans Inset in hidden field use for cookies
	        					arr8.push("");
	        					arr9.push("");
	        					rsec=rsec+""+"|";
	        					images.push("");
	        					images1.push("");
	        					ques_no.push("");
	        					rqno=rqno+""+"|";//Question No
	        					qtype.push("");
	        					que_id.push("");//Question ID
	        					arr10.push("");
	        					arr11.push("");
	        					arr12.push("");
	        					arr13.push("");
	        					arr16.push("");
	        					arr17.push("");
	        					arr18.push("");
	        					arr37.push("");
	        					//option image
	        					op1_images.push("");
	        					op2_images.push("");
	        					op3_images.push("");
	        					op4_images.push("");
	        					op5_images.push("");
	        					op6_images.push("");
	        					op7_images.push("");
	        					//option image
	        					display_secName.push("");
	        					section_change_warning.push("");
	        					sec_inst.push("");
	        					psqn=psqn+""+"|";
	        	           		psqflg=psqflg+""+"|";
	        	           		psop1max=psop1max+""+"|";
	        	           		psop1min=psop1min+""+"|";
	        	           		psop2max=psop2max+""+"|";
	        	           		psop2min=psop2min+""+"|";
	        	           		psop3max=psop3max+""+"|";
	        	           		psop3min=psop3min+""+"|";
	        	           		psop4max=psop4max+""+"|";
	        	           		psop4min=psop4min+""+"|";
	        	           		psop5max=psop5max+""+"|";
	        	           		psop5min=psop5min+""+"|";
	        	           		psop6max=psop6max+""+"|";
	        	           		psop6min=psop6min+""+"|"; 
	        	           		
	        	           		try{
	        	           		for(var i=0;i<totalquestionofjsen;i++) {
	        	           			var qbankjsonforthisq=qbankjson[i]; 

	        						arr.push(qbankjsonforthisq.qtext); //qtext insertion
	        						//arr1.push(qbankjsonforthisq.op1);//OP1 insertion
	        						// add replace function  by @Abhishek for render single quote with encode charter in html page qflag 18 typing test
	        						if(qbankjsonforthisq.pqflag=="18"){
	        							arr1.push(qbankjsonforthisq.op1.replace("'","&#39;"));//OP1 insertion
	        						}
	        						else{
	        						arr1.push(qbankjsonforthisq.op1);//OP1 insertion
	        	           			}
	        						arr2.push(qbankjsonforthisq.op2);//OP2 insertion
	        						arr3.push(qbankjsonforthisq.op3);//OP3 insertion
	        						arr4.push(qbankjsonforthisq.op4);//OP4 insertion
	        						arr5.push(qbankjsonforthisq.op5);//OP5 insertion
	        						arr6.push(qbankjsonforthisq.op6);//OP6 insertion
	        						opt7.push(qbankjsonforthisq.op7);//OP7 insertion
	        						arr15.push(qbankjsonforthisq.mark); 
	        						system_marks=system_marks+qbankjsonforthisq.mark+"|";//marks insertion
	        						arr7.push(qbankjsonforthisq.ans);
	        						rans=rans+qbankjsonforthisq.ans+"|";// ANS INSERTION
	        						rightAns=rightAns+qbankjsonforthisq.ans;// Right Ans Inset in hidden field use for cookies
	        						arr8.push(qbankjsonforthisq.compre);
	        						arr9.push(qbankjsonforthisq.sec);
	        						rsec=rsec+qbankjsonforthisq.sec+"|";
	        						images.push(qbankjsonforthisq.img);
	        						images1.push(qbankjsonforthisq.sno);
	        						ques_no.push(qbankjsonforthisq.sno);
	        						rqno=rqno+qbankjsonforthisq.sno+"|";//Question No
	        						
	        						console.log("check for sno........" + rqno);
	        						
	        						qtype.push(qbankjsonforthisq.type);
	        						que_id.push(qbankjsonforthisq.id);//Question ID
	        						arr10.push(qbankjsonforthisq.pattern);
	        						arr11.push(qbankjsonforthisq.testlevel);
	        						arr12.push(qbankjsonforthisq.qlevel);
	        						arr13.push(qbankjsonforthisq.totalsec);
	        						arr16.push(qbankjsonforthisq.subtopic);
	        						arr17.push(qbankjsonforthisq.stream);
	        						arr18.push(qbankjsonforthisq.topic);
	        						arr37.push(qbankjsonforthisq.tps);//time Per section
	        						sec_inst.push(qbankjsonforthisq.secInst);//section instruction
	        						display_secName.push(qbankjsonforthisq.displaySecName);//display section name
	        						section_change_warning.push(qbankjsonforthisq.sectionChangeWarning);//section change warning
	        						op1_images.push(qbankjsonforthisq.op1_image);
	        						op2_images.push(qbankjsonforthisq.op2_image);
	        						op3_images.push(qbankjsonforthisq.op3_image);
	        						op4_images.push(qbankjsonforthisq.op4_image);
	        						op5_images.push(qbankjsonforthisq.op5_image);
	        						op6_images.push(qbankjsonforthisq.op6_image);
	        						op7_images.push(qbankjsonforthisq.op7_image);
	        						psqn=psqn+qbankjsonforthisq.psno+"|";
	                           		psqflg=psqflg+qbankjsonforthisq.pqflag+"|";
	                           		psop1max=psop1max+qbankjsonforthisq.op1max+"|";
	                           		psop1min=psop1min+qbankjsonforthisq.op1min+"|";
	                           		psop2max=psop2max+qbankjsonforthisq.op2max+"|";
	                           		psop2min=psop2min+qbankjsonforthisq.op2min+"|";
	                           		psop3max=psop3max+qbankjsonforthisq.op3max+"|";
	                           		psop3min=psop3min+qbankjsonforthisq.op3min+"|";
	                           		psop4max=psop4max+qbankjsonforthisq.op4max+"|";
	                           		psop4min=psop4min+qbankjsonforthisq.op4min+"|";
	                           		psop5max=psop5max+qbankjsonforthisq.op5max+"|";
	                           		psop5min=psop5min+qbankjsonforthisq.op5min+"|";
	                           		psop6max=psop6max+qbankjsonforthisq.op6max+"|";
	                           		psop6min=psop6min+qbankjsonforthisq.op6min+"|";
	        				}
	        	           		}catch(e){}
	        	           	document.getElementById("psqn").value= psqn;
	                         document.getElementById("psqflg").value= psqflg;	
	                    	 document.getElementById('psop1max').value= psop1max;
	                    	 document.getElementById('psop1min').value= psop1min;	
	                    	 document.getElementById('psop2max').value= psop2max;
	                    	 document.getElementById('psop2min').value= psop2min;	
	                    	 document.getElementById('psop3max').value= psop3max;
	                    	 document.getElementById('psop3min').value= psop3min;
	                    	 document.getElementById('psop4max').value= psop4max;
	                    	 document.getElementById('psop4min').value= psop4min;
	                    	 document.getElementById('psop5max').value= psop5max;
	                    	 document.getElementById('psop5min').value= psop5min;
	                    	 document.getElementById('psop6max').value= psop6max;
	                    	 document.getElementById('psop6min').value= psop6min;
	                    	 
	                    	 document.getElementById('RQNO1').value= rqno;
	                    	 document.getElementById('RANS1').value= "";
	                    	 document.getElementById('RSEC1').value= rsec;
	                    	 document.getElementById('RMAK1').value= system_marks;
	                    	 
	        				 var newwww=0;
	        				      
	        				for(var www=1; www<=parseInt(document.getElementById('size').value);www++){

	        					// document.getElementById('answer'+(www)).value= rightAns[(www-1)];   //i am using this for cookies put all value in onload
	        					document.getElementById('answer'+www).value= arr7[www];
	        					document.getElementById('testPattern'+www).value= arr10[www];
	        					document.getElementById('sec_testLevel'+www).value= arr12[www];
	        					document.getElementById('sec_testsize'+www).value= arr13[www];
	        					document.getElementById('sec_subtopic'+www).value= arr16[www];
	        					document.getElementById('section'+www).value= arr9[www];
	        					document.getElementById('sec_level'+www).value= arr11[www];
	        					document.getElementById('sec_stream'+www).value= arr17[www];
	        					document.getElementById('sec_topic'+www).value= arr18[www];
	        					document.getElementById('QF'+www).value= qtype[www];
	        					if(qtype[www]=="18"){document.getElementById('typingQuestionText'+www).value= Base64.encode(arr1[www]);}
	        					document.getElementById('QUESNO'+www).value= ques_no[www];
	        					document.getElementById('QUESID'+www).value= que_id[www];
	        					if(www!=1){
	        						if(document.getElementById('section'+www).value!=document.getElementById('section'+(www-1)).value){
	        							if(document.getElementById('testPattern'+www).value=="ADP")
	        								newwww= newwww+(parseInt(document.getElementById('sec_testsize'+www).value)*parseInt(document.getElementById('sec_level'+www).value));
	        							else
	        								newwww= newwww+parseInt(document.getElementById('sec_testsize'+www).value);
	        						}
	        					}
	        					else{
	        						if(document.getElementById('testPattern'+www).value=="ADP")
	        							newwww= newwww+(parseInt(document.getElementById('sec_testsize'+www).value)*parseInt(document.getElementById('sec_level'+www).value));
	        						else
	        							newwww= newwww+parseInt(document.getElementById('sec_testsize'+www).value);
	        					}

	        					document.getElementById('jump_que'+www).value= newwww;
	        					//alert(arr15[www]);
	        					document.getElementById('hid_marks'+www).value=arr15[www];
	        					if(document.getElementById('currentSection').value == arr9[www]){
	        						document.getElementById('timeAllotPerSec'+www).value=document.getElementById('timeRemainForCurrentSection').value;
	        					}else{
	        						document.getElementById('timeAllotPerSec'+www).value=arr37[www];
	        					}
	        					if(qtype[www]=="11" || qtype[www]=="14"){ 
	        						//audioList.push("");
	        						var sectionName = arr9[www];
	        						var compreID = que_id[www];
	        						var compreKey = sectionName+compreID;
	        						if(compreKey in audioCompreJsonData){
	        							
	        						}else{
	        							audioCompreJsonData[compreKey] = compreKey;
	        							var noque=0; 
	                                  	var playCount=document.getElementById('audioAllow'+www).value;
	                                  	var compre=arr8[www];  
	                              		if(compre.match("^^^^")){  
	                              			compre=compre.split("^^^^");   
//	                              			audioPath+="<iframe src='play/audiojs/audioTemp.jsp?path="+compre[0]+"&playCount="+playCount+"&sno="+www+"' style='margin: 0;width:100%;display:none;' frameborder='0' scrolling='no'  name='iframe"+www+"' id='iframe"+www+"' height='50px;'></iframe> <br/>";
	                              			audioPath+="<iframe src='play/audiojs/audio.jsp?path="+compre[0]+"&playCount="+playCount+"&sno="+www+"' style='width:100%;display:none;'  frameborder='0' scrolling='no'  name='iframe"+compreKey+"' id='iframe"+compreKey+"' height='50px;' onmouseout='audioParenwtWindowFocus();' onmouseover='audioParenwtWindowFocus();'></iframe>";
	                              			audioList.push('iframe'+compreKey);
	                              		}
	        						}
                                }
	        				}
	        				document.getElementById("audioDiv").innerHTML =audioPath;
	        				document.getElementById("audioDiv").style.display='none';
	                      }  
	        				
	        				objImage = new Image();
	        				function download(img_src){                    	// preload the image file
	        					objImage.src=images[img_src];
	        				}
	        				var quesTYPE="";  document.getElementById("openModal").style.display='none';
 
      //---------------------------------------On Load ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                    
	        				var callFromResumeTemp = document.getElementById("callFromResume").value;
                    		if(callFromResumeTemp == 'Active'){
                    			callFromResume = true;
                    			try{
	                    			var comp_code = parseInt(document.getElementById('comp_code').value);
	                    			if(comp_code == '0414000'){
	                    			document.getElementById('progress_count').value = 0;
	                    			document.getElementById('progress_Bar').style.width = 0;
	                    			var total_que = parseInt(document.getElementById('actsize').value);
	    	        				var count = parseInt(document.getElementById('progress_count').value);
	                    			console.log("total_que---"+total_que);
	                    			for( var i = 1; i <= total_que; i++ ){
	                    				var uans = document.getElementById("user_ans"+parseInt(i)).value;
	                    				console.log("---asdf----"+document.getElementById("user_ans"+parseInt(i)).value);
	                    				if(uans != "")
	                    					count = count + 1;
	                    			}
	                    			document.getElementById('progress_count').value = parseInt(count);
	                    			document.getElementById('progress_Bar').style.width = ((count) / total_que) * 100 +"%";
	                    			document.getElementById('progress_Bar').innerHTML = (count)+"/"+ total_que;
	                    			console.log("--progress_count---"+count);
	                    			}
                    			}
                    			catch (e) {
										// TODO: handle exception
									}
                    			
                    		}   
	        				
	        				if(document.getElementById("form").style.display="none"){
	        					  console.log("displaing everything=="+callFromResume);
	        					  if(callFromResume == false){
                         		 try{ 
                         			document.getElementById("ImageLoader").style.display = "none"; 
                         			 document.getElementById("form").style.display="block";
                         			 document.getElementById("allbutton").style.display="block";
                            		  document.getElementById("First_Header").style.display="block";
                            		  document.getElementById("beforeTestLoad").style.display="none";   
                         		 	}catch (e) {
										// TODO: handle exception
									}
	        					  }
                         	  } 
	        				var booleanforautoglide=false;
	        				
	        				   if(document.getElementById("autoglide") !=null){
	        					   booleanforautoglide=document.getElementById("autoglide").checked; 
	        				   }
	        				   if(wheeboxtesttype == "CBTBASEDTEST") {
	        					   booleanforautoglide = true;
	        					   $( "#autoglide" ).prop( "checked", true );
	        				   }
			var vv=j;
                         if(!((j=="next")||(j=="previous")||(j=="mark")||(j=="unmark")||(j=="flag")||(j=="unflag")||(j=="autoglide")||(j=="qsection")||(!isNaN(parseInt(j)))))
                          {                	  
                      	   if(vv!="1"){vv="1"; }
                          }
                              var newvar = Math.random(); var option_random = Array();
if(vv=="autoglide" && !booleanforautoglide){
                         
                         }else{
                        	 document.getElementById('randOp').value=newvar;
                         }
                              var act_ans = arr7[value];
                              var user_ans="";
                              var lastQues =parseInt(document.getElementById('size').value);
                              lastQues = lastQues-1;
                              var LastSectionName=arr9[value];
                              var Lastsec_testsize=document.getElementById('sec_testsize'+value).value;
                          var overAllPattern = document.getElementById('overAllPattern').value;
                      //    alert("833---"+vv+" "+value);
                           
                          if((isAudioPlaying == true) && (vv !="autoglide") && (isSecTimerComplete == false)){
                        	  swal("Information !!","You cannot switch question when audio is playing.","warning");
                        	  return false;
                          }
                          if((qtype[value]=="11" || qtype[value]=="14") && (vv !="autoglide" && vv !="flag" && vv !="unflag")){
                        	  try{
                        		  	var sectionName = arr9[value];
	        						var compreID = que_id[value];
	        						var compreKey = sectionName+compreID;
	        						document.getElementById("iframe"+compreKey).style.display="none";
                        	  }catch(e){
//                        		  alert(e);
                        	  }
                          }

                          if(document.getElementById("comp_code").value === "0311000"){
                      		var flagStatusValue = document.getElementById("flag"+value).value;
                      		console.log(value+": flagStatusValue: "+flagStatusValue+"==========j:"+j);
                      		if((flagStatusValue !== "next" && flagStatusValue !== "previous") && (j=="mark" || j=="unmark" || j=="flag" || j=="unflag" || j=="autoglide")) {
	  	                  		  if(j === "mark") {
	  	                  			  console.log("Came to mark");
	  	                  		document.getElementById("flag"+value).value = j;
	  	                  			document.getElementById("butt"+value).style.background="blue";
	  		                        document.getElementById("markx").style.display="none";
	  		                        document.getElementById("unmarkv").style.display="block";
	  		                  		  document.getElementById("x").style.display="none";
	  		                  		  document.getElementById("v").style.display="none";
	  	                  		  }else if(j === "unmark") {
	  	                  			document.getElementById("flag"+value).value = j;
	  	                  		var found = document.getElementById("user_ans"+value).value;
	                  			  console.log("UserAns: ["+found+"]");
	                  			  if(found === undefined || found === null || found === "") {
	                  				  document.getElementById("butt"+value).style.background="lightgray";
	                  			  }else {
	                  				  document.getElementById("butt"+value).style.background="#7fd895";
                                      document.getElementById("butt"+value).style.color="white";
	                  			  }
	  		                        document.getElementById("markx").style.display="block";
	  		                        document.getElementById("unmarkv").style.display="none";
	  		                  		  document.getElementById("x").style.display="block";
	  		                  		  document.getElementById("v").style.display="none";
	  	                  		  }else if(j === "flag") {
	  	                  			  if(document.getElementById("user_ans"+value).value != "") {
	  	                  				document.getElementById("flag"+value).value = j;
		  	                  			document.getElementById("butt"+value).style.background="#DC143C";
		  		                        document.getElementById("markx").style.display="none";
		  		                        document.getElementById("unmarkv").style.display="none";
		  		                  		  document.getElementById("x").style.display="none";
		  		                  		  document.getElementById("v").style.display="block"; 
	  	                  			  }
	  	                  		  }else {
	  	                  			var found = document.getElementById("user_ans"+value).value;
	  	                  			  console.log(value+":UserAns: ["+found+"]");
	  	                  			  if((found === undefined || found === null || found === "") && j !== "autoglide") {
	  	                  				  document.getElementById("butt"+value).style.background="lightgray";
	  	                  			  }else {
	  	                  				  document.getElementById("butt"+value).style.background="#7fd895";
                                          document.getElementById("butt"+value).style.color="white";
	  	                  			  }
	  	                  			document.getElementById("flag"+value).value = j;
	  	                  			document.getElementById("markx").style.display="block";
	  	                  			document.getElementById("unmarkv").style.display="none";
	  	                  			document.getElementById("x").style.display="block";
	  	                  			document.getElementById("v").style.display="none";
		  	                  	}
                      	}else {
                      		var newValue = parseInt(value);
                  			if(j === "previous" && parseInt(value) > 1) {
                  				newValue = parseInt(value) - 1;
                  			}else if((j === "next") && parseInt(value) >= 1){
                  				newValue = parseInt(value) + 1;
                  			}else {
                  				newValue = parseInt(vv);
                  			}
                      			flagStatusValue = document.getElementById("flag"+newValue).value;
		  	                  		console.log(vv+"----"+newValue+" :: "+flagStatusValue+" :MU2: "+j);
		  	                  		if(flagStatusValue === "mark") {
		  	                  			document.getElementById("butt"+newValue).style.background="blue";
		  		                        document.getElementById("markx").style.display="none";
		  		                        document.getElementById("unmarkv").style.display="block";
		  		                  		  document.getElementById("x").style.display="none";
		  		                  		  document.getElementById("v").style.display="none";
		  	                  		  }else if(flagStatusValue === "unmark") {
		  	                  			var found = document.getElementById("user_ans"+newValue).value;
	  	                  			  console.log("UserAns: ["+found+"]");
	  	                  			  if(found === undefined || found === null || found === "") {
	  	                  				  document.getElementById("butt"+newValue).style.background="lightgray";
	  	                  			  }else {
	  	                  				  document.getElementById("butt"+newValue).style.background="#7fd895";
                                          document.getElementById("butt"+newValue).style.color="white";
	  	                  			  }
		  		                        document.getElementById("markx").style.display="block";
		  		                        document.getElementById("unmarkv").style.display="none";
		  		                  		  document.getElementById("x").style.display="block";
		  		                  		  document.getElementById("v").style.display="none";
		  	                  		  }else if(flagStatusValue === "flag") {
		  	                  			document.getElementById("butt"+newValue).style.background="#DC143C";
		  		                        document.getElementById("markx").style.display="none";
		  		                        document.getElementById("unmarkv").style.display="none";
		  		                  		  document.getElementById("x").style.display="none";
		  		                  		  document.getElementById("v").style.display="block";
		  	                  		  }else {
		  	                  			  var found = document.getElementById("user_ans"+newValue).value;
		  	                  			  console.log("UserAns: ["+found+"]");
		  	                  			  if(found === undefined || found === null || found === "") {
		  	                  				  document.getElementById("butt"+newValue).style.background="lightgray";
		  	                  			  }else {
		  	                  				  document.getElementById("butt"+newValue).style.background="#7fd895";
                                              document.getElementById("butt"+newValue).style.color="white";
		  	                  			  }
			  		                        document.getElementById("markx").style.display="block";
			  		                        document.getElementById("unmarkv").style.display="none";
			  		                  		  document.getElementById("x").style.display="block";
			  		                  		  document.getElementById("v").style.display="none";
			  	                  	}
			  	                }
  	  	                    }
                          allowcheeting = true;
                          console.log("vvvvvvvv:- "+vv);
                          try{
                        	  document.getElementById("qstatus_au").style.display="none";
                        	  
                          }catch(e){
                        	  
                          }
                          if((sectiondetail[document.getElementById("section"+value).value].pat != 'ADP') && (sectiondetail[document.getElementById("section"+value).value].pat != 'PSY')){
                        	  
                          
                          if(getAns()!=""){
                              attemptdetails[value]= "A"; 
                              recalculateattemptdetails(value); 
                                  }else{
                                delete attemptdetails[value];
                               	   recalculateattemptdetails(value); 
                                  }
                         // alert(sectiondetail[document.getElementById("section"+value).value].MaxAllowedtoAttempt);                      	
                          if(sectiondetail[document.getElementById("section"+value).value].MaxAllowedtoAttempt < sectiondetail[document.getElementById("section"+value).value].attemped){
                               showMessage(jsonObj[49044]);
                               clrearResponse();
                               return false;
                          }
                          try{
	                           var comp_code = parseInt(document.getElementById('comp_code').value);
	      	          			var currentQuestionmine = parent.document.getElementById('hid').value;
	      	          			if(comp_code == '0414000' && document.getElementById('QF'+currentQuestionmine).value=='4' ){
	      	          			var total_que = parseInt(document.getElementById('actsize').value);
	      	          			var attemptCount = parseInt(document.getElementById('progress_count').value);
	      	          			if(tinymce.get('option').getContent()==""){
	            						
	            						swal("Information !!","You cannot skip question. Please respond to the current question.","success");
	            						return false; 
	            					}else if(vv=='next' && attemptCount < total_que){
	            						
	            						document.getElementById("progress_count").value = attemptCount+1;
	                                  var attemptCount = parseInt(document.getElementById('progress_count').value);
	                                  document.getElementById('progress_Bar').style.width = (attemptCount / total_que) * 100 +"%";
	                                  document.getElementById('progress_Bar').innerHTML = attemptCount+"/"+ total_que;
	            					}
	      					}
                          }
                          catch (e) {
										// TODO: handle exception
									}
                         
                          }                               		
                              if(vv=="flag"){
                              
                             	 if(false){ mainchekingforcheeet=true;swal({title:jsonObj[49143],text:jsonObj[49039],confirmButtonText:jsonObj[16117],type:"success"});}
                             	 else{
                               
                             		 if(qtype[value]=="6"){
                             			 
                             			 
                                			var ans="";
               							var ul = document.getElementById("swappable");// Get the LI in the UL 
               							var liNodes = ul.getElementsByTagName("li");// Iterate through the LI's 
               							//alert(ul);alert(liNodes);
               							//alert("1067----"+liNodes.length);
               							for( var i = 0; i < liNodes.length; i++ ) 
               							{// Get the child nodes of the LI 
               							var liChildren = liNodes.item(i).childNodes;// Iterate through the child nodes of the LI 
               							for( var j = 0; j < liChildren.length; j++ ) 
               							{// Look for text nodes 
               							if( liChildren.item(j).nodeType == liChildren.item(j).TEXT_NODE ) 
               							{// Get the text node value 
               								if((i+1)==liNodes.length)
               									ans=ans+liChildren.item(j).nodeValue;
               								else
               									ans=ans+liChildren.item(j).nodeValue+"&#165;";
               							}}} 
               							var que=arr2[value].replace(/^\s+|\s+$/g, '').split(","); var qtxt_ans="";
               							for(var i=1;i<=que.length;i++){
               								if(i==que.length)
               									qtxt_ans=qtxt_ans+que[i-1];
               								else
               									qtxt_ans=qtxt_ans+que[i-1]+",";
               							}
               							var qt_ans=qtxt_ans.replace(/^\s+|\s+$/g, '').split(",");var new_ans="";
               							var us_ans=ans.replace(/^\s+|\s+$/g, '').split(",");
                                			
                         					if(ans.replace(/^\s+|\s+$/g, '')==qtxt_ans.replace(/^\s+|\s+$/g, '')){
                         						var popupFlagMessage = jsonObj[49040];
                          						var custom_flagButtonName = document.getElementById("custom_flagButtonName").value;
                          						if(custom_flagButtonName === undefined || custom_flagButtonName === null || custom_flagButtonName === "") {
                          							
                          						}else {
                          							popupFlagMessage = popupFlagMessage.replace("flagging", custom_flagButtonName+"ing");
                          						}
                         						swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117]});
                         					}
                         					else{
                         						document.getElementById("flag"+value).value="flag";
                         						document.getElementById("butt"+value).style.background="#DC143C";
                         						document.getElementById("x").style.display="none";
                         						document.getElementById("v").style.display="block";
                                                try {
                                               	 document.getElementById("markx").style.display="none";
                                               	 document.getElementById("unmarkv").style.display="none";
                                                }
                                                catch(e) {
               	                             	 //Ignoring if markx and unmarkv is not present
               	                             	 //console.log(e);
                                                }
                         					}
                         				}else  if(qtype[value]=="14"){
                      					var user_ans = document.getElementById("textarea"+value).value;
                      					if(user_ans!=""){
                      						document.getElementById("flag"+value).value="flag";
                                              document.getElementById("butt"+value).style.background="#DC143C";
                                              document.getElementById("x").style.display="none";
                                              document.getElementById("v").style.display="block";
                                              try {
                                             	 document.getElementById("markx").style.display="none";
                                             	 document.getElementById("unmarkv").style.display="none";
                                              }
                                              catch(e) {
             	                             	 //Ignoring if markx and unmarkv is not present
             	                             	 //console.log(e);
                                              }
                      					}else{ 
                      						var popupFlagMessage = jsonObj[49041];
                      						var custom_flagButtonName = document.getElementById("custom_flagButtonName").value;
                      						if(custom_flagButtonName === undefined || custom_flagButtonName === null || custom_flagButtonName === "") {
                      							
                      						}else {
                      							popupFlagMessage = popupFlagMessage.replace("flagging", custom_flagButtonName+"ing");
                      						}
                      						swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false;  }
                      				}else if(qtype[value]=="13"){
                      					var a1 = document.getElementsByName("option"+value);
                                          var user_ans=a1[0].value.replace(new RegExp(';', 'g'), '');   
                                       	try{if(a1[1].value==null){a1[1].value='';}if(a1[1].value!=''){user_ans+=""+a1[1].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                                       	try{if(a1[2].value==null){a1[2].value='';}if(a1[2].value!=''){user_ans+=""+a1[2].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                                       	try{if(a1[3].value==null){a1[3].value='';}if(a1[3].value!=''){user_ans+=""+a1[3].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                                       	try{if(a1[4].value==null){a1[4].value='';}if(a1[4].value!=''){user_ans+=""+a1[4].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                                       	try{if(a1[5].value==null){a1[5].value='';}if(a1[5].value!=''){user_ans+=""+a1[5].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                                       	user_ans=user_ans.replace(/\ /g,''); 
                                          if(user_ans!=""){
                                          	document.getElementById("flag"+value).value="flag";
                                              document.getElementById("butt"+value).style.background="#DC143C";
                                              document.getElementById("x").style.display="none";
                                              document.getElementById("v").style.display="block";
                                              try {
                                             	 document.getElementById("markx").style.display="none";
                                             	 document.getElementById("unmarkv").style.display="none";
                                              }
                                              catch(e) {
             	                             	 //Ignoring if markx and unmarkv is not present
             	                             	 //console.log(e);
                                              }
                                          }else{ 
                                        	  var popupFlagMessage = jsonObj[49041];
                                        	  var custom_flagButtonName = document.getElementById("custom_flagButtonName").value;
                                        	  if(custom_flagButtonName === undefined || custom_flagButtonName === null || custom_flagButtonName === "") {
                                        		  
                                        	  }else {
                                        		  popupFlagMessage = popupFlagMessage.replace("flagging", custom_flagButtonName+"ing");
                                        	  }
                                        	  swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false;  }
                      				}
                      				else  if(qtype[value]=="4"){
                      					var a1=document.getElementsByName("option");
                      					var user_ans = tinymce.get('option').getContent();
                      					var popupFlagMessage = jsonObj[49043];
                      					var custom_flagButtonName = document.getElementById("custom_flagButtonName").value;
                      					if(custom_flagButtonName === undefined || custom_flagButtonName === null || custom_flagButtonName === "") {
                      						
                      					}else {
                      						popupFlagMessage = popupFlagMessage.replace("flagging", custom_flagButtonName+"ing");
                      					}
                      					//if(a1.length==1){ if(a1[0].value=="" ){  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:jsonObj[49042],confirmButtonText:jsonObj[16117],type:"success"}); return false; }}
                                        if(a1.length==2){ if((a1[0].checked!=true)&&(a1[1].checked!=true)){  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false; }}
                                        if(a1.length==3){ if((a1[0].checked!=true)&&(a1[1].checked!=true)&&(a1[2].checked!=true)){  mainchekingforcheeet=true; swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"});  return false; } } 
                                        if(a1.length==4){ if((a1[0].checked!=true)&&(a1[1].checked!=true)&&(a1[2].checked!=true)&&(a1[3].checked!=true)){ mainchekingforcheeet=true; swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false;}} 
                                        if(a1.length==5){ if((a1[0].checked!=true)&&(a1[1].checked!=true)&&(a1[2].checked!=true)&&(a1[3].checked!=true)&&(a1[4].checked!=true)){  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false; }} 
                                        if(a1.length==6){ if((a1[0].checked!=true)&&(a1[1].checked!=true)&&(a1[2].checked!=true)&&(a1[3].checked!=true)&&(a1[4].checked!=true)&&(a1[5].checked!=true)){  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false; } }
                                        /*for(var j=0;j<a1.length;j++)
                                        {   if(a1[j].checked==true||a1[0].value!="")
                                            {   document.getElementById("flag"+value).value="flag";//alert();
                                                document.getElementById("butt"+value).style.background="#DC143C";
                                                document.getElementById("x").style.display="none";
                                                document.getElementById("v").style.display="block";
                                            }
                                        }*/
                      					if(user_ans!=""){
                      						document.getElementById("flag"+value).value="flag";
                                              document.getElementById("butt"+value).style.background="#DC143C";
                                              document.getElementById("x").style.display="none";
                                              document.getElementById("v").style.display="block";
                                              try {
                                             	 document.getElementById("markx").style.display="none";
                                             	 document.getElementById("unmarkv").style.display="none";
                                              }
                                              catch(e) {
             	                             	 //Ignoring if markx and unmarkv is not present
             	                             	 //console.log(e);
                                              }
                      					}else{ swal({title:jsonObj[49143],text:"You can Flag a question only after attempting it.",confirmButtonText:jsonObj[16117],type:"success"}); return false;  }
                      				}
                             		 
                  
                      				
                      				
                      				
                      				else{
                             		 
                                 var a1=document.getElementsByName("option");//a1.sort();
                                //alert("-----"+a1[0].value+"-----"+a1.length);
                                //var mychecked = tinymce.get('option').getContent();
                                 var popupFlagMessage = jsonObj[49043], popupFlagMessage2 = jsonObj[49042];
                                 var custom_flagButtonName = document.getElementById("custom_flagButtonName").value;
               					 if(custom_flagButtonName === undefined || custom_flagButtonName === null || custom_flagButtonName === "") {
               					 	
               					 }else {
               						popupFlagMessage2 = popupFlagMessage2.replace("flagging", custom_flagButtonName+"ing");
               						popupFlagMessage = popupFlagMessage.replace("flagging", custom_flagButtonName+"ing");
               					 }
                                 if(a1.length==1){ if(a1[0].value=="" ){  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:popupFlagMessage2,confirmButtonText:jsonObj[16117],type:"success"}); return false; }}
                                 if(a1.length==2){ if((a1[0].checked!=true)&&(a1[1].checked!=true)){  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false; }}
                                 if(a1.length==3){ if((a1[0].checked!=true)&&(a1[1].checked!=true)&&(a1[2].checked!=true)){  mainchekingforcheeet=true; swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"});  return false; } } 
                                 if(a1.length==4){ if((a1[0].checked!=true)&&(a1[1].checked!=true)&&(a1[2].checked!=true)&&(a1[3].checked!=true)){ mainchekingforcheeet=true; swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false;}} 
                                 if(a1.length==5){ if((a1[0].checked!=true)&&(a1[1].checked!=true)&&(a1[2].checked!=true)&&(a1[3].checked!=true)&&(a1[4].checked!=true)){  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false; }} 
                                 if(a1.length==6){ if((a1[0].checked!=true)&&(a1[1].checked!=true)&&(a1[2].checked!=true)&&(a1[3].checked!=true)&&(a1[4].checked!=true)&&(a1[5].checked!=true)){  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:popupFlagMessage,confirmButtonText:jsonObj[16117],type:"success"}); return false; } }
                                 for(var j=0;j<a1.length;j++)
                                 {   if(a1[j].checked==true||a1[0].value!="")
                                     {   document.getElementById("flag"+value).value="flag";//alert();
                                         document.getElementById("butt"+value).style.background="#DC143C";
                                         document.getElementById("x").style.display="none";
                                         document.getElementById("v").style.display="block";
                                         try {
                                        	 document.getElementById("markx").style.display="none";
                                        	 document.getElementById("unmarkv").style.display="none";
                                         }
                                         catch(e) {
        	                             	 //Ignoring if markx and unmarkv is not present
        	                             	 //console.log(e);
                                         }
                                     }
                                 }
                      				} 
                       		}
                            	}else if(vv=="unflag"){
                                 //var lastvalue=document.getElementById('hid').value;
                                 document.getElementById("flag"+value).value="unflag";
                                 document.getElementById("butt"+value).style.background="#7fd895";
                                 document.getElementById("butt"+value).style.color="white";
                                 document.getElementById("x").style.display="block";
                                 document.getElementById("v").style.display="none";
                                 try {
                                	 document.getElementById("markx").style.display="block";
                                	 document.getElementById("unmarkv").style.display="none";
                                 }
                                 catch(e) {
	                             	 //Ignoring if markx and unmarkv is not present
	                             	 //console.log(e);
                                 }
      						}
                            	else if(vv=="next" || vv=="previous" || vv=="qsection" || (vv=="autoglide" && document.getElementById("autoglide").checked) || vv=="1" || (isNaN(value)==false) ) 
      						{ 
                            		/*Section Timer Start*/

                            		if((vv != "next" && vv != "previous" && vv!="autoglide" && switchQuestion == false)){
                            			var secWiseTimer = document.getElementById("quesWiseTimeCheck").value;
                            			if(secWiseTimer == 'sectionTimer'){
                                    	var currentSec = document.getElementById('dsectionlable1').innerHTML;
                                    	var currentSecSize = document.getElementById('sec_testsize'+parseInt(vv)).value;
                                    	if(callFromResume == false){
                                    	if(arr9[parseInt(vv)] != currentSec && vv != "1"){
                                    		 swal("Information !!","You can not go to the other section. Navigation through question panel is allowed only for the section being attempted.","success");
                                    		return false;
                                    	}}}
                                    	}else{
                                    		switchQuestion = false;
                                    	}
                            		
                            			isSecTimerComplete == false;
                            			var secWiseTimer = document.getElementById("quesWiseTimeCheck").value;
                            		 if(vv!="next" && vv!="previous" && value == '1' && isSecForFirst == true && secWiseTimer == 'sectionTimer'){
                            			 if(callFromResume == false){
                            				 isSecForFirst = false;
                            				 secInit("1");
                            			 }
                                	 }
                                	  
                            		/*Section Timer End*/
                            		 try{
                                    		document.getElementById("progDiv").style.display='none';
                                    	  }catch(e){}
                                    	  try{
                                        		document.getElementById("sqlDiv").style.display='none';
                                        	  }catch(e){}
                                    	  try{
                                      		document.getElementById("subDiv").style.display='none';
                                    	  }catch(e){}
                                    	  try{
                                    			if( document.getElementById("subjective_doc_upload_using_webcam").style.display=="block"){
                                        			document.getElementById("subjective_doc_upload_using_webcam").style.display="none";
                                        		}
                                    		}catch(e){
                                    			
                                    		}

                            		try{
                            			if(qtype[value]=="17"){
                            				if( document.getElementById("viva17StopR").style.display=="block"){
                            					var perQuestionTimer=document.getElementById('timeperQue').value;
                    							if(perQuestionTimer==0){perQuestionTimer="";}if(perQuestionTimer=="0"){perQuestionTimer="";}
                    						if(perQuestionTimer==""){
                    							swal({title:"Warning",text:"If you want to move to the next question, you have to click on 'Stop Recording' button to submit your answer to this question. Once submitted, you cannot change your answer for this question. You will not be able to attempt this question again.",confirmButtonText:"",type:"warning"}); return false;	
                    						  
                    						}else{   //alert(document.getElementById('perQuestionTimer').value); 
                    							if(document.getElementById('perQuestionTimer').value=="timeComplete"){ 
                    						 		swal({title:"Warning",text:"The time allocated to attempt this question has been completed. Now you are moving to the next question.",confirmButtonText:"",type:"warning"});
                    						 		return true;
                    							}else{
                    								swal({title:"Warning",text:"If you want to move to the next question, you have to click on 'Stop Recording' button to submit your answer to this question. Once submitted, you cannot change your answer for this question. You will not be able to attempt this question again.",confirmButtonText:"",type:"warning"}); return false;
                    								
                    							} 
                    						}	  
                                			  
                 						} 
                            				if(goNext == false && vv =='next'){
                            					swal({title:"Warning",text:"You cann't move on the next question without attempt the current question.",confirmButtonText:"",type:"warning"});
                            					//return false;
                            					return false;
                            				}	
                            			} 
                            		}catch(e){}
                              	 
                              	if((valueOTH== document.getElementById('size').value && vv=='next')|| (valueOTH== document.getElementById('size').value && vv=="autoglide" && booleanforautoglide)  ){
                              		if(wheeboxtesttype == "CBTBASEDTEST") {
                              			testEndSubmit();
                              		}
                              		mainchekingforcheeet=true;
                              		if(value== document.getElementById('size').value && vv=="autoglide" && booleanforautoglide){
                              			 var flagvalue=document.getElementById("flag"+value).value;
                                           if(flagvalue=="flag"){
	                                           document.getElementById("butt"+value).style.background="#DC143C";
                                             } 
                                           else{
	                                         document.getElementById("butt"+value).style.background="#7fd895";
                                              document.getElementById("butt"+value).style.color="white";
                                           } 
                              		}
                              		if((sectiondetail[document.getElementById("section"+value).value].pat != 'ADP') && (sectiondetail[document.getElementById("section"+value).value].pat != 'PSY')){
                              		if(parseInt(document.getElementById("MaxAllowedtoAttempt").value) <= parseInt(document.getElementById("MaxAllreadyAttempt").value)){
                                    	
                                    	showMessage(jsonObj[49044]);
                                  		 clrearResponse();
                                  		
                                  	 }
                              		}
                              		if(callFromResume == false){
                              			swal({title:jsonObj[49143],text:jsonObj[49045],confirmButtonText:jsonObj[16117],type:"success"}); return false;
                              			}
                              		}
                              	else if(vv=='previous' && value==1){
                              		swal({title:jsonObj[49143],text:"Oops!! You can not go backword as this is the first question.",confirmButtonText:jsonObj[16117],type:"success"}); return false;
                              	}
                                  else
          						{ 
                                  	try{
                                  		
                                  		
                                  		
                                  		
                                  		
                             
                                  		
                                  		
                                  		

                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	var a1=document.getElementsByName("option");
                                  	
                                  	//a1.sort();
                                  	if(Nor_chk==arr13[value]){
             								Nor_chk=0;
             							}
                                  	
                                  	
                                  	if(qtype[value]=="2")//Subjective change
                                      {	 //var sp="";
                                        // alert(a1[0].value);
                                              var ans = a1[0].value;
                                      		ans = ans.replace(/,/gi,'&#44;').replace(/^\s+|\s+$/g, '');
                                          	document.getElementById("user_ans"+value).value=ans;
                                          	//swal(document.getElementById(lastvalue).value);
                                          	document.getElementById('answer'+value).value= arr7[value];
                                              document.getElementById('hid_marks'+value).value= arr15[value];
                                              document.getElementById('section'+value).value= arr9[value];
                                              document.getElementById('QUESNO'+value).value= ques_no[value];
                                              var flagvalue=document.getElementById("flag"+value).value;
                                              if(flagvalue=="flag"){
                                                  document.getElementById("butt"+value).style.background="#DC143C";
                                              }else if(a1[0].value==""||a1[0].value==null){
                                              	document.getElementById("butt"+value).style.background="";
                                              }else{
                                                  document.getElementById("butt"+value).style.background="#7fd895";
                                                  document.getElementById("butt"+value).style.color="white";
                                                }
                                          
                                      sp=""; } //--------------------- Hitesh Work --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          						  else if(qtype[value]=="6")
          							{ 		var ans="";
        							//alert("1064");
        							var ul = document.getElementById("swappable");// Get the LI in the UL 
        							var liNodes = ul.getElementsByTagName("li");// Iterate through the LI's 
        							//alert(ul);alert(liNodes);
        							//alert("1067----"+liNodes.length);
        							for( var i = 0; i < liNodes.length; i++ ) 
        							{// Get the child nodes of the LI 
        							var liChildren = liNodes.item(i).childNodes;// Iterate through the child nodes of the LI 
        							for( var j = 0; j < liChildren.length; j++ ) 
        							{// Look for text nodes 
        							if( liChildren.item(j).nodeType == liChildren.item(j).TEXT_NODE ) 
        							{// Get the text node value 
        								if((i+1)==liNodes.length)
        									ans=ans+liChildren.item(j).nodeValue;
        								else
        									ans=ans+liChildren.item(j).nodeValue+"&#165;";
        							}}} 
        							var que=arr2[value].replace(/^\s+|\s+$/g, '').split("&#165;"); var qtxt_ans="";
        							for(var i=1;i<=que.length;i++){
        								if(i==que.length){
        									qtxt_ans=qtxt_ans+que[i-1].replace(/^\s+|\s+$/g, '').replace(/32;/gi, ' ').replace(/&/gi,'').replace(/#(\S*)/g,"");
        								}
        								else{
        									qtxt_ans=qtxt_ans+que[i-1].replace(/^\s+|\s+$/g, '').replace(/32;/gi, ' ').replace(/&/gi,'').replace(/#(\S*)/g,"")+"&#165;";
        								}
        							}
        							var qt_ans=qtxt_ans.replace(/^\s+|\s+$/g, '').split(",");var new_ans="";
        							var us_ans=ans.replace(/^\s+|\s+$/g, '').split(",");
        							/*for(var i=0;i<qt_ans.length;i++){
        								for(var j=0;j<us_ans.length;j++){
        									if(us_ans[i]==qt_ans[j]){var an="";
        										if(j==0){an="a";}else if(j==1){an="b";}else if(j==2){an="c";}else if(j==3){an="d";}else if(j==4){an="e";}else if(j==5){an="f";}
        										if(i==(us_ans.length-1))
        											new_ans=new_ans+an;
        										else
        											new_ans=new_ans+an+",";
        									}
        								}
        							}*/
        							//alert("ans "+ans);
//        							alert("qtxt_ans "+qtxt_ans);
        							if(ans.replace(/^\s+|\s+$/g, '')==qtxt_ans.replace(/^\s+|\s+$/g, '')){}
        							else{
        							document.getElementById("user_ans"+value).value = ans.replace(/^\s+|\s+$/g, '');
        							}
        							document.getElementById('drgretans'+value).value= ans.replace(/^\s+|\s+$/g, '');
        							document.getElementById('answer'+value).value= arr7[value];
        							document.getElementById('hid_marks'+value).value= arr15[value];
        							document.getElementById('QUESNO'+value).value= ques_no[value];
        							var flagvalue=document.getElementById("flag"+value).value;
        							if(flagvalue=="flag") document.getElementById("butt"+value).style.background="#DC143C";
        							else if(ans.replace(/^\s+|\s+$/g, '')==qtxt_ans.replace(/^\s+|\s+$/g, '')){document.getElementById("butt"+value).style.background="";}
        							else {
	                                   document.getElementById("butt"+value).style.background="#7fd895";
                                        document.getElementById("butt"+value).style.color="white";
                                     }
        							user_ans= ans.replace(/^\s+|\s+$/g, '');
        							
        							document.getElementById('myDiv').style.display='block';
        						}
                                   else if(qtype[value]=="8")
          							{
                                  	 var psy="";
                                   	 var x="";
                                   	 var y="";
                                   	 var a2 = "NO";
                                   	 var Pcheck=false;
                                        a2 = document.getElementsByName("option1");    
                                        for(var j=0;j<a1.length;j++)
                                        {   if(a1[j].checked==true) {  x=a1[j].value; Pcheck=true; } }
                                       
                                        for(var j=0;j<a2.length;j++)
                                        {    if(a2[j].checked==true) { y=a2[j].value; Pcheck=true; } }
                                        if(x=="" && y=="" && vv!="1") { mainchekingforcheeet=true;swal({title:jsonObj[49143],text:jsonObj[49046],confirmButtonText:jsonObj[16117],type:"success"}); return false;}
                                        else if(y=="" && x!="") { mainchekingforcheeet=true;swal({title:jsonObj[49143],text:jsonObj[49047],confirmButtonText:jsonObj[16117],type:"success"}); return false;}
          			  else if(y!="" && x=="") { mainchekingforcheeet=true;swal({title:jsonObj[49143],text:jsonObj[49047],confirmButtonText:jsonObj[16117],type:"success"}); return false;}
                                        psy=x+"XX"+y;
                                        for(var j=0;j<a1.length;j++)
                                        { if(Pcheck==true){
                                           	 document.getElementById("user_ans"+value).value=psy;
                                           	 document.getElementById('answer'+value).value= arr7[value];
                                           	document.getElementById('hid_marks'+value).value= arr15[value];
                                                document.getElementById('section'+value).value= arr9[value];
                                                document.getElementById('QUESNO'+value).value= ques_no[value];
                                                var flagvalue=document.getElementById("flag"+value).value;
                                                if(flagvalue=="flag"){
	                                            document.getElementById("butt"+value).style.background="#DC143C";
                                                }else{
                                                 document.getElementById("butt"+value).style.background="#7fd895";
                                                 document.getElementById("butt"+value).style.color="white";
                                                }  
                                            }
                              }if(Pcheck==false && vv!="1"){ mainchekingforcheeet=true;
                             	 swal("Information !!","All questions are mandatory. Please choose your options.","success");
                               return false;
                           }psy="";sp="";}//----------------------------------- Hitesh Work --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    	
                                  	
                                   else if(qtype[value]=="21")
         							{    try{ 
                                	    opt0 = document.getElementById("totalOptionInQuestion").value; //alert(opt0); 
                                	    var actans="";  
                                	
                                	   for(var j=1;j<(parseInt(opt0)+1);j++)
                                       { 
                                		   var e = document.getElementById("select"+value+""+j);
                                		   var strUserAns = e.options[e.selectedIndex].value;//alert(strUserAns); 
                                		   if(strUserAns==''){    	
                                			   swal({title:jsonObj[49143],text:jsonObj[49048],confirmButtonText:jsonObj[16117],type:"success"});
                                               return false;
                                		   }
                                		   if(actans==''){
                                			   actans=strUserAns;   
                                		   }else{ 
                                			   actans=actans+"-"+strUserAns;
                                		   }
                                       } //alert(actans+"----"+value);
         							}catch(e){alert(e);} 
         							//alert(actans);
         							  document.getElementById("user_ans"+value).value=actans;
                                      document.getElementById('answer'+value).value= arr7[value];
                                      document.getElementById('hid_marks'+value).value= arr15[value];
                                         document.getElementById('section'+value).value= arr9[value];
                                         document.getElementById('QUESNO'+value).value= ques_no[value];
                                         var flagvalue=document.getElementById("flag"+value).value;
                                         var us_ans = document.getElementById("user_ans"+value).value;
                                         //alert(flagvalue);
                                         if(flagvalue=="flag"){
                                            document.getElementById("butt"+value).style.background="#DC143C";
                                         }else if(us_ans !=''){
										    document.getElementById("butt"+value).style.background="#7fd895";
						                    document.getElementById("butt"+value).style.color="white"; 
										}    
         							}
                                  	
                                    
                                    
                                   else if(qtype[value]=="20")
        							{ //20 q flag for compass
                                 	  
                                  	 var psy="";
                                   	 var x="";
                                   	 var y="";
                                   	 var a2 = "NO";
                                   	 var Pcheck=false;
                                        a2 = document.getElementsByName("option1");    
                                        for(var j=0;j<a1.length;j++)
                                        {   if(a1[j].checked==true) {  x=a1[j].value; Pcheck=true; } }
                                       
                                        for(var j=0;j<a2.length;j++)
                                        {    if(a2[j].checked==true) { y=a2[j].value; Pcheck=true; } }
                                        if(x=="" && y=="" && vv!="1") { Pcheck=true;
                                     	  mainchekingforcheeet=true;swal("Information !!","All questions are mandatory. Please choose your options.","success"); return false;
                                     	   }   
                                        else if(y=="" && x!="") {Pcheck=true;
                                       
                                     	 //  mainchekingforcheeet=true;swal("Please choose one option from Most likely, and one option for Least likely."); return false;
                                     	   }
          			  else if(y!="" && x=="") { Pcheck=true;
          				 // mainchekingforcheeet=true;swal("Please choose one option from Most likely, and one option for Least likely."); return false;
          				  }   
                                        var actm=x.split("-");
                                        var rw=strar[value].split("-");
                                        psy=actm[0];//psy=x+"XX"+y;
                                        for(var j=0;j<a1.length;j++)
                                        { if(Pcheck==true){
                                     	   // alert(psy); 
                                     	  // alert(actm[1]+"--------"+rw[1]); 
                                     	   rw[0]=rw[0].replace(/&#32;/gi,' ');
                                     	   rw[1]=rw[1].replace(/&#32;/gi,' ');
                                     	if(actm[1]==rw[0]){   
                                     		document.getElementById("compassRight"+value).value=rw[0];
                                     		document.getElementById('compassWrong'+value).value=rw[1];
                                     	}else if(actm[1]==rw[1]){
                                     		 document.getElementById("compassRight"+value).value=rw[1];
                                     		 document.getElementById('compassWrong'+value).value= rw[0];
                                     	}    
                                     	  
                                       	
                                     	
                                     	
                                           	 document.getElementById("user_ans"+value).value=psy;
                                           	 document.getElementById('answer'+value).value= arr7[value];
                                           	document.getElementById('hid_marks'+value).value= arr15[value];
                                                document.getElementById('section'+value).value= arr9[value];
                                                document.getElementById('QUESNO'+value).value= ques_no[value];
                                                var flagvalue=document.getElementById("flag"+value).value;
                                                if(flagvalue=="flag"){
	                                              document.getElementById("butt"+value).style.background="#DC143C";
												 } 
                                                else {
	                                             document.getElementById("butt"+value).style.background="#7fd895";
                                                 document.getElementById("butt"+value).style.color="white";  
                                               }
                                            }
                              }if(Pcheck==false && vv!="1"){ mainchekingforcheeet=true;
                             	 swal("Information !!","All questions are mandatory. Please choose your options.","success");
                               return false;
                           }psy="";sp="";}
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                                  	
                              else if(qtype[value]=="7")					
                              { 
                              	
                              	var a1=document.getElementsByName("option");//a1.sort(); 
                              	var option_present="false";
                            	var skip_compre="";
                            // var sp="";
                              var xxx=0;
                              Pcheck=false;
                              for(var j=0;j<a1.length;j++)
                                  {   if(a1[j].checked==true)
                                      {    document.getElementById("user_ans"+value).value=a1[j].value;
                                          	user_ans =a1[j].value;
                                          	var comp_code=document.getElementById("comp_code").value;
                                          	if(wheeboxtesttype == "CBTBASEDTEST") {
                                          		showMyCurrentScore(value);
                                          	}
                  							if(comp_code=="0143001")
                  								{
                                          	if(a1[j].value=="b")
                                          		{
                                          	option_present="true";
                                          		}
                  								}
                                          	Pcheck=true;
                                              if(user_ans==""){
                                            	  mainchekingforcheeet=true;swal({title:jsonObj[49143],text:jsonObj[49049],confirmButtonText:jsonObj[16117],type:"success"});
                                              return false;
                                              }
                                              else{
                                          document.getElementById('answer'+value).value= arr7[value];
                                          document.getElementById('hid_marks'+value).value= arr15[value];
                                          document.getElementById('section'+value).value= arr9[value];
                                          document.getElementById('QUESNO'+value).value= ques_no[value];
                                          var flagvalue=document.getElementById("flag"+value).value;
                                          if(flagvalue=="flag"){
	                                      document.getElementById("butt"+value).style.background="#DC143C";
                                           } 
                                          else{
	                                      document.getElementById("butt"+valueOTH).style.background="#7fd895";
                                          document.getElementById("butt"+valueOTH).style.color="white";   
                                          }                                   
                                              }
                                      xxx=10;  
                                      }
                                  else{
                                	  xxx--;
                                  }
                                  }
                              var preButt = document.getElementById("preButt").value;
                              if(preButt!="on"){
//                            	  swal("xxx="+xxx+"  value=="+value);
                            	  if(callFromResume == false){
                              if(xxx<=0 && value!=1){ mainchekingforcheeet=true;swal({title:jsonObj[49143],text:jsonObj[49048],confirmButtonText:jsonObj[16117],type:"success"});
                              return false;}}}
                              sp="";
                              if(Pcheck==false && vv!="1"){
                            	  if(preButt=="on"){//Autism
                            		  
                            	  }else{
                            		  if(callFromResume == false){
                            		
		                            	  mainchekingforcheeet=true;
		                            	  swal({title:jsonObj[49143],text:jsonObj[49049],confirmButtonText:jsonObj[16117],type:"success"});
		                            	  return false;
                            		  }
                            	  }
                          }psy="";sp="";                       	
                              }else if(qtype[value]=="14"){
                                  var quesNo =value;
                                  var user_ans="";
                                
                               	   quesNo = value;
                               	   user_ans = document.getElementById("textarea"+quesNo).value;
                               	    		document.getElementById("user_typedans"+quesNo).value =user_ans ; 
      				   user_ans=user_ans.replace(/\./g,' ');
                               	   user_ans=user_ans.replace(/\ /g,'');
                               	   document.getElementById("user_ans"+value).value =user_ans ; 
                               	   user_ans = document.getElementById("user_ans"+quesNo).value;
                              	   document.getElementById("textarea"+quesNo).value =user_ans ; 
                              	
                               	if(user_ans!=""){
                              	   var flagvalue=document.getElementById("flag"+value).value;
                                     if(flagvalue=="flag"){
	                                 document.getElementById("butt"+value).style.background="#DC143C";
                                      } 
                                     else {
	                                   document.getElementById("butt"+value).style.background="#7fd895";
                                       document.getElementById("butt"+value).style.color="white";
                                      }   
                               	}
                            	if(user_ans=="" && overAllPattern=="ADP_PCY"){ mainchekingforcheeet=true;
                            	document.getElementById("audioDiv").style.display='block';
                            	var sectionName = arr9[value];
        						var compreID = que_id[value];
        						var compreKey = sectionName+compreID;
                            	var visibleDivId = "iframe"+compreKey;
                  				showAudioClips(visibleDivId,audioList);
              					swal({title:jsonObj[49143],text:jsonObj[49051],confirmButtonText:jsonObj[16117],type:"success"});
                                          	return false; 
                                          	}
                                   }else if(qtype[value]=="13"){
                                  	 var quesNo =value;
                                       var user_ans="";
                                  var a1 = document.getElementsByName("option"+quesNo);
                                  user_ans=a1[0].value.replace(new RegExp(';', 'g'), '');   
                               	try{if(a1[1].value==null){a1[1].value='';}user_ans+="#:#"+a1[1].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                               	try{if(a1[2].value==null){a1[2].value='';}user_ans+="#:#"+a1[2].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                               	try{if(a1[3].value==null){a1[3].value='';}user_ans+="#:#"+a1[3].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                               	try{if(a1[4].value==null){a1[4].value='';}user_ans+="#:#"+a1[4].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                               	try{if(a1[5].value==null){a1[5].value='';}user_ans+="#:#"+a1[5].value.replace(new RegExp(';', 'g'), ''); }catch(e){}
                               	
                               	var qf13Answer = a1[0].value.replace(new RegExp(';', 'g'), '');   //alert("a1 = "+a1.length);
                               	try{if(a1[1].value==null){a1[1].value='';}if(a1[1].value!=''){qf13Answer+="#:#"+a1[1].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                               	try{if(a1[2].value==null){a1[2].value='';}if(a1[2].value!=''){qf13Answer+="#:#"+a1[2].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                               	try{if(a1[3].value==null){a1[3].value='';}if(a1[3].value!=''){qf13Answer+="#:#"+a1[3].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                               	try{if(a1[4].value==null){a1[4].value='';}if(a1[4].value!=''){qf13Answer+="#:#"+a1[4].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                               	try{if(a1[5].value==null){a1[5].value='';}if(a1[5].value!=''){qf13Answer+="#:#"+a1[5].value.replace(new RegExp(';', 'g'), ''); }}catch(e){}
                               	var pat =document.getElementById('test_pattern').value;
                                if(pat=="ADP")
                				{	if(user_ans == "#:##:##:#")user_ans="";
                					if(user_ans==""){ mainchekingforcheeet=true;
                					swal({title:jsonObj[49143],text:jsonObj[49051],confirmButtonText:jsonObj[16117],type:"success"});
                                            	return false; 
                                            	}  
                				 else{
                					 document.getElementById("user_typedans"+quesNo).value =user_ans ; 
                                    	user_ans=user_ans.replace(/\ /g,'');   	   
                                       document.getElementById("user_ans"+quesNo).value =user_ans ;
       								incrementAttemptValue(qtype[value], value);
                                                var flagvalue=document.getElementById("flag"+value).value;
                                                if(flagvalue=="flag"){
	                                               document.getElementById("butt"+value).style.background="#DC143C";
                                                  } 
                                                else {
	                                               document.getElementById("butt"+valueOTH).style.background="#7fd895";
                                                    document.getElementById("butt"+valueOTH).style.color="white";
                                                  }                                     
                                                }
                				}else{
                               	
//                               alert(user_ans+"==user_ans");
                				if(user_ans == "#:#" || user_ans == "#:##:#" || user_ans == "#:##:##:#" || user_ans == "#:##:##:##:#" || user_ans == "#:##:##:##:##:#")user_ans="";
                               	document.getElementById("user_typedans"+quesNo).value =user_ans ; 
                               	user_ans=user_ans.replace(/\ /g,'');   	   
                                  document.getElementById("user_ans"+quesNo).value =user_ans ; 
                                  if(user_ans!=""){
      								incrementAttemptValue(qtype[value], value);
                               	   var flagvalue=document.getElementById("flag"+value).value;
                               	   if(document.getElementById("comp_code").value == '0311000') {
                               		   if(flagvalue == "mark") {
                               			   
                               		   }else {
                               			   if(flagvalue=="flag") {
                               				   document.getElementById("butt"+value).style.background="#DC143C";
                               			   }else {
                               				   document.getElementById("butt"+value).style.background="#7fd895";
                                               document.getElementById("butt"+value).style.color="white";
                               			   }
                               		   }
                               	   }else {
                                      if(flagvalue=="flag") {
                                    	  document.getElementById("butt"+value).style.background="#DC143C";
                                      }else {
                                    	  document.getElementById("butt"+value).style.background="#7fd895";
                                          document.getElementById("butt"+value).style.color="white";
                                      }
                               	   }
                                	}
                              	if(qf13Answer=="" && overAllPattern=="ADP_PCY"){ mainchekingforcheeet=true;
                              	document.getElementById("audioDiv").style.display='block';
                              	var sectionName = arr9[value];
        						var compreID = que_id[value];
        						var compreKey = sectionName+compreID;
                              	var visibleDivId = "iframe"+compreKey;
                  				showAudioClips(visibleDivId,audioList);
              					swal({title:jsonObj[49143],text:jsonObj[49051],confirmButtonText:jsonObj[16117],type:"success"});
                                          	return false; 
                                          	}
                                   }
                                if(arr10[value]=="NOR"){
	                                if(document.getElementById("user_ans"+value).value!=""){
	                              	   //sectiondetail[document.getElementById("section"+value).value].attemped++;
	                              	   attemptdetails[document.getElementById('hid').value]= "A";                                   	   
	                              	   recalculateattemptdetails(value);
	                                 }else{
	                              	   delete attemptdetails[document.getElementById('hid').value];
	                              	   recalculateattemptdetails(value);
	                                 }
                                }
                               //  alert("vv value== "+vv+" quesno no = "+quesNo+"   value=="+value);
                            //     alert("user_ans = "+user_ans);
                                   }else if(qtype[value]=="18"  ){
                                  	 //alert("Testing value=="+value);
                                  	 var typing_clock_check =document.getElementById("typing_clock_check"+value).value;
       	                        	//alert(value+"typing_clock_check="+typing_clock_check);
       	                        	if(typing_clock_check=='on'){
       	                        		swal({title:jsonObj[49143],text:jsonObj[49050],confirmButtonText:jsonObj[16117],type:"success"});
       	                        		return false;
       	                        	}
                                   }else if(qtype[value]=="17"  ){
                                	   //viva
                                	   var vivaMark = document.getElementById("viva").value;
                                	  // alert(vivaMark+"-----"+isNaN(vivaMark));
                                	   if(isNaN(vivaMark)){
                                		   document.getElementById("viva").value = "";
                                		   document.getElementById("viva").focus();
                                		   swal("Information !!","Please enter numeric value.","error");
                                		   return false;
                                	   }else{
                                		   document.getElementById("hid_marks"+value).value=vivaMark;
                                		   document.getElementById("vivaMark"+value).value=vivaMark;
                                		   document.getElementById("user_ans"+value).value="Viva";
                                	   }
                                	    
                                	   
                                   }else if(qtype[value]=="22"  ){//viva with mark
                                	   //viva
                                	   var vivaMark = document.getElementById("viva").value;
                                	   var vivaRemark = document.getElementById("vivaRemark").value;
                                	   insertinUser_response(vivaRemark,value);
                                	   //alert(vivaMark+"-----"+isNaN(vivaMark));
                                	   if (isNaN(vivaMark)){
                                		   document.getElementById("vivaRemark"+value).value=vivaRemark;
                                		   document.getElementById("viva").value = "";
                                		   document.getElementById("viva").focus();
                                		   if(vivaMark.toString().indexOf('.') != -1){
                                			   swal("Information !!","Please don't enter decimal value.","error");
                                    		   return false;
                                		   }else if(parseInt(vivaMark) < 0){
                                			   swal("Information !!","Assigned marks can not less than 0.","error");
                                    		   return false;
                                		   }else if(parseInt(vivaMark) > parseInt(arr15[value])){
                                			   swal("Information !!","Assigned marks should be less than maximum marks.","error");
                                    		   return false;
                                		   }else if(vivaMark==""){
                                			   swal("Information !!","Please enter assigned marks.","error");
                                    		   return false;
                                		   }
                                		   else if(vivaMark!="0"){
                                		   swal("Information !!","Please enter numeric value.","error");
                                		   return false;
                                		   }
                                	   }else{
                                		   if(vivaMark.toString().indexOf('.') != -1){
                                			   swal("Information !!","Please don't enter decimal value.","error");
                                    		   return false;
                                		   }else if(vivaMark==""){
                                			   swal("Information !!","Please enter assign marks.","error");
                                    		   return false;
                                		   }
                                		   if(parseInt(vivaMark) > parseInt(arr15[value])){
                                			   swal("Information !!","Assigned marks should be less than maximum marks.","error");
                                    		   return false;
                                		   }else if(parseInt(vivaMark) < 0){
                                			   swal("Information !!","Assigned marks can not less than 0.","error");
                                    		   return false;
                                		   }else{
                                		   document.getElementById("vivaRemark"+value).value=vivaRemark;
                                		   document.getElementById("hid_marks"+value).value=vivaMark;
                                		   document.getElementById("vivaMark"+value).value=vivaMark;
                                		   document.getElementById("user_ans"+value).value="Viva";
                                		   if(vivaMark != ""){
                                			   document.getElementById("butt"+value).style.background="#7fd895";
                                               document.getElementById("butt"+value).style.color="white";
                                		   }
                                		   }
                                	   }
                                	   
                                	   
                                   }else if(qtype[value]=="4") 
                					{      
                                	   callingparentforsub(storingQflag,value);
                                	   var flagvalue=document.getElementById("flag"+value).value;
                                       if(flagvalue=="flag") document.getElementById("butt"+value).style.background="#DC143C";
                                       document.getElementById("subDiv").style.display='none';
                                       
                                       if(document.getElementById("user_ans"+value).value=="SubjectiveAttempted"){
                                    	   //sectiondetail[document.getElementById("section"+value).value].attemped++;
                                    	   attemptdetails[document.getElementById('hid').value]= "A";                                   	   
                                    	   recalculateattemptdetails(value);
                                       }else{
                                    	   delete attemptdetails[document.getElementById('hid').value];
                                    	   recalculateattemptdetails(value);
                                       }
                					}else if(qtype[value]=="5") 
                					{  
                                  		storingQflag=qtype[document.getElementById('hid').value];
                                   	   //callingparentforspro(storingQflag);
                                  	   document.getElementById("progDiv").style.display='none';
        								
                 					}else if(qtype[value]=="25") 
                					{  
                                  		storingQflag=qtype[document.getElementById('hid').value];
//                                  		alert(storingQflag);
                                  		callingparentforsSql(storingQflag);
                                   	   document.getElementById("sqlDiv").style.display='none';
        								
                 					}else{
                                  	 //alert("pat value in else condition="+document.getElementById('test_pattern').value);
                                  	 
                              		var a1=document.getElementsByName("option");  
                                       //a1.sort(); 
                                       var sp="";
                                      var xxx=0; var fru= Array();
                                      for(var j=0;j<a1.length;j++)
                                          {   if(a1[j].checked==true)
                                              {   if(qtype[value]=="3")
                                                  {	sp=sp+a1[j].value;
                                                  	fru.push(a1[j].value);
                                                  	fru.sort();
                                                  	document.getElementById("user_ans"+value).value=fru;
                                                  	var ans="";
                                                  	ans=document.getElementById("user_ans"+value).value;                                            	
                                                  	
                                                  	document.getElementById("user_ans"+value).value=ans;
                                                  	//swal(document.getElementById("user_ans"+value).value);
                                                      user_ans=sp; 
                                                  }
                                                  else
                                                  {
                                                	  incrementAttemptValue(qtype[value], value);
                                                	  document.getElementById("user_ans"+value).value=a1[j].value;
                                                  	user_ans =a1[j].value;
                                                  }
                                              var pat =document.getElementById('test_pattern').value;
                                              if(pat=="ADP")
                  				{	
                  					if(user_ans==""){ mainchekingforcheeet=true;
                  					swal({title:jsonObj[49143],text:jsonObj[49051],confirmButtonText:jsonObj[16117],type:"success"});
                                              	return false; 
                                              	}  
                  				} else{
      			            		
                  					            document.getElementById('answer'+value).value= arr7[value]; 
                  					            document.getElementById('hid_marks'+value).value= arr15[value];
                                                  document.getElementById('section'+value).value= arr9[value];
                                                  document.getElementById('QUESNO'+value).value= ques_no[value];
                                                  var flagvalue=document.getElementById("flag"+value).value;
                                                  if(flagvalue!="mark") {
	                                                  if(flagvalue=="flag"){
		                                                  document.getElementById("butt"+value).style.background="#DC143C";
	                                                     } 
	                                                  else{
		                                                  document.getElementById("butt"+valueOTH).style.background="#7fd895";
                                                          document.getElementById("butt"+valueOTH).style.color="white";
	                                                    } 
                                                  }
                                                  }
                                              xxx=10;  
                                              }
                                          else{
                                        	  xxx--;
						 if(xxx==-4 && qtype[value]=="3"){
                                        		  document.getElementById("user_ans"+value).value=""; 
                                        		  document.getElementById("butt"+value).style.background="#e6e1e1";
                                                    
                                        		  
                                        	  } 
                                          } 
                                          }var pat =document.getElementById('test_pattern').value;
                                          var pat1 =document.getElementById('test_pattern').value;//lolo
                                          var comp_code = document.getElementById("comp_code").value;
                                         // alert(pat1+"----"+comp_code);
                                         if((comp_code == '0008000' || comp_code == '0117000' || comp_code == '0050000') && pat1 == 'NOR'){
                                        	 
                                         } else{
                                          if(pat=="ADP" || (overAllPattern=="ADP_PCY" && vv != "1"))
                  				{ 
                                      if(xxx<=0 && qtype[value] != "29" && qtype[value] != "33"){
                                    	  if(xxx<=0 && qtype[value] != "27"){
                                    		  try {
                                    			  if(qtype[value] == "11" || qtype[value] == "14"){
	                                    			  var sectionName = arr9[value];
	              	        						  var compreID = que_id[value];
	              	        						  var compreKey = sectionName+compreID;
	              	        						  document.getElementById("iframe"+compreKey).style.display="block";
                                    			  }else{
	                                    			  if(document.getElementById("iframe"+document.getElementById("hid").value)) {
	                                    				  document.getElementById("iframe"+document.getElementById("hid").value).style.display="block";
	                                    			  }
                                    			  }
                                    		  }
                                    		  catch(e) {
                                    			  console.log(e);
                                    		  }
                                    		  mainchekingforcheeet=true;if(callFromResume == false){swal({title:jsonObj[49143],text:jsonObj[49051],confirmButtonText:jsonObj[16117],type:"success"});}
                                              return false;
                                    	  }
                                      
                                      }
                  				}}sp="";
                                      }//------------------------------
                                      var pat =document.getElementById('test_pattern').value;
                                     
          						//swal("2");
                                      adpnewque++;
          						if(pat=="ADP" && (vv=="next" || (vv=="autoglide" && document.getElementById("autoglide").checked)))
          						{	
          						
          							var total_size=parseInt(document.getElementById('totalPlayQues').value);
          							var test_level=parseInt(document.getElementById('level').value);
          							adp_attempt++;
          							
          						
          							var act_level=0;
          							
          							act_level=arr12[value];
          							var sec_size=arr13[value]; //swal("sec_size===="+sec_size);
          							
          							var questionflagforwest=101;
          							if(document.getElementById("domainName").value=="WEST 2015")
          								questionflagforwest=10;
          								
          							if(qtype[value]!=questionflagforwest){
          							
          							
      	    							if(user_ans.toUpperCase()== act_ans.toUpperCase())
      	                                {
      	    								//Amar change (for adaptive, if no question for level 3 available)
          									var ifnolevel3_actuallevel2=(sectiondetail[document.getElementById("section"+value).value].level3!="" && act_level==2);
      	    								var ifactuallevelis1_2=(act_level==1 || act_level==3);
      	    								document.getElementById("butt"+(valueADP)).style.background="#7fd895";
                                            document.getElementById("butt"+(valueADP)).style.color="white";
      	                                    if(ifnolevel3_actuallevel2 || ifactuallevelis1_2){
      	    								//alert("1202-----user ansewer correct=== and value is "+value+" and valueADP= "+valueADP+" act_level="+act_level);
      	    								
      	    								if(test_level==3 && act_level==2)  {value=parseInt(value)-parseInt(sec_size);}
      	                                	if((test_level==2||test_level==3) && act_level==1) {value=parseInt(value)-(parseInt(sec_size));}
      	                                    }
      	                                }
      	                                else 
      	                                {	//alert("1208----user ansewer incorrect=== and value is "+value+" and valueADP= "+valueADP+" act_level="+act_level);
      	                                	document.getElementById("butt"+(valueADP)).style.background="#7fd895";
                                            document.getElementById("butt"+(valueADP)).style.color="white";
      	                                	if(act_level==2){ value=parseInt(value)+parseInt(sec_size);}
      	                                	if(act_level==3){ value=parseInt(value)+parseInt(sec_size);}
      	                                }
          							
          							}
          							else if(qtype[value]==questionflagforwest){
          								
          								document.getElementById("butt"+valueADP).style.background="#7fd895";
                                        document.getElementById("butt"+valueADP).style.color="white";
          							}
          							if(value == total_size){
          								document.getElementById("next").style.display='none';
          								
          							}
          							
          							else if(adp_attempt==sec_size){
          								value = parseInt(document.getElementById("jump_que"+value).value);
          								adp_attempt=0;
          							}
          							else{
          								document.getElementById("next").style.display='block';
          							}
                                     // document.getElementById('adpqno').value=adpcnt;
          							
                                  } 
                                	  
                                	  
                                	  //-----------------------------------------------
          						
          						secsecque++;
          						
                                  	}catch(e){
                                  	//	alert(e);
                                  //	alert(vv);
                                  		
                                  	}
                                  	var currentQuestionForResume=valueOTH;
                                  	//alert("vv value --"+vv +" value ="+value+" valueADP="+valueADP +" pvattern ="+document.getElementById('test_pattern').value);
                                  	 var currentQuestionNoForResume="";
                                  	if((sectiondetail[document.getElementById("section"+value).value].pat != 'ADP') && (sectiondetail[document.getElementById("section"+value).value].pat != 'PSY')){
                                    if(parseInt(document.getElementById("MaxAllowedtoAttempt").value) < parseInt(document.getElementById("MaxAllreadyAttempt").value)){
                                    	
                                    	showMessage(jsonObj[49044]);
                                  		 clrearResponse();
                                  		
                                  	 }}
                                    var quesWiseTimeCheck = document.getElementById("quesWiseTimeCheck").value; //This variable is for checking question wise time is on or off
                                  	if(timeCheck == true){
          						if(vv=="qsection"){ 
          							value=this.getElementById('qsection').value;
          							}
                                  else if(vv=="previous"){
                                	  var hid = document.getElementById('hid').value;
          							  var previousSectionHid = parseInt(hid)-1;
          							  var previousSectionName = document.getElementById('section'+previousSectionHid).value;
          							if(arr37[previousSectionHid] !=0 && arr9[value] !=previousSectionName){
          								if(qtype[value] == "4"){
          									document.getElementById("subDiv").style.display='block';
          									var subjectiveAns = document.getElementById('user_ans_if_text'+value).innerHTML;
          									if(subjectiveAns != ""){
          										tinymce.get('option').getBody().innerHTML=decodeURIComponent(subjectiveAns);
          									}
          								}
          								swal("Information !!","You can not go previous","error");return false;
          							}else{
          								valueOTH =	parseInt(valueOTH)-1;
          								value--;
          							}
          						}else if(vv=="next" || (vv=="autoglide" && booleanforautoglide)){
          							var allQuestionMandatory = document.getElementById("allQuestionMandatory").value;
          							var preButt = document.getElementById("preButt").value;
          							if((allQuestionMandatory=='on' || allQuestionMandatory=='ON') && preButt != 'ON'){
          								if(document.getElementById('user_ans'+document.getElementById("hid").value).value==''){
          									if(callFromResume == false){
          										try {
          											if(qtype[value] == "11" || qtype[value] == "14"){
  	                                    			  var sectionName = arr9[value];
  	              	        						  var compreID = que_id[value];
  	              	        						  var compreKey = sectionName+compreID;
  	              	        						  document.getElementById("iframe"+compreKey).style.display="block";
                                      			  }else if(qtype[value] == "5"){
                                      				document.getElementById("progDiv").style.display='block';
                                      			  }else{
          											if(document.getElementById("iframe"+document.getElementById("hid").value)) {
          												document.getElementById("iframe"+document.getElementById("hid").value).style.display="block";
          											}
                                      			  }
          										}
          										catch(e) {
          											console.log(e);
          										}
	          									swal({title:jsonObj[49143],text:jsonObj[49048],confirmButtonText:jsonObj[16117],type:"success"});
	          									return false;
          									}
          								}
          							}
          							/*
          							 * Below Code is Start timer
          							 */
          							
          							try{//alert(document.getElementById("alertForQuestionAns").innerHTML+"=="+vv+"=="+document.getElementById("flag"+document.getElementById("hid").value).value);
                                        var flagvalue=document.getElementById("flag"+document.getElementById("hid").value).value;
                                      	  if((vv=='next' || vv=='previous' || (isNaN(parseInt(vv))==false)) && vv!='autoglide' && (flagvalue=="unflag" || flagvalue=="") && document.getElementById("alertForQuestionAns").innerHTML=="on"){ 
                         					 var status = alertQuestionAnsArr.indexOf(document.getElementById("hid").value);     
                         				   		    // alert(document.getElementById("hid").value+"-----"+(document.getElementById('user_ans'+document.getElementById("hid").value).value)); 
                         				   		if(status == -1 && document.getElementById('user_ans'+document.getElementById("hid").value).value!=""){   
                         						alertQuestionAns(value,ques_no[value],document.getElementById("hid").value,vv);
                                             	return false;     
                         				   			} 
                                            }    
                                        }catch (e) {//alert(e);    
              							// TODO: handle exception
              						}
                                        
          							
          							if(quesWiseTimeCheck=="Slider" || quesWiseTimeCheck=="Circular"){
          								document.getElementById("nextQuestionCall").value="on";
          								startCountDown();
          							}
          							/*
          							 * End timer
          							 */
          							/*Section skip timer start
          							 * if section wise time is on then secSkip=true
          							 */
          							var secSkip = true;
          							 var secWiseTimer = document.getElementById("quesWiseTimeCheck").value;
          							var hid = document.getElementById('hid').value;
          							var nextSectionHid = parseInt(hid)+1;
          							var nextSectionName = document.getElementById('section'+nextSectionHid).value;
          							
//          							 if(secWiseTimer == "sectionTimer" && arr37[value] !=0 && arr9[value] !=nextSectionName){
//          								secSkip = false;
//          							 }
          							
          							if(arr37[value] !=0 && arr9[value] !=nextSectionName && callFromResume == false){
          								var sectionChaneMsg = "<div align='left'>You have just finished the current section.<br>You have still some time left for this section.<br> Once you move to the next section you will not be able to come back to this section.<br><br></div><div align='center'> Are you sure you want to move to the next section ?</div>";
          								secSkip = false;
          								swal({   title: "",   text: sectionChaneMsg,   type: "warning",html: true,  cancelButtonText: "No, Cancel", showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, Go Next",   closeOnConfirm: true ,   closeOnCancel: true}, function(isConfirmGoNext)
          		                                {
          				if (isConfirmGoNext){
          					
          					//valueOTH =	parseInt(valueOTH)+1;
          					switchQuestion = true;
          					secSkip = true;
          					var quesAlreadyDispay = document.getElementById('quesAlreadyDispay').value;
          	                var sectionSize="";
          	            	if(quesAlreadyDispay == ""){
          	            		var valueSec = 1;	
          	            	    sectionSize=document.getElementById('sec_testsize'+valueSec).value;
          	            	    document.getElementById('quesAlreadyDispay').value = sectionSize;
          	            	}else{
          	            		sectionSize=document.getElementById('sec_testsize'+value).value;
          	            		sectionSize=parseInt(sectionSize)+parseInt(document.getElementById('quesAlreadyDispay').value);
          	            		document.getElementById('quesAlreadyDispay').value = sectionSize;
          	            	}
          	            	value++;
          					isPaused = false;
          	            	StopTimerSec();
          	            	secInit(value);
          					stateChanged(value);
          					}else{
          					secSkip = false;
          					return false;
          						}
          		                                });
          							}
          						//Section Skip Timer End
          							if(secSkip){
          							if(pat=="ADP"){//alert("1245---"+pat);
          								valueADP =	parseInt(valueADP)+1;	
          								//alert("next question click or autoglide valueADP"+ valueADP+" pattern "+pat+" valueADP="+valueADP);
          							}
          							valueOTH =	parseInt(valueOTH)+1;
          							var comp_code=document.getElementById("comp_code").value;
          							//alert("comp_code===="+comp_code);
          							if(comp_code=="0143001")
          								{
          								var counting=0;
          								//alert("arr8[value] is==="+arr8[value]);
          							if(arr8[value]!="")
          								{
          								//alert("arr8[value]===="+arr8[value]);
          								var queA1=arr8[value].split(",");
          								//alert("length of queA1"+queA1.length);
          								var sub_que_length=queA1.length;
          							
          								//alert("not empty 1939"+"value is==="+value+"compre is==="+arr8[value]);
          								 skip_compre=arr8[value];
          								}
          							else{
          								//alert(" empty"+"value is==="+value+"compre is==="+arr8[value]);
          								 skip_compre="";
          							}
          								}
          							value++; //for normal
          							}	
          						}else if(vv=="autoglide" && !booleanforautoglide ){
          							
          						}else{ 
          							/*
          							 * Below Code is Start timer
          							 */
          							
          							if(quesWiseTimeCheck=="Slider" || quesWiseTimeCheck=="Circular"){	
          								startCountDown();
          							}
          							/*
          							 * End timer
          							 */
          							value=parseInt(vv); 
          							valueOTH =	value;
          						//	alert(vv+" else conditionhhhhh = "+value);
          							}}else{
             							 document.getElementById("next").style.display='none';
             			                document.getElementById("previous").style.display='none';
             			                document.getElementById("flag").style.display='none';
             							swal({title:jsonObj[49143],text:jsonObj[49052],confirmButtonText:jsonObj[16117],type:"success"});return false;
             						}	
                                  	timeTakenPerQues();	
                                  	 //  Start drag drop div hide
                 					if(qtype[value]=="6"){
                 						 document.getElementById("drag").style.display='block';
                 					}else{
                 						 document.getElementById("drag").style.display='none';
                 					}	
                 						
                 						
                 					//  End drag drop div hide
                 					var preButt = document.getElementById("preButt").value;
                 					var showSectionWarning = section_change_warning[value];
                 					if(value!=1&&value!=document.getElementById('size').value && showSectionWarning=="on"){
//                 						alert(showSectionWarning+"---"+callFromResume+"---"+display_secName[value]+"---"+display_secName[value-1]);
                 						if(display_secName[value] != display_secName[value-1]){
                 							if(callFromResume == false){
                 								var comp_code = document.getElementById("comp_code").value;
                 								if(comp_code === "0414000") {
                 									swal({title:jsonObj[49143],text:display_secName[value],type:"success"});
                 								}else {
                 									swal({title:jsonObj[49143],text:jsonObj[49053]+" "+display_secName[value-1]+" "+jsonObj[49054]+" "+display_secName[value]+" "+jsonObj[49055],type:"success"});
                 								}
	                 						}
	                 						}
                 					}
                 					
                 					
          						var comp_code = document.getElementById("comp_code").value;
          						var overAllPattern = document.getElementById('overAllPattern').value;
          						if(value!=1&&value!=document.getElementById('size').value && overAllPattern=="ADP_PCY1"){ //swal("---"+value+"--"+Lastsec_testsize+"--"+secsecque);
      	                        	if(comp_code=="0054000" && arr10[value]=="ADP"){
      	                        		if((secsecque-1)==Lastsec_testsize){    mainchekingforcheeet=true;
      	                        		var comp_code = document.getElementById("comp_code").value;
         								if(comp_code === "0414000") {
         									swal({title:jsonObj[49143],text:display_secName[value],type:"success"});
         								}else {
         									swal({title:jsonObj[49143],text:jsonObj[49053]+" "+LastSectionName+" "+jsonObj[49054]+" "+arr9[value]+" "+jsonObj[49055],type:"success"});
         								}
      	                        		//var conf1= confirm('Information:You have just finished '+LastSectionName+' section. You are moving to '+arr9[value]+' section.');
      	                                secsecque=1;        
      	                        	}	
      	                        	}
      if(comp_code=="0054000" && pat=="ADP"){
      		                        		if((secsecque-1)==Lastsec_testsize){    mainchekingforcheeet=true;
      		                        		var comp_code = document.getElementById("comp_code").value;
             								if(comp_code === "0414000") {
             									swal({title:jsonObj[49143],text:display_secName[value],type:"success"});
             								}else {
             									swal({title:jsonObj[49143],text:jsonObj[49053]+" "+LastSectionName+" "+jsonObj[49059],type:"success"});
             								}
      		                        		//var conf1= confirm('Information:You have just finished '+LastSectionName+' section. You are moving to '+arr9[value]+' section.');
      		                                secsecque=1;        
      		                        	}
      	                        	}
      
      if(comp_code!="0054000" && comp_code!="0050000"){
			if((secsecque-1)==Lastsec_testsize){    mainchekingforcheeet=true;
			//alert(arr10[value]+"---"+arr10[value+1]+"----"+value);
			if(arr10[value]=="NOR" && arr10[value-1]=="PSY"){
			    if(comp_code=="0117000"){
					
				}else{
					swal({title:jsonObj[49143],text:jsonObj[49056]+" "+arr9[value]+" "+jsonObj[49055],type:"success"});
				}
			}else if((arr10[value]=="PSY" && arr10[value-1]=="ADP") && comp_code=="0021000"){
				var comp_code = document.getElementById("comp_code").value;
				if(comp_code === "0414000") {
					swal({title:jsonObj[49143],text:display_secName[value],type:"success"});
				}else {
					swal({title:jsonObj[49143],text:jsonObj[49053]+" "+LastSectionName+" "+jsonObj[49059],type:"success"});
				}
			}else if((arr10[value]=="PSY" && arr10[value-1]=="ADP") && comp_code!="0021000"){
				var comp_code = document.getElementById("comp_code").value;
				if(comp_code === "0414000") {
					swal({title:jsonObj[49143],text:display_secName[value],type:"success"});
				}else {
					swal({title:jsonObj[49143],text:jsonObj[49053]+" "+LastSectionName+" "+jsonObj[49059],type:"success"});
				}
			}else if(arr10[value]=="PSY" && arr10[value-1]=="NOR"){
				var comp_code = document.getElementById("comp_code").value;
				if(comp_code === "0414000") {
					swal({title:jsonObj[49143],text:display_secName[value],type:"success"});
				}else {
					swal({title:jsonObj[49143],text:jsonObj[49053]+" "+LastSectionName+" "+jsonObj[49059],type:"success"});
				}
			}else if(arr10[value]=="PSY" && arr10[value+1]=="PSY"){
				
			}else{
				var pat1 =document.getElementById('test_pattern').value;
				if(pat=="NOR" && (comp_code=="0008000" || comp_code=="0117000")){
					
				}else{
					var comp_code = document.getElementById("comp_code").value;
					if(comp_code === "0414000") {
						swal({title:jsonObj[49143],text:display_secName[value],type:"success"});
					}else {
						swal({title:jsonObj[49143],text:jsonObj[49053]+" "+LastSectionName+" "+jsonObj[49054]+" "+arr9[value]+" "+jsonObj[49055],type:"success"});
					}
        		//var conf1= confirm('Information:You have just finished '+LastSectionName+' section. You are moving to '+arr9[value]+' section.');
				}}   secsecque=1;        
        	}  
                              	}}
          			var tempQuestionNO=0;	
          			 var pat =document.getElementById('test_pattern').value;
          		
          					if(overAllPattern=="ADP" && valueADP > parseInt(document.getElementById('actsize').value)){
                                 	 document.getElementById("next").style.display='none';
                                 	 return false;
                                  }else{	
          						 if(value<10 )
                                  	{	var aa="0"+value;
      		                            	if(pat=="ADP" && (vv=="next" || (vv=="autoglide" && booleanforautoglide))){
      		                            		if(valueADP<10){
      		                            			document.getElementById('qnoPrint').value= "0"+valueADP;
      		                            			tempQuestionNO ="0"+valueADP;
      		                            		}
      		                            		else{
      		                            			document.getElementById('qnoPrint').value= valueADP;
      		                            			tempQuestionNO =valueADP;
      		                            		}
      		                        			//alert("Question will be print if value is less than 10=== "+valueADP);
      		                            	}else if(pat=="NOR" || pat=="PSY"){
      		                        			document.getElementById('qnoPrint').value= aa;	
      		                        			tempQuestionNO =aa;
      		                        		
      		                        		}
                                  		
                                  	}else
                                  	{  
                                  		if(pat=="ADP" && (vv=="next" || (vv=="autoglide" && booleanforautoglide))){
                                  			if(valueADP<10){
                                  				document.getElementById('qnoPrint').value= "0"+valueADP;
                                  				tempQuestionNO ="0"+valueADP;
                                  			}
      		                            		else{
      		                            			document.getElementById('qnoPrint').value= valueADP;
      		                            			tempQuestionNO = valueADP;
      		                            		}
                                  			//alert("Question will be print if value is greater than 10==== "+valueADP);
                                  		}else if(pat=="NOR"  || pat=="PSY"){
                                  			if(isNaN(parseInt(valueOTH))) {
                                  				valueOTH = parseInt(value);
                                  			}
                                  			document.getElementById('qnoPrint').value=valueOTH;		
                                  			tempQuestionNO =valueOTH;
                                  			console.log(vv+"------valueOTH:- "+valueOTH+":----:"+value+"------"+comp_code);
                                  		}
                                    
                                  	}
          				}		
          						
                                      var option_random = [];
                                      var str11="",str22="",str3="",str4="",str5="",str6="",str7="";
                                      var imgp="";
                                      if(images[value]==""||images[value]==null||images[value]=='null' || document.getElementById('QF'+value).value==33){}
                                      else {	imgp="<img class='dg-picture-zoom' id='aa_q"+images1[value]+"' name='aa_q"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+images[value]+"' src='https://wheebox.com/static/Question_Images/"+images[value]+"' align='left' onclick='\zoom_IMG(aa_q"+images1[value]+")\'/>";}
                                      
                                      if(document.getElementById('exam_name').value=="In-Basket Test"){
                                    	  imgp="<img class='dg-picture-zoom' id='aa_q"+images1[value]+"' name='aa_q"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+images[value]+"' align='middle' onclick='\zoom_IMG(aa_q"+images1[value]+")\'/> ";
                                      }
                                      
                                    //option image start	
                                      var op1_imgp="",op2_imgp="",op3_imgp="",op4_imgp="",op5_imgp="",op6_imgp="",op7_imgp="";			
                                      if(wheeboxtesttype == "CBTBASEDTEST") {
                                    	  if(op1_images[value]==""||op1_images[value]==null||op1_images[value]=='null'){}			
                                          else        op1_imgp="<img id='"+images1[value]+"' name='"+images1[value]+"'  src='https://wheebox.com/static/Question_Images/"+op1_images[value]+"' />";			
                                         					
                                          if(op2_images[value]==""||op2_images[value]==null||op2_images[value]=='null'){}			
                                          else        op2_imgp="<img id='"+images1[value]+"' name='"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op2_images[value]+"'  />";			
                                         					
                                          if(op3_images[value]==""||op3_images[value]==null||op3_images[value]=='null'){}			
                                          else        op3_imgp="<img id='"+images1[value]+"' name='"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op3_images[value]+"' />";			
                                         			 
                                          if(op4_images[value]==""||op4_images[value]==null||op4_images[value]=='null'){}			
                                          else        op4_imgp="<img id='"+images1[value]+"' name='"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op4_images[value]+"' />";			
                                       					
                                          if(op5_images[value]==""||op5_images[value]==null||op5_images[value]=='null'){}			
                                          else        op5_imgp="<img id='"+images1[value]+"' name='"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op5_images[value]+"' />";			
                                         			
                                          if(op6_images[value]==""||op6_images[value]==null||op6_images[value]=='null'){}			
                                          else        op6_imgp="<img id='"+images1[value]+"' name='"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op6_images[value]+"' />";			
                                         			
                                          if(op7_images[value]==""||op7_images[value]==null||op7_images[value]=='null'){}			
                                          else        op7_imgp="<img id='"+images1[value]+"' name='"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op7_images[value]+"'  />";
                                          
                                      }else {
                                    	  if(op1_images[value]==""||op1_images[value]==null||op1_images[value]=='null'){}			
                                          else        op1_imgp="<img class='dg-picture-zoom' id='aa_ap"+images1[value]+"' name='aa_ap"+images1[value]+"'  src='https://wheebox.com/static/Question_Images/"+op1_images[value]+"' align='left' onclick='\zoom_IMG(aa_ap"+images1[value]+")\' />";			
                                         					
                                          if(op2_images[value]==""||op2_images[value]==null||op2_images[value]=='null'){}			
                                          else        op2_imgp="<img class='dg-picture-zoom' id='aa_bp"+images1[value]+"' name='aa_bp"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op2_images[value]+"' align='left' onclick='\zoom_IMG(aa_bp"+images1[value]+")\'  />";			
                                         					
                                          if(op3_images[value]==""||op3_images[value]==null||op3_images[value]=='null'){}			
                                          else        op3_imgp="<img class='dg-picture-zoom' id='aa_cp"+images1[value]+"' name='aa_cp"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op3_images[value]+"' align='left' onclick='\zoom_IMG(aa_cp"+images1[value]+")\' />";			
                                         			 
                                          if(op4_images[value]==""||op4_images[value]==null||op4_images[value]=='null'){}			
                                          else        op4_imgp="<img class='dg-picture-zoom' id='aa_dp"+images1[value]+"' name='aa_dp"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op4_images[value]+"' align='left' onclick='\zoom_IMG(aa_dp"+images1[value]+")\' />";			
                                       					
                                          if(op5_images[value]==""||op5_images[value]==null||op5_images[value]=='null'){}			
                                          else        op5_imgp="<img class='dg-picture-zoom' id='aa_ep"+images1[value]+"' name='aa_ep"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op5_images[value]+"' align='left' onclick='\zoom_IMG(aa_ep"+images1[value]+")\' />";			
                                         			
                                          if(op6_images[value]==""||op6_images[value]==null||op6_images[value]=='null'){}			
                                          else        op6_imgp="<img class='dg-picture-zoom' id='aa_fp"+images1[value]+"' name='aa_fp"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op6_images[value]+"' align='left' onclick='\zoom_IMG(aa_fp"+images1[value]+")\' />";			
                                         			
                                          if(op7_images[value]==""||op7_images[value]==null||op7_images[value]=='null'){}			
                                          else        op7_imgp="<img class='dg-picture-zoom' id='aa_gp"+images1[value]+"' name='aa_gp"+images1[value]+"' src='https://wheebox.com/static/Question_Images/"+op7_images[value]+"' align='left' onclick='\zoom_IMG(aa_gp"+images1[value]+")\'  />";
                                          
                                      }
                                       //option image end
                                      var flagvalue=document.getElementById("flag"+value).value;
                                      var flagButt=document.getElementById("flagButt").value;
                                      if(flagButt=="on" || flagButt=="ON"){
                                      if(flagvalue=="flag"){
                                          document.getElementById("butt"+value).style.background="#DC143C";
                                          document.getElementById("x").style.display="none";
                                          document.getElementById("v").style.display="block";
                                      }else{
                                          document.getElementById("x").style.display="block";
                                          document.getElementById("v").style.display="none";
                                      }
                                      }
                                      var opvalue = document.getElementById("user_ans"+value).value;
				      var vivaValue = document.getElementById("vivaMark"+value).value;//viva
				      var vivaRemark = document.getElementById("vivaRemark"+value).value;//viva
                                      var ni = document.getElementById('myDiv');
                                      var newdiv = document.createElement('div');
                                     var totalOption = 0;
                                     document.getElementById('test_pattern').value= arr10[value];
                                     
                                     var pat1 =document.getElementById('test_pattern').value;
             						if(overAllPattern=="ADP" && valueADP == parseInt(document.getElementById('actsize').value)){			
                                    document.getElementById("next").style.display='none';			
                                  }else{    
                                  if(value == parseInt(document.getElementById('totalPlayQues').value)){
             							document.getElementById("next").style.display='none';
             						}else{
             							document.getElementById("next").style.display='block';
             						}  }
             						if(pat1=="NOR"){
             							if(Nor_chk!=0 || pat1=="NOR"){
             								var comp_code = document.getElementById("comp_code").value;
             								
             								if((pat1=="PSY" || arr10[value-1]=="PSY") && (comp_code=="0008000" || comp_code=="0117000")){
             									document.getElementById("previous").style.display="none";		
             								}else{
             								document.getElementById("previous").style.display="block";
             								}
             							}
             							
             							if((Nor_chk==0 && pat1!="NOR") || value =="1")
             								document.getElementById("previous").style.display="none";
             							
             							Nor_chk++;
             							
             						}
             						else{
             							var preButt = document.getElementById("preButt").value;
             							var domainName = document.getElementById("domainName").value;
             							if(preButt=="on" || preButt=="ON"){
             								if(pat1=="PSY"){
//             									alert("compCode="+comp_code+" pat="+pat1+" arr10[value-1]="+arr10[value-1]);   
                 								if(comp_code=="0143000" || comp_code=="0143001"  || comp_code=="0180000" || comp_code=="0050000" || comp_code=="0204000" || comp_code=="0378000" || domainName=="Feedback"){
             										if(value =="1"){
             											document.getElementById("previous").style.display="none";	
             										}else{
             											document.getElementById("previous").style.display="block";
             										}
             									}else{
             										document.getElementById("previous").style.display="none";
             									}
             								}else{
             									document.getElementById("previous").style.display="block";
             								}
             							}else{
             								document.getElementById("previous").style.display="none";
             							}
             						}
                                     
                                     
                                     document.getElementById('level').value= arr11[value];
          					 if(arr1[value]=="" || arr2[value]=="")         totalOption=0;
                              else if(arr3[value]=="")    totalOption=2;
                              else if(arr4[value]=="")    totalOption=3;
                              else if(arr5[value]=="")    totalOption=4;
                              else if(arr6[value]=="")   	totalOption=5;
                              else if(opt7[value]=="")   	totalOption=6;
                              else                    	totalOption=7;
          					 
          					var comp_code = document.getElementById("comp_code").value;
          					 var domainName = document.getElementById("domainName").value;
                              if( qtype[value]=="3") {quesTYPE="<font class='questionNo_label'> "+jsonObj[49060]+"<br></font>";}
                              if( qtype[value]=="2") {quesTYPE="<font class='questionNo_label'>  "+jsonObj[49061]+" </font>";}
                              if( qtype[value]=="4") {
//                            	  alert(comp_code+"====="+domainName);
                            	  if(comp_code=="0001000" && domainName=="Feedback")
                            		  quesTYPE="<font class='questionNo_label'></font><br><br>";
                            	  else
                            		  quesTYPE="<font class='questionNo_label'>  "+jsonObj[49062]+"</font><br><br>";
                              }
                              if( qtype[value]=="4" && comp_code == '0204000') quesTYPE="<font class='questionNo_label'>  </font><br><br>";
                              if( qtype[value]=="5"){
                            	  
                            	  var questionidfromQUESID=document.getElementById("QUESNO"+value).value;                            	  
                            	  var compilersforp=document.getElementById("compilersforq"+questionidfromQUESID+".0").value;
            						if (compilersforp != 'Selenium') {
            							quesTYPE="<font class='questionNo_label'>   Please do not forget to select any one language from the right, under \u201CSelect Language\u201D drop down menu before you start coding. "+jsonObj[49160]+" Also ensure that while printing the output of your program, if required, you only print the exact output of the program, without any leading or preceding text or remark.</font><br>";
            						}
                              }
                              if( qtype[value]=="27") quesTYPE="<font class='questionNo_label'> This is a type of casual games where two versions of the same picture are shown side by side and you must find the differences between the two pictures.   </font><br>";
                              if( qtype[value]=="29") quesTYPE="<font class='questionNo_label'> The test is very simple. You will be shown a series of images. If you see an exact repeat image, click the image.   </font><br>";                           
                            //  if( qtype[value]=="1") quesTYPE="<font color=#800000> "+jsonObj[49079].replace("var2","1").replace("var1", totalOption)+"<br></font>";
                              if( qtype[value]=="1") quesTYPE="<font class='questionNo_label'> "+jsonObj[49079]+" "+totalOption+" "+ jsonObj[49080]+"<br></font>";
                              if(qtype[value]=="18"){ quesTYPE="<font color=#C47451>  "+jsonObj[49065]+"</font>";}
                              if(qtype[value]=="6"){ quesTYPE="<font class='questionNo_label'> "+jsonObj[49066]+"</font>";} 
                              if(qtype[value]=="25"){ quesTYPE="<font color=#800000> "+jsonObj[49166]+"<br></font>";} 
                              if(qtype[value]=="17"){
                            	  var comp_code = document.getElementById("comp_code").value;
                            	  if(comp_code=="0097001")
                            		  quesTYPE="<font color=#800000> Instruction: Please read the question carefully and record your answer facing the camera.<br>Please click on the 'Start Recording' button to start recording your answer. One you click on 'Start Recoding' button the system will ask to allow the use of camera of your system. Please click on 'Allow' else you will not be able to record your answer.<br/>It is suggested to record the answer of this question in approximately 5 mins.<br/></font>";
                            	  else
                            		  quesTYPE="<font color=#800000> Please read the question carefully and record your answer facing the camera. Please click on the 'Start Recording' button to start recording your answer. Once you click on 'Start Recording' button the system will ask to allow the use of camera of your system. Please click on 'Allow' else you will not be able to record your answer. It is suggested to divide your time equally between all the questions.<br/></font>";
                              }	
                              if( qtype[value]=="4" && (document.getElementById('exam_name').value=="In-Basket Test" || document.getElementById('exam_name').value=="Functional-1 Competent")){
                            	  var noque=0;var quecompre=0; //document.getElementById("drag").style.display='none';
                                	  
                                  for(var k=value;k<arr.length;k++){
                              		if(que_id[value]==que_id[k] && arr12[value]==arr12[k]){noque++;}
                              	}
                              	noque = noque-1; 
                              	for(var k=value;k>0;k--){  
                              		if(arr8[value]==arr8[k] && arr12[value]==arr12[k]){if(value!=k){quecompre++;}}
                              	}
                              	//alert(valueOTH+"----"+quecompre+"-----"+noque);
                              	var comp_code = document.getElementById("comp_code").value;
                              	var section_name = document.getElementById("section"+value).value;
                              	if(document.getElementById('exam_name').value=="Functional-1 Competent"){
                              		quesTYPE="<font color=#800000>"+jsonObj[49075]+" "+(valueOTH-quecompre)+" "+jsonObj[49076]+" "+(parseInt(valueOTH)+noque)+" "+jsonObj[49161]+" "+" <br>"+jsonObj[49162] +"</font><p align='justify'  id='demo' class='collapse'><font color=#4c949c style='font-weight:normal;'>"+arr8[value].replace(/^\s+|\s+$/g, '').replace(/32;/gi, ' ').replace(/&/gi,'').replace(/#(\S*)/g,"")+"</br></font></p>";	
                              	}else{
            					//quesTYPE="<font color=#800000"+jsonObj[49075]+" "+(valueOTH-quecompre)+" "+jsonObj[49076]+" "+(parseInt(valueOTH)+noque)+" "+jsonObj[49161]+" "+" <br>"+jsonObj[49162] +"</font><p align='justify'  id='demo' class='collapse'><font color=#4c949c style='font-weight:normal;'>"+arr8[value]+"</br>"+imgp+"</font></p>";
                              	}
            						quesTYPE=quesTYPE+"<div id='expand'>"+arr8[value].substring(0, 40)+"... <button type='button' class:'btn btn-info' data-toggle='collapse' data-target='#demo' onclick='expandText();'>"+jsonObj[49163] +"</button></div>";
            					quesTYPE=quesTYPE+"<div id='collapse' style='display:none'>"+arr8[value]+"<button type='button' class:'btn btn-info' data-toggle='collapse' data-target='#demo' onclick='collapseText();'>"+jsonObj[49164] +"</button></div>";
                            
                            

                              }
                              //Viva 22
                              if( qtype[value]=="22"){
                            	  var noque=0;var quecompre=0; //document.getElementById("drag").style.display='none';
                                	
                                  for(var k=value;k<arr.length;k++){
                              		if(que_id[value]==que_id[k] && arr12[value]==arr12[k]){noque++;}
                              	}
                              	noque = noque-1; 
                              	for(var k=value;k>0;k--){  
                              		if(arr8[value]==arr8[k] && arr12[value]==arr12[k]){if(value!=k){quecompre++;}}
                              	}
                              	//alert(valueOTH+"----"+quecompre+"-----"+noque);
                              	var comp_code = document.getElementById("comp_code").value;
                              	var section_name = document.getElementById("section"+value).value;
                              	if(document.getElementById('exam_name').value=="MCG Viva Test"){
                              		quesTYPE="<font color=#800000>"+jsonObj[49075]+" "+(valueOTH-quecompre)+" "+jsonObj[49076]+" "+(parseInt(valueOTH)+noque)+" belong to the following scenario. "+" <br>Scenario</font><p align='justify'><font color=#4c949c style='font-weight:normal;'>"+arr8[value].replace(/^\s+|\s+$/g, '').replace(/32;/gi, ' ').replace(/&/gi,'').replace(/#(\S*)/g,"")+"</br></font></p>";	
                              	}else{
            					quesTYPE="<font color=#800000"+jsonObj[49075]+" "+(valueOTH-quecompre)+" "+jsonObj[49076]+" "+(parseInt(valueOTH)+noque)+" belong to the following scenario. "+" <br>Scenario</font><p align='justify'  id='demo' class='collapse'><font color=#4c949c style='font-weight:normal;'>"+arr8[value]+"</br>"+imgp+"</font></p>";
                              	}
            					
                              	quesTYPE=quesTYPE+"<br><font color=#800000>Performance Criteria</font>&nbsp;&nbsp;&nbsp;Max Mark:"+arr15[value];

                              }
                              
                              if( qtype[value]=="11"){ 
                                	var noque=0; var quecompre =0;
                                  	var playCount=2;
                                  	var comp_code = document.getElementById("comp_code").value;
                                  	if(comp_code=="0030000"){playCount=document.getElementById('audioAllow'+value).value;}
                              	for(var k=value;k<arr.length;k++){
                              	    // change by saroj olyampiad adaptive qflag
                              	if(sectiondetail[document.getElementById("section"+value).value].pat=='ADP'){
                              if(que_id[value]==que_id[k] && arr12[value]==arr12[k]){noque++;}
                             	}else{
                              if(que_id[value]==que_id[k]){noque++;} 
                             	}
                              		
                              	} 
                              	if(sectiondetail[document.getElementById("section"+value).value].pat=='ADP'){
                              	for(var k=value;k>0;k--){  
                              		if(arr8[value]==arr8[k] && arr12[value]==arr12[k]){if(value!=k){quecompre++;}}
                              	}
                              	}
                              	//alert("Flag ==="+ arr8[value]);
                              	if(arr8[value]==""){
                              		quesTYPE="<div id='question"+value+"'></div>";}   
                              	else{ 
                              		var compre=arr8[value];  
                              		if(compre.match("^^^^")){  
                              			compre=compre.split("^^^^");
                              			if(value == (parseInt(value)+noque-1)){
                              				if(sectiondetail[document.getElementById("section"+value).value].pat=='ADP'){
                              						quesTYPE="<div id='question"+value+"'><font color=#800000>"+jsonObj[49157]+" "+(valueOTH-quecompre)+" - "+(parseInt(valueOTH)+noque-1)+", "+jsonObj[49067]+"</font><br><font color=#800000>"+jsonObj[49068]+" </font>"+compre[1]+"</br><br>";	
                                             	}else{
                                             		quesTYPE="<div id='question"+value+"'><font color=#800000>"+jsonObj[49157]+" "+value+", "+jsonObj[49067]+"</font><br><font color=#800000>"+jsonObj[49068]+" </font>"+compre[1]+"</br><br>";
                                             	}
                                             	}else{
                              			// change by saroj    
                              			if(sectiondetail[document.getElementById("section"+value).value].pat=='ADP'){
                              				quesTYPE="<div id='question"+value+"'><font color=#800000>"+jsonObj[49157]+" "+(valueOTH-quecompre)+" - "+(parseInt(valueOTH)+noque-1)+", "+jsonObj[49067]+"</font><br><font color=#800000>"+jsonObj[49068]+" </font>"+compre[1]+"</br><br>";	
                              			}else{
                              				quesTYPE="<div id='question"+value+"'><font color=#800000>"+jsonObj[49157]+" "+value+" - "+(parseInt(value)+noque-1)+", "+jsonObj[49067]+"</font><br><font color=#800000>"+jsonObj[49068]+" </font>"+compre[1]+"</br><br>";	
                              			}
                              			    
                              			    
                              			}
                              				
                              			
                              			
                              			
                              			var audioPlayed = document.getElementById('audioPlayed'+value).value;
                              			if(parseInt(audioPlayed)<playCount){
//                              				quesTYPE+="<iframe src='play/audiojs/audio.jsp?path="+compre[0]+"&playCount="+playCount+"&sno="+value+"' style='margin: 0;width:100%;' frameborder='0' scrolling='no'  name='iframe' id='iframe' height='80px;'></iframe> <br/>";
                              				//window.frames[0].document.getElementById('audio1').style.display="block";
                              				document.getElementById("audioDiv").style.display='block';
                              				try{
                              					//document.getElementById("iframe"+value).style.display="inline-block";
                              				}catch(e){
                              					alert(e);
                              				}
                              				var sectionName = arr9[value];
        	        						var compreID = que_id[value];
        	        						var compreKey = sectionName+compreID;
                              				var visibleDivId = "iframe"+compreKey;
                              				showAudioClips(visibleDivId,audioList);
    		
                              			}else
                              				quesTYPE+=jsonObj[49071];
                                 				quesTYPE+="</br><font color=#C47451>"+jsonObj[49069]+"</font>";
                              				 quesTYPE+="</div>"; 
                                	   }   
                              		else {
                              			quesTYPE="<div id='question"+value+"'></br><font color=#800000>"+jsonObj[49157]+" "+value+" - "+(value+noque-1)+", "+jsonObj[49067]+"</font>" ;
                              			var audioPlayed = document.getElementById('audioPlayed'+value).value;
                              			if(parseInt(audioPlayed)<playCount)
                              			quesTYPE+="<iframe src='play/audiojs/audio.jsp?path="+arr8[value]+"&playCount="+playCount+"&sno="+value+"' style='margin: 0;width:100%;' frameborder='0' scrolling='no'  name='iframe' id='iframe' height='50px;'></iframe> ";
                              			else
                              			quesTYPE+=jsonObj[49071];
                              			quesTYPE+="</br><font color=#C47451> "+jsonObj[49069]+"</font>";
                              			quesTYPE+="</div>";}
                              	           
                              	} 	            
                                                    
                                  }
                                
                              if( qtype[value]=="13"){
                            	 if(document.getElementById("comp_code").value=="0351000"){
                            		 quesTYPE="<div id='question"+value+"'><font color=#C47451>Read the instructions carefully and answer the following question.</font>"; quesTYPE+="</div>";
                                   	  
                            	 }else{
                            		 quesTYPE="<div id='question"+value+"'><font color=#C47451>"+jsonObj[49061]+"</font>"; quesTYPE+="</div>";
                                   		 
                            	 }
                              	 
                               }
                              if( qtype[value]=="14"){ 
                              	quesTYPE="<div id='question"+value+"'><font color=#C47451>"+jsonObj[49072]+"<br></font>";
                                //	quesTYPE+="<font color=#4c949>"+arr[value]+"<br>"+"</font>";
                                	var audioPlayed = document.getElementById('audioPlayed'+value).value;
                                //	alert("audioPlayed="+audioPlayed);
                                	if(parseInt(audioPlayed)<5){
                                	//quesTYPE+="<br><iframe src='play/audiojs/audio.jsp?path="+arr8[value]+"&playCount=5&sno="+value+"' style='margin: 0;width:100%' frameborder='0' scrolling='no'  name='iframe' id='iframe' height='50px;'></iframe></div>";  
                                		document.getElementById("audioDiv").style.display='block';
                                	}else
                        				quesTYPE+=jsonObj[49071];
                                	
                                	var sectionName = arr9[value];
	        						var compreID = que_id[value];
	        						var compreKey = sectionName+compreID;
                                	var visibleDivId = "iframe"+compreKey;
                                	showAudioClips(visibleDivId,audioList);
                          }
                              try {
								
                            	  document.getElementById("comparenmatch").style.display="none";
                            	  document.getElementById("secoundLayoutBox").style.display="block";
							} catch (e) {
								// TODO: handle exception
							}
                              
                              if( qtype[value]=="16"){
                              	var noque=0;  
                          		for(var k=value;k<arr.length;k++){ 
                          		if(que_id[value]==que_id[k]){noque++;}  
                          			}                	       
                          		if(arr8[value]==""){
                          		//quesTYPE="<div id='question"+value+"'></div>";
                          		}
                          		else{
                          		quesTYPE="<div id='question"+value+"'><font color=#800000>"+jsonObj[49068]+" </font><font color=#4c949c>"+arr8[value]+"</font>";
                          		quesTYPE+="<br/><font color=#C47451> "+jsonObj[49069]+"</font>";
                          		quesTYPE+="</div>";}
                          	 }
                              
                            //  alert(qtype[value]+" value="+value);
          //------------------------------------------------ Hitesh Work --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                     	if( qtype[value]=="7") quesTYPE="";// For Psychometric Single Choice
                                     	  if(( qtype[value]=="7" ||  qtype[value]=="21"  )&& (document.getElementById('exam_name').value=="Demo Set-I" || document.getElementById('exam_name').value=="Demo Set-II" || document.getElementById('pro_type').value=="Case Study")){
                                          	  var noque=0;var quecompre=0; //document.getElementById("drag").style.display='none';
                                          	  
                                                for(var k=value;k<arr.length;k++){
                                            		if(que_id[value]==que_id[k] && arr12[value]==arr12[k]){noque++;}
                                            	}
                                            	noque = noque-1; 
                                            	for(var k=value;k>0;k--){  
                                            		if(arr8[value]==arr8[k] && arr12[value]==arr12[k]){if(value!=k){quecompre++;}}
                                            	}
                                            	//alert(valueOTH+"----"+quecompre+"-----"+noque);
                                            	var comp_code = document.getElementById("comp_code").value;
                                            	var section_name = document.getElementById("section"+value).value;
                                           
                          					quesTYPE="<font color=#800000"+jsonObj[49075]+" "+(valueOTH-quecompre)+" "+jsonObj[49076]+" "+(parseInt(valueOTH)+noque)+" "+jsonObj[49161]+" "+" <br>"+jsonObj[49162] +"</font><p   id='demo' class='' style='overflow : auto;height: 300px !important; text-align :justify;'><font class='Mytd' style='font-weight:normal;'>"+arr8[value]+"</br>"+imgp+"</font></p>";
                                            	
                          				//		quesTYPE=quesTYPE+"<div id='expand'  >"+arr8[value].substring(0, 50)+"...<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button type='button' class:'btn btn-info' data-toggle='collapse' data-target='#demo' onclick='expandText();'>"+jsonObj[49163] +"</button></div>";
                          						//quesTYPE=quesTYPE+"<div id='expand1' style='display:none'>"+arr8[value]+"... <button type='button' class:'btn btn-info' data-toggle='collapse' data-target='#demo' onclick='expandText();'>"+jsonObj[49163] +"</button></div>";

                          				//		quesTYPE=quesTYPE+"<div id='collapse' style='display:none'><button type='button' class:'btn btn-info' data-toggle='collapse' data-target='#demo' onclick='collapseText();'>"+jsonObj[49164] +"</button></div>";
                                          
                                            }
                                     	
                                      if( qtype[value]=="8") quesTYPE=""; // For Psychometric Multi Choice
                                      if( qtype[value]=="") quesTYPE=""; // For Psychometric Multi Choice
                                      if( qtype[value]=="20") quesTYPE=""; // For Psychometric Multi Choice
                                      if( qtype[value]=="10"){var noque=0;var quecompre=0; //document.getElementById("drag").style.display='none';
                                  	
                                      for(var k=value;k<arr.length;k++){
                                  		if(que_id[value]==que_id[k] && arr12[value]==arr12[k]){noque++;}
                                  	}
                                  	noque = noque-1; 
                                  	for(var k=value;k>0;k--){  
                                  		if(arr8[value]==arr8[k] && arr12[value]==arr12[k]){if(value!=k){quecompre++;}}
                                  	}
                                  	//alert(valueOTH+"----"+quecompre+"-----"+noque);
                                  	var passageStartIndex = valueOTH-quecompre;
                                  	var passageEndIndex = parseInt(valueOTH)+noque;
                                  	var comp_code = document.getElementById("comp_code").value;
                                  	var section_name = document.getElementById("section"+value).value;
                                  	if(comp_code=="0017000" && section_name=='Logical Reasoning'){
                						// quesTYPE="<font color=#800000>"+jsonObj[49075]+" "+(valueOTH-quecompre)+" "+jsonObj[49076]+" "+(parseInt(valueOTH)+noque)+" " +jsonObj[49077]+" <br>"+jsonObj[49078]+" </font><p align='justify'><font color=#4c949c style='font-weight:normal;'>"+arr8[value]+"</font></p></br><font color=#800000>"+jsonObj[49079].replace("var2","1").replace("var1", totalOption)+"</font>"; 
                						quesTYPE="<font color=#800000>"+jsonObj[49075]+" "+(valueOTH-quecompre)+" "+jsonObj[49076]+" "+(parseInt(valueOTH)+noque)+" " +jsonObj[49077]+" <br>"+jsonObj[49078]+" </font><p align='justify'><font color=#4c949c style='font-weight:normal;'><span id='QueCompre"+value+"'>"+arr8[value]+"<span></font></p></br><font color=#800000>"+ jsonObj[49079]+" "+totalOption+" "+ jsonObj[49080]+"</font>";
                					}else{//alert(arr8[value]);   
                						if(passageStartIndex == passageEndIndex)
                                      		quesTYPE="<font color=#800000>"+jsonObj[49081]+" "+(valueOTH-quecompre)+" "+jsonObj[49083]+"<br>"+jsonObj[49084]+" </font><p align='justify'><font color=#4c949c style='font-weight:normal;'><span id='QueCompre"+value+"'>"+arr8[value]+"</span></font></p></br><font color=#800000>"+ jsonObj[49085]+" "+totalOption+" "+ jsonObj[49086]+"</font>";
                                      	 else
                						   quesTYPE="<font color=#800000>"+jsonObj[49081]+" "+(valueOTH-quecompre)+" "+jsonObj[49082]+" "+(parseInt(valueOTH)+noque)+" " +jsonObj[49083]+"<br>"+jsonObj[49084]+" </font><p align='justify'><font color=#4c949c style='font-weight:normal;'><span id='QueCompre"+value+"'>"+arr8[value]+"</span></font></p></br><font color=#800000>"+ jsonObj[49085]+" "+totalOption+" "+ jsonObj[49086]+"</font>";
                					}
                                  }  
                                      
                                    //Below code is for HP only to show mark value in resume test ,By Kamlesh Singh on 16 Dec 2017
                                      
                                    	  var showQuestionMark = document.getElementById('showQuestionMark').innerHTML;
                                          if(comp_code == '0011000')showQuestionMark="on";
                                          if(showQuestionMark == 'on' || showQuestionMark == 'ON'){
                                        	  try{
                                        		    var maxMark = arr15[value];
                                        		   if(maxMark % 1==0 && maxMark<10)
                                            		  document.getElementById('perQuestionMarks').innerHTML= "0"+maxMark; 
                                            		else 
                                            			document.getElementById('perQuestionMarks').innerHTML= maxMark; 
                                            		  }catch(e){
                                            			  
                                            		  }
                                          }
                                          if(comp_code == '0902000'){
                                        	  if(arr10[value]=="NOR" || arr10[value]=="PSY")
                                        		  document.getElementById('response_no_displayDiv').innerHTML= "Answer to Question Number "+value;
                                        	  else
                                        		  document.getElementById('response_no_displayDiv').innerHTML= "Response";
                                          }
                                      // Below code is for HP/Centum/ESSC, to show section name in resume test,By Kamlesh Singh on 16 Dec 2017
                                      if(comp_code == '0126000' || comp_code == '0212000' || comp_code == '0011000'){
                                    	  document.getElementById('dsectionlable1').innerHTML= arr9[value];
                                      }
                                      
                                      //ends here,HP/ESSC/Centum specific specific Code ,Kamlesh Singh
                                   // code added for question expend and collapse START HERE (02-12-2016)
                                      var questionExpend = document.getElementById("questionExpend").value;
                                      if(questionExpend == null){ questionExpend = "";} if(questionExpend =="null"){ questionExpend ="";}
                                      
                                      
                                      if(arr[value].length >2000 && questionExpend == "Active"){
                                    	//&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                    	  questionArr ="<div id='expand2'  >"+arr[value].substring(0, 200)+""+"...<br><button type='button' class:'btn btn-info' data-toggle='collapse' data-target='#demo1'  style='font-weight: bold;' onclick='expandQuestionText();'>Continue read..</button></div>";
                                    	  questionArr =questionArr+"<div id='collapse2' style='display:none'>"+arr[value]+"<br><button type='button' class:'btn btn-info' data-toggle='collapse' data-target='#demo1'style='font-weight: bold;' onclick='collapseQuestionText();'> < Back</button></div>";
                                   //   alert("questionArr----------"+questionArr);
                                      }
                                      else
                                    	  {
                                    	  questionArr = arr[value];
                                    	  }
                                        
                                      // code addedd for qusetion expend and collapse END HERE
                                      
          //------------------------------------------------ Deepak Banwala --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                                          var str="";
                                          var currentQNO ="";
                                           currentQNO = tempQuestionNO;
                                           oprtionWithtextarea=""; 
//                                           if(currentQNO=="0")currentQNO="01";
                                           
                                           var questionHeaderInstruction=quesTYPE;
                                           var currentQuestionNo=""+currentQNO+""; 
                                               
                                            
                                           if(qtype[value]=="11"||qtype[value]=="14"){
                                         	  if(document.getElementById('exam_name').value=="PSR Tracker"){
                                         		  str="<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'>"+arr[value];
                                         	  }else{
                                         		  str="<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'>"+arr[value]+""+"</td>"+"</tr>"+"<tr><td>";
                                         	  }
                                         }else if(qtype[value]=="13"){
                                         	  if(document.getElementById('exam_name').value=="PSR Tracker"){
                                         		 oprtionWithtextarea="<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'>"+arr[value];
                                         	  }else{   
                                         		 oprtionWithtextarea="<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'>"+arr[value]+""+"</td>"+"</tr>"+"<tr><td>";
                                         	  }}else if(qtype[value]=="20"){
                                         		 str = "<table border='0' width='100%'>"+"<tr>"+"<td style='font-weight: bold;color: #4c949c' colspan='3' width='100%'>"+quesTYPE+ "<br></td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr>";
                   	                   	}else if(qtype[value]=="4" && (document.getElementById('exam_name').value=="In-Basket Test" || document.getElementById('exam_name').value=="Functional-1 Competent")){
                   	                   	 str = "<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'><div align='left' style='width:100%;text-align:justify;' >"+arr[value]+"</div>"+"</td>"+"</tr>";
  str=str.replace(new RegExp('&#32;', 'g'), ' ');  
                   	                   	}else if(qtype[value]=="21"){
                       	                   	str = "<table border='0' width='100%'>"+"<tr>"+"<td style='' colspan='3' width='100%'>"+arr[value]+""+"</td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr>";
                         	                  str=str.replace(new RegExp('&#32;', 'g'), ' ');  
                         	             }else if(qtype[value]=="22"){  
                                              str = "<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'>"+arr[value]+""+"</td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr>";     
                    	                   	}
                                           else {  
                                         	// alert("comp_code ===="+comp_code);
                                          	 // alert("skip_compre is==="+skip_compre+"==option_present=="+option_present);
                                          	  if(comp_code!="0143001")
                                          	 {
                                          		if (compilersforp == 'Selenium') {
                                          			//Added Selenium Custom Instruction Below Question.
                                          			str = "<table border='0' width='100%'>"+"<tr>"+"<td style='' colspan='3' width='100%'><span class='Mytd' id='qidjs"+value+"'>"+arr[value]+""+"<span></td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr><tr><td colspan='3' align='left'><font class='questionNo_label'><p><b>INSTRUCTIONS:</b></p><p>1. This is a selenium programming question. Please write your program in the given text area.</p><p>2. You must submit your program by clicking on the '<b>Execute Script</b>' button. You can click on 'Execute Script' button multiple times, if required to change code.</p><p>3. You must use the '<b>addAssertion' method ONLY</b> for each assertion mentioned in the question.</p><p>4. You can use your preferred editor (e.g Eclipse) to test your program. But while copying code from Eclipse to the platform text area, please ensure instructions below are strictly followed</p><p>&nbsp;a. Mandatory to change class name to 'MainClass'</p><p>&nbsp;b. Mandatory to remove package name if exists</p><p>&nbsp;c. Mandatory to retain the main method</p><p>&nbsp;d. Mandatory to remove/comment close bracket of 'MainClass'</p><p>&nbsp;e. Mandatory to replace other type of Assertions with <b>'addAssertion' method</b> which is customized for the test</p><p>&nbsp;f. Hardcoded values are not allowed in the program</p></font><br></td></tr>";
                                          		}else{
                                          			str = "<table border='0' width='100%'>"+"<tr>"+"<td style='' colspan='3' width='100%'><span class='Mytd' id='qidjs"+value+"'>"+arr[value]+""+"<span></td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr>";
                                          		}
                                          	 }
                                          	  else if(comp_code=="0143001" && skip_compre=="" && option_present=="false")
                                           	 {
                                          		
                                             str = "<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'>"+arr[value]+""+"</td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr>";     
                                           	 }
                                          	  else if(comp_code=="0143001" && skip_compre=="" && option_present=="true")
                                            	 {
                                          		
                                              str = "<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'>"+arr[value]+""+"</td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr>";     
                                            	 }
                                          	  else{
                                          		  if(comp_code=="0143001" && skip_compre!="" && option_present=="true")
                                          			  {
                                          			
                                            str = "<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c' colspan='3' width='100%'>"+arr[value]+""+"</td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr>";     
                                          			  }
                                          		  else{
                                          			
                                          			  value=value+sub_que_length;
                                          			  valueOTH=valueOTH+sub_que_length;
                                          		
                                                        str = "<table border='0' width='100%'>"+"<tr>"+"<td style='color: #4c949c;' colspan='3' width='100%'>"+arr[value]+""+"</td>"+"</tr>"+"<tr><td colspan='3'  align='left'>"+imgp+"</td></tr>";
                                                    
                                          		  }
                                            }}
                                           
                                           //alert(str);
                                            
                                          var  opt=0;
                                          if(arr1[value]==null||arr1[value]==""||arr2[value]==null||arr2[value]=="")         opt=0;
                                          else if(arr3[value]==null||arr3[value]=="")    opt=2;
                                          else if(arr4[value]==null||arr4[value]=="")    opt=3;
                                          else if(arr5[value]==null||arr5[value]=="")    opt=4;
                                          else if(arr6[value]==null||arr6[value]=="")    opt=5;
                                          else if(opt7[value]==null||opt7[value]=="")    opt=6;
                                          else                    	opt=7;
                                          
                                          if( (qtype[value]=="13")&&(arr1[value]=="" || arr2[value]=="")){opt=0;}
                                          if( (qtype[value]=="13")&&(arr1[value]!="" || arr2[value]!="")){opt=1;}
                                          if( (qtype[value]=="13")&&arr1[value]!="" && arr2[value]!=""&&arr3[value]==""){opt=2;}
                                          if( (qtype[value]=="13")&&(arr1[value]!="" && arr2[value]!="")&&arr3[value]!=""&&arr4[value]==""){opt=3;}
                                          if( (qtype[value]=="13")&&(arr1[value]!="" && arr2[value]!="")&&arr3[value]!=""&&arr4[value]!=""&&arr5[value]==""){opt=4;}
                                          if( (qtype[value]=="13")&&(arr1[value]!="" && arr2[value]!="")&&arr3[value]!=""&&arr4[value]!=""&&arr5[value]!=""&&arr6[value]==""){opt=5;}
                                          storingQflag=qtype[value];
                                          document.getElementById('totalOptionInQuestion').value=opt;

                                         
                                          if(opt==0)
                                          {
                                          	//Subjective change
                                        	 
                                          	if(qtype[value]=="4") 
                          					{   
                                          		document.getElementById("subDiv").style.display='block';
                                          		var currentQuestion = value;
                                          		var subjectiveAns = document.getElementById('user_ans_if_text'+value).innerHTML;
//                                          		alert(sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt);
//                                          		alert(sectiondetail[document.getElementById("section"+currentQuestion).value].attemped);
//                                          		alert("A"+subjectiveAns+"A");
                                          		var allowUserToBrowseFile = document.getElementById("allowUserToBrowseFile").value;
                                          		if(subjectiveAns == ""){
	                                          		if(sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt <= sectiondetail[document.getElementById("section"+currentQuestion).value].attemped){
//	                                          		  showMessage(jsonObj[49044]);
//	                                          		  document.getElementById('maxAttemptMsg').innerHTML="You are allowed to attempt "+sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt+" question in this section and you have already attempted allowed number of question in this section. Please clear response any one question to attempt this one.";
	                                          		document.getElementById('maxAttemptMsg').innerHTML="You are allowed to attempt only "+sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt+" questions in this section and you have already attempted the allowed number of questions. <br> <br> If you want to attempt any other question, then you will have to clear the response of one of the questions you have already attempted. For clearing the response just go to that particular question and use the button ‘Clear Response’ (on top of the textarea). This will allow you to attempt another question of your choice. ";
	                                          		
//	                                          		tinymce.get('option').hide();
		                                          		document.getElementById("subjectiveDiv").style.display='none';
		                                          		if(allowUserToBrowseFile == "1"){
			                                          		try{
			                                          			if(document.getElementById("uploadUserFile").style.display="block"){
			                                          				document.getElementById("uploadUserFile").style.display='none';
			                                          			}
			                                          		}catch(e){}
		                                          		}
		                                          	}else{
	                                          			document.getElementById("subjectiveDiv").style.display='block';
	                                          			document.getElementById('maxAttemptMsg').innerHTML="";
	                                          			if(allowUserToBrowseFile == "1"){
		                                          			try{
			                                          			if(document.getElementById("uploadUserFile").style.display="none"){
			                                          				document.getElementById("uploadUserFile").style.display='block';
			                                          			}
			                                          		}catch(e){}
	                                          			}
	                                          		}
                                          		}else{
                                          			document.getElementById("subjectiveDiv").style.display='block';
                                          			document.getElementById('maxAttemptMsg').innerHTML="";
                                          			if(allowUserToBrowseFile == "1"){
	                                          			try{
		                                          			if(document.getElementById("uploadUserFile").style.display="none"){
		                                          				document.getElementById("uploadUserFile").style.display='block';
		                                          			}
		                                          		}catch(e){}
                                          			}
                                          		}
                                          		var compCode = document.getElementById("comp_code").value;
                                          		if(compCode == '0902000'){
                                          			var uploadedImageCount = getUploadedImageCount(value);
                                          		}
                                          		try {
                  				                    document.getElementById("documentTypeFileRespMsg").innerHTML = ("");
                  								}catch(e) {}
                                          		if(document.getElementById("user_filePath"+(parseInt(value))).value == "") {
                                          			document.getElementById("documentTypeFile").value="";
//                            						$("#documentTypeFileDownload").removeAttr("href");
//                            				       document.getElementById("documentTypeFileDownload").style.display = "none";
//                            				       document.getElementById("documentTypeFileRemove").style.display = "none";
                            					}else if(document.getElementById("user_filePath"+(parseInt(value))).value.startsWith("https://wheebox.com")) {
                            						document.getElementById("documentTypeFile").value="";
//                            						$("#documentTypeFileDownload").attr("href", document.getElementById("user_filePath"+(parseInt(value))).value);
//                            						document.getElementById("documentTypeFileDownload").style.display = "block";
//                            						document.getElementById("documentTypeFileRemove").style.display = "block";
                            					}
                                          		
                                          		couterforsub++;
	                                      		
//	                                      		nicEditors.findEditor('option').setContent(subjectiveAns);
//	                                      		subjectiveAns = subjectiveAns.replace("&#34;",/"/g);
//	                                      		tinymce.get('option').setContent(subjectiveAns);
//	                                      		alert(subjectiveAns);
	                                      		tinymce.get('option').getBody().innerHTML=decodeURIComponent(subjectiveAns);
	                                      		var subjectiveTextLimit = document.getElementById("subjectiveTextLimit").value;
	                                      		var countTemp = CountCharacters();
	                                      		if(parseInt(subjectiveTextLimit) - countTemp <= 0) {  
	                                                if(countTemp>=parseInt(subjectiveTextLimit)){
	                                    	        	   parent.showjalertmsg("Allowed number of characters exhausted.\n\n You may have to reframe your sentences to accommodate your answer within the given limit of characters only.");
	                                    	        	  
	                                                	   document.getElementById("character_count").innerHTML = "<font color='red'>"+ (parseInt(subjectiveTextLimit)-countTemp) + "</font>";
	                                                	   
	                                                }}else {
	                                                	document.getElementById("character_count").innerHTML = parseInt(subjectiveTextLimit)-countTemp; 
	                                                }
	                                      		if(callFromResume == false){
	                                      			subjectiveInt=setInterval(function(){callSubjectiveCheeting();},1000);
	                                      		}
                          					}else if(qtype[value]=="5")
                          					{
                          						var questionidfromQUESID=document.getElementById("QUESNO"+value).value;
                          						var compilersforp=document.getElementById("compilersforq"+questionidfromQUESID+".0").value;
                          						if (compilersforp != 'Selenium') {	
                          					document.getElementById("selectcompiler").style.display = 'none';
                          					document.getElementById("outputofprogram").style.display='none';
                               		    	document.getElementById('testcaseinfo').style.display="none";
                               		    	document.getElementById('Compileee').style.display = 'none';
                               				document.getElementById('runmyCode').style.display = 'none';
                               				document.getElementById('componentsforinputs').style.display = 'none';
                               				document.getElementById('componentsforlimit').style.display = 'none';
                               				document.getElementById('stdinput').style.display = 'none';
                               				document.getElementById("myCheck").checked = false;
                          						if(callFromResume == true){
                	        						  if(document.getElementById("form").style.display="none"){
                	        						  document.getElementById("form").style.display="block";
                	        						}
                        						}
                          						showinfoforprogrammingeach=true;
                          						document.getElementById("progDiv").style.display='block';
                          						document.getElementById("wbprogrammingTable").style.display='block';          						
                          						var programmingAns = document.getElementById(value).value;
                          						require("kitchen-sink/demo");
                          						document.getElementById('stdinput').value = "";
                          						document.getElementById('output').value = "";
                          						document.getElementById("output").style.display='none';
                          						try {
                          						
    													//JAVA,C,CPP,CPP11,CSHARP,PYTHON
                              							//Compiler Name: Java
    													if (compilersforp == 'JAVA' || compilersforp == 'JAVA,' ) {
    														justpasscompilername("Java",value);
    													}else if(compilersforp == 'C' || compilersforp == 'C,'){
    														justpasscompilername("C",value);  
    													}else if(compilersforp == 'C++' || compilersforp == 'C++,' || compilersforp == 'CPP' || compilersforp == 'CPP,'){
    														justpasscompilername("C++",value);
    													}else if(compilersforp == 'CSHARP' || compilersforp == 'CSHARP,'){
    														justpasscompilername("C#",value);
    													}else if(compilersforp == 'PYTHON' || compilersforp == 'PYTHON,'){
    														justpasscompilername("Python",value);
    													}else if(compilersforp == 'RUBY' || compilersforp == 'RUBY,'){
    														justpasscompilername("Ruby",value);
    													}else if(compilersforp == 'PHP' || compilersforp == 'PHP,'){
    														justpasscompilername("PHP",value);
    													}else if(compilersforp == 'JavaScript' ||compilersforp == 'JavaScript,'){
    														justpasscompilername("JavaScript",value);
    													}else if (compilersforp == 'Scala' || compilersforp == 'Scala,' ) {
    														justpasscompilername("Scala",value);
    													}else if (compilersforp == 'Typescript' || compilersforp == 'Typescript,' ) {
    														justpasscompilername("Typescript",value);
    													}else{
    														document.getElementById("selectcompiler").style.display = 'block';
    														var compilersforpsplit=compilersforp.split(",");
    														var selectcompiler = document.getElementById("selectcompiler");
    														selectcompiler.options.length = 0;
    														selectcompiler.options[selectcompiler.options.length] = new Option("Select Language", "select", false, false);
    														for(var i = 0; i < compilersforpsplit.length; i++) {
    															
    															var compilerrealname=compilersforpsplit[i];
    															if(compilerrealname.trim()!=""){
    																compilerrealname=compilerrealname.trim();
    																 if (compilerrealname == 'JAVA') {
    																	 compilerrealname="Java";
    																	}else if(compilerrealname == 'CSHARP'){
    																		compilerrealname= "C#";
    																	}else if(compilerrealname == 'PYTHON'){
    																		compilerrealname="Python";
    																	}else if(compilerrealname == 'RUBY'){
    																		compilerrealname="Ruby";
    																	}else if(compilerrealname == 'JavaScript (spidermonkey)'){
    																		compilerrealname= "JavaScript";
    																	}else if(compilerrealname == 'CPP' || compilerrealname == 'CPP,'){
    																		compilerrealname= "C++";
    																	}else if (compilerrealname == 'Scala' || compilerrealname == 'Scala,' ) {
    																		compilerrealname = "Scala";
    			    													}else if (compilerrealname == 'Typescript' || compilerrealname == 'Typescript,' ) {
    			    														compilerrealname = "Typescript";
    			    													}				
    																selectcompiler.options[selectcompiler.options.length] = new Option(compilerrealname, compilerrealname, false, false);
    															}
    														}
    														
    														document.getElementById('doc').style.display = 'none';	
    														document.getElementById('textcname').style.display = 'none';
    														if(value in storecompilername){ 
    														//alert(storecompilername[value] +"value : "+value);
    															if(storecompilername[value].trim()!=""){
    																
    																justpasscompilername2(storecompilername[value]);
    																
    															}else{
    																
    															}
    														//alert("selectcompiler.value : "+selectcompiler.value);
    														//alert("selectcompiler.value : "+selectcompiler.value);
    														
    														}else{
    															document.getElementById('editor-container').style.display = 'none';
    														}    													}
												} catch (e) {
													// TODO: handle exception
												}
												
												if(document.getElementById("comp_code").value == "0418000-D") {
													var programmingValue = value;
													var currentCompilerSelected = document.getElementById('doc').value;
													if(vv == "next") {
														programmingValue = parseInt(programmingValue) - 1;
													}else if(vv == "previous") {
														programmingValue = parseInt(programmingValue) + 1;
													}
													if(currentCompilerSelected == undefined || currentCompilerSelected == null || currentCompilerSelected.trim() == "" || currentCompilerSelected.trim() == "select") {
														document.getElementById("editor-container").style.display = "none";
													}else {
														try {
															var code = editor.getSession().getValue();
															console.log(vv+"===="+currentCompilerSelected+"===="+programmingValue+"===="+code+"====");
															if(code == undefined || code == null || code.trim() == "" || code.trim() == "Page not found") {
																
															}else{
																document.getElementById("user_ans"+programmingValue).value = code;
																document.getElementById(programmingValue).value = code ;
															}
														}
														catch(e) {
															console.log(e);
														}
													}
												}
												
                          						if(programmingAns != ""){
                          							restoreeditoroption(programmingAns);
                          							if(document.getElementById("comp_code").value != "0418000-D") {
                          								document.getElementById('editor-container').style.display = 'block';
                          							}
                          						}else{
                          							if(value in storecompilername)
                          							seteditorssnipit(storecompilername[value]);
                          							
                          						}
                          					    var compilationlimit= document.getElementById('compilationlimit'+value).value;
                          					    var compilationlimitint=parseInt(compilationlimit);
                          					try{
                          						if(compilationlimitint<1){
                              						
                          							document.getElementById('limitover').style.display="block";
                          			    			document.getElementById('compilerfor').style.display="none";
                          			    			document.getElementById('upperpanelcomponents').style.display="none"; 
                          			    			document.getElementById('limitunder').style.display="none"; 
                          						}
                          						else
                          						{
                          							document.getElementById('limitover').style.display="none";
                          			    			document.getElementById('compilerfor').style.display="block";;	
                          			    			document.getElementById('upperpanelcomponents').style.display="block"; 
                          			    			document.getElementById('limitunder').style.display="block"; 
                          			    			if(compilationlimitint!=8)
                          			    			document.getElementById('limitunder').innerHTML=compilationlimitint+' compilation  remaining';
                          			    			else
                          			    	        document.getElementById('limitunder').innerHTML='8 compilation attempts allowed.';	
                          						}	
                          					}catch(e){
                          						console.log(e);
                          					}
                          					if(value in storecompilersubmission){
                  								
                  								document.getElementById('limitunder').innerHTML='<span style="color:blue">Code submitted successfully.</span>';
                  								
                  							}
                          					if(callFromResume == true){
          	        						  if(document.getElementById("form").style.display="block"){
          	        							  document.getElementById("form").style.display="none";
                                   		 	}
                  						}
                          						}else{
                                          		document.getElementById("selenium").style.display='block';
                                          		document.getElementById("outputofprogramm").style.display='none';
                                     		    document.getElementById('testcaseinfosel').style.display="none";
                                     		    document.getElementById("fulloutputoutput").style.display = "none";
                                     		    document.getElementById("output").style.display = "none";
                                     		    
                                     		   try{
												  
											if(isappletloaded){	    
									if(document.getElementById('user_ans'+document.getElementById('hid').value).value!=document.deviceApplet.area.getText()){
										if(document.deviceApplet.area.getText()!=document.deviceApplet.snipitstring){
											//alert("here1");
											configureprogrammingquestion(document.deviceApplet.area.getText(),document.getElementById('hid').value);	
											
										}
														}
											}  
												   
                                    		    	if((document.getElementById('user_ans'+value).value!="") && isappletloaded){
                                    		    		//alert("here2");
														document.deviceApplet.area.setText(document.getElementById('user_ans'+value).value);
                                    		    	}else if(isappletloaded){
                                    		    		if(document.deviceApplet.area.getText()!=document.deviceApplet.snipitstring){
                                    		    			//alert("here3");
                                    		    			configureprogrammingquestion(document.deviceApplet.area.getText(),document.getElementById('hid').value);
                                    		    		}
                                    		    		
                                    		    		document.deviceApplet.area.setText(document.deviceApplet.snipitstring);
                                    		    	}
                                    		    }catch(e){
                                    		    	 console.log(e);
                                    		    }
                                     		    
                          						}
                                     		      
                          						}else if(qtype[value]=="27"){
                          							/*Spot Difference*/
                          		
                          							/*document.getElementById("user_ans"+value).value=0;*/
                                                  	 /*document.getElementById('answer'+value).value= arr7[value];*/
                          							
                          							
                          							var ctx = document.getElementById("canvas").getContext("2d");
                          							ctx.clearRect(0, 0, 488, 327);
                          							

                          							 totalClick = 0;
                          							 rightClick = 0;
                          							 wrongClick = 0;
                          							 userResponse = [];

                          							 actualCordInXandY = [];


                          							 
                          							 coordinate = []; 


                          							 isFirstClick = true;
                          							 
                          							$("p#showMessageForSpot").html("");

                          							
                          							
                          							
                          							document.getElementById("comparenmatch").style.display="block"
                          							var urlPath = 	arr1[value].split(",");
                          							
                          							var img1Url = urlPath[0];
                          							var img2Url = urlPath[1];
                          							
                          							var spotImgTag = document.getElementById("spotImg");
                          							var spotCanvasTag = document.getElementById("canvas");
                          							
                          							 $("#spotImg").attr('src',img1Url);
                          							 
                          							 $("#canvas").css("background-image", "url('"+ img2Url +"')");
                          							
                          							
                          							
                          						
                          							
                          						                          							
                          	
                          							
                          						}else if(qtype[value]=="33"){
                          						
                          							/*catch me*/
                          		          						var user_ans=document.getElementById('user_ans'+value).value;
                          						if(user_ans==""){
                          							//maximizeme();
                          							configureimageforquestion(value);	
                          							intervaltoclear=setInterval(function(){ rotateimage(); }, 1000);
                          							document.getElementById('qstatus_au').innerHTML="";
                          							
                          						}else{
                          							//alert("user_ans :"+user_ans+"value : "+value); 
                          						document.getElementById('qstatus_au').innerHTML="Attempted !!";
                          						document.getElementById("qstatus_au").style.display="block";
                          						}
                          							
                          						}else if(qtype[value]=="29"){
                          							
                          							var userAnsFor29 = 	document.getElementById('user_ans'+value).value;
                       				   	         if(userAnsFor29 !=  0 ){
                       				   	        	document.getElementById("showBeforeSlideforImageRemeber").style.display = 'none';
                       				   	        	$("p#showMessageImgRem").html("You have completed this question. Please proceed further.");
                       				   	        }
                          							
                          							var urlPath = 	arr1[value].split(",");
                          							
                          							for(var i=0; i<urlPath.length; i++){
                          								urlPath[i] = urlPath[i].replace(/^\s+|\s+$/gm,'');
                          								
                          							}
                          							
                          							
                          							imageArray = urlPath;
                          							
                          							
                          							
                          							getReadyimageRemember();
                          							
                          							 $(".mySlides").click(function(e){
                          			   	        	   
                          			   	        	   var ind = $(this).attr('ind');
                          			   	        	   //console.log("Name in Event Handler: " + ind);

                          			   	        	   clicked(e,ind);
                          			   	        	  
                          			   	        	});
                          							 
                          							 
                          							 
                          							 
                          							
                          							/*document.getElementById("user_ans"+value).value = "0";*/
                          							 /*document.getElementById("imageRepeateInput").value = 	arr1[value];*/
                          							/*Image repeate*/
                          							//$("p#showMessageImgRem1").html("Please Wait!");
                          							
                          							document.getElementById("imageRemeber").style.display="block"
                          							//document.getElementById("secheader").style.display="none";
                          							//document.getElementById("question_no_display").style.display="none";
                          							
                          							/*var myIndex = 0;
                          							
                          						    var timeoutId = 	setInterval(function(){ 
                          						     $("p#showMessageImgRem1").html("");
                          							 var x_Qflag29 = document.getElementsByClassName("mySlides");
                          							 
                          							  for (var i = 0; i < x_Qflag29.length; i++) {
                          								x_Qflag29[i].style.display = "none";  
                          							  }
                          							  myIndex++;
                          							   if (myIndex <= x_Qflag29.length) { 
                          								 x_Qflag29[myIndex-1].style.display = "block"; 
                          							   }
                          							  if(myIndex<=x_Qflag29.length){
                          							  }else{
                          							  	console.log("Image Finished!");
                          							  	   clearInterval(timeoutId);
                          							  		$("p#showMessageImgRem").html("Image Finished! Now You Can End Test. ");
                          							  	
                          							  }
                          								
                          							}, 3000);*/
                          							
                          						
                          						    
                          						    
                          							
                          						}else if(qtype[value]=="28"){
                          							
                          							
                          							document.getElementById("secoundLayoutBox").style.display="none";
                          							
                          							
                          							document.getElementById("question_no_display").style.display="none";
                          							document.getElementById("secheader").style.display="none";
                          							//document.getElementById("footerDIV").style.display="none";
                          							//document.getElementById("response_no_display").style.display="none";
                          							//document.getElementById("testWindow").style.display="none";
                          							document.getElementById("question_text_display").style.maxHeight="550px";
                          							
                          						}
                          						else if(qtype[value]=="25"){	
                                  					try{
                                  						document.getElementById("sqlDiv").style.display='block';   
                                  						var questionidfromQUESID=document.getElementById("QUESNO"+value).value;
                                  						var sqlAns = document.getElementById("user_ans"+(value)).value;
                                  						if(sqlAns != "")
                                  							document.getElementById('SqlOptionT').value = sqlAns;
                                  					}catch(e){
                                  						alert(e);
                                  					}
                                  						}                      
                          					else if(qtype[value]=="17")
                    						{ 	  
                          						try{
                    						//	alert("here");
                    							allowcheeting=false;
                    							var email=document.getElementById('email').value;
                    							var questionidfromQUESID=document.getElementById("QUESNO"+value).value;
                    							var perQuestionTimer=document.getElementById('timeperQue').value;
                    							if(perQuestionTimer==0){perQuestionTimer="";}if(perQuestionTimer=="0"){perQuestionTimer="";}
                    							 
                    						//	alert(questionidfromQUESID);
                    							urlmyframeviva='startProctoringviva.obj?id='+email+'&value='+questionidfromQUESID+"&perQuestionTimer="+perQuestionTimer;
                    							var questionattemtstatus=document.getElementById('vivarecordedreminder'+questionidfromQUESID).value; 
                    							var showstartrecording="";//alert(questionattemtstatus); 
                    							if(questionattemtstatus!='Attempted')
                    							{   
                    								//document.getElementById('startrecording').style.display='block';
                    								if(perQuestionTimer!=""){ 
                    								 $("#countdown").countdown360({
                    							       	 radius      : 16,
                    							         seconds     : document.getElementById('timeperQue').value,
                    							         fontColor   : '#FFFFFF',
                    							         autostart   : false,
                    							         onComplete  : function () { //console.log('done')
                    							        	  document.getElementById('myframeviva').src='';
                    									 //document.getElementById('startrecording').style.display='none';
                    										document.getElementById('questionattemtstatus').style.display='block';	
                    										document.getElementById('stoprecording').style.display='none';	
                    							         }
                    									   }).stop()
                    								}  
                    								showstartrecording="<a class='StartRecording' href='#' id='startrecording' style='float:center;' onclick='startrecording()''>Start Recording</a>";
                    								showstartrecording=showstartrecording+" <a class='StopRecording' href='#' id='stoprecording' style='float:center;' onclick='stoprecording()''>Stop Recording</a>";
                    								 
                    								showstartrecording=showstartrecording+" <font id='vivapleaswait' style='cursor: pointer; display: none;'>&nbsp;&nbsp;Please Wait...&nbsp;&nbsp;</font>";
                    								   
                    								
                    								document.getElementById('questionattemtstatus').style.display='none';
                    								
                    								//document.getElementById('stoprecording').style.display='none';
                    								
                    							//	document.getElementById("vivapleaswait").style.display='none';
                    							}					 		
                    							else{
                    								document.getElementById('questionattemtstatus').style.display='block';
                    							  
                    								if(perQuestionTimer!=""){	 
                    								 $("#countdown").countdown360({  
                    							       	 radius      : 16,
                    							         seconds     : document.getElementById('timeperQue').value,
                    							         fontColor   : '#FFFFFF',
                    							         autostart   : false,
                    							         onComplete  : function () {
                    							        	 
                    							        	 //console.log('done')
                    							         }
                    									   }).stop()
                    								}  
                    								//document.getElementById('startrecording').style.display='none';								
                    								//document.getElementById('stoprecording').style.display='none';
                    							}
                    								
                    							 
                    							 str=str+"<tr><td width='100%' align='center'><div id='camera' class='ui-widget-content' style='bottom: -5px;'><span class='camTop' ></span><div id='screen'><label class='textarea'>" +
                    								"<iframe src='' id='myframeviva' name='myframeviva' style='border:0' height='270px' width='420px;' frameborder='0' scrolling='no'></iframe></label></div>"+showstartrecording+"</div> </td></tr>"; 
                    						 	           
                    							/*if(opvalue==""){ str=str+"<tr><td width='100%' align='center'><label class='textarea'>" +
                    								"<iframe src='' id='myframeviva' name='myframeviva' style='border:0' height='270px' width='700px; float: right;'></iframe></label> </td></tr><tr><td align='center'>"+showstartrecording+"</td></tr>";}
                    							else{ str=str+"<tr><td width='100%' align='center'><label class='textarea'> "+showstartrecording+"<iframe src='' id='myframeviva' name='myframeviva' style='border:0' height='500px' width='700px;'></iframe></label>  </td></tr>";}
                    							*/  
                    							
                    							
                          						}catch(e){alert(e); }

                    						}                      
                    						     
                                  	 else if(qtype[value]=="15"){ oprtionWithtextarea=oprtionWithtextarea+"<tr><td ><label class='textarea'><textarea spellcheck='false' rows='8' cols='40'  name='option"+value+"' id='"+value+"' onblur='buttColor(this.id)'></textarea></label> </td></tr>";}
           	                        else if(qtype[value]=="14"){ oprtionWithtextarea=oprtionWithtextarea+"<tr><td ><label class='textarea'><textarea spellcheck='false' rows='8' cols='40' name='option"+value+"' id='textarea"+value+"' onblur='buttColor(this.id)'></textarea></label> </td></tr>";}
                                  	 
                                          else if(qtype[value]=="18"){
                                        	  
                                        	  //console.log("user_ans in state change : "+document.getElementById("user_ans"+value).value);
                                        	  var prev_response=document.getElementById("user_ans"+value).value;
                                        	  if(prev_response!=""){ 
                                        		  var prev_response_split=prev_response.split(":;:;:"); 
                                       		   //console.log("here : "+value);
                                        		  
                                        		  
                                        		  
                                        		  document.getElementById("x").style.display="none";
                                        		  document.getElementById("v").style.display="none";
                                        		  var typing_clock_check =document.getElementById("typing_clock_check"+(value)).value;
                                        		  //alert((value)+"typing_clock_check="+typing_clock_check);
                                        		  if(typing_clock_check=='on'){
                                        			  swal({title:jsonObj[49143],text:jsonObj[49088],confirmButtonText:jsonObj[16117],type:"success"});
                                        			  return false;
                                        		  }
                                        		  var usertpresponse = Base64.decode(prev_response_split[3].trim());
                                        		  while(usertpresponse.indexOf("<b>") > -1){
                                        			  usertpresponse = usertpresponse.replace("<b>", "");                                 	   
                                        			    }
                                        		  
                                        		  while(usertpresponse.indexOf("</b>") > -1){
                                        			  usertpresponse = usertpresponse.replace("</b>", "");                                 	   
                                        			    }
                                        		  allowcheeting=false;
                                        		  var typingStr="<span id='buttons' style='display:none;'><input type='button'    class='btnStartClock  btn1-primaryStartClock' id='startButton"+value+"' onclick='startTyping("+value+"); event.cancelBubble = true;' value='Start Clock'>&nbsp;<input type='button' class='btnStopClock  btn1-primaryStopClock' id='stopButton"+value+"' style='display:none;' onclick='stopTyping("+value+"); event.cancelBubble = true;' value='Stop Clock'></span><p id='instructions"+value+"'></p><p id='correctionsIntroduced"+value+"'></p><p id='correctedCopy"+value+"'></p><p id='speedWpm"+value+"'></p>";
                                        		  str=str+"<tr><td ><font color=#404040><b><p align='justify' id='typingQuestionText"+value+"' >"+arr1[value]+"</p> </b></font>";
                                        		  str = str+"<input type='hidden' id='typingQuestionTextValue"+value+"' name='typingQuestionTextValue"+value+"' value='"+escape(arr1[value])+"' >";
                                        		  oprtionWithtextarea=typingStr+"<br/><label class='textarea'><textarea spellcheck='false' ondrop='return false' ondragstart='return false' onpaste='return false;' style='width: 550px; height: 150px; display : none;' name='option"+value+"' id='userTypedAnswer"+value+"'  onblur='buttColor(this.id)' disabled></textarea>" +
                                        		  		//"<span style='border: 2px solid black; word-wrap:break-word;'>"+usertpresponse+"</span></label> </td></tr>";
                                        		  "<textarea spellcheck='false' ondrop='return false' ondragstart='return false' onpaste='return false;' style='width: 550px; height: 150px;' disabled>"+usertpresponse+"</textarea></label> </td></tr>";
                                        		  document.getElementById("butt"+value).style.background="#7fd895";  
                                                   document.getElementById("butt"+value).style.color="white";  
                                        		  
                                        	  }else{
                                        		  allowcheeting=false;
                                        		  document.getElementById("x").style.display="none";
                                        		  document.getElementById("v").style.display="none";
                                        		  var typing_clock_check =document.getElementById("typing_clock_check"+(value)).value;
                                        		  //alert((value)+"typing_clock_check="+typing_clock_check);
                                        		  if(typing_clock_check=='on'){
                                        			  swal({title:jsonObj[49143],text:jsonObj[49088],confirmButtonText:jsonObj[16117],type:"success"});
                                        			  return false;
                                        		  }
                                        		  var typingStr="<span id='buttons'><input type='button'    class='btnStartClock  btn1-primaryStartClock' id='startButton"+value+"' onclick='startTyping("+value+"); event.cancelBubble = true;' value='Start Clock'>&nbsp;<input type='button' class='btnStopClock  btn1-primaryStopClock' id='stopButton"+value+"' style='display:none;' onclick='stopTyping("+value+"); event.cancelBubble = true;' value='Stop Clock'></span><p id='instructions"+value+"'></p><p id='correctionsIntroduced"+value+"'></p><p id='correctedCopy"+value+"'></p><p id='speedWpm"+value+"'></p>";
                                        		  str=str+"<tr><td ><font color=#404040><b><p align='justify' id='typingQuestionText"+value+"' >"+arr1[value]+"</p></b></font>";
                                        		  str = str+"<input type='hidden' id='typingQuestionTextValue"+value+"' name='typingQuestionTextValue"+value+"' value='"+escape(arr1[value])+"' >";
                                        		  //oprtionWithtextarea=typingStr+"<br/><label class='textarea'><textarea spellcheck='false' ondrop='return false' ondragstart='return false' onpaste='return false;' style='width: 550px; height: 150px;' name='option"+value+"' id='userTypedAnswer"+value+"' value=''  onblur='buttColor(this.id)' disabled></textarea></label> </td></tr>";
                                        		  //below line added by @Abhishek that will count the length of type text
                                        		  oprtionWithtextarea=typingStr+"<br/><label class='textarea'><textarea spellcheck='false' ondrop='return false' ondragstart='return false' onpaste='return false;' style='width: 550px; height: 150px;' name='option"+value+"' id='userTypedAnswer"+value+"' value=''  onblur='buttColor(this.id);' onkeyup =\"countCharcterOfText('userTypedAnswer"+value+"','typingQuestionTextValue"+value+"',event)\" disabled></textarea></label> </td></tr>";
                                        	  }
                                        	  
                  	                        	
                  	                        }
                                          	else 
                                          	{	if(opvalue=="") str=str+"<tr><td colspan='3' style='display:none' ><input type='text' name='option' >    <--"+jsonObj[49089]+"</td></tr>";
                                          		else str=str+"<tr><td colspan='3' style='display:none' ><input type='text' name='option' value="+opvalue+"> <-- "+jsonObj[49089]+"</td></tr>";
                                          	}
                                          } 
                                          
                                          
                                          
          //------------------------------------------------ Hitesh Work --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                        
                                          else if(qtype[value]=="6"){
                                          	document.getElementById('drag').style.display='block';
                         					
                                          	newdiv.innerHTML="";
                         					var queA=arr1[value].replace(/^\s+|\s+$/g, '').split("&#165;");var str1="",str2="";
                         					var queB=arr2[value].replace(/^\s+|\s+$/g, '').split("&#165;");var qtxt_ans="";
                         					
                         					for(var i=1;i<=queA.length;i++){
                         						str1=str1+"<li class='' value='"+queA[i-1]+"' id='d"+i+"' name='opt' style='color: white'>"+queA[i-1]+"</li>";
                         						
                         						if(i==queB.length)
                  								qtxt_ans=qtxt_ans+queB[i-1];
                  							else
                  								qtxt_ans=qtxt_ans+queB[i-1]+"&#165;";
                         					}str=str+"<br><table width='88%'><tr><td align='center'><font color=#800000><h3>Block-A</h3></font></td><td align='center'><font color=#800000><h3>Block-B</h3></font></td></tr></table>";
                         					document.getElementById("nonswappable").innerHTML = str1;
                         					if((qtxt_ans!=document.getElementById("drgretans"+value).value.replace(/^\s+|\s+$/g, '')&&document.getElementById("drgretans"+value).value.replace(/^\s+|\s+$/g, '')!="")||document.getElementById("flag"+value).value=="flag"){
                         			         var queee=document.getElementById("drgretans"+value).value.replace(/^\s+|\s+$/g, '').split("&#165;");
                         				
                         			         for(var i=1;i<=queee.length;i++){
                         								str2=str2+"<li class='ui-state-default' value='"+queee[i-1]+"' id='d"+i+"' name='opt' style='color: white'>"+queee[i-1]+"</li>";
                         							}
                         					}else{	
                         						//str2=str2+"<div class='demo'><ul id='swappable'>";
                         					for(var i=1;i<=queB.length;i++){
                         						str2=str2+"<li class='ui-state-default' value='"+queB[i-1]+"' id='d"+i+"' name='opt' style='color: white'>"+queB[i-1]+"</li>";
                         					}
                         					//str2 = str2+"</ul></div>";
                         					}
                         					
                         					document.getElementById("swappable").innerHTML = str2;
                         					//document.getElementById("drag_qtext").innerHTML = str;
                         				}
                                          else if(qtype[value]=="8"){
                                              
                                        	  oprtionWithtextarea = oprtionWithtextarea +"<tr><td style='color: red' colspan='3'>"+jsonObj[49090]+"</td></tr><tr><td width='80%'></td><td width='10%'><b>"+jsonObj[49091]+"</b></td><td width='10%'><b>"+jsonObj[49092]+"</b></td></tr><tr><td width='80%'></td><td width='10%'><b>"+jsonObj[49093]+"</b></td><td width='10%'><b>"+jsonObj[49093]+"</b></td></tr>";
                                             
                                              var ML = opvalue.split("XX");
                                              for (var b=0; b<opt;b++)
                                                {
                                                   if(b==0)
                                                    {
                                                       if(ML[0]=="a") {str11=str11+""+(arr1[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' checked value='a' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='a' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                                       else if(ML[1]=="a") {str11=str11+""+(arr1[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='a' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' checked value='a' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                                       else {str11=str11+""+(arr1[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='a' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='a' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                                    }
                                                   if(b==1)
                                                    {
                                                       if(ML[0]=="b") {str22=str22+""+(arr2[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' checked value='b' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='b' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                                       else if(ML[1]=="b") {str22=str22+""+(arr2[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='b' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' checked value='b' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                                       else {str22=str22+""+(arr2[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='b' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='b' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                                    }
                                                   if(b==2)
                                                    {
                                                       if(ML[0]=="c") {str3=str3+""+(arr3[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' checked value='c' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='c' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                                       else if(ML[1]=="c") {str3=str3+""+(arr3[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='c' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' checked value='c' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                                       else {str3=str3+""+(arr3[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='c' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='c' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                                    }
                                                   if(b==3)
                                                    {
                                                       if(ML[0]=="d") {str4=str4+""+(arr4[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' checked value='d' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%' ><label class='radio state-error'><input type='radio' name='option1' value='d' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                                       else if(ML[1]=="d") {str4=str4+""+(arr4[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='d' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%' ><label class='radio state-error'><input type='radio' name='option1' checked value='d' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                                       else {str4=str4+""+(arr4[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='d' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%' ><label class='radio state-error'><input type='radio' name='option1' value='d' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                                    }
                                                   if(b==4)
                                                    {
                                                       if(ML[0]=="e") {str5=str5+""+(arr5[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' checked value='e' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='e' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                                       else if(ML[1]=="e") {str5=str5+""+(arr5[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='e' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%' ><label class='radio state-error'><input type='radio' name='option1' checked value='e' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                                       else {str5=str5+""+(arr5[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' value='e' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%' ><label class='radio state-error'><input type='radio' name='option1' value='e' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                                    }
                                                   if(b==5)
                                                    {
                                                       if(ML[0]=="f") {str6=str6+""+(arr6[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%' align='center'>"+"<label class='radio state-error'><input type='radio' name='option' checked value='f' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%' align='center'><label class='radio state-error'><input type='radio' name='option1' value='f' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                                       else if(ML[1]=="f") {str6=str6+""+(arr6[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%' align='center'>"+"<label class='radio state-error'><input type='radio' name='option' value='f' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%' align='center'><label class='radio state-error'><input type='radio' name='option1' checked value='f' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                                       else {str6=str6+""+(arr6[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%' align='center'>"+"<label class='radio state-error'><input type='radio' name='option' value='f' onclick=\"checkMatrixRow(this)\">"+"<i></i>&nbsp;</label></td><td width='10%' align='center'><label class='radio state-error'><input type='radio' name='option1' value='f' onclick=\"checkMatrixRow(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                                     }
                                                }
                                       }//--------------------------- Hitesh Work --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------                        
                                        
                                           
                                          else if(qtype[value]=="20"){
                                               
                                              str = str +"<tr><td style='color: red' colspan='3'>There are two statements below, please choose one option from Most Likely or Least Likely of any statement. Based on your response the other option will be auto selected by the system.</td></tr>";
                                              oprtionWithtextarea=oprtionWithtextarea+"<tr><td width='80%'></td><td width='10%'><b>Most</b></td><td width='10%'><b>Least</b></td></tr><tr><td width='80%'></td><td width='10%' ><b>Likely</b></td><td width='10%'><b>Likely</b></td></tr>";
                                              
                                              var ML = opvalue.split("XX");
                                              var rw=arr[value]; 
                                              for (var b=0; b<opt;b++)
                                                {
                                                  if(b==0)
                                                    {
                                                       if(ML[0]=="a") {str11=str11+""+(arr1[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' id='a' name='option' checked value='a-"+rw[0]+"' onclick=\"checkMatrixRowNEW(this)\" ><i></i>&nbsp;</label>"+"</td><td width='10%'><label class='radio state-error'><input type='radio' name='option' id='b' value='b-"+rw[1]+"' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                                       else if(ML[1]=="a") {str11=str11+""+(arr1[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' id='a' name='option' value='a-"+rw[0]+"' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label>"+"</td><td width='10%'><label class='radio state-error'><input type='radio' name='option' checked id='b' value='b-"+rw[1]+"' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                                       else {str11=str11+""+(arr1[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option' id='a' value='a-"+rw[0]+"' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label>"+"</td><td width='10%'><label class='radio state-error'><input type='radio' name='option' value='b-"+rw[1]+"' id='b' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                                    }
                                                   if(b==1) 
                                                    { 
                                                       if(ML[0]=="b") {str22=str22+""+(arr2[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' id='c' name='option1' checked value='c-"+rw[1]+"' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label>"+"</td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='d-"+rw[0]+"' id='d' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                                       else if(ML[1]=="b") {str22=str22+""+(arr2[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' id='c' name='option1' value='c-"+rw[1]+"' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label>"+"</td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' checked value='d-"+rw[0]+"' id='d' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                                       else {str22=str22+""+(arr2[value])+"&nbsp;&nbsp;&nbsp;</td><td width='10%'>"+"<label class='radio state-error'><input type='radio' name='option1' id='c' value='c-"+rw[1]+"' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label>"+"</td><td width='10%'><label class='radio state-error'><input type='radio' name='option1' value='d-"+rw[0]+"' id='d' onclick=\"checkMatrixRowNew(this)\"><i></i>&nbsp;</label></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                                    }       
                                                     //alert(str11+"-------"+str22);  
                                                       
                                                } 
                                       }
                                          
                                         
                                          else if(qtype[value]=="3")
                                          {  	for (var b=0; b<opt;b++)
                                              {	if(b==0)
                                              {	if(opvalue.indexOf("a") != -1){str11=str11+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();' name='option' checked='yes'  value='a'><i></i><span id='optjs1"+value+"'>"+(arr1[value])+""+"</span></label></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                              else {str11=str11+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();' name='option' value='a'><i></i><span id='optjs1"+value+"'>"+(arr1[value])+""+"</span></label></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==1)
                                          {   if(opvalue.indexOf("b") != -1){str22=str22+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();' name='option' checked='yes'  value='b'><i></i><span id='optjs2"+value+"'>"+(arr2[value])+""+"</span></label></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                              else {str22=str22+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' value='b'><i></i><span id='optjs2"+value+"'>"+(arr2[value])+""+"</span></label></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==2)
                                          {	if(opvalue.indexOf("c") != -1){str3=str3+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' checked='yes'  value='c'><i></i><span id='optjs3"+value+"'>"+(arr3[value])+""+"</span></label></td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                             	else {str3=str3+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' value='c'><i></i><span id='optjs3"+value+"'>"+(arr3[value])+""+"<span></label></td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==3)
                                          {	if(opvalue.indexOf("d") != -1){str4=str4+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' checked='yes'  value='d'><i></i><span id='optjs4"+value+"'>"+(arr4[value])+""+"</span></label></td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                              else {str4=str4+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' value='d'><i></i><span id='optjs4"+value+"'>"+(arr4[value])+""+"</span></label></td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==4)
                                          {	if(opvalue.indexOf("e") != -1){str5=str5+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' checked='yes'  value='e'><i></i><span id='optjs5"+value+"'>"+(arr5[value])+""+"</span></label></td></tr>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                              else {str5=str5+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' value='e'><i></i><span id='optjs5"+value+"'>"+(arr5[value])+""+"</span></label></td></tr>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==5)
                                          {	if(opvalue.indexOf("f") != -1){str6=str6+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' checked='yes'  value='f'><i></i><span id='optjs6"+value+"'>"+(arr6[value])+""+"</span></label></td></tr>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                              else {str6=str6+"<tr><td width='100%'><label class='checkbox state-error'><input type='checkbox' onclick='checkmaxallowdattempt();'  name='option' value='f'><i></i><span id='optjs1"+value+"'>"+(arr6[value])+""+"</span></label></td></tr>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                          }
                                      } 
                                                                           
                                          }
                                        else if(qtype[value]=="13") 
                                        { //document.getElementById("drag").style.display='none';
                                        	
                                        	if(comp_code =='0215000' || comp_code =='0262000'){ 
		                                        for (var b=0; b<opt;b++)   
		                                        {		if(b==0 && arr1[value]!='') {str11=str11+"<input type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"a' name='option"+value+"' onblur='buttColor(this.id);' onkeyup='checknumerical(this.id);validateMyLength(this, 60);' ondrop='return false;' minlength='0' maxlength='60' /><font style='color: #4c949c'> "+" "+(arr1[value])+"</font> "+" ";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
		                                                if(b==1 && arr2[value]!='') {str22=str22+"  <input  type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"b' name='option"+value+"' onclick='buttColor(this.id);' onkeyup='checknumerical(this.id);validateMyLength(this, 60);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr2[value])+"</font> "+" ";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
		                                                if(b==2 && arr3[value]!='') {str3=str3+" <input  type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"c' name='option"+value+"' onclick='buttColor(this.id);' onkeyup='checknumerical(this.id);validateMyLength(this, 60);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr3[value])+"</font> "+" ";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
		                                                if(b==3 && arr4[value]!='') {str4=str4+" <input type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"d' name='option"+value+"' onclick='buttColor(this.id);' onkeyup='checknumerical(this.id);validateMyLength(this, 60);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr4[value])+"</font> "+" ";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
		                                                if(b==4 && arr5[value]!='') {str5=str5+" <input type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"e' name='option"+value+"' onclick='buttColor(this.id);' onkeyup='checknumerical(this.id);validateMyLength(this, 60);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr5[value])+"</font> "+" ";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
		                                                if(b==5 && arr6[value]!='') {str6=str6+" <input type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"f' name='option"+value+"'  onclick='buttColor(this.id);' onkeyup='checknumerical(this.id);validateMyLength(this, 60);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr6[value])+"</font> "+" ";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
		                                         }
                                        	}else {
                                                for (var b=0; b<opt;b++)   
                                                {		if(b==0 && arr1[value]!='') {str11=str11+"<input type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"a' name='option"+value+"' onkeyup='checkNumericInput(this.id);validateMyLength(this, 60);' onblur='buttColor(this.id);' ondrop='return false;' minlength='0' maxlength='60' /><font style='color: #4c949c'> "+" "+(arr1[value])+"</font> "+" ";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                                        if(b==1 && arr2[value]!='') {str22=str22+"  <input  type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"b' name='option"+value+"' onkeyup='checkNumericInput(this.id);validateMyLength(this, 60);' onblur='buttColor(this.id);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr2[value])+"</font> "+" ";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                                        if(b==2 && arr3[value]!='') {str3=str3+" <input  type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"c' name='option"+value+"' onkeyup='checkNumericInput(this.id);validateMyLength(this, 60);' onblur='buttColor(this.id);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr3[value])+"</font> "+" ";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                                        if(b==3 && arr4[value]!='') {str4=str4+" <input type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"d' name='option"+value+"' onkeyup='checkNumericInput(this.id);validateMyLength(this, 60);' onblur='buttColor(this.id);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr4[value])+"</font> "+" ";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                                        if(b==4 && arr5[value]!='') {str5=str5+" <input type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"e' name='option"+value+"' onkeyup='checkNumericInput(this.id);validateMyLength(this, 60);' onblur='buttColor(this.id);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr5[value])+"</font> "+" ";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                                        if(b==5 && arr6[value]!='') {str6=str6+" <input type='text' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='"+value+"f' name='option"+value+"' onkeyup='checkNumericInput(this.id);validateMyLength(this, 60);' onblur='buttColor(this.id);' ondrop='return false;' minlength='0' maxlength='60' > <font style='color: #4c949c'>"+" "+(arr6[value])+"</font> "+" ";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                                 }
                                            }
                                        }
                                        else if(qtype[value]=="21") 
                                        {
                                        	var totalOptionsHTML = "";
                                        	for (var b=1; b<=opt;b++) {
                                        		totalOptionsHTML += "<option value='"+b+"'>"+b+"</option>";
                                        	}
                                        for (var b=0; b<opt;b++)   
                                        {
                                       	 if(b==0 && arr1[value]!='') {str11=str11+"<tr><td> <font style=''> "+(arr1[value])+"</font> <select id='select"+value+"1' name='select"+value+"1' onchange='checkSelectedRank(this.id,"+value+")'><option value=''>Select Response Order</option>"+totalOptionsHTML+"</select> </tr></td> ";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                         if(b==1 && arr2[value]!='') {str22=str22+"<tr><td> <font style=''> "+(arr2[value])+"</font> <select id='select"+value+"2' name='select"+value+"2' onchange='checkSelectedRank(this.id,"+value+")'><option value=''>Select Response Order</option>"+totalOptionsHTML+"</select> </tr></td> ";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                         if(b==2 && arr3[value]!='') {str3=str3+"<tr><td>   <font style=''> "+(arr3[value])+"</font> <select id='select"+value+"3' name='select"+value+"3' onchange='checkSelectedRank(this.id,"+value+")'><option value=''>Select Response Order</option>"+totalOptionsHTML+"</select>  </tr></td> ";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                         if(b==3 && arr4[value]!='') {str4=str4+"<tr><td>   <font style=''> "+(arr4[value])+"</font> <select id='select"+value+"4' name='select"+value+"4' onchange='checkSelectedRank(this.id,"+value+")'><option value=''>Select Response Order</option>"+totalOptionsHTML+"</select>  </tr></td> ";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                         if(b==4 && arr5[value]!='') {str5=str5+"<tr><td>   <font style=''> "+(arr5[value])+"</font> <select id='select"+value+"5' name='select"+value+"5' onchange='checkSelectedRank(this.id,"+value+")'><option value=''>Select Response Order</option>"+totalOptionsHTML+"</select>  </tr></td> ";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                         if(b==5 && arr6[value]!='') {str6=str6+"<tr><td>   <font style=''> "+(arr6[value])+"</font> <select id='select"+value+"6' name='select"+value+"6' onchange='checkSelectedRank(this.id,"+value+")'><option value=''>Select Response Order</option>"+totalOptionsHTML+"</select>  </tr></td> ";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                        }}else if(qtype[value]=="17") 
                                        { //document.getElementById("drag").style.display='none'; 
                                        	//alert(vivaValue);
                                        	if(vivaValue!="0"){str11=str11+"<tr><td width='100%'><input type='hidden' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='viva' name='viva' value='"+vivaValue+"' onblur='buttColor(this.id)' /></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                        	else {str11=str11+"<tr><td width='100%'><input type='hidden' style='border:0px;border-bottom-width:1px;border-bottom-style:dashed;width:300px;padding-left:10px;' id='viva' name='viva' onblur='buttColor(this.id)' /></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                        }else if(qtype[value]=="22") 
                                        { //document.getElementById("drag").style.display='none'; 
                                        	if(vivaValue!="0"){
                                        		//str11=str11+"<tr><td width='100%'><input type='text' style='width:300px;height:60px;padding-left:10px;' id='vivaRemark' name='vivaRemark' value='"+vivaRemark+"' onblur='buttColor(this.id)' /></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));
                                        		str11=str11+"<tr><td width='100%'><br><font style='color: #4c949c'>Remarks</font><br><textarea style='resize: none;'rows='4' cols='37' id='vivaRemark' name='vivaRemark'>"+vivaRemark+"</textarea></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));
                                        		str3=str3+"<tr><td></td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));
                                        		str4=str4+"<tr><td style='color: #4c949c' colspan='3' width='100%'><br>Assigned Marks</td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));
                                        		str22=str22+"<tr><td width='100%'><input type='text' style='width:300px;padding-left:10px;' id='viva' name='viva' value='"+vivaValue+"' onblur='buttColor(this.id)' /></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));
                                        	}
                                        	else {
                                        		//str11=str11+"<tr><td width='100%'><input type='text' style='width:300px;height:60px;padding-left:10px;' id='vivaRemark' name='vivaRemark' value='"+vivaRemark+"' onblur='buttColor(this.id)' /></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));
                                        		str11=str11+"<tr><td width='100%'><br><font style='color: #4c949c'>Remarks</font><br><textarea style='resize: none;'rows='4' cols='37' id='vivaRemark' name='vivaRemark'>"+vivaRemark+"</textarea></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));
                                        		str3=str3+"<tr><td></td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));
                                        		str4=str4+"<tr><td style='color: #4c949c' colspan='3' width='100%'><br>Assigned Marks</td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));
                                        		str22=str22+"<tr><td width='100%'><input type='text' style='width:300px;padding-left:10px;' id='viva' name='viva' onblur='buttColor(this.id)' /></td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));
                                        	}
                                        }      
                                        else{ //swal("HI 5="+opvalue+" opt="+opt );
                                          	for (var b=0; b<opt;b++)
                                              {	
                                          		if(wheeboxtesttype == "CBTBASEDTEST") {
                                          		var offsetlength = 0, cbtcolwidth = 0;
                                          		if(totalOption == 2) {
                                          			offsetlength = 3;
                                          			cbtcolwidth = 3;
                                          		}else if(totalOption == 3) {
                                          			offsetlength = 1;
                                          			cbtcolwidth = 3;
                                          		}else if(totalOption == 4) {
                                          			offsetlength = 0;
                                          			cbtcolwidth = 3;
                                          		}else if(totalOption == 5) {
                                          			offsetlength = 1;
                                          			cbtcolwidth = 2;
                                          		}else if(totalOption == 6) {
                                          			offsetlength = 0;
                                          			cbtcolwidth = 2;
                                          		}else {
                                          			offsetlength = 2;
                                          			cbtcolwidth = 1;
                                          		}
                                          		if(b==0)
                                                {	if(opvalue=="a"){str11=str11+"<div class='col-xs-"+cbtcolwidth+" col-xs-offset-"+offsetlength+"'><label class='lbswatches'><input type='radio' name='option' value='a' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs1"+value+"'>"+op1_imgp+"</span></label></div>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                                    else {
                                                    	str11=str11+"<div class='col-xs-"+cbtcolwidth+" col-xs-offset-"+offsetlength+"'><label class='lbswatches'><input type='radio' name='option' value='a' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs1"+value+"'>"+op1_imgp+"<br/>"+(arr1[value])+"</span></label></div>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));
                                                    }
                                                }
                                                if(b==1)
                                                {	if(opvalue=="b"){str22=str22+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='b' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs2"+value+"'>"+op2_imgp+"</span></label></div>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                                    else {
                                                    	str22=str22+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='b' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs2"+value+"'>"+op2_imgp+"<br/>"+(arr2[value])+"</span></label></div>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));
                                                    }
                                                }
                                                if(b==2)
                                                {	if(opvalue=="c"){str3=str3+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='c' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs3"+value+"'>"+op3_imgp+"</span></label></div>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                                    else {
                                                    	str3=str3+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='c' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs3"+value+"'>"+op3_imgp+"<br/>"+(arr3[value])+"</span></label></div>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));
                                                    }
                                                }
                                                if(b==3)
                                                {	if(opvalue=="d"){str4=str4+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='d' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs4"+value+"'>"+op4_imgp+"</span></label></div>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                                    else {
                                                    	str4=str4+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='d' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs4"+value+"'>"+op4_imgp+"<br/>"+(arr4[value])+"</span></label></div>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));
                                                    }
                                                }
                                                if(b==4)
                                                {	if(opvalue=="e"){str5=str5+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='e' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs5"+value+"'>"+op5_imgp+"</span></label></div>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                                    else {
                                                    	str5=str5+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='e' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs5"+value+"'>"+op5_imgp+"<br/>"+(arr5[value])+"</span></label></div>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));
                                                    }
                                                }
                                                if(b==5)
                                                {	if(opvalue=="f"){str6=str6+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='f' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs6"+value+"'>"+op6_imgp+"</span></label></div>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                                    else {
                                                    	str6=str6+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='f' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs6"+value+"'>"+op6_imgp+"<br/>"+(arr6[value])+"</span></label></div>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));
                                                    }
                                                }
                                                if(b==6)
                                                {	if(opvalue=="g"){str7=str7+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='g' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs7"+value+"'>"+op7_imgp+"</span></label></div>";option_random.push(str7.replace(/^\s+|\s+$/g, ''));}
                                                    else {
                                                    	str7=str7+"<div class='col-xs-"+cbtcolwidth+"'><label class='lbswatches'><input type='radio' name='option' value='g' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs7"+value+"'>"+op7_imgp+"<br/>"+(opt7[value])+"</span></label></div>";option_random.push(str7.replace(/^\s+|\s+$/g, ''));
                                                    }
                                                } 
                                            }else {
                                          		if(b==0)
                                              {	if(opvalue=="a"){str11=str11+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='a' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs1"+value+"'>"+(arr1[value])+"</span></label>"+op1_imgp+"</td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                              else {str11=str11+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='a' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs1"+value+"'>"+(arr1[value])+"</label>"+op1_imgp+"</span></td></tr>";option_random.push(str11.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==1)
                                          {	if(opvalue=="b"){str22=str22+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='b' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs2"+value+"'>"+(arr2[value])+"<span></label>"+op2_imgp+"</td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                              else {str22=str22+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='b' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs2"+value+"'>"+(arr2[value])+"</span></label>"+op2_imgp+"</td></tr>";option_random.push(str22.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==2)
                                          {	if(opvalue=="c"){str3=str3+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='c' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs3"+value+"'>"+(arr3[value])+"</span></label>"+op3_imgp+"</td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                              else {str3=str3+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='c' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs3"+value+"'>"+(arr3[value])+"</span></label>"+op3_imgp+"</td></tr>";option_random.push(str3.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==3)
                                          {	if(opvalue=="d"){str4=str4+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='d' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs4"+value+"'>"+(arr4[value])+"</span></label>"+op4_imgp+"</td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                              else {str4=str4+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='d' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs4"+value+"'>"+(arr4[value])+"</span></label>"+op4_imgp+"</td></tr>";option_random.push(str4.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==4)
                                          {	if(opvalue=="e"){str5=str5+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='e' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs5"+value+"'>"+(arr5[value])+"</span></label>"+op5_imgp+"</td></tr>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                              else {str5=str5+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='e' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs5"+value+"'>"+(arr5[value])+"</span></label>"+op5_imgp+"</td></tr>";option_random.push(str5.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==5)
                                          {	if(opvalue=="f"){str6=str6+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='f' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs6"+value+"'>"+(arr6[value])+"</span></label>"+op6_imgp+"</td></tr>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                              else {str6=str6+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='f' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs6"+value+"'>"+(arr6[value])+"</span></label>"+op6_imgp+"</td></tr>";option_random.push(str6.replace(/^\s+|\s+$/g, ''));}
                                          }
                                          if(b==6)
                                          {	if(opvalue=="g"){str7=str7+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='g' checked onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs7"+value+"'>"+(opt7[value])+"</span></label>"+op7_imgp+"</td></tr>";option_random.push(str7.replace(/^\s+|\s+$/g, ''));}
                                              else {str7=str7+"<tr><td width='100%'><label class='radio state-error'><input type='radio' name='option' value='g' onclick=\"stateChanged('autoglide')\"><i></i><span id='optjs7"+value+"'>"+(opt7[value])+"</span></label>"+op7_imgp+"</td></tr>";option_random.push(str7.replace(/^\s+|\s+$/g, ''));}
                                          } 
                                      }
                                              }}
                                         var actualCurrentQuestion=str;
                                         str="";
                                         
                                         var wordsShuffled =shuffle(option_random); 
                                         if(qtype[value]=="8"){
                                              for (var i = 0; i <wordsShuffled.length; i++) {
                                              	if(i==0)
                                              		str =str+"<tr><td width='80%'>a)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                              	if(i==1)
                                              		str =str+"<tr><td width='80%'>b)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                              	if(i==2)
                                              		str =str+"<tr><td width='80%'>c)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                              	if(i==3)
                                              		str =str+"<tr><td width='80%'>d)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                              	if(i==4)
                                              		str =str+"<tr><td width='80%'>e)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                              	if(i==5)
                                              		str =str+"<tr><td width='80%'>f)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                              }
                                         }
                                         else if(qtype[value]=="20"){
                                             for (var i = 0; i <wordsShuffled.length; i++) {
                                             	if(i==0)
                                             		str =str+"<tr><td width='80%'>a)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                             	if(i==1)
                                             		str =str+"<tr><td width='80%'>b)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                             	if(i==2)
                                             		str =str+"<tr><td width='80%'>c)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                             	if(i==3)
                                             		str =str+"<tr><td width='80%'>d)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                             	if(i==4)
                                             		str =str+"<tr><td width='80%'>e)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                             	if(i==5)
                                             		str =str+"<tr><td width='80%'>f)&nbsp;&nbsp;&nbsp;"+wordsShuffled[i];
                                             }
                                        }
                                         else{
                                      	   for (var i = 0; i <wordsShuffled.length; i++) {
                                              	str =str+wordsShuffled[i];
                                              }
                                         }
                                        
                                         if(qtype[value]=="13"){
                                        	 if(images[value]==""||images[value]==null||images[value]=='null'){}
                                             else         	 str+="<div> "+imgp+"</div>";
                                         }
                                         
                                         str =str+"</table>";
                                        
                                         
                                         var clearResp = document.getElementById('clear_response').value;
                                         var ClearResponse="";
                                         
                                         if((qtype[value]=="1"||qtype[value]=="3"||qtype[value]=="16"||qtype[value]=="10"||qtype[value]=="11"||qtype[value]=="35"||qtype[value]=="4"||qtype[value]=="13") && (clearResp=='ON' || clearResp=='on')){
                                        	 ClearResponse="<a href='#' onclick='clrearResponse();' class='btn btn-block btn-default btn-xs' style='text-decoration: none;width:200px;' id='clearResponseLink'>"+jsonObj[17003]+" </a>";
                                         }      
                                         
                                         actualCurrentOption=str;
                                           
                                         //alert(currentQuestionNo);
                                         //alert(questionHeaderInstruction);
                                         //alert(actualCurrentOption);
                                         // alert(actualCurrentQuestion);
                                         
                                         

										    questionHeaderInstruction=questionHeaderInstruction+"";
                                            
                                             
                                             
                                           var print=actualCurrentQuestion+"</table>";
                                          
                                           
                                          option_random=null; 

                                    	                                        
                                          ni.innerHTML=newdiv.innerHTML =print;
                                           
                                          try{             
                                        	  var box=$("#testLevelLayout").html();
                                        	  if(box=="0-0"){ 
                                        		  box=$("#layout"+ques_no[value]).html();  
                                        	  }  
                                        	      
                                        	  //alert(ques_no[value]);   
                                        	  var boxArr=box.split("-"); 
                                        	  //alert(boxArr[0]+"---"+boxArr[1]+"---"+box);  
                                        	  $("#firstLayoutBox").attr("class","col-md-"+boxArr[0]);
                                        	  $("#secoundLayoutBox").attr("class","col-md-"+boxArr[1]);
                                        	      
                                          }catch (e) {//alert(e);  
                                        	  $("#firstLayoutBox").attr("class","col-md-12");
                                        	  $("#secoundLayoutBox").attr("class","col-md-12");
											// TODO: handle exception
										} 
                                          document.getElementById("questionNoAndIns").innerHTML=questionHeaderInstruction;
                                          
                                          
                                          if(qtype[value]=="15" || qtype[value]=="14" || qtype[value]=="18" || qtype[value]=="13" || qtype[value]=="8"  || qtype[value]=="20"){  
                                        	  actualCurrentOption=oprtionWithtextarea+" "+actualCurrentOption;
                                          }else{ 
                                        	 
                                          }
                                          if(wheeboxtesttype == "CBTBASEDTEST") {
                                        	  document.getElementById("CurrentAnsware").innerHTML="<div class='row'>"+actualCurrentOption;
                                          }else {
                                        	  document.getElementById("CurrentAnsware").innerHTML="<table>"+actualCurrentOption;
                                          }
                                    	  document.getElementById("questionNoAndInNo").innerHTML=currentQuestionNo;
                                    	  
                                    	 
                                    	  document.getElementById("optionRightSide").innerHTML=ClearResponse;
                                    	  if(qtype[value]=="4" && (clearResp=='ON' || clearResp=='on')){
                                    		  var subjectiveAns = document.getElementById('user_ans_if_text'+value).innerHTML;
                                    		  if(subjectiveAns == ''){
	                                    		  if(sectiondetail[document.getElementById("section"+value).value].MaxAllowedtoAttempt <= sectiondetail[document.getElementById("section"+value).value].attemped){
	                                    			  document.getElementById('clearResponseLink').style.display='none';
	                                    		  }else{
	                                    			  document.getElementById('clearResponseLink').style.display='block';
	                                    		  }
                                    		  }else{
                                    			  document.getElementById('clearResponseLink').style.display='block';
                                    		  }
                                    	  } 
                                    	   
                                    	
                                    	   
                                           ///********meenakshi*****//                 
                                         
                                          if(nextQuestionImage==false){
                                          	if(value==document.getElementById('size').value){document.getElementById('next').style.display='none';nextQuestionImage=true; }
                                          	}
                                         
                                         
                                          
                                          var adpActQues = document.getElementById('adpActQues').value;
                  						
                  						adpActQues = adpActQues +"XX"+ques_no[value];
                  						document.getElementById('adpActQues').value=adpActQues;

                  						 if(qtype[value]=="21"){
                    						    
                      						  actans = document.getElementById("user_ans"+(value)).value;
                                       	   var t=actans.split("-");//alert(t); 
                                       	   try{ 
                                       	   for(var j=0;j<t.length;j++)
                                              {  //alert("--"+j+"----"+t[j]);       
                                               var idt="select"+(value)+""+(j+1);  //alert(idt);
                                       		   document.getElementById(idt).selectedIndex =(t[j-1]);   
                                              }   
                                       	   }catch(e){alert(e);}  
                      						 
                      					   } 
                  						
                  						//typing data get on next button
                                          if(qtype[value]=="18"){
                                          	var user_typedans = document.getElementById("user_typedans"+value).value;
              	                        	document.getElementById("userTypedAnswer"+value).value =user_typedans; 
              	                        	var typing_test_status = document.getElementById("typing_test_status"+value).value;
              	                        	if(typing_test_status=='done'){
              	                        		document.getElementById("startButton"+value).style.display='none';
              	                        	}
              	                        	//alert("user_typedans="+user_typedans);
              	                        	//alert("Data Get Successfully");
              	                        	}else if(qtype[value]=="14" ){//Subjective change
              	                                var quesNo =value;
              	                                var user_ans="";
              	                               
              	                             	   quesNo = value;
              	                             	  user_ans = document.getElementById("user_typedans"+quesNo).value;
              	                             	   document.getElementById("textarea"+quesNo).value = user_ans ;	
              	                             	  if(user_ans!=""){
              	                               	   var flagvalue=document.getElementById("flag"+value).value;
              	                                      if(flagvalue=="flag"){
	                                                     document.getElementById("butt"+value).style.background="#DC143C";
                                                       } 
              	                                      else{
	                                                   document.getElementById("butt"+value).style.background="#7fd895";
                                                       document.getElementById("butt"+value).style.color="white";
                                                    }    
              	                                	}
              	                              }
                                          
              	                        	else if(qtype[value]=="29" ){//Repeate Image
              	                                var quesNo =value;
              	                                var user_ans="";
              	                               
              	                             	   quesNo = value;
              	                             	  user_ans = document.getElementById("user_ans"+quesNo).value;
              	                             	  /* document.getElementById("textarea"+quesNo).value = user_ans ;*/	
              	                             	  if(user_ans!=""){
              	                               	   var flagvalue=document.getElementById("flag"+value).value;
              	                                      if(flagvalue=="flag"){
	                                                      document.getElementById("butt"+value).style.background="#DC143C";
                                                        } 
              	                                      else{
	                                                    document.getElementById("butt"+value).style.background="#7fd895";
                                                        document.getElementById("butt"+value).style.color="white";
                                                      }    
              	                                	}
              	                              }
                                          
              	                        	else if(qtype[value]=="27" ){//Spot Difference
              	                                var quesNo =value;
              	                                var user_ans="";
              	                               
              	                             	   quesNo = value;
              	                             	  user_ans = document.getElementById("user_ans"+quesNo).value;
              	                             	   /*document.getElementById("textarea"+quesNo).value = user_ans ;*/	
              	                             	  if(user_ans!=""){
              	                               	   var flagvalue=document.getElementById("flag"+value).value;
              	                                      if(flagvalue=="flag"){
	                                                   document.getElementById("butt"+value).style.background="#DC143C";
                                                       } 
              	                                      else{
	                                                    document.getElementById("butt"+value).style.background="#7fd895";
                                                       }    
              	                                	}
              	                              }
                                          
              	                        	
              	                        	else if(qtype[value]=="13"){ //for resume fill the blanks
              	                             	 var quesNo =value;
              	                              var user_ans = document.getElementById("user_typedans"+quesNo).value;
              	                             
              	                              if(user_ans=="" ||  user_ans == undefined || user_ans == null){
              	                            	try{
              	                             	    user_ans = document.getElementById("fillInTheBlankAns"+quesNo).value;
                               					}catch (e) { 
                               						// TODO: handle exception
                               						console.log(e);
                               						//user_ans = document.getElementById("user_typedans"+quesNo).value;
                               					} 
              	                              }
              	                              
              	                              if(user_ans == undefined || user_ans == null){
              	                              
              	                              user_ans="";
              	                              }
              	                             	
              	                            var a1 = user_ans.split("#:#");
              	                            try{if(a1[0].value==null){a1[0].value='';}if(a1[0].value!=''){document.getElementById(quesNo+"a").value=a1[0]; }}catch(e){}
              	                         	try{if(a1[1].value==null){a1[1].value='';}if(a1[1].value!=''){document.getElementById(quesNo+"b").value=a1[1]; }}catch(e){}
              	                         	try{if(a1[2].value==null){a1[2].value='';}if(a1[2].value!=''){document.getElementById(quesNo+"c").value=a1[2]; }}catch(e){}
              	                         	try{if(a1[3].value==null){a1[3].value='';}if(a1[3].value!=''){document.getElementById(quesNo+"d").value=a1[3]; }}catch(e){}
              	                         	try{if(a1[4].value==null){a1[4].value='';}if(a1[4].value!=''){document.getElementById(quesNo+"e").value=a1[4]; }}catch(e){}
              	                         	try{if(a1[5].value==null){a1[5].value='';}if(a1[5].value!=''){document.getElementById(quesNo+"f").value=a1[5]; }}catch(e){}
              	                      	  if(user_ans!=""){
              	                         	   var flagvalue=document.getElementById("flag"+value).value;
              	                                if(flagvalue=="flag"){
	                                             document.getElementById("butt"+value).style.background="#DC143C";
												} else{
													document.getElementById("butt"+value).style.background="#7fd895";
													document.getElementById("butt"+value).style.color="white";  
												}  
              	                          	}else{
              	                          		
              	                          	}
              	                         
              	                             }
                  						
                                          
                                           oldvalueHID=document.getElementById('hid').value; //value store for cookies------//
                                           if(qtype[value]=="17" && vv=="next"){
                                         	   viva17StopR();
                                         	  document.getElementById("viva17StartR").innerHTML="Start Recording";   
                                            }
                                           
                                          document.getElementById('hid').value= value;
                                          
                                          cookiesFunonload(value,ques_no[value]); //function for cookies 
                                           
                                          
                                          
                                          document.getElementById('hid_marks'+value).value= arr15[value];
                                          document.getElementById('answer'+value).value= arr7[value];
                                          
                                          document.getElementById('section'+value).value= arr9[value];	
                                         // swal("--LastSectionName--"+LastSectionName+"----arr9[value----"+arr9[value]);
                                          document.getElementById('QUESNO'+value).value= ques_no[value];  
                                          document.getElementById('dsection').value= arr9[value];	
                                          document.getElementById('lastQF').value=qtype[value];
                                          document.getElementById('startedAt').value=new Date().getTime(); 
                                                       
                                          var displayEndTest = document.getElementById('displayEndTest').innerHTML;
                                          if(displayEndTest == "1" || value ==parseInt(document.getElementById('actsize').value)){
                                        	  document.getElementById('subsub').style.display='block';
                                        	  endTestShow = true;
                                          }else{
                                        	  endTestShow = false;
                                        	  document.getElementById('subsub').style.display='none';
                                          }     	 
                                          	 
                                     /*      //alert(vv+"----"+value);  
                                         // alert(booleanforautoglide); 
                                      	if((vv!='autoglide') || ((document.getElementById("autoglide").checked)) && vv !='1'){   
                                      		   //alert(""+value+"----"+ques_no[value]+"--------opvalue----"+opvalue+"-vv--"+vv); 
                                      		var ansFromCookies=cookiesOptionAns(value,ques_no[value]);//alert(ansFromCookies); 
                                      		var cookiesIsSetNow=callForSetCookies(vv,(oldvalueHID),ques_no[((oldvalueHID))]);	
                                      	}*/
                                           
                                          
                                          // alert(document.getElementById("autoglide").checked);
                                              try{
                          						document.getElementById("progDiv").style.width = "100%";
                          					}catch (e) { 
                          						// TODO: handle exception
                          					}
                                        	
                                              try{
                                             	 var test_language=document.getElementById("test_language").innerHTML;
                                             	     //alert(test_language); 
                                                  if(test_language!=""){
                                                	  //alert("in hindi");
                                                 	 questionShowInHindi(); 
                                                  }  
                                              }catch(e){
                                             	// alert(e);
                                              }
                                        	  
                                      	  if(((vv!='autoglide') || ((booleanforautoglide)))){   
                                        		try{
                                        			if(document.getElementById("serverSideResumeStatus").value=="Active Server Side"){  
                                            			if(vv==1){     
                                            				/*try{firsttimecreateFile();}catch(e){ 
                                            				}*/
                                            				 var showSectionName = document.getElementById('show_sectionName_check').value;
                                                            if(showSectionName ==''){ showSectionName ='OFF';}
                                                            if(showSectionName =='on' || showSectionName =='ON'){
                                            					try{document.getElementById('dsectionlable1').innerHTML= arr9[vv];}catch (e) {} 
                                                            }else if(showSectionName =='OFF' || showSectionName =='off'){
                                                          	  document.getElementById('dsectionlable1SectionName').style.display="none";
                                                            }
	                                                            if(callFromResume == true){
	                                                            	if(callButtonGreen == true){
	                                                                callFromResume = true;
	                                                                callButtonGreen = false;
	                                                                var result=buttonGreen(); 
	                                                				return false;  
	                                                            	}
	                                                            }
                                            				
                                                		}else{ 
                                                			
                                                			//console.log("here : "+document.getElementById("beforeTestLoad").style.display);
                                                			if(document.getElementById("beforeTestLoad").style.display!="block"){
                                                				
                                                				ResumeTestWriteAjax(vv,oldvalueHID,ques_no[((oldvalueHID))],currentQuestionForResume);        	
                                                			}
                                                		}
                                                    }else{
                                                    	if(((vv!='autoglide') || ((booleanforautoglide))) && vv!=1){  
                                                  		  // alert(vv+"--w--"+value);  
                                                  		   //alert(""+value+"----"+ques_no[value]+"--------opvalue----"+opvalue+"-vv--"+vv);         
                                                  		var ansFromCookies=cookiesOptionAns(value,ques_no[value]);//alert(ansFromCookies); 
                                                  		var cookiesIsSetNow=callForSetCookies(vv,(oldvalueHID),ques_no[((oldvalueHID))]);	
                                                  	}
                                                    } 
                                        		}catch(e){
                                        		}
                                            } 
//                                           alert(display_secName[value]+"      "+pat1);
                                      
                                      	    
                                           if(arr9[value]=='Numerical Reasoning' || arr9[value]=='Numerical'){
                                            //document.getElementById("calculatorlink").style.display='none';
                                            //document.getElementById("cal").style.display='block';
                                           } 
                                           else{
                                            try{ 
                                            //document.getElementById("calculatorlink").style.display='none';
                                            //document.getElementById("cal").style.display='none';
                                            }catch(e){}
                                           }
                                           
                                           // below code for show section name dynamically written by Ashish yadav on 05/01/2017 START HERE
                                           
                                           var show_sectionName_check ="";
                                           show_sectionName_check = document.getElementById('show_sectionName_check').value;
                                           if(show_sectionName_check ==''){ show_sectionName_check ='OFF';}
                                           if(show_sectionName_check =='section')
                                           {
                                              document.getElementById('dsectionlable1').innerHTML= display_secName[value];
                                           }else if(show_sectionName_check =='topic')
                                            {
                                        	   document.getElementById('dsectionlable1SectionName').innerHTML = 'Topic: <span id="dsectionlable1" style=""></span>';
                                               document.getElementById('dsectionlable1').innerHTML= arr18[value];
                                            }else if(show_sectionName_check =='sectiontopic')
                                            {
                                                document.getElementById('dsectionlable1').innerHTML= display_secName[value] + ", Topic: " + arr18[value];
                                             }else {
                                            	  document.getElementById('dsectionlable1SectionName').style.display="none";
                                            } 
                                           if(document.getElementById("serverSideResumeStatus").value=="Active Server Side")
                                    	   {
                                        	   if(show_sectionName_check =='section')
                                               {
                                                  document.getElementById('dsectionlable1').innerHTML= arr9[value];
                                               }else if(show_sectionName_check =='topic')
                                                {
                                            	   document.getElementById('dsectionlable1SectionName').innerHTML = 'Topic: <span id="dsectionlable1" style=""></span>';
                                                   document.getElementById('dsectionlable1').innerHTML= arr18[value];
                                                }else if(show_sectionName_check =='sectiontopic')
                                                {
                                                    document.getElementById('dsectionlable1').innerHTML= arr9[value] + ", Topic: " + arr18[value];
                                                 }
                                    	   }
                                           
                                       //    below code for show section name dynamically written by Ashish yadav on 05/01/2017
                                           
                                       
                                        
                            if((overAllPattern=="PSY" && (comp_code != '0021000' && document.getElementById('domainName').value!="HDFC Values")) || comp_code == '0055000'){
                                          	document.getElementById("logo").style.display='none';
                                          }
                            if(document.getElementById('disSec').value == 'disSec'){
                            	document.getElementById("logo").style.display='block';
                            }
                            if(comp_code == '0143000'||comp_code == '0143001')
                            	document.getElementById("logo").style.display='block';
                                     }
                              	if(comp_code == '0311000') {
                              	var flagStatusValue = document.getElementById("flag"+value).value;
	  	                  		if(flagStatusValue === "mark") {
	  	                  			document.getElementById("butt"+value).style.background="blue";
	  		                        document.getElementById("markx").style.display="none";
	  		                        document.getElementById("unmarkv").style.display="block";
	  		                  		  document.getElementById("x").style.display="none";
	  		                  		  document.getElementById("v").style.display="none";
	  	                  		  }else if(flagStatusValue === "unmark") {
	  	                  			var found = document.getElementById("user_ans"+value).value;
  	                  			  console.log("UserAns: ["+found+"]");
  	                  			  if(found === undefined || found === null || found === "") {
  	                  				  document.getElementById("butt"+value).style.background="lightgray";
  	                  			  }else {
  	                  				  document.getElementById("butt"+value).style.background="#7fd895";
                                      document.getElementById("butt"+value).style.color="white";
  	                  			  }
	  		                        document.getElementById("markx").style.display="block";
	  		                        document.getElementById("unmarkv").style.display="none";
	  		                  		  document.getElementById("x").style.display="block";
	  		                  		  document.getElementById("v").style.display="none";
	  	                  		  }else if(flagStatusValue === "flag") {
	  	                  			document.getElementById("butt"+value).style.background="#DC143C";
	  		                        document.getElementById("markx").style.display="none";
	  		                        document.getElementById("unmarkv").style.display="none";
	  		                  		  document.getElementById("x").style.display="none";
	  		                  		  document.getElementById("v").style.display="block";
	  	                  		  }else if(flagStatusValue === "unflag") {
	  	                  			  var found = document.getElementById("user_ans"+value).value;
	  	                  			  console.log("UserAns: ["+found+"]");
	  	                  			  if(found === undefined || found === null || found === "") {
	  	                  				  document.getElementById("butt"+value).style.background="lightgray";
	  	                  			  }else {
	  	                  				  document.getElementById("butt"+value).style.background="#7fd895";
                                          document.getElementById("butt"+value).style.color="white";
	  	                  			  }
		  		                        document.getElementById("markx").style.display="block";
		  		                        document.getElementById("unmarkv").style.display="none";
		  		                  		  document.getElementById("x").style.display="block";
		  		                  		  document.getElementById("v").style.display="none";
		  	                  	}
                              	}
          					}
                              
                          //    alert("last value =="+value);
                            
                              //    code add for fixed the slide panel for PWC start code
                              //  alert(value+"--");
                              if(comp_code == '0204000'){
                                  var pro_type = document.getElementById("pro_type").value;
                            		 if(pro_type.match("RolePlay") && document.getElementById('exam_name').value !="BEI")
                            			 { 
                        			        var y='<input class="label_instruction" value="Suggest Intervention " disabled="disabled"> <br><br> <br> <input class="label_instruction" value="Support Required " disabled="disabled"><br><br><br>'; 
                        			        	//<input class="label_instruction" value="Frequency and mode of tracking process " disabled="disabled" size="35"><br>';
//                            		        nicEditors.findEditor('option').setContent(y);
                            		        tinymce.get('option').setContent(y);
                            			 } 
                            		 if(pro_type.match("RolePlay") && document.getElementById('exam_name').value =="BEI")
                            			 {
                            			   var s = "Space for rough notes for your usage and not to be evaluated.";
//                            			nicEditors.findEditor('option').setContent(s);
                            			   tinymce.get('option').setContent(s);
                            			 }
                                   }
                              if(comp_code == '0204000' &&  pwcPannel==true){ 
                            	  if(!pro_type.match("RolePlay")){
                            		  pwcPannel = false;
                                //document.getElementById("sqpArrow").click();
                                }
                                //document.getElementById("smpArrow").click();
                                //document.getElementById("slideQuestion").style.display="none";
                                //document.getElementById("slideMenu").style.display="none";
                              }
                              if(comp_code == '0204000'){
                              if(pro_type.match("RolePlay")){
                                 // document.getElementById("hqp").style.display="none";
                                  //document.getElementById("sqpArrow").style.display="none";
                              	  }
                              }
                              // end code for PWC
                              
                           // for centum company open both panels open here
                              if(comp_code == '0212000' &&  pwcPannel==true){
                            	
                            		  pwcPannel = false;
                                //document.getElementById("sqpArrow").click();
                                //document.getElementById("smpArrow").click();
                                //document.getElementById("slideQuestion").style.display="none";
                                //document.getElementById("slideMenu").style.display="none";
                              }
                              // end here
                              try{
                            	  if(qtype[value]=="18"){
                            		  document.getElementById('drpLanguage').onchange = languageDropdownChanged;
                            		  if(arr16[value]=='Bengali Typing'){
	        	              			  pramukhIME.addKeyboard("PramukhIndic"); // Adds as a string OR
	        	              			  pramukhIME.addKeyboard(PramukhIndic); // Adds as a function OR
	        	              			  var pi_kb = new PramukhIndic(); 
	        	              			  pramukhIME.addKeyboard(pi_kb); // Adds as an object
	        	              			// Adds PramukhIndic to the pramukhIME and the selected language is Sanskrit
	        	              			  pramukhIME.addKeyboard(PramukhIndic, 'bengali');
	        	              			}else{
                      			  		newLanguage = "pramukhime:english";
	                      				var lang = newLanguage.split(':');
	                      				pramukhIME.setLanguage(lang[1], lang[0]);
	        	              			}
	        	              		  document.getElementById('userTypedAnswer'+value).focus();
	        	              		  pramukhIME.addKeyboard("pramukhime");
	        	              		  pramukhIME.enable();
                      				}
                      		  }catch(e){
                      			  alert(e);
                      		  }
                      		  
                      		if(qtype[value]=="13"){ 
	                      		if(sectiondetail[document.getElementById("section"+value).value].MaxAllowedtoAttempt <= sectiondetail[document.getElementById("section"+value).value].attemped){
	                        		//document.getElementById('maxAttemptMsg').innerHTML="You are allowed to attempt only "+sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt+" questions in this section and you have already attempted the allowed number of questions. <br> <br> If you want to attempt any other question, then you will have to clear the response of one of the questions you have already attempted. For clearing the response just go to that particular question and use the button ‘Clear Response’ (on top of the textarea). This will allow you to attempt another question of your choice. ";
	                        		if(document.getElementById("user_ans"+value).value == ''){
	                      			for(var k = 1; k < 6; k++){
	                        			var optionId = "";
	                        			if(k == 1)optionId="a";
	                        			if(k == 2)optionId="b";
	                        			if(k == 3)optionId="c";
	                        			if(k == 4)optionId="d";
	                        			if(k == 5)optionId="e";
	                        			if(k == 6)optionId="f";
	                        			try{
	                     				$('#'+value+optionId).attr('readonly', true);
	                        			}catch(e){
	//                        				alert(e);
	                        			}
	                        		}
	                        		var maxAttemptSpan = "<span style='color: red;font-size: 15px;'>You are allowed to attempt only "+sectiondetail[document.getElementById("section"+value).value].MaxAllowedtoAttempt+" questions in this section and you have already attempted the allowed number of questions. <br> <br> If you want to attempt any other question, then you will have to clear the response of one of the questions you have already attempted. For clearing the response just go to that particular question and use the button ‘Clear Response’. This will allow you to attempt another question of your choice.</span>";
	                        		$(maxAttemptSpan).insertAfter("#question"+value);
	                              	}	
	                      		}
                      		}
                      		
                           // Open pannel generic change on 28/12/2016 START HERE
                               var pannelcheck =""; 
                              try{
                            //  alert("here...");
                              //pannelcheck = document.getElementById('openPannel').value;
                            //  alert("pannelcheck"+pannelcheck);
                              }catch(e){
                            	  //alert(e+"<  >"+e.lineNumber);
                            //	  console.log(e);
                            	  } 
                              if(pannelcheck ==""){ pannelcheck = "OFF";}
                              if(pannelcheck == 'on' &&  pwcPannel==true){
                              	
                        		  pwcPannel = false;
                            //document.getElementById("sqpArrow").click();
                            //document.getElementById("smpArrow").click();
                            //document.getElementById("slideQuestion").style.display="none";
                            //document.getElementById("slideMenu").style.display="none";
                          }
                               // Open pannel generic change on 28/12/2016 END HERE     
                      }
                  
              	
				}catch(e){//alert(e.lineNumber);
				 
					// console.log(e);
                      }   
				
				
				
				
				
				try {
					if(qtype[value]=="17") {
						if(document.getElementById("user_ans"+value).value=="Viva") {
							document.getElementById("qflag17Div").style.display = "none";
						}else {
							document.getElementById("qflag17Div").style.display = "block";
						}
          			}else {
          				document.getElementById("qflag17Div").style.display = "none";
          			}
				}
				catch(e){}
				try{
	          		//console.log("que_id of question: " + value+" :: "+que_id[value]);
	          		try{
		          		var total_que = parseInt(document.getElementById('actsize').value);
		          		var pro_count = parseInt(document.getElementById("progress_count").value);
		          		var comp_code = parseInt(document.getElementById('comp_code').value);
	                    if(comp_code == '0414000'){
		          		
		          		
		          	//------------progress bar status --akash---------//
	//                  swal(vv+"---value---"+user_ans);
		          		//console.log("pro_count--"+pro_count);
	            		if(user_ans!=""){
	            			if(vv =='next' && pro_count < value-1 ){
	            				document.getElementById("progress_count").value = pro_count+1;
	                            var attemptCount = parseInt(document.getElementById('progress_count').value);
	                            document.getElementById('progress_Bar').style.width = (attemptCount / total_que) * 100 +"%";
	                            document.getElementById('progress_Bar').innerHTML = attemptCount+"/"+ total_que;
	            			}else if(vv =='previous'){
	            				
	            			}
	                        
	            		} 
	            		}	
	          		}catch(e){
						console.log(e);
					}
	          		
	          		
	          	var quesInstStringiry = JSON.stringify(quesInstJson);	
	          		
	          	//console.log("Question Json Object in TestView Main V4 : " + quesInstStringiry);	
	          	try{
	          		clearInterval(showTimeId);
		          	clearTimeout(timeOutId);
	          	}catch(e){
	          		console.log(e);
	          	}

	          	
	          	
	          	//console.log("preShownInst in before if condition" + preShownInst);
	          	
	          	if(que_id[value]){
	          		
	          		
	      			//console.log("In if condition and ques_id is not null");
	      			
	      			var tempInstObj = {"ques_id": que_id[value], "value": true};
	      			//console.log(tempInstObj);
	      			
	      			
	      			
	      			
	      			//console.log("preShownInst in in  if condition: " + preShownInst +"ques_id"+  que_id[value]);
	      			
	      			if(preShownInst == que_id[value]){
	      				//console.log("In if  preShown inst condition ");
	      			}else{
	      				//console.log("checking if que id is number or not:"+isNaN(que_id[value]));
	      				if(!isNaN(que_id[value])){
	      				
	      					if(showTimeId){
	      						clearInterval(showTimeId);
	      					}
	      					
	      					if(timeOutId){
	      						clearTimeout(timeOutId);
	      					}
	      				
	      				//console.log("In else  preShown inst condition ");
	      				
	      				isSecTimePaused = true;
	      				
	      				var element =  document.getElementById('secTimeDiv');
	      				if (typeof(element) != 'undefined' && element != null)
	      				{
	      					element.innerHTML = "00:00:00";
	      				}
	      				
	      				/*document.getElementById("secTimeDiv").innerHTML = "00:00:00";*/
	      				
	      				var quesID33 = que_id[value];
	                  	
	          			preShownInst = quesID33;
	          				

	          				
	          				
	          				//console.log(JSON.parse(quesInstStringiry)[quesID33].inst_text);
	          				
	          				
	          				
	              			var inst_text = JSON.parse(quesInstStringiry)[quesID33].inst_text;
	              			var inst_position = JSON.parse(quesInstStringiry)[quesID33].inst_position;
	              			var inst_image = JSON.parse(quesInstStringiry)[quesID33].inst_img;
	              			var inst_time = parseInt(JSON.parse(quesInstStringiry)[quesID33].inst_time);
	              			var inst_detail = JSON.parse(quesInstStringiry)[quesID33].inst_detail;
	              			document.getElementById("ques_instruction").style.display = "block";
	              			document.getElementById("ques_inst_text").innerHTML = inst_text;

	              			if(inst_image == undefined){
	              				document.getElementById("ques_inst_div").style.display = "none";
	              				
	              			}else{
	              				document.getElementById("ques_inst_div").style.display = "block";
	              			}
	              			
	              			$("#ques_inst_img").attr("src",inst_image);
	              			
	                       
	              			
	              			 
	              	           continueSec = inst_time;
	              	          var timeForInst = inst_time * 1000 + 1000;
	              	           document.getElementById("wet_div_main").style.display = "none"; 
	              	           document.getElementById("footerDIV").style.display = "none";
	              	          
	              	           showTimeId = setInterval(showTime, 1000);
	              	           
	              	           timeOutId = setTimeout(showQuestion, timeForInst); 
	              	        
	      			}else{
	      				showQuestion();
	      			}    
	      				
	      			}
	      			
	      		
	      	           
	      		}else{
	      			preShownInst = "";
	      			
	      				showQuestion();
	      			
	      			
	      		}
	          	
	          	if(qtype[value] != "29"){
	          		if(timeoutIdForRepeatImage){
		          		clearInterval(timeoutIdForRepeatImage);
		          	}
	          		if(document.getElementById("imageRemeber")) {
	          			document.getElementById("imageRemeber").style.display="none";
	          		}
	          	}
	          	
	          	
					
				}catch(e){
					console.log(e);
				}
				
				
				
				
				
				
				
				
				
				
			}
			
			
			var store;
          function stateChanged(j)
            {
        	
//        	  alert(j); 
        	  store=j;
        	//alert(storingQflag);
        	  try{
        		  
        		  if(storingQflag==4)
        		  {
        			  document.getElementById('b').innerHTML =
                          '<img id="testImage3" style="display: none;" ' +
                          'src = "/WET-2/assest/images/internet.png?'+Math.random() + '" ' +
                          'onerror="testFail();" ' + 'onload="stchange();">';  
        		  }else if(imageRepeateImageFinished == true){
        			 // alert("Image solsd");
        			  /*swal("Warning !!", "You can't be navigate when images are sliding","error");*/
        			  clearInterval(timeoutIdForRepeatImage);
        			  console.log("In Image Repeate afert start");
        			  /*swal("alert !!","You cannot switch question when images are sliding.","error").then(function() {showquestionImageRepeatMemory();});*/
        			  
        			  
        			  swal(
        				        {
        				            title: "Information!",
        				            text: "You cannot switch question when images are sliding!",
        				            type: "warning",
        				            showCancelButton: false,
        				            confirmButtonColor: "#DD6B55",
        				            confirmButtonText: "Ok",
        				            allowEscapeKey : false,
        				            allowOutsideClick: false,
        				            closeOnConfirm: true
        				        },
        				        function(isConfirm) {
        				            if(isConfirm){
        				             showquestionImageRepeatMemory();
        				            }
        				            return false;
        				        });
        			  
        			  console.log("In Image Repeate before start");
        			  
        			  return false;
        		  }else{
        			  stchange(); 
        		  }
//        		  alert(doit);
//        		   
//        		  if(doit){}
        		   
        	  }catch(e){alert(e + "       "+e.lineNumber);}
        	  
            }
            function GetXmlHttpObject()
            {   req = false;
                // branch for native XMLHttpRequest object
                if(window.XMLHttpRequest && !(window.ActiveXObject)) {
                    try {
                        req = new XMLHttpRequest();
                    } catch(e) {                        req = false;                    }
                    // branch for IE/Windows ActiveX version
                } else if(window.ActiveXObject) {
                    try {
                        req = new ActiveXObject("Msxml2.XMLHTTP");
                    } catch(e) {
                        try {
                            req = new ActiveXObject("Microsoft.XMLHTTP");
                        } catch(e) {                  req = false;                   }
                    }
                }    return req;
            }
                     
           
            exit_window0=1;
          /*  var exit_window1='Warning: During test please do not navigate to any other page or window. Your test will be auto submitted . ';
            var exit_window2='Second Warning : During test please do not navigate to any other page or window. Your test will be auto submitted .';
            var exit_window3='Final Warning: Test will be auto submitted if you try to open another window or application again.';*/
//            var exit_window1= jsonObj[48015];
//            var exit_window2= jsonObj[48016];
//            var exit_window3= jsonObj[48017];
            var exit_window1="Please do not navigate out of test window during the test. Your test will be auto submitted.";
            var exit_window3='Please do not navigate out of test window during the test. Test will be auto submitted in the next navigation.';
            var conf=false; 
	var mainchekingforcheeet1=false;
	
	var offlineNavigateCount=0;
            function onCheeting(){

//            	console.log("oncheeting caled");
            	if(ignoreFirstWarning){mainchekingforcheeet1=true;}
        		if(endTestShow)
        			document.getElementById("subsub").style.display='block';
        			
        		var lastQF =  document.getElementById('lastQF').value;
//        		console.log(showCameraClicked+"====showCameraClicked===="+allowcheeting+"==="+isSubjectiveCheetingCalled);
        		if(lastQF=='4'){
        			if(showCameraClicked==true){
        				allowcheeting = false;
        			}else{
        			if(isSubjectiveCheetingCalled == true){
            			allowcheeting = true;
                		
            		}else{
            			allowcheeting = false;
            		}
        			}
        		}
        			        if(document.getElementById("exitexit"))
        	            	document.getElementById("exitexit").style.display='none';
        	            	
        	            	if(!mainchekingforcheeet1){
        	            	navigate=document.getElementById("navig").value;
        	            	
        	            	 var calculatorStatus =  document.getElementById('calculatorStatus').value;
        	             	// alert("lastQF "+lastQF);
        	            	if(navigate != "ON" && (lastQF!='11'&&lastQF!='12'&&lastQF!='14')){
        	              	//navigateC=++navigate;
        	                	 if(internetStatus){
        	                	 //if internet status is active and offline counter is greater than 5, then the test will be auto submitted
        	                		 if(offlineNavigateCount<6){
        	                    		 offlineNavigateCount=0;
        	                		 } else {
//        	                			 conf=true;
        	                		 }
        	                		 navigateC=++navigate;
        	                		 console.log("internetStatus -> "+internetStatus+" | navigate -> "+navigate+" | offlineNavigateCount->"+offlineNavigateCount);
        	                	 } else {
        	                	 //if internet status is not active then offlineNavigateCounter will increment on every navigate
        	                		 offlineNavigateCount++;
        	                		 console.log("internetStatus -> "+internetStatus+" | navigate -> "+navigate+" | offlineNavigateCount->"+offlineNavigateCount);
        	                	 }
        	                	 console.log(allowcheeting+"=====5411");
        	              	if(allowcheeting){
        	              		calledResumeTestWriteFromOnCheeting = true;
        	              		try {
        	              		ResumeTestWriteAjax("thread",'','',$("#hid").val());
        	              		}
        	              		catch(e) {
        	              			console.log("ResumeTestWriteAjax - thread - not called.");
        	              		}
        	              	var exit_window_String='';
        	              	if(internetStatus){
        	              	//if internet statis active, then exit_window0 will increment so that there will be count number respective to navigation counter
        	              		exit_window0++;
        	              		console.log("warning counter -> "+exit_window0);
        	              	}
        	              	var warn; 
        	              	warn = exit_window0-1;
        	        var warningTitle = "";
        	        var allowedNavigation=document.getElementById("navig").value;
        	        if(exit_window0==navigateC){
        	        exit_window_String=exit_window3;
        	        warn = "Last";
        	        warningTitle  = warn +" "+ jsonObj[49037];
        	        }else if(exit_window0<navigateC){
        	        exit_window_String=exit_window1;
        	        var compCode = document.getElementById("comp_code").value;
        	        if(compCode == '0913000' || compCode == '0902000' || compCode == '1076000'){
        	        	warningTitle  = warn+" "+jsonObj[49037];
        	        }else{
        	        	warningTitle  = warn+" out of "+allowedNavigation+" "+jsonObj[49037];
        	        }
        	        
        	        }
        	        
        	        try{
        	        	totalwarningcounter++;
        	        	addtologonforface(warn+" Navigation");      
        	        }catch(e){}
        	        
        	        if(exit_window_String.length>navigate){
        	        	//now navigationTime will be captured everytime it will navigate i.e. internet active n inactive 
        			captureTime();
        			//console.log("offlineNavigateCount -> "+offlineNavigateCount);
        				if(internetStatus){
        				//if internet status is active and user has not exceeded offline limit then warning will be shown, else not
        				// this will avoid the popup of online warning if user exceeds the offlineNavigation counter
        				 if(offlineNavigateCount<=5){
        					 if(lastQF=='4'){
        					 swal({   title: (warningTitle),   text: exit_window_String,   type: "error",   showCancelButton: false,     confirmButtonText: jsonObj[16117],   closeOnConfirm: true }, function(r)
        			   					
        								{
        							if (r)
        							{
        								subjectiveInt=setInterval(function(){callSubjectiveCheeting();},1000);isSubjectiveCheetingCalled = false;
        							}else
        							{	
        								subjectiveInt=setInterval(function(){callSubjectiveCheeting();},1000);isSubjectiveCheetingCalled = false;
        							}
        						});
        					 }else{
        						 swal({title:warningTitle,text:exit_window_String,confirmButtonText:jsonObj[16117],type:"error"});
        					 }
        				 }
        				} else {
        				//if internet status is inactive, Final warning will be shown only at the 5th offlineCounter
        					if(offlineNavigateCount==5){
        						exit_window_String=exit_window3;
        				        warn = "Final";
        				        if(lastQF=='4'){
               					 swal({   title: warningTitle,   text: exit_window_String,   type: "error",   showCancelButton: false,     confirmButtonText: jsonObj[16117],   closeOnConfirm: true }, function(r)
               			   					
               								{
               							if (r)
               							{
               								subjectiveInt=setInterval(function(){callSubjectiveCheeting();},1000);isSubjectiveCheetingCalled = false;
               							}else
               							{	
               								subjectiveInt=setInterval(function(){callSubjectiveCheeting();},1000);isSubjectiveCheetingCalled = false;
               							}
               						});
               					 }else{
        				        swal({title:warningTitle,text:exit_window_String,confirmButtonText:jsonObj[16117],type:"error"});
               					 }
        					}
        				}
        			    
        	        }
        	                  if(exit_window0>navigate){
        	                  	conf= true;
        	                  }
        	                  //turns the flag to TRUE so that test is subitted automatically
        	                  if(offlineNavigateCount>5){
//        	                	  conf= true;
        	                  }
        	                  if (conf== true)
        	                  {	
        	                	  document.getElementById('reason').value="Navigation limit crossed.";   
        	                	//captureTime();
        	                  	testImage();
        	                  	
        	                  	
        	                  }else    return false;
        	              	}
        	                }}else{mainchekingforcheeet1=false;}
        	}  
            
            function expandText(){
            	//document.getElementById("expand").innerHTML = "Collapse";
            	document.getElementById("expand").style.display='none';
            	document.getElementById("collapse").style.display='block';
            }
            function collapseText(){
            	document.getElementById("expand").style.display='block';
            	document.getElementById("collapse").style.display='none';
            }
            function expandTextNew(){
            	//document.getElementById("expand").innerHTML = "Collapse";
            	document.getElementById("expand1").style.display='none';
            	document.getElementById("collapse1").style.display='block';
            }
            function collapseTextNew(){
            	document.getElementById("expand1").style.display='block';
            	document.getElementById("collapse1").style.display='none';
            } 
            function expandQuestionText(){
            	//document.getElementById("expand").innerHTML = "Collapse";
            	document.getElementById("expand2").style.display='none';
            	document.getElementById("collapse2").style.display='block';
            } 
            function collapseQuestionText(){
            	document.getElementById("expand2").style.display='block';
            	document.getElementById("collapse2").style.display='none';
            }
//navigation counter start
            var serverDate;
            var serverHaurs;
            var serverMinute;
        	var timeDiff;
        	var serverTime;
        	
            function captureTime(){
            	try{
                	var ccc=document.getElementById('cheetingCount').value;
                	
                	// configure serverTime variable for server time 
                	var TestStartTime=document.getElementById('millisec').value;
                	var actualTime;
                	serverDate = new Date(parseInt(TestStartTime,10));
                	serverTime = serverDate.getTime();
                	// END  
                	
                	  //Client Date onLOAd
                	  
                	
                	// configure timeDiff variable from server time  and local time
                	var currentTime = new Date();
                	timeDiff = (currentTime.getTime()-clientDate.getTime());
                	// END
                	
                	
                	// Calculating actualTime with serverTime timeDiff by addition
                	actualTime = new Date(serverTime+timeDiff);
                
                	var month = actualTime.getMonth() + 1;
                	var day = actualTime.getDate();
                	var year = actualTime.getFullYear();
                	var hours = actualTime.getHours();
                	var minutes = actualTime.getMinutes();
                	var seconds = actualTime.getSeconds();
                	if (seconds < 10){
                	seconds = "0" + seconds;
                	}
                	if (minutes < 10){
                	minutes = "0" + minutes;
                	}
                	//document.write(year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds)
                	if(hours > 11){
                	//document.write("PM")
                	var tt="PM";
                	} else {
                		var tt="AM";
                	}
                	var navTime=year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
                if(ccc=='0'){
                	//if cheetingCount is 0 and internet status is active then "- 1" will be appended to timestamp to signify that the navigation was done when internet was active else "- 0" will be appended
                	if(internetStatus){
                		document.getElementById('cheetingCount').value= navTime+tt+" - 1";
                	} else {
                		document.getElementById('cheetingCount').value= navTime+tt+" - 0";
                	}
    		  	 var navigateAway=document.getElementById('navigateAway').value;
    		  	navigateAway=parseInt(navigateAway)+1;
    		    	document.getElementById('navigateAway').value=navigateAway;
                }else{
                //if cheetingCount!=0 n internet status is active then "- 1" will be appended to timestamp to signify that the navigation was done when internet was active else "- 0" will be appended
                	if(internetStatus){
                		document.getElementById('cheetingCount').value=document.getElementById('cheetingCount').value+";"+navTime+tt+" - 1";
                	} else {
                		document.getElementById('cheetingCount').value=document.getElementById('cheetingCount').value+";"+navTime+tt+" - 0";
                	}
                	 var navigateAway=document.getElementById('navigateAway').value;
                	 //online navigate counter will increment and be set to html element
                	 if(internetStatus){
                		 navigateAway=parseInt(navigateAway)+1;
          		    	document.getElementById('navigateAway').value=navigateAway;	
                	 } 
                }}catch(e){ 
                	console.log(e);
                }}
            
            
            //navigation counter end
            function callSectionChange(str){
            	var changeSectionName = document.getElementById(str).value;
            	stateChanged(changeSectionName);
            }
           
            function insertinUser_response(id,qid){
            	
            	try{
            			var wheeboxID = document.getElementById("wheeboxID").value;
                		var QUESNO=document.getElementById("QUESNO"+qid).value;
                		var key_sno=document.getElementById("key_sno").value;
                		try
                		{  
                			xmlHttpforsub=GetXmlHttpObject();
                			if (xmlHttpforsub==null)
                			{
                				alert ("Browser does not support HTTP Request");
                				return
                			}



                			if(id.length < 18000){
                				if(id.length > 3000)
                				{
                					var cuting=id.substring(0, 3000); 
                					var url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cuting))+"&qid="+qid+"&appand=no&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                					// alert("first"+cuting);
                					xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                					xmlHttpforsub.open("GET",url,true);
                					xmlHttpforsub.send(null);

                					var cutting2=id.substring( 3000,id.length);
                					if(cutting2.length>3000)
                					{
                						var cutting3=id.substring(3000,6000);
                						url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cutting3))+"&qid="+qid+"&appand=yes&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                						// alert("Second");
                						xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                    					xmlHttpforsub.open("GET",url,true);
                						xmlHttpforsub.send(null); 

                						var cutting4=id.substring(6000,id.length);

                						if(cutting4>3000)
                						{

                							var cutting5=id.substring(6000,9000);
                							url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cutting5))+"&qid="+qid+"&appand=yes&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                							// alert("third");
                							xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                        					xmlHttpforsub.open("GET",url,true);
                							xmlHttpforsub.send(null); 
                							var cutting6=id.substring(9000,id.length);
                							if(cutting6>3000)
                							{
                								var cutting7=id.substring(9000,12000);


                								url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cutting7))+"&qid="+qid+"&appand=yes&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                								// alert("third");
                								xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                            					xmlHttpforsub.open("GET",url,true);
                								xmlHttpforsub.send(null);

                								var cutting8=id.substring(12000,id.length);
                								if(cutting8>3000)
                								{ 

                									var cutting10=id.substring(12000,id.length);


                									url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cutting10))+"&qid="+qid+"&appand=yes&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                									// alert("third");
                									xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                	            					xmlHttpforsub.open("GET",url,true);
                									xmlHttpforsub.send(null);



                								}else{

                									url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cutting8))+"&qid="+qid+"&appand=yes&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                									// alert("third");
                									xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                	            					xmlHttpforsub.open("GET",url,true);
                									xmlHttpforsub.send(null);
                								}



                							}else{
                								url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cutting6))+"&qid="+qid+"&appand=yes&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                								// alert("third");
                								xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                            					xmlHttpforsub.open("GET",url,true);
                								xmlHttpforsub.send(null);

                							}


                						}else{
                							url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cutting4))+"&qid="+qid+"&appand=yes&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                							// alert("third");
                							xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                        					xmlHttpforsub.open("GET",url,true);
                							xmlHttpforsub.send(null);

                						}

                					}else{



                						url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(cutting2))+"&qid="+qid+"&appand=yes&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
                						// alert("forth");
                						xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                    					xmlHttpforsub.open("GET",url,true);
                						xmlHttpforsub.send(null); 
                					}



                				}else{
                					var url="updateinuserresponse.obj?userans="+encodeURIComponent(encodeURIComponent(id))+"&qid="+qid+"&appand=no&QUESNO="+QUESNO+"&wheeboxID="+wheeboxID+"&userFileUploadedPath=&key_sno="+key_sno;
//                					alert(url);
                					xmlHttpforsub.onreadystatechange=subjectiveResponse;  
                					xmlHttpforsub.open("GET",url,true);
                					xmlHttpforsub.send(null);
                				}
                			}else{
                				alert(jsonObj[49095]+id.length);
                			}
                			//  else
                			// alert("Please reduce charactor...You text is truncated."+id.length);


                			//url=url+"?lastQueID="lastQueID+"&lastANS="+document.getElementById(lastvalue).value;
                			// alert(url);               


                		}catch(e){alert(e);}


                	
            	}catch(e){
            		alert(e);
            	}
            }     

            function subjectiveResponse()  
        	{
            	try{
            	     
            	    if (xmlHttpforsub.readyState==4 || xmlHttpforsub.readyState=="complete")
            	    {        
            	    	var data = xmlHttpforsub.responseText;     
            	    	 var splitData=data.split("$");
//            	    	 alert(splitData[1]+"--"+testIsSubimiting+"--"+autosubmit);   
            	    	if(splitData[1]=="Done"){
            	    		      
            	    		if(autosubmit==true){
	            	    		lastsub_check = true; 
	            	    		testImagedone()
            	    		}else if(testIsSubimiting==true){//alert("testIsSubimiting"); 
                	    		lastsub_check = true; 
                            	submitConfirm(); 
                	    	}else{
                	    		 
                	    	}
            	    	}
            	    }else{
            	    	
            	    }  
            	}catch(e){
            		//alert(e);
            	}
            	
        	}
            
            var mappro = {}; // this variable usesd in programming for storing compiled question
            var codeskeleton={};
            function insertinpproficiency(id,qid){
             //console.log("insertinpproficiency called for : "+id+ " :::::  "+qid);
            	try{
                	var QUESNO=document.getElementById("QUESNO"+qid).value;
                	if(id!=""){
                  /* if(QUESNO in mappro){
                		}else{*/
                			var compilerselected=document.getElementById('doc').value;
                			if(compilerselected in codeskeleton){
                				 var codeskeletoncode=codeskeleton[compilerselected];
                     			//console.log("codeskeleton in cache : "+codeskeletoncode);	
                     			//console.log("user code in cache : "+id);	
                     			if(id!=codeskeletoncode){ 
                   					//console.log("cache code dos't match saving code to server");
                   				    //console.log("codeskeleton in if cache : "+codeskeletoncode);	
                         			//console.log("user code in if cache : "+id);	
                    			var xmlHttpforpro=GetXmlHttpObject();
                    			if (xmlHttpforpro==null)
                    			{ 
                    				alert ("Browser does not support HTTP Request");
                    				return
                    			} 
                    			var url="programmingsave.obj";
                    			xmlHttpforpro.open("POST",url,false);
                    			xmlHttpforpro.send("codeText="+encodeURIComponent(id)+"&qid="+qid+"&appand=no&quesno="+QUESNO);
                    			configureprogrammingquestion(id,qid);
                   				}else{
                   				//console.log("in else skipping quesiton");
                   				//console.log("codeskeleton in cache : "+codeskeletoncode);	
                         		//console.log("user code in cache : "+id);	
                   				}
                     			
                			}else{
                			 getprogrammingcodeAjax(compilerselected,id,qid);

                			}
                		}	
//                	}
                }
                catch(e){
                	//alert(e);            	
                	console.log(e);
                }
                
            
            }   
            function configureprogrammingquestion(programmingAns,qid){
            	try {
            	var currentQuestion=qid;
            	if(programmingAns!=""){
             		
            		 var flagvalue=document.getElementById("flag"+currentQuestion).value;
                       if(flagvalue=="flag"){
	                      document.getElementById("butt"+currentQuestion).style.background="#DC143C";
                         } 
                       else {
	                   document.getElementById("butt"+currentQuestion).style.background="#7fd895";
                       document.getElementById("butt"+currentQuestion).style.color="white";
                     } 
            	}
               
               if(document.getElementById("comp_code").value != '0188000'){
               	document.getElementById("user_ans"+currentQuestion).value = programmingAns ;
               }
           	document.getElementById(currentQuestion).value = programmingAns ;	
            	}
            	catch(e) {
            		var currentQuestion=qid;
                	if(programmingAns!=""){
                 		
                		 var flagvalue=document.getElementById("flag"+valueOTH).value;
                           if(flagvalue=="flag"){
	                           document.getElementById("butt"+valueOTH).style.background="#DC143C";
                             } 
                           else{
	                         document.getElementById("butt"+valueOTH).style.background="#7fd895";
                              document.getElementById("butt"+valueOTH).style.color="white"; 
                            } 
                	}
                   
                   if(document.getElementById("comp_code").value != '0188000'){
                   	document.getElementById("user_ans"+currentQuestion).value = programmingAns ;
                   }
               		document.getElementById(currentQuestion).value = programmingAns ;
                	
            	}
            }
            function insertinSqlResp(userSqlQueryResp,currentQuesIndex){
            	try{
            		var noOfSqlExecuteFinal = "";
            		document.getElementById("user_ans"+currentQuesIndex).value = userSqlQueryResp ;
                	var QUESNO=document.getElementById("QUESNO"+currentQuesIndex).value;
                	var domainName= document.getElementById('domainName').value;
                    var testName= document.getElementById('exam_name').value;
                    var noOfSqlExecuteFinal = document.getElementById('noOfSqlExecute'+currentQuesIndex).value;
                    var sqlRespIsInsert = document.getElementById('sqlRespIsInsert'+currentQuesIndex).value;
                    document.getElementById('sqlRespIsInsert'+currentQuesIndex).value='update';
                    if(userSqlQueryResp!=""){
                  		var xmlHttpforpro=GetXmlHttpObject();
                			if (xmlHttpforpro==null)
                			{
                				alert ("Browser does not support HTTP Request");
                				return
                			}
                			var url="sqlScriptSave.obj?codeText="+encodeURIComponent(userSqlQueryResp)+"&compilerfor=sql&quesno="+QUESNO+"&queID="+currentQuesIndex+"&domainName="+domainName+"&testName="+testName+"&noOfSqlExecuteFinal="+noOfSqlExecuteFinal+"&sqlRespIsInsert="+sqlRespIsInsert;
//                			alert(url);
                			xmlHttpforpro.open("GET",url,false);
                			xmlHttpforpro.send(null);
                	}
                }
                catch(e){
                	//alert(e);            	
                }
            }
            
            function callingparentforsub(flag,value){
            	try{
            		if(flag=="4"){
//            			var subjectiveAns = nicEditors.findEditor('option').getContent();
            			var subjectiveAns = tinymce.get('option').getContent();
            			var allowUserToUploadFile = document.getElementById("allowUserToUploadFile").value;
            			
                 	   if(subjectiveAns != ""){
                 		  var subjectiveAnsWiris = tinymce.get('option').getBody().innerHTML;
                 		  document.getElementById(value).value = encodeURIComponent(subjectiveAnsWiris) ;
                 		 document.getElementById('user_ans_if_text'+value).innerHTML=encodeURIComponent(subjectiveAnsWiris);
                 		   //insertinUser_response(subjectiveAns,value);
                 		
                 		  var subAns = "SubjectiveAttempted";
	                      document.getElementById("user_ans"+value).value = subAns;
                          
            		
	                 	  var flagvalue=document.getElementById("flag"+value).value;
	                      if(flagvalue=="flag"){
		                     document.getElementById("butt"+value).style.background="#DC143C";
	                       } 
	                      else {
		                     document.getElementById("butt"+value).style.background="#7fd895";
                             document.getElementById("butt"+value).style.color="white";
	                      }  
                 	   }else if(subjectiveAns.trim() == '' && allowUserToUploadFile == 1){
                 		  checkIsImageUploaded(value);
                 	   }else{
                 		  
                 		  tinymce.get('option').setContent('');
                     	 document.getElementById('user_ans_if_text'+value).innerHTML=subjectiveAns;
                     	document.getElementById("butt"+value).style.background="#808080";
                 	  var subAns = " ";
                      document.getElementById("user_ans"+value).value = subAns;
                      document.getElementById(""+value).value = subAns;
                       }
//                 	  nicEditors.findEditor('option').setContent("");
                 	  tinymce.get('option').setContent("");
            		
                 	  
            		}
            		 
            	}catch(e){/*ignore*/  }
            }
            
            // adding method for subjective last question submission START HERE
            function callingparentforsub_lastques(flag,value){
            	try{
            		
            		if(flag=="4"){
            			var subjectiveAns = tinymce.get('option').getContent();
                 	   if(subjectiveAns != ""){
                 		  var subjectiveAnsWiris = tinymce.get('option').getBody().innerHTML;
                 		  document.getElementById(value).value = encodeURIComponent(subjectiveAnsWiris) ;
                 		
                 		   //insertinUser_response(subjectiveAns,value);
                 		
                 		  var subAns = "SubjectiveAttempted";
	                      document.getElementById("user_ans"+value).value = subAns;
	                      if(autosubmit==true){
	            	    		lastsub_check = true; 
	            	    		testImagedone()
        	    		}else if(testIsSubimiting==true){//alert("testIsSubimiting"); 
              	    		lastsub_check = true; 
                          	submitConfirm(); 
              	    	}
	                 	  var flagvalue=document.getElementById("flag"+value).value;
	                      if(flagvalue=="flag"){
		                       document.getElementById("butt"+value).style.background="#DC143C";
	                        } 
	                      else {
		                      document.getElementById("butt"+value).style.background="#7fd895";
                              document.getElementById("butt"+value).style.color="white"; 
	                        }
                 	   }
                 	   else
                 		   {
                 		   var subAns = " ";
	                       document.getElementById("user_ans"+value).value = subAns;
	                       document.getElementById("option").value = "";
	                     	 document.getElementById('user_ans_if_text'+value).innerHTML=subjectiveAns;
	                     	document.getElementById("butt"+value).style.background="#808080";
	                     	document.getElementById(""+value).value = subAns;
                 		     if(autosubmit==true){
	            	    		lastsub_check = true; 
	            	    		testImagedone()
          	    		}else if(testIsSubimiting==true){//alert("testIsSubimiting"); 
                	    		lastsub_check = true; 
                            	submitConfirm(); 
                	    	}
                 		   }
                 	  tinymce.get('option').setContent("");
                 	  document.getElementById("option").value = "";
                 	
                 	  
            		}
            		 
            	}catch(e){/*ignore*/  }
            	
            }
            // adding method for subjective last question submission END HERE
            
            function callingparentforspro(flag){
            	try{
            		
//            		alert("yoyo"+flag);
            		if(flag=="5"){
            			
                        //var programmingAns = document.getElementById('optionT').value;
            			var programmingAns = editor.getValue();
            			//alert(programmingAns); 
            			currentQuestion=document.getElementById('hid').value; //current question index
            			//asdcasdc
            			
                        
                    	insertinpproficiency(programmingAns,currentQuestion);
                    	//alert("programmingAns :"+programmingAns);
                    	//document.getElementById("optionT").value = "";
                    	//editor.setValue("");
                    	//editableCodeMirror.refresh();
                    	  
                    	document.getElementById('output').value = "";
                     		}  
            	}catch(e){/*ignore*/ alert("js--"+e)}
            }
            function callingparentforsSql(flag){
            	try{
            		
//            		alert("yoyo"+flag);
            		if(flag=="25"){
            			
                        var userSqlQueryResp = document.getElementById('SqlOptionT').value;
                        var currentQuesIndex = document.getElementById('hid').value; //current question index
                        if(userSqlQueryResp!=""){
                        	 insertinSqlResp(userSqlQueryResp,currentQuesIndex);
                     		 var flagvalue=document.getElementById("flag"+currentQuesIndex).value;
                                if(flagvalue=="flag"){
	                              document.getElementById("butt"+currentQuesIndex).style.background="#DC143C";
                                   } 
                                else{
	                               document.getElementById("butt"+currentQuesIndex).style.background="#7fd895";
                                   document.getElementById("butt"+currentQuesIndex).style.color="white";
                                 }  
                     	}
                        document.getElementById("user_ans"+currentQuesIndex).value = userSqlQueryResp ;
                       
                    	document.getElementById("SqlOptionT").value = "";
                    	document.getElementById('sqlOutput').innerHTML = "";
                     		}
            	}catch(e){/*ignore*/}
            }
            var randomnumberkforkey;
            function encryptkey(){
            	try{
            		randomnumberkforkey = Math.floor((Math.random() * 10) + 1);
             var mykey=document.getElementById('email').value;
            var slpitkey=mykey.split("");
            var incriptedval="";
            for(var i=0;i<slpitkey.length;i++){
            	//alert(slpitkey[i].charCodeAt(0)+2);            	
            	//alert(String.fromCharCode(slpitkey[i].charCodeAt(0)+2));
            	incriptedval=incriptedval+String.fromCharCode(slpitkey[i].charCodeAt(0)+randomnumberkforkey);            	
            } 

            
            	}catch(e){alert(e+"  --- eee ");}
            	 return incriptedval;
            }

 function showjalertmsg(msg){
	 swal("Warning !!",msg,"error");
//            	swal(msg);
            }
 
var allowtogo=true; 
var showWindowExitPopupFN = function closeIt()
             {
             
	             var showWindowExitPopup = document.getElementById("showWindowExitPopup").value;
	             console.log("showWindowExitPopup:--"+showWindowExitPopup);
	             if(showWindowExitPopup == null || showWindowExitPopup == undefined || showWindowExitPopup == "true" || showWindowExitPopup == true || showWindowExitPopup === "true") {
	             	if(allowtogo){
	             		mainchekingforcheeet1=true;
	             		console.log("If you close the test window during the test, your test will not be submitted.");
	               		return "If you close the test window during the test, your test will not be submitted.";
	             	}else {
	             		console.log("If you close the test window during the test, TRYING FALSE");
	             		return null;
	             	}
	             }else {
	             	console.log("EXITPOPUP IS FALSE");
	             	return null;
	             }
             }
            	window.onbeforeunload = showWindowExitPopupFN;
 
 
             function startrecording(){
             		try{
            		document.getElementById("vivapleaswait").style.display='block';
            		document.getElementById("camera").style.display='block';
            		document.getElementById('startrecording').style.display='none';//alert(urlmyframeviva);
            		document.getElementById('myframeviva').src=urlmyframeviva;
             		}catch(e){
             			
             		}     
            		 
            	}
            	function stoprecording(){
            		var targateofifram='';
            		
            		 
            		 swal({
            			 title: "Are you sure?",
            			 text: "You have recorded the answer to your question. You can not change it later!",
            			 type: "warning",
            			 showCancelButton: true,
            			 confirmButtonColor: "#DD6B55",
            			 confirmButtonText: "Yes, Save it!",
            			 closeOnConfirm: false 
            			 },
            			 function(){   
            					document.getElementById("camera").style.display='none';
            				 document.getElementById('myframeviva').src='';
            				 //document.getElementById('startrecording').style.display='none';
            					document.getElementById('questionattemtstatus').style.display='block';	
            					document.getElementById('stoprecording').style.display='none';	
            				 swal("Saved!", "You can move to the next question.", "success"); 
            				 });
            		 
            		 
            		 
            		 
            	} 
            	//startrecording();   
            	function showAudioClips(visibleDivId,audioList){
            		//var visibleDivId = "iframe"+value;
                  	var i,  div;
        		      for(i = 0; i < audioList.length; i++) {
        		          divId = audioList[i];
        		          div = document.getElementById(divId);
        		          if(visibleDivId === divId) {
        		            div.style.display = "block";
        		          } else {
        		            div.style.display = "none";
        		          }
        		      }
            	}
            	
//            	Adding function to zoom-in and zoom-out for images on 13-06-2016
            	
            	var previous=0;

            	function zoom_IMG(id)
            	{
            		
            		     var s = id.width;
            		     var h = id.height;
            		   
            		     if(previous!=id.width){ 
            		    	  s = s*2;
            		    	  h = h*2; 
            		    	 $('#'+id.name).width(s).height(h);
            		    	
            		    
            		     $('#'+id.name).css({'cursor':'zoom-out'});
            		     previous=s; 
            	          }
            		     else if(previous ==s)
            		     {
            		    	 s = s/2;
            		    	 h = h/2; 
            		    	 $('#'+id.name).width(s).height(h);
            		    	 $('#'+id.name).css({'cursor':'zoom-in'});
            		    	
            			     previous=0;
            		   
            		     }
            	}
            	
            	// added the code IOCL numerical value validation limit START HERE
            	function checknumerical(chvv)
            	{ 
            		
            		 var chechvalue = document.getElementById(chvv).value;
            		 
            		
            		
            		  if(chechvalue == 0){
            		 swal("Please enter value between 1 to 10.");
            		 document.getElementById(chvv).value="";
            		 }
            		 else if(chechvalue > 10){
            		 swal("Please enter value between 1 to 10.");
            		 document.getElementById(chvv).value="";
            		 }
            		 else if(chechvalue.toString().indexOf('.') != -1){
            			 swal("Please don't enter decimal value.");
                		 document.getElementById(chvv).value="";
            		 }
            		 else  if (isNaN(chechvalue))
          			{
            			 swal("Please enter numeric value.");
                			document.getElementById(chvv).value="";
          			
          			}
            		 
            	}
            	
            	// added the code for IOCL numerical value validatiion limit END HERE
            	
            	//Programming Methods
            	
                var xmlHttp9; 	
                function seteditorssnipit(compiler){
             	   
           try{
          	   //console.log("seteditorssnipit : "+compiler);
         	   
         	   var urlforcompiler="demo/kitchen-sink/docs/";
         	  if(compiler=="C++"){
        		   urlforcompiler=urlforcompiler+ "c_cpp.cpp";
        	   }else if(compiler=="C"){
        		   urlforcompiler=urlforcompiler+ "c_c.c";
        	   }else if(compiler=="C#"){
         		   urlforcompiler=urlforcompiler+ "csharp.cs";
         	   }else if(compiler=="Objective-C"){
         		   urlforcompiler=urlforcompiler+ "c_c.c";
         	   }else if(compiler=="Python"){
         		   urlforcompiler=urlforcompiler+ "python.py";
         	   }else if(compiler=="R"){
         		   urlforcompiler=urlforcompiler+ "r.r";
         	   }else if(compiler=="Ruby"){
         		   urlforcompiler=urlforcompiler+ "ruby.rb";
         	   }else if(compiler=="Java"){
         		   urlforcompiler=urlforcompiler+ "java.java";
         	   }else if(compiler=="PHP"){
         		   urlforcompiler=urlforcompiler+ "php.php";
         	   }else if(compiler=="JavaScript"){
         		   urlforcompiler=urlforcompiler+ "javascript.js";
         	   }else if(compiler=="Scala"){
         		   urlforcompiler=urlforcompiler+ "scala.scala";
         	   }else if(compiler=="Typescript"){
         		   urlforcompiler=urlforcompiler+ "typescript.ts";
         	   }
         	   
         	  console.log("seteditorssnipit : "+urlforcompiler);
         	  console.log("in set snipit compiler : "+compiler);
       	   
         	   if(compiler!=""){
         		if(compiler in codeskeleton){
         			 
         			//console.log("in cache codeskeleton : "+codeskeleton[compiler]);
         			editor.setValue(codeskeleton[compiler]);
         		}else{
         			if(urlforcompiler!="demo/kitchen-sink/docs/"){
         				
         			xmlHttp9=GetXmlHttpObject();
         			xmlHttp9.onreadystatechange=function() {

         	        	   try{
         	        			 if (xmlHttp9.readyState==4 && xmlHttp9.status == 200)
         	        			    {
         	        			        var data = xmlHttp9.responseText;
         	        			        data=data.trim();
         	        			      //  console.log("settexttoeditor : "+data);
         	        			        codeskeleton[compiler]=data;
         	        			        editor.setValue(data);
         	        			    }
         	        		}catch(e){
         	        			alert(e);
         	        		}
         			}
         				
         				
         				
         			//settexttoeditor(compiler);
         			xmlHttp9.open("GET",urlforcompiler);
         			xmlHttp9.send();
         			
         			}else{
         				var basicskeletom="//write your code here for "+compiler;
         				codeskeleton[compiler]=basicskeletom;
         				editor.setValue(basicskeletom);
         			}
         		}   
         	   
         	   }
           }catch(e){
         	  console.log(e);
           }
                } 	
                   
                function settexttoeditor(compiler){
             	   //console.log("settexttoeditor called : "+compiler);
             	   try{
             			 if (xmlHttp9.readyState==4 || xmlHttp9.readyState=="complete")
             			    {
             			        var data = xmlHttp9.responseText;
             			        data=data.trim();
             			        //console.log("settexttoeditor : "+data);
             			        codeskeleton[compiler]=data;
             			        editor.setValue(data);
             			    }
             		}catch(e){
             			alert(e);
             		}
                } 
                 var xmlHttp10; 
                function getprogrammingcodeAjax(compiler,id,qid){
             	   console.log("getprogrammingcodeAjax called" + compiler +":::::"+id+":::::"+qid);
             	   try{
             	   var urlforcompiler="demo/kitchen-sink/docs/";
             	   if(compiler=="C++"){
             		   urlforcompiler=urlforcompiler+ "c_cpp.cpp";
             	   }else if(compiler=="C"){
             		   urlforcompiler=urlforcompiler+ "c_c.c";
             	   }else if(compiler=="C#"){
             		   urlforcompiler=urlforcompiler+ "csharp.cs";
             	   }else if(compiler=="Objective-C"){
             		   urlforcompiler=urlforcompiler+ "c_c.c";
             	   }else if(compiler=="Python"){
             		   urlforcompiler=urlforcompiler+ "python.py";
             	   }else if(compiler=="R"){
             		   urlforcompiler=urlforcompiler+ "r.r";
             	   }else if(compiler=="Ruby"){
             		   urlforcompiler=urlforcompiler+ "ruby.rb";
             	   }else if(compiler=="Java"){
             		   urlforcompiler=urlforcompiler+ "java.java";
             	   }else if(compiler=="PHP"){
             		   urlforcompiler=urlforcompiler+ "php.php";
             	   }else if(compiler=="JavaScript"){
             		   urlforcompiler=urlforcompiler+ "javascript.js";
             	   }else if(compiler=="Scala"){
             		   urlforcompiler=urlforcompiler+ "scala.scala";
             	   }else if(compiler=="Typescript"){
             		   urlforcompiler=urlforcompiler+ "typescript.ts";
             	   }
             	   
             	   if(compiler!=""){
             		   xmlHttp10=GetXmlHttpObject();
             		   xmlHttp10.onreadystatechange=function() {
                			if (this.readyState == 4 && this.status == 200) {
                				codeskeleton[compiler]=xmlHttp10.responseText.trim();
//                				console.log("getprogrammingcodeAjax response : "+compiler+" : "+codeskeleton[compiler]);
                				var codeskeletoncode=codeskeleton[compiler];
                				id=id.trim();
//                			  return this.responseText.trim();
                				
                				if(id!=codeskeletoncode){
                					//console.log("code dos't match saving code to server");
                					//console.log("skeleton in  if:"+codeskeletoncode);
                					//console.log("user code in if:"+id);
                				var QUESNO=document.getElementById("QUESNO"+qid).value;	
                 			var xmlHttpforpro=GetXmlHttpObject();
                 			if (xmlHttpforpro==null)
                 			{
                 				alert ("Browser does not support HTTP Request");
                 				return
                 			} 
                 			var url="programmingsave.obj?codeText="+encodeURIComponent(id)+"&qid="+qid+"&appand=no&quesno="+QUESNO;
                 			xmlHttpforpro.open("GET",url,false);
                 			xmlHttpforpro.send(null);
                 			configureprogrammingquestion(id,qid);
                				}else{
                			    //console.log("code matched skiping question");	
                				//console.log("skeleton in else:"+codeskeletoncode);
                    		    //console.log("user code in else:"+id);
                				}
                				
                				
                		  }
                		} 
                		console.log("urlforcompiler : "+urlforcompiler);
                		xmlHttp10.open("GET",urlforcompiler);
                		xmlHttp10.send();
                	   
                	   }
             	   
                }catch(e){
              	  console.log(e);
                } 
                }
                
                
                function restoreeditoroption(programmingAns){
             	   console.log("restoreeditoroption  : ");
             	   console.log("programmingAns : "+programmingAns);
             	   try{
             		   
             		   editor.setValue(decodeURIComponent(programmingAns));
             	   }catch(e){ 
             		   console.log(e);
             		   editor.setValue(programmingAns);
             	   }
             	 
             	   
                }
                function storecompilernamefunc(){/*
             	   var compilerfor=document.getElementById('doc').value;
             	   
     				console.log("storecompilernamefunc called : "+compilerfor);

             		try{ 
             			if(compilerfor!=""){
             				
             			 var currentquestion=document.getElementById('hid').value; //current question index
             			 console.log("currentquestion : "+currentquestion);
     					 console.log("adding in storecompilername 2 :"+currentquestion+" "+compilerfor);	
     					 storecompilername[currentquestion]= compilerfor;
     					 console.log(storecompilername);
     						setTimeout(function(){ seteditorssnipit(compilerfor); }, 200); 

     						console.log(storecompilername);
             			 
             			}
             		}catch(e){
             			console.log(e);
             		}
             	  */}  
                function setstorecompilernamefunc(){
//             	   console.log("setstorecompilernamefunc called : ");
//           		try{ 
//             			
//             				
//             			 var currentquestion=document.getElementById('hid').value; //current question index
//             			 if(currentquestion in storecompilername){
//             				 document.getElementById('doc').value=storecompilername[currentquestion];
//             				 document.getElementById('mode').value=storecompilername[currentquestion];
//             			 }
//             			 
//             		
//             		}catch(e){
//             			console.log(e);
//             		}
             	  } 
                
                var showinfoforprogramming=true;
                var showinfoforprogrammingeach=true;
            
                
                function ischeckcodechecged(){
             	   
             	   try{

                 	   
                 	   var compiler=document.getElementById('doc').value;
                 	   console.log("ischeckcodechecged : "+compiler);
                 	   console.log(codeskeleton);
                 	    
                 	   var urlforcompiler="demo/kitchen-sink/docs/";
                 	   if(compiler=="C++"){
                		   urlforcompiler=urlforcompiler+ "c_cpp.cpp";
                	   }else if(compiler=="C"){
                		   urlforcompiler=urlforcompiler+ "c_c.c";
                	   }else if(compiler=="C#"){
                 		   urlforcompiler=urlforcompiler+ "csharp.cs";
                 	   }else if(compiler=="Objective-C"){
                 		   urlforcompiler=urlforcompiler+ "c_c.c";
                 	   }else if(compiler=="Python"){
                 		   urlforcompiler=urlforcompiler+ "python.py";
                 	   }else if(compiler=="R"){
                 		   urlforcompiler=urlforcompiler+ "r.r";
                 	   }else if(compiler=="Ruby"){
                 		   urlforcompiler=urlforcompiler+ "ruby.rb";
                 	   }else if(compiler=="Java"){
                 		   urlforcompiler=urlforcompiler+ "java.java";
                 	   }else if(compiler=="PHP"){
                 		   urlforcompiler=urlforcompiler+ "php.php";
                 	   }else if(compiler=="JavaScript"){
                 		   urlforcompiler=urlforcompiler+ "javascript.js";
                 	   }else if(compiler=="Scala"){
                 		   urlforcompiler=urlforcompiler+ "scala.scala";
                 	   }else if(compiler=="Typescript"){
                 		   urlforcompiler=urlforcompiler+ "typescript.ts";
                 	   }
                 	   
                 	  // console.log("seteditorssnipit : "+urlforcompiler);
                 	   
                 	   if(compiler!=""){
                 		   if(compiler in codeskeleton){
                 			   var programmingAns = editor.getValue();   
                 			   var codeskeletoncode=codeskeleton[compiler];
                 			   if(programmingAns != codeskeletoncode ){
                 				   if(showinfoforprogrammingeach){
                 					   swal("Information !!","If you change the compiler from drop down, the code you have written so far will lost, and the coding skeleton of newly selected compiler will appear in the coding editor area.","info");
                 		        		
                 					   showinfoforprogrammingeach=false;
                 					   
                 				   }
                 			   }else{
                 				   console.log("programmingAns : "+programmingAns);
                 				   console.log("codeskeletoncode : "+codeskeletoncode);
                 				   
                 			 	   
                 			   }
                 		   }
                 		   
                 	   }
                    
             	   }catch(e){
             		   console.log(e);
             	   }
                }
                function changingcompiler(){
             	   if(showinfoforprogramming){
             		   swal("Information !!","Please remember, once you select a compiler and start writing a code you should not change your compiler in between. You may loose your code if you change compiler in between.","info");
             		   showinfoforprogramming=false;
             	   }else{
             		   
             		   ischeckcodechecged();
             	   }
                
             	   
                }
                 	// added the code for IOCL numerical value validatiion limit END HERE
            	
                function audioParenwtWindowFocus() {
            		document.getElementById("regainWindowFocus").focus();
            	}
            	
                function showMyCurrentScore(value) {
                	try{
                	var useransselected = document.getElementById("user_ans"+value).value;
                	var getoptionMarks;
                		if(useransselected == "a") {
                			getoptionMarks = document.getElementById('psop1max').value;
                		}else if(useransselected == "b") {
                			getoptionMarks = document.getElementById('psop2max').value;
                		}else if(useransselected == "c") {
                			getoptionMarks = document.getElementById('psop3max').value;
                		}else if(useransselected == "d") {
                			getoptionMarks = document.getElementById('psop4max').value;
                		}else if(useransselected == "e") {
                			getoptionMarks = document.getElementById('psop5max').value;
                		}else if(useransselected == "f") {
                			getoptionMarks = document.getElementById('psop6max').value;
                		}
                		var getALSLSL = getoptionMarks.split("|");
                		//console.log(comp_code+"@@@@"+useransselected+"=="+value+"=="+getALSLSL[value]+"----"+getALSLSL);
                		var myoldscore = $("#mycurrentScore").text();
                		var myobtainedscore = getALSLSL[value];
                		var myfinalscore = parseInt(myoldscore) + parseInt(myobtainedscore);
                		$("#mycurrentScore").text(myfinalscore);
                		}catch(e){alert(e.lineNumber+"----"+e);}
                }
                
                
              //Upload File AJAX
                function uploadDOCXFile(allowedFileTypes) {
                    //event.preventDefault();
                    $("#form").attr("enctype", "multipart/form-data");
                    document.getElementById("documentTypeFileRespMsg").innerHTML = ("");
                    var browseUploadfileInput =  document.getElementById('documentTypeFile'); 
              		var browseUploadfilePath = browseUploadfileInput.value;
              		allowedFileTypes = allowedFileTypes.split(",");
              		var fileValidity = false;
              		for(i = 0 ; i < allowedFileTypes.length; i++) {
              			if(!fileValidity && browseUploadfilePath.endsWith(allowedFileTypes[i])) {
              				fileValidity = true;
              			}
              		}
              		if (!fileValidity) {
						swal('You are trying to upload invalid file type, kindly check and retry!');
						document.getElementById("documentTypeFileRespMsg").innerHTML = ("Allowed file types are:- "+allowedFileTypes);
						browseUploadfileInput.value = '';
						return false;
					}else {
                      var compCode = document.getElementById("comp_code").value;
                	  var keySno = document.getElementById("key_sno").value;
                	  var wheeboxID = document.getElementById("wheeboxID").value;
                	  var testNo = document.getElementById("testno").value;
                	  var TestStartTime=document.getElementById('TestStartTime').value;
                	  var currentQuestion = parent.document.getElementById('hid').value;
                	  var quesId = document.getElementById("QUESNO"+currentQuestion).value;
                	  var section = document.getElementById("section"+currentQuestion).value;
                	  var fileName = document.getElementById('documentTypeFile').files[0].name;
                      var data = new FormData(form);
                      data.append("currentSectionTemp", section);
                      data.append("currentQuesId", quesId); 
                    $.ajax({
                        type: "POST",
                        enctype: 'multipart/form-data',
                        url: "uploadUserTestFiles.obj",
                        data: data,
                        processData: false,
                        contentType: false,
                        cache: false,
                        timeout: 600000,
                        success: function (data) {
                            console.log("SUCCESS : ", data);
                            if(data.startsWith("Successfull")) {
                            	document.getElementById("documentTypeFileRespMsg").innerHTML = ("Your file with file name '"+fileName+"' has been uploaded successfully");
                                $("#form").removeAttr("enctype");
                            	var dataajaxresp = data.split(",");
                            	document.getElementById("user_ans"+document.getElementById('hid').value).value = "SubjectiveAttempted";
                            	if(tinymce.get("option").getContent() == "") {
                            		document.getElementById("user_ans_if_text"+document.getElementById('hid').value).value = "Only File Uploaded!";
                            		tinymce.get("option").setContent("<p style='color: #000'>No Text Only File!</p>", {format: 'raw'});
                            	}
                            	var fileurl = "https://qr.wheebox.com/static/wheeboxtestFiles/"+document.getElementById("comp_code").value+"_"+document.getElementById("testno").value+"/"+dataajaxresp[1];
                            	document.getElementById("user_filePath"+document.getElementById('hid').value).value = fileurl;
//                            	document.getElementById("documentTypeFileDownload").style.display="block";
//                            	document.getElementById("documentTypeFileRemove").style.display = "block";
//	                            $("#documentTypeFileDownload").removeAttr("href");
//	                            $("#documentTypeFileDownload").attr("href", fileurl);
                                swal("Your file with file name '"+fileName+"' has been uploaded successfully");
	                            document.getElementById("butt"+document.getElementById('hid').value).style.background="#7fd895";
                                document.getElementById("butt"+document.getElementById('hid').value).style.color="white";
	                            console.log(document.getElementById("hid").value+"####@@@@"+document.getElementById("user_filePath"+document.getElementById('hid').value).value);
                            }else {
                            	swal("Please try again! Unable to upload file.");
                                $("#form").removeAttr("enctype");
                                document.getElementById("butt"+document.getElementById('hid').value).style.background="#7fd895";
                                document.getElementById("butt"+document.getElementById('hid').value).style.color="white";
                                console.log(document.getElementById("hid").value+"####@@@@"+document.getElementById("user_filePath"+document.getElementById('hid').value).value);
                            }
                        },
                        error: function (e) {
                            $("#form").removeAttr("enctype");
                            console.log("ERROR : ", e);
                            swal("Please try again! Unable to upload file.");
                            document.getElementById("butt"+document.getElementById('hid').value).style.background="#7fd895";
                            document.getElementById("butt"+document.getElementById('hid').value).style.color="white";
                        }
                    });
                    }
                    //document.getElementById("documentTypeFile").value="";
                }
                
                
                
    /* function and variable for showing instruction for question Instruction */           
                var continueSec = 60;
                var timeOutId;
                var showTimeId;
                
                var timeoutIdForRepeatImage;
                var isQuestionshownForRepeatImage;
                
                function showQuestion(){
                	isSecTimePaused = false;
                	/*document.getElementById("secTimeDiv").innerHTML = "";*/
                	
                	$("#continueButton").html("Start");
   	        	   document.getElementById("ques_instruction").style.display = "none"; 
   	        	   
   	        	   console.log("ShowQuestion Function is called");
   	        	   document.getElementById("wet_div_main").style.display = "block";
   	        	   document.getElementById("footerDIV").style.display = "block";
   	        	   
   	        	   clearInterval(showTimeId);
   	        	   
   	        	   clearTimeout(timeOutId);
   	        	
   	        	    var hidvalue = document.getElementById("hid").value;
   	        	  
   	           }
   	      
                
   	           function showTime(){
   	        	  
   	        	   console.log("In show Time function");
   	        	   
   	        	   if(continueSec <= 0){
   	        		$("#continueButton").html("Please Wait!");
   	        	   }else{
   	        		 $("#continueButton").html("Start In " + continueSec);
   	        		continueSec--;
   	        	   }
   	        	  
   	           }
   	           
   	           
   	        function recalculateattemptdetails(value){
   	        	//sectiondetail[document.getElementById("section"+value).value].attemped=
   	        	  // alert("attemptdetails length : "+Object.keys(attemptdetails).length ); 
   	        	sectiondetail[document.getElementById("section"+value).value].attemped=0; 
   	        	for (var i in attemptdetails) {
   	        		//console.log("attemptdetails key: "+i+" val : "+attemptdetails[i]);
   	        	
   	        	 if(document.getElementById("section"+value).value==document.getElementById("section"+i).value){
   	        		 sectiondetail[document.getElementById("section"+value).value].attemped++; 
   	        		 
   	        	 }
   	        	}
   	        	//alert(Object.keys(attemptdetails).length);
   	        	//sectiondetail[document.getElementById("section"+value).value].attemped=Object.keys(attemptdetails).length;
   	        	for (var key in sectiondetail) {
   	        	  if (sectiondetail.hasOwnProperty(key)) {
   	        	    var val = sectiondetail[key];
   	        	    //console.log("sectiondetail : key : "+key +" : "+val.MaxAllowedtoAttempt+" : "+val.attemped  );
   	        	  }
   	        	}
   	           }
   	        function checkmaxallowdattempt(){
   	        	var hidvalue = document.getElementById("hid").value;
   	         if(getAns()!=""){
                 attemptdetails[hidvalue]= "A"; 
                 recalculateattemptdetails(hidvalue); 
                     }else{
                   delete attemptdetails[hidvalue];
                  	   recalculateattemptdetails(hidvalue); 
                     }
             if(sectiondetail[document.getElementById("section"+hidvalue).value].MaxAllowedtoAttempt < sectiondetail[document.getElementById("section"+hidvalue).value].attemped){
                                                 	
                  showMessage(jsonObj[49044]);
                  clrearResponse();
             }
   	        }
   	              	           
   	        function languageDropdownChanged() {
    			var newLanguage = this.options[this.selectedIndex].value;
    			if (!newLanguage || newLanguage === "")
    				newLanguage = 'pramukhime:english';
    			// set new script
//    			document.getElementById('drpLanguage').value = "pramukhindic:bengali";
    			var lang = newLanguage.split(':');
    			pramukhIME.setLanguage(lang[1], lang[0]);
    		}
   	           
function incrementAttemptValue(qFlag, value) {
	var MaxAllreadyAttempt=parseInt(document.getElementById("MaxAllreadyAttempt").value);
	if(qFlag == "13") {
		//console.log(value+"==Current Value==ATTEMPTCURRENTVALUE IS:-"+MaxAllreadyAttempt+"====USERANSWER IS:-["+document.getElementById("user_typedans"+value).value+"]")
		if(document.getElementById("user_ans"+(value)).value!="" && !attemptedQuesSNO.includes("["+value+"]")){
			//console.log(qFlag+"====incrementAttemptValue called");
			document.getElementById("MaxAllreadyAttempt").value=parseInt(MaxAllreadyAttempt+1);
			attemptedQuesSNO.push("["+value+"]");
		}else {
			//console.log(qFlag+"====incrementAttemptValue not called");
		}
	}else {
		//console.log(value+"==Current Value==ATTEMPTCURRENTVALUE IS:-"+MaxAllreadyAttempt+"====USERANSWER IS:-["+document.getElementById("user_ans"+value).value+"]")
		if(document.getElementById("user_ans"+value).value==""){
			//console.log(qFlag+"====incrementAttemptValue called");
			document.getElementById("MaxAllreadyAttempt").value=parseInt(MaxAllreadyAttempt+1);
		}else {
			//console.log(qFlag+"====incrementAttemptValue not called");
		}
	}
}
function validateMyLength(elementReference, lengthLimit) {
	if($(elementReference).val().length >= lengthLimit) {
    	$(elementReference).val($(elementReference).val().substring(0, lengthLimit));
    	alert("Max character limit exceeded, it should be less than "+lengthLimit);
    }
}
function checkNumericInput(inputElementID) {
	var inputAnswer = document.getElementById(inputElementID).value;
    var compCode = document.getElementById("comp_code").value;
	var validationType = null;
	if(compCode == "0290000" || compCode == "0382000") {
		validationType = "uptoTwoDecimalPlaces";
	}else if(compCode == "0972000-A") {
		validationType = "numberWithoutDecimalOnly";
	}
    if(validationType == null || validationType == "") {
    
    }else if(validationType == "uptoTwoDecimalPlaces") {
      if(!(isNaN(inputAnswer))) {
          if(inputAnswer.includes(".")) {
              var str=inputAnswer.split(".")[1];
              if(str.length > 2){
                  document.getElementById(inputElementID).value = "";
                  swal("Please input value upto two decimal places.");
              }
          }
      }
    }else if(validationType == "numberOnly") {
    	if(isNaN(inputAnswer)) {
        	document.getElementById(inputElementID).value = "";
            swal("Please input a valid numerical value.");
    	}else {
    		if(inputAnswer.includes(".")) {
                var str=inputAnswer.split(".")[1];
                if(str.length > 2) {
                    document.getElementById(inputElementID).value = "";
                    swal("Please input value upto two decimal places.");
                }
            }
    	}
    }else if(validationType == "numberWithoutDecimalOnly") {
    	if(isNaN(inputAnswer)) {
        	document.getElementById(inputElementID).value = "";
            swal("Please input a valid numerical value.");
    	}else {
    		if(inputAnswer.includes(".")) {
                document.getElementById(inputElementID).value = "";
                swal("Please input value with no decimal places.");
            }else if(parseInt(inputAnswer) < 0 || parseInt(inputAnswer) > 9) {
                document.getElementById(inputElementID).value = "";
            	swal("Please input value between 0 to 9.");
            }
    	}
    }
}

//06-02-2020 @Abhishek for typing test text limit
function countCharcterOfText(textId,paragraphId,evt){
	var regex = /( |<([^>]+)>)/ig;
	var textValue = escape(document.getElementById(textId).value);
	var paraValue = escape(document.getElementById(paragraphId).value);
	textValue = textValue.replace(regex, "");
	paraValue = paraValue.replace(regex, "");
	//console.log(textValue+"===="+paraValue);
	var textLength = textValue.length;
	var paraLength = paraValue.length;
	//console.log(textLength+"===="+paraLength);
	if(textLength>=paraLength){
		evt.preventDefault();
		document.getElementById(textId).value = unescape(textValue.substring(0, paraLength));
		swal("Information !!","You have attempted the allowed limit of character please click on stop clock","success");
	}
}
function getAllAttemptedCount() {
	var totalQuestions = document.getElementById("totalQuestion").value;
	if(totalQuestions == null || totalQuestions == undefined || totalQuestions.trim() == "") {
		totalQuestions = "0";
	}
	totalQuestions = parseInt(totalQuestions);
	var totalAttempted = 0;
	for(var i = 1; i <= totalQuestions; i++) {
		var user_answer = document.getElementById("user_ans"+i).value;
		//Checking if answer is blank or not
		if(user_answer == null || user_answer == undefined || user_answer.trim() == "") {
			
		}else {
			totalAttempted = totalAttempted + 1;
		}
	}
	return totalAttempted;
}
var testExpired;
function testExpiredCountDown(userBasedTestSettings) {
	var gracePeriodAutoSubmitTest = 0, gracePeriodToResumeTest = null, userEndTime = null;
	if(userBasedTestSettings.hasOwnProperty("gracePeriodAutoSubmitTest")) {
		gracePeriodAutoSubmitTest = parseInt(userBasedTestSettings["gracePeriodAutoSubmitTest"]);
	}
	if(userBasedTestSettings.hasOwnProperty("gracePeriodToResumeTest")) {
		gracePeriodToResumeTest = userBasedTestSettings["gracePeriodToResumeTest"];
	}
	if(userBasedTestSettings.hasOwnProperty("endDate")) {
		userEndTime = userBasedTestSettings["endDate"];
	}
	var key_sno = document.getElementById("key_sno").value;
	testExpired=setInterval(function(){
		StartTestExpiredCount(userEndTime, gracePeriodToResumeTest, key_sno);
	},30000);
}
function StartTestExpiredCount(userEndTime, gracePeriodToSubmitTest, key_sno){
	try {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				var responseOBJ = JSON.parse(this.responseText);
				if(responseOBJ["submitStatus"] == "submit"){
					document.getElementById('submitBy').innerHTML = "GraceDurationAutoSubmit-" + gracePeriodToSubmitTest + ", userEndDate-"+userEndTime;
					testImage();
				}else {
					console.log("submitStatus:--"+responseOBJ["submitStatus"]);
				}
			}
		};
		xhttp.open("POST", "checkGraceAutoSubmitDuration.obj", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("gracePeriodToSubmitTest="+gracePeriodToSubmitTest+"&key_sno="+key_sno);
	}
	catch(e) {
		console.log(e);
	}
}

function checkIsImageUploaded(value){
	console.log("checkIsImageUploaded called...");
	  var compCode = document.getElementById("comp_code").value;
	  var keySno = document.getElementById("key_sno").value;
	  var wheeboxID = document.getElementById("wheeboxID").value;
	  var testNo = document.getElementById("testno").value;
	  var TestStartTime=document.getElementById('TestStartTime').value;
	  var currentQuestion = parent.document.getElementById('hid').value;
	  var quesId = document.getElementById("QUESNO"+currentQuestion).value;
	  var section = document.getElementById("section"+currentQuestion).value;
	  
	  var quesWiseJson = {}; 
	  quesWiseJson["compCode"] = compCode;
	  quesWiseJson["keySno"] = keySno;
	  quesWiseJson["wheeboxID"] = wheeboxID;
	  quesWiseJson["testNo"] = testNo;
	  quesWiseJson["quesId"] = quesId;
	  quesWiseJson["TestStartTime"] = TestStartTime;
	  $.ajax({
	         type: "POST",
	         enctype: 'multipart/form-data',
	         url: "isImageUploaded.obj", 
	         data: JSON.stringify(quesWiseJson),
	         dataType : "json",
	 		 contentType: 'application/json; charset=utf-8',
	         success: function (data) {
	        	if(data == '1'){
	        		subjectiveAns = "Only Image No Text";
	        		document.getElementById(value).value = subjectiveAns ;
            		 document.getElementById('user_ans_if_text'+value).innerHTML=subjectiveAns;
            		  var subAns = "SubjectiveAttempted";
                      document.getElementById("user_ans"+value).value = subAns;
                      var flagvalue=document.getElementById("flag"+value).value;
                     if(flagvalue=="flag"){
	                 document.getElementById("butt"+value).style.background="#DC143C";
                    }else {
	                document.getElementById("butt"+value).style.background="#7fd895";
                     document.getElementById("butt"+value).style.color="white";
                    } 
                     
                     var isMoveToNextQuestion = parent.document.getElementById('hid').value;
                     if(currentQuestion != isMoveToNextQuestion){
                    	 attemptdetails[currentQuestion]= "A";                                   	   
                  	     recalculateattemptdetails(value);
                  	     checkMaxAttemptAgain(isMoveToNextQuestion);
                     }
                     
                     
                     
	        	}else{
	        		 
//           		  tinymce.get('option').setContent('');
//               	 document.getElementById('user_ans_if_text'+value).innerHTML='';
//               	document.getElementById("butt"+value).style.background="#808080";
//           	  var subAns = " ";
//                document.getElementById("user_ans"+value).value = subAns;
//                document.getElementById(""+value).value = subAns;
                 }
      	
	        },
	         error: function (e) {
	        	
	         }
	     });
}

function checkMaxAttemptAgain(value){
	var currentQuestion = value;
		var subjectiveAns = document.getElementById('user_ans_if_text'+value).innerHTML;
//		alert(sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt);
//		alert(sectiondetail[document.getElementById("section"+currentQuestion).value].attemped);
//		alert("A"+subjectiveAns+"A");
		var allowUserToBrowseFile = document.getElementById("allowUserToBrowseFile").value;
		if(subjectiveAns == ""){
		if(sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt <= sectiondetail[document.getElementById("section"+currentQuestion).value].attemped){
//  		  showMessage(jsonObj[49044]);
//  		  document.getElementById('maxAttemptMsg').innerHTML="You are allowed to attempt "+sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt+" question in this section and you have already attempted allowed number of question in this section. Please clear response any one question to attempt this one.";
  		document.getElementById('maxAttemptMsg').innerHTML="You are allowed to attempt only "+sectiondetail[document.getElementById("section"+currentQuestion).value].MaxAllowedtoAttempt+" questions in this section and you have already attempted the allowed number of questions. <br> <br> If you want to attempt any other question, then you will have to clear the response of one of the questions you have already attempted. For clearing the response just go to that particular question and use the button ‘Clear Response’ (on top of the textarea). This will allow you to attempt another question of your choice. ";
  		
//  		tinymce.get('option').hide();
      		document.getElementById("subjectiveDiv").style.display='none';
      		if(allowUserToBrowseFile == "1"){
          		try{
          			if(document.getElementById("uploadUserFile").style.display="block"){
          				document.getElementById("uploadUserFile").style.display='none';
          			}
          		}catch(e){}
      		}
      	}else{
  			document.getElementById("subjectiveDiv").style.display='block';
  			document.getElementById('maxAttemptMsg').innerHTML="";
  			if(allowUserToBrowseFile == "1"){
      			try{
          			if(document.getElementById("uploadUserFile").style.display="none"){
          				document.getElementById("uploadUserFile").style.display='block';
          			}
          		}catch(e){}
  			}
  		}
		}else{
			document.getElementById("subjectiveDiv").style.display='block';
			document.getElementById('maxAttemptMsg').innerHTML="";
			if(allowUserToBrowseFile == "1"){
  			try{
      			if(document.getElementById("uploadUserFile").style.display="none"){
      				document.getElementById("uploadUserFile").style.display='block';
      			}
      		}catch(e){}
			}
		}
}

function getUploadedImageCount(value){
	console.log("getUploadedImageCount called...");
	var a = "0";
	  var compCode = document.getElementById("comp_code").value;
	  var keySno = document.getElementById("key_sno").value;
	  var wheeboxID = document.getElementById("wheeboxID").value;
	  var testNo = document.getElementById("testno").value;
	  var TestStartTime=document.getElementById('TestStartTime').value;
	  var currentQuestion = parent.document.getElementById('hid').value;
	  var quesId = document.getElementById("QUESNO"+value).value;
	  var section = document.getElementById("section"+currentQuestion).value;
	  
	  var quesWiseJson = {}; 
	  quesWiseJson["compCode"] = compCode;
	  quesWiseJson["keySno"] = keySno;
	  quesWiseJson["wheeboxID"] = wheeboxID;
	  quesWiseJson["testNo"] = testNo;
	  quesWiseJson["quesId"] = quesId;
	  quesWiseJson["TestStartTime"] = TestStartTime;
	  $.ajax({
	         type: "POST",
	         enctype: 'multipart/form-data',
	         url: "getUploadedImageCount.obj", 
	         data: JSON.stringify(quesWiseJson),
	         dataType : "json",
	 		 contentType: 'application/json; charset=utf-8',
	         success: function (data) {
	        	try{
	        		var msg = "";
	        		if(data != '0'){
	        			if(data == '1')msg = " image has been uploaded.";
	        			else msg = " images have been uploaded.";
	        			document.getElementById('totalImageUploaded').innerHTML=data+msg;
	        		}
	        	}catch(e){
	        		
	        	}
	         },
	         error: function (e) {
	        	
	         }
	     });
	  return a;
}

function callSubjectiveCheeting() {
	try {
		$( "*" ).addClass("unselectable");
	}
	catch(e) {}
	try {
		document.addEventListener('contextmenu', event => event.preventDefault());
	}
	catch(e) {}
	var navigateStatus=document.getElementById("navig").value;
	if(navigateStatus != 'ON' && isSubjectiveCheetingCalled == false){
	     if (document.hasFocus()) {
//	       console.log("The document has focus.");
	     } else {
//	   	  console.log("The document DOES NOT have focus.===subjectiveInt==="+subjectiveInt);
	   	   isSubjectiveCheetingCalled = true
	   	   if(isSubjectiveCheetingCalled){
	   		   if(subjectiveInt){
	   			clearInterval(subjectiveInt);
	   			onCheeting();
	   	   }
	   	}
	     }
	}
}
function biitsEndTestModal()
{
	debugger;
	var wheeboxID = document.getElementById("wheeboxID").value;
	var key_sno=document.getElementById("key_sno").value;
	var testNo = document.getElementById("testno").value;
	var TestStartTime = "";
	$('#biitsUploadDocumentSummaryModal').modal('show');
	var leftPannel="";
	leftPannel = "<ul class='list-group' id = 'biitsDocumentUploadLeftPannelUl'>";
	for(var i=1;i<ques_no.length;i++)
	{
		var questionSno = ques_no[i];
		$.trim(questionSno);
		console.log("questionSno::"+questionSno);
		var callStatus = "no";	
	if(i==1)
		{
		callStatus = "yes";
		//biitsShowUploadedDocument(questionSno,wheeboxID,key_sno,testNo,TestStartTime,callStatus,i);
		}
	leftPannel+="<li class='list-group-item' style = 'cursor:pointer' onclick=biitsShowUploadedDocument('"+questionSno+"','"+wheeboxID+"','"+key_sno+"','"+testNo+"','"+TestStartTime+"','"+callStatus+"',"+i+");>Question "+(i)+"</li>";
	}
	leftPannel+= "</ul>";
	$("#docuploadSummaryLeftPannel").html(leftPannel);
	
	var biitsLeftUl = document.getElementById('biitsDocumentUploadLeftPannelUl');
	var biitsListItems = biitsLeftUl.getElementsByTagName('li');
	    
	
	// Loop through the NodeList object.
	for (var j = 0; j <= biitsListItems.length - 1; j++) 
	{
		if(j==0)
			{
			biitsListItems[j].click();
			$(biitsListItems[j]).addClass("biitsLiActive");
			}

	}
}

function biitsShowUploadedDocument(quesId,wheeboxID,keySno,testNo,TestStartTime,callStatus,index)
{
	var biitsLeftUl = document.getElementById('biitsDocumentUploadLeftPannelUl');
	var biitsListItems = biitsLeftUl.getElementsByTagName('li');
	for (var j = 0; j <= biitsListItems.length - 1; j++) 
	{
			$(biitsListItems[j]).removeClass("biitsLiActive");
	}
	
	$(biitsListItems[index-1]).addClass("biitsLiActive");
    var compCode = document.getElementById("comp_code").value;
	var i =parseInt(index); 
	//alert("function call");
	console.log("qtext index::"+index);
	var qText="";
	if(arr.length>i)
		{
		qText = arr[i]; 
		}
	 
	console.log("quesId::"+quesId+" wheeboxID::"+wheeboxID+" keySno::"+keySno+" testNo::"+testNo+" TestStartTime::"+TestStartTime+" callStatus"+callStatus);
	//$("#documentUploadQtext").html("Qtext:- "+qText);
	$("#docuploadSummaryRightPannelImageDiv").html("");
	  var loaderContent = "<img src='https://statiswheebox.z29.web.core.windows.net/wet1-wbox/assest/images/ajax-loader.gif' alt='' class='loading'> <span>&nbsp;&nbsp;Loading... </span>";
  	  document.getElementById("docuploadSummaryRightPannelImageDiv").innerHTML = loaderContent;
	 debugger;
	   var bankName = '';
	   var bankName=document.getElementById('bankType').innerHTML;
	   if(bankName==null||bankName==undefined||bankName=='')
		   {
		   	bankName = "";
		   }
	   bankName = $.trim(bankName);
	   
 	  console.log("keySno::"+keySno+" "+wheeboxID+"  "+testNo+"  "+TestStartTime);
 	  
 	  	var encryptionStatus = 'no';
        $("#docuploadSummaryRightPannelImageDiv").load('showUploadedImagesForBiits.obj',{ compCode: compCode,keySno: keySno,wheeboxID: wheeboxID,testNo: testNo,quesId: quesId,TestStartTime: TestStartTime,bankName: bankName,encryptionStatus:encryptionStatus}, function (response, status, xhr) {
 	  	// $("#docuploadSummaryRightPannelImageDiv").load('showUploadedImagesForBiitsCount.obj',{ compCode: compCode,keySno: keySno,wheeboxID: wheeboxID,testNo: testNo,quesId: quesId,TestStartTime: TestStartTime,bankName: bankName,encryptionStatus:encryptionStatus}, function (response, status, xhr) {
  	    	 if (status == "error") {
  	        	document.getElementById("docuploadSummaryRightPannelImageDiv").innerHTML = "";
  	        	if(xhr.status === 0){
  	        		swal({   title:  "Error", 
  	        			text: "<div align='left'>Message will come here<br><br>Please close it and check your internet connection and then try to view uploaded images.<br></div>",
  	            		type: "warning", 
  	            		html: true,  
  	            		showCancelButton: false,
  	            		confirmButtonColor: "#DD6B55",
  	            		confirmButtonText:"Close", 
  	            		closeOnConfirm: true,
  	            		closeOnCancel: true 
  	            		}, 
  	            		function(isConfirm){   if (isConfirm) {        } else {     } });
  	            	
  	        	}else{
//		  	            swal(xhr.status + " " + xhr.statusText);
  	        		swal({ 
  	        			title:  "Title Error", 
  	        			text: "<div align='center'>It seems like there is some issues in view uploaded images.<br><br>Please close it and re-try.</div>",
  	        			type: "warning",
  	        			html: true,  showCancelButton: false,   confirmButtonColor: "#DD6B55",  confirmButtonText:"Close", closeOnConfirm: true,   closeOnCancel: true },
  	        			function(isConfirm){   if (isConfirm) {        } else {     } });
	  	        }
  	          
  	        } else if(status=='success') {
  	        	 $('#docuploadSummaryRightPannelImageDiv').html(response);
 // 	            $('#docuploadSummaryRightPannelImageDiv').html('<b style="color: #5bbe74;">Number of answer sheets uploaded: '+response+'</b>');
  	        }
  	        else {console.log(status);}
  	    });
 	  
 	  
}
