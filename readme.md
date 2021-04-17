# Travis CI example [![Build Status](https://www.travis-ci.com/montoyadamien/TravisCI_example.svg?branch=main)](https://www.travis-ci.com/montoyadamien/TravisCI_example)

This repository aims to show how to use the continuous integration tool Travis CI to launch some database tests. 
The project example works with NestJS and Redis. 
First we have two NodeJs services, Plant and Tree using Redis for database access. 
Pushing on the repository will trigger the Travis CI builds defined [here](./travis.yml).

## Technologies

- [Travis CI](https://www.travis-ci.com/) 
- [NestJS](https://nestjs.com/) 
- [Redis](https://redis.io/)

## Configure Travis CI

- Get to [Travis CI](https://travis-ci.org/getting_started) then Log In.
- Next, allow Travis to access your GitHub repository.
- Follow the tutorial [here](https://docs.travis-ci.com/user/tutorial/) to setup the builds.
