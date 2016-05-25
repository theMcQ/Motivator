Get started with motivator
-----------------------------------

Welcome to Node JS Web Starter application that uses the IBM DataCache REST interface!

This sample application demonstrates how to write a Node JS application using IBM DataCache REST interface and deploy it on BlueMix.

1. [Install the cf command-line tool](https://www.ng.bluemix.net/docs/redirect.jsp?name=cf-instructions).
2. [Download the starter application package](https://ace.ng.bluemix.net:443/rest/../rest/apps/229fb96c-1bd2-412e-8267-b19714ba71c6/starter-download)
3. Extract the package and cd to it.
4. Connect to BlueMix:

		cf api https://api.ng.bluemix.net

5. Log into BlueMix:

		cf login -u mike_wilson@ca.ibm.com
		cf target -o mike_wilson@ca.ibm.com -s dev
		
6. Deploy your app:

		cf push motivator

7. Access your app: [http://motivator-mcq.ng.bluemix.net](http://motivator-mcq.ng.bluemix.net)
