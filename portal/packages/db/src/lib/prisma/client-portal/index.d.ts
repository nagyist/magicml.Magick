
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateVersion
 * 
 */
export type TemplateVersion = $Result.DefaultSelection<Prisma.$TemplateVersionPayload>
/**
 * Model TemplateCollection
 * 
 */
export type TemplateCollection = $Result.DefaultSelection<Prisma.$TemplateCollectionPayload>
/**
 * Model TemplateRating
 * 
 */
export type TemplateRating = $Result.DefaultSelection<Prisma.$TemplateRatingPayload>
/**
 * Model PublicAgent
 * 
 */
export type PublicAgent = $Result.DefaultSelection<Prisma.$PublicAgentPayload>
/**
 * Model Reports
 * 
 */
export type Reports = $Result.DefaultSelection<Prisma.$ReportsPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model AnonymousUser
 * 
 */
export type AnonymousUser = $Result.DefaultSelection<Prisma.$AnonymousUserPayload>
/**
 * Model Budget
 * 
 */
export type Budget = $Result.DefaultSelection<Prisma.$BudgetPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model PromotionCode
 * 
 */
export type PromotionCode = $Result.DefaultSelection<Prisma.$PromotionCodePayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TemplateType: {
  OFFICIAL: 'OFFICIAL',
  COMMUNITY: 'COMMUNITY'
};

export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType]


export const PromotionType: {
  INTRO: 'INTRO',
  ADMIN: 'ADMIN',
  SUBSCRIPTION: 'SUBSCRIPTION'
};

export type PromotionType = (typeof PromotionType)[keyof typeof PromotionType]


export const TransactionSource: {
  PROMOTION: 'PROMOTION',
  BUDGET: 'BUDGET'
};

export type TransactionSource = (typeof TransactionSource)[keyof typeof TransactionSource]

}

export type TemplateType = $Enums.TemplateType

export const TemplateType: typeof $Enums.TemplateType

export type PromotionType = $Enums.PromotionType

export const PromotionType: typeof $Enums.PromotionType

export type TransactionSource = $Enums.TransactionSource

