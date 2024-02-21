// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConnectionTamperingAPI from 'cloudflare/resources/radar/connection-tampering';
import * as DatasetsAPI from 'cloudflare/resources/radar/datasets';
import * as SearchAPI from 'cloudflare/resources/radar/search';
import * as AnnotationsAPI from 'cloudflare/resources/radar/annotations/annotations';
import * as As112API from 'cloudflare/resources/radar/as112/as112';
import * as AttacksAPI from 'cloudflare/resources/radar/attacks/attacks';
import * as BGPAPI from 'cloudflare/resources/radar/bgp/bgp';
import * as DNSAPI from 'cloudflare/resources/radar/dns/dns';
import * as EmailAPI from 'cloudflare/resources/radar/email/email';
import * as EmailsAPI from 'cloudflare/resources/radar/emails/emails';
import * as EntitiesAPI from 'cloudflare/resources/radar/entities/entities';
import * as HTTPAPI from 'cloudflare/resources/radar/http/http';
import * as NetflowsAPI from 'cloudflare/resources/radar/netflows/netflows';
import * as QualityAPI from 'cloudflare/resources/radar/quality/quality';
import * as RankingAPI from 'cloudflare/resources/radar/ranking/ranking';
import * as TrafficAnomaliesAPI from 'cloudflare/resources/radar/traffic-anomalies/traffic-anomalies';
import * as VerifiedBotsAPI from 'cloudflare/resources/radar/verified-bots/verified-bots';

export class Radar extends APIResource {
  annotations: AnnotationsAPI.Annotations = new AnnotationsAPI.Annotations(this._client);
  bgp: BGPAPI.BGP = new BGPAPI.BGP(this._client);
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  netflows: NetflowsAPI.Netflows = new NetflowsAPI.Netflows(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  verifiedBots: VerifiedBotsAPI.VerifiedBots = new VerifiedBotsAPI.VerifiedBots(this._client);
  as112: As112API.As112 = new As112API.As112(this._client);
  connectionTampering: ConnectionTamperingAPI.ConnectionTampering =
    new ConnectionTamperingAPI.ConnectionTampering(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  attacks: AttacksAPI.Attacks = new AttacksAPI.Attacks(this._client);
  emails: EmailsAPI.Emails = new EmailsAPI.Emails(this._client);
  entities: EntitiesAPI.Entities = new EntitiesAPI.Entities(this._client);
  http: HTTPAPI.HTTP = new HTTPAPI.HTTP(this._client);
  quality: QualityAPI.Quality = new QualityAPI.Quality(this._client);
  ranking: RankingAPI.Ranking = new RankingAPI.Ranking(this._client);
  trafficAnomalies: TrafficAnomaliesAPI.TrafficAnomalies = new TrafficAnomaliesAPI.TrafficAnomalies(
    this._client,
  );
}

export namespace Radar {
  export import Annotations = AnnotationsAPI.Annotations;
  export import BGP = BGPAPI.BGP;
  export import BGPTimeseriesResponse = BGPAPI.BGPTimeseriesResponse;
  export import BGPTimeseriesParams = BGPAPI.BGPTimeseriesParams;
  export import Datasets = DatasetsAPI.Datasets;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetDownloadResponse = DatasetsAPI.DatasetDownloadResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetDownloadParams = DatasetsAPI.DatasetDownloadParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import DNS = DNSAPI.DNS;
  export import Netflows = NetflowsAPI.Netflows;
  export import NetflowTimeseriesResponse = NetflowsAPI.NetflowTimeseriesResponse;
  export import NetflowTimeseriesParams = NetflowsAPI.NetflowTimeseriesParams;
  export import Search = SearchAPI.Search;
  export import SearchGlobalResponse = SearchAPI.SearchGlobalResponse;
  export import SearchGlobalParams = SearchAPI.SearchGlobalParams;
  export import VerifiedBots = VerifiedBotsAPI.VerifiedBots;
  export import As112 = As112API.As112;
  export import As112TimeseriesResponse = As112API.As112TimeseriesResponse;
  export import As112TimeseriesParams = As112API.As112TimeseriesParams;
  export import ConnectionTampering = ConnectionTamperingAPI.ConnectionTampering;
  export import ConnectionTamperingSummaryResponse = ConnectionTamperingAPI.ConnectionTamperingSummaryResponse;
  export import ConnectionTamperingTimeseriesGroupsResponse = ConnectionTamperingAPI.ConnectionTamperingTimeseriesGroupsResponse;
  export import ConnectionTamperingSummaryParams = ConnectionTamperingAPI.ConnectionTamperingSummaryParams;
  export import ConnectionTamperingTimeseriesGroupsParams = ConnectionTamperingAPI.ConnectionTamperingTimeseriesGroupsParams;
  export import Email = EmailAPI.Email;
  export import Attacks = AttacksAPI.Attacks;
  export import Emails = EmailsAPI.Emails;
  export import Entities = EntitiesAPI.Entities;
  export import EntityGetResponse = EntitiesAPI.EntityGetResponse;
  export import EntityGetParams = EntitiesAPI.EntityGetParams;
  export import HTTP = HTTPAPI.HTTP;
  export import Quality = QualityAPI.Quality;
  export import Ranking = RankingAPI.Ranking;
  export import RankingTimeseriesGroupsResponse = RankingAPI.RankingTimeseriesGroupsResponse;
  export import RankingTimeseriesGroupsParams = RankingAPI.RankingTimeseriesGroupsParams;
  export import TrafficAnomalies = TrafficAnomaliesAPI.TrafficAnomalies;
  export import TrafficAnomalyGetResponse = TrafficAnomaliesAPI.TrafficAnomalyGetResponse;
  export import TrafficAnomalyGetParams = TrafficAnomaliesAPI.TrafficAnomalyGetParams;
}
