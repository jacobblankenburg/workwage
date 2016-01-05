"use strict";

var hours = prompt ("How many hours?");
var rate = prompt ("Hourly rate");


function equAtionot(hours, rate) {
   return (rate*1.5*(hours-40))+(rate*(hours-(hours-40)));
}
function equationStan(hours, rate) {
   return (hours*rate);
}
function equationOthours(hours, rate) {
	return (hours-40);
}
function equationOtpay(hours, rate) {
	return (rate*1.5*(hours-40))
}
if (hours > 40) { 
   console.log ("hours=", hours);
   console.log ("rate=", rate);
   console.log ("Overtime Hours=", Math.round (equationOthours (hours, rate) *100)/100);
   console.log ("Overtime Pay=", Math.round (equationOtpay (hours, rate) *100)/100);
   console.log ("totalpay=", Math.round (equAtionot (hours,rate) *100)/100);
}
else {
   console.log ("hours=", hours);
   console.log ("rate=", rate);
   console.log ("totalpay=", Math.round (equationStan (hours,rate) *100)/100);
}

