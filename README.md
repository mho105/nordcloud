# Network Speed

This application calculates the most suitable network station
for a device at a given point.

This is a Node.js TypeScript Lambda function that is deployed to AWS using the AWS CDK.

The application entrypoint is at `./src/handlers/index.ts`

## ✅ Prerequisites
 * An AWS account
 * AWS CLI with a default profile
 * Node.js (v14)
 * npm (v8)

## 🚀 Deploying to AWS
 * `npm install`            Install project dependencies
 * `npm run bootstrap`      Provision resources the AWS CDK needs to perform the deployment
 * `npm run deploy`         Deploy this stack to your default AWS account/region

## 👉 Invoking the Lambda function
* `npm run invoke`

## 🗑️ Cleaning up
* `npm run destroy`         Destroy the stack

## ❓ Other commands

 * `npm run test:unit`       Run unit tests with code coverage
 * `npm run test:acceptance` Run acceptance tests
 * `npm run build`           Compile TypeScript

