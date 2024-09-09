/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Address = {
  additionalDetails?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  county?: Maybe<Scalars['String']['output']>;
  province?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  streetAddress?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['Int']['output']>;
};

export type AdminAddUserPermissionsData = {
  userId: Scalars['String']['output'];
};

export type AdminCheckAuthorizationData = {
  isAuthorize: Scalars['Boolean']['output'];
};

export type AdminFetchAdminLogsData = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<AdminUserLogsData>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type AdminFetchAllPermissionsData = {
  permissions: Array<UserPermissionType>;
};

export type AdminFetchAllRolesData = {
  roles: Array<UserRole>;
};

export type AdminFetchAllTransactions = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<AdminTransactionDetails>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type AdminFetchAllUsersPayload = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<UserCompleteData>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type AdminFetchCryptoTransactionReportData = {
  createdAt: Scalars['String']['output'];
  cryptoTransactionTransfers: Array<CryptoTransactionTransferData>;
  cryptoWallet: CryptoWalletBasicData;
  reportId: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['String']['output']>;
  transactionHash: Scalars['String']['output'];
  type: CryptoWalletType;
};

export type AdminFetchCryptoTransactionReportsData = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<CryptoTransactionBasicData>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type AdminFetchCryptoWalletsData = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<CryptoWallet>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type AdminFetchCurrentUserDetailsData = {
  auth0UserId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  permissions: Array<UserPermissionType>;
  profile?: Maybe<AdminUserProfile>;
  role: UserRole;
  updatedAt: Scalars['String']['output'];
};

export type AdminFetchOrganizationsData = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<Organization>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type AdminFetchTransactionsCountData = {
  allCount: Array<AdminTransactionsCountData>;
  completeCount: Array<AdminTransactionsCountData>;
  failedCount: Array<AdminTransactionsCountData>;
  pendingCount: Array<AdminTransactionsCountData>;
  totalCount: Scalars['Int']['output'];
};

export type AdminFetchTypesAndStatusData = {
  principalTransactionStatus: Array<PrincipalTransactionStatus>;
  principalTransactionType: Array<PrincipalTransactionType>;
  userLogType: Array<UserLogType>;
  userVerificationStatus: Array<UserVerificationStatus>;
};

export type AdminFetchUserAccountLimitsData = {
  incoming: CreditsPerPeriods;
  outgoing: CreditsPerPeriods;
  walletBalance: CreditsLeft;
};

export type AdminFetchUserLogsData = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<AdminUserLogsData>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type AdminFetchUserVerificationsPayload = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<UserVerification>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type AdminFetchUserWalletAccountsData = {
  walletAccounts: Array<WalletAccount>;
};

export type AdminFetchUsersCountData = {
  roleCount: Array<AdminUsersRoleCountData>;
  totalCount: Scalars['Int']['output'];
  verificationStatusCount: Array<AdminUsersVerificationStatusCountData>;
};

export type AdminFetchVerificationsCountData = {
  statusCount: Array<AdminVerificationsCountData>;
  totalCount: Scalars['Int']['output'];
};

export type AdminFetchWalletAccountBalanceData = {
  availableBalance: Scalars['Float']['output'];
};

export type AdminManageCryptoWalletAccessControlData = {
  cryptoWallet: UpdateCryptoWalletData;
};

export type AdminMutation = {
  adminAddUserPermissions: AdminAddUserPermissionsData;
  adminCheckAuthorize: AdminCheckAuthorizationData;
  adminCreateOrganization: Organization;
  adminManageCryptoWalletAccessControl: AdminManageCryptoWalletAccessControlData;
  adminRevokeUserPermissions: AdminRevokeUserPermissions;
  adminUpdateCryptoWalletAMLScore: AdminUpdateCryptoWalletAmlScoreData;
  adminUpdateUserDetails: AdminUpdateUserDetailsData;
  adminUpdateUserRole: AdminUpdateUserRoleData;
};


export type AdminMutationAdminAddUserPermissionsArgs = {
  permissions: Array<UserPermissionType>;
  userId: Scalars['String']['input'];
};


export type AdminMutationAdminCreateOrganizationArgs = {
  data: CreateOrganizationInput;
};


export type AdminMutationAdminManageCryptoWalletAccessControlArgs = {
  cryptoWalletId: Scalars['String']['input'];
  isBlocked: Scalars['Boolean']['input'];
};


export type AdminMutationAdminRevokeUserPermissionsArgs = {
  permissions: Array<UserPermissionType>;
  userId: Scalars['String']['input'];
};


export type AdminMutationAdminUpdateCryptoWalletAmlScoreArgs = {
  cryptoWalletId: Scalars['String']['input'];
};


export type AdminMutationAdminUpdateUserDetailsArgs = {
  userData: UpdateUserInput;
  userId: Scalars['ID']['input'];
};


export type AdminMutationAdminUpdateUserRoleArgs = {
  role: UserRole;
  userId: Scalars['String']['input'];
};

