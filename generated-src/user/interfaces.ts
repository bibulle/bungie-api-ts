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

import {
  BungieMembershipType
} from '../common.js';
import {
  GroupUserInfoCard
} from '../groupv2/interfaces.js';
import {
  IgnoreResponse
} from '../platform.js';

/**
 * This contract supplies basic information commonly used to display a minimal
 * amount of information about a user. Take care to not add more properties here
 * unless the property applies in all (or at least the majority) of the situations
 * where UserInfoCard is used. Avoid adding game specific or platform specific
 * details here. In cases where UserInfoCard is a subset of the data needed in a
 * contract, use UserInfoCard as a property of other contracts.
 */
export interface UserInfoCard {
  /**
   * A platform specific additional display name - ex: psn Real Name, bnet Unique
   * Name, etc.
   */
  readonly supplementalDisplayName: string;
  /** URL the Icon if available. */
  readonly iconPath: string;
  /**
   * If there is a cross save override in effect, this value will tell you the type
   * that is overridding this one.
   */
  readonly crossSaveOverride: BungieMembershipType;
  /**
   * The list of Membership Types indicating the platforms on which this Membership
   * can be used.
   *
   * Not in Cross Save = its original membership type. Cross Save Primary = Any
   * membership types it is overridding, and its original membership type Cross Save
   * Overridden = Empty list
   */
  readonly applicableMembershipTypes: BungieMembershipType[];
  /** If True, this is a public user membership. */
  readonly isPublic: boolean;
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
}

/**
 * The types of credentials the Accounts system supports. This is the external
 * facing enum used in place of the internal-only Bungie.SharedDefinitions.
 * CredentialType.
 */
export const enum BungieCredentialType {
  None = 0,
  Xuid = 1,
  Psnid = 2,
  Wlid = 3,
  Fake = 4,
  Facebook = 5,
  Google = 8,
  Windows = 9,
  DemonId = 10,
  SteamId = 12,
  BattleNetId = 14,
  StadiaId = 16,
  TwitchId = 18
}

export interface GeneralUser {
  readonly membershipId: string;
  readonly uniqueName: string;
  readonly normalizedName: string;
  readonly displayName: string;
  readonly profilePicture: number;
  readonly profileTheme: number;
  readonly userTitle: number;
  readonly successMessageFlags: string;
  readonly isDeleted: boolean;
  readonly about: string;
  readonly firstAccess?: string;
  readonly lastUpdate?: string;
  readonly legacyPortalUID?: string;
  readonly context: UserToUserContext;
  readonly psnDisplayName: string;
  readonly xboxDisplayName: string;
  readonly fbDisplayName: string;
  readonly showActivity?: boolean;
  readonly locale: string;
  readonly localeInheritDefault: boolean;
  readonly lastBanReportId?: string;
  readonly showGroupMessaging: boolean;
  readonly profilePicturePath: string;
  readonly profilePictureWidePath: string;
  readonly profileThemeName: string;
  readonly userTitleDisplay: string;
  readonly statusText: string;
  readonly statusDate: string;
  readonly profileBanExpire?: string;
  readonly blizzardDisplayName: string;
  readonly steamDisplayName: string;
  readonly stadiaDisplayName: string;
  readonly twitchDisplayName: string;
}

export interface UserToUserContext {
  readonly isFollowing: boolean;
  readonly ignoreStatus: IgnoreResponse;
  readonly globalIgnoreEndDate?: string;
}

export interface UserTheme {
  readonly userThemeId: number;
  readonly userThemeName: string;
  readonly userThemeDescription: string;
}

export interface UserMembershipData {
  /**
   * this allows you to see destiny memberships that are visible and linked to this
   * account (regardless of whether or not they have characters on the world server)
   */
  readonly destinyMemberships: GroupUserInfoCard[];
  /**
   * If this property is populated, it will have the membership ID of the account
   * considered to be "primary" in this user's cross save relationship.
   *
   * If null, this user has no cross save relationship, nor primary account.
   */
  readonly primaryMembershipId?: string;
  readonly bungieNetUser: GeneralUser;
}

export interface HardLinkedUserMembership {
  readonly membershipType: BungieMembershipType;
  readonly membershipId: string;
  readonly CrossSaveOverriddenType: BungieMembershipType;
  readonly CrossSaveOverriddenMembershipId?: string;
}

/** Very basic info about a user as returned by the Account server. */
export interface UserMembership {
  /** Type of the membership. Not necessarily the native type. */
  readonly membershipType: BungieMembershipType;
  /** Membership ID as they user is known in the Accounts service */
  readonly membershipId: string;
  /**
   * Display Name the player has chosen for themselves. The display name is optional
   * when the data type is used as input to a platform API.
   */
  readonly displayName: string;
}
