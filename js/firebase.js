var clinicianBtn = document.getElementById('clinicianBtn');
var patientBtn = document.getElementById('patientBtn');
var researcherBtn = document.getElementById('researcherBtn');


window.addEventListener('load', function() {
	var clinicianListRef = firebase.database().ref("Clinicians");
    

    var PatientListRef = firebase.database().ref("Patients");
    

    var ResearcherListRef = firebase.database().ref("Researchers");
    
	
  clinicianBtn.addEventListener('click', function() {
  	var newClinicianRef = clinicianListRef.push();
  	var cname = document.getElementById('cname').value;
  	var cemail = document.getElementById('cemail').value;
	var cmessage = document.getElementById('cmessage').value;

        newClinicianRef.set({
                "name":cname,
                "email":cemail,
                "message":cmessage
            });
  });

  patientBtn.addEventListener('click', function() {
  	var newPatientRef = PatientListRef.push();
  	var pname = document.getElementById('pname').value;
  	var pemail = document.getElementById('pemail').value;
	var pmessage = document.getElementById('pmessage').value;

         newPatientRef.set({
                "name":pname,
                "email":pemail,
                "message":pmessage
            });
  });

  researcherBtn.addEventListener('click', function() {
  	var newResearcherRef = ResearcherListRef.push();
  	var rname = document.getElementById('rname').value;
  	var remail = document.getElementById('remail').value;
	var rmessage = document.getElementById('rmessage').value;

    
     newResearcherRef.set({
                "name":rname,
                "email":remail,
                "message":rmessage
            });
  });

});