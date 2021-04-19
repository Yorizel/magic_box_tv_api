
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model posts
 */

export type posts = {
  id: number
  title: string
  description: string | null
  createdAt: Date
}

/**
 * Model profile
 */

export type profile = {
  id: number
  description: string
  userId: number
}

/**
 * Model users
 */

export type users = {
  id: number
  email: string
  firstName: string
  lastName: string
  password: string
  role: role
  avatarId: number | null
}

/**
 * Model userAvatar
 */

export type userAvatar = {
  id: number
  key: string
  url: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const role: {
  USER: 'USER',
  WRITER: 'WRITER',
  ADMIN: 'ADMIN'
};

export type role = (typeof role)[keyof typeof role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.posts.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.posts.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<GlobalReject>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<GlobalReject>;

  /**
   * `prisma.userAvatar`: Exposes CRUD operations for the **userAvatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAvatars
    * const userAvatars = await prisma.userAvatar.findMany()
    * ```
    */
  get userAvatar(): Prisma.userAvatarDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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

  /**
   * Prisma Client JS version: 2.21.2
   * Query Engine version: e421996c87d5f3c8f7eeadd502d4ad402c89464d
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
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  export type Union = any

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    posts: 'posts',
    profile: 'profile',
    users: 'users',
    userAvatar: 'userAvatar'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model posts
   */


  export type AggregatePosts = {
    count: PostsCountAggregateOutputType | null
    avg: PostsAvgAggregateOutputType | null
    sum: PostsSumAggregateOutputType | null
    min: PostsMinAggregateOutputType | null
    max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    id: number | null
  }

  export type PostsSumAggregateOutputType = {
    id: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type PostsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    createdAt: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    id?: true
  }

  export type PostsSumAggregateInputType = {
    id?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type PostsAggregateArgs = {
    /**
     * Filter which posts to aggregate.
    **/
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
    **/
    orderBy?: Enumerable<postsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
    [P in keyof T & keyof AggregatePosts]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }


    
    
  export type PostsGroupByArgs = {
    where?: postsWhereInput
    orderBy?: Enumerable<postsOrderByInput>
    by: Array<PostsScalarFieldEnum>
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: PostsCountAggregateInputType | true
    avg?: PostsAvgAggregateInputType
    sum?: PostsSumAggregateInputType
    min?: PostsMinAggregateInputType
    max?: PostsMaxAggregateInputType
  }


  export type PostsGroupByOutputType = {
    id: number
    title: string
    description: string | null
    createdAt: Date
    count: PostsCountAggregateOutputType | null
    avg: PostsAvgAggregateOutputType | null
    sum: PostsSumAggregateOutputType | null
    min: PostsMinAggregateOutputType | null
    max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends PostsGroupByArgs> = Promise<Array<
    PickArray<PostsGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof PostsGroupByOutputType))]: GetScalarType<T[P], PostsGroupByOutputType[P]>
    }
  >>
    

  export type postsSelect = {
    id?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type postsGetPayload<
    S extends boolean | null | undefined | postsArgs,
    U = keyof S
      > = S extends true
        ? posts
    : S extends undefined
    ? never
    : S extends postsArgs | postsFindManyArgs
    ?'include' extends U
    ? posts 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof posts ?posts [P]
  : 
     never
  } 
    : posts
  : posts


  type postsCountArgs = Merge<
    Omit<postsFindManyArgs, 'select' | 'include'> & {
      select?: PostsCountAggregateInputType | true
    }
  >

  export interface postsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, postsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'posts'> extends True ? CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>> : CheckSelect<T, Prisma__postsClient<posts | null >, Prisma__postsClient<postsGetPayload<T> | null >>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, postsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'posts'> extends True ? CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>> : CheckSelect<T, Prisma__postsClient<posts | null >, Prisma__postsClient<postsGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends postsFindManyArgs>(
      args?: SelectSubset<T, postsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<posts>>, PrismaPromise<Array<postsGetPayload<T>>>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
    **/
    create<T extends postsCreateArgs>(
      args: SelectSubset<T, postsCreateArgs>
    ): CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {postsCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const posts = await prisma.posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postsCreateManyArgs>(
      args?: SelectSubset<T, postsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
    **/
    delete<T extends postsDeleteArgs>(
      args: SelectSubset<T, postsDeleteArgs>
    ): CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postsUpdateArgs>(
      args: SelectSubset<T, postsUpdateArgs>
    ): CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postsDeleteManyArgs>(
      args?: SelectSubset<T, postsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postsUpdateManyArgs>(
      args: SelectSubset<T, postsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
    **/
    upsert<T extends postsUpsertArgs>(
      args: SelectSubset<T, postsUpsertArgs>
    ): CheckSelect<T, Prisma__postsClient<posts>, Prisma__postsClient<postsGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostsGroupByArgs['orderBy'] }
        : { orderBy?: PostsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the posts
    **/
    select?: postsSelect | null
    /**
     * Throw an Error if a posts can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which posts to fetch.
    **/
    where: postsWhereUniqueInput
  }


  /**
   * posts findFirst
   */
  export type postsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the posts
    **/
    select?: postsSelect | null
    /**
     * Throw an Error if a posts can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which posts to fetch.
    **/
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
    **/
    orderBy?: Enumerable<postsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
    **/
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
    **/
    distinct?: Enumerable<PostsScalarFieldEnum>
  }


  /**
   * posts findMany
   */
  export type postsFindManyArgs = {
    /**
     * Select specific fields to fetch from the posts
    **/
    select?: postsSelect | null
    /**
     * Filter, which posts to fetch.
    **/
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
    **/
    orderBy?: Enumerable<postsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
    **/
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
    **/
    skip?: number
    distinct?: Enumerable<PostsScalarFieldEnum>
  }


  /**
   * posts create
   */
  export type postsCreateArgs = {
    /**
     * Select specific fields to fetch from the posts
    **/
    select?: postsSelect | null
    /**
     * The data needed to create a posts.
    **/
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }


  /**
   * posts createMany
   */
  export type postsCreateManyArgs = {
    data: Enumerable<postsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * posts update
   */
  export type postsUpdateArgs = {
    /**
     * Select specific fields to fetch from the posts
    **/
    select?: postsSelect | null
    /**
     * The data needed to update a posts.
    **/
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
    **/
    where: postsWhereUniqueInput
  }


  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs = {
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    where?: postsWhereInput
  }


  /**
   * posts upsert
   */
  export type postsUpsertArgs = {
    /**
     * Select specific fields to fetch from the posts
    **/
    select?: postsSelect | null
    /**
     * The filter to search for the posts to update in case it exists.
    **/
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
    **/
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }


  /**
   * posts delete
   */
  export type postsDeleteArgs = {
    /**
     * Select specific fields to fetch from the posts
    **/
    select?: postsSelect | null
    /**
     * Filter which posts to delete.
    **/
    where: postsWhereUniqueInput
  }


  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs = {
    where?: postsWhereInput
  }


  /**
   * posts without action
   */
  export type postsArgs = {
    /**
     * Select specific fields to fetch from the posts
    **/
    select?: postsSelect | null
  }



  /**
   * Model profile
   */


  export type AggregateProfile = {
    count: ProfileCountAggregateOutputType | null
    avg: ProfileAvgAggregateOutputType | null
    sum: ProfileSumAggregateOutputType | null
    min: ProfileMinAggregateOutputType | null
    max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: number | null
    description: string | null
    userId: number | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: number | null
    description: string | null
    userId: number | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    description: number
    userId: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    description?: true
    userId?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    description?: true
    userId?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type ProfileAggregateArgs = {
    /**
     * Filter which profile to aggregate.
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
    **/
    orderBy?: Enumerable<profileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }


    
    
  export type ProfileGroupByArgs = {
    where?: profileWhereInput
    orderBy?: Enumerable<profileOrderByInput>
    by: Array<ProfileScalarFieldEnum>
    having?: profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: ProfileCountAggregateInputType | true
    avg?: ProfileAvgAggregateInputType
    sum?: ProfileSumAggregateInputType
    min?: ProfileMinAggregateInputType
    max?: ProfileMaxAggregateInputType
  }


  export type ProfileGroupByOutputType = {
    id: number
    description: string
    userId: number
    count: ProfileCountAggregateOutputType | null
    avg: ProfileAvgAggregateOutputType | null
    sum: ProfileSumAggregateOutputType | null
    min: ProfileMinAggregateOutputType | null
    max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Promise<Array<
    PickArray<ProfileGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: GetScalarType<T[P], ProfileGroupByOutputType[P]>
    }
  >>
    

  export type profileSelect = {
    id?: boolean
    description?: boolean
    userId?: boolean
    users?: boolean | usersArgs
  }

  export type profileInclude = {
    users?: boolean | usersArgs
  }

  export type profileGetPayload<
    S extends boolean | null | undefined | profileArgs,
    U = keyof S
      > = S extends true
        ? profile
    : S extends undefined
    ? never
    : S extends profileArgs | profileFindManyArgs
    ?'include' extends U
    ? profile  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'users'
        ? usersGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof profile ?profile [P]
  : 
          P extends 'users'
        ? usersGetPayload<S['select'][P]> : never
  } 
    : profile
  : profile


  type profileCountArgs = Merge<
    Omit<profileFindManyArgs, 'select' | 'include'> & {
      select?: ProfileCountAggregateInputType | true
    }
  >

  export interface profileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, profileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'profile'> extends True ? CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>> : CheckSelect<T, Prisma__profileClient<profile | null >, Prisma__profileClient<profileGetPayload<T> | null >>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, profileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'profile'> extends True ? CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>> : CheckSelect<T, Prisma__profileClient<profile | null >, Prisma__profileClient<profileGetPayload<T> | null >>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends profileFindManyArgs>(
      args?: SelectSubset<T, profileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<profile>>, PrismaPromise<Array<profileGetPayload<T>>>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
    **/
    create<T extends profileCreateArgs>(
      args: SelectSubset<T, profileCreateArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Create many Profiles.
     *     @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profile = await prisma.profile.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profileCreateManyArgs>(
      args?: SelectSubset<T, profileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
    **/
    delete<T extends profileDeleteArgs>(
      args: SelectSubset<T, profileDeleteArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profileUpdateArgs>(
      args: SelectSubset<T, profileUpdateArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profileDeleteManyArgs>(
      args?: SelectSubset<T, profileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profileUpdateManyArgs>(
      args: SelectSubset<T, profileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
    **/
    upsert<T extends profileUpsertArgs>(
      args: SelectSubset<T, profileUpsertArgs>
    ): CheckSelect<T, Prisma__profileClient<profile>, Prisma__profileClient<profileGetPayload<T>>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__profileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends usersArgs = {}>(args?: Subset<T, usersArgs>): CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * profile findUnique
   */
  export type profileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the profile
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: profileInclude | null
    /**
     * Throw an Error if a profile can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which profile to fetch.
    **/
    where: profileWhereUniqueInput
  }


  /**
   * profile findFirst
   */
  export type profileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the profile
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: profileInclude | null
    /**
     * Throw an Error if a profile can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which profile to fetch.
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
    **/
    orderBy?: Enumerable<profileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
    **/
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile findMany
   */
  export type profileFindManyArgs = {
    /**
     * Select specific fields to fetch from the profile
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: profileInclude | null
    /**
     * Filter, which profiles to fetch.
    **/
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
    **/
    orderBy?: Enumerable<profileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
    **/
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
    **/
    skip?: number
    distinct?: Enumerable<ProfileScalarFieldEnum>
  }


  /**
   * profile create
   */
  export type profileCreateArgs = {
    /**
     * Select specific fields to fetch from the profile
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: profileInclude | null
    /**
     * The data needed to create a profile.
    **/
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }


  /**
   * profile createMany
   */
  export type profileCreateManyArgs = {
    data: Enumerable<profileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * profile update
   */
  export type profileUpdateArgs = {
    /**
     * Select specific fields to fetch from the profile
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: profileInclude | null
    /**
     * The data needed to update a profile.
    **/
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
    **/
    where: profileWhereUniqueInput
  }


  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs = {
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    where?: profileWhereInput
  }


  /**
   * profile upsert
   */
  export type profileUpsertArgs = {
    /**
     * Select specific fields to fetch from the profile
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: profileInclude | null
    /**
     * The filter to search for the profile to update in case it exists.
    **/
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
    **/
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }


  /**
   * profile delete
   */
  export type profileDeleteArgs = {
    /**
     * Select specific fields to fetch from the profile
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: profileInclude | null
    /**
     * Filter which profile to delete.
    **/
    where: profileWhereUniqueInput
  }


  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs = {
    where?: profileWhereInput
  }


  /**
   * profile without action
   */
  export type profileArgs = {
    /**
     * Select specific fields to fetch from the profile
    **/
    select?: profileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: profileInclude | null
  }



  /**
   * Model users
   */


  export type AggregateUsers = {
    count: UsersCountAggregateOutputType | null
    avg: UsersAvgAggregateOutputType | null
    sum: UsersSumAggregateOutputType | null
    min: UsersMinAggregateOutputType | null
    max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    avatarId: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    avatarId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    role: role | null
    avatarId: number | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    role: role | null
    avatarId: number | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    password: number
    role: number
    avatarId: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    avatarId?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    avatarId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    role?: true
    avatarId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    role?: true
    avatarId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    role?: true
    avatarId?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which users to aggregate.
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }


    
    
  export type UsersGroupByArgs = {
    where?: usersWhereInput
    orderBy?: Enumerable<usersOrderByInput>
    by: Array<UsersScalarFieldEnum>
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: UsersCountAggregateInputType | true
    avg?: UsersAvgAggregateInputType
    sum?: UsersSumAggregateInputType
    min?: UsersMinAggregateInputType
    max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    email: string
    firstName: string
    lastName: string
    password: string
    role: role
    avatarId: number | null
    count: UsersCountAggregateOutputType | null
    avg: UsersAvgAggregateOutputType | null
    sum: UsersSumAggregateOutputType | null
    min: UsersMinAggregateOutputType | null
    max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Promise<Array<
    PickArray<UsersGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof UsersGroupByOutputType))]: GetScalarType<T[P], UsersGroupByOutputType[P]>
    }
  >>
    

  export type usersSelect = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    role?: boolean
    avatarId?: boolean
    userAvatar?: boolean | userAvatarArgs
    profile?: boolean | profileFindManyArgs
  }

  export type usersInclude = {
    userAvatar?: boolean | userAvatarArgs
    profile?: boolean | profileFindManyArgs
  }

  export type usersGetPayload<
    S extends boolean | null | undefined | usersArgs,
    U = keyof S
      > = S extends true
        ? users
    : S extends undefined
    ? never
    : S extends usersArgs | usersFindManyArgs
    ?'include' extends U
    ? users  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'userAvatar'
        ? userAvatarGetPayload<S['include'][P]> | null :
        P extends 'profile'
        ? Array < profileGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof users ?users [P]
  : 
          P extends 'userAvatar'
        ? userAvatarGetPayload<S['select'][P]> | null :
        P extends 'profile'
        ? Array < profileGetPayload<S['select'][P]>>  : never
  } 
    : users
  : users


  type usersCountArgs = Merge<
    Omit<usersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface usersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, usersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, usersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'users'> extends True ? CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>> : CheckSelect<T, Prisma__usersClient<users | null >, Prisma__usersClient<usersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs>(
      args?: SelectSubset<T, usersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs>(
      args: SelectSubset<T, usersCreateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs>(
      args?: SelectSubset<T, usersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs>(
      args: SelectSubset<T, usersDeleteArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs>(
      args: SelectSubset<T, usersUpdateArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs>(
      args?: SelectSubset<T, usersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs>(
      args: SelectSubset<T, usersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs>(
      args: SelectSubset<T, usersUpsertArgs>
    ): CheckSelect<T, Prisma__usersClient<users>, Prisma__usersClient<usersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__usersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    userAvatar<T extends userAvatarArgs = {}>(args?: Subset<T, userAvatarArgs>): CheckSelect<T, Prisma__userAvatarClient<userAvatar | null >, Prisma__userAvatarClient<userAvatarGetPayload<T> | null >>;

    profile<T extends profileFindManyArgs = {}>(args?: Subset<T, profileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<profile>>, PrismaPromise<Array<profileGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the users
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: usersInclude | null
    /**
     * Throw an Error if a users can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the users
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: usersInclude | null
    /**
     * Throw an Error if a users can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which users to fetch.
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs = {
    /**
     * Select specific fields to fetch from the users
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: usersInclude | null
    /**
     * Filter, which users to fetch.
    **/
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
    **/
    orderBy?: Enumerable<usersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
    **/
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * users create
   */
  export type usersCreateArgs = {
    /**
     * Select specific fields to fetch from the users
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: usersInclude | null
    /**
     * The data needed to create a users.
    **/
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs = {
    data: Enumerable<usersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs = {
    /**
     * Select specific fields to fetch from the users
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: usersInclude | null
    /**
     * The data needed to update a users.
    **/
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs = {
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs = {
    /**
     * Select specific fields to fetch from the users
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: usersInclude | null
    /**
     * The filter to search for the users to update in case it exists.
    **/
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
    **/
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs = {
    /**
     * Select specific fields to fetch from the users
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: usersInclude | null
    /**
     * Filter which users to delete.
    **/
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs = {
    where?: usersWhereInput
  }


  /**
   * users without action
   */
  export type usersArgs = {
    /**
     * Select specific fields to fetch from the users
    **/
    select?: usersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: usersInclude | null
  }



  /**
   * Model userAvatar
   */


  export type AggregateUserAvatar = {
    count: UserAvatarCountAggregateOutputType | null
    avg: UserAvatarAvgAggregateOutputType | null
    sum: UserAvatarSumAggregateOutputType | null
    min: UserAvatarMinAggregateOutputType | null
    max: UserAvatarMaxAggregateOutputType | null
  }

  export type UserAvatarAvgAggregateOutputType = {
    id: number | null
  }

  export type UserAvatarSumAggregateOutputType = {
    id: number | null
  }

  export type UserAvatarMinAggregateOutputType = {
    id: number | null
    key: string | null
    url: string | null
  }

  export type UserAvatarMaxAggregateOutputType = {
    id: number | null
    key: string | null
    url: string | null
  }

  export type UserAvatarCountAggregateOutputType = {
    id: number
    key: number
    url: number
    _all: number
  }


  export type UserAvatarAvgAggregateInputType = {
    id?: true
  }

  export type UserAvatarSumAggregateInputType = {
    id?: true
  }

  export type UserAvatarMinAggregateInputType = {
    id?: true
    key?: true
    url?: true
  }

  export type UserAvatarMaxAggregateInputType = {
    id?: true
    key?: true
    url?: true
  }

  export type UserAvatarCountAggregateInputType = {
    id?: true
    key?: true
    url?: true
    _all?: true
  }

  export type UserAvatarAggregateArgs = {
    /**
     * Filter which userAvatar to aggregate.
    **/
    where?: userAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAvatars to fetch.
    **/
    orderBy?: Enumerable<userAvatarOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: userAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAvatars from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAvatars.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userAvatars
    **/
    count?: true | UserAvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: UserAvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: UserAvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: UserAvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: UserAvatarMaxAggregateInputType
  }

  export type GetUserAvatarAggregateType<T extends UserAvatarAggregateArgs> = {
    [P in keyof T & keyof AggregateUserAvatar]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAvatar[P]>
      : GetScalarType<T[P], AggregateUserAvatar[P]>
  }


    
    
  export type UserAvatarGroupByArgs = {
    where?: userAvatarWhereInput
    orderBy?: Enumerable<userAvatarOrderByInput>
    by: Array<UserAvatarScalarFieldEnum>
    having?: userAvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: UserAvatarCountAggregateInputType | true
    avg?: UserAvatarAvgAggregateInputType
    sum?: UserAvatarSumAggregateInputType
    min?: UserAvatarMinAggregateInputType
    max?: UserAvatarMaxAggregateInputType
  }


  export type UserAvatarGroupByOutputType = {
    id: number
    key: string
    url: string
    count: UserAvatarCountAggregateOutputType | null
    avg: UserAvatarAvgAggregateOutputType | null
    sum: UserAvatarSumAggregateOutputType | null
    min: UserAvatarMinAggregateOutputType | null
    max: UserAvatarMaxAggregateOutputType | null
  }

  type GetUserAvatarGroupByPayload<T extends UserAvatarGroupByArgs> = Promise<Array<
    PickArray<UserAvatarGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof UserAvatarGroupByOutputType))]: GetScalarType<T[P], UserAvatarGroupByOutputType[P]>
    }
  >>
    

  export type userAvatarSelect = {
    id?: boolean
    key?: boolean
    url?: boolean
    users?: boolean | usersFindManyArgs
  }

  export type userAvatarInclude = {
    users?: boolean | usersFindManyArgs
  }

  export type userAvatarGetPayload<
    S extends boolean | null | undefined | userAvatarArgs,
    U = keyof S
      > = S extends true
        ? userAvatar
    : S extends undefined
    ? never
    : S extends userAvatarArgs | userAvatarFindManyArgs
    ?'include' extends U
    ? userAvatar  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'users'
        ? Array < usersGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof userAvatar ?userAvatar [P]
  : 
          P extends 'users'
        ? Array < usersGetPayload<S['select'][P]>>  : never
  } 
    : userAvatar
  : userAvatar


  type userAvatarCountArgs = Merge<
    Omit<userAvatarFindManyArgs, 'select' | 'include'> & {
      select?: UserAvatarCountAggregateInputType | true
    }
  >

  export interface userAvatarDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserAvatar that matches the filter.
     * @param {userAvatarFindUniqueArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userAvatarFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, userAvatarFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'userAvatar'> extends True ? CheckSelect<T, Prisma__userAvatarClient<userAvatar>, Prisma__userAvatarClient<userAvatarGetPayload<T>>> : CheckSelect<T, Prisma__userAvatarClient<userAvatar | null >, Prisma__userAvatarClient<userAvatarGetPayload<T> | null >>

    /**
     * Find the first UserAvatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAvatarFindFirstArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userAvatarFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, userAvatarFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'userAvatar'> extends True ? CheckSelect<T, Prisma__userAvatarClient<userAvatar>, Prisma__userAvatarClient<userAvatarGetPayload<T>>> : CheckSelect<T, Prisma__userAvatarClient<userAvatar | null >, Prisma__userAvatarClient<userAvatarGetPayload<T> | null >>

    /**
     * Find zero or more UserAvatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAvatarFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAvatars
     * const userAvatars = await prisma.userAvatar.findMany()
     * 
     * // Get first 10 UserAvatars
     * const userAvatars = await prisma.userAvatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAvatarWithIdOnly = await prisma.userAvatar.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userAvatarFindManyArgs>(
      args?: SelectSubset<T, userAvatarFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<userAvatar>>, PrismaPromise<Array<userAvatarGetPayload<T>>>>

    /**
     * Create a UserAvatar.
     * @param {userAvatarCreateArgs} args - Arguments to create a UserAvatar.
     * @example
     * // Create one UserAvatar
     * const UserAvatar = await prisma.userAvatar.create({
     *   data: {
     *     // ... data to create a UserAvatar
     *   }
     * })
     * 
    **/
    create<T extends userAvatarCreateArgs>(
      args: SelectSubset<T, userAvatarCreateArgs>
    ): CheckSelect<T, Prisma__userAvatarClient<userAvatar>, Prisma__userAvatarClient<userAvatarGetPayload<T>>>

    /**
     * Create many UserAvatars.
     *     @param {userAvatarCreateManyArgs} args - Arguments to create many UserAvatars.
     *     @example
     *     // Create many UserAvatars
     *     const userAvatar = await prisma.userAvatar.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends userAvatarCreateManyArgs>(
      args?: SelectSubset<T, userAvatarCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserAvatar.
     * @param {userAvatarDeleteArgs} args - Arguments to delete one UserAvatar.
     * @example
     * // Delete one UserAvatar
     * const UserAvatar = await prisma.userAvatar.delete({
     *   where: {
     *     // ... filter to delete one UserAvatar
     *   }
     * })
     * 
    **/
    delete<T extends userAvatarDeleteArgs>(
      args: SelectSubset<T, userAvatarDeleteArgs>
    ): CheckSelect<T, Prisma__userAvatarClient<userAvatar>, Prisma__userAvatarClient<userAvatarGetPayload<T>>>

    /**
     * Update one UserAvatar.
     * @param {userAvatarUpdateArgs} args - Arguments to update one UserAvatar.
     * @example
     * // Update one UserAvatar
     * const userAvatar = await prisma.userAvatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userAvatarUpdateArgs>(
      args: SelectSubset<T, userAvatarUpdateArgs>
    ): CheckSelect<T, Prisma__userAvatarClient<userAvatar>, Prisma__userAvatarClient<userAvatarGetPayload<T>>>

    /**
     * Delete zero or more UserAvatars.
     * @param {userAvatarDeleteManyArgs} args - Arguments to filter UserAvatars to delete.
     * @example
     * // Delete a few UserAvatars
     * const { count } = await prisma.userAvatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userAvatarDeleteManyArgs>(
      args?: SelectSubset<T, userAvatarDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAvatars
     * const userAvatar = await prisma.userAvatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userAvatarUpdateManyArgs>(
      args: SelectSubset<T, userAvatarUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAvatar.
     * @param {userAvatarUpsertArgs} args - Arguments to update or create a UserAvatar.
     * @example
     * // Update or create a UserAvatar
     * const userAvatar = await prisma.userAvatar.upsert({
     *   create: {
     *     // ... data to create a UserAvatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAvatar we want to update
     *   }
     * })
    **/
    upsert<T extends userAvatarUpsertArgs>(
      args: SelectSubset<T, userAvatarUpsertArgs>
    ): CheckSelect<T, Prisma__userAvatarClient<userAvatar>, Prisma__userAvatarClient<userAvatarGetPayload<T>>>

    /**
     * Count the number of UserAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAvatarCountArgs} args - Arguments to filter UserAvatars to count.
     * @example
     * // Count the number of UserAvatars
     * const count = await prisma.userAvatar.count({
     *   where: {
     *     // ... the filter for the UserAvatars we want to count
     *   }
     * })
    **/
    count<T extends userAvatarCountArgs>(
      args?: Subset<T, userAvatarCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends UserAvatarAggregateArgs>(args: Subset<T, UserAvatarAggregateArgs>): PrismaPromise<GetUserAvatarAggregateType<T>>

    /**
     * Group by UserAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAvatarGroupByArgs['orderBy'] }
        : { orderBy?: UserAvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserAvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAvatarGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for userAvatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__userAvatarClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends usersFindManyArgs = {}>(args?: Subset<T, usersFindManyArgs>): CheckSelect<T, PrismaPromise<Array<users>>, PrismaPromise<Array<usersGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * userAvatar findUnique
   */
  export type userAvatarFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the userAvatar
    **/
    select?: userAvatarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: userAvatarInclude | null
    /**
     * Throw an Error if a userAvatar can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which userAvatar to fetch.
    **/
    where: userAvatarWhereUniqueInput
  }


  /**
   * userAvatar findFirst
   */
  export type userAvatarFindFirstArgs = {
    /**
     * Select specific fields to fetch from the userAvatar
    **/
    select?: userAvatarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: userAvatarInclude | null
    /**
     * Throw an Error if a userAvatar can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which userAvatar to fetch.
    **/
    where?: userAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAvatars to fetch.
    **/
    orderBy?: Enumerable<userAvatarOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userAvatars.
    **/
    cursor?: userAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAvatars from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAvatars.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userAvatars.
    **/
    distinct?: Enumerable<UserAvatarScalarFieldEnum>
  }


  /**
   * userAvatar findMany
   */
  export type userAvatarFindManyArgs = {
    /**
     * Select specific fields to fetch from the userAvatar
    **/
    select?: userAvatarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: userAvatarInclude | null
    /**
     * Filter, which userAvatars to fetch.
    **/
    where?: userAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAvatars to fetch.
    **/
    orderBy?: Enumerable<userAvatarOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userAvatars.
    **/
    cursor?: userAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAvatars from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAvatars.
    **/
    skip?: number
    distinct?: Enumerable<UserAvatarScalarFieldEnum>
  }


  /**
   * userAvatar create
   */
  export type userAvatarCreateArgs = {
    /**
     * Select specific fields to fetch from the userAvatar
    **/
    select?: userAvatarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: userAvatarInclude | null
    /**
     * The data needed to create a userAvatar.
    **/
    data: XOR<userAvatarCreateInput, userAvatarUncheckedCreateInput>
  }


  /**
   * userAvatar createMany
   */
  export type userAvatarCreateManyArgs = {
    data: Enumerable<userAvatarCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * userAvatar update
   */
  export type userAvatarUpdateArgs = {
    /**
     * Select specific fields to fetch from the userAvatar
    **/
    select?: userAvatarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: userAvatarInclude | null
    /**
     * The data needed to update a userAvatar.
    **/
    data: XOR<userAvatarUpdateInput, userAvatarUncheckedUpdateInput>
    /**
     * Choose, which userAvatar to update.
    **/
    where: userAvatarWhereUniqueInput
  }


  /**
   * userAvatar updateMany
   */
  export type userAvatarUpdateManyArgs = {
    data: XOR<userAvatarUpdateManyMutationInput, userAvatarUncheckedUpdateManyInput>
    where?: userAvatarWhereInput
  }


  /**
   * userAvatar upsert
   */
  export type userAvatarUpsertArgs = {
    /**
     * Select specific fields to fetch from the userAvatar
    **/
    select?: userAvatarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: userAvatarInclude | null
    /**
     * The filter to search for the userAvatar to update in case it exists.
    **/
    where: userAvatarWhereUniqueInput
    /**
     * In case the userAvatar found by the `where` argument doesn't exist, create a new userAvatar with this data.
    **/
    create: XOR<userAvatarCreateInput, userAvatarUncheckedCreateInput>
    /**
     * In case the userAvatar was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<userAvatarUpdateInput, userAvatarUncheckedUpdateInput>
  }


  /**
   * userAvatar delete
   */
  export type userAvatarDeleteArgs = {
    /**
     * Select specific fields to fetch from the userAvatar
    **/
    select?: userAvatarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: userAvatarInclude | null
    /**
     * Filter which userAvatar to delete.
    **/
    where: userAvatarWhereUniqueInput
  }


  /**
   * userAvatar deleteMany
   */
  export type userAvatarDeleteManyArgs = {
    where?: userAvatarWhereInput
  }


  /**
   * userAvatar without action
   */
  export type userAvatarArgs = {
    /**
     * Select specific fields to fetch from the userAvatar
    **/
    select?: userAvatarSelect | null
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: userAvatarInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PostsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    description: 'description',
    userId: 'userId'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    role: 'role',
    avatarId: 'avatarId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UserAvatarScalarFieldEnum: {
    id: 'id',
    key: 'key',
    url: 'url'
  };

  export type UserAvatarScalarFieldEnum = (typeof UserAvatarScalarFieldEnum)[keyof typeof UserAvatarScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type postsWhereInput = {
    AND?: Enumerable<postsWhereInput>
    OR?: Enumerable<postsWhereInput>
    NOT?: Enumerable<postsWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
  }

  export type postsOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type postsWhereUniqueInput = {
    id?: number
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<postsScalarWhereWithAggregatesInput>
    OR?: Enumerable<postsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<postsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type profileWhereInput = {
    AND?: Enumerable<profileWhereInput>
    OR?: Enumerable<profileWhereInput>
    NOT?: Enumerable<profileWhereInput>
    id?: IntFilter | number
    description?: StringFilter | string
    userId?: IntFilter | number
    users?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type profileOrderByInput = {
    id?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type profileWhereUniqueInput = {
    id?: number
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<profileScalarWhereWithAggregatesInput>
    OR?: Enumerable<profileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<profileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    description?: StringWithAggregatesFilter | string
    userId?: IntWithAggregatesFilter | number
  }

  export type usersWhereInput = {
    AND?: Enumerable<usersWhereInput>
    OR?: Enumerable<usersWhereInput>
    NOT?: Enumerable<usersWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    password?: StringFilter | string
    role?: EnumroleFilter | role
    avatarId?: IntNullableFilter | number | null
    userAvatar?: XOR<UserAvatarRelationFilter, userAvatarWhereInput> | null
    profile?: ProfileListRelationFilter
  }

  export type usersOrderByInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarId?: SortOrder
  }

  export type usersWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<usersScalarWhereWithAggregatesInput>
    OR?: Enumerable<usersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<usersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: EnumroleWithAggregatesFilter | role
    avatarId?: IntNullableWithAggregatesFilter | number | null
  }

  export type userAvatarWhereInput = {
    AND?: Enumerable<userAvatarWhereInput>
    OR?: Enumerable<userAvatarWhereInput>
    NOT?: Enumerable<userAvatarWhereInput>
    id?: IntFilter | number
    key?: StringFilter | string
    url?: StringFilter | string
    users?: UsersListRelationFilter
  }

  export type userAvatarOrderByInput = {
    id?: SortOrder
    key?: SortOrder
    url?: SortOrder
  }

  export type userAvatarWhereUniqueInput = {
    id?: number
  }

  export type userAvatarScalarWhereWithAggregatesInput = {
    AND?: Enumerable<userAvatarScalarWhereWithAggregatesInput>
    OR?: Enumerable<userAvatarScalarWhereWithAggregatesInput>
    NOT?: Enumerable<userAvatarScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    key?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type postsCreateInput = {
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type postsUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type postsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    createdAt?: Date | string
  }

  export type postsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type postsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profileCreateInput = {
    description: string
    users: usersCreateNestedOneWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    id?: number
    description: string
    userId: number
  }

  export type profileUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutProfileInput
  }

  export type profileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type profileCreateManyInput = {
    id?: number
    description: string
    userId: number
  }

  export type profileUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type profileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    email: string
    firstName: string
    lastName: string
    password: string
    role?: role
    userAvatar?: userAvatarCreateNestedOneWithoutUsersInput
    profile?: profileCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    firstName: string
    lastName: string
    password: string
    role?: role
    avatarId?: number | null
    profile?: profileUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
    userAvatar?: userAvatarUpdateOneWithoutUsersInput
    profile?: profileUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    profile?: profileUncheckedUpdateManyWithoutUsersInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    firstName: string
    lastName: string
    password: string
    role?: role
    avatarId?: number | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userAvatarCreateInput = {
    key: string
    url: string
    users?: usersCreateNestedManyWithoutUserAvatarInput
  }

  export type userAvatarUncheckedCreateInput = {
    id?: number
    key: string
    url: string
    users?: usersUncheckedCreateNestedManyWithoutUserAvatarInput
  }

  export type userAvatarUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutUserAvatarInput
  }

  export type userAvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutUserAvatarInput
  }

  export type userAvatarCreateManyInput = {
    id?: number
    key: string
    url: string
  }

  export type userAvatarUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type userAvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    count?: NestedIntNullableFilter
    min?: NestedStringNullableFilter
    max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    count?: NestedIntFilter
    min?: NestedDateTimeFilter
    max?: NestedDateTimeFilter
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type EnumroleFilter = {
    equals?: role
    in?: Enumerable<role>
    notIn?: Enumerable<role>
    not?: NestedEnumroleFilter | role
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type UserAvatarRelationFilter = {
    is?: userAvatarWhereInput | null
    isNot?: userAvatarWhereInput | null
  }

  export type ProfileListRelationFilter = {
    every?: profileWhereInput
    some?: profileWhereInput
    none?: profileWhereInput
  }

  export type EnumroleWithAggregatesFilter = {
    equals?: role
    in?: Enumerable<role>
    notIn?: Enumerable<role>
    not?: NestedEnumroleWithAggregatesFilter | role
    count?: NestedIntFilter
    min?: NestedEnumroleFilter
    max?: NestedEnumroleFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    count?: NestedIntNullableFilter
    avg?: NestedFloatNullableFilter
    sum?: NestedIntNullableFilter
    min?: NestedIntNullableFilter
    max?: NestedIntNullableFilter
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutProfileInput = {
    create?: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfileInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutProfileInput = {
    create?: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfileInput
    upsert?: usersUpsertWithoutProfileInput
    connect?: usersWhereUniqueInput
    update?: XOR<usersUpdateWithoutProfileInput, usersUncheckedUpdateWithoutProfileInput>
  }

  export type userAvatarCreateNestedOneWithoutUsersInput = {
    create?: XOR<userAvatarCreateWithoutUsersInput, userAvatarUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userAvatarCreateOrConnectWithoutUsersInput
    connect?: userAvatarWhereUniqueInput
  }

  export type profileCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<profileCreateWithoutUsersInput>, Enumerable<profileUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<profileCreateOrConnectWithoutUsersInput>
    createMany?: profileCreateManyUsersInputEnvelope
    connect?: Enumerable<profileWhereUniqueInput>
  }

  export type profileUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<profileCreateWithoutUsersInput>, Enumerable<profileUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<profileCreateOrConnectWithoutUsersInput>
    createMany?: profileCreateManyUsersInputEnvelope
    connect?: Enumerable<profileWhereUniqueInput>
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: role
  }

  export type userAvatarUpdateOneWithoutUsersInput = {
    create?: XOR<userAvatarCreateWithoutUsersInput, userAvatarUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userAvatarCreateOrConnectWithoutUsersInput
    upsert?: userAvatarUpsertWithoutUsersInput
    connect?: userAvatarWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<userAvatarUpdateWithoutUsersInput, userAvatarUncheckedUpdateWithoutUsersInput>
  }

  export type profileUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<profileCreateWithoutUsersInput>, Enumerable<profileUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<profileCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<profileUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: profileCreateManyUsersInputEnvelope
    connect?: Enumerable<profileWhereUniqueInput>
    set?: Enumerable<profileWhereUniqueInput>
    disconnect?: Enumerable<profileWhereUniqueInput>
    delete?: Enumerable<profileWhereUniqueInput>
    update?: Enumerable<profileUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<profileUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<profileScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type profileUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<profileCreateWithoutUsersInput>, Enumerable<profileUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<profileCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<profileUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: profileCreateManyUsersInputEnvelope
    connect?: Enumerable<profileWhereUniqueInput>
    set?: Enumerable<profileWhereUniqueInput>
    disconnect?: Enumerable<profileWhereUniqueInput>
    delete?: Enumerable<profileWhereUniqueInput>
    update?: Enumerable<profileUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<profileUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<profileScalarWhereInput>
  }

  export type usersCreateNestedManyWithoutUserAvatarInput = {
    create?: XOR<Enumerable<usersCreateWithoutUserAvatarInput>, Enumerable<usersUncheckedCreateWithoutUserAvatarInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUserAvatarInput>
    createMany?: usersCreateManyUserAvatarInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type usersUncheckedCreateNestedManyWithoutUserAvatarInput = {
    create?: XOR<Enumerable<usersCreateWithoutUserAvatarInput>, Enumerable<usersUncheckedCreateWithoutUserAvatarInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUserAvatarInput>
    createMany?: usersCreateManyUserAvatarInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
  }

  export type usersUpdateManyWithoutUserAvatarInput = {
    create?: XOR<Enumerable<usersCreateWithoutUserAvatarInput>, Enumerable<usersUncheckedCreateWithoutUserAvatarInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUserAvatarInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutUserAvatarInput>
    createMany?: usersCreateManyUserAvatarInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutUserAvatarInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutUserAvatarInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type usersUncheckedUpdateManyWithoutUserAvatarInput = {
    create?: XOR<Enumerable<usersCreateWithoutUserAvatarInput>, Enumerable<usersUncheckedCreateWithoutUserAvatarInput>>
    connectOrCreate?: Enumerable<usersCreateOrConnectWithoutUserAvatarInput>
    upsert?: Enumerable<usersUpsertWithWhereUniqueWithoutUserAvatarInput>
    createMany?: usersCreateManyUserAvatarInputEnvelope
    connect?: Enumerable<usersWhereUniqueInput>
    set?: Enumerable<usersWhereUniqueInput>
    disconnect?: Enumerable<usersWhereUniqueInput>
    delete?: Enumerable<usersWhereUniqueInput>
    update?: Enumerable<usersUpdateWithWhereUniqueWithoutUserAvatarInput>
    updateMany?: Enumerable<usersUpdateManyWithWhereWithoutUserAvatarInput>
    deleteMany?: Enumerable<usersScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    count?: NestedIntNullableFilter
    min?: NestedStringNullableFilter
    max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    count?: NestedIntFilter
    min?: NestedDateTimeFilter
    max?: NestedDateTimeFilter
  }

  export type NestedEnumroleFilter = {
    equals?: role
    in?: Enumerable<role>
    notIn?: Enumerable<role>
    not?: NestedEnumroleFilter | role
  }

  export type NestedEnumroleWithAggregatesFilter = {
    equals?: role
    in?: Enumerable<role>
    notIn?: Enumerable<role>
    not?: NestedEnumroleWithAggregatesFilter | role
    count?: NestedIntFilter
    min?: NestedEnumroleFilter
    max?: NestedEnumroleFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    count?: NestedIntNullableFilter
    avg?: NestedFloatNullableFilter
    sum?: NestedIntNullableFilter
    min?: NestedIntNullableFilter
    max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type usersCreateWithoutProfileInput = {
    email: string
    firstName: string
    lastName: string
    password: string
    role?: role
    userAvatar?: userAvatarCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProfileInput = {
    id?: number
    email: string
    firstName: string
    lastName: string
    password: string
    role?: role
    avatarId?: number | null
  }

  export type usersCreateOrConnectWithoutProfileInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
  }

  export type usersUpsertWithoutProfileInput = {
    update: XOR<usersUpdateWithoutProfileInput, usersUncheckedUpdateWithoutProfileInput>
    create: XOR<usersCreateWithoutProfileInput, usersUncheckedCreateWithoutProfileInput>
  }

  export type usersUpdateWithoutProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
    userAvatar?: userAvatarUpdateOneWithoutUsersInput
  }

  export type usersUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userAvatarCreateWithoutUsersInput = {
    key: string
    url: string
  }

  export type userAvatarUncheckedCreateWithoutUsersInput = {
    id?: number
    key: string
    url: string
  }

  export type userAvatarCreateOrConnectWithoutUsersInput = {
    where: userAvatarWhereUniqueInput
    create: XOR<userAvatarCreateWithoutUsersInput, userAvatarUncheckedCreateWithoutUsersInput>
  }

  export type profileCreateWithoutUsersInput = {
    description: string
  }

  export type profileUncheckedCreateWithoutUsersInput = {
    id?: number
    description: string
  }

  export type profileCreateOrConnectWithoutUsersInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutUsersInput, profileUncheckedCreateWithoutUsersInput>
  }

  export type profileCreateManyUsersInputEnvelope = {
    data: Enumerable<profileCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type userAvatarUpsertWithoutUsersInput = {
    update: XOR<userAvatarUpdateWithoutUsersInput, userAvatarUncheckedUpdateWithoutUsersInput>
    create: XOR<userAvatarCreateWithoutUsersInput, userAvatarUncheckedCreateWithoutUsersInput>
  }

  export type userAvatarUpdateWithoutUsersInput = {
    key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type userAvatarUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type profileUpsertWithWhereUniqueWithoutUsersInput = {
    where: profileWhereUniqueInput
    update: XOR<profileUpdateWithoutUsersInput, profileUncheckedUpdateWithoutUsersInput>
    create: XOR<profileCreateWithoutUsersInput, profileUncheckedCreateWithoutUsersInput>
  }

  export type profileUpdateWithWhereUniqueWithoutUsersInput = {
    where: profileWhereUniqueInput
    data: XOR<profileUpdateWithoutUsersInput, profileUncheckedUpdateWithoutUsersInput>
  }

  export type profileUpdateManyWithWhereWithoutUsersInput = {
    where: profileScalarWhereInput
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyWithoutProfileInput>
  }

  export type profileScalarWhereInput = {
    AND?: Enumerable<profileScalarWhereInput>
    OR?: Enumerable<profileScalarWhereInput>
    NOT?: Enumerable<profileScalarWhereInput>
    id?: IntFilter | number
    description?: StringFilter | string
    userId?: IntFilter | number
  }

  export type usersCreateWithoutUserAvatarInput = {
    email: string
    firstName: string
    lastName: string
    password: string
    role?: role
    profile?: profileCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUserAvatarInput = {
    id?: number
    email: string
    firstName: string
    lastName: string
    password: string
    role?: role
    profile?: profileUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUserAvatarInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUserAvatarInput, usersUncheckedCreateWithoutUserAvatarInput>
  }

  export type usersCreateManyUserAvatarInputEnvelope = {
    data: Enumerable<usersCreateManyUserAvatarInput>
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutUserAvatarInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUserAvatarInput, usersUncheckedUpdateWithoutUserAvatarInput>
    create: XOR<usersCreateWithoutUserAvatarInput, usersUncheckedCreateWithoutUserAvatarInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUserAvatarInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUserAvatarInput, usersUncheckedUpdateWithoutUserAvatarInput>
  }

  export type usersUpdateManyWithWhereWithoutUserAvatarInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUsersInput>
  }

  export type usersScalarWhereInput = {
    AND?: Enumerable<usersScalarWhereInput>
    OR?: Enumerable<usersScalarWhereInput>
    NOT?: Enumerable<usersScalarWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    password?: StringFilter | string
    role?: EnumroleFilter | role
    avatarId?: IntNullableFilter | number | null
  }

  export type profileCreateManyUsersInput = {
    id?: number
    description: string
  }

  export type profileUpdateWithoutUsersInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type profileUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type profileUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyUserAvatarInput = {
    id?: number
    email: string
    firstName: string
    lastName: string
    password: string
    role?: role
  }

  export type usersUpdateWithoutUserAvatarInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
    profile?: profileUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateWithoutUserAvatarInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
    profile?: profileUncheckedUpdateManyWithoutUsersInput
  }

  export type usersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | role
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}