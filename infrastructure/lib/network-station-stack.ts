import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { aws_lambda_nodejs as lambdaNode } from 'aws-cdk-lib';
import { Construct } from 'constructs';

const functionName = 'tech-assignment-nordcloud-mh-20220119';

class NetworkStationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new lambdaNode.NodejsFunction(this, 'CalculateSpeedLambda', {
      entry: 'src/handlers/index.ts',
      handler: 'handler',
      memorySize: 128,
      functionName,
      timeout: Duration.seconds(3),
      bundling: {
        minify: true
      }
    });
  }
}

export { NetworkStationStack, functionName };
