#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { NetworkSpeedStack } from '../lib/network-speed-stack';

const app = new cdk.App();
new NetworkSpeedStack(app, 'NetworkSpeedStack');
