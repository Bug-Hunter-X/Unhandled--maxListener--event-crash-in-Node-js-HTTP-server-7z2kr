# Unhandled 'maxListener' Event Crash in Node.js HTTP Server

This repository demonstrates a common but easily overlooked error in Node.js HTTP servers: crashing due to an unhandled 'maxListener' event.  This typically occurs when a large request overwhelms the server, exceeding the default event listener limit.

## Bug Description

The `bug.js` file contains a simple HTTP server. The problem lies in directly accessing `req.body` without handling large requests.  When a large POST request is made, it can trigger an excessive number of 'data' event listeners, ultimately leading to a crash with an 'Error: maxListeners exceeded' message.

## Solution

The `bugSolution.js` file provides a solution that prevents this crash.  It uses body-parser middleware to properly handle incoming request bodies, regardless of size, preventing the listener overload.