import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import { TextDecoder } from 'util';
import { functionName } from '../infrastructure/lib/network-station-stack';

(async () => {
  const client = new LambdaClient({});
  const command = new InvokeCommand({
    FunctionName: functionName
  });
  const response = await client.send(command);

  const decoder = new TextDecoder('utf-8');
  const results = JSON.parse(decoder.decode(response.Payload));

  console.table(results);
})();
