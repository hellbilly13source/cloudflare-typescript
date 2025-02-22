// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource groups', () => {
  // TODO: investigate broken test
  test.skip('create: only required params', async () => {
    const responsePromise = client.zeroTrust.access.groups.create({
      include: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      name: 'Allow devs',
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('create: required and optional params', async () => {
    const response = await client.zeroTrust.access.groups.create({
      include: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      name: 'Allow devs',
      account_id: 'account_id',
      exclude: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      is_default: true,
      require: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
    });
  });

  // TODO: investigate broken test
  test.skip('update: only required params', async () => {
    const responsePromise = client.zeroTrust.access.groups.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      include: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      name: 'Allow devs',
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('update: required and optional params', async () => {
    const response = await client.zeroTrust.access.groups.update('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      include: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      name: 'Allow devs',
      account_id: 'account_id',
      exclude: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
      is_default: true,
      require: [{ group: { id: 'aa0a4aab-672b-4bdb-bc33-a59f1130a11f' } }],
    });
  });

  // TODO: investigate broken test
  test.skip('list', async () => {
    const responsePromise = client.zeroTrust.access.groups.list({ account_id: 'account_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('delete', async () => {
    const responsePromise = client.zeroTrust.access.groups.delete('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate broken test
  test.skip('get', async () => {
    const responsePromise = client.zeroTrust.access.groups.get('f174e90a-fafe-4643-bbbc-4a0ed4fc8415', {
      account_id: 'account_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