export const TransactionSource: typeof $Enums.TransactionSource

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs>;

  /**
   * `prisma.templateVersion`: Exposes CRUD operations for the **TemplateVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateVersions
    * const templateVersions = await prisma.templateVersion.findMany()
    * ```
    */
  get templateVersion(): Prisma.TemplateVersionDelegate<ExtArgs>;

  /**
   * `prisma.templateCollection`: Exposes CRUD operations for the **TemplateCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateCollections
    * const templateCollections = await prisma.templateCollection.findMany()
    * ```
    */
  get templateCollection(): Prisma.TemplateCollectionDelegate<ExtArgs>;

  /**
   * `prisma.templateRating`: Exposes CRUD operations for the **TemplateRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateRatings
    * const templateRatings = await prisma.templateRating.findMany()
    * ```
    */
  get templateRating(): Prisma.TemplateRatingDelegate<ExtArgs>;

  /**
   * `prisma.publicAgent`: Exposes CRUD operations for the **PublicAgent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicAgents
    * const publicAgents = await prisma.publicAgent.findMany()
    * ```
    */
  get publicAgent(): Prisma.PublicAgentDelegate<ExtArgs>;

  /**
   * `prisma.reports`: Exposes CRUD operations for the **Reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.reports.findMany()
    * ```
    */
  get reports(): Prisma.ReportsDelegate<ExtArgs>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs>;

  /**
   * `prisma.anonymousUser`: Exposes CRUD operations for the **AnonymousUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnonymousUsers
    * const anonymousUsers = await prisma.anonymousUser.findMany()
    * ```
    */
  get anonymousUser(): Prisma.AnonymousUserDelegate<ExtArgs>;

  /**
   * `prisma.budget`: Exposes CRUD operations for the **Budget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Budgets
    * const budgets = await prisma.budget.findMany()
    * ```
    */
  get budget(): Prisma.BudgetDelegate<ExtArgs>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs>;

  /**
   * `prisma.promotionCode`: Exposes CRUD operations for the **PromotionCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromotionCodes
    * const promotionCodes = await prisma.promotionCode.findMany()
    * ```
    */
  get promotionCode(): Prisma.PromotionCodeDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.0
   * Query Engine version: 12e25d8d06f6ea5a0252864dd9a03b1bb51f3022
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'project' | 'template' | 'templateVersion' | 'templateCollection' | 'templateRating' | 'publicAgent' | 'reports' | 'likes' | 'comments' | 'anonymousUser' | 'budget' | 'promotion' | 'promotionCode' | 'transaction'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>,
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateVersion: {
        payload: Prisma.$TemplateVersionPayload<ExtArgs>
        fields: Prisma.TemplateVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateVersionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateVersionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload>
          }
          findFirst: {
            args: Prisma.TemplateVersionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateVersionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload>
          }
          findMany: {
            args: Prisma.TemplateVersionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload>[]
          }
          create: {
            args: Prisma.TemplateVersionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload>
          }
          createMany: {
            args: Prisma.TemplateVersionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateVersionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload>[]
          }
          delete: {
            args: Prisma.TemplateVersionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload>
          }
          update: {
            args: Prisma.TemplateVersionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload>
          }
          deleteMany: {
            args: Prisma.TemplateVersionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateVersionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemplateVersionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateVersionPayload>
          }
          aggregate: {
            args: Prisma.TemplateVersionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTemplateVersion>
          }
          groupBy: {
            args: Prisma.TemplateVersionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TemplateVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateVersionCountArgs<ExtArgs>,
            result: $Utils.Optional<TemplateVersionCountAggregateOutputType> | number
          }
        }
      }
      TemplateCollection: {
        payload: Prisma.$TemplateCollectionPayload<ExtArgs>
        fields: Prisma.TemplateCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateCollectionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateCollectionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload>
          }
          findFirst: {
            args: Prisma.TemplateCollectionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateCollectionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload>
          }
          findMany: {
            args: Prisma.TemplateCollectionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload>[]
          }
          create: {
            args: Prisma.TemplateCollectionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload>
          }
          createMany: {
            args: Prisma.TemplateCollectionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCollectionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload>[]
          }
          delete: {
            args: Prisma.TemplateCollectionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload>
          }
          update: {
            args: Prisma.TemplateCollectionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload>
          }
          deleteMany: {
            args: Prisma.TemplateCollectionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateCollectionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemplateCollectionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateCollectionPayload>
          }
          aggregate: {
            args: Prisma.TemplateCollectionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTemplateCollection>
          }
          groupBy: {
            args: Prisma.TemplateCollectionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TemplateCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCollectionCountArgs<ExtArgs>,
            result: $Utils.Optional<TemplateCollectionCountAggregateOutputType> | number
          }
        }
      }
      TemplateRating: {
        payload: Prisma.$TemplateRatingPayload<ExtArgs>
        fields: Prisma.TemplateRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateRatingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateRatingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload>
          }
          findFirst: {
            args: Prisma.TemplateRatingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateRatingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload>
          }
          findMany: {
            args: Prisma.TemplateRatingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload>[]
          }
          create: {
            args: Prisma.TemplateRatingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload>
          }
          createMany: {
            args: Prisma.TemplateRatingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateRatingCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload>[]
          }
          delete: {
            args: Prisma.TemplateRatingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload>
          }
          update: {
            args: Prisma.TemplateRatingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload>
          }
          deleteMany: {
            args: Prisma.TemplateRatingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateRatingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TemplateRatingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TemplateRatingPayload>
          }
          aggregate: {
            args: Prisma.TemplateRatingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTemplateRating>
          }
          groupBy: {
            args: Prisma.TemplateRatingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TemplateRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateRatingCountArgs<ExtArgs>,
            result: $Utils.Optional<TemplateRatingCountAggregateOutputType> | number
          }
        }
      }
      PublicAgent: {
        payload: Prisma.$PublicAgentPayload<ExtArgs>
        fields: Prisma.PublicAgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicAgentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicAgentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          findFirst: {
            args: Prisma.PublicAgentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicAgentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          findMany: {
            args: Prisma.PublicAgentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>[]
          }
          create: {
            args: Prisma.PublicAgentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          createMany: {
            args: Prisma.PublicAgentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicAgentCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>[]
          }
          delete: {
            args: Prisma.PublicAgentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          update: {
            args: Prisma.PublicAgentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          deleteMany: {
            args: Prisma.PublicAgentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PublicAgentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PublicAgentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PublicAgentPayload>
          }
          aggregate: {
            args: Prisma.PublicAgentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePublicAgent>
          }
          groupBy: {
            args: Prisma.PublicAgentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PublicAgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicAgentCountArgs<ExtArgs>,
            result: $Utils.Optional<PublicAgentCountAggregateOutputType> | number
          }
        }
      }
      Reports: {
        payload: Prisma.$ReportsPayload<ExtArgs>
        fields: Prisma.ReportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          findFirst: {
            args: Prisma.ReportsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          findMany: {
            args: Prisma.ReportsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>[]
          }
          create: {
            args: Prisma.ReportsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          createMany: {
            args: Prisma.ReportsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>[]
          }
          delete: {
            args: Prisma.ReportsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          update: {
            args: Prisma.ReportsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          deleteMany: {
            args: Prisma.ReportsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReportsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReportsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          aggregate: {
            args: Prisma.ReportsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReports>
          }
          groupBy: {
            args: Prisma.ReportsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportsCountArgs<ExtArgs>,
            result: $Utils.Optional<ReportsCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikesCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>,
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>,
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      AnonymousUser: {
        payload: Prisma.$AnonymousUserPayload<ExtArgs>
        fields: Prisma.AnonymousUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnonymousUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnonymousUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          findFirst: {
            args: Prisma.AnonymousUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnonymousUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          findMany: {
            args: Prisma.AnonymousUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>[]
          }
          create: {
            args: Prisma.AnonymousUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          createMany: {
            args: Prisma.AnonymousUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnonymousUserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>[]
          }
          delete: {
            args: Prisma.AnonymousUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          update: {
            args: Prisma.AnonymousUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          deleteMany: {
            args: Prisma.AnonymousUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnonymousUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnonymousUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnonymousUserPayload>
          }
          aggregate: {
            args: Prisma.AnonymousUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnonymousUser>
          }
          groupBy: {
            args: Prisma.AnonymousUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnonymousUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnonymousUserCountArgs<ExtArgs>,
            result: $Utils.Optional<AnonymousUserCountAggregateOutputType> | number
          }
        }
      }
      Budget: {
        payload: Prisma.$BudgetPayload<ExtArgs>
        fields: Prisma.BudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BudgetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BudgetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findFirst: {
            args: Prisma.BudgetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BudgetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          findMany: {
            args: Prisma.BudgetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          create: {
            args: Prisma.BudgetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          createMany: {
            args: Prisma.BudgetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BudgetCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>[]
          }
          delete: {
            args: Prisma.BudgetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          update: {
            args: Prisma.BudgetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          deleteMany: {
            args: Prisma.BudgetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BudgetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BudgetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BudgetPayload>
          }
          aggregate: {
            args: Prisma.BudgetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBudget>
          }
          groupBy: {
            args: Prisma.BudgetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BudgetCountArgs<ExtArgs>,
            result: $Utils.Optional<BudgetCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>,
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      PromotionCode: {
        payload: Prisma.$PromotionCodePayload<ExtArgs>
        fields: Prisma.PromotionCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionCodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionCodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload>
          }
          findFirst: {
            args: Prisma.PromotionCodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionCodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload>
          }
          findMany: {
            args: Prisma.PromotionCodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload>[]
          }
          create: {
            args: Prisma.PromotionCodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload>
          }
          createMany: {
            args: Prisma.PromotionCodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCodeCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload>[]
          }
          delete: {
            args: Prisma.PromotionCodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload>
          }
          update: {
            args: Prisma.PromotionCodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload>
          }
          deleteMany: {
            args: Prisma.PromotionCodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionCodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PromotionCodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PromotionCodePayload>
          }
          aggregate: {
            args: Prisma.PromotionCodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePromotionCode>
          }
          groupBy: {
            args: Prisma.PromotionCodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PromotionCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCodeCountArgs<ExtArgs>,
            result: $Utils.Optional<PromotionCodeCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    templateVersions: number
    templateCollections: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateVersions?: boolean | TemplateCountOutputTypeCountTemplateVersionsArgs
    templateCollections?: boolean | TemplateCountOutputTypeCountTemplateCollectionsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountTemplateVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateVersionWhereInput
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountTemplateCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateCollectionWhereInput
  }


  /**
   * Count Type PublicAgentCountOutputType
   */

  export type PublicAgentCountOutputType = {
    comments: number
    likes: number
    Reports: number
  }

  export type PublicAgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PublicAgentCountOutputTypeCountCommentsArgs
    likes?: boolean | PublicAgentCountOutputTypeCountLikesArgs
    Reports?: boolean | PublicAgentCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * PublicAgentCountOutputType without action
   */
  export type PublicAgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgentCountOutputType
     */
    select?: PublicAgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublicAgentCountOutputType without action
   */
  export type PublicAgentCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * PublicAgentCountOutputType without action
   */
  export type PublicAgentCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * PublicAgentCountOutputType without action
   */
  export type PublicAgentCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    owner: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    image: string | null
    lastActive: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    owner: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    image: string | null
    lastActive: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    owner: number
    name: number
    description: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    image: number
    lastActive: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    image?: true
    lastActive?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    image?: true
    lastActive?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    owner?: true
    name?: true
    description?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    image?: true
    lastActive?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationAndSearchRelevanceInput | ProjectOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    owner: string
    name: string
    description: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    image: string | null
    lastActive: Date | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    image?: boolean
    lastActive?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    image?: boolean
    lastActive?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    owner?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    image?: boolean
    lastActive?: boolean
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner: string
      name: string
      description: string | null
      createdAt: Date | null
      deletedAt: Date | null
      updatedAt: Date | null
      image: string | null
      lastActive: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly owner: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly deletedAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly image: FieldRef<"Project", 'String'>
    readonly lastActive: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationAndSearchRelevanceInput | ProjectOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationAndSearchRelevanceInput | ProjectOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationAndSearchRelevanceInput | ProjectOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    usageCount: number | null
  }

  export type TemplateSumAggregateOutputType = {
    usageCount: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    type: $Enums.TemplateType | null
    public: boolean | null
    userId: string | null
    usageCount: number | null
    ogAgentId: string | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    type: $Enums.TemplateType | null
    public: boolean | null
    userId: string | null
    usageCount: number | null
    ogAgentId: string | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    graph: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    spells: number
    type: number
    public: number
    userId: number
    usageCount: number
    ogAgentId: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    usageCount?: true
  }

  export type TemplateSumAggregateInputType = {
    usageCount?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    type?: true
    public?: true
    userId?: true
    usageCount?: true
    ogAgentId?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    type?: true
    public?: true
    userId?: true
    usageCount?: true
    ogAgentId?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    graph?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    spells?: true
    type?: true
    public?: true
    userId?: true
    usageCount?: true
    ogAgentId?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationAndSearchRelevanceInput | TemplateOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    image: string | null
    graph: JsonValue | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
    spells: string[]
    type: $Enums.TemplateType
    public: boolean
    userId: string | null
    usageCount: number
    ogAgentId: string | null
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    graph?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    spells?: boolean
    type?: boolean
    public?: boolean
    userId?: boolean
    usageCount?: boolean
    ogAgentId?: boolean
    templateVersions?: boolean | Template$templateVersionsArgs<ExtArgs>
    templateCollections?: boolean | Template$templateCollectionsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    graph?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    spells?: boolean
    type?: boolean
    public?: boolean
    userId?: boolean
    usageCount?: boolean
    ogAgentId?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    graph?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    spells?: boolean
    type?: boolean
    public?: boolean
    userId?: boolean
    usageCount?: boolean
    ogAgentId?: boolean
  }

  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    templateVersions?: boolean | Template$templateVersionsArgs<ExtArgs>
    templateCollections?: boolean | Template$templateCollectionsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      templateVersions: Prisma.$TemplateVersionPayload<ExtArgs>[]
      templateCollections: Prisma.$TemplateCollectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      image: string | null
      graph: Prisma.JsonValue | null
      createdAt: Date | null
      deletedAt: Date | null
      updatedAt: Date | null
      spells: string[]
      type: $Enums.TemplateType
      public: boolean
      userId: string | null
      usageCount: number
      ogAgentId: string | null
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TemplateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TemplateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TemplateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
    **/
    create<T extends TemplateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TemplateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
    **/
    delete<T extends TemplateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TemplateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TemplateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TemplateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
    **/
    upsert<T extends TemplateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>
    ): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    templateVersions<T extends Template$templateVersionsArgs<ExtArgs> = {}>(args?: Subset<T, Template$templateVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'findMany'> | Null>;

    templateCollections<T extends Template$templateCollectionsArgs<ExtArgs> = {}>(args?: Subset<T, Template$templateCollectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Template model
   */ 
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly description: FieldRef<"Template", 'String'>
    readonly image: FieldRef<"Template", 'String'>
    readonly graph: FieldRef<"Template", 'Json'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly deletedAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
    readonly spells: FieldRef<"Template", 'String[]'>
    readonly type: FieldRef<"Template", 'TemplateType'>
    readonly public: FieldRef<"Template", 'Boolean'>
    readonly userId: FieldRef<"Template", 'String'>
    readonly usageCount: FieldRef<"Template", 'Int'>
    readonly ogAgentId: FieldRef<"Template", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationAndSearchRelevanceInput | TemplateOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationAndSearchRelevanceInput | TemplateOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationAndSearchRelevanceInput | TemplateOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
  }

  /**
   * Template.templateVersions
   */
  export type Template$templateVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    where?: TemplateVersionWhereInput
    orderBy?: TemplateVersionOrderByWithRelationAndSearchRelevanceInput | TemplateVersionOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: TemplateVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateVersionScalarFieldEnum | TemplateVersionScalarFieldEnum[]
  }

  /**
   * Template.templateCollections
   */
  export type Template$templateCollectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    where?: TemplateCollectionWhereInput
    orderBy?: TemplateCollectionOrderByWithRelationAndSearchRelevanceInput | TemplateCollectionOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: TemplateCollectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateCollectionScalarFieldEnum | TemplateCollectionScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateVersion
   */

  export type AggregateTemplateVersion = {
    _count: TemplateVersionCountAggregateOutputType | null
    _avg: TemplateVersionAvgAggregateOutputType | null
    _sum: TemplateVersionSumAggregateOutputType | null
    _min: TemplateVersionMinAggregateOutputType | null
    _max: TemplateVersionMaxAggregateOutputType | null
  }

  export type TemplateVersionAvgAggregateOutputType = {
    version: number | null
  }

  export type TemplateVersionSumAggregateOutputType = {
    version: number | null
  }

  export type TemplateVersionMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateVersionMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    version: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateVersionCountAggregateOutputType = {
    id: number
    templateId: number
    version: number
    spells: number
    metadata: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateVersionAvgAggregateInputType = {
    version?: true
  }

  export type TemplateVersionSumAggregateInputType = {
    version?: true
  }

  export type TemplateVersionMinAggregateInputType = {
    id?: true
    templateId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateVersionMaxAggregateInputType = {
    id?: true
    templateId?: true
    version?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateVersionCountAggregateInputType = {
    id?: true
    templateId?: true
    version?: true
    spells?: true
    metadata?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateVersion to aggregate.
     */
    where?: TemplateVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateVersions to fetch.
     */
    orderBy?: TemplateVersionOrderByWithRelationAndSearchRelevanceInput | TemplateVersionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateVersions
    **/
    _count?: true | TemplateVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateVersionMaxAggregateInputType
  }

  export type GetTemplateVersionAggregateType<T extends TemplateVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateVersion[P]>
      : GetScalarType<T[P], AggregateTemplateVersion[P]>
  }




  export type TemplateVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateVersionWhereInput
    orderBy?: TemplateVersionOrderByWithAggregationInput | TemplateVersionOrderByWithAggregationInput[]
    by: TemplateVersionScalarFieldEnum[] | TemplateVersionScalarFieldEnum
    having?: TemplateVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateVersionCountAggregateInputType | true
    _avg?: TemplateVersionAvgAggregateInputType
    _sum?: TemplateVersionSumAggregateInputType
    _min?: TemplateVersionMinAggregateInputType
    _max?: TemplateVersionMaxAggregateInputType
  }

  export type TemplateVersionGroupByOutputType = {
    id: string
    templateId: string
    version: number
    spells: JsonValue[]
    metadata: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: TemplateVersionCountAggregateOutputType | null
    _avg: TemplateVersionAvgAggregateOutputType | null
    _sum: TemplateVersionSumAggregateOutputType | null
    _min: TemplateVersionMinAggregateOutputType | null
    _max: TemplateVersionMaxAggregateOutputType | null
  }

  type GetTemplateVersionGroupByPayload<T extends TemplateVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateVersionGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateVersionGroupByOutputType[P]>
        }
      >
    >


  export type TemplateVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    version?: boolean
    spells?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateVersion"]>

  export type TemplateVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    version?: boolean
    spells?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateVersion"]>

  export type TemplateVersionSelectScalar = {
    id?: boolean
    templateId?: boolean
    version?: boolean
    spells?: boolean
    metadata?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $TemplateVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateVersion"
    objects: {
      Template: Prisma.$TemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      version: number
      spells: Prisma.JsonValue[]
      metadata: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateVersion"]>
    composites: {}
  }

  type TemplateVersionGetPayload<S extends boolean | null | undefined | TemplateVersionDefaultArgs> = $Result.GetResult<Prisma.$TemplateVersionPayload, S>

  type TemplateVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplateVersionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplateVersionCountAggregateInputType | true
    }

  export interface TemplateVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateVersion'], meta: { name: 'TemplateVersion' } }
    /**
     * Find zero or one TemplateVersion that matches the filter.
     * @param {TemplateVersionFindUniqueArgs} args - Arguments to find a TemplateVersion
     * @example
     * // Get one TemplateVersion
     * const templateVersion = await prisma.templateVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TemplateVersionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateVersionFindUniqueArgs<ExtArgs>>
    ): Prisma__TemplateVersionClient<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TemplateVersion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplateVersionFindUniqueOrThrowArgs} args - Arguments to find a TemplateVersion
     * @example
     * // Get one TemplateVersion
     * const templateVersion = await prisma.templateVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TemplateVersionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateVersionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateVersionClient<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TemplateVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateVersionFindFirstArgs} args - Arguments to find a TemplateVersion
     * @example
     * // Get one TemplateVersion
     * const templateVersion = await prisma.templateVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TemplateVersionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateVersionFindFirstArgs<ExtArgs>>
    ): Prisma__TemplateVersionClient<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TemplateVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateVersionFindFirstOrThrowArgs} args - Arguments to find a TemplateVersion
     * @example
     * // Get one TemplateVersion
     * const templateVersion = await prisma.templateVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TemplateVersionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateVersionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateVersionClient<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TemplateVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateVersions
     * const templateVersions = await prisma.templateVersion.findMany()
     * 
     * // Get first 10 TemplateVersions
     * const templateVersions = await prisma.templateVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateVersionWithIdOnly = await prisma.templateVersion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TemplateVersionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateVersionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TemplateVersion.
     * @param {TemplateVersionCreateArgs} args - Arguments to create a TemplateVersion.
     * @example
     * // Create one TemplateVersion
     * const TemplateVersion = await prisma.templateVersion.create({
     *   data: {
     *     // ... data to create a TemplateVersion
     *   }
     * })
     * 
    **/
    create<T extends TemplateVersionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateVersionCreateArgs<ExtArgs>>
    ): Prisma__TemplateVersionClient<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TemplateVersions.
     * @param {TemplateVersionCreateManyArgs} args - Arguments to create many TemplateVersions.
     * @example
     * // Create many TemplateVersions
     * const templateVersion = await prisma.templateVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TemplateVersionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateVersionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateVersions and returns the data saved in the database.
     * @param {TemplateVersionCreateManyAndReturnArgs} args - Arguments to create many TemplateVersions.
     * @example
     * // Create many TemplateVersions
     * const templateVersion = await prisma.templateVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateVersions and only return the `id`
     * const templateVersionWithIdOnly = await prisma.templateVersion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TemplateVersionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateVersionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TemplateVersion.
     * @param {TemplateVersionDeleteArgs} args - Arguments to delete one TemplateVersion.
     * @example
     * // Delete one TemplateVersion
     * const TemplateVersion = await prisma.templateVersion.delete({
     *   where: {
     *     // ... filter to delete one TemplateVersion
     *   }
     * })
     * 
    **/
    delete<T extends TemplateVersionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateVersionDeleteArgs<ExtArgs>>
    ): Prisma__TemplateVersionClient<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TemplateVersion.
     * @param {TemplateVersionUpdateArgs} args - Arguments to update one TemplateVersion.
     * @example
     * // Update one TemplateVersion
     * const templateVersion = await prisma.templateVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TemplateVersionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateVersionUpdateArgs<ExtArgs>>
    ): Prisma__TemplateVersionClient<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TemplateVersions.
     * @param {TemplateVersionDeleteManyArgs} args - Arguments to filter TemplateVersions to delete.
     * @example
     * // Delete a few TemplateVersions
     * const { count } = await prisma.templateVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TemplateVersionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateVersionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateVersions
     * const templateVersion = await prisma.templateVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TemplateVersionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateVersionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemplateVersion.
     * @param {TemplateVersionUpsertArgs} args - Arguments to update or create a TemplateVersion.
     * @example
     * // Update or create a TemplateVersion
     * const templateVersion = await prisma.templateVersion.upsert({
     *   create: {
     *     // ... data to create a TemplateVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateVersion we want to update
     *   }
     * })
    **/
    upsert<T extends TemplateVersionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateVersionUpsertArgs<ExtArgs>>
    ): Prisma__TemplateVersionClient<$Result.GetResult<Prisma.$TemplateVersionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TemplateVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateVersionCountArgs} args - Arguments to filter TemplateVersions to count.
     * @example
     * // Count the number of TemplateVersions
     * const count = await prisma.templateVersion.count({
     *   where: {
     *     // ... the filter for the TemplateVersions we want to count
     *   }
     * })
    **/
    count<T extends TemplateVersionCountArgs>(
      args?: Subset<T, TemplateVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateVersionAggregateArgs>(args: Subset<T, TemplateVersionAggregateArgs>): Prisma.PrismaPromise<GetTemplateVersionAggregateType<T>>

    /**
     * Group by TemplateVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateVersionGroupByArgs['orderBy'] }
        : { orderBy?: TemplateVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateVersion model
   */
  readonly fields: TemplateVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TemplateVersion model
   */ 
  interface TemplateVersionFieldRefs {
    readonly id: FieldRef<"TemplateVersion", 'String'>
    readonly templateId: FieldRef<"TemplateVersion", 'String'>
    readonly version: FieldRef<"TemplateVersion", 'Int'>
    readonly spells: FieldRef<"TemplateVersion", 'Json[]'>
    readonly metadata: FieldRef<"TemplateVersion", 'Json'>
    readonly createdAt: FieldRef<"TemplateVersion", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateVersion findUnique
   */
  export type TemplateVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateVersion to fetch.
     */
    where: TemplateVersionWhereUniqueInput
  }

  /**
   * TemplateVersion findUniqueOrThrow
   */
  export type TemplateVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateVersion to fetch.
     */
    where: TemplateVersionWhereUniqueInput
  }

  /**
   * TemplateVersion findFirst
   */
  export type TemplateVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateVersion to fetch.
     */
    where?: TemplateVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateVersions to fetch.
     */
    orderBy?: TemplateVersionOrderByWithRelationAndSearchRelevanceInput | TemplateVersionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateVersions.
     */
    cursor?: TemplateVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateVersions.
     */
    distinct?: TemplateVersionScalarFieldEnum | TemplateVersionScalarFieldEnum[]
  }

  /**
   * TemplateVersion findFirstOrThrow
   */
  export type TemplateVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateVersion to fetch.
     */
    where?: TemplateVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateVersions to fetch.
     */
    orderBy?: TemplateVersionOrderByWithRelationAndSearchRelevanceInput | TemplateVersionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateVersions.
     */
    cursor?: TemplateVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateVersions.
     */
    distinct?: TemplateVersionScalarFieldEnum | TemplateVersionScalarFieldEnum[]
  }

  /**
   * TemplateVersion findMany
   */
  export type TemplateVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateVersions to fetch.
     */
    where?: TemplateVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateVersions to fetch.
     */
    orderBy?: TemplateVersionOrderByWithRelationAndSearchRelevanceInput | TemplateVersionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateVersions.
     */
    cursor?: TemplateVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateVersions.
     */
    skip?: number
    distinct?: TemplateVersionScalarFieldEnum | TemplateVersionScalarFieldEnum[]
  }

  /**
   * TemplateVersion create
   */
  export type TemplateVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateVersion.
     */
    data: XOR<TemplateVersionCreateInput, TemplateVersionUncheckedCreateInput>
  }

  /**
   * TemplateVersion createMany
   */
  export type TemplateVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateVersions.
     */
    data: TemplateVersionCreateManyInput | TemplateVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateVersion createManyAndReturn
   */
  export type TemplateVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TemplateVersions.
     */
    data: TemplateVersionCreateManyInput | TemplateVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateVersion update
   */
  export type TemplateVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateVersion.
     */
    data: XOR<TemplateVersionUpdateInput, TemplateVersionUncheckedUpdateInput>
    /**
     * Choose, which TemplateVersion to update.
     */
    where: TemplateVersionWhereUniqueInput
  }

  /**
   * TemplateVersion updateMany
   */
  export type TemplateVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateVersions.
     */
    data: XOR<TemplateVersionUpdateManyMutationInput, TemplateVersionUncheckedUpdateManyInput>
    /**
     * Filter which TemplateVersions to update
     */
    where?: TemplateVersionWhereInput
  }

  /**
   * TemplateVersion upsert
   */
  export type TemplateVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateVersion to update in case it exists.
     */
    where: TemplateVersionWhereUniqueInput
    /**
     * In case the TemplateVersion found by the `where` argument doesn't exist, create a new TemplateVersion with this data.
     */
    create: XOR<TemplateVersionCreateInput, TemplateVersionUncheckedCreateInput>
    /**
     * In case the TemplateVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateVersionUpdateInput, TemplateVersionUncheckedUpdateInput>
  }

  /**
   * TemplateVersion delete
   */
  export type TemplateVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
    /**
     * Filter which TemplateVersion to delete.
     */
    where: TemplateVersionWhereUniqueInput
  }

  /**
   * TemplateVersion deleteMany
   */
  export type TemplateVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateVersions to delete
     */
    where?: TemplateVersionWhereInput
  }

  /**
   * TemplateVersion without action
   */
  export type TemplateVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateVersion
     */
    select?: TemplateVersionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateVersionInclude<ExtArgs> | null
  }


  /**
   * Model TemplateCollection
   */

  export type AggregateTemplateCollection = {
    _count: TemplateCollectionCountAggregateOutputType | null
    _min: TemplateCollectionMinAggregateOutputType | null
    _max: TemplateCollectionMaxAggregateOutputType | null
  }

  export type TemplateCollectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    templateId: string | null
  }

  export type TemplateCollectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    templateId: string | null
  }

  export type TemplateCollectionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    templates: number
    createdAt: number
    updatedAt: number
    templateId: number
    _all: number
  }


  export type TemplateCollectionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
  }

  export type TemplateCollectionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
  }

  export type TemplateCollectionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    templates?: true
    createdAt?: true
    updatedAt?: true
    templateId?: true
    _all?: true
  }

  export type TemplateCollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateCollection to aggregate.
     */
    where?: TemplateCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateCollections to fetch.
     */
    orderBy?: TemplateCollectionOrderByWithRelationAndSearchRelevanceInput | TemplateCollectionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateCollections
    **/
    _count?: true | TemplateCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateCollectionMaxAggregateInputType
  }

  export type GetTemplateCollectionAggregateType<T extends TemplateCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateCollection[P]>
      : GetScalarType<T[P], AggregateTemplateCollection[P]>
  }




  export type TemplateCollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateCollectionWhereInput
    orderBy?: TemplateCollectionOrderByWithAggregationInput | TemplateCollectionOrderByWithAggregationInput[]
    by: TemplateCollectionScalarFieldEnum[] | TemplateCollectionScalarFieldEnum
    having?: TemplateCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCollectionCountAggregateInputType | true
    _min?: TemplateCollectionMinAggregateInputType
    _max?: TemplateCollectionMaxAggregateInputType
  }

  export type TemplateCollectionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    templates: JsonValue
    createdAt: Date
    updatedAt: Date
    templateId: string | null
    _count: TemplateCollectionCountAggregateOutputType | null
    _min: TemplateCollectionMinAggregateOutputType | null
    _max: TemplateCollectionMaxAggregateOutputType | null
  }

  type GetTemplateCollectionGroupByPayload<T extends TemplateCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateCollectionGroupByOutputType[P]>
        }
      >
    >


  export type TemplateCollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    templates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
    Template?: boolean | TemplateCollection$TemplateArgs<ExtArgs>
  }, ExtArgs["result"]["templateCollection"]>

  export type TemplateCollectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    templates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
    Template?: boolean | TemplateCollection$TemplateArgs<ExtArgs>
  }, ExtArgs["result"]["templateCollection"]>

  export type TemplateCollectionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    templates?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    templateId?: boolean
  }

  export type TemplateCollectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Template?: boolean | TemplateCollection$TemplateArgs<ExtArgs>
  }
  export type TemplateCollectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Template?: boolean | TemplateCollection$TemplateArgs<ExtArgs>
  }

  export type $TemplateCollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateCollection"
    objects: {
      Template: Prisma.$TemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      templates: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      templateId: string | null
    }, ExtArgs["result"]["templateCollection"]>
    composites: {}
  }

  type TemplateCollectionGetPayload<S extends boolean | null | undefined | TemplateCollectionDefaultArgs> = $Result.GetResult<Prisma.$TemplateCollectionPayload, S>

  type TemplateCollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplateCollectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplateCollectionCountAggregateInputType | true
    }

  export interface TemplateCollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateCollection'], meta: { name: 'TemplateCollection' } }
    /**
     * Find zero or one TemplateCollection that matches the filter.
     * @param {TemplateCollectionFindUniqueArgs} args - Arguments to find a TemplateCollection
     * @example
     * // Get one TemplateCollection
     * const templateCollection = await prisma.templateCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TemplateCollectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCollectionFindUniqueArgs<ExtArgs>>
    ): Prisma__TemplateCollectionClient<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TemplateCollection that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplateCollectionFindUniqueOrThrowArgs} args - Arguments to find a TemplateCollection
     * @example
     * // Get one TemplateCollection
     * const templateCollection = await prisma.templateCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TemplateCollectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCollectionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateCollectionClient<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TemplateCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCollectionFindFirstArgs} args - Arguments to find a TemplateCollection
     * @example
     * // Get one TemplateCollection
     * const templateCollection = await prisma.templateCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TemplateCollectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCollectionFindFirstArgs<ExtArgs>>
    ): Prisma__TemplateCollectionClient<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TemplateCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCollectionFindFirstOrThrowArgs} args - Arguments to find a TemplateCollection
     * @example
     * // Get one TemplateCollection
     * const templateCollection = await prisma.templateCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TemplateCollectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCollectionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateCollectionClient<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TemplateCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateCollections
     * const templateCollections = await prisma.templateCollection.findMany()
     * 
     * // Get first 10 TemplateCollections
     * const templateCollections = await prisma.templateCollection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateCollectionWithIdOnly = await prisma.templateCollection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TemplateCollectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCollectionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TemplateCollection.
     * @param {TemplateCollectionCreateArgs} args - Arguments to create a TemplateCollection.
     * @example
     * // Create one TemplateCollection
     * const TemplateCollection = await prisma.templateCollection.create({
     *   data: {
     *     // ... data to create a TemplateCollection
     *   }
     * })
     * 
    **/
    create<T extends TemplateCollectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCollectionCreateArgs<ExtArgs>>
    ): Prisma__TemplateCollectionClient<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TemplateCollections.
     * @param {TemplateCollectionCreateManyArgs} args - Arguments to create many TemplateCollections.
     * @example
     * // Create many TemplateCollections
     * const templateCollection = await prisma.templateCollection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TemplateCollectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCollectionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateCollections and returns the data saved in the database.
     * @param {TemplateCollectionCreateManyAndReturnArgs} args - Arguments to create many TemplateCollections.
     * @example
     * // Create many TemplateCollections
     * const templateCollection = await prisma.templateCollection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateCollections and only return the `id`
     * const templateCollectionWithIdOnly = await prisma.templateCollection.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TemplateCollectionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCollectionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TemplateCollection.
     * @param {TemplateCollectionDeleteArgs} args - Arguments to delete one TemplateCollection.
     * @example
     * // Delete one TemplateCollection
     * const TemplateCollection = await prisma.templateCollection.delete({
     *   where: {
     *     // ... filter to delete one TemplateCollection
     *   }
     * })
     * 
    **/
    delete<T extends TemplateCollectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCollectionDeleteArgs<ExtArgs>>
    ): Prisma__TemplateCollectionClient<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TemplateCollection.
     * @param {TemplateCollectionUpdateArgs} args - Arguments to update one TemplateCollection.
     * @example
     * // Update one TemplateCollection
     * const templateCollection = await prisma.templateCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TemplateCollectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCollectionUpdateArgs<ExtArgs>>
    ): Prisma__TemplateCollectionClient<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TemplateCollections.
     * @param {TemplateCollectionDeleteManyArgs} args - Arguments to filter TemplateCollections to delete.
     * @example
     * // Delete a few TemplateCollections
     * const { count } = await prisma.templateCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TemplateCollectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateCollectionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateCollections
     * const templateCollection = await prisma.templateCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TemplateCollectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCollectionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemplateCollection.
     * @param {TemplateCollectionUpsertArgs} args - Arguments to update or create a TemplateCollection.
     * @example
     * // Update or create a TemplateCollection
     * const templateCollection = await prisma.templateCollection.upsert({
     *   create: {
     *     // ... data to create a TemplateCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateCollection we want to update
     *   }
     * })
    **/
    upsert<T extends TemplateCollectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateCollectionUpsertArgs<ExtArgs>>
    ): Prisma__TemplateCollectionClient<$Result.GetResult<Prisma.$TemplateCollectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TemplateCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCollectionCountArgs} args - Arguments to filter TemplateCollections to count.
     * @example
     * // Count the number of TemplateCollections
     * const count = await prisma.templateCollection.count({
     *   where: {
     *     // ... the filter for the TemplateCollections we want to count
     *   }
     * })
    **/
    count<T extends TemplateCollectionCountArgs>(
      args?: Subset<T, TemplateCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateCollectionAggregateArgs>(args: Subset<T, TemplateCollectionAggregateArgs>): Prisma.PrismaPromise<GetTemplateCollectionAggregateType<T>>

    /**
     * Group by TemplateCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateCollectionGroupByArgs['orderBy'] }
        : { orderBy?: TemplateCollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateCollection model
   */
  readonly fields: TemplateCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateCollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Template<T extends TemplateCollection$TemplateArgs<ExtArgs> = {}>(args?: Subset<T, TemplateCollection$TemplateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TemplateCollection model
   */ 
  interface TemplateCollectionFieldRefs {
    readonly id: FieldRef<"TemplateCollection", 'String'>
    readonly name: FieldRef<"TemplateCollection", 'String'>
    readonly description: FieldRef<"TemplateCollection", 'String'>
    readonly templates: FieldRef<"TemplateCollection", 'Json'>
    readonly createdAt: FieldRef<"TemplateCollection", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateCollection", 'DateTime'>
    readonly templateId: FieldRef<"TemplateCollection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TemplateCollection findUnique
   */
  export type TemplateCollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateCollection to fetch.
     */
    where: TemplateCollectionWhereUniqueInput
  }

  /**
   * TemplateCollection findUniqueOrThrow
   */
  export type TemplateCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateCollection to fetch.
     */
    where: TemplateCollectionWhereUniqueInput
  }

  /**
   * TemplateCollection findFirst
   */
  export type TemplateCollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateCollection to fetch.
     */
    where?: TemplateCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateCollections to fetch.
     */
    orderBy?: TemplateCollectionOrderByWithRelationAndSearchRelevanceInput | TemplateCollectionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateCollections.
     */
    cursor?: TemplateCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateCollections.
     */
    distinct?: TemplateCollectionScalarFieldEnum | TemplateCollectionScalarFieldEnum[]
  }

  /**
   * TemplateCollection findFirstOrThrow
   */
  export type TemplateCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateCollection to fetch.
     */
    where?: TemplateCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateCollections to fetch.
     */
    orderBy?: TemplateCollectionOrderByWithRelationAndSearchRelevanceInput | TemplateCollectionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateCollections.
     */
    cursor?: TemplateCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateCollections.
     */
    distinct?: TemplateCollectionScalarFieldEnum | TemplateCollectionScalarFieldEnum[]
  }

  /**
   * TemplateCollection findMany
   */
  export type TemplateCollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * Filter, which TemplateCollections to fetch.
     */
    where?: TemplateCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateCollections to fetch.
     */
    orderBy?: TemplateCollectionOrderByWithRelationAndSearchRelevanceInput | TemplateCollectionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateCollections.
     */
    cursor?: TemplateCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateCollections.
     */
    skip?: number
    distinct?: TemplateCollectionScalarFieldEnum | TemplateCollectionScalarFieldEnum[]
  }

  /**
   * TemplateCollection create
   */
  export type TemplateCollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateCollection.
     */
    data: XOR<TemplateCollectionCreateInput, TemplateCollectionUncheckedCreateInput>
  }

  /**
   * TemplateCollection createMany
   */
  export type TemplateCollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateCollections.
     */
    data: TemplateCollectionCreateManyInput | TemplateCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateCollection createManyAndReturn
   */
  export type TemplateCollectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TemplateCollections.
     */
    data: TemplateCollectionCreateManyInput | TemplateCollectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateCollection update
   */
  export type TemplateCollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateCollection.
     */
    data: XOR<TemplateCollectionUpdateInput, TemplateCollectionUncheckedUpdateInput>
    /**
     * Choose, which TemplateCollection to update.
     */
    where: TemplateCollectionWhereUniqueInput
  }

  /**
   * TemplateCollection updateMany
   */
  export type TemplateCollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateCollections.
     */
    data: XOR<TemplateCollectionUpdateManyMutationInput, TemplateCollectionUncheckedUpdateManyInput>
    /**
     * Filter which TemplateCollections to update
     */
    where?: TemplateCollectionWhereInput
  }

  /**
   * TemplateCollection upsert
   */
  export type TemplateCollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateCollection to update in case it exists.
     */
    where: TemplateCollectionWhereUniqueInput
    /**
     * In case the TemplateCollection found by the `where` argument doesn't exist, create a new TemplateCollection with this data.
     */
    create: XOR<TemplateCollectionCreateInput, TemplateCollectionUncheckedCreateInput>
    /**
     * In case the TemplateCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateCollectionUpdateInput, TemplateCollectionUncheckedUpdateInput>
  }

  /**
   * TemplateCollection delete
   */
  export type TemplateCollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
    /**
     * Filter which TemplateCollection to delete.
     */
    where: TemplateCollectionWhereUniqueInput
  }

  /**
   * TemplateCollection deleteMany
   */
  export type TemplateCollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateCollections to delete
     */
    where?: TemplateCollectionWhereInput
  }

  /**
   * TemplateCollection.Template
   */
  export type TemplateCollection$TemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * TemplateCollection without action
   */
  export type TemplateCollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCollection
     */
    select?: TemplateCollectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateCollectionInclude<ExtArgs> | null
  }


  /**
   * Model TemplateRating
   */

  export type AggregateTemplateRating = {
    _count: TemplateRatingCountAggregateOutputType | null
    _avg: TemplateRatingAvgAggregateOutputType | null
    _sum: TemplateRatingSumAggregateOutputType | null
    _min: TemplateRatingMinAggregateOutputType | null
    _max: TemplateRatingMaxAggregateOutputType | null
  }

  export type TemplateRatingAvgAggregateOutputType = {
    rating: number | null
  }

  export type TemplateRatingSumAggregateOutputType = {
    rating: number | null
  }

  export type TemplateRatingMinAggregateOutputType = {
    id: string | null
    templateId: string | null
    userId: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateRatingMaxAggregateOutputType = {
    id: string | null
    templateId: string | null
    userId: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateRatingCountAggregateOutputType = {
    id: number
    templateId: number
    userId: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateRatingAvgAggregateInputType = {
    rating?: true
  }

  export type TemplateRatingSumAggregateInputType = {
    rating?: true
  }

  export type TemplateRatingMinAggregateInputType = {
    id?: true
    templateId?: true
    userId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateRatingMaxAggregateInputType = {
    id?: true
    templateId?: true
    userId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateRatingCountAggregateInputType = {
    id?: true
    templateId?: true
    userId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateRating to aggregate.
     */
    where?: TemplateRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateRatings to fetch.
     */
    orderBy?: TemplateRatingOrderByWithRelationAndSearchRelevanceInput | TemplateRatingOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateRatings
    **/
    _count?: true | TemplateRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateRatingMaxAggregateInputType
  }

  export type GetTemplateRatingAggregateType<T extends TemplateRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateRating[P]>
      : GetScalarType<T[P], AggregateTemplateRating[P]>
  }




  export type TemplateRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateRatingWhereInput
    orderBy?: TemplateRatingOrderByWithAggregationInput | TemplateRatingOrderByWithAggregationInput[]
    by: TemplateRatingScalarFieldEnum[] | TemplateRatingScalarFieldEnum
    having?: TemplateRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateRatingCountAggregateInputType | true
    _avg?: TemplateRatingAvgAggregateInputType
    _sum?: TemplateRatingSumAggregateInputType
    _min?: TemplateRatingMinAggregateInputType
    _max?: TemplateRatingMaxAggregateInputType
  }

  export type TemplateRatingGroupByOutputType = {
    id: string
    templateId: string
    userId: string
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: TemplateRatingCountAggregateOutputType | null
    _avg: TemplateRatingAvgAggregateOutputType | null
    _sum: TemplateRatingSumAggregateOutputType | null
    _min: TemplateRatingMinAggregateOutputType | null
    _max: TemplateRatingMaxAggregateOutputType | null
  }

  type GetTemplateRatingGroupByPayload<T extends TemplateRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateRatingGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateRatingGroupByOutputType[P]>
        }
      >
    >


  export type TemplateRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    userId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["templateRating"]>

  export type TemplateRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    userId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["templateRating"]>

  export type TemplateRatingSelectScalar = {
    id?: boolean
    templateId?: boolean
    userId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $TemplateRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateRating"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      templateId: string
      userId: string
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["templateRating"]>
    composites: {}
  }

  type TemplateRatingGetPayload<S extends boolean | null | undefined | TemplateRatingDefaultArgs> = $Result.GetResult<Prisma.$TemplateRatingPayload, S>

  type TemplateRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TemplateRatingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TemplateRatingCountAggregateInputType | true
    }

  export interface TemplateRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateRating'], meta: { name: 'TemplateRating' } }
    /**
     * Find zero or one TemplateRating that matches the filter.
     * @param {TemplateRatingFindUniqueArgs} args - Arguments to find a TemplateRating
     * @example
     * // Get one TemplateRating
     * const templateRating = await prisma.templateRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TemplateRatingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateRatingFindUniqueArgs<ExtArgs>>
    ): Prisma__TemplateRatingClient<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TemplateRating that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TemplateRatingFindUniqueOrThrowArgs} args - Arguments to find a TemplateRating
     * @example
     * // Get one TemplateRating
     * const templateRating = await prisma.templateRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TemplateRatingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateRatingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateRatingClient<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TemplateRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateRatingFindFirstArgs} args - Arguments to find a TemplateRating
     * @example
     * // Get one TemplateRating
     * const templateRating = await prisma.templateRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TemplateRatingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateRatingFindFirstArgs<ExtArgs>>
    ): Prisma__TemplateRatingClient<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TemplateRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateRatingFindFirstOrThrowArgs} args - Arguments to find a TemplateRating
     * @example
     * // Get one TemplateRating
     * const templateRating = await prisma.templateRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TemplateRatingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateRatingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TemplateRatingClient<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TemplateRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateRatings
     * const templateRatings = await prisma.templateRating.findMany()
     * 
     * // Get first 10 TemplateRatings
     * const templateRatings = await prisma.templateRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateRatingWithIdOnly = await prisma.templateRating.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TemplateRatingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateRatingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TemplateRating.
     * @param {TemplateRatingCreateArgs} args - Arguments to create a TemplateRating.
     * @example
     * // Create one TemplateRating
     * const TemplateRating = await prisma.templateRating.create({
     *   data: {
     *     // ... data to create a TemplateRating
     *   }
     * })
     * 
    **/
    create<T extends TemplateRatingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateRatingCreateArgs<ExtArgs>>
    ): Prisma__TemplateRatingClient<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TemplateRatings.
     * @param {TemplateRatingCreateManyArgs} args - Arguments to create many TemplateRatings.
     * @example
     * // Create many TemplateRatings
     * const templateRating = await prisma.templateRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TemplateRatingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateRatingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateRatings and returns the data saved in the database.
     * @param {TemplateRatingCreateManyAndReturnArgs} args - Arguments to create many TemplateRatings.
     * @example
     * // Create many TemplateRatings
     * const templateRating = await prisma.templateRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateRatings and only return the `id`
     * const templateRatingWithIdOnly = await prisma.templateRating.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TemplateRatingCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateRatingCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a TemplateRating.
     * @param {TemplateRatingDeleteArgs} args - Arguments to delete one TemplateRating.
     * @example
     * // Delete one TemplateRating
     * const TemplateRating = await prisma.templateRating.delete({
     *   where: {
     *     // ... filter to delete one TemplateRating
     *   }
     * })
     * 
    **/
    delete<T extends TemplateRatingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateRatingDeleteArgs<ExtArgs>>
    ): Prisma__TemplateRatingClient<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TemplateRating.
     * @param {TemplateRatingUpdateArgs} args - Arguments to update one TemplateRating.
     * @example
     * // Update one TemplateRating
     * const templateRating = await prisma.templateRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TemplateRatingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateRatingUpdateArgs<ExtArgs>>
    ): Prisma__TemplateRatingClient<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TemplateRatings.
     * @param {TemplateRatingDeleteManyArgs} args - Arguments to filter TemplateRatings to delete.
     * @example
     * // Delete a few TemplateRatings
     * const { count } = await prisma.templateRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TemplateRatingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TemplateRatingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateRatings
     * const templateRating = await prisma.templateRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TemplateRatingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateRatingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TemplateRating.
     * @param {TemplateRatingUpsertArgs} args - Arguments to update or create a TemplateRating.
     * @example
     * // Update or create a TemplateRating
     * const templateRating = await prisma.templateRating.upsert({
     *   create: {
     *     // ... data to create a TemplateRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateRating we want to update
     *   }
     * })
    **/
    upsert<T extends TemplateRatingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TemplateRatingUpsertArgs<ExtArgs>>
    ): Prisma__TemplateRatingClient<$Result.GetResult<Prisma.$TemplateRatingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TemplateRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateRatingCountArgs} args - Arguments to filter TemplateRatings to count.
     * @example
     * // Count the number of TemplateRatings
     * const count = await prisma.templateRating.count({
     *   where: {
     *     // ... the filter for the TemplateRatings we want to count
     *   }
     * })
    **/
    count<T extends TemplateRatingCountArgs>(
      args?: Subset<T, TemplateRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateRatingAggregateArgs>(args: Subset<T, TemplateRatingAggregateArgs>): Prisma.PrismaPromise<GetTemplateRatingAggregateType<T>>

    /**
     * Group by TemplateRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateRatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateRatingGroupByArgs['orderBy'] }
        : { orderBy?: TemplateRatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateRating model
   */
  readonly fields: TemplateRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TemplateRating model
   */ 
  interface TemplateRatingFieldRefs {
    readonly id: FieldRef<"TemplateRating", 'String'>
    readonly templateId: FieldRef<"TemplateRating", 'String'>
    readonly userId: FieldRef<"TemplateRating", 'String'>
    readonly rating: FieldRef<"TemplateRating", 'Int'>
    readonly createdAt: FieldRef<"TemplateRating", 'DateTime'>
    readonly updatedAt: FieldRef<"TemplateRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TemplateRating findUnique
   */
  export type TemplateRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * Filter, which TemplateRating to fetch.
     */
    where: TemplateRatingWhereUniqueInput
  }

  /**
   * TemplateRating findUniqueOrThrow
   */
  export type TemplateRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * Filter, which TemplateRating to fetch.
     */
    where: TemplateRatingWhereUniqueInput
  }

  /**
   * TemplateRating findFirst
   */
  export type TemplateRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * Filter, which TemplateRating to fetch.
     */
    where?: TemplateRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateRatings to fetch.
     */
    orderBy?: TemplateRatingOrderByWithRelationAndSearchRelevanceInput | TemplateRatingOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateRatings.
     */
    cursor?: TemplateRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateRatings.
     */
    distinct?: TemplateRatingScalarFieldEnum | TemplateRatingScalarFieldEnum[]
  }

  /**
   * TemplateRating findFirstOrThrow
   */
  export type TemplateRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * Filter, which TemplateRating to fetch.
     */
    where?: TemplateRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateRatings to fetch.
     */
    orderBy?: TemplateRatingOrderByWithRelationAndSearchRelevanceInput | TemplateRatingOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateRatings.
     */
    cursor?: TemplateRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateRatings.
     */
    distinct?: TemplateRatingScalarFieldEnum | TemplateRatingScalarFieldEnum[]
  }

  /**
   * TemplateRating findMany
   */
  export type TemplateRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * Filter, which TemplateRatings to fetch.
     */
    where?: TemplateRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateRatings to fetch.
     */
    orderBy?: TemplateRatingOrderByWithRelationAndSearchRelevanceInput | TemplateRatingOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateRatings.
     */
    cursor?: TemplateRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateRatings.
     */
    skip?: number
    distinct?: TemplateRatingScalarFieldEnum | TemplateRatingScalarFieldEnum[]
  }

  /**
   * TemplateRating create
   */
  export type TemplateRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * The data needed to create a TemplateRating.
     */
    data: XOR<TemplateRatingCreateInput, TemplateRatingUncheckedCreateInput>
  }

  /**
   * TemplateRating createMany
   */
  export type TemplateRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateRatings.
     */
    data: TemplateRatingCreateManyInput | TemplateRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateRating createManyAndReturn
   */
  export type TemplateRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TemplateRatings.
     */
    data: TemplateRatingCreateManyInput | TemplateRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TemplateRating update
   */
  export type TemplateRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * The data needed to update a TemplateRating.
     */
    data: XOR<TemplateRatingUpdateInput, TemplateRatingUncheckedUpdateInput>
    /**
     * Choose, which TemplateRating to update.
     */
    where: TemplateRatingWhereUniqueInput
  }

  /**
   * TemplateRating updateMany
   */
  export type TemplateRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateRatings.
     */
    data: XOR<TemplateRatingUpdateManyMutationInput, TemplateRatingUncheckedUpdateManyInput>
    /**
     * Filter which TemplateRatings to update
     */
    where?: TemplateRatingWhereInput
  }

  /**
   * TemplateRating upsert
   */
  export type TemplateRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * The filter to search for the TemplateRating to update in case it exists.
     */
    where: TemplateRatingWhereUniqueInput
    /**
     * In case the TemplateRating found by the `where` argument doesn't exist, create a new TemplateRating with this data.
     */
    create: XOR<TemplateRatingCreateInput, TemplateRatingUncheckedCreateInput>
    /**
     * In case the TemplateRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateRatingUpdateInput, TemplateRatingUncheckedUpdateInput>
  }

  /**
   * TemplateRating delete
   */
  export type TemplateRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
    /**
     * Filter which TemplateRating to delete.
     */
    where: TemplateRatingWhereUniqueInput
  }

  /**
   * TemplateRating deleteMany
   */
  export type TemplateRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateRatings to delete
     */
    where?: TemplateRatingWhereInput
  }

  /**
   * TemplateRating without action
   */
  export type TemplateRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateRating
     */
    select?: TemplateRatingSelect<ExtArgs> | null
  }


  /**
   * Model PublicAgent
   */

  export type AggregatePublicAgent = {
    _count: PublicAgentCountAggregateOutputType | null
    _min: PublicAgentMinAggregateOutputType | null
    _max: PublicAgentMaxAggregateOutputType | null
  }

  export type PublicAgentMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    userId: string | null
    madePublic: Date | null
    deletedAt: Date | null
    description: string | null
    remixable: boolean | null
    isTemplate: boolean | null
    featured: boolean | null
  }

  export type PublicAgentMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    userId: string | null
    madePublic: Date | null
    deletedAt: Date | null
    description: string | null
    remixable: boolean | null
    isTemplate: boolean | null
    featured: boolean | null
  }

  export type PublicAgentCountAggregateOutputType = {
    id: number
    agentId: number
    userId: number
    madePublic: number
    deletedAt: number
    description: number
    remixable: number
    isTemplate: number
    featured: number
    _all: number
  }


  export type PublicAgentMinAggregateInputType = {
    id?: true
    agentId?: true
    userId?: true
    madePublic?: true
    deletedAt?: true
    description?: true
    remixable?: true
    isTemplate?: true
    featured?: true
  }

  export type PublicAgentMaxAggregateInputType = {
    id?: true
    agentId?: true
    userId?: true
    madePublic?: true
    deletedAt?: true
    description?: true
    remixable?: true
    isTemplate?: true
    featured?: true
  }

  export type PublicAgentCountAggregateInputType = {
    id?: true
    agentId?: true
    userId?: true
    madePublic?: true
    deletedAt?: true
    description?: true
    remixable?: true
    isTemplate?: true
    featured?: true
    _all?: true
  }

  export type PublicAgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicAgent to aggregate.
     */
    where?: PublicAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicAgents to fetch.
     */
    orderBy?: PublicAgentOrderByWithRelationAndSearchRelevanceInput | PublicAgentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicAgents
    **/
    _count?: true | PublicAgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicAgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicAgentMaxAggregateInputType
  }

  export type GetPublicAgentAggregateType<T extends PublicAgentAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicAgent[P]>
      : GetScalarType<T[P], AggregatePublicAgent[P]>
  }




  export type PublicAgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicAgentWhereInput
    orderBy?: PublicAgentOrderByWithAggregationInput | PublicAgentOrderByWithAggregationInput[]
    by: PublicAgentScalarFieldEnum[] | PublicAgentScalarFieldEnum
    having?: PublicAgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicAgentCountAggregateInputType | true
    _min?: PublicAgentMinAggregateInputType
    _max?: PublicAgentMaxAggregateInputType
  }

  export type PublicAgentGroupByOutputType = {
    id: string
    agentId: string
    userId: string
    madePublic: Date
    deletedAt: Date | null
    description: string
    remixable: boolean
    isTemplate: boolean
    featured: boolean
    _count: PublicAgentCountAggregateOutputType | null
    _min: PublicAgentMinAggregateOutputType | null
    _max: PublicAgentMaxAggregateOutputType | null
  }

  type GetPublicAgentGroupByPayload<T extends PublicAgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicAgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicAgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicAgentGroupByOutputType[P]>
            : GetScalarType<T[P], PublicAgentGroupByOutputType[P]>
        }
      >
    >


  export type PublicAgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    userId?: boolean
    madePublic?: boolean
    deletedAt?: boolean
    description?: boolean
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: boolean | PublicAgent$commentsArgs<ExtArgs>
    likes?: boolean | PublicAgent$likesArgs<ExtArgs>
    Reports?: boolean | PublicAgent$ReportsArgs<ExtArgs>
    _count?: boolean | PublicAgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publicAgent"]>

  export type PublicAgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    userId?: boolean
    madePublic?: boolean
    deletedAt?: boolean
    description?: boolean
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
  }, ExtArgs["result"]["publicAgent"]>

  export type PublicAgentSelectScalar = {
    id?: boolean
    agentId?: boolean
    userId?: boolean
    madePublic?: boolean
    deletedAt?: boolean
    description?: boolean
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
  }

  export type PublicAgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PublicAgent$commentsArgs<ExtArgs>
    likes?: boolean | PublicAgent$likesArgs<ExtArgs>
    Reports?: boolean | PublicAgent$ReportsArgs<ExtArgs>
    _count?: boolean | PublicAgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublicAgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PublicAgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicAgent"
    objects: {
      comments: Prisma.$CommentsPayload<ExtArgs>[]
      likes: Prisma.$LikesPayload<ExtArgs>[]
      Reports: Prisma.$ReportsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      userId: string
      madePublic: Date
      deletedAt: Date | null
      description: string
      remixable: boolean
      isTemplate: boolean
      featured: boolean
    }, ExtArgs["result"]["publicAgent"]>
    composites: {}
  }

  type PublicAgentGetPayload<S extends boolean | null | undefined | PublicAgentDefaultArgs> = $Result.GetResult<Prisma.$PublicAgentPayload, S>

  type PublicAgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PublicAgentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PublicAgentCountAggregateInputType | true
    }

  export interface PublicAgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicAgent'], meta: { name: 'PublicAgent' } }
    /**
     * Find zero or one PublicAgent that matches the filter.
     * @param {PublicAgentFindUniqueArgs} args - Arguments to find a PublicAgent
     * @example
     * // Get one PublicAgent
     * const publicAgent = await prisma.publicAgent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PublicAgentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentFindUniqueArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PublicAgent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PublicAgentFindUniqueOrThrowArgs} args - Arguments to find a PublicAgent
     * @example
     * // Get one PublicAgent
     * const publicAgent = await prisma.publicAgent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PublicAgentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PublicAgent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentFindFirstArgs} args - Arguments to find a PublicAgent
     * @example
     * // Get one PublicAgent
     * const publicAgent = await prisma.publicAgent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PublicAgentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentFindFirstArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PublicAgent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentFindFirstOrThrowArgs} args - Arguments to find a PublicAgent
     * @example
     * // Get one PublicAgent
     * const publicAgent = await prisma.publicAgent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PublicAgentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PublicAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicAgents
     * const publicAgents = await prisma.publicAgent.findMany()
     * 
     * // Get first 10 PublicAgents
     * const publicAgents = await prisma.publicAgent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicAgentWithIdOnly = await prisma.publicAgent.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PublicAgentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PublicAgent.
     * @param {PublicAgentCreateArgs} args - Arguments to create a PublicAgent.
     * @example
     * // Create one PublicAgent
     * const PublicAgent = await prisma.publicAgent.create({
     *   data: {
     *     // ... data to create a PublicAgent
     *   }
     * })
     * 
    **/
    create<T extends PublicAgentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentCreateArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PublicAgents.
     * @param {PublicAgentCreateManyArgs} args - Arguments to create many PublicAgents.
     * @example
     * // Create many PublicAgents
     * const publicAgent = await prisma.publicAgent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PublicAgentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicAgents and returns the data saved in the database.
     * @param {PublicAgentCreateManyAndReturnArgs} args - Arguments to create many PublicAgents.
     * @example
     * // Create many PublicAgents
     * const publicAgent = await prisma.publicAgent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicAgents and only return the `id`
     * const publicAgentWithIdOnly = await prisma.publicAgent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PublicAgentCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a PublicAgent.
     * @param {PublicAgentDeleteArgs} args - Arguments to delete one PublicAgent.
     * @example
     * // Delete one PublicAgent
     * const PublicAgent = await prisma.publicAgent.delete({
     *   where: {
     *     // ... filter to delete one PublicAgent
     *   }
     * })
     * 
    **/
    delete<T extends PublicAgentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentDeleteArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PublicAgent.
     * @param {PublicAgentUpdateArgs} args - Arguments to update one PublicAgent.
     * @example
     * // Update one PublicAgent
     * const publicAgent = await prisma.publicAgent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PublicAgentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentUpdateArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PublicAgents.
     * @param {PublicAgentDeleteManyArgs} args - Arguments to filter PublicAgents to delete.
     * @example
     * // Delete a few PublicAgents
     * const { count } = await prisma.publicAgent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PublicAgentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PublicAgentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicAgents
     * const publicAgent = await prisma.publicAgent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PublicAgentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PublicAgent.
     * @param {PublicAgentUpsertArgs} args - Arguments to update or create a PublicAgent.
     * @example
     * // Update or create a PublicAgent
     * const publicAgent = await prisma.publicAgent.upsert({
     *   create: {
     *     // ... data to create a PublicAgent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicAgent we want to update
     *   }
     * })
    **/
    upsert<T extends PublicAgentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PublicAgentUpsertArgs<ExtArgs>>
    ): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PublicAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentCountArgs} args - Arguments to filter PublicAgents to count.
     * @example
     * // Count the number of PublicAgents
     * const count = await prisma.publicAgent.count({
     *   where: {
     *     // ... the filter for the PublicAgents we want to count
     *   }
     * })
    **/
    count<T extends PublicAgentCountArgs>(
      args?: Subset<T, PublicAgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicAgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublicAgentAggregateArgs>(args: Subset<T, PublicAgentAggregateArgs>): Prisma.PrismaPromise<GetPublicAgentAggregateType<T>>

    /**
     * Group by PublicAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicAgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublicAgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicAgentGroupByArgs['orderBy'] }
        : { orderBy?: PublicAgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublicAgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicAgent model
   */
  readonly fields: PublicAgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicAgent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicAgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    comments<T extends PublicAgent$commentsArgs<ExtArgs> = {}>(args?: Subset<T, PublicAgent$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    likes<T extends PublicAgent$likesArgs<ExtArgs> = {}>(args?: Subset<T, PublicAgent$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findMany'> | Null>;

    Reports<T extends PublicAgent$ReportsArgs<ExtArgs> = {}>(args?: Subset<T, PublicAgent$ReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PublicAgent model
   */ 
  interface PublicAgentFieldRefs {
    readonly id: FieldRef<"PublicAgent", 'String'>
    readonly agentId: FieldRef<"PublicAgent", 'String'>
    readonly userId: FieldRef<"PublicAgent", 'String'>
    readonly madePublic: FieldRef<"PublicAgent", 'DateTime'>
    readonly deletedAt: FieldRef<"PublicAgent", 'DateTime'>
    readonly description: FieldRef<"PublicAgent", 'String'>
    readonly remixable: FieldRef<"PublicAgent", 'Boolean'>
    readonly isTemplate: FieldRef<"PublicAgent", 'Boolean'>
    readonly featured: FieldRef<"PublicAgent", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PublicAgent findUnique
   */
  export type PublicAgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgent to fetch.
     */
    where: PublicAgentWhereUniqueInput
  }

  /**
   * PublicAgent findUniqueOrThrow
   */
  export type PublicAgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgent to fetch.
     */
    where: PublicAgentWhereUniqueInput
  }

  /**
   * PublicAgent findFirst
   */
  export type PublicAgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgent to fetch.
     */
    where?: PublicAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicAgents to fetch.
     */
    orderBy?: PublicAgentOrderByWithRelationAndSearchRelevanceInput | PublicAgentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicAgents.
     */
    cursor?: PublicAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicAgents.
     */
    distinct?: PublicAgentScalarFieldEnum | PublicAgentScalarFieldEnum[]
  }

  /**
   * PublicAgent findFirstOrThrow
   */
  export type PublicAgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgent to fetch.
     */
    where?: PublicAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicAgents to fetch.
     */
    orderBy?: PublicAgentOrderByWithRelationAndSearchRelevanceInput | PublicAgentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicAgents.
     */
    cursor?: PublicAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicAgents.
     */
    distinct?: PublicAgentScalarFieldEnum | PublicAgentScalarFieldEnum[]
  }

  /**
   * PublicAgent findMany
   */
  export type PublicAgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter, which PublicAgents to fetch.
     */
    where?: PublicAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicAgents to fetch.
     */
    orderBy?: PublicAgentOrderByWithRelationAndSearchRelevanceInput | PublicAgentOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicAgents.
     */
    cursor?: PublicAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicAgents.
     */
    skip?: number
    distinct?: PublicAgentScalarFieldEnum | PublicAgentScalarFieldEnum[]
  }

  /**
   * PublicAgent create
   */
  export type PublicAgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * The data needed to create a PublicAgent.
     */
    data: XOR<PublicAgentCreateInput, PublicAgentUncheckedCreateInput>
  }

  /**
   * PublicAgent createMany
   */
  export type PublicAgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicAgents.
     */
    data: PublicAgentCreateManyInput | PublicAgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicAgent createManyAndReturn
   */
  export type PublicAgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PublicAgents.
     */
    data: PublicAgentCreateManyInput | PublicAgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicAgent update
   */
  export type PublicAgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * The data needed to update a PublicAgent.
     */
    data: XOR<PublicAgentUpdateInput, PublicAgentUncheckedUpdateInput>
    /**
     * Choose, which PublicAgent to update.
     */
    where: PublicAgentWhereUniqueInput
  }

  /**
   * PublicAgent updateMany
   */
  export type PublicAgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicAgents.
     */
    data: XOR<PublicAgentUpdateManyMutationInput, PublicAgentUncheckedUpdateManyInput>
    /**
     * Filter which PublicAgents to update
     */
    where?: PublicAgentWhereInput
  }

  /**
   * PublicAgent upsert
   */
  export type PublicAgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * The filter to search for the PublicAgent to update in case it exists.
     */
    where: PublicAgentWhereUniqueInput
    /**
     * In case the PublicAgent found by the `where` argument doesn't exist, create a new PublicAgent with this data.
     */
    create: XOR<PublicAgentCreateInput, PublicAgentUncheckedCreateInput>
    /**
     * In case the PublicAgent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicAgentUpdateInput, PublicAgentUncheckedUpdateInput>
  }

  /**
   * PublicAgent delete
   */
  export type PublicAgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
    /**
     * Filter which PublicAgent to delete.
     */
    where: PublicAgentWhereUniqueInput
  }

  /**
   * PublicAgent deleteMany
   */
  export type PublicAgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicAgents to delete
     */
    where?: PublicAgentWhereInput
  }

  /**
   * PublicAgent.comments
   */
  export type PublicAgent$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationAndSearchRelevanceInput | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * PublicAgent.likes
   */
  export type PublicAgent$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationAndSearchRelevanceInput | LikesOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * PublicAgent.Reports
   */
  export type PublicAgent$ReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    where?: ReportsWhereInput
    orderBy?: ReportsOrderByWithRelationAndSearchRelevanceInput | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ReportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * PublicAgent without action
   */
  export type PublicAgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicAgent
     */
    select?: PublicAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublicAgentInclude<ExtArgs> | null
  }


  /**
   * Model Reports
   */

  export type AggregateReports = {
    _count: ReportsCountAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  export type ReportsMinAggregateOutputType = {
    id: string | null
    publicAgentId: string | null
    createdAt: Date | null
    message: string | null
  }

  export type ReportsMaxAggregateOutputType = {
    id: string | null
    publicAgentId: string | null
    createdAt: Date | null
    message: string | null
  }

  export type ReportsCountAggregateOutputType = {
    id: number
    publicAgentId: number
    createdAt: number
    message: number
    _all: number
  }


  export type ReportsMinAggregateInputType = {
    id?: true
    publicAgentId?: true
    createdAt?: true
    message?: true
  }

  export type ReportsMaxAggregateInputType = {
    id?: true
    publicAgentId?: true
    createdAt?: true
    message?: true
  }

  export type ReportsCountAggregateInputType = {
    id?: true
    publicAgentId?: true
    createdAt?: true
    message?: true
    _all?: true
  }

  export type ReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to aggregate.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationAndSearchRelevanceInput | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportsMaxAggregateInputType
  }

  export type GetReportsAggregateType<T extends ReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReports[P]>
      : GetScalarType<T[P], AggregateReports[P]>
  }




  export type ReportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportsWhereInput
    orderBy?: ReportsOrderByWithAggregationInput | ReportsOrderByWithAggregationInput[]
    by: ReportsScalarFieldEnum[] | ReportsScalarFieldEnum
    having?: ReportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCountAggregateInputType | true
    _min?: ReportsMinAggregateInputType
    _max?: ReportsMaxAggregateInputType
  }

  export type ReportsGroupByOutputType = {
    id: string
    publicAgentId: string
    createdAt: Date
    message: string
    _count: ReportsCountAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  type GetReportsGroupByPayload<T extends ReportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsGroupByOutputType[P]>
        }
      >
    >


  export type ReportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicAgentId?: boolean
    createdAt?: boolean
    message?: boolean
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type ReportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicAgentId?: boolean
    createdAt?: boolean
    message?: boolean
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type ReportsSelectScalar = {
    id?: boolean
    publicAgentId?: boolean
    createdAt?: boolean
    message?: boolean
  }

  export type ReportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }
  export type ReportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }

  export type $ReportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reports"
    objects: {
      publicAgent: Prisma.$PublicAgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicAgentId: string
      createdAt: Date
      message: string
    }, ExtArgs["result"]["reports"]>
    composites: {}
  }

  type ReportsGetPayload<S extends boolean | null | undefined | ReportsDefaultArgs> = $Result.GetResult<Prisma.$ReportsPayload, S>

  type ReportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReportsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReportsCountAggregateInputType | true
    }

  export interface ReportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reports'], meta: { name: 'Reports' } }
    /**
     * Find zero or one Reports that matches the filter.
     * @param {ReportsFindUniqueArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReportsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsFindUniqueArgs<ExtArgs>>
    ): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reports that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReportsFindUniqueOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReportsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindFirstArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReportsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsFindFirstArgs<ExtArgs>>
    ): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindFirstOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReportsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.reports.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportsWithIdOnly = await prisma.reports.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReportsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reports.
     * @param {ReportsCreateArgs} args - Arguments to create a Reports.
     * @example
     * // Create one Reports
     * const Reports = await prisma.reports.create({
     *   data: {
     *     // ... data to create a Reports
     *   }
     * })
     * 
    **/
    create<T extends ReportsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsCreateArgs<ExtArgs>>
    ): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reports.
     * @param {ReportsCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ReportsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportsCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ReportsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Reports.
     * @param {ReportsDeleteArgs} args - Arguments to delete one Reports.
     * @example
     * // Delete one Reports
     * const Reports = await prisma.reports.delete({
     *   where: {
     *     // ... filter to delete one Reports
     *   }
     * })
     * 
    **/
    delete<T extends ReportsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsDeleteArgs<ExtArgs>>
    ): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reports.
     * @param {ReportsUpdateArgs} args - Arguments to update one Reports.
     * @example
     * // Update one Reports
     * const reports = await prisma.reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReportsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsUpdateArgs<ExtArgs>>
    ): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reports.
     * @param {ReportsDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReportsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReportsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReportsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reports.
     * @param {ReportsUpsertArgs} args - Arguments to update or create a Reports.
     * @example
     * // Update or create a Reports
     * const reports = await prisma.reports.upsert({
     *   create: {
     *     // ... data to create a Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reports we want to update
     *   }
     * })
    **/
    upsert<T extends ReportsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReportsUpsertArgs<ExtArgs>>
    ): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.reports.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportsCountArgs>(
      args?: Subset<T, ReportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportsAggregateArgs>(args: Subset<T, ReportsAggregateArgs>): Prisma.PrismaPromise<GetReportsAggregateType<T>>

    /**
     * Group by Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportsGroupByArgs['orderBy'] }
        : { orderBy?: ReportsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reports model
   */
  readonly fields: ReportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    publicAgent<T extends PublicAgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicAgentDefaultArgs<ExtArgs>>): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reports model
   */ 
  interface ReportsFieldRefs {
    readonly id: FieldRef<"Reports", 'String'>
    readonly publicAgentId: FieldRef<"Reports", 'String'>
    readonly createdAt: FieldRef<"Reports", 'DateTime'>
    readonly message: FieldRef<"Reports", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reports findUnique
   */
  export type ReportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports findUniqueOrThrow
   */
  export type ReportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports findFirst
   */
  export type ReportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationAndSearchRelevanceInput | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports findFirstOrThrow
   */
  export type ReportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationAndSearchRelevanceInput | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports findMany
   */
  export type ReportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationAndSearchRelevanceInput | ReportsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports create
   */
  export type ReportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reports.
     */
    data: XOR<ReportsCreateInput, ReportsUncheckedCreateInput>
  }

  /**
   * Reports createMany
   */
  export type ReportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportsCreateManyInput | ReportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reports createManyAndReturn
   */
  export type ReportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportsCreateManyInput | ReportsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reports update
   */
  export type ReportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reports.
     */
    data: XOR<ReportsUpdateInput, ReportsUncheckedUpdateInput>
    /**
     * Choose, which Reports to update.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports updateMany
   */
  export type ReportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportsUpdateManyMutationInput, ReportsUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportsWhereInput
  }

  /**
   * Reports upsert
   */
  export type ReportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reports to update in case it exists.
     */
    where: ReportsWhereUniqueInput
    /**
     * In case the Reports found by the `where` argument doesn't exist, create a new Reports with this data.
     */
    create: XOR<ReportsCreateInput, ReportsUncheckedCreateInput>
    /**
     * In case the Reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportsUpdateInput, ReportsUncheckedUpdateInput>
  }

  /**
   * Reports delete
   */
  export type ReportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter which Reports to delete.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports deleteMany
   */
  export type ReportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportsWhereInput
  }

  /**
   * Reports without action
   */
  export type ReportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    publicAgentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    publicAgentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    userId: number
    publicAgentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationAndSearchRelevanceInput | LikesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    userId: string
    publicAgentId: string
    createdAt: Date
    updatedAt: Date | null
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicAgentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicAgentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type LikesSelectScalar = {
    id?: boolean
    userId?: boolean
    publicAgentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }
  export type LikesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      publicAgent: Prisma.$PublicAgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      publicAgentId: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>
    ): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>
    ): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
    **/
    create<T extends LikesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikesCreateArgs<ExtArgs>>
    ): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends LikesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends LikesCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
    **/
    delete<T extends LikesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>
    ): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>
    ): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
    **/
    upsert<T extends LikesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>
    ): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    publicAgent<T extends PublicAgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicAgentDefaultArgs<ExtArgs>>): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Likes model
   */ 
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'String'>
    readonly userId: FieldRef<"Likes", 'String'>
    readonly publicAgentId: FieldRef<"Likes", 'String'>
    readonly createdAt: FieldRef<"Likes", 'DateTime'>
    readonly updatedAt: FieldRef<"Likes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationAndSearchRelevanceInput | LikesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationAndSearchRelevanceInput | LikesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationAndSearchRelevanceInput | LikesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes createManyAndReturn
   */
  export type LikesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    publicAgentId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    publicAgentId: string | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    userId: number
    publicAgentId: number
    content: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    userId?: true
    publicAgentId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationAndSearchRelevanceInput | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    userId: string
    publicAgentId: string
    content: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicAgentId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicAgentId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    userId?: boolean
    publicAgentId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publicAgent?: boolean | PublicAgentDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      publicAgent: Prisma.$PublicAgentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      publicAgentId: string
      content: string
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CommentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CommentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CommentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
    **/
    create<T extends CommentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CommentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
    **/
    delete<T extends CommentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CommentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CommentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CommentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
    **/
    upsert<T extends CommentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>
    ): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    publicAgent<T extends PublicAgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublicAgentDefaultArgs<ExtArgs>>): Prisma__PublicAgentClient<$Result.GetResult<Prisma.$PublicAgentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Comments model
   */ 
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly userId: FieldRef<"Comments", 'String'>
    readonly publicAgentId: FieldRef<"Comments", 'String'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly updatedAt: FieldRef<"Comments", 'DateTime'>
    readonly deletedAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationAndSearchRelevanceInput | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationAndSearchRelevanceInput | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationAndSearchRelevanceInput | CommentsOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model AnonymousUser
   */

  export type AggregateAnonymousUser = {
    _count: AnonymousUserCountAggregateOutputType | null
    _min: AnonymousUserMinAggregateOutputType | null
    _max: AnonymousUserMaxAggregateOutputType | null
  }

  export type AnonymousUserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    anonymousId: string | null
    fingerprint: string | null
    lastAccessed: Date | null
  }

  export type AnonymousUserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    anonymousId: string | null
    fingerprint: string | null
    lastAccessed: Date | null
  }

  export type AnonymousUserCountAggregateOutputType = {
    id: number
    createdAt: number
    anonymousId: number
    fingerprint: number
    lastAccessed: number
    _all: number
  }


  export type AnonymousUserMinAggregateInputType = {
    id?: true
    createdAt?: true
    anonymousId?: true
    fingerprint?: true
    lastAccessed?: true
  }

  export type AnonymousUserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    anonymousId?: true
    fingerprint?: true
    lastAccessed?: true
  }

  export type AnonymousUserCountAggregateInputType = {
    id?: true
    createdAt?: true
    anonymousId?: true
    fingerprint?: true
    lastAccessed?: true
    _all?: true
  }

  export type AnonymousUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnonymousUser to aggregate.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?: AnonymousUserOrderByWithRelationAndSearchRelevanceInput | AnonymousUserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnonymousUsers
    **/
    _count?: true | AnonymousUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnonymousUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnonymousUserMaxAggregateInputType
  }

  export type GetAnonymousUserAggregateType<T extends AnonymousUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAnonymousUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnonymousUser[P]>
      : GetScalarType<T[P], AggregateAnonymousUser[P]>
  }




  export type AnonymousUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnonymousUserWhereInput
    orderBy?: AnonymousUserOrderByWithAggregationInput | AnonymousUserOrderByWithAggregationInput[]
    by: AnonymousUserScalarFieldEnum[] | AnonymousUserScalarFieldEnum
    having?: AnonymousUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnonymousUserCountAggregateInputType | true
    _min?: AnonymousUserMinAggregateInputType
    _max?: AnonymousUserMaxAggregateInputType
  }

  export type AnonymousUserGroupByOutputType = {
    id: string
    createdAt: Date
    anonymousId: string
    fingerprint: string
    lastAccessed: Date | null
    _count: AnonymousUserCountAggregateOutputType | null
    _min: AnonymousUserMinAggregateOutputType | null
    _max: AnonymousUserMaxAggregateOutputType | null
  }

  type GetAnonymousUserGroupByPayload<T extends AnonymousUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnonymousUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnonymousUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnonymousUserGroupByOutputType[P]>
            : GetScalarType<T[P], AnonymousUserGroupByOutputType[P]>
        }
      >
    >


  export type AnonymousUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    anonymousId?: boolean
    fingerprint?: boolean
    lastAccessed?: boolean
  }, ExtArgs["result"]["anonymousUser"]>

  export type AnonymousUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    anonymousId?: boolean
    fingerprint?: boolean
    lastAccessed?: boolean
  }, ExtArgs["result"]["anonymousUser"]>

  export type AnonymousUserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    anonymousId?: boolean
    fingerprint?: boolean
    lastAccessed?: boolean
  }


  export type $AnonymousUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnonymousUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      anonymousId: string
      fingerprint: string
      lastAccessed: Date | null
    }, ExtArgs["result"]["anonymousUser"]>
    composites: {}
  }

  type AnonymousUserGetPayload<S extends boolean | null | undefined | AnonymousUserDefaultArgs> = $Result.GetResult<Prisma.$AnonymousUserPayload, S>

  type AnonymousUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnonymousUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnonymousUserCountAggregateInputType | true
    }

  export interface AnonymousUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnonymousUser'], meta: { name: 'AnonymousUser' } }
    /**
     * Find zero or one AnonymousUser that matches the filter.
     * @param {AnonymousUserFindUniqueArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnonymousUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserFindUniqueArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AnonymousUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnonymousUserFindUniqueOrThrowArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnonymousUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AnonymousUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindFirstArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnonymousUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserFindFirstArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AnonymousUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindFirstOrThrowArgs} args - Arguments to find a AnonymousUser
     * @example
     * // Get one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnonymousUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AnonymousUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnonymousUsers
     * const anonymousUsers = await prisma.anonymousUser.findMany()
     * 
     * // Get first 10 AnonymousUsers
     * const anonymousUsers = await prisma.anonymousUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anonymousUserWithIdOnly = await prisma.anonymousUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnonymousUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AnonymousUser.
     * @param {AnonymousUserCreateArgs} args - Arguments to create a AnonymousUser.
     * @example
     * // Create one AnonymousUser
     * const AnonymousUser = await prisma.anonymousUser.create({
     *   data: {
     *     // ... data to create a AnonymousUser
     *   }
     * })
     * 
    **/
    create<T extends AnonymousUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserCreateArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AnonymousUsers.
     * @param {AnonymousUserCreateManyArgs} args - Arguments to create many AnonymousUsers.
     * @example
     * // Create many AnonymousUsers
     * const anonymousUser = await prisma.anonymousUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AnonymousUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnonymousUsers and returns the data saved in the database.
     * @param {AnonymousUserCreateManyAndReturnArgs} args - Arguments to create many AnonymousUsers.
     * @example
     * // Create many AnonymousUsers
     * const anonymousUser = await prisma.anonymousUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnonymousUsers and only return the `id`
     * const anonymousUserWithIdOnly = await prisma.anonymousUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AnonymousUserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a AnonymousUser.
     * @param {AnonymousUserDeleteArgs} args - Arguments to delete one AnonymousUser.
     * @example
     * // Delete one AnonymousUser
     * const AnonymousUser = await prisma.anonymousUser.delete({
     *   where: {
     *     // ... filter to delete one AnonymousUser
     *   }
     * })
     * 
    **/
    delete<T extends AnonymousUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserDeleteArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AnonymousUser.
     * @param {AnonymousUserUpdateArgs} args - Arguments to update one AnonymousUser.
     * @example
     * // Update one AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnonymousUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserUpdateArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AnonymousUsers.
     * @param {AnonymousUserDeleteManyArgs} args - Arguments to filter AnonymousUsers to delete.
     * @example
     * // Delete a few AnonymousUsers
     * const { count } = await prisma.anonymousUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnonymousUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnonymousUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnonymousUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnonymousUsers
     * const anonymousUser = await prisma.anonymousUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnonymousUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnonymousUser.
     * @param {AnonymousUserUpsertArgs} args - Arguments to update or create a AnonymousUser.
     * @example
     * // Update or create a AnonymousUser
     * const anonymousUser = await prisma.anonymousUser.upsert({
     *   create: {
     *     // ... data to create a AnonymousUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnonymousUser we want to update
     *   }
     * })
    **/
    upsert<T extends AnonymousUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnonymousUserUpsertArgs<ExtArgs>>
    ): Prisma__AnonymousUserClient<$Result.GetResult<Prisma.$AnonymousUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AnonymousUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserCountArgs} args - Arguments to filter AnonymousUsers to count.
     * @example
     * // Count the number of AnonymousUsers
     * const count = await prisma.anonymousUser.count({
     *   where: {
     *     // ... the filter for the AnonymousUsers we want to count
     *   }
     * })
    **/
    count<T extends AnonymousUserCountArgs>(
      args?: Subset<T, AnonymousUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnonymousUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnonymousUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnonymousUserAggregateArgs>(args: Subset<T, AnonymousUserAggregateArgs>): Prisma.PrismaPromise<GetAnonymousUserAggregateType<T>>

    /**
     * Group by AnonymousUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnonymousUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnonymousUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnonymousUserGroupByArgs['orderBy'] }
        : { orderBy?: AnonymousUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnonymousUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnonymousUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnonymousUser model
   */
  readonly fields: AnonymousUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnonymousUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnonymousUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AnonymousUser model
   */ 
  interface AnonymousUserFieldRefs {
    readonly id: FieldRef<"AnonymousUser", 'String'>
    readonly createdAt: FieldRef<"AnonymousUser", 'DateTime'>
    readonly anonymousId: FieldRef<"AnonymousUser", 'String'>
    readonly fingerprint: FieldRef<"AnonymousUser", 'String'>
    readonly lastAccessed: FieldRef<"AnonymousUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnonymousUser findUnique
   */
  export type AnonymousUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser findUniqueOrThrow
   */
  export type AnonymousUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser findFirst
   */
  export type AnonymousUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?: AnonymousUserOrderByWithRelationAndSearchRelevanceInput | AnonymousUserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnonymousUsers.
     */
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser findFirstOrThrow
   */
  export type AnonymousUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUser to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?: AnonymousUserOrderByWithRelationAndSearchRelevanceInput | AnonymousUserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnonymousUsers.
     */
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser findMany
   */
  export type AnonymousUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter, which AnonymousUsers to fetch.
     */
    where?: AnonymousUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnonymousUsers to fetch.
     */
    orderBy?: AnonymousUserOrderByWithRelationAndSearchRelevanceInput | AnonymousUserOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnonymousUsers.
     */
    cursor?: AnonymousUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnonymousUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnonymousUsers.
     */
    skip?: number
    distinct?: AnonymousUserScalarFieldEnum | AnonymousUserScalarFieldEnum[]
  }

  /**
   * AnonymousUser create
   */
  export type AnonymousUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * The data needed to create a AnonymousUser.
     */
    data: XOR<AnonymousUserCreateInput, AnonymousUserUncheckedCreateInput>
  }

  /**
   * AnonymousUser createMany
   */
  export type AnonymousUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnonymousUsers.
     */
    data: AnonymousUserCreateManyInput | AnonymousUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnonymousUser createManyAndReturn
   */
  export type AnonymousUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnonymousUsers.
     */
    data: AnonymousUserCreateManyInput | AnonymousUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnonymousUser update
   */
  export type AnonymousUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * The data needed to update a AnonymousUser.
     */
    data: XOR<AnonymousUserUpdateInput, AnonymousUserUncheckedUpdateInput>
    /**
     * Choose, which AnonymousUser to update.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser updateMany
   */
  export type AnonymousUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnonymousUsers.
     */
    data: XOR<AnonymousUserUpdateManyMutationInput, AnonymousUserUncheckedUpdateManyInput>
    /**
     * Filter which AnonymousUsers to update
     */
    where?: AnonymousUserWhereInput
  }

  /**
   * AnonymousUser upsert
   */
  export type AnonymousUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * The filter to search for the AnonymousUser to update in case it exists.
     */
    where: AnonymousUserWhereUniqueInput
    /**
     * In case the AnonymousUser found by the `where` argument doesn't exist, create a new AnonymousUser with this data.
     */
    create: XOR<AnonymousUserCreateInput, AnonymousUserUncheckedCreateInput>
    /**
     * In case the AnonymousUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnonymousUserUpdateInput, AnonymousUserUncheckedUpdateInput>
  }

  /**
   * AnonymousUser delete
   */
  export type AnonymousUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
    /**
     * Filter which AnonymousUser to delete.
     */
    where: AnonymousUserWhereUniqueInput
  }

  /**
   * AnonymousUser deleteMany
   */
  export type AnonymousUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnonymousUsers to delete
     */
    where?: AnonymousUserWhereInput
  }

  /**
   * AnonymousUser without action
   */
  export type AnonymousUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnonymousUser
     */
    select?: AnonymousUserSelect<ExtArgs> | null
  }


  /**
   * Model Budget
   */

  export type AggregateBudget = {
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  export type BudgetAvgAggregateOutputType = {
    balance: Decimal | null
    currentCost: Decimal | null
  }

  export type BudgetSumAggregateOutputType = {
    balance: Decimal | null
    currentCost: Decimal | null
  }

  export type BudgetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: Decimal | null
    currentCost: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balance: Decimal | null
    currentCost: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BudgetCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    currentCost: number
    modelCost: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BudgetAvgAggregateInputType = {
    balance?: true
    currentCost?: true
  }

  export type BudgetSumAggregateInputType = {
    balance?: true
    currentCost?: true
  }

  export type BudgetMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currentCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currentCost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BudgetCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currentCost?: true
    modelCost?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budget to aggregate.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationAndSearchRelevanceInput | BudgetOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Budgets
    **/
    _count?: true | BudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BudgetMaxAggregateInputType
  }

  export type GetBudgetAggregateType<T extends BudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBudget[P]>
      : GetScalarType<T[P], AggregateBudget[P]>
  }




  export type BudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BudgetWhereInput
    orderBy?: BudgetOrderByWithAggregationInput | BudgetOrderByWithAggregationInput[]
    by: BudgetScalarFieldEnum[] | BudgetScalarFieldEnum
    having?: BudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BudgetCountAggregateInputType | true
    _avg?: BudgetAvgAggregateInputType
    _sum?: BudgetSumAggregateInputType
    _min?: BudgetMinAggregateInputType
    _max?: BudgetMaxAggregateInputType
  }

  export type BudgetGroupByOutputType = {
    id: string
    userId: string
    balance: Decimal
    currentCost: Decimal | null
    modelCost: JsonValue | null
    createdAt: Date
    updatedAt: Date | null
    _count: BudgetCountAggregateOutputType | null
    _avg: BudgetAvgAggregateOutputType | null
    _sum: BudgetSumAggregateOutputType | null
    _min: BudgetMinAggregateOutputType | null
    _max: BudgetMaxAggregateOutputType | null
  }

  type GetBudgetGroupByPayload<T extends BudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BudgetGroupByOutputType[P]>
            : GetScalarType<T[P], BudgetGroupByOutputType[P]>
        }
      >
    >


  export type BudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currentCost?: boolean
    modelCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currentCost?: boolean
    modelCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["budget"]>

  export type BudgetSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    currentCost?: boolean
    modelCost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Budget"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      balance: Prisma.Decimal
      currentCost: Prisma.Decimal | null
      modelCost: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["budget"]>
    composites: {}
  }

  type BudgetGetPayload<S extends boolean | null | undefined | BudgetDefaultArgs> = $Result.GetResult<Prisma.$BudgetPayload, S>

  type BudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BudgetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BudgetCountAggregateInputType | true
    }

  export interface BudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Budget'], meta: { name: 'Budget' } }
    /**
     * Find zero or one Budget that matches the filter.
     * @param {BudgetFindUniqueArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BudgetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetFindUniqueArgs<ExtArgs>>
    ): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Budget that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BudgetFindUniqueOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BudgetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Budget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BudgetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetFindFirstArgs<ExtArgs>>
    ): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Budget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindFirstOrThrowArgs} args - Arguments to find a Budget
     * @example
     * // Get one Budget
     * const budget = await prisma.budget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BudgetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Budgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Budgets
     * const budgets = await prisma.budget.findMany()
     * 
     * // Get first 10 Budgets
     * const budgets = await prisma.budget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const budgetWithIdOnly = await prisma.budget.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BudgetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Budget.
     * @param {BudgetCreateArgs} args - Arguments to create a Budget.
     * @example
     * // Create one Budget
     * const Budget = await prisma.budget.create({
     *   data: {
     *     // ... data to create a Budget
     *   }
     * })
     * 
    **/
    create<T extends BudgetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetCreateArgs<ExtArgs>>
    ): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Budgets.
     * @param {BudgetCreateManyArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends BudgetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Budgets and returns the data saved in the database.
     * @param {BudgetCreateManyAndReturnArgs} args - Arguments to create many Budgets.
     * @example
     * // Create many Budgets
     * const budget = await prisma.budget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Budgets and only return the `id`
     * const budgetWithIdOnly = await prisma.budget.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends BudgetCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Budget.
     * @param {BudgetDeleteArgs} args - Arguments to delete one Budget.
     * @example
     * // Delete one Budget
     * const Budget = await prisma.budget.delete({
     *   where: {
     *     // ... filter to delete one Budget
     *   }
     * })
     * 
    **/
    delete<T extends BudgetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetDeleteArgs<ExtArgs>>
    ): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Budget.
     * @param {BudgetUpdateArgs} args - Arguments to update one Budget.
     * @example
     * // Update one Budget
     * const budget = await prisma.budget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BudgetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetUpdateArgs<ExtArgs>>
    ): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Budgets.
     * @param {BudgetDeleteManyArgs} args - Arguments to filter Budgets to delete.
     * @example
     * // Delete a few Budgets
     * const { count } = await prisma.budget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BudgetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BudgetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Budgets
     * const budget = await prisma.budget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BudgetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Budget.
     * @param {BudgetUpsertArgs} args - Arguments to update or create a Budget.
     * @example
     * // Update or create a Budget
     * const budget = await prisma.budget.upsert({
     *   create: {
     *     // ... data to create a Budget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Budget we want to update
     *   }
     * })
    **/
    upsert<T extends BudgetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BudgetUpsertArgs<ExtArgs>>
    ): Prisma__BudgetClient<$Result.GetResult<Prisma.$BudgetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Budgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetCountArgs} args - Arguments to filter Budgets to count.
     * @example
     * // Count the number of Budgets
     * const count = await prisma.budget.count({
     *   where: {
     *     // ... the filter for the Budgets we want to count
     *   }
     * })
    **/
    count<T extends BudgetCountArgs>(
      args?: Subset<T, BudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BudgetAggregateArgs>(args: Subset<T, BudgetAggregateArgs>): Prisma.PrismaPromise<GetBudgetAggregateType<T>>

    /**
     * Group by Budget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BudgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BudgetGroupByArgs['orderBy'] }
        : { orderBy?: BudgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Budget model
   */
  readonly fields: BudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Budget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Budget model
   */ 
  interface BudgetFieldRefs {
    readonly id: FieldRef<"Budget", 'String'>
    readonly userId: FieldRef<"Budget", 'String'>
    readonly balance: FieldRef<"Budget", 'Decimal'>
    readonly currentCost: FieldRef<"Budget", 'Decimal'>
    readonly modelCost: FieldRef<"Budget", 'Json'>
    readonly createdAt: FieldRef<"Budget", 'DateTime'>
    readonly updatedAt: FieldRef<"Budget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Budget findUnique
   */
  export type BudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findUniqueOrThrow
   */
  export type BudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget findFirst
   */
  export type BudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationAndSearchRelevanceInput | BudgetOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findFirstOrThrow
   */
  export type BudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budget to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationAndSearchRelevanceInput | BudgetOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Budgets.
     */
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget findMany
   */
  export type BudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter, which Budgets to fetch.
     */
    where?: BudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Budgets to fetch.
     */
    orderBy?: BudgetOrderByWithRelationAndSearchRelevanceInput | BudgetOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Budgets.
     */
    cursor?: BudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Budgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Budgets.
     */
    skip?: number
    distinct?: BudgetScalarFieldEnum | BudgetScalarFieldEnum[]
  }

  /**
   * Budget create
   */
  export type BudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * The data needed to create a Budget.
     */
    data: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
  }

  /**
   * Budget createMany
   */
  export type BudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget createManyAndReturn
   */
  export type BudgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Budgets.
     */
    data: BudgetCreateManyInput | BudgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Budget update
   */
  export type BudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * The data needed to update a Budget.
     */
    data: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
    /**
     * Choose, which Budget to update.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget updateMany
   */
  export type BudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Budgets.
     */
    data: XOR<BudgetUpdateManyMutationInput, BudgetUncheckedUpdateManyInput>
    /**
     * Filter which Budgets to update
     */
    where?: BudgetWhereInput
  }

  /**
   * Budget upsert
   */
  export type BudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * The filter to search for the Budget to update in case it exists.
     */
    where: BudgetWhereUniqueInput
    /**
     * In case the Budget found by the `where` argument doesn't exist, create a new Budget with this data.
     */
    create: XOR<BudgetCreateInput, BudgetUncheckedCreateInput>
    /**
     * In case the Budget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BudgetUpdateInput, BudgetUncheckedUpdateInput>
  }

  /**
   * Budget delete
   */
  export type BudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
    /**
     * Filter which Budget to delete.
     */
    where: BudgetWhereUniqueInput
  }

  /**
   * Budget deleteMany
   */
  export type BudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Budgets to delete
     */
    where?: BudgetWhereInput
  }

  /**
   * Budget without action
   */
  export type BudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Budget
     */
    select?: BudgetSelect<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PromotionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    type: $Enums.PromotionType | null
    amount: Decimal | null
    description: string | null
    validFrom: Date | null
    validUntil: Date | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    type: $Enums.PromotionType | null
    amount: Decimal | null
    description: string | null
    validFrom: Date | null
    validUntil: Date | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    type: number
    amount: number
    description: number
    validFrom: number
    validUntil: number
    isUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    amount?: true
  }

  export type PromotionSumAggregateInputType = {
    amount?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    validFrom?: true
    validUntil?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    validFrom?: true
    validUntil?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    type?: true
    amount?: true
    description?: true
    validFrom?: true
    validUntil?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationAndSearchRelevanceInput | PromotionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    name: string
    userId: string
    type: $Enums.PromotionType
    amount: Decimal
    description: string | null
    validFrom: Date
    validUntil: Date
    isUsed: boolean
    createdAt: Date
    updatedAt: Date | null
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    validFrom?: boolean
    validUntil?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    validFrom?: boolean
    validUntil?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    validFrom?: boolean
    validUntil?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      type: $Enums.PromotionType
      amount: Prisma.Decimal
      description: string | null
      validFrom: Date
      validUntil: Date
      isUsed: boolean
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromotionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromotionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PromotionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
    **/
    create<T extends PromotionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PromotionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
    **/
    delete<T extends PromotionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromotionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromotionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromotionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
    **/
    upsert<T extends PromotionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>
    ): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Promotion model
   */ 
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly name: FieldRef<"Promotion", 'String'>
    readonly userId: FieldRef<"Promotion", 'String'>
    readonly type: FieldRef<"Promotion", 'PromotionType'>
    readonly amount: FieldRef<"Promotion", 'Decimal'>
    readonly description: FieldRef<"Promotion", 'String'>
    readonly validFrom: FieldRef<"Promotion", 'DateTime'>
    readonly validUntil: FieldRef<"Promotion", 'DateTime'>
    readonly isUsed: FieldRef<"Promotion", 'Boolean'>
    readonly createdAt: FieldRef<"Promotion", 'DateTime'>
    readonly updatedAt: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationAndSearchRelevanceInput | PromotionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationAndSearchRelevanceInput | PromotionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationAndSearchRelevanceInput | PromotionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
  }


  /**
   * Model PromotionCode
   */

  export type AggregatePromotionCode = {
    _count: PromotionCodeCountAggregateOutputType | null
    _min: PromotionCodeMinAggregateOutputType | null
    _max: PromotionCodeMaxAggregateOutputType | null
  }

  export type PromotionCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    description: string | null
    couponId: string | null
    userId: string | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    description: string | null
    couponId: string | null
    userId: string | null
    isUsed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromotionCodeCountAggregateOutputType = {
    id: number
    code: number
    description: number
    couponId: number
    userId: number
    isUsed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromotionCodeMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    couponId?: true
    userId?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionCodeMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    couponId?: true
    userId?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromotionCodeCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    couponId?: true
    userId?: true
    isUsed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromotionCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromotionCode to aggregate.
     */
    where?: PromotionCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionCodes to fetch.
     */
    orderBy?: PromotionCodeOrderByWithRelationAndSearchRelevanceInput | PromotionCodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromotionCodes
    **/
    _count?: true | PromotionCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionCodeMaxAggregateInputType
  }

  export type GetPromotionCodeAggregateType<T extends PromotionCodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotionCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotionCode[P]>
      : GetScalarType<T[P], AggregatePromotionCode[P]>
  }




  export type PromotionCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionCodeWhereInput
    orderBy?: PromotionCodeOrderByWithAggregationInput | PromotionCodeOrderByWithAggregationInput[]
    by: PromotionCodeScalarFieldEnum[] | PromotionCodeScalarFieldEnum
    having?: PromotionCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCodeCountAggregateInputType | true
    _min?: PromotionCodeMinAggregateInputType
    _max?: PromotionCodeMaxAggregateInputType
  }

  export type PromotionCodeGroupByOutputType = {
    id: string
    code: string
    description: string | null
    couponId: string
    userId: string
    isUsed: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromotionCodeCountAggregateOutputType | null
    _min: PromotionCodeMinAggregateOutputType | null
    _max: PromotionCodeMaxAggregateOutputType | null
  }

  type GetPromotionCodeGroupByPayload<T extends PromotionCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionCodeGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionCodeGroupByOutputType[P]>
        }
      >
    >


  export type PromotionCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    couponId?: boolean
    userId?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotionCode"]>

  export type PromotionCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    couponId?: boolean
    userId?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promotionCode"]>

  export type PromotionCodeSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    couponId?: boolean
    userId?: boolean
    isUsed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PromotionCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromotionCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      description: string | null
      couponId: string
      userId: string
      isUsed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promotionCode"]>
    composites: {}
  }

  type PromotionCodeGetPayload<S extends boolean | null | undefined | PromotionCodeDefaultArgs> = $Result.GetResult<Prisma.$PromotionCodePayload, S>

  type PromotionCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotionCodeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotionCodeCountAggregateInputType | true
    }

  export interface PromotionCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromotionCode'], meta: { name: 'PromotionCode' } }
    /**
     * Find zero or one PromotionCode that matches the filter.
     * @param {PromotionCodeFindUniqueArgs} args - Arguments to find a PromotionCode
     * @example
     * // Get one PromotionCode
     * const promotionCode = await prisma.promotionCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PromotionCodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCodeFindUniqueArgs<ExtArgs>>
    ): Prisma__PromotionCodeClient<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PromotionCode that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotionCodeFindUniqueOrThrowArgs} args - Arguments to find a PromotionCode
     * @example
     * // Get one PromotionCode
     * const promotionCode = await prisma.promotionCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PromotionCodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PromotionCodeClient<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PromotionCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCodeFindFirstArgs} args - Arguments to find a PromotionCode
     * @example
     * // Get one PromotionCode
     * const promotionCode = await prisma.promotionCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PromotionCodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCodeFindFirstArgs<ExtArgs>>
    ): Prisma__PromotionCodeClient<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PromotionCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCodeFindFirstOrThrowArgs} args - Arguments to find a PromotionCode
     * @example
     * // Get one PromotionCode
     * const promotionCode = await prisma.promotionCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PromotionCodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PromotionCodeClient<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PromotionCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromotionCodes
     * const promotionCodes = await prisma.promotionCode.findMany()
     * 
     * // Get first 10 PromotionCodes
     * const promotionCodes = await prisma.promotionCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionCodeWithIdOnly = await prisma.promotionCode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PromotionCodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PromotionCode.
     * @param {PromotionCodeCreateArgs} args - Arguments to create a PromotionCode.
     * @example
     * // Create one PromotionCode
     * const PromotionCode = await prisma.promotionCode.create({
     *   data: {
     *     // ... data to create a PromotionCode
     *   }
     * })
     * 
    **/
    create<T extends PromotionCodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCodeCreateArgs<ExtArgs>>
    ): Prisma__PromotionCodeClient<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PromotionCodes.
     * @param {PromotionCodeCreateManyArgs} args - Arguments to create many PromotionCodes.
     * @example
     * // Create many PromotionCodes
     * const promotionCode = await prisma.promotionCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends PromotionCodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromotionCodes and returns the data saved in the database.
     * @param {PromotionCodeCreateManyAndReturnArgs} args - Arguments to create many PromotionCodes.
     * @example
     * // Create many PromotionCodes
     * const promotionCode = await prisma.promotionCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromotionCodes and only return the `id`
     * const promotionCodeWithIdOnly = await prisma.promotionCode.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends PromotionCodeCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCodeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a PromotionCode.
     * @param {PromotionCodeDeleteArgs} args - Arguments to delete one PromotionCode.
     * @example
     * // Delete one PromotionCode
     * const PromotionCode = await prisma.promotionCode.delete({
     *   where: {
     *     // ... filter to delete one PromotionCode
     *   }
     * })
     * 
    **/
    delete<T extends PromotionCodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCodeDeleteArgs<ExtArgs>>
    ): Prisma__PromotionCodeClient<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PromotionCode.
     * @param {PromotionCodeUpdateArgs} args - Arguments to update one PromotionCode.
     * @example
     * // Update one PromotionCode
     * const promotionCode = await prisma.promotionCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PromotionCodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCodeUpdateArgs<ExtArgs>>
    ): Prisma__PromotionCodeClient<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PromotionCodes.
     * @param {PromotionCodeDeleteManyArgs} args - Arguments to filter PromotionCodes to delete.
     * @example
     * // Delete a few PromotionCodes
     * const { count } = await prisma.promotionCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PromotionCodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PromotionCodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromotionCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromotionCodes
     * const promotionCode = await prisma.promotionCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PromotionCodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PromotionCode.
     * @param {PromotionCodeUpsertArgs} args - Arguments to update or create a PromotionCode.
     * @example
     * // Update or create a PromotionCode
     * const promotionCode = await prisma.promotionCode.upsert({
     *   create: {
     *     // ... data to create a PromotionCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromotionCode we want to update
     *   }
     * })
    **/
    upsert<T extends PromotionCodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PromotionCodeUpsertArgs<ExtArgs>>
    ): Prisma__PromotionCodeClient<$Result.GetResult<Prisma.$PromotionCodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PromotionCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCodeCountArgs} args - Arguments to filter PromotionCodes to count.
     * @example
     * // Count the number of PromotionCodes
     * const count = await prisma.promotionCode.count({
     *   where: {
     *     // ... the filter for the PromotionCodes we want to count
     *   }
     * })
    **/
    count<T extends PromotionCodeCountArgs>(
      args?: Subset<T, PromotionCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromotionCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionCodeAggregateArgs>(args: Subset<T, PromotionCodeAggregateArgs>): Prisma.PrismaPromise<GetPromotionCodeAggregateType<T>>

    /**
     * Group by PromotionCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionCodeGroupByArgs['orderBy'] }
        : { orderBy?: PromotionCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromotionCode model
   */
  readonly fields: PromotionCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromotionCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PromotionCode model
   */ 
  interface PromotionCodeFieldRefs {
    readonly id: FieldRef<"PromotionCode", 'String'>
    readonly code: FieldRef<"PromotionCode", 'String'>
    readonly description: FieldRef<"PromotionCode", 'String'>
    readonly couponId: FieldRef<"PromotionCode", 'String'>
    readonly userId: FieldRef<"PromotionCode", 'String'>
    readonly isUsed: FieldRef<"PromotionCode", 'Boolean'>
    readonly createdAt: FieldRef<"PromotionCode", 'DateTime'>
    readonly updatedAt: FieldRef<"PromotionCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromotionCode findUnique
   */
  export type PromotionCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * Filter, which PromotionCode to fetch.
     */
    where: PromotionCodeWhereUniqueInput
  }

  /**
   * PromotionCode findUniqueOrThrow
   */
  export type PromotionCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * Filter, which PromotionCode to fetch.
     */
    where: PromotionCodeWhereUniqueInput
  }

  /**
   * PromotionCode findFirst
   */
  export type PromotionCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * Filter, which PromotionCode to fetch.
     */
    where?: PromotionCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionCodes to fetch.
     */
    orderBy?: PromotionCodeOrderByWithRelationAndSearchRelevanceInput | PromotionCodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromotionCodes.
     */
    cursor?: PromotionCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionCodes.
     */
    distinct?: PromotionCodeScalarFieldEnum | PromotionCodeScalarFieldEnum[]
  }

  /**
   * PromotionCode findFirstOrThrow
   */
  export type PromotionCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * Filter, which PromotionCode to fetch.
     */
    where?: PromotionCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionCodes to fetch.
     */
    orderBy?: PromotionCodeOrderByWithRelationAndSearchRelevanceInput | PromotionCodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromotionCodes.
     */
    cursor?: PromotionCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromotionCodes.
     */
    distinct?: PromotionCodeScalarFieldEnum | PromotionCodeScalarFieldEnum[]
  }

  /**
   * PromotionCode findMany
   */
  export type PromotionCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * Filter, which PromotionCodes to fetch.
     */
    where?: PromotionCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromotionCodes to fetch.
     */
    orderBy?: PromotionCodeOrderByWithRelationAndSearchRelevanceInput | PromotionCodeOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromotionCodes.
     */
    cursor?: PromotionCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromotionCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromotionCodes.
     */
    skip?: number
    distinct?: PromotionCodeScalarFieldEnum | PromotionCodeScalarFieldEnum[]
  }

  /**
   * PromotionCode create
   */
  export type PromotionCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * The data needed to create a PromotionCode.
     */
    data: XOR<PromotionCodeCreateInput, PromotionCodeUncheckedCreateInput>
  }

  /**
   * PromotionCode createMany
   */
  export type PromotionCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromotionCodes.
     */
    data: PromotionCodeCreateManyInput | PromotionCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromotionCode createManyAndReturn
   */
  export type PromotionCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PromotionCodes.
     */
    data: PromotionCodeCreateManyInput | PromotionCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromotionCode update
   */
  export type PromotionCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * The data needed to update a PromotionCode.
     */
    data: XOR<PromotionCodeUpdateInput, PromotionCodeUncheckedUpdateInput>
    /**
     * Choose, which PromotionCode to update.
     */
    where: PromotionCodeWhereUniqueInput
  }

  /**
   * PromotionCode updateMany
   */
  export type PromotionCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromotionCodes.
     */
    data: XOR<PromotionCodeUpdateManyMutationInput, PromotionCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromotionCodes to update
     */
    where?: PromotionCodeWhereInput
  }

  /**
   * PromotionCode upsert
   */
  export type PromotionCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * The filter to search for the PromotionCode to update in case it exists.
     */
    where: PromotionCodeWhereUniqueInput
    /**
     * In case the PromotionCode found by the `where` argument doesn't exist, create a new PromotionCode with this data.
     */
    create: XOR<PromotionCodeCreateInput, PromotionCodeUncheckedCreateInput>
    /**
     * In case the PromotionCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionCodeUpdateInput, PromotionCodeUncheckedUpdateInput>
  }

  /**
   * PromotionCode delete
   */
  export type PromotionCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
    /**
     * Filter which PromotionCode to delete.
     */
    where: PromotionCodeWhereUniqueInput
  }

  /**
   * PromotionCode deleteMany
   */
  export type PromotionCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromotionCodes to delete
     */
    where?: PromotionCodeWhereInput
  }

  /**
   * PromotionCode without action
   */
  export type PromotionCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCode
     */
    select?: PromotionCodeSelect<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    cost: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    cost: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    agentId: string | null
    cost: Decimal | null
    success: boolean | null
    source: $Enums.TransactionSource | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    agentId: string | null
    cost: Decimal | null
    success: boolean | null
    source: $Enums.TransactionSource | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    agentId: number
    cost: number
    success: number
    source: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    cost?: true
  }

  export type TransactionSumAggregateInputType = {
    cost?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    agentId?: true
    cost?: true
    success?: true
    source?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    agentId?: true
    cost?: true
    success?: true
    source?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    agentId?: true
    cost?: true
    success?: true
    source?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationAndSearchRelevanceInput | TransactionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    projectId: string | null
    agentId: string | null
    cost: Decimal
    success: boolean
    source: $Enums.TransactionSource
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    agentId?: boolean
    cost?: boolean
    success?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    agentId?: boolean
    cost?: boolean
    success?: boolean
    source?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
    agentId?: boolean
    cost?: boolean
    success?: boolean
    source?: boolean
    createdAt?: boolean
  }


  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      projectId: string | null
      agentId: string | null
      cost: Prisma.Decimal
      success: boolean
      source: $Enums.TransactionSource
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly projectId: FieldRef<"Transaction", 'String'>
    readonly agentId: FieldRef<"Transaction", 'String'>
    readonly cost: FieldRef<"Transaction", 'Decimal'>
    readonly success: FieldRef<"Transaction", 'Boolean'>
    readonly source: FieldRef<"Transaction", 'TransactionSource'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationAndSearchRelevanceInput | TransactionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationAndSearchRelevanceInput | TransactionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationAndSearchRelevanceInput | TransactionOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
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

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
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

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateVersionScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    version: 'version',
    spells: 'spells',
    metadata: 'metadata',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateVersionScalarFieldEnum = (typeof TemplateVersionScalarFieldEnum)[keyof typeof TemplateVersionScalarFieldEnum]


  export const TemplateCollectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    templates: 'templates',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    templateId: 'templateId'
  };

  export type TemplateCollectionScalarFieldEnum = (typeof TemplateCollectionScalarFieldEnum)[keyof typeof TemplateCollectionScalarFieldEnum]


  export const TemplateRatingScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    userId: 'userId',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateRatingScalarFieldEnum = (typeof TemplateRatingScalarFieldEnum)[keyof typeof TemplateRatingScalarFieldEnum]


  export const PublicAgentScalarFieldEnum: {
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

  export type PublicAgentScalarFieldEnum = (typeof PublicAgentScalarFieldEnum)[keyof typeof PublicAgentScalarFieldEnum]


  export const ReportsScalarFieldEnum: {
    id: 'id',
    publicAgentId: 'publicAgentId',
    createdAt: 'createdAt',
    message: 'message'
  };

  export type ReportsScalarFieldEnum = (typeof ReportsScalarFieldEnum)[keyof typeof ReportsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    publicAgentId: 'publicAgentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    publicAgentId: 'publicAgentId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const AnonymousUserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    anonymousId: 'anonymousId',
    fingerprint: 'fingerprint',
    lastAccessed: 'lastAccessed'
  };

  export type AnonymousUserScalarFieldEnum = (typeof AnonymousUserScalarFieldEnum)[keyof typeof AnonymousUserScalarFieldEnum]


  export const BudgetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance',
    currentCost: 'currentCost',
    modelCost: 'modelCost',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BudgetScalarFieldEnum = (typeof BudgetScalarFieldEnum)[keyof typeof BudgetScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
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

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const PromotionCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    couponId: 'couponId',
    userId: 'userId',
    isUsed: 'isUsed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromotionCodeScalarFieldEnum = (typeof PromotionCodeScalarFieldEnum)[keyof typeof PromotionCodeScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    agentId: 'agentId',
    cost: 'cost',
    success: 'success',
    source: 'source',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProjectOrderByRelevanceFieldEnum: {
    id: 'id',
    owner: 'owner',
    name: 'name',
    description: 'description',
    image: 'image'
  };

  export type ProjectOrderByRelevanceFieldEnum = (typeof ProjectOrderByRelevanceFieldEnum)[keyof typeof ProjectOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const TemplateOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    spells: 'spells',
    userId: 'userId',
    ogAgentId: 'ogAgentId'
  };

  export type TemplateOrderByRelevanceFieldEnum = (typeof TemplateOrderByRelevanceFieldEnum)[keyof typeof TemplateOrderByRelevanceFieldEnum]


  export const TemplateVersionOrderByRelevanceFieldEnum: {
    id: 'id',
    templateId: 'templateId'
  };

  export type TemplateVersionOrderByRelevanceFieldEnum = (typeof TemplateVersionOrderByRelevanceFieldEnum)[keyof typeof TemplateVersionOrderByRelevanceFieldEnum]


  export const TemplateCollectionOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    templateId: 'templateId'
  };

  export type TemplateCollectionOrderByRelevanceFieldEnum = (typeof TemplateCollectionOrderByRelevanceFieldEnum)[keyof typeof TemplateCollectionOrderByRelevanceFieldEnum]


  export const TemplateRatingOrderByRelevanceFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    userId: 'userId'
  };

  export type TemplateRatingOrderByRelevanceFieldEnum = (typeof TemplateRatingOrderByRelevanceFieldEnum)[keyof typeof TemplateRatingOrderByRelevanceFieldEnum]


  export const PublicAgentOrderByRelevanceFieldEnum: {
    id: 'id',
    agentId: 'agentId',
    userId: 'userId',
    description: 'description'
  };

  export type PublicAgentOrderByRelevanceFieldEnum = (typeof PublicAgentOrderByRelevanceFieldEnum)[keyof typeof PublicAgentOrderByRelevanceFieldEnum]


  export const ReportsOrderByRelevanceFieldEnum: {
    id: 'id',
    publicAgentId: 'publicAgentId',
    message: 'message'
  };

  export type ReportsOrderByRelevanceFieldEnum = (typeof ReportsOrderByRelevanceFieldEnum)[keyof typeof ReportsOrderByRelevanceFieldEnum]


  export const LikesOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    publicAgentId: 'publicAgentId'
  };

  export type LikesOrderByRelevanceFieldEnum = (typeof LikesOrderByRelevanceFieldEnum)[keyof typeof LikesOrderByRelevanceFieldEnum]


  export const CommentsOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    publicAgentId: 'publicAgentId',
    content: 'content'
  };

  export type CommentsOrderByRelevanceFieldEnum = (typeof CommentsOrderByRelevanceFieldEnum)[keyof typeof CommentsOrderByRelevanceFieldEnum]


  export const AnonymousUserOrderByRelevanceFieldEnum: {
    id: 'id',
    anonymousId: 'anonymousId',
    fingerprint: 'fingerprint'
  };

  export type AnonymousUserOrderByRelevanceFieldEnum = (typeof AnonymousUserOrderByRelevanceFieldEnum)[keyof typeof AnonymousUserOrderByRelevanceFieldEnum]


  export const BudgetOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type BudgetOrderByRelevanceFieldEnum = (typeof BudgetOrderByRelevanceFieldEnum)[keyof typeof BudgetOrderByRelevanceFieldEnum]


  export const PromotionOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    description: 'description'
  };

  export type PromotionOrderByRelevanceFieldEnum = (typeof PromotionOrderByRelevanceFieldEnum)[keyof typeof PromotionOrderByRelevanceFieldEnum]


  export const PromotionCodeOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    couponId: 'couponId',
    userId: 'userId'
  };

  export type PromotionCodeOrderByRelevanceFieldEnum = (typeof PromotionCodeOrderByRelevanceFieldEnum)[keyof typeof PromotionCodeOrderByRelevanceFieldEnum]


  export const TransactionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    agentId: 'agentId'
  };

  export type TransactionOrderByRelevanceFieldEnum = (typeof TransactionOrderByRelevanceFieldEnum)[keyof typeof TransactionOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'TemplateType'
   */
  export type EnumTemplateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateType'>
    


  /**
   * Reference to a field of type 'TemplateType[]'
   */
  export type ListEnumTemplateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'PromotionType'
   */
  export type EnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionType'>
    


  /**
   * Reference to a field of type 'PromotionType[]'
   */
  export type ListEnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionType[]'>
    


  /**
   * Reference to a field of type 'TransactionSource'
   */
  export type EnumTransactionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionSource'>
    


  /**
   * Reference to a field of type 'TransactionSource[]'
   */
  export type ListEnumTransactionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionSource[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    owner?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    image?: StringNullableFilter<"Project"> | string | null
    lastActive?: DateTimeNullableFilter<"Project"> | Date | string | null
  }

  export type ProjectOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    lastActive?: SortOrderInput | SortOrder
    _relevance?: ProjectOrderByRelevanceInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    owner?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    image?: StringNullableFilter<"Project"> | string | null
    lastActive?: DateTimeNullableFilter<"Project"> | Date | string | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    lastActive?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    owner?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"Project"> | string | null
    lastActive?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    description?: StringNullableFilter<"Template"> | string | null
    image?: StringNullableFilter<"Template"> | string | null
    graph?: JsonNullableFilter<"Template">
    createdAt?: DateTimeNullableFilter<"Template"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Template"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Template"> | Date | string | null
    spells?: StringNullableListFilter<"Template">
    type?: EnumTemplateTypeFilter<"Template"> | $Enums.TemplateType
    public?: BoolFilter<"Template"> | boolean
    userId?: StringNullableFilter<"Template"> | string | null
    usageCount?: IntFilter<"Template"> | number
    ogAgentId?: StringNullableFilter<"Template"> | string | null
    templateVersions?: TemplateVersionListRelationFilter
    templateCollections?: TemplateCollectionListRelationFilter
  }

  export type TemplateOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    graph?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    spells?: SortOrder
    type?: SortOrder
    public?: SortOrder
    userId?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    ogAgentId?: SortOrderInput | SortOrder
    templateVersions?: TemplateVersionOrderByRelationAggregateInput
    templateCollections?: TemplateCollectionOrderByRelationAggregateInput
    _relevance?: TemplateOrderByRelevanceInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    description?: StringNullableFilter<"Template"> | string | null
    image?: StringNullableFilter<"Template"> | string | null
    graph?: JsonNullableFilter<"Template">
    createdAt?: DateTimeNullableFilter<"Template"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Template"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Template"> | Date | string | null
    spells?: StringNullableListFilter<"Template">
    type?: EnumTemplateTypeFilter<"Template"> | $Enums.TemplateType
    public?: BoolFilter<"Template"> | boolean
    userId?: StringNullableFilter<"Template"> | string | null
    usageCount?: IntFilter<"Template"> | number
    ogAgentId?: StringNullableFilter<"Template"> | string | null
    templateVersions?: TemplateVersionListRelationFilter
    templateCollections?: TemplateCollectionListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    graph?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    spells?: SortOrder
    type?: SortOrder
    public?: SortOrder
    userId?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    ogAgentId?: SortOrderInput | SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    description?: StringNullableWithAggregatesFilter<"Template"> | string | null
    image?: StringNullableWithAggregatesFilter<"Template"> | string | null
    graph?: JsonNullableWithAggregatesFilter<"Template">
    createdAt?: DateTimeNullableWithAggregatesFilter<"Template"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Template"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Template"> | Date | string | null
    spells?: StringNullableListFilter<"Template">
    type?: EnumTemplateTypeWithAggregatesFilter<"Template"> | $Enums.TemplateType
    public?: BoolWithAggregatesFilter<"Template"> | boolean
    userId?: StringNullableWithAggregatesFilter<"Template"> | string | null
    usageCount?: IntWithAggregatesFilter<"Template"> | number
    ogAgentId?: StringNullableWithAggregatesFilter<"Template"> | string | null
  }

  export type TemplateVersionWhereInput = {
    AND?: TemplateVersionWhereInput | TemplateVersionWhereInput[]
    OR?: TemplateVersionWhereInput[]
    NOT?: TemplateVersionWhereInput | TemplateVersionWhereInput[]
    id?: StringFilter<"TemplateVersion"> | string
    templateId?: StringFilter<"TemplateVersion"> | string
    version?: IntFilter<"TemplateVersion"> | number
    spells?: JsonNullableListFilter<"TemplateVersion">
    metadata?: JsonNullableFilter<"TemplateVersion">
    createdAt?: DateTimeFilter<"TemplateVersion"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateVersion"> | Date | string
    Template?: XOR<TemplateRelationFilter, TemplateWhereInput>
  }

  export type TemplateVersionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    templateId?: SortOrder
    version?: SortOrder
    spells?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Template?: TemplateOrderByWithRelationAndSearchRelevanceInput
    _relevance?: TemplateVersionOrderByRelevanceInput
  }

  export type TemplateVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    templateId_version?: TemplateVersionTemplateIdVersionCompoundUniqueInput
    AND?: TemplateVersionWhereInput | TemplateVersionWhereInput[]
    OR?: TemplateVersionWhereInput[]
    NOT?: TemplateVersionWhereInput | TemplateVersionWhereInput[]
    templateId?: StringFilter<"TemplateVersion"> | string
    version?: IntFilter<"TemplateVersion"> | number
    spells?: JsonNullableListFilter<"TemplateVersion">
    metadata?: JsonNullableFilter<"TemplateVersion">
    createdAt?: DateTimeFilter<"TemplateVersion"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateVersion"> | Date | string
    Template?: XOR<TemplateRelationFilter, TemplateWhereInput>
  }, "id" | "templateId_version">

  export type TemplateVersionOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    version?: SortOrder
    spells?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateVersionCountOrderByAggregateInput
    _avg?: TemplateVersionAvgOrderByAggregateInput
    _max?: TemplateVersionMaxOrderByAggregateInput
    _min?: TemplateVersionMinOrderByAggregateInput
    _sum?: TemplateVersionSumOrderByAggregateInput
  }

  export type TemplateVersionScalarWhereWithAggregatesInput = {
    AND?: TemplateVersionScalarWhereWithAggregatesInput | TemplateVersionScalarWhereWithAggregatesInput[]
    OR?: TemplateVersionScalarWhereWithAggregatesInput[]
    NOT?: TemplateVersionScalarWhereWithAggregatesInput | TemplateVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateVersion"> | string
    templateId?: StringWithAggregatesFilter<"TemplateVersion"> | string
    version?: IntWithAggregatesFilter<"TemplateVersion"> | number
    spells?: JsonNullableListFilter<"TemplateVersion">
    metadata?: JsonNullableWithAggregatesFilter<"TemplateVersion">
    createdAt?: DateTimeWithAggregatesFilter<"TemplateVersion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateVersion"> | Date | string
  }

  export type TemplateCollectionWhereInput = {
    AND?: TemplateCollectionWhereInput | TemplateCollectionWhereInput[]
    OR?: TemplateCollectionWhereInput[]
    NOT?: TemplateCollectionWhereInput | TemplateCollectionWhereInput[]
    id?: StringFilter<"TemplateCollection"> | string
    name?: StringFilter<"TemplateCollection"> | string
    description?: StringNullableFilter<"TemplateCollection"> | string | null
    templates?: JsonFilter<"TemplateCollection">
    createdAt?: DateTimeFilter<"TemplateCollection"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateCollection"> | Date | string
    templateId?: StringNullableFilter<"TemplateCollection"> | string | null
    Template?: XOR<TemplateNullableRelationFilter, TemplateWhereInput> | null
  }

  export type TemplateCollectionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    templates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrderInput | SortOrder
    Template?: TemplateOrderByWithRelationAndSearchRelevanceInput
    _relevance?: TemplateCollectionOrderByRelevanceInput
  }

  export type TemplateCollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateCollectionWhereInput | TemplateCollectionWhereInput[]
    OR?: TemplateCollectionWhereInput[]
    NOT?: TemplateCollectionWhereInput | TemplateCollectionWhereInput[]
    name?: StringFilter<"TemplateCollection"> | string
    description?: StringNullableFilter<"TemplateCollection"> | string | null
    templates?: JsonFilter<"TemplateCollection">
    createdAt?: DateTimeFilter<"TemplateCollection"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateCollection"> | Date | string
    templateId?: StringNullableFilter<"TemplateCollection"> | string | null
    Template?: XOR<TemplateNullableRelationFilter, TemplateWhereInput> | null
  }, "id">

  export type TemplateCollectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    templates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrderInput | SortOrder
    _count?: TemplateCollectionCountOrderByAggregateInput
    _max?: TemplateCollectionMaxOrderByAggregateInput
    _min?: TemplateCollectionMinOrderByAggregateInput
  }

  export type TemplateCollectionScalarWhereWithAggregatesInput = {
    AND?: TemplateCollectionScalarWhereWithAggregatesInput | TemplateCollectionScalarWhereWithAggregatesInput[]
    OR?: TemplateCollectionScalarWhereWithAggregatesInput[]
    NOT?: TemplateCollectionScalarWhereWithAggregatesInput | TemplateCollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateCollection"> | string
    name?: StringWithAggregatesFilter<"TemplateCollection"> | string
    description?: StringNullableWithAggregatesFilter<"TemplateCollection"> | string | null
    templates?: JsonWithAggregatesFilter<"TemplateCollection">
    createdAt?: DateTimeWithAggregatesFilter<"TemplateCollection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateCollection"> | Date | string
    templateId?: StringNullableWithAggregatesFilter<"TemplateCollection"> | string | null
  }

  export type TemplateRatingWhereInput = {
    AND?: TemplateRatingWhereInput | TemplateRatingWhereInput[]
    OR?: TemplateRatingWhereInput[]
    NOT?: TemplateRatingWhereInput | TemplateRatingWhereInput[]
    id?: StringFilter<"TemplateRating"> | string
    templateId?: StringFilter<"TemplateRating"> | string
    userId?: StringFilter<"TemplateRating"> | string
    rating?: IntFilter<"TemplateRating"> | number
    createdAt?: DateTimeFilter<"TemplateRating"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateRating"> | Date | string
  }

  export type TemplateRatingOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    templateId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: TemplateRatingOrderByRelevanceInput
  }

  export type TemplateRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    templateId_userId?: TemplateRatingTemplateIdUserIdCompoundUniqueInput
    AND?: TemplateRatingWhereInput | TemplateRatingWhereInput[]
    OR?: TemplateRatingWhereInput[]
    NOT?: TemplateRatingWhereInput | TemplateRatingWhereInput[]
    templateId?: StringFilter<"TemplateRating"> | string
    userId?: StringFilter<"TemplateRating"> | string
    rating?: IntFilter<"TemplateRating"> | number
    createdAt?: DateTimeFilter<"TemplateRating"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateRating"> | Date | string
  }, "id" | "templateId_userId">

  export type TemplateRatingOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateRatingCountOrderByAggregateInput
    _avg?: TemplateRatingAvgOrderByAggregateInput
    _max?: TemplateRatingMaxOrderByAggregateInput
    _min?: TemplateRatingMinOrderByAggregateInput
    _sum?: TemplateRatingSumOrderByAggregateInput
  }

  export type TemplateRatingScalarWhereWithAggregatesInput = {
    AND?: TemplateRatingScalarWhereWithAggregatesInput | TemplateRatingScalarWhereWithAggregatesInput[]
    OR?: TemplateRatingScalarWhereWithAggregatesInput[]
    NOT?: TemplateRatingScalarWhereWithAggregatesInput | TemplateRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TemplateRating"> | string
    templateId?: StringWithAggregatesFilter<"TemplateRating"> | string
    userId?: StringWithAggregatesFilter<"TemplateRating"> | string
    rating?: IntWithAggregatesFilter<"TemplateRating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TemplateRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TemplateRating"> | Date | string
  }

  export type PublicAgentWhereInput = {
    AND?: PublicAgentWhereInput | PublicAgentWhereInput[]
    OR?: PublicAgentWhereInput[]
    NOT?: PublicAgentWhereInput | PublicAgentWhereInput[]
    id?: StringFilter<"PublicAgent"> | string
    agentId?: StringFilter<"PublicAgent"> | string
    userId?: StringFilter<"PublicAgent"> | string
    madePublic?: DateTimeFilter<"PublicAgent"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PublicAgent"> | Date | string | null
    description?: StringFilter<"PublicAgent"> | string
    remixable?: BoolFilter<"PublicAgent"> | boolean
    isTemplate?: BoolFilter<"PublicAgent"> | boolean
    featured?: BoolFilter<"PublicAgent"> | boolean
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    Reports?: ReportsListRelationFilter
  }

  export type PublicAgentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
    comments?: CommentsOrderByRelationAggregateInput
    likes?: LikesOrderByRelationAggregateInput
    Reports?: ReportsOrderByRelationAggregateInput
    _relevance?: PublicAgentOrderByRelevanceInput
  }

  export type PublicAgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentId?: string
    AND?: PublicAgentWhereInput | PublicAgentWhereInput[]
    OR?: PublicAgentWhereInput[]
    NOT?: PublicAgentWhereInput | PublicAgentWhereInput[]
    userId?: StringFilter<"PublicAgent"> | string
    madePublic?: DateTimeFilter<"PublicAgent"> | Date | string
    deletedAt?: DateTimeNullableFilter<"PublicAgent"> | Date | string | null
    description?: StringFilter<"PublicAgent"> | string
    remixable?: BoolFilter<"PublicAgent"> | boolean
    isTemplate?: BoolFilter<"PublicAgent"> | boolean
    featured?: BoolFilter<"PublicAgent"> | boolean
    comments?: CommentsListRelationFilter
    likes?: LikesListRelationFilter
    Reports?: ReportsListRelationFilter
  }, "id" | "agentId">

  export type PublicAgentOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
    _count?: PublicAgentCountOrderByAggregateInput
    _max?: PublicAgentMaxOrderByAggregateInput
    _min?: PublicAgentMinOrderByAggregateInput
  }

  export type PublicAgentScalarWhereWithAggregatesInput = {
    AND?: PublicAgentScalarWhereWithAggregatesInput | PublicAgentScalarWhereWithAggregatesInput[]
    OR?: PublicAgentScalarWhereWithAggregatesInput[]
    NOT?: PublicAgentScalarWhereWithAggregatesInput | PublicAgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicAgent"> | string
    agentId?: StringWithAggregatesFilter<"PublicAgent"> | string
    userId?: StringWithAggregatesFilter<"PublicAgent"> | string
    madePublic?: DateTimeWithAggregatesFilter<"PublicAgent"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"PublicAgent"> | Date | string | null
    description?: StringWithAggregatesFilter<"PublicAgent"> | string
    remixable?: BoolWithAggregatesFilter<"PublicAgent"> | boolean
    isTemplate?: BoolWithAggregatesFilter<"PublicAgent"> | boolean
    featured?: BoolWithAggregatesFilter<"PublicAgent"> | boolean
  }

  export type ReportsWhereInput = {
    AND?: ReportsWhereInput | ReportsWhereInput[]
    OR?: ReportsWhereInput[]
    NOT?: ReportsWhereInput | ReportsWhereInput[]
    id?: StringFilter<"Reports"> | string
    publicAgentId?: StringFilter<"Reports"> | string
    createdAt?: DateTimeFilter<"Reports"> | Date | string
    message?: StringFilter<"Reports"> | string
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }

  export type ReportsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    publicAgent?: PublicAgentOrderByWithRelationAndSearchRelevanceInput
    _relevance?: ReportsOrderByRelevanceInput
  }

  export type ReportsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportsWhereInput | ReportsWhereInput[]
    OR?: ReportsWhereInput[]
    NOT?: ReportsWhereInput | ReportsWhereInput[]
    publicAgentId?: StringFilter<"Reports"> | string
    createdAt?: DateTimeFilter<"Reports"> | Date | string
    message?: StringFilter<"Reports"> | string
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }, "id">

  export type ReportsOrderByWithAggregationInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    _count?: ReportsCountOrderByAggregateInput
    _max?: ReportsMaxOrderByAggregateInput
    _min?: ReportsMinOrderByAggregateInput
  }

  export type ReportsScalarWhereWithAggregatesInput = {
    AND?: ReportsScalarWhereWithAggregatesInput | ReportsScalarWhereWithAggregatesInput[]
    OR?: ReportsScalarWhereWithAggregatesInput[]
    NOT?: ReportsScalarWhereWithAggregatesInput | ReportsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reports"> | string
    publicAgentId?: StringWithAggregatesFilter<"Reports"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reports"> | Date | string
    message?: StringWithAggregatesFilter<"Reports"> | string
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: StringFilter<"Likes"> | string
    userId?: StringFilter<"Likes"> | string
    publicAgentId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Likes"> | Date | string | null
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }

  export type LikesOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    publicAgent?: PublicAgentOrderByWithRelationAndSearchRelevanceInput
    _relevance?: LikesOrderByRelevanceInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_publicAgentId?: LikesUserIdPublicAgentIdCompoundUniqueInput
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    userId?: StringFilter<"Likes"> | string
    publicAgentId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Likes"> | Date | string | null
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }, "id" | "userId_publicAgentId">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: LikesCountOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Likes"> | string
    userId?: StringWithAggregatesFilter<"Likes"> | string
    publicAgentId?: StringWithAggregatesFilter<"Likes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Likes"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Likes"> | Date | string | null
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    publicAgentId?: StringFilter<"Comments"> | string
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }

  export type CommentsOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    publicAgent?: PublicAgentOrderByWithRelationAndSearchRelevanceInput
    _relevance?: CommentsOrderByRelevanceInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    userId?: StringFilter<"Comments"> | string
    publicAgentId?: StringFilter<"Comments"> | string
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
    publicAgent?: XOR<PublicAgentRelationFilter, PublicAgentWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    userId?: StringWithAggregatesFilter<"Comments"> | string
    publicAgentId?: StringWithAggregatesFilter<"Comments"> | string
    content?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Comments"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Comments"> | Date | string | null
  }

  export type AnonymousUserWhereInput = {
    AND?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    OR?: AnonymousUserWhereInput[]
    NOT?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    id?: StringFilter<"AnonymousUser"> | string
    createdAt?: DateTimeFilter<"AnonymousUser"> | Date | string
    anonymousId?: StringFilter<"AnonymousUser"> | string
    fingerprint?: StringFilter<"AnonymousUser"> | string
    lastAccessed?: DateTimeNullableFilter<"AnonymousUser"> | Date | string | null
  }

  export type AnonymousUserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrderInput | SortOrder
    _relevance?: AnonymousUserOrderByRelevanceInput
  }

  export type AnonymousUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    anonymousId?: string
    AND?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    OR?: AnonymousUserWhereInput[]
    NOT?: AnonymousUserWhereInput | AnonymousUserWhereInput[]
    createdAt?: DateTimeFilter<"AnonymousUser"> | Date | string
    fingerprint?: StringFilter<"AnonymousUser"> | string
    lastAccessed?: DateTimeNullableFilter<"AnonymousUser"> | Date | string | null
  }, "id" | "anonymousId">

  export type AnonymousUserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrderInput | SortOrder
    _count?: AnonymousUserCountOrderByAggregateInput
    _max?: AnonymousUserMaxOrderByAggregateInput
    _min?: AnonymousUserMinOrderByAggregateInput
  }

  export type AnonymousUserScalarWhereWithAggregatesInput = {
    AND?: AnonymousUserScalarWhereWithAggregatesInput | AnonymousUserScalarWhereWithAggregatesInput[]
    OR?: AnonymousUserScalarWhereWithAggregatesInput[]
    NOT?: AnonymousUserScalarWhereWithAggregatesInput | AnonymousUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnonymousUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AnonymousUser"> | Date | string
    anonymousId?: StringWithAggregatesFilter<"AnonymousUser"> | string
    fingerprint?: StringWithAggregatesFilter<"AnonymousUser"> | string
    lastAccessed?: DateTimeNullableWithAggregatesFilter<"AnonymousUser"> | Date | string | null
  }

  export type BudgetWhereInput = {
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    id?: StringFilter<"Budget"> | string
    userId?: StringFilter<"Budget"> | string
    balance?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    currentCost?: DecimalNullableFilter<"Budget"> | Decimal | DecimalJsLike | number | string | null
    modelCost?: JsonNullableFilter<"Budget">
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Budget"> | Date | string | null
  }

  export type BudgetOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrderInput | SortOrder
    modelCost?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: BudgetOrderByRelevanceInput
  }

  export type BudgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BudgetWhereInput | BudgetWhereInput[]
    OR?: BudgetWhereInput[]
    NOT?: BudgetWhereInput | BudgetWhereInput[]
    balance?: DecimalFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    currentCost?: DecimalNullableFilter<"Budget"> | Decimal | DecimalJsLike | number | string | null
    modelCost?: JsonNullableFilter<"Budget">
    createdAt?: DateTimeFilter<"Budget"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Budget"> | Date | string | null
  }, "id" | "userId">

  export type BudgetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrderInput | SortOrder
    modelCost?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: BudgetCountOrderByAggregateInput
    _avg?: BudgetAvgOrderByAggregateInput
    _max?: BudgetMaxOrderByAggregateInput
    _min?: BudgetMinOrderByAggregateInput
    _sum?: BudgetSumOrderByAggregateInput
  }

  export type BudgetScalarWhereWithAggregatesInput = {
    AND?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    OR?: BudgetScalarWhereWithAggregatesInput[]
    NOT?: BudgetScalarWhereWithAggregatesInput | BudgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Budget"> | string
    userId?: StringWithAggregatesFilter<"Budget"> | string
    balance?: DecimalWithAggregatesFilter<"Budget"> | Decimal | DecimalJsLike | number | string
    currentCost?: DecimalNullableWithAggregatesFilter<"Budget"> | Decimal | DecimalJsLike | number | string | null
    modelCost?: JsonNullableWithAggregatesFilter<"Budget">
    createdAt?: DateTimeWithAggregatesFilter<"Budget"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Budget"> | Date | string | null
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<"Promotion"> | string
    name?: StringFilter<"Promotion"> | string
    userId?: StringFilter<"Promotion"> | string
    type?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    amount?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Promotion"> | string | null
    validFrom?: DateTimeFilter<"Promotion"> | Date | string
    validUntil?: DateTimeFilter<"Promotion"> | Date | string
    isUsed?: BoolFilter<"Promotion"> | boolean
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Promotion"> | Date | string | null
  }

  export type PromotionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: PromotionOrderByRelevanceInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    name?: StringFilter<"Promotion"> | string
    userId?: StringFilter<"Promotion"> | string
    type?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    amount?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Promotion"> | string | null
    validFrom?: DateTimeFilter<"Promotion"> | Date | string
    validUntil?: DateTimeFilter<"Promotion"> | Date | string
    isUsed?: BoolFilter<"Promotion"> | boolean
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Promotion"> | Date | string | null
  }, "id">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotion"> | string
    name?: StringWithAggregatesFilter<"Promotion"> | string
    userId?: StringWithAggregatesFilter<"Promotion"> | string
    type?: EnumPromotionTypeWithAggregatesFilter<"Promotion"> | $Enums.PromotionType
    amount?: DecimalWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Promotion"> | string | null
    validFrom?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    validUntil?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"Promotion"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Promotion"> | Date | string | null
  }

  export type PromotionCodeWhereInput = {
    AND?: PromotionCodeWhereInput | PromotionCodeWhereInput[]
    OR?: PromotionCodeWhereInput[]
    NOT?: PromotionCodeWhereInput | PromotionCodeWhereInput[]
    id?: StringFilter<"PromotionCode"> | string
    code?: StringFilter<"PromotionCode"> | string
    description?: StringNullableFilter<"PromotionCode"> | string | null
    couponId?: StringFilter<"PromotionCode"> | string
    userId?: StringFilter<"PromotionCode"> | string
    isUsed?: BoolFilter<"PromotionCode"> | boolean
    createdAt?: DateTimeFilter<"PromotionCode"> | Date | string
    updatedAt?: DateTimeFilter<"PromotionCode"> | Date | string
  }

  export type PromotionCodeOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PromotionCodeOrderByRelevanceInput
  }

  export type PromotionCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    userId?: string
    AND?: PromotionCodeWhereInput | PromotionCodeWhereInput[]
    OR?: PromotionCodeWhereInput[]
    NOT?: PromotionCodeWhereInput | PromotionCodeWhereInput[]
    description?: StringNullableFilter<"PromotionCode"> | string | null
    couponId?: StringFilter<"PromotionCode"> | string
    isUsed?: BoolFilter<"PromotionCode"> | boolean
    createdAt?: DateTimeFilter<"PromotionCode"> | Date | string
    updatedAt?: DateTimeFilter<"PromotionCode"> | Date | string
  }, "id" | "code" | "userId">

  export type PromotionCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromotionCodeCountOrderByAggregateInput
    _max?: PromotionCodeMaxOrderByAggregateInput
    _min?: PromotionCodeMinOrderByAggregateInput
  }

  export type PromotionCodeScalarWhereWithAggregatesInput = {
    AND?: PromotionCodeScalarWhereWithAggregatesInput | PromotionCodeScalarWhereWithAggregatesInput[]
    OR?: PromotionCodeScalarWhereWithAggregatesInput[]
    NOT?: PromotionCodeScalarWhereWithAggregatesInput | PromotionCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromotionCode"> | string
    code?: StringWithAggregatesFilter<"PromotionCode"> | string
    description?: StringNullableWithAggregatesFilter<"PromotionCode"> | string | null
    couponId?: StringWithAggregatesFilter<"PromotionCode"> | string
    userId?: StringWithAggregatesFilter<"PromotionCode"> | string
    isUsed?: BoolWithAggregatesFilter<"PromotionCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PromotionCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromotionCode"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    projectId?: StringNullableFilter<"Transaction"> | string | null
    agentId?: StringNullableFilter<"Transaction"> | string | null
    cost?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    success?: BoolFilter<"Transaction"> | boolean
    source?: EnumTransactionSourceFilter<"Transaction"> | $Enums.TransactionSource
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransactionOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    agentId?: SortOrderInput | SortOrder
    cost?: SortOrder
    success?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _relevance?: TransactionOrderByRelevanceInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    projectId?: StringNullableFilter<"Transaction"> | string | null
    agentId?: StringNullableFilter<"Transaction"> | string | null
    cost?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    success?: BoolFilter<"Transaction"> | boolean
    source?: EnumTransactionSourceFilter<"Transaction"> | $Enums.TransactionSource
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    agentId?: SortOrderInput | SortOrder
    cost?: SortOrder
    success?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    projectId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    agentId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    cost?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    success?: BoolWithAggregatesFilter<"Transaction"> | boolean
    source?: EnumTransactionSourceWithAggregatesFilter<"Transaction"> | $Enums.TransactionSource
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    owner: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    image?: string | null
    lastActive?: Date | string | null
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    owner: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    image?: string | null
    lastActive?: Date | string | null
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectCreateManyInput = {
    id?: string
    owner: string
    name: string
    description?: string | null
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    image?: string | null
    lastActive?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    lastActive?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    spells?: TemplateCreatespellsInput | string[]
    type?: $Enums.TemplateType
    public?: boolean
    userId?: string | null
    usageCount?: number
    ogAgentId?: string | null
    templateVersions?: TemplateVersionCreateNestedManyWithoutTemplateInput
    templateCollections?: TemplateCollectionCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    spells?: TemplateCreatespellsInput | string[]
    type?: $Enums.TemplateType
    public?: boolean
    userId?: string | null
    usageCount?: number
    ogAgentId?: string | null
    templateVersions?: TemplateVersionUncheckedCreateNestedManyWithoutTemplateInput
    templateCollections?: TemplateCollectionUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spells?: TemplateUpdatespellsInput | string[]
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    ogAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    templateVersions?: TemplateVersionUpdateManyWithoutTemplateNestedInput
    templateCollections?: TemplateCollectionUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spells?: TemplateUpdatespellsInput | string[]
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    ogAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    templateVersions?: TemplateVersionUncheckedUpdateManyWithoutTemplateNestedInput
    templateCollections?: TemplateCollectionUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    spells?: TemplateCreatespellsInput | string[]
    type?: $Enums.TemplateType
    public?: boolean
    userId?: string | null
    usageCount?: number
    ogAgentId?: string | null
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spells?: TemplateUpdatespellsInput | string[]
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    ogAgentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spells?: TemplateUpdatespellsInput | string[]
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    ogAgentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateVersionCreateInput = {
    id?: string
    version: number
    spells?: TemplateVersionCreatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Template: TemplateCreateNestedOneWithoutTemplateVersionsInput
  }

  export type TemplateVersionUncheckedCreateInput = {
    id?: string
    templateId: string
    version: number
    spells?: TemplateVersionCreatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    spells?: TemplateVersionUpdatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Template?: TemplateUpdateOneRequiredWithoutTemplateVersionsNestedInput
  }

  export type TemplateVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    spells?: TemplateVersionUpdatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateVersionCreateManyInput = {
    id?: string
    templateId: string
    version: number
    spells?: TemplateVersionCreatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    spells?: TemplateVersionUpdatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    spells?: TemplateVersionUpdatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCollectionCreateInput = {
    id?: string
    name: string
    description?: string | null
    templates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Template?: TemplateCreateNestedOneWithoutTemplateCollectionsInput
  }

  export type TemplateCollectionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    templates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId?: string | null
  }

  export type TemplateCollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Template?: TemplateUpdateOneWithoutTemplateCollectionsNestedInput
  }

  export type TemplateCollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateCollectionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    templates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    templateId?: string | null
  }

  export type TemplateCollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TemplateRatingCreateInput = {
    id?: string
    templateId: string
    userId: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateRatingUncheckedCreateInput = {
    id?: string
    templateId: string
    userId: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateRatingCreateManyInput = {
    id?: string
    templateId: string
    userId: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    templateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicAgentCreateInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsCreateNestedManyWithoutPublicAgentInput
    likes?: LikesCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUncheckedCreateInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsUncheckedCreateNestedManyWithoutPublicAgentInput
    likes?: LikesUncheckedCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsUncheckedCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUpdateManyWithoutPublicAgentNestedInput
    likes?: LikesUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUncheckedUpdateManyWithoutPublicAgentNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUncheckedUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentCreateManyInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
  }

  export type PublicAgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PublicAgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReportsCreateInput = {
    id?: string
    createdAt?: Date | string
    message: string
    publicAgent: PublicAgentCreateNestedOneWithoutReportsInput
  }

  export type ReportsUncheckedCreateInput = {
    id?: string
    publicAgentId: string
    createdAt?: Date | string
    message: string
  }

  export type ReportsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
    publicAgent?: PublicAgentUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReportsCreateManyInput = {
    id?: string
    publicAgentId: string
    createdAt?: Date | string
    message: string
  }

  export type ReportsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReportsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type LikesCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    publicAgent: PublicAgentCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: string
    userId: string
    publicAgentId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LikesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publicAgent?: PublicAgentUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikesCreateManyInput = {
    id?: string
    userId: string
    publicAgentId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LikesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsCreateInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    publicAgent: PublicAgentCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    userId: string
    publicAgentId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publicAgent?: PublicAgentUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsCreateManyInput = {
    id?: string
    userId: string
    publicAgentId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicAgentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnonymousUserCreateInput = {
    id?: string
    createdAt?: Date | string
    anonymousId: string
    fingerprint: string
    lastAccessed?: Date | string | null
  }

  export type AnonymousUserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    anonymousId: string
    fingerprint: string
    lastAccessed?: Date | string | null
  }

  export type AnonymousUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnonymousUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnonymousUserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    anonymousId: string
    fingerprint: string
    lastAccessed?: Date | string | null
  }

  export type AnonymousUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AnonymousUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    anonymousId?: StringFieldUpdateOperationsInput | string
    fingerprint?: StringFieldUpdateOperationsInput | string
    lastAccessed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BudgetCreateInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currentCost?: Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BudgetUncheckedCreateInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currentCost?: Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BudgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BudgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BudgetCreateManyInput = {
    id?: string
    userId: string
    balance?: Decimal | DecimalJsLike | number | string
    currentCost?: Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type BudgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BudgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    modelCost?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PromotionCreateInput = {
    id?: string
    name: string
    userId: string
    type: $Enums.PromotionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    validFrom: Date | string
    validUntil: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    type: $Enums.PromotionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    validFrom: Date | string
    validUntil: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PromotionCreateManyInput = {
    id?: string
    name: string
    userId: string
    type: $Enums.PromotionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    validFrom: Date | string
    validUntil: Date | string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    validFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PromotionCodeCreateInput = {
    id?: string
    code: string
    description?: string | null
    couponId: string
    userId: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionCodeUncheckedCreateInput = {
    id?: string
    code: string
    description?: string | null
    couponId: string
    userId: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    couponId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    couponId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCodeCreateManyInput = {
    id?: string
    code: string
    description?: string | null
    couponId: string
    userId: string
    isUsed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromotionCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    couponId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    couponId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id?: string
    userId: string
    projectId?: string | null
    agentId?: string | null
    cost: Decimal | DecimalJsLike | number | string
    success: boolean
    source: $Enums.TransactionSource
    createdAt?: Date | string
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    projectId?: string | null
    agentId?: string | null
    cost: Decimal | DecimalJsLike | number | string
    success: boolean
    source: $Enums.TransactionSource
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    success?: BoolFieldUpdateOperationsInput | boolean
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    success?: BoolFieldUpdateOperationsInput | boolean
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    projectId?: string | null
    agentId?: string | null
    cost: Decimal | DecimalJsLike | number | string
    success: boolean
    source: $Enums.TransactionSource
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    success?: BoolFieldUpdateOperationsInput | boolean
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    success?: BoolFieldUpdateOperationsInput | boolean
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectOrderByRelevanceInput = {
    fields: ProjectOrderByRelevanceFieldEnum | ProjectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    lastActive?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    lastActive?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    owner?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
    lastActive?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumTemplateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeFilter<$PrismaModel> | $Enums.TemplateType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TemplateVersionListRelationFilter = {
    every?: TemplateVersionWhereInput
    some?: TemplateVersionWhereInput
    none?: TemplateVersionWhereInput
  }

  export type TemplateCollectionListRelationFilter = {
    every?: TemplateCollectionWhereInput
    some?: TemplateCollectionWhereInput
    none?: TemplateCollectionWhereInput
  }

  export type TemplateVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateCollectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateOrderByRelevanceInput = {
    fields: TemplateOrderByRelevanceFieldEnum | TemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    graph?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    spells?: SortOrder
    type?: SortOrder
    public?: SortOrder
    userId?: SortOrder
    usageCount?: SortOrder
    ogAgentId?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    usageCount?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    public?: SortOrder
    userId?: SortOrder
    usageCount?: SortOrder
    ogAgentId?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    public?: SortOrder
    userId?: SortOrder
    usageCount?: SortOrder
    ogAgentId?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    usageCount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumTemplateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel> | $Enums.TemplateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateTypeFilter<$PrismaModel>
    _max?: NestedEnumTemplateTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TemplateRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type TemplateVersionOrderByRelevanceInput = {
    fields: TemplateVersionOrderByRelevanceFieldEnum | TemplateVersionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateVersionTemplateIdVersionCompoundUniqueInput = {
    templateId: string
    version: number
  }

  export type TemplateVersionCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    version?: SortOrder
    spells?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateVersionAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type TemplateVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateVersionMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateVersionSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TemplateNullableRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type TemplateCollectionOrderByRelevanceInput = {
    fields: TemplateCollectionOrderByRelevanceFieldEnum | TemplateCollectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateCollectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    templates?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }

  export type TemplateCollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }

  export type TemplateCollectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    templateId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type TemplateRatingOrderByRelevanceInput = {
    fields: TemplateRatingOrderByRelevanceFieldEnum | TemplateRatingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateRatingTemplateIdUserIdCompoundUniqueInput = {
    templateId: string
    userId: string
  }

  export type TemplateRatingCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateRatingAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type TemplateRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateRatingMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateRatingSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type ReportsListRelationFilter = {
    every?: ReportsWhereInput
    some?: ReportsWhereInput
    none?: ReportsWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublicAgentOrderByRelevanceInput = {
    fields: PublicAgentOrderByRelevanceFieldEnum | PublicAgentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PublicAgentCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
  }

  export type PublicAgentMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
  }

  export type PublicAgentMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    userId?: SortOrder
    madePublic?: SortOrder
    deletedAt?: SortOrder
    description?: SortOrder
    remixable?: SortOrder
    isTemplate?: SortOrder
    featured?: SortOrder
  }

  export type PublicAgentRelationFilter = {
    is?: PublicAgentWhereInput
    isNot?: PublicAgentWhereInput
  }

  export type ReportsOrderByRelevanceInput = {
    fields: ReportsOrderByRelevanceFieldEnum | ReportsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReportsCountOrderByAggregateInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type ReportsMaxOrderByAggregateInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type ReportsMinOrderByAggregateInput = {
    id?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
  }

  export type LikesOrderByRelevanceInput = {
    fields: LikesOrderByRelevanceFieldEnum | LikesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LikesUserIdPublicAgentIdCompoundUniqueInput = {
    userId: string
    publicAgentId: string
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsOrderByRelevanceInput = {
    fields: CommentsOrderByRelevanceFieldEnum | CommentsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicAgentId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AnonymousUserOrderByRelevanceInput = {
    fields: AnonymousUserOrderByRelevanceFieldEnum | AnonymousUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnonymousUserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrder
  }

  export type AnonymousUserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrder
  }

  export type AnonymousUserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    anonymousId?: SortOrder
    fingerprint?: SortOrder
    lastAccessed?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BudgetOrderByRelevanceInput = {
    fields: BudgetOrderByRelevanceFieldEnum | BudgetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BudgetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrder
    modelCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetAvgOrderByAggregateInput = {
    balance?: SortOrder
    currentCost?: SortOrder
  }

  export type BudgetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currentCost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BudgetSumOrderByAggregateInput = {
    balance?: SortOrder
    currentCost?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
  }

  export type PromotionOrderByRelevanceInput = {
    fields: PromotionOrderByRelevanceFieldEnum | PromotionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    validFrom?: SortOrder
    validUntil?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
  }

  export type PromotionCodeOrderByRelevanceInput = {
    fields: PromotionCodeOrderByRelevanceFieldEnum | PromotionCodeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PromotionCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromotionCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    couponId?: SortOrder
    userId?: SortOrder
    isUsed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTransactionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceFilter<$PrismaModel> | $Enums.TransactionSource
  }

  export type TransactionOrderByRelevanceInput = {
    fields: TransactionOrderByRelevanceFieldEnum | TransactionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    agentId?: SortOrder
    cost?: SortOrder
    success?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    agentId?: SortOrder
    cost?: SortOrder
    success?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    agentId?: SortOrder
    cost?: SortOrder
    success?: SortOrder
    source?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type EnumTransactionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel> | $Enums.TransactionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionSourceFilter<$PrismaModel>
    _max?: NestedEnumTransactionSourceFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TemplateCreatespellsInput = {
    set: string[]
  }

  export type TemplateVersionCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateVersionCreateWithoutTemplateInput, TemplateVersionUncheckedCreateWithoutTemplateInput> | TemplateVersionCreateWithoutTemplateInput[] | TemplateVersionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateVersionCreateOrConnectWithoutTemplateInput | TemplateVersionCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateVersionCreateManyTemplateInputEnvelope
    connect?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
  }

  export type TemplateCollectionCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateCollectionCreateWithoutTemplateInput, TemplateCollectionUncheckedCreateWithoutTemplateInput> | TemplateCollectionCreateWithoutTemplateInput[] | TemplateCollectionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateCollectionCreateOrConnectWithoutTemplateInput | TemplateCollectionCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateCollectionCreateManyTemplateInputEnvelope
    connect?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
  }

  export type TemplateVersionUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateVersionCreateWithoutTemplateInput, TemplateVersionUncheckedCreateWithoutTemplateInput> | TemplateVersionCreateWithoutTemplateInput[] | TemplateVersionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateVersionCreateOrConnectWithoutTemplateInput | TemplateVersionCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateVersionCreateManyTemplateInputEnvelope
    connect?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
  }

  export type TemplateCollectionUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateCollectionCreateWithoutTemplateInput, TemplateCollectionUncheckedCreateWithoutTemplateInput> | TemplateCollectionCreateWithoutTemplateInput[] | TemplateCollectionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateCollectionCreateOrConnectWithoutTemplateInput | TemplateCollectionCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateCollectionCreateManyTemplateInputEnvelope
    connect?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
  }

  export type TemplateUpdatespellsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumTemplateTypeFieldUpdateOperationsInput = {
    set?: $Enums.TemplateType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TemplateVersionUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateVersionCreateWithoutTemplateInput, TemplateVersionUncheckedCreateWithoutTemplateInput> | TemplateVersionCreateWithoutTemplateInput[] | TemplateVersionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateVersionCreateOrConnectWithoutTemplateInput | TemplateVersionCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateVersionUpsertWithWhereUniqueWithoutTemplateInput | TemplateVersionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateVersionCreateManyTemplateInputEnvelope
    set?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
    disconnect?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
    delete?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
    connect?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
    update?: TemplateVersionUpdateWithWhereUniqueWithoutTemplateInput | TemplateVersionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateVersionUpdateManyWithWhereWithoutTemplateInput | TemplateVersionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateVersionScalarWhereInput | TemplateVersionScalarWhereInput[]
  }

  export type TemplateCollectionUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateCollectionCreateWithoutTemplateInput, TemplateCollectionUncheckedCreateWithoutTemplateInput> | TemplateCollectionCreateWithoutTemplateInput[] | TemplateCollectionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateCollectionCreateOrConnectWithoutTemplateInput | TemplateCollectionCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateCollectionUpsertWithWhereUniqueWithoutTemplateInput | TemplateCollectionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateCollectionCreateManyTemplateInputEnvelope
    set?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
    disconnect?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
    delete?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
    connect?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
    update?: TemplateCollectionUpdateWithWhereUniqueWithoutTemplateInput | TemplateCollectionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateCollectionUpdateManyWithWhereWithoutTemplateInput | TemplateCollectionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateCollectionScalarWhereInput | TemplateCollectionScalarWhereInput[]
  }

  export type TemplateVersionUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateVersionCreateWithoutTemplateInput, TemplateVersionUncheckedCreateWithoutTemplateInput> | TemplateVersionCreateWithoutTemplateInput[] | TemplateVersionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateVersionCreateOrConnectWithoutTemplateInput | TemplateVersionCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateVersionUpsertWithWhereUniqueWithoutTemplateInput | TemplateVersionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateVersionCreateManyTemplateInputEnvelope
    set?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
    disconnect?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
    delete?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
    connect?: TemplateVersionWhereUniqueInput | TemplateVersionWhereUniqueInput[]
    update?: TemplateVersionUpdateWithWhereUniqueWithoutTemplateInput | TemplateVersionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateVersionUpdateManyWithWhereWithoutTemplateInput | TemplateVersionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateVersionScalarWhereInput | TemplateVersionScalarWhereInput[]
  }

  export type TemplateCollectionUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateCollectionCreateWithoutTemplateInput, TemplateCollectionUncheckedCreateWithoutTemplateInput> | TemplateCollectionCreateWithoutTemplateInput[] | TemplateCollectionUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateCollectionCreateOrConnectWithoutTemplateInput | TemplateCollectionCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateCollectionUpsertWithWhereUniqueWithoutTemplateInput | TemplateCollectionUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateCollectionCreateManyTemplateInputEnvelope
    set?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
    disconnect?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
    delete?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
    connect?: TemplateCollectionWhereUniqueInput | TemplateCollectionWhereUniqueInput[]
    update?: TemplateCollectionUpdateWithWhereUniqueWithoutTemplateInput | TemplateCollectionUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateCollectionUpdateManyWithWhereWithoutTemplateInput | TemplateCollectionUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateCollectionScalarWhereInput | TemplateCollectionScalarWhereInput[]
  }

  export type TemplateVersionCreatespellsInput = {
    set: InputJsonValue[]
  }

  export type TemplateCreateNestedOneWithoutTemplateVersionsInput = {
    create?: XOR<TemplateCreateWithoutTemplateVersionsInput, TemplateUncheckedCreateWithoutTemplateVersionsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTemplateVersionsInput
    connect?: TemplateWhereUniqueInput
  }

  export type TemplateVersionUpdatespellsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TemplateUpdateOneRequiredWithoutTemplateVersionsNestedInput = {
    create?: XOR<TemplateCreateWithoutTemplateVersionsInput, TemplateUncheckedCreateWithoutTemplateVersionsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTemplateVersionsInput
    upsert?: TemplateUpsertWithoutTemplateVersionsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutTemplateVersionsInput, TemplateUpdateWithoutTemplateVersionsInput>, TemplateUncheckedUpdateWithoutTemplateVersionsInput>
  }

  export type TemplateCreateNestedOneWithoutTemplateCollectionsInput = {
    create?: XOR<TemplateCreateWithoutTemplateCollectionsInput, TemplateUncheckedCreateWithoutTemplateCollectionsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTemplateCollectionsInput
    connect?: TemplateWhereUniqueInput
  }

  export type TemplateUpdateOneWithoutTemplateCollectionsNestedInput = {
    create?: XOR<TemplateCreateWithoutTemplateCollectionsInput, TemplateUncheckedCreateWithoutTemplateCollectionsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutTemplateCollectionsInput
    upsert?: TemplateUpsertWithoutTemplateCollectionsInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutTemplateCollectionsInput, TemplateUpdateWithoutTemplateCollectionsInput>, TemplateUncheckedUpdateWithoutTemplateCollectionsInput>
  }

  export type CommentsCreateNestedManyWithoutPublicAgentInput = {
    create?: XOR<CommentsCreateWithoutPublicAgentInput, CommentsUncheckedCreateWithoutPublicAgentInput> | CommentsCreateWithoutPublicAgentInput[] | CommentsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPublicAgentInput | CommentsCreateOrConnectWithoutPublicAgentInput[]
    createMany?: CommentsCreateManyPublicAgentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutPublicAgentInput = {
    create?: XOR<LikesCreateWithoutPublicAgentInput, LikesUncheckedCreateWithoutPublicAgentInput> | LikesCreateWithoutPublicAgentInput[] | LikesUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPublicAgentInput | LikesCreateOrConnectWithoutPublicAgentInput[]
    createMany?: LikesCreateManyPublicAgentInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type ReportsCreateNestedManyWithoutPublicAgentInput = {
    create?: XOR<ReportsCreateWithoutPublicAgentInput, ReportsUncheckedCreateWithoutPublicAgentInput> | ReportsCreateWithoutPublicAgentInput[] | ReportsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: ReportsCreateOrConnectWithoutPublicAgentInput | ReportsCreateOrConnectWithoutPublicAgentInput[]
    createMany?: ReportsCreateManyPublicAgentInputEnvelope
    connect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutPublicAgentInput = {
    create?: XOR<CommentsCreateWithoutPublicAgentInput, CommentsUncheckedCreateWithoutPublicAgentInput> | CommentsCreateWithoutPublicAgentInput[] | CommentsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPublicAgentInput | CommentsCreateOrConnectWithoutPublicAgentInput[]
    createMany?: CommentsCreateManyPublicAgentInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutPublicAgentInput = {
    create?: XOR<LikesCreateWithoutPublicAgentInput, LikesUncheckedCreateWithoutPublicAgentInput> | LikesCreateWithoutPublicAgentInput[] | LikesUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPublicAgentInput | LikesCreateOrConnectWithoutPublicAgentInput[]
    createMany?: LikesCreateManyPublicAgentInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type ReportsUncheckedCreateNestedManyWithoutPublicAgentInput = {
    create?: XOR<ReportsCreateWithoutPublicAgentInput, ReportsUncheckedCreateWithoutPublicAgentInput> | ReportsCreateWithoutPublicAgentInput[] | ReportsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: ReportsCreateOrConnectWithoutPublicAgentInput | ReportsCreateOrConnectWithoutPublicAgentInput[]
    createMany?: ReportsCreateManyPublicAgentInputEnvelope
    connect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
  }

  export type CommentsUpdateManyWithoutPublicAgentNestedInput = {
    create?: XOR<CommentsCreateWithoutPublicAgentInput, CommentsUncheckedCreateWithoutPublicAgentInput> | CommentsCreateWithoutPublicAgentInput[] | CommentsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPublicAgentInput | CommentsCreateOrConnectWithoutPublicAgentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPublicAgentInput | CommentsUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: CommentsCreateManyPublicAgentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPublicAgentInput | CommentsUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPublicAgentInput | CommentsUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutPublicAgentNestedInput = {
    create?: XOR<LikesCreateWithoutPublicAgentInput, LikesUncheckedCreateWithoutPublicAgentInput> | LikesCreateWithoutPublicAgentInput[] | LikesUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPublicAgentInput | LikesCreateOrConnectWithoutPublicAgentInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPublicAgentInput | LikesUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: LikesCreateManyPublicAgentInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPublicAgentInput | LikesUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPublicAgentInput | LikesUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ReportsUpdateManyWithoutPublicAgentNestedInput = {
    create?: XOR<ReportsCreateWithoutPublicAgentInput, ReportsUncheckedCreateWithoutPublicAgentInput> | ReportsCreateWithoutPublicAgentInput[] | ReportsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: ReportsCreateOrConnectWithoutPublicAgentInput | ReportsCreateOrConnectWithoutPublicAgentInput[]
    upsert?: ReportsUpsertWithWhereUniqueWithoutPublicAgentInput | ReportsUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: ReportsCreateManyPublicAgentInputEnvelope
    set?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    disconnect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    delete?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    connect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    update?: ReportsUpdateWithWhereUniqueWithoutPublicAgentInput | ReportsUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?: ReportsUpdateManyWithWhereWithoutPublicAgentInput | ReportsUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: ReportsScalarWhereInput | ReportsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutPublicAgentNestedInput = {
    create?: XOR<CommentsCreateWithoutPublicAgentInput, CommentsUncheckedCreateWithoutPublicAgentInput> | CommentsCreateWithoutPublicAgentInput[] | CommentsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutPublicAgentInput | CommentsCreateOrConnectWithoutPublicAgentInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutPublicAgentInput | CommentsUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: CommentsCreateManyPublicAgentInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutPublicAgentInput | CommentsUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutPublicAgentInput | CommentsUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutPublicAgentNestedInput = {
    create?: XOR<LikesCreateWithoutPublicAgentInput, LikesUncheckedCreateWithoutPublicAgentInput> | LikesCreateWithoutPublicAgentInput[] | LikesUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutPublicAgentInput | LikesCreateOrConnectWithoutPublicAgentInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutPublicAgentInput | LikesUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: LikesCreateManyPublicAgentInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutPublicAgentInput | LikesUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutPublicAgentInput | LikesUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ReportsUncheckedUpdateManyWithoutPublicAgentNestedInput = {
    create?: XOR<ReportsCreateWithoutPublicAgentInput, ReportsUncheckedCreateWithoutPublicAgentInput> | ReportsCreateWithoutPublicAgentInput[] | ReportsUncheckedCreateWithoutPublicAgentInput[]
    connectOrCreate?: ReportsCreateOrConnectWithoutPublicAgentInput | ReportsCreateOrConnectWithoutPublicAgentInput[]
    upsert?: ReportsUpsertWithWhereUniqueWithoutPublicAgentInput | ReportsUpsertWithWhereUniqueWithoutPublicAgentInput[]
    createMany?: ReportsCreateManyPublicAgentInputEnvelope
    set?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    disconnect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    delete?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    connect?: ReportsWhereUniqueInput | ReportsWhereUniqueInput[]
    update?: ReportsUpdateWithWhereUniqueWithoutPublicAgentInput | ReportsUpdateWithWhereUniqueWithoutPublicAgentInput[]
    updateMany?: ReportsUpdateManyWithWhereWithoutPublicAgentInput | ReportsUpdateManyWithWhereWithoutPublicAgentInput[]
    deleteMany?: ReportsScalarWhereInput | ReportsScalarWhereInput[]
  }

  export type PublicAgentCreateNestedOneWithoutReportsInput = {
    create?: XOR<PublicAgentCreateWithoutReportsInput, PublicAgentUncheckedCreateWithoutReportsInput>
    connectOrCreate?: PublicAgentCreateOrConnectWithoutReportsInput
    connect?: PublicAgentWhereUniqueInput
  }

  export type PublicAgentUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<PublicAgentCreateWithoutReportsInput, PublicAgentUncheckedCreateWithoutReportsInput>
    connectOrCreate?: PublicAgentCreateOrConnectWithoutReportsInput
    upsert?: PublicAgentUpsertWithoutReportsInput
    connect?: PublicAgentWhereUniqueInput
    update?: XOR<XOR<PublicAgentUpdateToOneWithWhereWithoutReportsInput, PublicAgentUpdateWithoutReportsInput>, PublicAgentUncheckedUpdateWithoutReportsInput>
  }

  export type PublicAgentCreateNestedOneWithoutLikesInput = {
    create?: XOR<PublicAgentCreateWithoutLikesInput, PublicAgentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PublicAgentCreateOrConnectWithoutLikesInput
    connect?: PublicAgentWhereUniqueInput
  }

  export type PublicAgentUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PublicAgentCreateWithoutLikesInput, PublicAgentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PublicAgentCreateOrConnectWithoutLikesInput
    upsert?: PublicAgentUpsertWithoutLikesInput
    connect?: PublicAgentWhereUniqueInput
    update?: XOR<XOR<PublicAgentUpdateToOneWithWhereWithoutLikesInput, PublicAgentUpdateWithoutLikesInput>, PublicAgentUncheckedUpdateWithoutLikesInput>
  }

  export type PublicAgentCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PublicAgentCreateWithoutCommentsInput, PublicAgentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PublicAgentCreateOrConnectWithoutCommentsInput
    connect?: PublicAgentWhereUniqueInput
  }

  export type PublicAgentUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PublicAgentCreateWithoutCommentsInput, PublicAgentUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PublicAgentCreateOrConnectWithoutCommentsInput
    upsert?: PublicAgentUpsertWithoutCommentsInput
    connect?: PublicAgentWhereUniqueInput
    update?: XOR<XOR<PublicAgentUpdateToOneWithWhereWithoutCommentsInput, PublicAgentUpdateWithoutCommentsInput>, PublicAgentUncheckedUpdateWithoutCommentsInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPromotionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PromotionType
  }

  export type EnumTransactionSourceFieldUpdateOperationsInput = {
    set?: $Enums.TransactionSource
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTemplateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeFilter<$PrismaModel> | $Enums.TemplateType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateType | EnumTemplateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateType[] | ListEnumTemplateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateTypeWithAggregatesFilter<$PrismaModel> | $Enums.TemplateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateTypeFilter<$PrismaModel>
    _max?: NestedEnumTemplateTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
  }

  export type NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceFilter<$PrismaModel> | $Enums.TransactionSource
  }

  export type NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel> | $Enums.TransactionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionSourceFilter<$PrismaModel>
    _max?: NestedEnumTransactionSourceFilter<$PrismaModel>
  }

  export type TemplateVersionCreateWithoutTemplateInput = {
    id?: string
    version: number
    spells?: TemplateVersionCreatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateVersionUncheckedCreateWithoutTemplateInput = {
    id?: string
    version: number
    spells?: TemplateVersionCreatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateVersionCreateOrConnectWithoutTemplateInput = {
    where: TemplateVersionWhereUniqueInput
    create: XOR<TemplateVersionCreateWithoutTemplateInput, TemplateVersionUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateVersionCreateManyTemplateInputEnvelope = {
    data: TemplateVersionCreateManyTemplateInput | TemplateVersionCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type TemplateCollectionCreateWithoutTemplateInput = {
    id?: string
    name: string
    description?: string | null
    templates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCollectionUncheckedCreateWithoutTemplateInput = {
    id?: string
    name: string
    description?: string | null
    templates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCollectionCreateOrConnectWithoutTemplateInput = {
    where: TemplateCollectionWhereUniqueInput
    create: XOR<TemplateCollectionCreateWithoutTemplateInput, TemplateCollectionUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateCollectionCreateManyTemplateInputEnvelope = {
    data: TemplateCollectionCreateManyTemplateInput | TemplateCollectionCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type TemplateVersionUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateVersionWhereUniqueInput
    update: XOR<TemplateVersionUpdateWithoutTemplateInput, TemplateVersionUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateVersionCreateWithoutTemplateInput, TemplateVersionUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateVersionUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateVersionWhereUniqueInput
    data: XOR<TemplateVersionUpdateWithoutTemplateInput, TemplateVersionUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateVersionUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateVersionScalarWhereInput
    data: XOR<TemplateVersionUpdateManyMutationInput, TemplateVersionUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateVersionScalarWhereInput = {
    AND?: TemplateVersionScalarWhereInput | TemplateVersionScalarWhereInput[]
    OR?: TemplateVersionScalarWhereInput[]
    NOT?: TemplateVersionScalarWhereInput | TemplateVersionScalarWhereInput[]
    id?: StringFilter<"TemplateVersion"> | string
    templateId?: StringFilter<"TemplateVersion"> | string
    version?: IntFilter<"TemplateVersion"> | number
    spells?: JsonNullableListFilter<"TemplateVersion">
    metadata?: JsonNullableFilter<"TemplateVersion">
    createdAt?: DateTimeFilter<"TemplateVersion"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateVersion"> | Date | string
  }

  export type TemplateCollectionUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateCollectionWhereUniqueInput
    update: XOR<TemplateCollectionUpdateWithoutTemplateInput, TemplateCollectionUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateCollectionCreateWithoutTemplateInput, TemplateCollectionUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateCollectionUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateCollectionWhereUniqueInput
    data: XOR<TemplateCollectionUpdateWithoutTemplateInput, TemplateCollectionUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateCollectionUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateCollectionScalarWhereInput
    data: XOR<TemplateCollectionUpdateManyMutationInput, TemplateCollectionUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateCollectionScalarWhereInput = {
    AND?: TemplateCollectionScalarWhereInput | TemplateCollectionScalarWhereInput[]
    OR?: TemplateCollectionScalarWhereInput[]
    NOT?: TemplateCollectionScalarWhereInput | TemplateCollectionScalarWhereInput[]
    id?: StringFilter<"TemplateCollection"> | string
    name?: StringFilter<"TemplateCollection"> | string
    description?: StringNullableFilter<"TemplateCollection"> | string | null
    templates?: JsonFilter<"TemplateCollection">
    createdAt?: DateTimeFilter<"TemplateCollection"> | Date | string
    updatedAt?: DateTimeFilter<"TemplateCollection"> | Date | string
    templateId?: StringNullableFilter<"TemplateCollection"> | string | null
  }

  export type TemplateCreateWithoutTemplateVersionsInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    spells?: TemplateCreatespellsInput | string[]
    type?: $Enums.TemplateType
    public?: boolean
    userId?: string | null
    usageCount?: number
    ogAgentId?: string | null
    templateCollections?: TemplateCollectionCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutTemplateVersionsInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    spells?: TemplateCreatespellsInput | string[]
    type?: $Enums.TemplateType
    public?: boolean
    userId?: string | null
    usageCount?: number
    ogAgentId?: string | null
    templateCollections?: TemplateCollectionUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutTemplateVersionsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutTemplateVersionsInput, TemplateUncheckedCreateWithoutTemplateVersionsInput>
  }

  export type TemplateUpsertWithoutTemplateVersionsInput = {
    update: XOR<TemplateUpdateWithoutTemplateVersionsInput, TemplateUncheckedUpdateWithoutTemplateVersionsInput>
    create: XOR<TemplateCreateWithoutTemplateVersionsInput, TemplateUncheckedCreateWithoutTemplateVersionsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutTemplateVersionsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutTemplateVersionsInput, TemplateUncheckedUpdateWithoutTemplateVersionsInput>
  }

  export type TemplateUpdateWithoutTemplateVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spells?: TemplateUpdatespellsInput | string[]
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    ogAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    templateCollections?: TemplateCollectionUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutTemplateVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spells?: TemplateUpdatespellsInput | string[]
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    ogAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    templateCollections?: TemplateCollectionUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateWithoutTemplateCollectionsInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    spells?: TemplateCreatespellsInput | string[]
    type?: $Enums.TemplateType
    public?: boolean
    userId?: string | null
    usageCount?: number
    ogAgentId?: string | null
    templateVersions?: TemplateVersionCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutTemplateCollectionsInput = {
    id?: string
    name: string
    description?: string | null
    image?: string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
    spells?: TemplateCreatespellsInput | string[]
    type?: $Enums.TemplateType
    public?: boolean
    userId?: string | null
    usageCount?: number
    ogAgentId?: string | null
    templateVersions?: TemplateVersionUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutTemplateCollectionsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutTemplateCollectionsInput, TemplateUncheckedCreateWithoutTemplateCollectionsInput>
  }

  export type TemplateUpsertWithoutTemplateCollectionsInput = {
    update: XOR<TemplateUpdateWithoutTemplateCollectionsInput, TemplateUncheckedUpdateWithoutTemplateCollectionsInput>
    create: XOR<TemplateCreateWithoutTemplateCollectionsInput, TemplateUncheckedCreateWithoutTemplateCollectionsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutTemplateCollectionsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutTemplateCollectionsInput, TemplateUncheckedUpdateWithoutTemplateCollectionsInput>
  }

  export type TemplateUpdateWithoutTemplateCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spells?: TemplateUpdatespellsInput | string[]
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    ogAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    templateVersions?: TemplateVersionUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutTemplateCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    graph?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    spells?: TemplateUpdatespellsInput | string[]
    type?: EnumTemplateTypeFieldUpdateOperationsInput | $Enums.TemplateType
    public?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    usageCount?: IntFieldUpdateOperationsInput | number
    ogAgentId?: NullableStringFieldUpdateOperationsInput | string | null
    templateVersions?: TemplateVersionUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type CommentsCreateWithoutPublicAgentInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CommentsUncheckedCreateWithoutPublicAgentInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type CommentsCreateOrConnectWithoutPublicAgentInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutPublicAgentInput, CommentsUncheckedCreateWithoutPublicAgentInput>
  }

  export type CommentsCreateManyPublicAgentInputEnvelope = {
    data: CommentsCreateManyPublicAgentInput | CommentsCreateManyPublicAgentInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutPublicAgentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LikesUncheckedCreateWithoutPublicAgentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type LikesCreateOrConnectWithoutPublicAgentInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutPublicAgentInput, LikesUncheckedCreateWithoutPublicAgentInput>
  }

  export type LikesCreateManyPublicAgentInputEnvelope = {
    data: LikesCreateManyPublicAgentInput | LikesCreateManyPublicAgentInput[]
    skipDuplicates?: boolean
  }

  export type ReportsCreateWithoutPublicAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type ReportsUncheckedCreateWithoutPublicAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type ReportsCreateOrConnectWithoutPublicAgentInput = {
    where: ReportsWhereUniqueInput
    create: XOR<ReportsCreateWithoutPublicAgentInput, ReportsUncheckedCreateWithoutPublicAgentInput>
  }

  export type ReportsCreateManyPublicAgentInputEnvelope = {
    data: ReportsCreateManyPublicAgentInput | ReportsCreateManyPublicAgentInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutPublicAgentInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutPublicAgentInput, CommentsUncheckedUpdateWithoutPublicAgentInput>
    create: XOR<CommentsCreateWithoutPublicAgentInput, CommentsUncheckedCreateWithoutPublicAgentInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutPublicAgentInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutPublicAgentInput, CommentsUncheckedUpdateWithoutPublicAgentInput>
  }

  export type CommentsUpdateManyWithWhereWithoutPublicAgentInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutPublicAgentInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    userId?: StringFilter<"Comments"> | string
    publicAgentId?: StringFilter<"Comments"> | string
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"Comments"> | Date | string | null
  }

  export type LikesUpsertWithWhereUniqueWithoutPublicAgentInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutPublicAgentInput, LikesUncheckedUpdateWithoutPublicAgentInput>
    create: XOR<LikesCreateWithoutPublicAgentInput, LikesUncheckedCreateWithoutPublicAgentInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutPublicAgentInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutPublicAgentInput, LikesUncheckedUpdateWithoutPublicAgentInput>
  }

  export type LikesUpdateManyWithWhereWithoutPublicAgentInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutPublicAgentInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: StringFilter<"Likes"> | string
    userId?: StringFilter<"Likes"> | string
    publicAgentId?: StringFilter<"Likes"> | string
    createdAt?: DateTimeFilter<"Likes"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Likes"> | Date | string | null
  }

  export type ReportsUpsertWithWhereUniqueWithoutPublicAgentInput = {
    where: ReportsWhereUniqueInput
    update: XOR<ReportsUpdateWithoutPublicAgentInput, ReportsUncheckedUpdateWithoutPublicAgentInput>
    create: XOR<ReportsCreateWithoutPublicAgentInput, ReportsUncheckedCreateWithoutPublicAgentInput>
  }

  export type ReportsUpdateWithWhereUniqueWithoutPublicAgentInput = {
    where: ReportsWhereUniqueInput
    data: XOR<ReportsUpdateWithoutPublicAgentInput, ReportsUncheckedUpdateWithoutPublicAgentInput>
  }

  export type ReportsUpdateManyWithWhereWithoutPublicAgentInput = {
    where: ReportsScalarWhereInput
    data: XOR<ReportsUpdateManyMutationInput, ReportsUncheckedUpdateManyWithoutPublicAgentInput>
  }

  export type ReportsScalarWhereInput = {
    AND?: ReportsScalarWhereInput | ReportsScalarWhereInput[]
    OR?: ReportsScalarWhereInput[]
    NOT?: ReportsScalarWhereInput | ReportsScalarWhereInput[]
    id?: StringFilter<"Reports"> | string
    publicAgentId?: StringFilter<"Reports"> | string
    createdAt?: DateTimeFilter<"Reports"> | Date | string
    message?: StringFilter<"Reports"> | string
  }

  export type PublicAgentCreateWithoutReportsInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsCreateNestedManyWithoutPublicAgentInput
    likes?: LikesCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUncheckedCreateWithoutReportsInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsUncheckedCreateNestedManyWithoutPublicAgentInput
    likes?: LikesUncheckedCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentCreateOrConnectWithoutReportsInput = {
    where: PublicAgentWhereUniqueInput
    create: XOR<PublicAgentCreateWithoutReportsInput, PublicAgentUncheckedCreateWithoutReportsInput>
  }

  export type PublicAgentUpsertWithoutReportsInput = {
    update: XOR<PublicAgentUpdateWithoutReportsInput, PublicAgentUncheckedUpdateWithoutReportsInput>
    create: XOR<PublicAgentCreateWithoutReportsInput, PublicAgentUncheckedCreateWithoutReportsInput>
    where?: PublicAgentWhereInput
  }

  export type PublicAgentUpdateToOneWithWhereWithoutReportsInput = {
    where?: PublicAgentWhereInput
    data: XOR<PublicAgentUpdateWithoutReportsInput, PublicAgentUncheckedUpdateWithoutReportsInput>
  }

  export type PublicAgentUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUpdateManyWithoutPublicAgentNestedInput
    likes?: LikesUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUncheckedUpdateManyWithoutPublicAgentNestedInput
    likes?: LikesUncheckedUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentCreateWithoutLikesInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUncheckedCreateWithoutLikesInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    comments?: CommentsUncheckedCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsUncheckedCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentCreateOrConnectWithoutLikesInput = {
    where: PublicAgentWhereUniqueInput
    create: XOR<PublicAgentCreateWithoutLikesInput, PublicAgentUncheckedCreateWithoutLikesInput>
  }

  export type PublicAgentUpsertWithoutLikesInput = {
    update: XOR<PublicAgentUpdateWithoutLikesInput, PublicAgentUncheckedUpdateWithoutLikesInput>
    create: XOR<PublicAgentCreateWithoutLikesInput, PublicAgentUncheckedCreateWithoutLikesInput>
    where?: PublicAgentWhereInput
  }

  export type PublicAgentUpdateToOneWithWhereWithoutLikesInput = {
    where?: PublicAgentWhereInput
    data: XOR<PublicAgentUpdateWithoutLikesInput, PublicAgentUncheckedUpdateWithoutLikesInput>
  }

  export type PublicAgentUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    comments?: CommentsUncheckedUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUncheckedUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentCreateWithoutCommentsInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    likes?: LikesCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentUncheckedCreateWithoutCommentsInput = {
    id?: string
    agentId: string
    userId: string
    madePublic?: Date | string
    deletedAt?: Date | string | null
    description?: string
    remixable?: boolean
    isTemplate?: boolean
    featured?: boolean
    likes?: LikesUncheckedCreateNestedManyWithoutPublicAgentInput
    Reports?: ReportsUncheckedCreateNestedManyWithoutPublicAgentInput
  }

  export type PublicAgentCreateOrConnectWithoutCommentsInput = {
    where: PublicAgentWhereUniqueInput
    create: XOR<PublicAgentCreateWithoutCommentsInput, PublicAgentUncheckedCreateWithoutCommentsInput>
  }

  export type PublicAgentUpsertWithoutCommentsInput = {
    update: XOR<PublicAgentUpdateWithoutCommentsInput, PublicAgentUncheckedUpdateWithoutCommentsInput>
    create: XOR<PublicAgentCreateWithoutCommentsInput, PublicAgentUncheckedCreateWithoutCommentsInput>
    where?: PublicAgentWhereInput
  }

  export type PublicAgentUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PublicAgentWhereInput
    data: XOR<PublicAgentUpdateWithoutCommentsInput, PublicAgentUncheckedUpdateWithoutCommentsInput>
  }

  export type PublicAgentUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    likes?: LikesUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUpdateManyWithoutPublicAgentNestedInput
  }

  export type PublicAgentUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    madePublic?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    remixable?: BoolFieldUpdateOperationsInput | boolean
    isTemplate?: BoolFieldUpdateOperationsInput | boolean
    featured?: BoolFieldUpdateOperationsInput | boolean
    likes?: LikesUncheckedUpdateManyWithoutPublicAgentNestedInput
    Reports?: ReportsUncheckedUpdateManyWithoutPublicAgentNestedInput
  }

  export type TemplateVersionCreateManyTemplateInput = {
    id?: string
    version: number
    spells?: TemplateVersionCreatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateCollectionCreateManyTemplateInput = {
    id?: string
    name: string
    description?: string | null
    templates: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateVersionUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    spells?: TemplateVersionUpdatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateVersionUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    spells?: TemplateVersionUpdatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateVersionUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    spells?: TemplateVersionUpdatespellsInput | InputJsonValue[]
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCollectionUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCollectionUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCollectionUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    templates?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyPublicAgentInput = {
    id?: string
    userId: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type LikesCreateManyPublicAgentInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReportsCreateManyPublicAgentInput = {
    id?: string
    createdAt?: Date | string
    message: string
  }

  export type CommentsUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentsUncheckedUpdateManyWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikesUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikesUncheckedUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikesUncheckedUpdateManyWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportsUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReportsUncheckedUpdateWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReportsUncheckedUpdateManyWithoutPublicAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TemplateCountOutputTypeDefaultArgs instead
     */
    export type TemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicAgentCountOutputTypeDefaultArgs instead
     */
    export type PublicAgentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicAgentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateDefaultArgs instead
     */
    export type TemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateVersionDefaultArgs instead
     */
    export type TemplateVersionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateCollectionDefaultArgs instead
     */
    export type TemplateCollectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateCollectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TemplateRatingDefaultArgs instead
     */
    export type TemplateRatingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TemplateRatingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PublicAgentDefaultArgs instead
     */
    export type PublicAgentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PublicAgentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReportsDefaultArgs instead
     */
    export type ReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReportsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikesDefaultArgs instead
     */
    export type LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CommentsDefaultArgs instead
     */
    export type CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CommentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnonymousUserDefaultArgs instead
     */
    export type AnonymousUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnonymousUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BudgetDefaultArgs instead
     */
    export type BudgetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BudgetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionDefaultArgs instead
     */
    export type PromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionCodeDefaultArgs instead
     */
    export type PromotionCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionCodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}