export type AdminQuery = {
  adminFetchAdminLogs: AdminFetchAdminLogsData;
  adminFetchAllPermissions: AdminFetchAllPermissionsData;
  adminFetchAllRoles: AdminFetchAllRolesData;
  adminFetchAllTransactions: AdminFetchAllTransactions;
  adminFetchAllUsers: AdminFetchAllUsersPayload;
  adminFetchCryptoTransactionReport: AdminFetchCryptoTransactionReportData;
  adminFetchCryptoTransactionReports: AdminFetchCryptoTransactionReportsData;
  adminFetchCryptoWalletDetails: CryptoWallet;
  adminFetchCryptoWallets: AdminFetchCryptoWalletsData;
  adminFetchCurrentUserDetails?: Maybe<AdminFetchCurrentUserDetailsData>;
  adminFetchOrganizationById: Organization;
  adminFetchOrganizations: AdminFetchOrganizationsData;
  adminFetchTransactionDetails?: Maybe<AdminTransactionDetails>;
  adminFetchTransactionsCount: AdminFetchTransactionsCountData;
  adminFetchTypesAndStatus: AdminFetchTypesAndStatusData;
  adminFetchUserAccountLimits: AdminFetchUserAccountLimitsData;
  adminFetchUserCryptoWallets: FetchUserCryptoWalletsData;
  adminFetchUserDetails?: Maybe<AdminUserDetails>;
  adminFetchUserLatestVerification: Array<UserVerification>;
  adminFetchUserLogs: AdminFetchUserLogsData;
  adminFetchUserVerification?: Maybe<UserVerification>;
  adminFetchUserVerifications: AdminFetchUserVerificationsPayload;
  adminFetchUserWalletAccounts: AdminFetchUserWalletAccountsData;
  adminFetchUsersCount: AdminFetchUsersCountData;
  adminFetchVerificationsCount: AdminFetchVerificationsCountData;
  adminFetchWalletAccountBalance: AdminFetchWalletAccountBalanceData;
  adminGetUserPermissions: Array<GetUserPermissions>;
};


export type AdminQueryAdminFetchAdminLogsArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<UserLogsSortByInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFilter?: InputMaybe<Array<InputMaybe<UserLogType>>>;
};


export type AdminQueryAdminFetchAllTransactionsArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<TransactionSortByInput>;
  statusFilter?: InputMaybe<Array<InputMaybe<PrincipalTransactionStatus>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFilter?: InputMaybe<Array<InputMaybe<PrincipalTransactionType>>>;
};


export type AdminQueryAdminFetchAllUsersArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<UserSortByInput>;
  statusFilter?: InputMaybe<Array<InputMaybe<UserVerificationStatus>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminQueryAdminFetchCryptoTransactionReportArgs = {
  transactionReportId: Scalars['String']['input'];
};


export type AdminQueryAdminFetchCryptoTransactionReportsArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<CryptoTransactionsSortByInput>;
  statusFilter?: InputMaybe<Array<InputMaybe<CryptoTransactionStatus>>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminQueryAdminFetchCryptoWalletDetailsArgs = {
  walletAddress: Scalars['String']['input'];
};


export type AdminQueryAdminFetchCryptoWalletsArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<CryptoWalletsSortByInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminQueryAdminFetchOrganizationByIdArgs = {
  organizationId: Scalars['String']['input'];
};


export type AdminQueryAdminFetchOrganizationsArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<OrganizationSortByInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminQueryAdminFetchTransactionDetailsArgs = {
  id: Scalars['String']['input'];
};


export type AdminQueryAdminFetchUserAccountLimitsArgs = {
  userId: Scalars['String']['input'];
};


export type AdminQueryAdminFetchUserCryptoWalletsArgs = {
  userId: Scalars['String']['input'];
};


export type AdminQueryAdminFetchUserDetailsArgs = {
  userId: Scalars['String']['input'];
};


export type AdminQueryAdminFetchUserLatestVerificationArgs = {
  userId: Scalars['String']['input'];
};


export type AdminQueryAdminFetchUserLogsArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<UserLogsSortByInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
  typeFilter?: InputMaybe<Array<InputMaybe<UserLogType>>>;
};


export type AdminQueryAdminFetchUserVerificationArgs = {
  id: Scalars['String']['input'];
};


export type AdminQueryAdminFetchUserVerificationsArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  query?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<UserVerificationSortByInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type AdminQueryAdminFetchUserWalletAccountsArgs = {
  userId: Scalars['String']['input'];
};


export type AdminQueryAdminFetchWalletAccountBalanceArgs = {
  accountNumber: Scalars['String']['input'];
};


export type AdminQueryAdminGetUserPermissionsArgs = {
  userId: Scalars['String']['input'];
};

export type AdminRevokeUserPermissions = {
  userId: Scalars['String']['output'];
};

export type AdminTransactionDetails = {
  amount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  payee: WalletAccountOwnerUnion;
  payeeBalance: Scalars['Float']['output'];
  payor: WalletAccountOwnerUnion;
  payorBalance: Scalars['Float']['output'];
  status: PrincipalTransactionStatus;
  type: TransactionType;
  updatedAt: Scalars['String']['output'];
};

export type AdminTransactionsCountData = {
  count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  sum: Scalars['Int']['output'];
};

