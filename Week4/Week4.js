var names = new Array();
names[0]="Bharatha";
names[1]="Jasmine";
names[2]="Sony";
names[3]="Pravalika";
names[4]="john";
names[5]="Master";
names[6]="jason";
names[7]="Flag";
names[8]="Jimmy";

for(var i=0;i<names.length;i++){
	if(names[i].charAt(0)=='j' || names[i].charAt(0) == 'J'){
         console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+names[i]);
	}
}