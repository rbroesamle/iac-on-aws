# Simple blog frontend

This is a simple react frontend for this demo project.

## Prerequisites:

Before deploying this frontend, please make sure that the coresponding backend is up and running.

Also make sure that the ENV variable ``REACT_APP_BACKEND_URL`` in the `Dockerfile` is pointing to the correct endpoint.

Make sure you have the following tools installed:
- `docker`
- `docker-compose`

## How to deploy this frontend locally:

Then run the following command within this folder (/simple-blog/frontend/):
```bash
docker-compose up
```

The frontend will now start and should be available under the address:
`http://localhost:8080`

## Additional notes:

The backend might not available due to ``CORS`` reasons. In this case you will have to disable CORS protections in your browser.