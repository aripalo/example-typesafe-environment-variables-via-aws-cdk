import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { EnvironmentInput } from "./environment";

export class FullyTypesafeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const environment: EnvironmentInput = {
      // This could be also a reference to another CDK resource
      // like bucket.bucketName etc, but let's keep it simple for now:
      MY_ENV_VAR: "my-value",
    };

    new NodejsFunction(this, "handler", {
      environment,
    });
  }
}
