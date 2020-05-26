require('dotenv').config();

const sanityClient = require('@sanity/client');
const client = sanityClient({
  projectId: '',
  dataset: 'poc',
  token: process.env.ACCESS_TOKEN, 
  useCdn: true 
});

export default client;