/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.9.2
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */

import { HttpClient } from '../http';

import {
  BungieCredentialType,
  GeneralUser,
  GetCredentialTypesForAccountResponse,
  HardLinkedUserMembership,
  UserMembershipData,
  UserTheme
} from './interfaces.js';
import {
  BungieMembershipType,
  ServerResponse
} from '../common.js';

export interface GetBungieNetUserByIdParams {
  /** The requested Bungie.net membership id. */
  id: string;
}

/** Loads a bungienet user by membership id. */
export function getBungieNetUserById(http: HttpClient, params: GetBungieNetUserByIdParams): Promise<ServerResponse<GeneralUser>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetBungieNetUserById/${params.id}/`
  });
}

export interface SearchUsersParams {
  /** The search string. */
  q?: string;
}

/** Returns a list of possible users based on the search string */
export function searchUsers(http: HttpClient, params: SearchUsersParams): Promise<ServerResponse<GeneralUser[]>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/SearchUsers/',
    params: {
      q: params.q
    }
  });
}

export interface GetCredentialTypesForTargetAccountParams {
  /** The user's membership id */
  membershipId: string;
}

/** Returns a list of credential types attached to the requested account */
export function getCredentialTypesForTargetAccount(http: HttpClient, params: GetCredentialTypesForTargetAccountParams): Promise<ServerResponse<GetCredentialTypesForAccountResponse[]>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetCredentialTypesForTargetAccount/${params.membershipId}/`
  });
}

/** Returns a list of all available user themes. */
export function getAvailableThemes(http: HttpClient): Promise<ServerResponse<UserTheme[]>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetAvailableThemes/'
  });
}

export interface GetMembershipDataByIdParams {
  /** The membership ID of the target user. */
  membershipId: string;
  /** Type of the supplied membership ID. */
  membershipType: BungieMembershipType;
}

/**
 * Returns a list of accounts associated with the supplied membership ID and
 * membership type. This will include all linked accounts (even when hidden) if
 * supplied credentials permit it.
 */
export function getMembershipDataById(http: HttpClient, params: GetMembershipDataByIdParams): Promise<ServerResponse<UserMembershipData>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipsById/${params.membershipId}/${params.membershipType}/`
  });
}

/**
 * Returns a list of accounts associated with signed in user. This is useful for
 * OAuth implementations that do not give you access to the token response.
 */
export function getMembershipDataForCurrentUser(http: HttpClient): Promise<ServerResponse<UserMembershipData>> {
  return http({
    method: 'GET',
    url: 'https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/'
  });
}

export interface GetMembershipFromHardLinkedCredentialParams {
  /** The credential to look up. Must be a valid SteamID64. */
  credential: string;
  /** The credential type. 'SteamId' is the only valid value at present. */
  crType: BungieCredentialType;
}

/**
 * Gets any hard linked membership given a credential. Only works for credentials
 * that are public (just SteamID64 right now). Cross Save aware.
 */
export function getMembershipFromHardLinkedCredential(http: HttpClient, params: GetMembershipFromHardLinkedCredentialParams): Promise<ServerResponse<HardLinkedUserMembership>> {
  return http({
    method: 'GET',
    url: `https://www.bungie.net/Platform/User/GetMembershipFromHardLinkedCredential/${params.crType}/${params.credential}/`
  });
}
