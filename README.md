# iac-on-aws
This is an example repository to explain the concept of infrastructure as code on aws.
It contains 2 frontends and 2 backends one of each for a local and an AWS deployment.

There are **3** ways you can deploy this project:

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


## Copyright
© Copyright 2023 - Raphael Brösamle - All rights reserved.