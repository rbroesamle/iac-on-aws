import boto3
import json
import os

dynamodb = boto3.client('dynamodb')
TABLE_NAME = os.environ["DYNAMODB_TABLE_NAME"]


def lambda_handler(event, context):
    body = json.loads(event.get("body"))
    text = body.get("text")

    dynamodb.put_item(
        TableName=TABLE_NAME,
        Item={
            'post': {
                'S': text
            }
        }
    )

    return {
        'statusCode': 200
    }