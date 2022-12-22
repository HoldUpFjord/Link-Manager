
## Link Manager / Tab Safe
A Link Manager where a user can login, and save tabs/pages with a Title, Link, Tagging system, and potentially more. 

Link to project: https://tabsafe.cyclic.app/

![image](https://user-images.githubusercontent.com/85075266/209226877-197fe621-b816-4368-b7d2-f94e34509784.png)

# Tech Stack and Use Case:
Tech used: HTML, CSS, JavaScript, node.js, express, mongodb, mongoose, axios and cheerio

We built the app as collaboration, in an effort to write solve an important real world problem.

People with ADHD, general memory issues or who are partially sighted can sometimes have issues keeping track of the links and tabs they have open in their browser.  

After talking to an ADHD community about the issue it seemed to be a common problem that on closing the browser (accidentally, absent-mindedly or just after a reset or crash) with many tabs (chrome) they would be lost and sometimes difficult to get back without digging through the history line by line. Chrome offers a restore tabs link but this is not always available.

This app sets out to solve that problem. 

![image](https://user-images.githubusercontent.com/85075266/209226995-c074647a-e505-4d2a-be8f-e9533db804b1.png)

# Dev Review

The initial outline for the app was designed in figma:
https://www.figma.com/file/7wn5cs3qVEgykZBOIBhaf1/Untitled?node-id=0%3A1

We built the app with mongodb because it allows data to be stored as objects and held in the cloud for quick, easy access and because we would eventually host this on replit or a similar centrally hosted solution. 

This means it wasn't necessary to migrate data or set up dedicated hosting we could simply link to the db. 

node.js extended by express, provides the muscle for the app and handles back-end requests.  Axios was used initially as a web parser for grapping titles from websites, it worked in 90% of cases but we quickly found out that some websites hold their title in an attribute (notably twitter) and especially the ones that use frameworks. This meant that occasionally, grabbing the title also grabbed extra, unwanted formatting, tags or information in the http request, corrupting our titles and occasionally breaking the cards.

We had to adapt our web parser to cater for these edge-casese so we decided to include cheerio as middleware, 
this npm module boasts jquery-like commands and gave us more control over the filtering by rendering a virtual dom which we could then access and parse to the server after the frameworks had finished their job.

Heavy use of javascript string/array methods meant that content manipulation and prep was covered pretty well. we were able to sculpt the content to fit our use cases.

# Architecture and Teamwork

The code is structured appropriately for an MCV framework with a clear separation of concerns and we stuck to that architecture extremely closely, reaping the benefits of simplicity and readability which are needed for this type of asyncronous project and team work. (We were working cross-time zones!)

We pair-programmed on a number of occasions with this project which let us gain familiarity with the code as well as with each others ways of working, strengths and learning needs! 

The project gave a fantastic opportunity to practice our collaboration/communication skills as well as familarising us with github (issues, milestones, push/pull, branch reviews and pull requests) and also general git commands.

# Optimizations

There are a number of suggested features that we discussed as being good possible future additions, these are detailed in the issues tab.

# Lessons Learned

This was the first time we dived into http parsing and webscraping generally and it opened our eyes to how diverse the options are here. 
Once set up - there were a variety of ways that we could approach the data and it's good to know what is possible as well as how this could be used in future.

The importance of communication came through a number of times, happy to say we pulled this together.  The issues tab was essential as was regular ad-hoc voice calls and stream events.  We communicated problems and issues quickly and worked together to solve them.
