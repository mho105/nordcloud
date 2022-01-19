#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { NetworkStationStack } from '../lib/network-station-stack';

const app = new cdk.App();
new NetworkStationStack(app, 'NetworkStationStack');
