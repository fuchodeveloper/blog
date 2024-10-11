---
path: run-dynamodb-locally
date: 2019-11-10T21:20:34.954Z
title: Run DynamoDB Locally
description: Run a local instance of Amazon DynamoDB in a Docker container
---

This post was a result of several hours of debugging why my local instance of DynamoDB was not working correctly. Recently, while working on a serverless application, I needed to set up a local instance of Amazon DynamoDB database to allow me test properly before moving to the remote instance. The challenge was: how to connect the Lambda function I was working on to the local DynamoBD. There are lots of resources on how to use this with the remote instance but very few on how to make this work in a development environment.

The <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html" target="_blank" rel="nofollow">Amazon documentation</a> made good effort to illustrate the implementation for Node.js and DynamoDB SDK. However, in my case, I needed to use this implementation in a Lambda function with <a href="https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html" target="_blank" rel="nofollow">AWS SAM CLI</a>.

I attempted to run the database instance from the directory where it was extracted after installation as described in the documentation using the command:

```sh
$ java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

After starting the database, I attempted to connect, create a table and populate it, but I was greeted by the error below:

```
message: 'connect ECONNREFUSED 127.0.0.1:8000'
```

After hours of debugging and some sleep, and more debugging, I found a <a href="https://stackoverflow.com/questions/48342912/how-to-use-dynamodb-locally-with-lambda" target="_blank" rel="nofollow">Stackoverflow answer</a> which helped me resolve the issue. It turns out that when working with Lambdas locally using SAM CLI, the Lambda is running in a Docker container while the database instance I was using was not. This was the reason why the Lambda could not connect to the database instance.

To resolve the issue, I had to run the DynamoDB instance inside a Docker container and use a different endpoint in the Lambda like so:

Run DynamoDB in Docker container:

```sh
$ docker run -p 8000:8000 amazon/dynamodb-local
```

Access the database in Lamba like so:

```js
const AWS = require("aws-sdk")

AWS.config.update({
  region: "<region>",
  endpoint: "http://docker.for.mac.localhost:8000",
})
```

Now the Lambda can connect to the database instance and work properly without timing out.
