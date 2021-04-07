node {
	stage ('SCM checkout'){
		git url: "https://github.com/geetesh001/Automation.git"
		}
	stage ('Build'){
    	dir("Automation") {
	   sh "mvn clean install"
       }
		}
}