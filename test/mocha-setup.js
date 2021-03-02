require('babel-polyfill');
const {getTestBaseUrl} = require('./test-common');

const virtualConsole = require('jsdom').createVirtualConsole().sendTo(console);
require('jsdom-global')(undefined, {url: getTestBaseUrl(), virtualConsole});

const axios = require('axios');
const {wixAxiosConfig} = require('@wix/wix-axios-config');

wixAxiosConfig(axios, {baseURL: getTestBaseUrl()});
