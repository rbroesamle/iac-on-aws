# Simple blog AWS frontend

This is a simple AWS frontend for this demo project.

## Prerequisites:

Before deploying this frontend, please make sure that the coresponding backend is up and running.

Make sure you have the following tools installed:
- `docker`
- `docker-compose`
- `aws-cli`
- `terraform`

Make sure that you have an AWS account with sufficient privileges and you are logged into this account in your aws-cli.

Also make sure that the `docker_image_url` in the `terraform/variables.tf` file is pointing to the correct Docker image.

Also make sure that you have an account at Docker for uploading your docker image.

### How to create the frontend Docker image:

1. Navigate to the `frontend` folder in this repository.

2. Also make sure that the ENV variable ``REACT_APP_BACKEND_URL`` in the `Dockerfile` within the ``frontend`` folder is pointing to the correct endpoint.

3. Build the docker image with the command:
```bash
docker build --tag <DOCKER_ACCOUNT_USERNAME>/simple-blog-frontend .
```

4. Push the image to the docker registry with the command:
```bash
docker push <DOCKER_ACCOUNT_USERNAME>/simple-blog-frontend
``` 

## How to deploy this frontend on AWS:

Then run the following command within this folder (/simple-blog/aws-frontend/):
```bash
terraform apply
```

The frontend will now be deployed to the AWS cloud. When the deployment is complete, a URL for accessing the frontend will be displayed.

## Additional notes:

The backend might not available due to ``CORS`` reasons. In this case you will have to disable CORS protections in your browser.