export type AdminUpdateCryptoWalletAmlScoreData = {
  cryptoWallet: UpdateCryptoWalletData;
};

export type AdminUpdateUserDetailsData = {
  userId: Scalars['ID']['output'];
};

export type AdminUpdateUserRoleData = {
  userId: Scalars['String']['output'];
};

export type AdminUserDetails = {
  address?: Maybe<Address>;
  createdAt: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  profile?: Maybe<UserProfile>;
  role: UserRole;
  updatedAt: Scalars['String']['output'];
};

export type AdminUserLogsData = {
  adminId: Scalars['String']['output'];
  adminUser?: Maybe<UserCompleteData>;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<UserCompleteData>;
  userId: Scalars['String']['output'];
};

export type AdminUserProfile = {
  createdAt: Scalars['String']['output'];
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  userProfilePicture?: Maybe<UserProfilePictureType>;
};

export type AdminUsersRoleCountData = {
  count: Scalars['Int']['output'];
  name: UserRole;
};

export type AdminUsersVerificationStatusCountData = {
  count: Scalars['Int']['output'];
  name: UserVerificationStatus;
};

export type AdminVerificationsCountData = {
  count: Scalars['Int']['output'];
  name: ReviewStatus;
};

export type BillersInformation = {
  category: Scalars['String']['output'];
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type BillersOptionsData = {
  label: Scalars['String']['output'];
  option: Scalars['String']['output'];
};

export type BillersQuery = {
  fetchBillerOtherInfoParameters: FetchBillerOtherInfoParametersData;
  fetchBillersByCategory: FetchBillersByCategoryData;
  fetchOtherCharges: FetchOtherChargesData;
};


export type BillersQueryFetchBillerOtherInfoParametersArgs = {
  billerCode: Scalars['String']['input'];
};


export type BillersQueryFetchBillersByCategoryArgs = {
  category: Scalars['String']['input'];
};


export type BillersQueryFetchOtherChargesArgs = {
  billerCode: Scalars['String']['input'];
};

export type BillersRulesData = {
  message: Scalars['String']['output'];
  options: Array<BillersOptionsData>;
  rule: Scalars['String']['output'];
};

export type BillsPaymentParametersData = {
  field: Scalars['String']['output'];
  label: Scalars['String']['output'];
  rules: Array<BillersRulesData>;
};

export type CardDetailsInput = {
  bankCode?: InputMaybe<Scalars['String']['input']>;
  cardNumber?: InputMaybe<Scalars['String']['input']>;
  cvc?: InputMaybe<Scalars['String']['input']>;
  expiryMonth?: InputMaybe<Scalars['Int']['input']>;
  expiryYear?: InputMaybe<Scalars['Int']['input']>;
};

export enum CashOutProviderType {
  Paycools = 'Paycools',
  Paymongo = 'Paymongo'
}

export type CheckBiometricData = {
  existing: Scalars['Boolean']['output'];
  isSameBiometric: Scalars['Boolean']['output'];
};

export type CheckCryptoWalletData = {
  existing: Scalars['Boolean']['output'];
};

export type CheckExistingNumberData = {
  existing: Scalars['Boolean']['output'];
};

export type CheckWalletAccountAliasData = {
  existing: Scalars['Boolean']['output'];
};

export enum CivilStatus {
  Divorced = 'DIVORCED',
  Married = 'MARRIED',
  Separated = 'SEPARATED',
  Single = 'SINGLE',
  Widowed = 'WIDOWED'
}

export type CreateOrganizationInput = {
  name: Scalars['String']['input'];
};

export type CreateVerificationData = {
  id: Scalars['String']['output'];
};

export type CreateVerificationInput = {
  birthDate: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  images: Array<Scalars['Upload']['input']>;
};

export type CreateWalletAccountInput = {
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  type: WalletAccountType;
};

export type CreditsLeft = {
  limit: Scalars['Float']['output'];
  used: Scalars['Float']['output'];
};

export type CreditsPerPeriods = {
  daily: CreditsLeft;
  monthly: CreditsLeft;
};

export type CryptoTransactionBasicData = {
  createdAt: Scalars['String']['output'];
  reportId: Scalars['String']['output'];
  transactionHash: Scalars['String']['output'];
};

export enum CryptoTransactionStatus {
  Completed = 'COMPLETED',
  Error = 'ERROR',
  New = 'NEW',
  Processing = 'PROCESSING',
  Scheduled = 'SCHEDULED',
  ToClose = 'TO_CLOSE'
}

export type CryptoTransactionTransferData = {
  amount: Scalars['Float']['output'];
  amountUSD: Scalars['Float']['output'];
  cScore: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isSender: Scalars['Boolean']['output'];
  walletAddress: Scalars['String']['output'];
};

export type CryptoTransactionsSortByInput = {
  key: CryptoTransactionsSortKeyType;
  sortOrder: SortOrder;
};

export enum CryptoTransactionsSortKeyType {
  CreatedAt = 'createdAt',
  Id = 'id'
}

export type CryptoWallet = {
  alias: Scalars['String']['output'];
  balance: Scalars['Float']['output'];
  cScore: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isBlocked: Scalars['Boolean']['output'];
  lastOpen?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  riskLevel?: Maybe<CryptoWalletRiskLevel>;
  type: CryptoWalletType;
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  walletAddress: Scalars['String']['output'];
};

export type CryptoWalletBasicData = {
  alias?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  walletAddress: Scalars['String']['output'];
};

export type CryptoWalletData = {
  alias?: Maybe<Scalars['String']['output']>;
  cScore?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  lastOpen?: Maybe<Scalars['String']['output']>;
  riskLevel?: Maybe<RiskLevelType>;
  supportedTokens?: Maybe<Array<SupportedToken>>;
  type: CryptoWalletType;
  updatedAt: Scalars['String']['output'];
  user: UserCompleteData;
  userId: Scalars['String']['output'];
  walletAddress: Scalars['String']['output'];
};

export enum CryptoWalletRiskLevel {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export enum CryptoWalletType {
  Bnb = 'BNB',
  Btc = 'BTC',
  Eth = 'ETH',
  Matic = 'MATIC'
}

export type CryptoWalletsSortByInput = {
  key: CryptoWalletsSortKeyType;
  sortOrder: SortOrder;
};

export enum CryptoWalletsSortKeyType {
  CreatedAt = 'createdAt',
  Id = 'id',
  RiskLevel = 'riskLevel',
  UserId = 'userId',
  WalletAddress = 'walletAddress'
}

export type CurrentUserMutation = {
  activateCryptoWallet: CryptoWalletData;
  checkBiometric: CheckBiometricData;
  checkWalletAccountAlias: CheckWalletAccountAliasData;
  createVerification: CreateVerificationData;
  generateStaticQRPHCode?: Maybe<GenerateStaticQrphCodeData>;
  getRefreshToken: GetRefreshTokenPayload;
  payBills: PayBillsData;
  registerUser: User;
  renewAccessToken: RenewAccessTokenPayload;
  requestCashIn: RequestCashInData;
  requestCashOut: RequestCashOutData;
  requestExpressSend: RequestExpressSendData;
  saveBiometric: SaveBiometricData;
  saveCryptoTransaction: SaveCryptoTransactionData;
  saveCryptoWallet: SaveCryptoWalletData;
  updateCryptoWalletBalance: UpdateCryptoWalletBalanceData;
  updatePin: UpdatePinData;
  updateUser: UpdateUserData;
  updateWalletAccountAlias: UpdateWalletAccountAliasData;
  verifyBiometric: VerifyBiometricData;
  verifyPin: PinVerificationPayload;
};


export type CurrentUserMutationActivateCryptoWalletArgs = {
  type: CryptoWalletType;
  walletAddress: Scalars['String']['input'];
};


export type CurrentUserMutationCheckBiometricArgs = {
  biometric?: InputMaybe<Scalars['String']['input']>;
};


export type CurrentUserMutationCheckWalletAccountAliasArgs = {
  alias: Scalars['String']['input'];
};


export type CurrentUserMutationCreateVerificationArgs = {
  data: CreateVerificationInput;
};


export type CurrentUserMutationGenerateStaticQrphCodeArgs = {
  accountNumber: Scalars['String']['input'];
};


export type CurrentUserMutationPayBillsArgs = {
  data: PayBillsInput;
};


export type CurrentUserMutationRegisterUserArgs = {
  userData?: InputMaybe<RegisterUserInput>;
};


export type CurrentUserMutationRenewAccessTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type CurrentUserMutationRequestCashInArgs = {
  data: RequestCashInInput;
};


export type CurrentUserMutationRequestCashOutArgs = {
  data: RequestCashOutInput;
};


export type CurrentUserMutationRequestExpressSendArgs = {
  data: RequestExpressSendInput;
};


export type CurrentUserMutationSaveBiometricArgs = {
  biometric: Scalars['String']['input'];
};


export type CurrentUserMutationSaveCryptoTransactionArgs = {
  data: SaveCryptoTransactionInput;
};


export type CurrentUserMutationSaveCryptoWalletArgs = {
  data: SaveCryptoWalletInput;
};


export type CurrentUserMutationUpdateCryptoWalletBalanceArgs = {
  data: UpdateCryptoWalletBalanceInput;
};


export type CurrentUserMutationUpdatePinArgs = {
  data: UpdatePinInput;
};


export type CurrentUserMutationUpdateUserArgs = {
  userData: UpdateUserInput;
};


export type CurrentUserMutationUpdateWalletAccountAliasArgs = {
  accountNumber: Scalars['String']['input'];
  alias: Scalars['String']['input'];
};


export type CurrentUserMutationVerifyBiometricArgs = {
  sign: Scalars['String']['input'];
};


export type CurrentUserMutationVerifyPinArgs = {
  pin: Scalars['String']['input'];
};

export type CurrentUserQuery = {
  checkCryptoWallet: CheckCryptoWalletData;
  checkExistingNumber: CheckExistingNumberData;
  fetchCryptoWallet: CryptoWalletData;
  fetchCryptoWallets: FetchUserCryptoWalletsData;
  fetchCurrentUserActiveVerifications: Array<UserVerification>;
  fetchCurrentUserLatestVerification: Array<UserVerification>;
  fetchTransactionSumsByPeriod: FetchTransactionSumsByPeriodData;
  fetchUserTransactionDetails?: Maybe<FetchUserTransactionDetailsData>;
  fetchUserTransactions: FetchUserAllTransactionsData;
  fetchWalletAccountBalance: FetchCurrentWalletBalanceData;
  fetchWalletAccounts: FetchCurrentUserWalletAccountsData;
  getCurrentUserDetails: GetCurrentUserDetailsData;
  searchWalletAccounts: SearchWalletAccountsData;
};


export type CurrentUserQueryCheckCryptoWalletArgs = {
  type: CryptoWalletType;
  walletAddress: Scalars['String']['input'];
};


export type CurrentUserQueryCheckExistingNumberArgs = {
  mobileNumber: Scalars['String']['input'];
};


export type CurrentUserQueryFetchCryptoWalletArgs = {
  type: CryptoWalletType;
  walletAddress: Scalars['String']['input'];
};


export type CurrentUserQueryFetchTransactionSumsByPeriodArgs = {
  accountNumber: Scalars['String']['input'];
};


export type CurrentUserQueryFetchUserTransactionDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type CurrentUserQueryFetchUserTransactionsArgs = {
  continuationToken?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<TransactionSortByInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type CurrentUserQueryFetchWalletAccountBalanceArgs = {
  accountNumber: Scalars['String']['input'];
};


export type CurrentUserQuerySearchWalletAccountsArgs = {
  query: Scalars['String']['input'];
};

export type DefaultCryptoTransactionData = {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type DefaultTransactionData = {
  amount: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type FetchBillerOtherInfoParametersData = {
  parameters: Array<BillsPaymentParametersData>;
};

export type FetchBillersByCategoryData = {
  billers: Array<BillersInformation>;
};

export type FetchCurrentCashoutProviderData = {
  provider: CashOutProviderType;
};

export type FetchCurrentUserWalletAccountsData = {
  walletAccounts: Array<WalletAccount>;
};

export type FetchCurrentWalletBalanceData = {
  availableBalance: Scalars['Float']['output'];
};

export type FetchOtherChargesData = {
  otherCharges: Scalars['Float']['output'];
};

export type FetchTransactionSumsByPeriodData = {
  incoming: CreditsPerPeriods;
  outgoing: CreditsPerPeriods;
  walletBalance: CreditsLeft;
};

export type FetchUserAllTransactionsData = {
  continuationToken?: Maybe<Scalars['String']['output']>;
  items: Array<FetchUserTransactionDetailsData>;
  itemsPerPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
};

export type FetchUserCryptoWalletsData = {
  cryptoWallets: Array<CryptoWalletData>;
};

export type FetchUserTransactionDetailsData = {
  amount: Scalars['Float']['output'];
  balance: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  payee: WalletAccountOwnerUnion;
  payor: WalletAccountOwnerUnion;
  status: PrincipalTransactionStatus;
  type: TransactionType;
  updatedAt: Scalars['String']['output'];
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type GenerateStaticQrphCodeData = {
  qrImage: Scalars['String']['output'];
};

export type GetCurrentUserDetailsData = {
  address?: Maybe<Address>;
  auth0UserId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  photoUrl?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<UserProfile>;
  role: UserRole;
  updatedAt: Scalars['String']['output'];
};

export type GetRefreshTokenPayload = {
  refreshToken: Scalars['String']['output'];
  refreshTokenExpiresAt: Scalars['Int']['output'];
};

export type GetUserPermissions = {
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  type: UserPermissionType;
};

export type IdentityVerificationDetails = {
  backIdPhotoUrl?: Maybe<Scalars['String']['output']>;
  device?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Scalars['String']['output']>;
  frontIdPhotoUrl?: Maybe<Scalars['String']['output']>;
  selfiePhotoUrl?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  admin: AdminMutation;
  approveReviewVerification?: Maybe<UserVerification>;
  createWalletAccount?: Maybe<WalletAccount>;
  currentUser: CurrentUserMutation;
  oneTimePassword: OneTimePasswordMutation;
  startReviewVerification?: Maybe<UserVerification>;
  submitUserVerification?: Maybe<UserVerification>;
  transactions: TransactionsMutation;
};


export type MutationApproveReviewVerificationArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  consensus: ReviewConsensus;
  verificationId: Scalars['String']['input'];
};


export type MutationCreateWalletAccountArgs = {
  walletAccountData?: InputMaybe<CreateWalletAccountInput>;
};


export type MutationStartReviewVerificationArgs = {
  comment?: InputMaybe<Scalars['String']['input']>;
  verificationId: Scalars['String']['input'];
};


export type MutationSubmitUserVerificationArgs = {
  identityVerificationId: Scalars['String']['input'];
};

export type OtcCashInInput = {
  accountNumber: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
};

export type OneTimePasswordMutation = {
  requestOTP: TelesignResultData;
  unregisteredUserRequestOTP: TelesignResultData;
  verifyOTP: TelesignVerifyResultData;
};


export type OneTimePasswordMutationRequestOtpArgs = {
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
};


export type OneTimePasswordMutationUnregisteredUserRequestOtpArgs = {
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
};


export type OneTimePasswordMutationVerifyOtpArgs = {
  reference_id: Scalars['String']['input'];
  verify_code: Scalars['String']['input'];
};

export type Organization = {
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type OrganizationSortByInput = {
  key: OrganizationSortKeyType;
  sortOrder: SortOrder;
};

export enum OrganizationSortKeyType {
  CreatedAt = 'createdAt',
  Name = 'name'
}

export type OrganizationWalletOwner = {
  accountNumber: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type OverTheCounterMutation = {
  cashIn?: Maybe<Transaction>;
};


export type OverTheCounterMutationCashInArgs = {
  payload?: InputMaybe<OtcCashInInput>;
};

export type PayBillsData = {
  transaction: DefaultTransactionData;
};

export type PayBillsInput = {
  accountNumber: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  billerCode: Scalars['String']['input'];
  otherCharges?: InputMaybe<Scalars['Float']['input']>;
  otherInfo?: InputMaybe<Scalars['JSON']['input']>;
  referenceNumber: Scalars['String']['input'];
};

export enum PaymentMethodCode {
  Bank = 'BANK',
  Card = 'CARD',
  Ewallet = 'EWALLET'
}

export type PinVerificationPayload = {
  expiresAt: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export enum PrincipalTransactionStatus {
  Complete = 'COMPLETE',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export enum PrincipalTransactionType {
  BillsPayment = 'BILLS_PAYMENT',
  ExpressSend = 'EXPRESS_SEND',
  OnlineBankCashIn = 'ONLINE_BANK_CASH_IN',
  OnlineBankCashOut = 'ONLINE_BANK_CASH_OUT',
  OverTheCounterCashIn = 'OVER_THE_COUNTER_CASH_IN',
  OverTheCounterCashOut = 'OVER_THE_COUNTER_CASH_OUT'
}

export type Query = {
  admin: AdminQuery;
  billers: BillersQuery;
  currentUser: CurrentUserQuery;
  transactions: TransactionsQuery;
  walletAccount?: Maybe<WalletAccount>;
};


export type QueryWalletAccountArgs = {
  id: Scalars['ID']['input'];
};

export type RegisterUserInput = {
  address?: InputMaybe<UserAddressInput>;
  biometric?: InputMaybe<Scalars['String']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  civilStatus?: InputMaybe<CivilStatus>;
  firstName: Scalars['String']['input'];
  gender?: InputMaybe<Gender>;
  lastName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  pin: Scalars['String']['input'];
  politicallyExposedPerson?: InputMaybe<Scalars['Boolean']['input']>;
  sourceOfFunds?: InputMaybe<Scalars['String']['input']>;
  userProfilePicture?: InputMaybe<UserProfilePictureInput>;
};

export type RenewAccessTokenPayload = {
  expiresAt: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type RequestCashInData = {
  imageUrl?: Maybe<Scalars['String']['output']>;
  redirect?: Maybe<Scalars['String']['output']>;
  transaction: DefaultTransactionData;
};

export type RequestCashInInput = {
  accountNumber: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  cardDetails?: InputMaybe<CardDetailsInput>;
  paymentMethod: Scalars['String']['input'];
  returnUrl?: InputMaybe<Scalars['String']['input']>;
};

export type RequestCashOutData = {
  provider: CashOutProviderType;
  transaction: DefaultTransactionData;
};

export type RequestCashOutInput = {
  accountNumber: Scalars['String']['input'];
  amount: Scalars['Float']['input'];
  bankCode?: InputMaybe<Scalars['String']['input']>;
  beneficiaryAccountName: Scalars['String']['input'];
  beneficiaryAccountNumber: Scalars['String']['input'];
  ewalletCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodCode: PaymentMethodCode;
  provider?: InputMaybe<SendMoneyProviderType>;
};

export type RequestExpressSendData = {
  transaction: RequestExpressSendDataTransaction;
};

export type RequestExpressSendDataTransaction = {
  availableBalance: Scalars['Float']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sentAmount: Scalars['Float']['output'];
};

export type RequestExpressSendInput = {
  amount: Scalars['Float']['input'];
  recipientAccountNumber: Scalars['String']['input'];
  senderAccountNumber: Scalars['String']['input'];
};

export enum ReviewConsensus {
  Approved = 'APPROVED',
  PartiallyApproved = 'PARTIALLY_APPROVED',
  Rejected = 'REJECTED'
}

export enum ReviewStatus {
  Active = 'ACTIVE',
  Done = 'DONE',
  Draft = 'DRAFT',
  Submitted = 'SUBMITTED'
}

export enum RiskLevelType {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

export type SaveBiometricData = {
  id: Scalars['ID']['output'];
};

export type SaveCryptoTransactionData = {
  transaction: DefaultCryptoTransactionData;
};

export type SaveCryptoTransactionInput = {
  transactionHash: Scalars['String']['input'];
  type: CryptoWalletType;
  walletAddress: Scalars['String']['input'];
};

export type SaveCryptoWalletData = {
  id: Scalars['String']['output'];
};

export type SaveCryptoWalletInput = {
  alias: Scalars['String']['input'];
  balance?: InputMaybe<Scalars['Float']['input']>;
  type: CryptoWalletType;
  walletAddress: Scalars['String']['input'];
};

export type SearchWalletAccountsData = {
  items: Array<SearchWalletAccountsDataItem>;
};

export type SearchWalletAccountsDataItem = {
  accountNumber: Scalars['String']['output'];
  alias: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  mobileNumber: Scalars['String']['output'];
  userProfilePicture?: Maybe<UserProfilePictureType>;
};

export enum SendMoneyProviderType {
  Instapay = 'instapay',
  Pesonet = 'pesonet'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SupportedToken = {
  contractAddress: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TelesignResultData = {
  maskedContactNumber: Scalars['String']['output'];
  refId: Scalars['String']['output'];
};

export type TelesignVerifyResultData = {
  isVerified: Scalars['Boolean']['output'];
};

export type Transaction = {
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type TransactionSortByInput = {
  key: TransactionSortKeyType;
  sortOrder: SortOrder;
};

export enum TransactionSortKeyType {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Id = 'id'
}

export enum TransactionType {
  BillsPaymentCompleted = 'BILLS_PAYMENT_COMPLETED',
  BillsPaymentInitiated = 'BILLS_PAYMENT_INITIATED',
  ExpressSendCompleted = 'EXPRESS_SEND_COMPLETED',
  ExpressSendInitiated = 'EXPRESS_SEND_INITIATED',
  OnlineBankCashInCompleted = 'ONLINE_BANK_CASH_IN_COMPLETED',
  OnlineBankCashInInitiated = 'ONLINE_BANK_CASH_IN_INITIATED',
  OnlineBankCashOutCompleted = 'ONLINE_BANK_CASH_OUT_COMPLETED',
  OnlineBankCashOutInitiated = 'ONLINE_BANK_CASH_OUT_INITIATED',
  OverTheCounterCashInCompleted = 'OVER_THE_COUNTER_CASH_IN_COMPLETED',
  OverTheCounterCashInInitiated = 'OVER_THE_COUNTER_CASH_IN_INITIATED',
  OverTheCounterCashOutCompleted = 'OVER_THE_COUNTER_CASH_OUT_COMPLETED',
  OverTheCounterCashOutInitiated = 'OVER_THE_COUNTER_CASH_OUT_INITIATED'
}

export type TransactionsMutation = {
  overTheCounter: OverTheCounterMutation;
};

export type TransactionsQuery = {
  fetchCurrentCashoutProvider: FetchCurrentCashoutProviderData;
};

export type UpdateCryptoWalletBalanceData = {
  id: Scalars['String']['output'];
};

export type UpdateCryptoWalletBalanceInput = {
  balance: Scalars['Float']['input'];
  type: CryptoWalletType;
  walletAddress: Scalars['String']['input'];
};

export type UpdateCryptoWalletData = {
  id: Scalars['String']['output'];
};

export type UpdatePinData = {
  id: Scalars['String']['output'];
};

export type UpdatePinInput = {
  otp: Scalars['String']['input'];
  pin: Scalars['String']['input'];
  reference_id: Scalars['String']['input'];
};

export type UpdateUserData = {
  id: Scalars['ID']['output'];
};

export type UpdateUserInput = {
  address?: InputMaybe<UserAddressInput>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  civilStatus?: InputMaybe<CivilStatus>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  mobileNumber?: InputMaybe<Scalars['String']['input']>;
  politicallyExposedPerson?: InputMaybe<Scalars['Boolean']['input']>;
  sourceOfFunds?: InputMaybe<Scalars['String']['input']>;
  userProfilePicture?: InputMaybe<UserProfilePictureInput>;
};

export type UpdateWalletAccountAliasData = {
  id: Scalars['String']['output'];
};

export type User = {
  auth0UserId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export type UserAddressInput = {
  additionalDetails?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  county?: InputMaybe<Scalars['String']['input']>;
  province?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  streetAddress?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['Int']['input']>;
};

export type UserCompleteData = {
  address?: Maybe<Address>;
  auth0UserId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  profile?: Maybe<UserProfile>;
  role: UserRole;
  updatedAt: Scalars['String']['output'];
};

export enum UserLogType {
  AddPermission = 'ADD_PERMISSION',
  ApprovedUser = 'APPROVED_USER',
  PartiallyApprovedUser = 'PARTIALLY_APPROVED_USER',
  RejectUser = 'REJECT_USER',
  RevokePermission = 'REVOKE_PERMISSION',
  UpdateRole = 'UPDATE_ROLE',
  UpdateUser = 'UPDATE_USER'
}

export type UserLogsSortByInput = {
  key: UserLogsSortKeyType;
  sortOrder: SortOrder;
};

export enum UserLogsSortKeyType {
  AdminUser = 'adminUser',
  CreatedAt = 'createdAt',
  Id = 'id',
  User = 'user'
}

export enum UserPermissionType {
  AdminEdit = 'ADMIN_EDIT',
  AdminView = 'ADMIN_VIEW',
  CreateOrganization = 'CREATE_ORGANIZATION',
  ExportData = 'EXPORT_DATA',
  OverTheCounterCashIn = 'OVER_THE_COUNTER_CASH_IN',
  OverTheCounterCashOut = 'OVER_THE_COUNTER_CASH_OUT',
  ReviewUserVerification = 'REVIEW_USER_VERIFICATION',
  UpdateCryptoWallet = 'UPDATE_CRYPTO_WALLET',
  UsersEdit = 'USERS_EDIT',
  UsersView = 'USERS_VIEW',
  ViewCryptoTransaction = 'VIEW_CRYPTO_TRANSACTION',
  ViewCryptoWallet = 'VIEW_CRYPTO_WALLET',
  ViewDashboard = 'VIEW_DASHBOARD',
  ViewOrganization = 'VIEW_ORGANIZATION',
  ViewTransactions = 'VIEW_TRANSACTIONS',
  ViewWalletDetails = 'VIEW_WALLET_DETAILS'
}

export type UserProfile = {
  birthDate?: Maybe<Scalars['String']['output']>;
  civilStatus?: Maybe<CivilStatus>;
  createdAt: Scalars['String']['output'];
  emailAddress: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  mobileNumber?: Maybe<Scalars['String']['output']>;
  politicallyExposedPerson?: Maybe<Scalars['Boolean']['output']>;
  sourceOfFunds?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  userProfilePicture?: Maybe<UserProfilePictureType>;
  verificationStatus: UserVerificationStatus;
};

export type UserProfilePictureInput = {
  avatarType?: InputMaybe<Scalars['String']['input']>;
  isUseAvatar?: InputMaybe<Scalars['Boolean']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
};

export type UserProfilePictureType = {
  avatarType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isUseAvatar?: Maybe<Scalars['Boolean']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
};

export type UserProfileWalletOwner = {
  accountNumber: Scalars['String']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  middleName: Scalars['String']['output'];
  userId: Scalars['String']['output'];
  userProfilePicture?: Maybe<WalletUserProfilePictureType>;
};

export enum UserRole {
  Admin = 'ADMIN',
  ComplianceLevel_1 = 'COMPLIANCE_LEVEL_1',
  ComplianceLevel_2 = 'COMPLIANCE_LEVEL_2',
  CsLevel_1 = 'CS_LEVEL_1',
  CsLevel_2 = 'CS_LEVEL_2',
  CsLevel_3 = 'CS_LEVEL_3',
  CsLevel_4 = 'CS_LEVEL_4',
  SuperAdmin = 'SUPER_ADMIN',
  System = 'SYSTEM',
  User = 'USER'
}

export type UserSortByInput = {
  key: UserSortKeyType;
  sortOrder: SortOrder;
};

export enum UserSortKeyType {
  CreatedAt = 'createdAt',
  EmailAddress = 'emailAddress',
  LastName = 'lastName',
  UserId = 'userId'
}

export type UserVerification = {
  comment?: Maybe<Scalars['String']['output']>;
  consensus?: Maybe<ReviewConsensus>;
  createdAt: Scalars['String']['output'];
  createdBy: UserCompleteData;
  id: Scalars['String']['output'];
  identityVerificationDetails?: Maybe<IdentityVerificationDetails>;
  reviewer?: Maybe<User>;
  status?: Maybe<ReviewStatus>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type UserVerificationSortByInput = {
  key: UserVerificationSortKeyType;
  sortOrder: SortOrder;
};

export enum UserVerificationSortKeyType {
  CreatedAt = 'createdAt'
}

export enum UserVerificationStatus {
  Decline = 'DECLINE',
  Pending = 'PENDING',
  SemiVerified = 'SEMI_VERIFIED',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED'
}

export type UserWhereUniqueInput = {
  auth0UserId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type VerifyBiometricData = {
  expiresAt: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type WalletAccount = {
  accountNumber: Scalars['String']['output'];
  alias?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: WalletAccountType;
  updatedAt: Scalars['String']['output'];
};

export type WalletAccountOwnerUnion = OrganizationWalletOwner | UserProfileWalletOwner;

export enum WalletAccountType {
  Individual = 'INDIVIDUAL',
  Organization = 'ORGANIZATION'
}

export type WalletUserProfilePictureType = {
  avatarType?: Maybe<Scalars['String']['output']>;
  isUseAvatar?: Maybe<Scalars['Boolean']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
};

export type GetCurrentUserDetailsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserDetailsQuery = { currentUser: { getCurrentUserDetails: { id: string, displayName: string, auth0UserId: string, createdAt: string, profile?: { id: string, userId: string, firstName: string, middleName?: string | null, lastName: string, mobileNumber?: string | null, emailAddress: string, userProfilePicture?: { profilePicture?: string | null, avatarType?: string | null, isUseAvatar?: boolean | null } | null } | null } } };


export const GetCurrentUserDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUserDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUserDetails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"auth0UserId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"profile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"middleName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"mobileNumber"}},{"kind":"Field","name":{"kind":"Name","value":"emailAddress"}},{"kind":"Field","name":{"kind":"Name","value":"userProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"avatarType"}},{"kind":"Field","name":{"kind":"Name","value":"isUseAvatar"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserDetailsQuery, GetCurrentUserDetailsQueryVariables>;