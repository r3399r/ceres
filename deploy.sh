#!/bin/bash
set -e

env=dev
project=zubeneschamali
# subDomain=infinity
# domain=celestialstudio.net
s3bucket=y-cf-midway-singapore

echo ====================================================================================
echo env: $env
echo project: $project
# echo domain: $subDomain.$domain
echo ====================================================================================

echo deploy backend AWS...
aws cloudformation package --template-file aws/cloudformation/template.yaml --output-template-file packaged.yaml --s3-bucket $s3bucket
aws cloudformation deploy --template-file packaged.yaml --stack-name $project-$env-stack --parameter-overrides TargetEnvr=$env Project=$project --no-fail-on-empty-changeset --s3-bucket $s3bucket
echo ====================================================================================

echo deploy frontend to S3...
cd frontend
npm i
npm run build
aws s3 sync ./out s3://$project-$env --delete --cache-control no-cache
echo ====================================================================================
