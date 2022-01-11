### ChallangeWebDriverIo
Bitso Challange  

####Steps to run the project
[ x ] npm init wdio .
[ x ] Fill the configuration for WDIO Configuration Helper

            ```? Where is your automation backend located? On my local machine
	? Which framework do you want to use? jasmine    
	? Do you want to use a compiler? No
	? Where are your test specs located? ./test/specs/**/*.js        
	? Do you want WebdriverIO to autogenerate some test files? No
	? Which reporter do you want to use? spec
	? Do you want to add a plugin to your test setup?
	? Do you want to add a service to your test setup? chromedriver
	? What is the base url? (http://localhost)```

[ x ] Run test command
npx wdio ./wdio.conf.js --spec transaction-exceeds-your-limit.js
npx wdio ./wdio.conf.js --spec InvalidPin.js

