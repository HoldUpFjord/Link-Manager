Goal: 

Link Manager / Carkmark 
A Link Manager where a user can login, and save tabs/pages with a Title, Link, Tagging system, and potentially more. 
Write a short sentence or two about this project and what it does. Be sure to include a link and a screenshot (we're front end devs so we can actually see our work!).

Link to project: <link to repl when done>

![image](https://user-images.githubusercontent.com/85075266/188533012-a5e0bce5-9fc3-4b6b-a83e-2ac4cc2c73bf.png)

How It's Made:
Tech used: HTML, CSS, JavaScript, node.js, express, mongodb, mongoose, axios and cheerio

We build the as a collaboration in an effort to write an app that solved a real world problem.
People with ADHD, memory issues or partially sighted can sometimes have issues keeping track of the links and tabs they have open in their browser.  After talking to an ADHD community about the issue it seemed to be a common problem that on closing the browser with many tabs (chrome) they would be lost and sometimes difficult to get back without digging through the history line by line.

This app sets out to solve that problem. 

![image](https://user-images.githubusercontent.com/85075266/188532976-c18062ba-1497-42c9-8c72-fa3dbbae0955.png)

We build the app with mongodb because it allows data to be stored as objects and held in the cloud for quick, easy access and because we would eventually host this on replit or a similar centrally hosted solution which would mean it's not necessary to migrate data or set up dedicated hosting.

node.js provides the muscle for the app and handles back-end requests.  Axios was used initially as a web parser for grapping titles from websites, it worked in 90% of cases but we quickly found out that some websites hold their title in an attribute (notably twitter) and especially the ones that use frameworks - also delivered extra, unneeded information in the http request that corrupted our titles.

We had to adapt our web parser to include cheerio as middleware, this jquery-like app gave us more control over filtering by rendering a virtual dom which we could then access and parse to the server.

Heavy use of javascript string/array methods meant that content manipulation and prep was covered pretty well.

The code is structured appropriately for an MCV framework and we stuck to that format extremely well, reaping the benefits of simplicity and readability which are needed for this type of asyncronous project and team work.

We pair-programmed on a number of occasions with this project which let us gain familiarity with the code as well as with each other! 

The project gave a fantastic opportunity for us to practice our collaboration/communication skills as well as familarising us with github (issues, milestones, push/pull, branch reviews and pull requests) and also general git commands.

<Insert Front End Discussion :)>

Optimizations
(optional)

<insert discussions on optimisations>

<Lessons Learned>

This was the first time we dived into http parsing and webscraping generally and it opened our eyes to how diverse the options are here. 
Once set up - there were a variety of ways that we could approach the data and it's good to know what is possible as well as how this could be used in future.

The importance of communication came through a number of times, happy to say we pulled this together.  The issues tab was essential as was regular ad-hoc voice calls and stream events.  We communicated problems and issues quickly and worked together to solve them.
