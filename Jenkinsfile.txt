node {
	stage ('SCM checkout'){
		git "https://github.com/geetesh001/Automation.git"
		}
	stage ('Build'){
    	dir("comtest") {
	   sh "mvn clean install"
       }
		}
}