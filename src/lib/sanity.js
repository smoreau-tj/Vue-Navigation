// require('dotenv').config();
const sanityClient = require('@sanity/client');

export const client = sanityClient({
  projectId: '',
  dataset: 'poc',
  token: process.env.ACCESS_TOKEN, 
  useCdn: false 
});

console.log('client', client, 'token', process.env.ACCESS_TOKEN, 'project id', process.env.PROJECT_ID );

