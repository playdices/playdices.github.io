/*****************************************
(C) https://www.calculator.net all right reserved.
*****************************************/
function gObj(obj) {var theObj;if(document.all){if(typeof obj=="string"){return document.all(obj);}else{return obj.style;}}if(document.getElementById){if(typeof obj=="string"){return document.getElementById(obj);}else{return obj.style;}}return null;}function trimAll(sString){while (sString.substring(0,1) == ' '){sString = sString.substring(1, sString.length);}while (sString.substring(sString.length-1, sString.length) == ' '){sString = sString.substring(0,sString.length-1);} return sString;} function showDebugInfo(){}function r(A){if(A=="10x"||A=="log"||A=="ex"||A=="ln"||A=="sin"||A=="asin"||A=="cos"||A=="acos"||A=="tan"||A=="atan"||A=="e"||A=="pi"||A=="n!"||A=="x2"||A=="1/x"||A=="swap"||A=="x3"||A=="3x"||A=="RND"||A=="M-"||A=="qc"||A=="MC"||A=="MR"||A=="MS"||A=="M+"||A=="sqrt"||A=="pc"){func(A)}else{if(A==1||A==2||A==3||A==4||A==5||A==6||A==7||A==8||A==9||A==0){numInput(A)}else{if(A=="pow"||A=="apow"||A=="+"||A=="-"||A=="*"||A=="/"){opt(A)}else{if(A=="("){popen()}else{if(A==")"){pclose()}else{if(A=="EXP"){exp()}else{if(A=="."){if(entered){value=0;digits=1}entered=false;if((decimal==0)&&(value==0)&&(digits==0)){digits=1}if(decimal==0){decimal=1}refresh()}else{if(A=="+/-"){if(exponent){Hj=-Hj}else{value=-value}refresh()}else{if(A=="C"){level=0;exponent=false;value=0;enter();refresh()}else{if(A=="="){enter();while(level>0){evalx()}refresh()}}}}}}}}}}}var totalDigits=12;var pareSize=12;var degreeRadians="degree";var value=0;var memory=0;var level=0;var entered=true;var decimal=0;var fixed=0;var exponent=false;var digits=0;var showValue="0";var isShowValue=true;function stackItem(){this.value=0;this.op=""}function array(A){this[0]=0;for(i=0;i<A;++i){this[i]=0;this[i]=new stackItem()}this.gG=A}uI=new array(pareSize);function push(B,C,A){if(level==pareSize){return false}for(i=level;i>0;--i){uI[i].value=uI[i-1].value;uI[i].op=uI[i-1].op;uI[i].vg=uI[i-1].vg}uI[0].value=B;uI[0].op=C;uI[0].vg=A;++level;return true}function pop(){if(level==0){return false}for(i=0;i<level;++i){uI[i].value=uI[i+1].value;uI[i].op=uI[i+1].op;uI
[i].vg=uI[i+1].vg}--level;return true}function format(I){if(typeof (cc)!="undefined"){return };var E=""+I;if(E.indexOf("N")>=0||(I==2*I&&I==1+I)){return"Error "}var G=E.indexOf("e");if(G>=0){var A=E.substring(G+1,E.length);if(G>11){G=11}E=E.substring(0,G);if(E.indexOf(".")<0){E+="."}else{j=E.length-1;while(j>=0&&E.charAt(j)=="0"){--j}E=E.substring(0,j+1)}E+=" "+A}else{var J=false;if(I<0){I=-I;J=true}var C=Math.floor(I);var K=I-C;var D=totalDigits-(""+C).length-1;if(!entered&&fixed>0){D=fixed}var F=" 1000000000000000000".substring(1,D+2)+"";if((F=="")||(F==" ")){F=1}else{F=parseInt(F)}var B=Math.floor(K*F+0.5);C=Math.floor(Math.floor(I*F+0.5)/F);if(J){E="-"+C}else{E=""+C}var H="00000000000000"+B;H=H.substring(H.length-D,H.length);G=H.length-1;if(entered||fixed==0){while(G>=0&&H.charAt(G)=="0"){--G}H=H.substring(0,G+1)}if(G>=0){E+="."+H}}return E}function refresh(){var A=format(value);if(exponent){if(Hj<0){A+=" "+Hj}else{A+=" +"+Hj}}if(A.indexOf(".")<0&&A!="Error "){if(entered||decimal>0){A+="."}else{A+=" "}}if(""==(""+A)){document.getElementById("sciOutPut").innerHTML=" "}else{document.getElementById("sciOutPut").innerHTML=A}}function evalx(){if(level==0){return false}op=uI[0].op;Qk=uI[0].value;if(op=="+"){value=parseFloat(Qk)+value}else{if(op=="-"){value=Qk-value}else{if(op=="*"){value=Qk*value}else{if(op=="/"){value=Qk/value}else{if(op=="pow"){value=Math.pow(Qk,value)}else{if(op=="apow"){value=Math.pow(Qk,1/value)}}}}}}pop();if(op=="("){return false}return true}function popen(){enter();if(!push(0,"(",0)){value="NAN"}refresh()}function pclose(){enter();while(evalx()){}refresh()}function opt(A){enter();if(A=="+"||A=="-"){vg=1}else{if(A=="*"||A=="/"){vg=2}else{if(A=="pow"||A=="apow"){vg=3}}}if(level>0&&vg<=uI[0].vg){evalx()}if(!push(value,A,vg)){value="NAN"}refresh()}function enter(){if(exponent){value=value*Math.exp(Hj*Math.LN10)}entered=true;exponent=false;decimal=0;fixed=0}function numInput(A){if(entered){value=0;digits=0;entered=false}if(A==0&&digits==0){refresh();return }if(exponent){if(Hj<0){A=-A}if(digits<3
){Hj=Hj*10+A;++digits;refresh()}return }if(value<0){A=-A}if(digits<totalDigits-1){++digits;if(decimal>0){decimal=decimal*10;value=value+(A/decimal);++fixed}else{value=value*10+A}}refresh()}function exp(){if(entered||exponent){return }exponent=true;Hj=0;digits=0;decimal=0;refresh()}function func(D){enter();if(D=="1/x"){value=1/value}if(D=="pc"){value=value/100}if(D=="qc"){value=value/1000}else{if(D=="swap"){var B=value;value=uI[0].value;uI[0].value=B}else{if(D=="n!"){if(value<0||value>200||value!=Math.round(value)){value="NAN"}else{var E=1;var A;for(A=1;A<=value;++A){E*=A}value=E}}else{if(D=="MR"){value=memory}else{if(D=="M+"){memory+=value}else{if(D=="MS"){memory=value}else{if(D=="MC"){memory=0}else{if(D=="M-"){memory-=value}else{if(D=="asin"){if(degreeRadians=="degree"){value=Math.asin(value)*180/Math.PI}else{value=Math.asin(value)}}else{if(D=="acos"){if(degreeRadians=="degree"){value=Math.acos(value)*180/Math.PI}else{value=Math.acos(value)}}else{if(D=="atan"){if(degreeRadians=="degree"){value=Math.atan(value)*180/Math.PI}else{value=Math.atan(value)}}else{if(D=="e^x"){value=Math.exp(value*Math.LN10)}else{if(D=="2^x"){value=Math.exp(value*Math.LN2)}else{if(D=="e^x"){value=Math.exp(value)}else{if(D=="x^2"){value=value*value}else{if(D=="e"){value=Math.E}else{if(D=="ex"){value=Math.pow(Math.E,value)}else{if(D=="10x"){value=Math.pow(10,value)}else{if(D=="x3"){value=value*value*value}else{if(D=="3x"){value=Math.pow(value,1/3)}else{if(D=="x2"){value=value*value}else{if(D=="sin"){if(degreeRadians=="degree"){value=Math.sin(value/180*Math.PI)}else{value=Math.sin(value)}}else{if(D=="cos"){if(degreeRadians=="degree"){var C=(value%360);if(C<0){C=C+360}if(C==90){value=0}else{if(C==270){value=0}else{value=Math.cos(value/180*Math.PI)}}}else{var C=(value*180/Math.PI)%360;if(C<0){C=C+360}if((Math.abs(C-90)<1e-10)||(Math.abs(C-270)<1e-10)){value=0}else{value=Math.cos(value)}}}else{if(D=="tan"){if(degreeRadians=="degree"){value=Math.tan(value/180*Math.PI)}else{value=Math.tan(value)}}else{if(D=="log"){value=Math.log(value)/Math.LN1
0}else{if(D=="log2"){value=Math.log(value)/Math.LN2}else{if(D=="ln"){value=Math.log(value)}else{if(D=="sqrt"){value=Math.sqrt(value)}else{if(D=="pi"){value=Math.PI}else{if(D=="RND"){value=Math.random()}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}refresh()};