import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import { TextDecoder } from 'util';
import { functionName } from '../infrastructure/lib/network-station-stack';

(async () => {
  const client = new LambdaClient({});
  const command = new InvokeCommand({
    FunctionName: functionName
  });
  const response = await client.send(command);

  const asciiDecoder = new TextDecoder('utf-8');
  const results = JSON.parse(asciiDecoder.decode(response.Payload));

  console.table(results);
})();
