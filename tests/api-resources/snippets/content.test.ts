// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource content', () => {
  // throwing HTTP 415
  test.skip('get: required and optional params', async () => {
    const response = await client.snippets.content.get('snippet_name_01', {
      zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
    });
  });
});
