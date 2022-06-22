# Service Status API

Basic API to check websites. This is to be used in conjuction with the status UI:
https://github.com/ZiiSolutions/service-status-ui

Note: Since the application was for a frontend role. I did not focus too much on the API side.
Typically, a mock json server of some sort could have achieved the same thing. Also the API
has a static mapping of services which in a ideal world should reside in a database of some sort
or even an Amazon S3 bucket. This way the API can be extended such that the list of websites
getting monitored can be updated by the user. But that is out of scope for this context.

## Project requirements

This is a Nest JS project which has been built using Node v16.15.1 & NPM v8.11.0.

A nvmrc file has been added, so if you have nvm installed on your machine run `nvm use`.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
