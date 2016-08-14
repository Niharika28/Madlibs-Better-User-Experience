angular.module('madlibs',[])
.controller("madlibsController", function() {
var vm = this;
vm.madLibForm = [];
vm.disableMadLibs = true;
vm.enableMadlibs = true;


vm.submitForm = function(){
	vm.disableMadLibs = false;
	vm.enableMadlibs = false;
}

vm.startOver = function() {
	vm.disableMadLibs = true;
	vm.enableMadlibs = true;
	vm.madLibForm.$setPristine();
	vm.madLibForm.$setUntouched();
	vm.firstName = '';
	vm.jobTitle= '';
	vm.tediousTask = '';
	vm.dirtyTask = '';
	vm.celebrity = '';
	vm.uselessSkill = '';
	vm.obnoxiousCelebrity = '';
	vm.hugeNumber = '';
	vm.adjective = '';
	vm.gender = '';
}
});