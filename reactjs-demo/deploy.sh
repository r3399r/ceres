#!/bin/bash
set -e

project=ceres-reactjs
s3bucket=y-cf-midway-singapore

echo ====================================================================================
echo project: $project
echo ====================================================================================

echo deploy backend AWS...
aws cloudformation package --template-file aws/cloudformation/template.yaml --output-template-file packaged.yaml --s3-bucket $s3bucket
aws cloudformation deploy --template-file packaged.yaml --stack-name $project-stack --parameter-overrides Project=$project --no-fail-on-empty-changeset --s3-bucket $s3bucket
echo ====================================================================================

echo deploy frontend to S3...
npm i
npm run build
aws s3 sync ./build s3://$project --delete --cache-control no-cache
echo ====================================================================================
