data "aws_iam_policy_document" "lambda_assume_role_policy"{
    statement {
        effect = "Allow"
        actions = ["sts:AssumeRole"]
        principals {
            type = "Service"
            identifiers = ["lambda.amazonaws.com"]
        }
    }
}

resource "aws_iam_role" "lambda_role" {  
    name = "${var.app_name}-lambda-role"  
    assume_role_policy = data.aws_iam_policy_document.lambda_assume_role_policy.json
}

locals {
  zip_lambda_get_all_posts_path = "temp/get_all_posts_handler.zip"
}

data "archive_file" "python_lambda_package" {  
    type = "zip"  
    source_file = "${path.module}/../lambdas/get_all_posts/lambda_function.py" 
    output_path = local.zip_lambda_get_all_posts_path
}

resource "aws_lambda_function" "get_all_posts_handler" {
    function_name = "${var.app_name}-lambda-get-all-posts"
    filename = local.zip_lambda_get_all_posts_path
    source_code_hash = data.archive_file.python_lambda_package.output_base64sha256
    role = aws_iam_role.lambda_role.arn
    runtime = "python3.11"
    handler = "lambda_function.lambda_handler"
    timeout = 10
}

resource "aws_api_gateway_rest_api" "backend_api_gateway" {
  name        = "${var.app_name}-api-gateway"
  description = "Backend API Gateway"
}

resource "aws_api_gateway_resource" "get_all_posts_api_resource" {
  rest_api_id = "${aws_api_gateway_rest_api.backend_api_gateway.id}"
  parent_id   = "${aws_api_gateway_rest_api.backend_api_gateway.root_resource_id}"
  path_part   = "getallposts"
}

resource "aws_api_gateway_method" "get_all_posts_api_method" {
  rest_api_id   = "${aws_api_gateway_rest_api.backend_api_gateway.id}"
  resource_id   = "${aws_api_gateway_resource.get_all_posts_api_resource.id}"
  http_method   = "ANY"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "get_all_posts_api_integration" {
  rest_api_id = "${aws_api_gateway_rest_api.backend_api_gateway.id}"
  resource_id = "${aws_api_gateway_method.get_all_posts_api_method.resource_id}"
  http_method = "${aws_api_gateway_method.get_all_posts_api_method.http_method}"

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = "${aws_lambda_function.get_all_posts_handler.invoke_arn}"
}

resource "aws_lambda_permission" "get_all_posts_api_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = "${aws_lambda_function.get_all_posts_handler.function_name}"
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.backend_api_gateway.execution_arn}/*/*"
}

resource "aws_api_gateway_deployment" "backend_api_gateway_deployment" {
  depends_on = [
    aws_api_gateway_integration.get_all_posts_api_integration,
  ]

  rest_api_id = "${aws_api_gateway_rest_api.backend_api_gateway.id}"
  stage_name  = "dev"
}
