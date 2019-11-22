---
path: http-request-processed
date: 2019-11-22T10:04:30.954Z
title: How an HTTP Request is Processed
description: Demystifying how an HTTP request is processed
---

A while ago, I was interviewing for an engineering role and the recruiter asked me the question: can you explain how an HTTP request is processed? 🤔 I thought that was an interesting question because it wasn't the typical question about traversing a binary tree or optimising a search algorithm. I had to take a moment to reflect on my CS knowledge.

Let’s dig into how this works to get a better understanding of what happens from the moment you type a URL in the address bar of your browser, to when you get a response. It is noteworthy to highlight here that this entire process touches on quite several technologies. Some of which are beyond the scope of this post. 

### HTTP Request Simplified

Say you type the URL [codeisbae.com](https://www.codeisbae.com) into your browser address bar, what happens next? 🤔 
1. DNS Lookup: the browser sends a query to the DNS server asking for the IP address of the website you requested. Each website on the internet has a unique IP address that looks like 207.97.227.239 (`github.com` IP address). What you type on the address bar is a human-readable representation of this address. 
2. TCP/IP handshake: After the IP address has been resolved. Your browser makes a request to the server at that IP address asking for a copy of the page you want. This communication between the client (your browser) and the server is done through <a href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol" target="_blank" rel="nofollow">TCP ↗︎</a>.
3. On the server, the request from the client is processed. If successful, the server returns a status code of 200 which means that everything went as expected, along with the requested resources. These are sent back to the browser in small chunks called <a href="https://www.techopedia.com/definition/6751/data-packet" target="_blank" rel="nofollow">data packets ↗︎</a>.
4. When these data packets (HTML, CSS files, JavaScript files etc) are received by the browser, they are parsed and rendered on the browser as a web page. 

The above is a simple walkthrough of how an HTTP request is proceessed without going into so much detail.

