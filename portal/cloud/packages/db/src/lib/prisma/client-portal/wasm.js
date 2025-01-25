
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.15.0
 * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
 */
Prisma.prismaVersion = {
  client: "5.15.0",
  engine: "12e25d8d06f6ea5a0252864dd9a03b1bb51f3022"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  owner: 'owner',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  updatedAt: 'updatedAt',
  image: 'image',
  lastActive: 'lastActive'
};

exports.Prisma.TemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  image: 'image',
  graph: 'graph',
  createdAt: 'createdAt',
  deletedAt: 'deletedAt',
  updatedAt: 'updatedAt',
  spells: 'spells',
  type: 'type',
  public: 'public',
  userId: 'userId',
  usageCount: 'usageCount',
  ogAgentId: 'ogAgentId'
};

exports.Prisma.TemplateVersionScalarFieldEnum = {
  id: 'id',
  templateId: 'templateId',
  version: 'version',
  spells: 'spells',
  metadata: 'metadata',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TemplateCollectionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  templates: 'templates',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  templateId: 'templateId'
};

exports.Prisma.TemplateRatingScalarFieldEnum = {
  id: 'id',
  templateId: 'templateId',
  userId: 'userId',
  rating: 'rating',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PublicAgentScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  userId: 'userId',
  madePublic: 'madePublic',
  deletedAt: 'deletedAt',
  description: 'description',
  remixable: 'remixable',
  isTemplate: 'isTemplate',
  featured: 'featured'
};

exports.Prisma.ReportsScalarFieldEnum = {
  id: 'id',
  publicAgentId: 'publicAgentId',
  createdAt: 'createdAt',
  message: 'message'
};

exports.Prisma.LikesScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CommentsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  content: 'content',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.AnonymousUserScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  anonymousId: 'anonymousId',
  fingerprint: 'fingerprint',
  lastAccessed: 'lastAccessed'
};

exports.Prisma.BudgetScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  balance: 'balance',
  currentCost: 'currentCost',
  modelCost: 'modelCost',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PromotionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  type: 'type',
  amount: 'amount',
  description: 'description',
  validFrom: 'validFrom',
  validUntil: 'validUntil',
  isUsed: 'isUsed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PromotionCodeScalarFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description',
  couponId: 'couponId',
  userId: 'userId',
  isUsed: 'isUsed',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  projectId: 'projectId',
  agentId: 'agentId',
  cost: 'cost',
  success: 'success',
  source: 'source',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ProjectOrderByRelevanceFieldEnum = {
  id: 'id',
  owner: 'owner',
  name: 'name',
  description: 'description',
  image: 'image'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.TemplateOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  image: 'image',
  spells: 'spells',
  userId: 'userId',
  ogAgentId: 'ogAgentId'
};

exports.Prisma.TemplateVersionOrderByRelevanceFieldEnum = {
  id: 'id',
  templateId: 'templateId'
};

exports.Prisma.TemplateCollectionOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  templateId: 'templateId'
};

exports.Prisma.TemplateRatingOrderByRelevanceFieldEnum = {
  id: 'id',
  templateId: 'templateId',
  userId: 'userId'
};

exports.Prisma.PublicAgentOrderByRelevanceFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  userId: 'userId',
  description: 'description'
};

exports.Prisma.ReportsOrderByRelevanceFieldEnum = {
  id: 'id',
  publicAgentId: 'publicAgentId',
  message: 'message'
};

exports.Prisma.LikesOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId'
};

exports.Prisma.CommentsOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  publicAgentId: 'publicAgentId',
  content: 'content'
};

exports.Prisma.AnonymousUserOrderByRelevanceFieldEnum = {
  id: 'id',
  anonymousId: 'anonymousId',
  fingerprint: 'fingerprint'
};

exports.Prisma.BudgetOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId'
};

exports.Prisma.PromotionOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  userId: 'userId',
  description: 'description'
};

exports.Prisma.PromotionCodeOrderByRelevanceFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description',
  couponId: 'couponId',
  userId: 'userId'
};

exports.Prisma.TransactionOrderByRelevanceFieldEnum = {
  id: 'id',
  userId: 'userId',
  projectId: 'projectId',
  agentId: 'agentId'
};
exports.TemplateType = exports.$Enums.TemplateType = {
  OFFICIAL: 'OFFICIAL',
  COMMUNITY: 'COMMUNITY'
};

exports.PromotionType = exports.$Enums.PromotionType = {
  INTRO: 'INTRO',
  ADMIN: 'ADMIN',
  SUBSCRIPTION: 'SUBSCRIPTION'
};

exports.TransactionSource = exports.$Enums.TransactionSource = {
  PROMOTION: 'PROMOTION',
  BUDGET: 'BUDGET'
};

exports.Prisma.ModelName = {
  Project: 'Project',
  Template: 'Template',
  TemplateVersion: 'TemplateVersion',
  TemplateCollection: 'TemplateCollection',
  TemplateRating: 'TemplateRating',
  PublicAgent: 'PublicAgent',
  Reports: 'Reports',
  Likes: 'Likes',
  Comments: 'Comments',
  AnonymousUser: 'AnonymousUser',
  Budget: 'Budget',
  Promotion: 'Promotion',
  PromotionCode: 'PromotionCode',
  Transaction: 'Transaction'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
