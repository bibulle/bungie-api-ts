/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.8.1
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-ts code generator program.
 * https://github.com/DestinyItemManager/bungie-api-ts
 * Do not edit these files manually.
 */
import { HttpClient } from '../http';
import { PartnerOfferClaimRequest, PartnerOfferSkuHistoryResponse } from './interfaces.js';
import { ServerResponse } from '../common.js';
/** Claim a partner offer as the authenticated user. */
export declare function claimPartnerOffer(
  http: HttpClient,
  body: PartnerOfferClaimRequest
): Promise<ServerResponse<boolean>>;
export interface ApplyMissingPartnerOffersWithoutClaimParams {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /**
   * The bungie.net user to apply missing offers to. If not self, elevated
   * permissions are required.
   */
  targetBnetMembershipId: string;
}
/**
 * Apply a partner offer to the targeted user. This endpoint does not claim a new
 * offer, but any already claimed offers will be applied to the game if not already.
 */
export declare function applyMissingPartnerOffersWithoutClaim(
  http: HttpClient,
  params: ApplyMissingPartnerOffersWithoutClaimParams
): Promise<ServerResponse<boolean>>;
export interface GetPartnerOfferSkuHistoryParams {
  /** The partner application identifier. */
  partnerApplicationId: number;
  /**
   * The bungie.net user to apply missing offers to. If not self, elevated
   * permissions are required.
   */
  targetBnetMembershipId: string;
}
/**
 * Returns the partner sku and offer history of the targeted user. Elevated
 * permissions are required to see users that are not yourself.
 */
export declare function getPartnerOfferSkuHistory(
  http: HttpClient,
  params: GetPartnerOfferSkuHistoryParams
): Promise<ServerResponse<PartnerOfferSkuHistoryResponse[]>>;
