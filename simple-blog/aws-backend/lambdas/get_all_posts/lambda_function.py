import boto3
import json
import os

TABLE_NAME = os.environ["DYNAMODB_TABLE_NAME"]
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)


def lambda_handler(event, context):
    response = table.scan()
    items = response.get("Items")
    posts = [i.get("post") for i in items]
    return {
        'statusCode': 200,
        'body': json.dumps(posts)
    }
