# Simple blog AWS backend

This is a simple AWS backend for this demo project.

## Prerequisites:

Make sure you have the following tools installed:
- `aws-cli`
- `terraform`

Make sure that you have an AWS account with sufficient privileges and you are logged into this account in your aws-cli.

## How to deploy this frontend on AWS:

Then run the following command within this folder (/simple-blog/aws-backend/):
```bash
terraform apply
```

The backend will now be deployed to the AWS cloud. When the deployment is complete, a URL for accessing the backend will be displayed.

## Additional notes:

The backend might not available due to ``CORS`` reasons. In this case you will have to disable CORS protections in your browser.
