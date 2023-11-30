# iac-on-aws
This is an example repository to explain the concept of infrastructure as code on aws.
It contains 2 frontends and 2 backends one of each for a local and an AWS deployment.

There are **3** ways you can deploy this project:

(When you happen to run into issues with deploying this project. Consider looking into separate branches of this repo. Every branch corresponds with the steps below.)

### 1: All local deployment:
To run the project locally just use the docker-compose file provided on the top level directory. It will automatically start the backend and frontend locally.

### 2: Local frontend, AWS backend:
In this case, you must first follow the steps outlined in the `aws-backend` folder.
Once the backend is deployed, you must follow the steps outlined in the `frontend` folder for deploying the frontend.
Make sure that you have set the correct endpoint url in the frontend as mentioned.

### 3: All AWS deployment:
In this case, you must first follow the steps outlined in the `aws-backend` folder.
Once the backend is deployed, you must follow the steps outlined in the `aws-frontend` folder for deploying the frontend.
Make sure that you have set the correct endpoint url in the frontend as mentioned.


## Disclaimer
This repository is not tested for security. It is not safe to use in production and is intended only for educational purposes.

## Copyright
© Copyright 2023 - Raphael Brösamle - All rights reserved.