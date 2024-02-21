// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatesAPI from 'cloudflare/resources/access/certificates/certificates';
import * as SettingsAPI from 'cloudflare/resources/access/certificates/settings';

export class Certificates extends APIResource {
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Adds a new mTLS root certificate to Access.
   */
  create(
    params: CertificateCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateCreateResponse> {
    const { account_id, zone_id, ...body } = params;
    return (
      this._client.post(`/${account_id}/${zone_id}/access/certificates`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured mTLS certificate.
   */
  update(
    uuid: string,
    params: CertificateUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateUpdateResponse> {
    const { account_id, zone_id, ...body } = params;
    return (
      this._client.put(`/${account_id}/${zone_id}/access/certificates/${uuid}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CertificateUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all mTLS root certificates.
   */
  list(
    params: CertificateListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateListResponse | null> {
    const { account_id, zone_id } = params;
    return (
      this._client.get(`/${account_id}/${zone_id}/access/certificates`, options) as Core.APIPromise<{
        result: CertificateListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an mTLS certificate.
   */
  delete(
    uuid: string,
    params: CertificateDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateDeleteResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.delete(
        `/${account_id}/${zone_id}/access/certificates/${uuid}`,
        options,
      ) as Core.APIPromise<{ result: CertificateDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single mTLS certificate.
   */
  get(
    uuid: string,
    params: CertificateGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificateGetResponse> {
    const { account_id, zone_id } = params;
    return (
      this._client.get(`/${account_id}/${zone_id}/access/certificates/${uuid}`, options) as Core.APIPromise<{
        result: CertificateGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CertificateCreateResponse {
  /**
   * The ID of the application that will use this certificate.
   */
  id?: unknown;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;

  created_at?: string;

  expires_on?: string;

  /**
   * The MD5 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * The name of the certificate.
   */
  name?: string;

  updated_at?: string;
}

export interface CertificateUpdateResponse {
  /**
   * The ID of the application that will use this certificate.
   */
  id?: unknown;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;

  created_at?: string;

  expires_on?: string;

  /**
   * The MD5 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * The name of the certificate.
   */
  name?: string;

  updated_at?: string;
}

export type CertificateListResponse = Array<CertificateListResponse.CertificateListResponseItem>;

export namespace CertificateListResponse {
  export interface CertificateListResponseItem {
    /**
     * The ID of the application that will use this certificate.
     */
    id?: unknown;

    /**
     * The hostnames of the applications that will use this certificate.
     */
    associated_hostnames?: Array<string>;

    created_at?: string;

    expires_on?: string;

    /**
     * The MD5 fingerprint of the certificate.
     */
    fingerprint?: string;

    /**
     * The name of the certificate.
     */
    name?: string;

    updated_at?: string;
  }
}

export interface CertificateDeleteResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface CertificateGetResponse {
  /**
   * The ID of the application that will use this certificate.
   */
  id?: unknown;

  /**
   * The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;

  created_at?: string;

  expires_on?: string;

  /**
   * The MD5 fingerprint of the certificate.
   */
  fingerprint?: string;

  /**
   * The name of the certificate.
   */
  name?: string;

  updated_at?: string;
}

export interface CertificateCreateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id: string;

  /**
   * Body param: The certificate content.
   */
  certificate: string;

  /**
   * Body param: The name of the certificate.
   */
  name: string;

  /**
   * Body param: The hostnames of the applications that will use this certificate.
   */
  associated_hostnames?: Array<string>;
}

export interface CertificateUpdateParams {
  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id: string;

  /**
   * Body param: The hostnames of the applications that will use this certificate.
   */
  associated_hostnames: Array<string>;

  /**
   * Body param: The name of the certificate.
   */
  name?: string;
}

export interface CertificateListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export interface CertificateDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export interface CertificateGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id: string;
}

export namespace Certificates {
  export import CertificateCreateResponse = CertificatesAPI.CertificateCreateResponse;
  export import CertificateUpdateResponse = CertificatesAPI.CertificateUpdateResponse;
  export import CertificateListResponse = CertificatesAPI.CertificateListResponse;
  export import CertificateDeleteResponse = CertificatesAPI.CertificateDeleteResponse;
  export import CertificateGetResponse = CertificatesAPI.CertificateGetResponse;
  export import CertificateCreateParams = CertificatesAPI.CertificateCreateParams;
  export import CertificateUpdateParams = CertificatesAPI.CertificateUpdateParams;
  export import CertificateListParams = CertificatesAPI.CertificateListParams;
  export import CertificateDeleteParams = CertificatesAPI.CertificateDeleteParams;
  export import CertificateGetParams = CertificatesAPI.CertificateGetParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingListParams = SettingsAPI.SettingListParams;
}
