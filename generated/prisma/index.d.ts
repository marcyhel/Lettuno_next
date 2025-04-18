
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_book_reader
 * 
 */
export type user_book_reader = $Result.DefaultSelection<Prisma.$user_book_readerPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model book
 * 
 */
export type book = $Result.DefaultSelection<Prisma.$bookPayload>
/**
 * Model passwordReset
 * 
 */
export type passwordReset = $Result.DefaultSelection<Prisma.$passwordResetPayload>
/**
 * Model monthly_featured_book
 * 
 */
export type monthly_featured_book = $Result.DefaultSelection<Prisma.$monthly_featured_bookPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_book_reader`: Exposes CRUD operations for the **user_book_reader** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_book_readers
    * const user_book_readers = await prisma.user_book_reader.findMany()
    * ```
    */
  get user_book_reader(): Prisma.user_book_readerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.bookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordReset`: Exposes CRUD operations for the **passwordReset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResets
    * const passwordResets = await prisma.passwordReset.findMany()
    * ```
    */
  get passwordReset(): Prisma.passwordResetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthly_featured_book`: Exposes CRUD operations for the **monthly_featured_book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monthly_featured_books
    * const monthly_featured_books = await prisma.monthly_featured_book.findMany()
    * ```
    */
  get monthly_featured_book(): Prisma.monthly_featured_bookDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    user: 'user',
    user_book_reader: 'user_book_reader',
    Category: 'Category',
    book: 'book',
    passwordReset: 'passwordReset',
    monthly_featured_book: 'monthly_featured_book'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "user_book_reader" | "category" | "book" | "passwordReset" | "monthly_featured_book"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_book_reader: {
        payload: Prisma.$user_book_readerPayload<ExtArgs>
        fields: Prisma.user_book_readerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_book_readerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_book_readerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>
          }
          findFirst: {
            args: Prisma.user_book_readerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_book_readerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>
          }
          findMany: {
            args: Prisma.user_book_readerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>[]
          }
          create: {
            args: Prisma.user_book_readerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>
          }
          createMany: {
            args: Prisma.user_book_readerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_book_readerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>[]
          }
          delete: {
            args: Prisma.user_book_readerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>
          }
          update: {
            args: Prisma.user_book_readerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>
          }
          deleteMany: {
            args: Prisma.user_book_readerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_book_readerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_book_readerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>[]
          }
          upsert: {
            args: Prisma.user_book_readerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_book_readerPayload>
          }
          aggregate: {
            args: Prisma.User_book_readerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_book_reader>
          }
          groupBy: {
            args: Prisma.user_book_readerGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_book_readerGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_book_readerCountArgs<ExtArgs>
            result: $Utils.Optional<User_book_readerCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      book: {
        payload: Prisma.$bookPayload<ExtArgs>
        fields: Prisma.bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findFirst: {
            args: Prisma.bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findMany: {
            args: Prisma.bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          create: {
            args: Prisma.bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          createMany: {
            args: Prisma.bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          delete: {
            args: Prisma.bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          update: {
            args: Prisma.bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          deleteMany: {
            args: Prisma.bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.bookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          upsert: {
            args: Prisma.bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      passwordReset: {
        payload: Prisma.$passwordResetPayload<ExtArgs>
        fields: Prisma.passwordResetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.passwordResetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.passwordResetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>
          }
          findFirst: {
            args: Prisma.passwordResetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.passwordResetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>
          }
          findMany: {
            args: Prisma.passwordResetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>[]
          }
          create: {
            args: Prisma.passwordResetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>
          }
          createMany: {
            args: Prisma.passwordResetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.passwordResetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>[]
          }
          delete: {
            args: Prisma.passwordResetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>
          }
          update: {
            args: Prisma.passwordResetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>
          }
          deleteMany: {
            args: Prisma.passwordResetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.passwordResetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.passwordResetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>[]
          }
          upsert: {
            args: Prisma.passwordResetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passwordResetPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordReset>
          }
          groupBy: {
            args: Prisma.passwordResetGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetGroupByOutputType>[]
          }
          count: {
            args: Prisma.passwordResetCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetCountAggregateOutputType> | number
          }
        }
      }
      monthly_featured_book: {
        payload: Prisma.$monthly_featured_bookPayload<ExtArgs>
        fields: Prisma.monthly_featured_bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.monthly_featured_bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.monthly_featured_bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>
          }
          findFirst: {
            args: Prisma.monthly_featured_bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.monthly_featured_bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>
          }
          findMany: {
            args: Prisma.monthly_featured_bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>[]
          }
          create: {
            args: Prisma.monthly_featured_bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>
          }
          createMany: {
            args: Prisma.monthly_featured_bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.monthly_featured_bookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>[]
          }
          delete: {
            args: Prisma.monthly_featured_bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>
          }
          update: {
            args: Prisma.monthly_featured_bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>
          }
          deleteMany: {
            args: Prisma.monthly_featured_bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.monthly_featured_bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.monthly_featured_bookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>[]
          }
          upsert: {
            args: Prisma.monthly_featured_bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$monthly_featured_bookPayload>
          }
          aggregate: {
            args: Prisma.Monthly_featured_bookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthly_featured_book>
          }
          groupBy: {
            args: Prisma.monthly_featured_bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<Monthly_featured_bookGroupByOutputType>[]
          }
          count: {
            args: Prisma.monthly_featured_bookCountArgs<ExtArgs>
            result: $Utils.Optional<Monthly_featured_bookCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    user_book_reader?: user_book_readerOmit
    category?: CategoryOmit
    book?: bookOmit
    passwordReset?: passwordResetOmit
    monthly_featured_book?: monthly_featured_bookOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favoriteBooks: number
    user_book_reader: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteBooks?: boolean | UserCountOutputTypeCountFavoriteBooksArgs
    user_book_reader?: boolean | UserCountOutputTypeCountUser_book_readerArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_book_readerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_book_readerWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    books: number
    monthly_featured_book: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | CategoryCountOutputTypeCountBooksArgs
    monthly_featured_book?: boolean | CategoryCountOutputTypeCountMonthly_featured_bookArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountMonthly_featured_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monthly_featured_bookWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    favoriteByUsers: number
    user_book_readerId: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteByUsers?: boolean | BookCountOutputTypeCountFavoriteByUsersArgs
    user_book_readerId?: boolean | BookCountOutputTypeCountUser_book_readerIdArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountFavoriteByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountUser_book_readerIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_book_readerWhereInput
  }


  /**
   * Count Type Monthly_featured_bookCountOutputType
   */

  export type Monthly_featured_bookCountOutputType = {
    user_book_readerId: number
    user: number
  }

  export type Monthly_featured_bookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_book_readerId?: boolean | Monthly_featured_bookCountOutputTypeCountUser_book_readerIdArgs
    user?: boolean | Monthly_featured_bookCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * Monthly_featured_bookCountOutputType without action
   */
  export type Monthly_featured_bookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monthly_featured_bookCountOutputType
     */
    select?: Monthly_featured_bookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Monthly_featured_bookCountOutputType without action
   */
  export type Monthly_featured_bookCountOutputTypeCountUser_book_readerIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_book_readerWhereInput
  }

  /**
   * Monthly_featured_bookCountOutputType without action
   */
  export type Monthly_featured_bookCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    subscriptionPrice: number | null
  }

  export type UserSumAggregateOutputType = {
    subscriptionPrice: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    subscriptionId: string | null
    subscriptionStatus: string | null
    subscriptionPlan: string | null
    subscriptionPrice: number | null
    subscriptionEndDate: Date | null
    monthly_featured_bookId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    emailVerified: Date | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: string | null
    subscriptionId: string | null
    subscriptionStatus: string | null
    subscriptionPlan: string | null
    subscriptionPrice: number | null
    subscriptionEndDate: Date | null
    monthly_featured_bookId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    role: number
    subscriptionId: number
    subscriptionStatus: number
    subscriptionPlan: number
    subscriptionPrice: number
    subscriptionEndDate: number
    monthly_featured_bookId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    subscriptionPrice?: true
  }

  export type UserSumAggregateInputType = {
    subscriptionPrice?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    subscriptionId?: true
    subscriptionStatus?: true
    subscriptionPlan?: true
    subscriptionPrice?: true
    subscriptionEndDate?: true
    monthly_featured_bookId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    subscriptionId?: true
    subscriptionStatus?: true
    subscriptionPlan?: true
    subscriptionPrice?: true
    subscriptionEndDate?: true
    monthly_featured_bookId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    role?: true
    subscriptionId?: true
    subscriptionStatus?: true
    subscriptionPlan?: true
    subscriptionPrice?: true
    subscriptionEndDate?: true
    monthly_featured_bookId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    emailVerified: Date | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    role: string
    subscriptionId: string | null
    subscriptionStatus: string | null
    subscriptionPlan: string | null
    subscriptionPrice: number | null
    subscriptionEndDate: Date | null
    monthly_featured_bookId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    subscriptionId?: boolean
    subscriptionStatus?: boolean
    subscriptionPlan?: boolean
    subscriptionPrice?: boolean
    subscriptionEndDate?: boolean
    monthly_featured_bookId?: boolean
    favoriteBooks?: boolean | user$favoriteBooksArgs<ExtArgs>
    user_book_reader?: boolean | user$user_book_readerArgs<ExtArgs>
    passwordReset?: boolean | user$passwordResetArgs<ExtArgs>
    monthly_featured_book?: boolean | user$monthly_featured_bookArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    subscriptionId?: boolean
    subscriptionStatus?: boolean
    subscriptionPlan?: boolean
    subscriptionPrice?: boolean
    subscriptionEndDate?: boolean
    monthly_featured_bookId?: boolean
    monthly_featured_book?: boolean | user$monthly_featured_bookArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    subscriptionId?: boolean
    subscriptionStatus?: boolean
    subscriptionPlan?: boolean
    subscriptionPrice?: boolean
    subscriptionEndDate?: boolean
    monthly_featured_bookId?: boolean
    monthly_featured_book?: boolean | user$monthly_featured_bookArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    subscriptionId?: boolean
    subscriptionStatus?: boolean
    subscriptionPlan?: boolean
    subscriptionPrice?: boolean
    subscriptionEndDate?: boolean
    monthly_featured_bookId?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "role" | "subscriptionId" | "subscriptionStatus" | "subscriptionPlan" | "subscriptionPrice" | "subscriptionEndDate" | "monthly_featured_bookId", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favoriteBooks?: boolean | user$favoriteBooksArgs<ExtArgs>
    user_book_reader?: boolean | user$user_book_readerArgs<ExtArgs>
    passwordReset?: boolean | user$passwordResetArgs<ExtArgs>
    monthly_featured_book?: boolean | user$monthly_featured_bookArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthly_featured_book?: boolean | user$monthly_featured_bookArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    monthly_featured_book?: boolean | user$monthly_featured_bookArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      favoriteBooks: Prisma.$bookPayload<ExtArgs>[]
      user_book_reader: Prisma.$user_book_readerPayload<ExtArgs>[]
      passwordReset: Prisma.$passwordResetPayload<ExtArgs> | null
      monthly_featured_book: Prisma.$monthly_featured_bookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      emailVerified: Date | null
      image: string | null
      createdAt: Date
      updatedAt: Date
      role: string
      subscriptionId: string | null
      subscriptionStatus: string | null
      subscriptionPlan: string | null
      subscriptionPrice: number | null
      subscriptionEndDate: Date | null
      monthly_featured_bookId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favoriteBooks<T extends user$favoriteBooksArgs<ExtArgs> = {}>(args?: Subset<T, user$favoriteBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_book_reader<T extends user$user_book_readerArgs<ExtArgs> = {}>(args?: Subset<T, user$user_book_readerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordReset<T extends user$passwordResetArgs<ExtArgs> = {}>(args?: Subset<T, user$passwordResetArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    monthly_featured_book<T extends user$monthly_featured_bookArgs<ExtArgs> = {}>(args?: Subset<T, user$monthly_featured_bookArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly emailVerified: FieldRef<"user", 'DateTime'>
    readonly image: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
    readonly role: FieldRef<"user", 'String'>
    readonly subscriptionId: FieldRef<"user", 'String'>
    readonly subscriptionStatus: FieldRef<"user", 'String'>
    readonly subscriptionPlan: FieldRef<"user", 'String'>
    readonly subscriptionPrice: FieldRef<"user", 'Float'>
    readonly subscriptionEndDate: FieldRef<"user", 'DateTime'>
    readonly monthly_featured_bookId: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.favoriteBooks
   */
  export type user$favoriteBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    where?: bookWhereInput
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    cursor?: bookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * user.user_book_reader
   */
  export type user$user_book_readerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    where?: user_book_readerWhereInput
    orderBy?: user_book_readerOrderByWithRelationInput | user_book_readerOrderByWithRelationInput[]
    cursor?: user_book_readerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_book_readerScalarFieldEnum | User_book_readerScalarFieldEnum[]
  }

  /**
   * user.passwordReset
   */
  export type user$passwordResetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    where?: passwordResetWhereInput
  }

  /**
   * user.monthly_featured_book
   */
  export type user$monthly_featured_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    where?: monthly_featured_bookWhereInput
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_book_reader
   */

  export type AggregateUser_book_reader = {
    _count: User_book_readerCountAggregateOutputType | null
    _avg: User_book_readerAvgAggregateOutputType | null
    _sum: User_book_readerSumAggregateOutputType | null
    _min: User_book_readerMinAggregateOutputType | null
    _max: User_book_readerMaxAggregateOutputType | null
  }

  export type User_book_readerAvgAggregateOutputType = {
    pagesRead: number | null
    pagesRemaining: number | null
    pagesTotal: number | null
  }

  export type User_book_readerSumAggregateOutputType = {
    pagesRead: number | null
    pagesRemaining: number | null
    pagesTotal: number | null
  }

  export type User_book_readerMinAggregateOutputType = {
    id: string | null
    pagesRead: number | null
    pagesRemaining: number | null
    pagesTotal: number | null
    completed: boolean | null
    userId: string | null
    bookId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    monthly_featured_bookId: string | null
  }

  export type User_book_readerMaxAggregateOutputType = {
    id: string | null
    pagesRead: number | null
    pagesRemaining: number | null
    pagesTotal: number | null
    completed: boolean | null
    userId: string | null
    bookId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    monthly_featured_bookId: string | null
  }

  export type User_book_readerCountAggregateOutputType = {
    id: number
    pagesRead: number
    pagesRemaining: number
    pagesTotal: number
    completed: number
    userId: number
    bookId: number
    createdAt: number
    updatedAt: number
    monthly_featured_bookId: number
    _all: number
  }


  export type User_book_readerAvgAggregateInputType = {
    pagesRead?: true
    pagesRemaining?: true
    pagesTotal?: true
  }

  export type User_book_readerSumAggregateInputType = {
    pagesRead?: true
    pagesRemaining?: true
    pagesTotal?: true
  }

  export type User_book_readerMinAggregateInputType = {
    id?: true
    pagesRead?: true
    pagesRemaining?: true
    pagesTotal?: true
    completed?: true
    userId?: true
    bookId?: true
    createdAt?: true
    updatedAt?: true
    monthly_featured_bookId?: true
  }

  export type User_book_readerMaxAggregateInputType = {
    id?: true
    pagesRead?: true
    pagesRemaining?: true
    pagesTotal?: true
    completed?: true
    userId?: true
    bookId?: true
    createdAt?: true
    updatedAt?: true
    monthly_featured_bookId?: true
  }

  export type User_book_readerCountAggregateInputType = {
    id?: true
    pagesRead?: true
    pagesRemaining?: true
    pagesTotal?: true
    completed?: true
    userId?: true
    bookId?: true
    createdAt?: true
    updatedAt?: true
    monthly_featured_bookId?: true
    _all?: true
  }

  export type User_book_readerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_book_reader to aggregate.
     */
    where?: user_book_readerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_book_readers to fetch.
     */
    orderBy?: user_book_readerOrderByWithRelationInput | user_book_readerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_book_readerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_book_readers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_book_readers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_book_readers
    **/
    _count?: true | User_book_readerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_book_readerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_book_readerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_book_readerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_book_readerMaxAggregateInputType
  }

  export type GetUser_book_readerAggregateType<T extends User_book_readerAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_book_reader]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_book_reader[P]>
      : GetScalarType<T[P], AggregateUser_book_reader[P]>
  }




  export type user_book_readerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_book_readerWhereInput
    orderBy?: user_book_readerOrderByWithAggregationInput | user_book_readerOrderByWithAggregationInput[]
    by: User_book_readerScalarFieldEnum[] | User_book_readerScalarFieldEnum
    having?: user_book_readerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_book_readerCountAggregateInputType | true
    _avg?: User_book_readerAvgAggregateInputType
    _sum?: User_book_readerSumAggregateInputType
    _min?: User_book_readerMinAggregateInputType
    _max?: User_book_readerMaxAggregateInputType
  }

  export type User_book_readerGroupByOutputType = {
    id: string
    pagesRead: number
    pagesRemaining: number
    pagesTotal: number
    completed: boolean
    userId: string
    bookId: string
    createdAt: Date
    updatedAt: Date
    monthly_featured_bookId: string | null
    _count: User_book_readerCountAggregateOutputType | null
    _avg: User_book_readerAvgAggregateOutputType | null
    _sum: User_book_readerSumAggregateOutputType | null
    _min: User_book_readerMinAggregateOutputType | null
    _max: User_book_readerMaxAggregateOutputType | null
  }

  type GetUser_book_readerGroupByPayload<T extends user_book_readerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_book_readerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_book_readerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_book_readerGroupByOutputType[P]>
            : GetScalarType<T[P], User_book_readerGroupByOutputType[P]>
        }
      >
    >


  export type user_book_readerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagesRead?: boolean
    pagesRemaining?: boolean
    pagesTotal?: boolean
    completed?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthly_featured_bookId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
    monthly_featured_book?: boolean | user_book_reader$monthly_featured_bookArgs<ExtArgs>
  }, ExtArgs["result"]["user_book_reader"]>

  export type user_book_readerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagesRead?: boolean
    pagesRemaining?: boolean
    pagesTotal?: boolean
    completed?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthly_featured_bookId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
    monthly_featured_book?: boolean | user_book_reader$monthly_featured_bookArgs<ExtArgs>
  }, ExtArgs["result"]["user_book_reader"]>

  export type user_book_readerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pagesRead?: boolean
    pagesRemaining?: boolean
    pagesTotal?: boolean
    completed?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthly_featured_bookId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
    monthly_featured_book?: boolean | user_book_reader$monthly_featured_bookArgs<ExtArgs>
  }, ExtArgs["result"]["user_book_reader"]>

  export type user_book_readerSelectScalar = {
    id?: boolean
    pagesRead?: boolean
    pagesRemaining?: boolean
    pagesTotal?: boolean
    completed?: boolean
    userId?: boolean
    bookId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthly_featured_bookId?: boolean
  }

  export type user_book_readerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pagesRead" | "pagesRemaining" | "pagesTotal" | "completed" | "userId" | "bookId" | "createdAt" | "updatedAt" | "monthly_featured_bookId", ExtArgs["result"]["user_book_reader"]>
  export type user_book_readerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
    monthly_featured_book?: boolean | user_book_reader$monthly_featured_bookArgs<ExtArgs>
  }
  export type user_book_readerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
    monthly_featured_book?: boolean | user_book_reader$monthly_featured_bookArgs<ExtArgs>
  }
  export type user_book_readerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
    monthly_featured_book?: boolean | user_book_reader$monthly_featured_bookArgs<ExtArgs>
  }

  export type $user_book_readerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_book_reader"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      book: Prisma.$bookPayload<ExtArgs>
      monthly_featured_book: Prisma.$monthly_featured_bookPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pagesRead: number
      pagesRemaining: number
      pagesTotal: number
      completed: boolean
      userId: string
      bookId: string
      createdAt: Date
      updatedAt: Date
      monthly_featured_bookId: string | null
    }, ExtArgs["result"]["user_book_reader"]>
    composites: {}
  }

  type user_book_readerGetPayload<S extends boolean | null | undefined | user_book_readerDefaultArgs> = $Result.GetResult<Prisma.$user_book_readerPayload, S>

  type user_book_readerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_book_readerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_book_readerCountAggregateInputType | true
    }

  export interface user_book_readerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_book_reader'], meta: { name: 'user_book_reader' } }
    /**
     * Find zero or one User_book_reader that matches the filter.
     * @param {user_book_readerFindUniqueArgs} args - Arguments to find a User_book_reader
     * @example
     * // Get one User_book_reader
     * const user_book_reader = await prisma.user_book_reader.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_book_readerFindUniqueArgs>(args: SelectSubset<T, user_book_readerFindUniqueArgs<ExtArgs>>): Prisma__user_book_readerClient<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_book_reader that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_book_readerFindUniqueOrThrowArgs} args - Arguments to find a User_book_reader
     * @example
     * // Get one User_book_reader
     * const user_book_reader = await prisma.user_book_reader.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_book_readerFindUniqueOrThrowArgs>(args: SelectSubset<T, user_book_readerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_book_readerClient<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_book_reader that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_book_readerFindFirstArgs} args - Arguments to find a User_book_reader
     * @example
     * // Get one User_book_reader
     * const user_book_reader = await prisma.user_book_reader.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_book_readerFindFirstArgs>(args?: SelectSubset<T, user_book_readerFindFirstArgs<ExtArgs>>): Prisma__user_book_readerClient<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_book_reader that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_book_readerFindFirstOrThrowArgs} args - Arguments to find a User_book_reader
     * @example
     * // Get one User_book_reader
     * const user_book_reader = await prisma.user_book_reader.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_book_readerFindFirstOrThrowArgs>(args?: SelectSubset<T, user_book_readerFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_book_readerClient<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_book_readers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_book_readerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_book_readers
     * const user_book_readers = await prisma.user_book_reader.findMany()
     * 
     * // Get first 10 User_book_readers
     * const user_book_readers = await prisma.user_book_reader.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_book_readerWithIdOnly = await prisma.user_book_reader.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_book_readerFindManyArgs>(args?: SelectSubset<T, user_book_readerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_book_reader.
     * @param {user_book_readerCreateArgs} args - Arguments to create a User_book_reader.
     * @example
     * // Create one User_book_reader
     * const User_book_reader = await prisma.user_book_reader.create({
     *   data: {
     *     // ... data to create a User_book_reader
     *   }
     * })
     * 
     */
    create<T extends user_book_readerCreateArgs>(args: SelectSubset<T, user_book_readerCreateArgs<ExtArgs>>): Prisma__user_book_readerClient<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_book_readers.
     * @param {user_book_readerCreateManyArgs} args - Arguments to create many User_book_readers.
     * @example
     * // Create many User_book_readers
     * const user_book_reader = await prisma.user_book_reader.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_book_readerCreateManyArgs>(args?: SelectSubset<T, user_book_readerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_book_readers and returns the data saved in the database.
     * @param {user_book_readerCreateManyAndReturnArgs} args - Arguments to create many User_book_readers.
     * @example
     * // Create many User_book_readers
     * const user_book_reader = await prisma.user_book_reader.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_book_readers and only return the `id`
     * const user_book_readerWithIdOnly = await prisma.user_book_reader.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_book_readerCreateManyAndReturnArgs>(args?: SelectSubset<T, user_book_readerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_book_reader.
     * @param {user_book_readerDeleteArgs} args - Arguments to delete one User_book_reader.
     * @example
     * // Delete one User_book_reader
     * const User_book_reader = await prisma.user_book_reader.delete({
     *   where: {
     *     // ... filter to delete one User_book_reader
     *   }
     * })
     * 
     */
    delete<T extends user_book_readerDeleteArgs>(args: SelectSubset<T, user_book_readerDeleteArgs<ExtArgs>>): Prisma__user_book_readerClient<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_book_reader.
     * @param {user_book_readerUpdateArgs} args - Arguments to update one User_book_reader.
     * @example
     * // Update one User_book_reader
     * const user_book_reader = await prisma.user_book_reader.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_book_readerUpdateArgs>(args: SelectSubset<T, user_book_readerUpdateArgs<ExtArgs>>): Prisma__user_book_readerClient<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_book_readers.
     * @param {user_book_readerDeleteManyArgs} args - Arguments to filter User_book_readers to delete.
     * @example
     * // Delete a few User_book_readers
     * const { count } = await prisma.user_book_reader.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_book_readerDeleteManyArgs>(args?: SelectSubset<T, user_book_readerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_book_readers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_book_readerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_book_readers
     * const user_book_reader = await prisma.user_book_reader.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_book_readerUpdateManyArgs>(args: SelectSubset<T, user_book_readerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_book_readers and returns the data updated in the database.
     * @param {user_book_readerUpdateManyAndReturnArgs} args - Arguments to update many User_book_readers.
     * @example
     * // Update many User_book_readers
     * const user_book_reader = await prisma.user_book_reader.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_book_readers and only return the `id`
     * const user_book_readerWithIdOnly = await prisma.user_book_reader.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_book_readerUpdateManyAndReturnArgs>(args: SelectSubset<T, user_book_readerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_book_reader.
     * @param {user_book_readerUpsertArgs} args - Arguments to update or create a User_book_reader.
     * @example
     * // Update or create a User_book_reader
     * const user_book_reader = await prisma.user_book_reader.upsert({
     *   create: {
     *     // ... data to create a User_book_reader
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_book_reader we want to update
     *   }
     * })
     */
    upsert<T extends user_book_readerUpsertArgs>(args: SelectSubset<T, user_book_readerUpsertArgs<ExtArgs>>): Prisma__user_book_readerClient<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_book_readers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_book_readerCountArgs} args - Arguments to filter User_book_readers to count.
     * @example
     * // Count the number of User_book_readers
     * const count = await prisma.user_book_reader.count({
     *   where: {
     *     // ... the filter for the User_book_readers we want to count
     *   }
     * })
    **/
    count<T extends user_book_readerCountArgs>(
      args?: Subset<T, user_book_readerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_book_readerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_book_reader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_book_readerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_book_readerAggregateArgs>(args: Subset<T, User_book_readerAggregateArgs>): Prisma.PrismaPromise<GetUser_book_readerAggregateType<T>>

    /**
     * Group by User_book_reader.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_book_readerGroupByArgs} args - Group by arguments.
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
      T extends user_book_readerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_book_readerGroupByArgs['orderBy'] }
        : { orderBy?: user_book_readerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_book_readerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_book_readerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_book_reader model
   */
  readonly fields: user_book_readerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_book_reader.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_book_readerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    monthly_featured_book<T extends user_book_reader$monthly_featured_bookArgs<ExtArgs> = {}>(args?: Subset<T, user_book_reader$monthly_featured_bookArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_book_reader model
   */
  interface user_book_readerFieldRefs {
    readonly id: FieldRef<"user_book_reader", 'String'>
    readonly pagesRead: FieldRef<"user_book_reader", 'Int'>
    readonly pagesRemaining: FieldRef<"user_book_reader", 'Int'>
    readonly pagesTotal: FieldRef<"user_book_reader", 'Int'>
    readonly completed: FieldRef<"user_book_reader", 'Boolean'>
    readonly userId: FieldRef<"user_book_reader", 'String'>
    readonly bookId: FieldRef<"user_book_reader", 'String'>
    readonly createdAt: FieldRef<"user_book_reader", 'DateTime'>
    readonly updatedAt: FieldRef<"user_book_reader", 'DateTime'>
    readonly monthly_featured_bookId: FieldRef<"user_book_reader", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user_book_reader findUnique
   */
  export type user_book_readerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * Filter, which user_book_reader to fetch.
     */
    where: user_book_readerWhereUniqueInput
  }

  /**
   * user_book_reader findUniqueOrThrow
   */
  export type user_book_readerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * Filter, which user_book_reader to fetch.
     */
    where: user_book_readerWhereUniqueInput
  }

  /**
   * user_book_reader findFirst
   */
  export type user_book_readerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * Filter, which user_book_reader to fetch.
     */
    where?: user_book_readerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_book_readers to fetch.
     */
    orderBy?: user_book_readerOrderByWithRelationInput | user_book_readerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_book_readers.
     */
    cursor?: user_book_readerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_book_readers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_book_readers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_book_readers.
     */
    distinct?: User_book_readerScalarFieldEnum | User_book_readerScalarFieldEnum[]
  }

  /**
   * user_book_reader findFirstOrThrow
   */
  export type user_book_readerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * Filter, which user_book_reader to fetch.
     */
    where?: user_book_readerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_book_readers to fetch.
     */
    orderBy?: user_book_readerOrderByWithRelationInput | user_book_readerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_book_readers.
     */
    cursor?: user_book_readerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_book_readers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_book_readers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_book_readers.
     */
    distinct?: User_book_readerScalarFieldEnum | User_book_readerScalarFieldEnum[]
  }

  /**
   * user_book_reader findMany
   */
  export type user_book_readerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * Filter, which user_book_readers to fetch.
     */
    where?: user_book_readerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_book_readers to fetch.
     */
    orderBy?: user_book_readerOrderByWithRelationInput | user_book_readerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_book_readers.
     */
    cursor?: user_book_readerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_book_readers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_book_readers.
     */
    skip?: number
    distinct?: User_book_readerScalarFieldEnum | User_book_readerScalarFieldEnum[]
  }

  /**
   * user_book_reader create
   */
  export type user_book_readerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * The data needed to create a user_book_reader.
     */
    data: XOR<user_book_readerCreateInput, user_book_readerUncheckedCreateInput>
  }

  /**
   * user_book_reader createMany
   */
  export type user_book_readerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_book_readers.
     */
    data: user_book_readerCreateManyInput | user_book_readerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_book_reader createManyAndReturn
   */
  export type user_book_readerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * The data used to create many user_book_readers.
     */
    data: user_book_readerCreateManyInput | user_book_readerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_book_reader update
   */
  export type user_book_readerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * The data needed to update a user_book_reader.
     */
    data: XOR<user_book_readerUpdateInput, user_book_readerUncheckedUpdateInput>
    /**
     * Choose, which user_book_reader to update.
     */
    where: user_book_readerWhereUniqueInput
  }

  /**
   * user_book_reader updateMany
   */
  export type user_book_readerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_book_readers.
     */
    data: XOR<user_book_readerUpdateManyMutationInput, user_book_readerUncheckedUpdateManyInput>
    /**
     * Filter which user_book_readers to update
     */
    where?: user_book_readerWhereInput
    /**
     * Limit how many user_book_readers to update.
     */
    limit?: number
  }

  /**
   * user_book_reader updateManyAndReturn
   */
  export type user_book_readerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * The data used to update user_book_readers.
     */
    data: XOR<user_book_readerUpdateManyMutationInput, user_book_readerUncheckedUpdateManyInput>
    /**
     * Filter which user_book_readers to update
     */
    where?: user_book_readerWhereInput
    /**
     * Limit how many user_book_readers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_book_reader upsert
   */
  export type user_book_readerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * The filter to search for the user_book_reader to update in case it exists.
     */
    where: user_book_readerWhereUniqueInput
    /**
     * In case the user_book_reader found by the `where` argument doesn't exist, create a new user_book_reader with this data.
     */
    create: XOR<user_book_readerCreateInput, user_book_readerUncheckedCreateInput>
    /**
     * In case the user_book_reader was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_book_readerUpdateInput, user_book_readerUncheckedUpdateInput>
  }

  /**
   * user_book_reader delete
   */
  export type user_book_readerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    /**
     * Filter which user_book_reader to delete.
     */
    where: user_book_readerWhereUniqueInput
  }

  /**
   * user_book_reader deleteMany
   */
  export type user_book_readerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_book_readers to delete
     */
    where?: user_book_readerWhereInput
    /**
     * Limit how many user_book_readers to delete.
     */
    limit?: number
  }

  /**
   * user_book_reader.monthly_featured_book
   */
  export type user_book_reader$monthly_featured_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    where?: monthly_featured_bookWhereInput
  }

  /**
   * user_book_reader without action
   */
  export type user_book_readerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | Category$booksArgs<ExtArgs>
    monthly_featured_book?: boolean | Category$monthly_featured_bookArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Category$booksArgs<ExtArgs>
    monthly_featured_book?: boolean | Category$monthly_featured_bookArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      books: Prisma.$bookPayload<ExtArgs>[]
      monthly_featured_book: Prisma.$monthly_featured_bookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Category$booksArgs<ExtArgs> = {}>(args?: Subset<T, Category$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    monthly_featured_book<T extends Category$monthly_featured_bookArgs<ExtArgs> = {}>(args?: Subset<T, Category$monthly_featured_bookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.books
   */
  export type Category$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    where?: bookWhereInput
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    cursor?: bookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Category.monthly_featured_book
   */
  export type Category$monthly_featured_bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    where?: monthly_featured_bookWhereInput
    orderBy?: monthly_featured_bookOrderByWithRelationInput | monthly_featured_bookOrderByWithRelationInput[]
    cursor?: monthly_featured_bookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Monthly_featured_bookScalarFieldEnum | Monthly_featured_bookScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    price: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type BookSumAggregateOutputType = {
    price: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type BookMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    description: string | null
    cover: string | null
    coverPath: string | null
    filePath: string | null
    categoryId: string | null
    price: number | null
    rating: number | null
    reviewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    monthlyCandidate: boolean | null
  }

  export type BookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    description: string | null
    cover: string | null
    coverPath: string | null
    filePath: string | null
    categoryId: string | null
    price: number | null
    rating: number | null
    reviewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    monthlyCandidate: boolean | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    description: number
    cover: number
    coverPath: number
    filePath: number
    categoryId: number
    price: number
    rating: number
    reviewCount: number
    createdAt: number
    updatedAt: number
    monthlyCandidate: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    price?: true
    rating?: true
    reviewCount?: true
  }

  export type BookSumAggregateInputType = {
    price?: true
    rating?: true
    reviewCount?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    cover?: true
    coverPath?: true
    filePath?: true
    categoryId?: true
    price?: true
    rating?: true
    reviewCount?: true
    createdAt?: true
    updatedAt?: true
    monthlyCandidate?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    cover?: true
    coverPath?: true
    filePath?: true
    categoryId?: true
    price?: true
    rating?: true
    reviewCount?: true
    createdAt?: true
    updatedAt?: true
    monthlyCandidate?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    cover?: true
    coverPath?: true
    filePath?: true
    categoryId?: true
    price?: true
    rating?: true
    reviewCount?: true
    createdAt?: true
    updatedAt?: true
    monthlyCandidate?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book to aggregate.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
    orderBy?: bookOrderByWithAggregationInput | bookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: string
    title: string
    author: string
    description: string
    cover: string | null
    coverPath: string | null
    filePath: string | null
    categoryId: string
    price: number
    rating: number | null
    reviewCount: number | null
    createdAt: Date
    updatedAt: Date
    monthlyCandidate: boolean | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    cover?: boolean
    coverPath?: boolean
    filePath?: boolean
    categoryId?: boolean
    price?: boolean
    rating?: boolean
    reviewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthlyCandidate?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    favoriteByUsers?: boolean | book$favoriteByUsersArgs<ExtArgs>
    user_book_readerId?: boolean | book$user_book_readerIdArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    cover?: boolean
    coverPath?: boolean
    filePath?: boolean
    categoryId?: boolean
    price?: boolean
    rating?: boolean
    reviewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthlyCandidate?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    cover?: boolean
    coverPath?: boolean
    filePath?: boolean
    categoryId?: boolean
    price?: boolean
    rating?: boolean
    reviewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthlyCandidate?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    cover?: boolean
    coverPath?: boolean
    filePath?: boolean
    categoryId?: boolean
    price?: boolean
    rating?: boolean
    reviewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    monthlyCandidate?: boolean
  }

  export type bookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "description" | "cover" | "coverPath" | "filePath" | "categoryId" | "price" | "rating" | "reviewCount" | "createdAt" | "updatedAt" | "monthlyCandidate", ExtArgs["result"]["book"]>
  export type bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    favoriteByUsers?: boolean | book$favoriteByUsersArgs<ExtArgs>
    user_book_readerId?: boolean | book$user_book_readerIdArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type bookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      favoriteByUsers: Prisma.$userPayload<ExtArgs>[]
      user_book_readerId: Prisma.$user_book_readerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      description: string
      cover: string | null
      coverPath: string | null
      filePath: string | null
      categoryId: string
      price: number
      rating: number | null
      reviewCount: number | null
      createdAt: Date
      updatedAt: Date
      monthlyCandidate: boolean | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type bookGetPayload<S extends boolean | null | undefined | bookDefaultArgs> = $Result.GetResult<Prisma.$bookPayload, S>

  type bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book'], meta: { name: 'book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {bookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookFindUniqueArgs>(args: SelectSubset<T, bookFindUniqueArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookFindUniqueOrThrowArgs>(args: SelectSubset<T, bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookFindFirstArgs>(args?: SelectSubset<T, bookFindFirstArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookFindFirstOrThrowArgs>(args?: SelectSubset<T, bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookFindManyArgs>(args?: SelectSubset<T, bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {bookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends bookCreateArgs>(args: SelectSubset<T, bookCreateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {bookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookCreateManyArgs>(args?: SelectSubset<T, bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {bookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookCreateManyAndReturnArgs>(args?: SelectSubset<T, bookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {bookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends bookDeleteArgs>(args: SelectSubset<T, bookDeleteArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {bookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookUpdateArgs>(args: SelectSubset<T, bookUpdateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {bookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookDeleteManyArgs>(args?: SelectSubset<T, bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookUpdateManyArgs>(args: SelectSubset<T, bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {bookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends bookUpdateManyAndReturnArgs>(args: SelectSubset<T, bookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {bookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends bookUpsertArgs>(args: SelectSubset<T, bookUpsertArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends bookCountArgs>(
      args?: Subset<T, bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookGroupByArgs} args - Group by arguments.
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
      T extends bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookGroupByArgs['orderBy'] }
        : { orderBy?: bookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book model
   */
  readonly fields: bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    favoriteByUsers<T extends book$favoriteByUsersArgs<ExtArgs> = {}>(args?: Subset<T, book$favoriteByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_book_readerId<T extends book$user_book_readerIdArgs<ExtArgs> = {}>(args?: Subset<T, book$user_book_readerIdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book model
   */
  interface bookFieldRefs {
    readonly id: FieldRef<"book", 'String'>
    readonly title: FieldRef<"book", 'String'>
    readonly author: FieldRef<"book", 'String'>
    readonly description: FieldRef<"book", 'String'>
    readonly cover: FieldRef<"book", 'String'>
    readonly coverPath: FieldRef<"book", 'String'>
    readonly filePath: FieldRef<"book", 'String'>
    readonly categoryId: FieldRef<"book", 'String'>
    readonly price: FieldRef<"book", 'Float'>
    readonly rating: FieldRef<"book", 'Float'>
    readonly reviewCount: FieldRef<"book", 'Int'>
    readonly createdAt: FieldRef<"book", 'DateTime'>
    readonly updatedAt: FieldRef<"book", 'DateTime'>
    readonly monthlyCandidate: FieldRef<"book", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * book findUnique
   */
  export type bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findUniqueOrThrow
   */
  export type bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findFirst
   */
  export type bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findFirstOrThrow
   */
  export type bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findMany
   */
  export type bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book create
   */
  export type bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to create a book.
     */
    data: XOR<bookCreateInput, bookUncheckedCreateInput>
  }

  /**
   * book createMany
   */
  export type bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book createManyAndReturn
   */
  export type bookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * book update
   */
  export type bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to update a book.
     */
    data: XOR<bookUpdateInput, bookUncheckedUpdateInput>
    /**
     * Choose, which book to update.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book updateMany
   */
  export type bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * book updateManyAndReturn
   */
  export type bookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * book upsert
   */
  export type bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The filter to search for the book to update in case it exists.
     */
    where: bookWhereUniqueInput
    /**
     * In case the book found by the `where` argument doesn't exist, create a new book with this data.
     */
    create: XOR<bookCreateInput, bookUncheckedCreateInput>
    /**
     * In case the book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookUpdateInput, bookUncheckedUpdateInput>
  }

  /**
   * book delete
   */
  export type bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter which book to delete.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book deleteMany
   */
  export type bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: bookWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * book.favoriteByUsers
   */
  export type book$favoriteByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * book.user_book_readerId
   */
  export type book$user_book_readerIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    where?: user_book_readerWhereInput
    orderBy?: user_book_readerOrderByWithRelationInput | user_book_readerOrderByWithRelationInput[]
    cursor?: user_book_readerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_book_readerScalarFieldEnum | User_book_readerScalarFieldEnum[]
  }

  /**
   * book without action
   */
  export type bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the book
     */
    omit?: bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
  }


  /**
   * Model passwordReset
   */

  export type AggregatePasswordReset = {
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  export type PasswordResetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type PasswordResetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type PasswordResetCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expires: number
    createdAt: number
    _all: number
  }


  export type PasswordResetMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    createdAt?: true
  }

  export type PasswordResetMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    createdAt?: true
  }

  export type PasswordResetCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwordReset to aggregate.
     */
    where?: passwordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResets to fetch.
     */
    orderBy?: passwordResetOrderByWithRelationInput | passwordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: passwordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned passwordResets
    **/
    _count?: true | PasswordResetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetMaxAggregateInputType
  }

  export type GetPasswordResetAggregateType<T extends PasswordResetAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordReset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordReset[P]>
      : GetScalarType<T[P], AggregatePasswordReset[P]>
  }




  export type passwordResetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: passwordResetWhereInput
    orderBy?: passwordResetOrderByWithAggregationInput | passwordResetOrderByWithAggregationInput[]
    by: PasswordResetScalarFieldEnum[] | PasswordResetScalarFieldEnum
    having?: passwordResetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetCountAggregateInputType | true
    _min?: PasswordResetMinAggregateInputType
    _max?: PasswordResetMaxAggregateInputType
  }

  export type PasswordResetGroupByOutputType = {
    id: string
    userId: string
    token: string
    expires: Date
    createdAt: Date
    _count: PasswordResetCountAggregateOutputType | null
    _min: PasswordResetMinAggregateOutputType | null
    _max: PasswordResetMaxAggregateOutputType | null
  }

  type GetPasswordResetGroupByPayload<T extends passwordResetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetGroupByOutputType[P]>
        }
      >
    >


  export type passwordResetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type passwordResetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type passwordResetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordReset"]>

  export type passwordResetSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }

  export type passwordResetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expires" | "createdAt", ExtArgs["result"]["passwordReset"]>
  export type passwordResetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type passwordResetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type passwordResetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $passwordResetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "passwordReset"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expires: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordReset"]>
    composites: {}
  }

  type passwordResetGetPayload<S extends boolean | null | undefined | passwordResetDefaultArgs> = $Result.GetResult<Prisma.$passwordResetPayload, S>

  type passwordResetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<passwordResetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetCountAggregateInputType | true
    }

  export interface passwordResetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['passwordReset'], meta: { name: 'passwordReset' } }
    /**
     * Find zero or one PasswordReset that matches the filter.
     * @param {passwordResetFindUniqueArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends passwordResetFindUniqueArgs>(args: SelectSubset<T, passwordResetFindUniqueArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordReset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {passwordResetFindUniqueOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends passwordResetFindUniqueOrThrowArgs>(args: SelectSubset<T, passwordResetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetFindFirstArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends passwordResetFindFirstArgs>(args?: SelectSubset<T, passwordResetFindFirstArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordReset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetFindFirstOrThrowArgs} args - Arguments to find a PasswordReset
     * @example
     * // Get one PasswordReset
     * const passwordReset = await prisma.passwordReset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends passwordResetFindFirstOrThrowArgs>(args?: SelectSubset<T, passwordResetFindFirstOrThrowArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany()
     * 
     * // Get first 10 PasswordResets
     * const passwordResets = await prisma.passwordReset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends passwordResetFindManyArgs>(args?: SelectSubset<T, passwordResetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordReset.
     * @param {passwordResetCreateArgs} args - Arguments to create a PasswordReset.
     * @example
     * // Create one PasswordReset
     * const PasswordReset = await prisma.passwordReset.create({
     *   data: {
     *     // ... data to create a PasswordReset
     *   }
     * })
     * 
     */
    create<T extends passwordResetCreateArgs>(args: SelectSubset<T, passwordResetCreateArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResets.
     * @param {passwordResetCreateManyArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends passwordResetCreateManyArgs>(args?: SelectSubset<T, passwordResetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResets and returns the data saved in the database.
     * @param {passwordResetCreateManyAndReturnArgs} args - Arguments to create many PasswordResets.
     * @example
     * // Create many PasswordResets
     * const passwordReset = await prisma.passwordReset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends passwordResetCreateManyAndReturnArgs>(args?: SelectSubset<T, passwordResetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordReset.
     * @param {passwordResetDeleteArgs} args - Arguments to delete one PasswordReset.
     * @example
     * // Delete one PasswordReset
     * const PasswordReset = await prisma.passwordReset.delete({
     *   where: {
     *     // ... filter to delete one PasswordReset
     *   }
     * })
     * 
     */
    delete<T extends passwordResetDeleteArgs>(args: SelectSubset<T, passwordResetDeleteArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordReset.
     * @param {passwordResetUpdateArgs} args - Arguments to update one PasswordReset.
     * @example
     * // Update one PasswordReset
     * const passwordReset = await prisma.passwordReset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends passwordResetUpdateArgs>(args: SelectSubset<T, passwordResetUpdateArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResets.
     * @param {passwordResetDeleteManyArgs} args - Arguments to filter PasswordResets to delete.
     * @example
     * // Delete a few PasswordResets
     * const { count } = await prisma.passwordReset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends passwordResetDeleteManyArgs>(args?: SelectSubset<T, passwordResetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends passwordResetUpdateManyArgs>(args: SelectSubset<T, passwordResetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResets and returns the data updated in the database.
     * @param {passwordResetUpdateManyAndReturnArgs} args - Arguments to update many PasswordResets.
     * @example
     * // Update many PasswordResets
     * const passwordReset = await prisma.passwordReset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResets and only return the `id`
     * const passwordResetWithIdOnly = await prisma.passwordReset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends passwordResetUpdateManyAndReturnArgs>(args: SelectSubset<T, passwordResetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordReset.
     * @param {passwordResetUpsertArgs} args - Arguments to update or create a PasswordReset.
     * @example
     * // Update or create a PasswordReset
     * const passwordReset = await prisma.passwordReset.upsert({
     *   create: {
     *     // ... data to create a PasswordReset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordReset we want to update
     *   }
     * })
     */
    upsert<T extends passwordResetUpsertArgs>(args: SelectSubset<T, passwordResetUpsertArgs<ExtArgs>>): Prisma__passwordResetClient<$Result.GetResult<Prisma.$passwordResetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetCountArgs} args - Arguments to filter PasswordResets to count.
     * @example
     * // Count the number of PasswordResets
     * const count = await prisma.passwordReset.count({
     *   where: {
     *     // ... the filter for the PasswordResets we want to count
     *   }
     * })
    **/
    count<T extends passwordResetCountArgs>(
      args?: Subset<T, passwordResetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetAggregateArgs>(args: Subset<T, PasswordResetAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetAggregateType<T>>

    /**
     * Group by PasswordReset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passwordResetGroupByArgs} args - Group by arguments.
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
      T extends passwordResetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: passwordResetGroupByArgs['orderBy'] }
        : { orderBy?: passwordResetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, passwordResetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the passwordReset model
   */
  readonly fields: passwordResetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for passwordReset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__passwordResetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the passwordReset model
   */
  interface passwordResetFieldRefs {
    readonly id: FieldRef<"passwordReset", 'String'>
    readonly userId: FieldRef<"passwordReset", 'String'>
    readonly token: FieldRef<"passwordReset", 'String'>
    readonly expires: FieldRef<"passwordReset", 'DateTime'>
    readonly createdAt: FieldRef<"passwordReset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * passwordReset findUnique
   */
  export type passwordResetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * Filter, which passwordReset to fetch.
     */
    where: passwordResetWhereUniqueInput
  }

  /**
   * passwordReset findUniqueOrThrow
   */
  export type passwordResetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * Filter, which passwordReset to fetch.
     */
    where: passwordResetWhereUniqueInput
  }

  /**
   * passwordReset findFirst
   */
  export type passwordResetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * Filter, which passwordReset to fetch.
     */
    where?: passwordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResets to fetch.
     */
    orderBy?: passwordResetOrderByWithRelationInput | passwordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwordResets.
     */
    cursor?: passwordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * passwordReset findFirstOrThrow
   */
  export type passwordResetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * Filter, which passwordReset to fetch.
     */
    where?: passwordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResets to fetch.
     */
    orderBy?: passwordResetOrderByWithRelationInput | passwordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passwordResets.
     */
    cursor?: passwordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passwordResets.
     */
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * passwordReset findMany
   */
  export type passwordResetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * Filter, which passwordResets to fetch.
     */
    where?: passwordResetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passwordResets to fetch.
     */
    orderBy?: passwordResetOrderByWithRelationInput | passwordResetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing passwordResets.
     */
    cursor?: passwordResetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passwordResets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passwordResets.
     */
    skip?: number
    distinct?: PasswordResetScalarFieldEnum | PasswordResetScalarFieldEnum[]
  }

  /**
   * passwordReset create
   */
  export type passwordResetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * The data needed to create a passwordReset.
     */
    data: XOR<passwordResetCreateInput, passwordResetUncheckedCreateInput>
  }

  /**
   * passwordReset createMany
   */
  export type passwordResetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many passwordResets.
     */
    data: passwordResetCreateManyInput | passwordResetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * passwordReset createManyAndReturn
   */
  export type passwordResetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * The data used to create many passwordResets.
     */
    data: passwordResetCreateManyInput | passwordResetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * passwordReset update
   */
  export type passwordResetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * The data needed to update a passwordReset.
     */
    data: XOR<passwordResetUpdateInput, passwordResetUncheckedUpdateInput>
    /**
     * Choose, which passwordReset to update.
     */
    where: passwordResetWhereUniqueInput
  }

  /**
   * passwordReset updateMany
   */
  export type passwordResetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update passwordResets.
     */
    data: XOR<passwordResetUpdateManyMutationInput, passwordResetUncheckedUpdateManyInput>
    /**
     * Filter which passwordResets to update
     */
    where?: passwordResetWhereInput
    /**
     * Limit how many passwordResets to update.
     */
    limit?: number
  }

  /**
   * passwordReset updateManyAndReturn
   */
  export type passwordResetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * The data used to update passwordResets.
     */
    data: XOR<passwordResetUpdateManyMutationInput, passwordResetUncheckedUpdateManyInput>
    /**
     * Filter which passwordResets to update
     */
    where?: passwordResetWhereInput
    /**
     * Limit how many passwordResets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * passwordReset upsert
   */
  export type passwordResetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * The filter to search for the passwordReset to update in case it exists.
     */
    where: passwordResetWhereUniqueInput
    /**
     * In case the passwordReset found by the `where` argument doesn't exist, create a new passwordReset with this data.
     */
    create: XOR<passwordResetCreateInput, passwordResetUncheckedCreateInput>
    /**
     * In case the passwordReset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<passwordResetUpdateInput, passwordResetUncheckedUpdateInput>
  }

  /**
   * passwordReset delete
   */
  export type passwordResetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
    /**
     * Filter which passwordReset to delete.
     */
    where: passwordResetWhereUniqueInput
  }

  /**
   * passwordReset deleteMany
   */
  export type passwordResetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passwordResets to delete
     */
    where?: passwordResetWhereInput
    /**
     * Limit how many passwordResets to delete.
     */
    limit?: number
  }

  /**
   * passwordReset without action
   */
  export type passwordResetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passwordReset
     */
    select?: passwordResetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passwordReset
     */
    omit?: passwordResetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passwordResetInclude<ExtArgs> | null
  }


  /**
   * Model monthly_featured_book
   */

  export type AggregateMonthly_featured_book = {
    _count: Monthly_featured_bookCountAggregateOutputType | null
    _avg: Monthly_featured_bookAvgAggregateOutputType | null
    _sum: Monthly_featured_bookSumAggregateOutputType | null
    _min: Monthly_featured_bookMinAggregateOutputType | null
    _max: Monthly_featured_bookMaxAggregateOutputType | null
  }

  export type Monthly_featured_bookAvgAggregateOutputType = {
    price: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type Monthly_featured_bookSumAggregateOutputType = {
    price: number | null
    rating: number | null
    reviewCount: number | null
  }

  export type Monthly_featured_bookMinAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    description: string | null
    cover: string | null
    coverPath: string | null
    filePath: string | null
    categoryId: string | null
    price: number | null
    rating: number | null
    reviewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    originalBookId: string | null
    monthlyCandidate: boolean | null
  }

  export type Monthly_featured_bookMaxAggregateOutputType = {
    id: string | null
    title: string | null
    author: string | null
    description: string | null
    cover: string | null
    coverPath: string | null
    filePath: string | null
    categoryId: string | null
    price: number | null
    rating: number | null
    reviewCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    originalBookId: string | null
    monthlyCandidate: boolean | null
  }

  export type Monthly_featured_bookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    description: number
    cover: number
    coverPath: number
    filePath: number
    categoryId: number
    price: number
    rating: number
    reviewCount: number
    createdAt: number
    updatedAt: number
    originalBookId: number
    monthlyCandidate: number
    _all: number
  }


  export type Monthly_featured_bookAvgAggregateInputType = {
    price?: true
    rating?: true
    reviewCount?: true
  }

  export type Monthly_featured_bookSumAggregateInputType = {
    price?: true
    rating?: true
    reviewCount?: true
  }

  export type Monthly_featured_bookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    cover?: true
    coverPath?: true
    filePath?: true
    categoryId?: true
    price?: true
    rating?: true
    reviewCount?: true
    createdAt?: true
    updatedAt?: true
    originalBookId?: true
    monthlyCandidate?: true
  }

  export type Monthly_featured_bookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    cover?: true
    coverPath?: true
    filePath?: true
    categoryId?: true
    price?: true
    rating?: true
    reviewCount?: true
    createdAt?: true
    updatedAt?: true
    originalBookId?: true
    monthlyCandidate?: true
  }

  export type Monthly_featured_bookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    description?: true
    cover?: true
    coverPath?: true
    filePath?: true
    categoryId?: true
    price?: true
    rating?: true
    reviewCount?: true
    createdAt?: true
    updatedAt?: true
    originalBookId?: true
    monthlyCandidate?: true
    _all?: true
  }

  export type Monthly_featured_bookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monthly_featured_book to aggregate.
     */
    where?: monthly_featured_bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_featured_books to fetch.
     */
    orderBy?: monthly_featured_bookOrderByWithRelationInput | monthly_featured_bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: monthly_featured_bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_featured_books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_featured_books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned monthly_featured_books
    **/
    _count?: true | Monthly_featured_bookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Monthly_featured_bookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Monthly_featured_bookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Monthly_featured_bookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Monthly_featured_bookMaxAggregateInputType
  }

  export type GetMonthly_featured_bookAggregateType<T extends Monthly_featured_bookAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthly_featured_book]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthly_featured_book[P]>
      : GetScalarType<T[P], AggregateMonthly_featured_book[P]>
  }




  export type monthly_featured_bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: monthly_featured_bookWhereInput
    orderBy?: monthly_featured_bookOrderByWithAggregationInput | monthly_featured_bookOrderByWithAggregationInput[]
    by: Monthly_featured_bookScalarFieldEnum[] | Monthly_featured_bookScalarFieldEnum
    having?: monthly_featured_bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Monthly_featured_bookCountAggregateInputType | true
    _avg?: Monthly_featured_bookAvgAggregateInputType
    _sum?: Monthly_featured_bookSumAggregateInputType
    _min?: Monthly_featured_bookMinAggregateInputType
    _max?: Monthly_featured_bookMaxAggregateInputType
  }

  export type Monthly_featured_bookGroupByOutputType = {
    id: string
    title: string
    author: string
    description: string
    cover: string | null
    coverPath: string | null
    filePath: string | null
    categoryId: string
    price: number
    rating: number | null
    reviewCount: number | null
    createdAt: Date
    updatedAt: Date
    originalBookId: string | null
    monthlyCandidate: boolean | null
    _count: Monthly_featured_bookCountAggregateOutputType | null
    _avg: Monthly_featured_bookAvgAggregateOutputType | null
    _sum: Monthly_featured_bookSumAggregateOutputType | null
    _min: Monthly_featured_bookMinAggregateOutputType | null
    _max: Monthly_featured_bookMaxAggregateOutputType | null
  }

  type GetMonthly_featured_bookGroupByPayload<T extends monthly_featured_bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Monthly_featured_bookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Monthly_featured_bookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Monthly_featured_bookGroupByOutputType[P]>
            : GetScalarType<T[P], Monthly_featured_bookGroupByOutputType[P]>
        }
      >
    >


  export type monthly_featured_bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    cover?: boolean
    coverPath?: boolean
    filePath?: boolean
    categoryId?: boolean
    price?: boolean
    rating?: boolean
    reviewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalBookId?: boolean
    monthlyCandidate?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user_book_readerId?: boolean | monthly_featured_book$user_book_readerIdArgs<ExtArgs>
    user?: boolean | monthly_featured_book$userArgs<ExtArgs>
    _count?: boolean | Monthly_featured_bookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthly_featured_book"]>

  export type monthly_featured_bookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    cover?: boolean
    coverPath?: boolean
    filePath?: boolean
    categoryId?: boolean
    price?: boolean
    rating?: boolean
    reviewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalBookId?: boolean
    monthlyCandidate?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthly_featured_book"]>

  export type monthly_featured_bookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    cover?: boolean
    coverPath?: boolean
    filePath?: boolean
    categoryId?: boolean
    price?: boolean
    rating?: boolean
    reviewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalBookId?: boolean
    monthlyCandidate?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["monthly_featured_book"]>

  export type monthly_featured_bookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    description?: boolean
    cover?: boolean
    coverPath?: boolean
    filePath?: boolean
    categoryId?: boolean
    price?: boolean
    rating?: boolean
    reviewCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    originalBookId?: boolean
    monthlyCandidate?: boolean
  }

  export type monthly_featured_bookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "description" | "cover" | "coverPath" | "filePath" | "categoryId" | "price" | "rating" | "reviewCount" | "createdAt" | "updatedAt" | "originalBookId" | "monthlyCandidate", ExtArgs["result"]["monthly_featured_book"]>
  export type monthly_featured_bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user_book_readerId?: boolean | monthly_featured_book$user_book_readerIdArgs<ExtArgs>
    user?: boolean | monthly_featured_book$userArgs<ExtArgs>
    _count?: boolean | Monthly_featured_bookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type monthly_featured_bookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type monthly_featured_bookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $monthly_featured_bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "monthly_featured_book"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      user_book_readerId: Prisma.$user_book_readerPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      author: string
      description: string
      cover: string | null
      coverPath: string | null
      filePath: string | null
      categoryId: string
      price: number
      rating: number | null
      reviewCount: number | null
      createdAt: Date
      updatedAt: Date
      originalBookId: string | null
      monthlyCandidate: boolean | null
    }, ExtArgs["result"]["monthly_featured_book"]>
    composites: {}
  }

  type monthly_featured_bookGetPayload<S extends boolean | null | undefined | monthly_featured_bookDefaultArgs> = $Result.GetResult<Prisma.$monthly_featured_bookPayload, S>

  type monthly_featured_bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<monthly_featured_bookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Monthly_featured_bookCountAggregateInputType | true
    }

  export interface monthly_featured_bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['monthly_featured_book'], meta: { name: 'monthly_featured_book' } }
    /**
     * Find zero or one Monthly_featured_book that matches the filter.
     * @param {monthly_featured_bookFindUniqueArgs} args - Arguments to find a Monthly_featured_book
     * @example
     * // Get one Monthly_featured_book
     * const monthly_featured_book = await prisma.monthly_featured_book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends monthly_featured_bookFindUniqueArgs>(args: SelectSubset<T, monthly_featured_bookFindUniqueArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monthly_featured_book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {monthly_featured_bookFindUniqueOrThrowArgs} args - Arguments to find a Monthly_featured_book
     * @example
     * // Get one Monthly_featured_book
     * const monthly_featured_book = await prisma.monthly_featured_book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends monthly_featured_bookFindUniqueOrThrowArgs>(args: SelectSubset<T, monthly_featured_bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monthly_featured_book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_featured_bookFindFirstArgs} args - Arguments to find a Monthly_featured_book
     * @example
     * // Get one Monthly_featured_book
     * const monthly_featured_book = await prisma.monthly_featured_book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends monthly_featured_bookFindFirstArgs>(args?: SelectSubset<T, monthly_featured_bookFindFirstArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monthly_featured_book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_featured_bookFindFirstOrThrowArgs} args - Arguments to find a Monthly_featured_book
     * @example
     * // Get one Monthly_featured_book
     * const monthly_featured_book = await prisma.monthly_featured_book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends monthly_featured_bookFindFirstOrThrowArgs>(args?: SelectSubset<T, monthly_featured_bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monthly_featured_books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_featured_bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monthly_featured_books
     * const monthly_featured_books = await prisma.monthly_featured_book.findMany()
     * 
     * // Get first 10 Monthly_featured_books
     * const monthly_featured_books = await prisma.monthly_featured_book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthly_featured_bookWithIdOnly = await prisma.monthly_featured_book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends monthly_featured_bookFindManyArgs>(args?: SelectSubset<T, monthly_featured_bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monthly_featured_book.
     * @param {monthly_featured_bookCreateArgs} args - Arguments to create a Monthly_featured_book.
     * @example
     * // Create one Monthly_featured_book
     * const Monthly_featured_book = await prisma.monthly_featured_book.create({
     *   data: {
     *     // ... data to create a Monthly_featured_book
     *   }
     * })
     * 
     */
    create<T extends monthly_featured_bookCreateArgs>(args: SelectSubset<T, monthly_featured_bookCreateArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monthly_featured_books.
     * @param {monthly_featured_bookCreateManyArgs} args - Arguments to create many Monthly_featured_books.
     * @example
     * // Create many Monthly_featured_books
     * const monthly_featured_book = await prisma.monthly_featured_book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends monthly_featured_bookCreateManyArgs>(args?: SelectSubset<T, monthly_featured_bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monthly_featured_books and returns the data saved in the database.
     * @param {monthly_featured_bookCreateManyAndReturnArgs} args - Arguments to create many Monthly_featured_books.
     * @example
     * // Create many Monthly_featured_books
     * const monthly_featured_book = await prisma.monthly_featured_book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monthly_featured_books and only return the `id`
     * const monthly_featured_bookWithIdOnly = await prisma.monthly_featured_book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends monthly_featured_bookCreateManyAndReturnArgs>(args?: SelectSubset<T, monthly_featured_bookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monthly_featured_book.
     * @param {monthly_featured_bookDeleteArgs} args - Arguments to delete one Monthly_featured_book.
     * @example
     * // Delete one Monthly_featured_book
     * const Monthly_featured_book = await prisma.monthly_featured_book.delete({
     *   where: {
     *     // ... filter to delete one Monthly_featured_book
     *   }
     * })
     * 
     */
    delete<T extends monthly_featured_bookDeleteArgs>(args: SelectSubset<T, monthly_featured_bookDeleteArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monthly_featured_book.
     * @param {monthly_featured_bookUpdateArgs} args - Arguments to update one Monthly_featured_book.
     * @example
     * // Update one Monthly_featured_book
     * const monthly_featured_book = await prisma.monthly_featured_book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends monthly_featured_bookUpdateArgs>(args: SelectSubset<T, monthly_featured_bookUpdateArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monthly_featured_books.
     * @param {monthly_featured_bookDeleteManyArgs} args - Arguments to filter Monthly_featured_books to delete.
     * @example
     * // Delete a few Monthly_featured_books
     * const { count } = await prisma.monthly_featured_book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends monthly_featured_bookDeleteManyArgs>(args?: SelectSubset<T, monthly_featured_bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monthly_featured_books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_featured_bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monthly_featured_books
     * const monthly_featured_book = await prisma.monthly_featured_book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends monthly_featured_bookUpdateManyArgs>(args: SelectSubset<T, monthly_featured_bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monthly_featured_books and returns the data updated in the database.
     * @param {monthly_featured_bookUpdateManyAndReturnArgs} args - Arguments to update many Monthly_featured_books.
     * @example
     * // Update many Monthly_featured_books
     * const monthly_featured_book = await prisma.monthly_featured_book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monthly_featured_books and only return the `id`
     * const monthly_featured_bookWithIdOnly = await prisma.monthly_featured_book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends monthly_featured_bookUpdateManyAndReturnArgs>(args: SelectSubset<T, monthly_featured_bookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monthly_featured_book.
     * @param {monthly_featured_bookUpsertArgs} args - Arguments to update or create a Monthly_featured_book.
     * @example
     * // Update or create a Monthly_featured_book
     * const monthly_featured_book = await prisma.monthly_featured_book.upsert({
     *   create: {
     *     // ... data to create a Monthly_featured_book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monthly_featured_book we want to update
     *   }
     * })
     */
    upsert<T extends monthly_featured_bookUpsertArgs>(args: SelectSubset<T, monthly_featured_bookUpsertArgs<ExtArgs>>): Prisma__monthly_featured_bookClient<$Result.GetResult<Prisma.$monthly_featured_bookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monthly_featured_books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_featured_bookCountArgs} args - Arguments to filter Monthly_featured_books to count.
     * @example
     * // Count the number of Monthly_featured_books
     * const count = await prisma.monthly_featured_book.count({
     *   where: {
     *     // ... the filter for the Monthly_featured_books we want to count
     *   }
     * })
    **/
    count<T extends monthly_featured_bookCountArgs>(
      args?: Subset<T, monthly_featured_bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Monthly_featured_bookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monthly_featured_book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Monthly_featured_bookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Monthly_featured_bookAggregateArgs>(args: Subset<T, Monthly_featured_bookAggregateArgs>): Prisma.PrismaPromise<GetMonthly_featured_bookAggregateType<T>>

    /**
     * Group by Monthly_featured_book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {monthly_featured_bookGroupByArgs} args - Group by arguments.
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
      T extends monthly_featured_bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: monthly_featured_bookGroupByArgs['orderBy'] }
        : { orderBy?: monthly_featured_bookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, monthly_featured_bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthly_featured_bookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the monthly_featured_book model
   */
  readonly fields: monthly_featured_bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for monthly_featured_book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__monthly_featured_bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_book_readerId<T extends monthly_featured_book$user_book_readerIdArgs<ExtArgs> = {}>(args?: Subset<T, monthly_featured_book$user_book_readerIdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_book_readerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends monthly_featured_book$userArgs<ExtArgs> = {}>(args?: Subset<T, monthly_featured_book$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the monthly_featured_book model
   */
  interface monthly_featured_bookFieldRefs {
    readonly id: FieldRef<"monthly_featured_book", 'String'>
    readonly title: FieldRef<"monthly_featured_book", 'String'>
    readonly author: FieldRef<"monthly_featured_book", 'String'>
    readonly description: FieldRef<"monthly_featured_book", 'String'>
    readonly cover: FieldRef<"monthly_featured_book", 'String'>
    readonly coverPath: FieldRef<"monthly_featured_book", 'String'>
    readonly filePath: FieldRef<"monthly_featured_book", 'String'>
    readonly categoryId: FieldRef<"monthly_featured_book", 'String'>
    readonly price: FieldRef<"monthly_featured_book", 'Float'>
    readonly rating: FieldRef<"monthly_featured_book", 'Float'>
    readonly reviewCount: FieldRef<"monthly_featured_book", 'Int'>
    readonly createdAt: FieldRef<"monthly_featured_book", 'DateTime'>
    readonly updatedAt: FieldRef<"monthly_featured_book", 'DateTime'>
    readonly originalBookId: FieldRef<"monthly_featured_book", 'String'>
    readonly monthlyCandidate: FieldRef<"monthly_featured_book", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * monthly_featured_book findUnique
   */
  export type monthly_featured_bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * Filter, which monthly_featured_book to fetch.
     */
    where: monthly_featured_bookWhereUniqueInput
  }

  /**
   * monthly_featured_book findUniqueOrThrow
   */
  export type monthly_featured_bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * Filter, which monthly_featured_book to fetch.
     */
    where: monthly_featured_bookWhereUniqueInput
  }

  /**
   * monthly_featured_book findFirst
   */
  export type monthly_featured_bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * Filter, which monthly_featured_book to fetch.
     */
    where?: monthly_featured_bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_featured_books to fetch.
     */
    orderBy?: monthly_featured_bookOrderByWithRelationInput | monthly_featured_bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monthly_featured_books.
     */
    cursor?: monthly_featured_bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_featured_books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_featured_books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monthly_featured_books.
     */
    distinct?: Monthly_featured_bookScalarFieldEnum | Monthly_featured_bookScalarFieldEnum[]
  }

  /**
   * monthly_featured_book findFirstOrThrow
   */
  export type monthly_featured_bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * Filter, which monthly_featured_book to fetch.
     */
    where?: monthly_featured_bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_featured_books to fetch.
     */
    orderBy?: monthly_featured_bookOrderByWithRelationInput | monthly_featured_bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for monthly_featured_books.
     */
    cursor?: monthly_featured_bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_featured_books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_featured_books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of monthly_featured_books.
     */
    distinct?: Monthly_featured_bookScalarFieldEnum | Monthly_featured_bookScalarFieldEnum[]
  }

  /**
   * monthly_featured_book findMany
   */
  export type monthly_featured_bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * Filter, which monthly_featured_books to fetch.
     */
    where?: monthly_featured_bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of monthly_featured_books to fetch.
     */
    orderBy?: monthly_featured_bookOrderByWithRelationInput | monthly_featured_bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing monthly_featured_books.
     */
    cursor?: monthly_featured_bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` monthly_featured_books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` monthly_featured_books.
     */
    skip?: number
    distinct?: Monthly_featured_bookScalarFieldEnum | Monthly_featured_bookScalarFieldEnum[]
  }

  /**
   * monthly_featured_book create
   */
  export type monthly_featured_bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * The data needed to create a monthly_featured_book.
     */
    data: XOR<monthly_featured_bookCreateInput, monthly_featured_bookUncheckedCreateInput>
  }

  /**
   * monthly_featured_book createMany
   */
  export type monthly_featured_bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many monthly_featured_books.
     */
    data: monthly_featured_bookCreateManyInput | monthly_featured_bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * monthly_featured_book createManyAndReturn
   */
  export type monthly_featured_bookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * The data used to create many monthly_featured_books.
     */
    data: monthly_featured_bookCreateManyInput | monthly_featured_bookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * monthly_featured_book update
   */
  export type monthly_featured_bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * The data needed to update a monthly_featured_book.
     */
    data: XOR<monthly_featured_bookUpdateInput, monthly_featured_bookUncheckedUpdateInput>
    /**
     * Choose, which monthly_featured_book to update.
     */
    where: monthly_featured_bookWhereUniqueInput
  }

  /**
   * monthly_featured_book updateMany
   */
  export type monthly_featured_bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update monthly_featured_books.
     */
    data: XOR<monthly_featured_bookUpdateManyMutationInput, monthly_featured_bookUncheckedUpdateManyInput>
    /**
     * Filter which monthly_featured_books to update
     */
    where?: monthly_featured_bookWhereInput
    /**
     * Limit how many monthly_featured_books to update.
     */
    limit?: number
  }

  /**
   * monthly_featured_book updateManyAndReturn
   */
  export type monthly_featured_bookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * The data used to update monthly_featured_books.
     */
    data: XOR<monthly_featured_bookUpdateManyMutationInput, monthly_featured_bookUncheckedUpdateManyInput>
    /**
     * Filter which monthly_featured_books to update
     */
    where?: monthly_featured_bookWhereInput
    /**
     * Limit how many monthly_featured_books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * monthly_featured_book upsert
   */
  export type monthly_featured_bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * The filter to search for the monthly_featured_book to update in case it exists.
     */
    where: monthly_featured_bookWhereUniqueInput
    /**
     * In case the monthly_featured_book found by the `where` argument doesn't exist, create a new monthly_featured_book with this data.
     */
    create: XOR<monthly_featured_bookCreateInput, monthly_featured_bookUncheckedCreateInput>
    /**
     * In case the monthly_featured_book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<monthly_featured_bookUpdateInput, monthly_featured_bookUncheckedUpdateInput>
  }

  /**
   * monthly_featured_book delete
   */
  export type monthly_featured_bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
    /**
     * Filter which monthly_featured_book to delete.
     */
    where: monthly_featured_bookWhereUniqueInput
  }

  /**
   * monthly_featured_book deleteMany
   */
  export type monthly_featured_bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which monthly_featured_books to delete
     */
    where?: monthly_featured_bookWhereInput
    /**
     * Limit how many monthly_featured_books to delete.
     */
    limit?: number
  }

  /**
   * monthly_featured_book.user_book_readerId
   */
  export type monthly_featured_book$user_book_readerIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_book_reader
     */
    select?: user_book_readerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_book_reader
     */
    omit?: user_book_readerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_book_readerInclude<ExtArgs> | null
    where?: user_book_readerWhereInput
    orderBy?: user_book_readerOrderByWithRelationInput | user_book_readerOrderByWithRelationInput[]
    cursor?: user_book_readerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_book_readerScalarFieldEnum | User_book_readerScalarFieldEnum[]
  }

  /**
   * monthly_featured_book.user
   */
  export type monthly_featured_book$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * monthly_featured_book without action
   */
  export type monthly_featured_bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the monthly_featured_book
     */
    select?: monthly_featured_bookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the monthly_featured_book
     */
    omit?: monthly_featured_bookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: monthly_featured_bookInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role',
    subscriptionId: 'subscriptionId',
    subscriptionStatus: 'subscriptionStatus',
    subscriptionPlan: 'subscriptionPlan',
    subscriptionPrice: 'subscriptionPrice',
    subscriptionEndDate: 'subscriptionEndDate',
    monthly_featured_bookId: 'monthly_featured_bookId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_book_readerScalarFieldEnum: {
    id: 'id',
    pagesRead: 'pagesRead',
    pagesRemaining: 'pagesRemaining',
    pagesTotal: 'pagesTotal',
    completed: 'completed',
    userId: 'userId',
    bookId: 'bookId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    monthly_featured_bookId: 'monthly_featured_bookId'
  };

  export type User_book_readerScalarFieldEnum = (typeof User_book_readerScalarFieldEnum)[keyof typeof User_book_readerScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    description: 'description',
    cover: 'cover',
    coverPath: 'coverPath',
    filePath: 'filePath',
    categoryId: 'categoryId',
    price: 'price',
    rating: 'rating',
    reviewCount: 'reviewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    monthlyCandidate: 'monthlyCandidate'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const PasswordResetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt'
  };

  export type PasswordResetScalarFieldEnum = (typeof PasswordResetScalarFieldEnum)[keyof typeof PasswordResetScalarFieldEnum]


  export const Monthly_featured_bookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    description: 'description',
    cover: 'cover',
    coverPath: 'coverPath',
    filePath: 'filePath',
    categoryId: 'categoryId',
    price: 'price',
    rating: 'rating',
    reviewCount: 'reviewCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    originalBookId: 'originalBookId',
    monthlyCandidate: 'monthlyCandidate'
  };

  export type Monthly_featured_bookScalarFieldEnum = (typeof Monthly_featured_bookScalarFieldEnum)[keyof typeof Monthly_featured_bookScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    emailVerified?: DateTimeNullableFilter<"user"> | Date | string | null
    image?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: StringFilter<"user"> | string
    subscriptionId?: StringNullableFilter<"user"> | string | null
    subscriptionStatus?: StringNullableFilter<"user"> | string | null
    subscriptionPlan?: StringNullableFilter<"user"> | string | null
    subscriptionPrice?: FloatNullableFilter<"user"> | number | null
    subscriptionEndDate?: DateTimeNullableFilter<"user"> | Date | string | null
    monthly_featured_bookId?: StringNullableFilter<"user"> | string | null
    favoriteBooks?: BookListRelationFilter
    user_book_reader?: User_book_readerListRelationFilter
    passwordReset?: XOR<PasswordResetNullableScalarRelationFilter, passwordResetWhereInput> | null
    monthly_featured_book?: XOR<Monthly_featured_bookNullableScalarRelationFilter, monthly_featured_bookWhereInput> | null
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrderInput | SortOrder
    subscriptionPlan?: SortOrderInput | SortOrder
    subscriptionPrice?: SortOrderInput | SortOrder
    subscriptionEndDate?: SortOrderInput | SortOrder
    monthly_featured_bookId?: SortOrderInput | SortOrder
    favoriteBooks?: bookOrderByRelationAggregateInput
    user_book_reader?: user_book_readerOrderByRelationAggregateInput
    passwordReset?: passwordResetOrderByWithRelationInput
    monthly_featured_book?: monthly_featured_bookOrderByWithRelationInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    emailVerified?: DateTimeNullableFilter<"user"> | Date | string | null
    image?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: StringFilter<"user"> | string
    subscriptionId?: StringNullableFilter<"user"> | string | null
    subscriptionStatus?: StringNullableFilter<"user"> | string | null
    subscriptionPlan?: StringNullableFilter<"user"> | string | null
    subscriptionPrice?: FloatNullableFilter<"user"> | number | null
    subscriptionEndDate?: DateTimeNullableFilter<"user"> | Date | string | null
    monthly_featured_bookId?: StringNullableFilter<"user"> | string | null
    favoriteBooks?: BookListRelationFilter
    user_book_reader?: User_book_readerListRelationFilter
    passwordReset?: XOR<PasswordResetNullableScalarRelationFilter, passwordResetWhereInput> | null
    monthly_featured_book?: XOR<Monthly_featured_bookNullableScalarRelationFilter, monthly_featured_bookWhereInput> | null
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    subscriptionStatus?: SortOrderInput | SortOrder
    subscriptionPlan?: SortOrderInput | SortOrder
    subscriptionPrice?: SortOrderInput | SortOrder
    subscriptionEndDate?: SortOrderInput | SortOrder
    monthly_featured_bookId?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    role?: StringWithAggregatesFilter<"user"> | string
    subscriptionId?: StringNullableWithAggregatesFilter<"user"> | string | null
    subscriptionStatus?: StringNullableWithAggregatesFilter<"user"> | string | null
    subscriptionPlan?: StringNullableWithAggregatesFilter<"user"> | string | null
    subscriptionPrice?: FloatNullableWithAggregatesFilter<"user"> | number | null
    subscriptionEndDate?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    monthly_featured_bookId?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type user_book_readerWhereInput = {
    AND?: user_book_readerWhereInput | user_book_readerWhereInput[]
    OR?: user_book_readerWhereInput[]
    NOT?: user_book_readerWhereInput | user_book_readerWhereInput[]
    id?: StringFilter<"user_book_reader"> | string
    pagesRead?: IntFilter<"user_book_reader"> | number
    pagesRemaining?: IntFilter<"user_book_reader"> | number
    pagesTotal?: IntFilter<"user_book_reader"> | number
    completed?: BoolFilter<"user_book_reader"> | boolean
    userId?: StringFilter<"user_book_reader"> | string
    bookId?: StringFilter<"user_book_reader"> | string
    createdAt?: DateTimeFilter<"user_book_reader"> | Date | string
    updatedAt?: DateTimeFilter<"user_book_reader"> | Date | string
    monthly_featured_bookId?: StringNullableFilter<"user_book_reader"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    monthly_featured_book?: XOR<Monthly_featured_bookNullableScalarRelationFilter, monthly_featured_bookWhereInput> | null
  }

  export type user_book_readerOrderByWithRelationInput = {
    id?: SortOrder
    pagesRead?: SortOrder
    pagesRemaining?: SortOrder
    pagesTotal?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthly_featured_bookId?: SortOrderInput | SortOrder
    user?: userOrderByWithRelationInput
    book?: bookOrderByWithRelationInput
    monthly_featured_book?: monthly_featured_bookOrderByWithRelationInput
  }

  export type user_book_readerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: user_book_readerWhereInput | user_book_readerWhereInput[]
    OR?: user_book_readerWhereInput[]
    NOT?: user_book_readerWhereInput | user_book_readerWhereInput[]
    pagesRead?: IntFilter<"user_book_reader"> | number
    pagesRemaining?: IntFilter<"user_book_reader"> | number
    pagesTotal?: IntFilter<"user_book_reader"> | number
    completed?: BoolFilter<"user_book_reader"> | boolean
    userId?: StringFilter<"user_book_reader"> | string
    bookId?: StringFilter<"user_book_reader"> | string
    createdAt?: DateTimeFilter<"user_book_reader"> | Date | string
    updatedAt?: DateTimeFilter<"user_book_reader"> | Date | string
    monthly_featured_bookId?: StringNullableFilter<"user_book_reader"> | string | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    book?: XOR<BookScalarRelationFilter, bookWhereInput>
    monthly_featured_book?: XOR<Monthly_featured_bookNullableScalarRelationFilter, monthly_featured_bookWhereInput> | null
  }, "id">

  export type user_book_readerOrderByWithAggregationInput = {
    id?: SortOrder
    pagesRead?: SortOrder
    pagesRemaining?: SortOrder
    pagesTotal?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthly_featured_bookId?: SortOrderInput | SortOrder
    _count?: user_book_readerCountOrderByAggregateInput
    _avg?: user_book_readerAvgOrderByAggregateInput
    _max?: user_book_readerMaxOrderByAggregateInput
    _min?: user_book_readerMinOrderByAggregateInput
    _sum?: user_book_readerSumOrderByAggregateInput
  }

  export type user_book_readerScalarWhereWithAggregatesInput = {
    AND?: user_book_readerScalarWhereWithAggregatesInput | user_book_readerScalarWhereWithAggregatesInput[]
    OR?: user_book_readerScalarWhereWithAggregatesInput[]
    NOT?: user_book_readerScalarWhereWithAggregatesInput | user_book_readerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user_book_reader"> | string
    pagesRead?: IntWithAggregatesFilter<"user_book_reader"> | number
    pagesRemaining?: IntWithAggregatesFilter<"user_book_reader"> | number
    pagesTotal?: IntWithAggregatesFilter<"user_book_reader"> | number
    completed?: BoolWithAggregatesFilter<"user_book_reader"> | boolean
    userId?: StringWithAggregatesFilter<"user_book_reader"> | string
    bookId?: StringWithAggregatesFilter<"user_book_reader"> | string
    createdAt?: DateTimeWithAggregatesFilter<"user_book_reader"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user_book_reader"> | Date | string
    monthly_featured_bookId?: StringNullableWithAggregatesFilter<"user_book_reader"> | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    books?: BookListRelationFilter
    monthly_featured_book?: Monthly_featured_bookListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: bookOrderByRelationAggregateInput
    monthly_featured_book?: monthly_featured_bookOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    books?: BookListRelationFilter
    monthly_featured_book?: Monthly_featured_bookListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type bookWhereInput = {
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    id?: StringFilter<"book"> | string
    title?: StringFilter<"book"> | string
    author?: StringFilter<"book"> | string
    description?: StringFilter<"book"> | string
    cover?: StringNullableFilter<"book"> | string | null
    coverPath?: StringNullableFilter<"book"> | string | null
    filePath?: StringNullableFilter<"book"> | string | null
    categoryId?: StringFilter<"book"> | string
    price?: FloatFilter<"book"> | number
    rating?: FloatNullableFilter<"book"> | number | null
    reviewCount?: IntNullableFilter<"book"> | number | null
    createdAt?: DateTimeFilter<"book"> | Date | string
    updatedAt?: DateTimeFilter<"book"> | Date | string
    monthlyCandidate?: BoolNullableFilter<"book"> | boolean | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    favoriteByUsers?: UserListRelationFilter
    user_book_readerId?: User_book_readerListRelationFilter
  }

  export type bookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrderInput | SortOrder
    coverPath?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCandidate?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    favoriteByUsers?: userOrderByRelationAggregateInput
    user_book_readerId?: user_book_readerOrderByRelationAggregateInput
  }

  export type bookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    title?: StringFilter<"book"> | string
    author?: StringFilter<"book"> | string
    description?: StringFilter<"book"> | string
    cover?: StringNullableFilter<"book"> | string | null
    coverPath?: StringNullableFilter<"book"> | string | null
    filePath?: StringNullableFilter<"book"> | string | null
    categoryId?: StringFilter<"book"> | string
    price?: FloatFilter<"book"> | number
    rating?: FloatNullableFilter<"book"> | number | null
    reviewCount?: IntNullableFilter<"book"> | number | null
    createdAt?: DateTimeFilter<"book"> | Date | string
    updatedAt?: DateTimeFilter<"book"> | Date | string
    monthlyCandidate?: BoolNullableFilter<"book"> | boolean | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    favoriteByUsers?: UserListRelationFilter
    user_book_readerId?: User_book_readerListRelationFilter
  }, "id">

  export type bookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrderInput | SortOrder
    coverPath?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCandidate?: SortOrderInput | SortOrder
    _count?: bookCountOrderByAggregateInput
    _avg?: bookAvgOrderByAggregateInput
    _max?: bookMaxOrderByAggregateInput
    _min?: bookMinOrderByAggregateInput
    _sum?: bookSumOrderByAggregateInput
  }

  export type bookScalarWhereWithAggregatesInput = {
    AND?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    OR?: bookScalarWhereWithAggregatesInput[]
    NOT?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"book"> | string
    title?: StringWithAggregatesFilter<"book"> | string
    author?: StringWithAggregatesFilter<"book"> | string
    description?: StringWithAggregatesFilter<"book"> | string
    cover?: StringNullableWithAggregatesFilter<"book"> | string | null
    coverPath?: StringNullableWithAggregatesFilter<"book"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"book"> | string | null
    categoryId?: StringWithAggregatesFilter<"book"> | string
    price?: FloatWithAggregatesFilter<"book"> | number
    rating?: FloatNullableWithAggregatesFilter<"book"> | number | null
    reviewCount?: IntNullableWithAggregatesFilter<"book"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"book"> | Date | string
    monthlyCandidate?: BoolNullableWithAggregatesFilter<"book"> | boolean | null
  }

  export type passwordResetWhereInput = {
    AND?: passwordResetWhereInput | passwordResetWhereInput[]
    OR?: passwordResetWhereInput[]
    NOT?: passwordResetWhereInput | passwordResetWhereInput[]
    id?: StringFilter<"passwordReset"> | string
    userId?: StringFilter<"passwordReset"> | string
    token?: StringFilter<"passwordReset"> | string
    expires?: DateTimeFilter<"passwordReset"> | Date | string
    createdAt?: DateTimeFilter<"passwordReset"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type passwordResetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type passwordResetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: passwordResetWhereInput | passwordResetWhereInput[]
    OR?: passwordResetWhereInput[]
    NOT?: passwordResetWhereInput | passwordResetWhereInput[]
    token?: StringFilter<"passwordReset"> | string
    expires?: DateTimeFilter<"passwordReset"> | Date | string
    createdAt?: DateTimeFilter<"passwordReset"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id" | "userId">

  export type passwordResetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    _count?: passwordResetCountOrderByAggregateInput
    _max?: passwordResetMaxOrderByAggregateInput
    _min?: passwordResetMinOrderByAggregateInput
  }

  export type passwordResetScalarWhereWithAggregatesInput = {
    AND?: passwordResetScalarWhereWithAggregatesInput | passwordResetScalarWhereWithAggregatesInput[]
    OR?: passwordResetScalarWhereWithAggregatesInput[]
    NOT?: passwordResetScalarWhereWithAggregatesInput | passwordResetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"passwordReset"> | string
    userId?: StringWithAggregatesFilter<"passwordReset"> | string
    token?: StringWithAggregatesFilter<"passwordReset"> | string
    expires?: DateTimeWithAggregatesFilter<"passwordReset"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"passwordReset"> | Date | string
  }

  export type monthly_featured_bookWhereInput = {
    AND?: monthly_featured_bookWhereInput | monthly_featured_bookWhereInput[]
    OR?: monthly_featured_bookWhereInput[]
    NOT?: monthly_featured_bookWhereInput | monthly_featured_bookWhereInput[]
    id?: StringFilter<"monthly_featured_book"> | string
    title?: StringFilter<"monthly_featured_book"> | string
    author?: StringFilter<"monthly_featured_book"> | string
    description?: StringFilter<"monthly_featured_book"> | string
    cover?: StringNullableFilter<"monthly_featured_book"> | string | null
    coverPath?: StringNullableFilter<"monthly_featured_book"> | string | null
    filePath?: StringNullableFilter<"monthly_featured_book"> | string | null
    categoryId?: StringFilter<"monthly_featured_book"> | string
    price?: FloatFilter<"monthly_featured_book"> | number
    rating?: FloatNullableFilter<"monthly_featured_book"> | number | null
    reviewCount?: IntNullableFilter<"monthly_featured_book"> | number | null
    createdAt?: DateTimeFilter<"monthly_featured_book"> | Date | string
    updatedAt?: DateTimeFilter<"monthly_featured_book"> | Date | string
    originalBookId?: StringNullableFilter<"monthly_featured_book"> | string | null
    monthlyCandidate?: BoolNullableFilter<"monthly_featured_book"> | boolean | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user_book_readerId?: User_book_readerListRelationFilter
    user?: UserListRelationFilter
  }

  export type monthly_featured_bookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrderInput | SortOrder
    coverPath?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalBookId?: SortOrderInput | SortOrder
    monthlyCandidate?: SortOrderInput | SortOrder
    category?: CategoryOrderByWithRelationInput
    user_book_readerId?: user_book_readerOrderByRelationAggregateInput
    user?: userOrderByRelationAggregateInput
  }

  export type monthly_featured_bookWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: monthly_featured_bookWhereInput | monthly_featured_bookWhereInput[]
    OR?: monthly_featured_bookWhereInput[]
    NOT?: monthly_featured_bookWhereInput | monthly_featured_bookWhereInput[]
    title?: StringFilter<"monthly_featured_book"> | string
    author?: StringFilter<"monthly_featured_book"> | string
    description?: StringFilter<"monthly_featured_book"> | string
    cover?: StringNullableFilter<"monthly_featured_book"> | string | null
    coverPath?: StringNullableFilter<"monthly_featured_book"> | string | null
    filePath?: StringNullableFilter<"monthly_featured_book"> | string | null
    categoryId?: StringFilter<"monthly_featured_book"> | string
    price?: FloatFilter<"monthly_featured_book"> | number
    rating?: FloatNullableFilter<"monthly_featured_book"> | number | null
    reviewCount?: IntNullableFilter<"monthly_featured_book"> | number | null
    createdAt?: DateTimeFilter<"monthly_featured_book"> | Date | string
    updatedAt?: DateTimeFilter<"monthly_featured_book"> | Date | string
    originalBookId?: StringNullableFilter<"monthly_featured_book"> | string | null
    monthlyCandidate?: BoolNullableFilter<"monthly_featured_book"> | boolean | null
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user_book_readerId?: User_book_readerListRelationFilter
    user?: UserListRelationFilter
  }, "id">

  export type monthly_featured_bookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrderInput | SortOrder
    coverPath?: SortOrderInput | SortOrder
    filePath?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviewCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalBookId?: SortOrderInput | SortOrder
    monthlyCandidate?: SortOrderInput | SortOrder
    _count?: monthly_featured_bookCountOrderByAggregateInput
    _avg?: monthly_featured_bookAvgOrderByAggregateInput
    _max?: monthly_featured_bookMaxOrderByAggregateInput
    _min?: monthly_featured_bookMinOrderByAggregateInput
    _sum?: monthly_featured_bookSumOrderByAggregateInput
  }

  export type monthly_featured_bookScalarWhereWithAggregatesInput = {
    AND?: monthly_featured_bookScalarWhereWithAggregatesInput | monthly_featured_bookScalarWhereWithAggregatesInput[]
    OR?: monthly_featured_bookScalarWhereWithAggregatesInput[]
    NOT?: monthly_featured_bookScalarWhereWithAggregatesInput | monthly_featured_bookScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"monthly_featured_book"> | string
    title?: StringWithAggregatesFilter<"monthly_featured_book"> | string
    author?: StringWithAggregatesFilter<"monthly_featured_book"> | string
    description?: StringWithAggregatesFilter<"monthly_featured_book"> | string
    cover?: StringNullableWithAggregatesFilter<"monthly_featured_book"> | string | null
    coverPath?: StringNullableWithAggregatesFilter<"monthly_featured_book"> | string | null
    filePath?: StringNullableWithAggregatesFilter<"monthly_featured_book"> | string | null
    categoryId?: StringWithAggregatesFilter<"monthly_featured_book"> | string
    price?: FloatWithAggregatesFilter<"monthly_featured_book"> | number
    rating?: FloatNullableWithAggregatesFilter<"monthly_featured_book"> | number | null
    reviewCount?: IntNullableWithAggregatesFilter<"monthly_featured_book"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"monthly_featured_book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"monthly_featured_book"> | Date | string
    originalBookId?: StringNullableWithAggregatesFilter<"monthly_featured_book"> | string | null
    monthlyCandidate?: BoolNullableWithAggregatesFilter<"monthly_featured_book"> | boolean | null
  }

  export type userCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    favoriteBooks?: bookCreateNestedManyWithoutFavoriteByUsersInput
    user_book_reader?: user_book_readerCreateNestedManyWithoutUserInput
    passwordReset?: passwordResetCreateNestedOneWithoutUserInput
    monthly_featured_book?: monthly_featured_bookCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    monthly_featured_bookId?: string | null
    favoriteBooks?: bookUncheckedCreateNestedManyWithoutFavoriteByUsersInput
    user_book_reader?: user_book_readerUncheckedCreateNestedManyWithoutUserInput
    passwordReset?: passwordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoriteBooks?: bookUpdateManyWithoutFavoriteByUsersNestedInput
    user_book_reader?: user_book_readerUpdateManyWithoutUserNestedInput
    passwordReset?: passwordResetUpdateOneWithoutUserNestedInput
    monthly_featured_book?: monthly_featured_bookUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteBooks?: bookUncheckedUpdateManyWithoutFavoriteByUsersNestedInput
    user_book_reader?: user_book_readerUncheckedUpdateManyWithoutUserNestedInput
    passwordReset?: passwordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    monthly_featured_bookId?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_book_readerCreateInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutUser_book_readerInput
    book: bookCreateNestedOneWithoutUser_book_readerIdInput
    monthly_featured_book?: monthly_featured_bookCreateNestedOneWithoutUser_book_readerIdInput
  }

  export type user_book_readerUncheckedCreateInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    userId: string
    bookId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    monthly_featured_bookId?: string | null
  }

  export type user_book_readerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUser_book_readerNestedInput
    book?: bookUpdateOneRequiredWithoutUser_book_readerIdNestedInput
    monthly_featured_book?: monthly_featured_bookUpdateOneWithoutUser_book_readerIdNestedInput
  }

  export type user_book_readerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_book_readerCreateManyInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    userId: string
    bookId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    monthly_featured_bookId?: string | null
  }

  export type user_book_readerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_book_readerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: bookCreateNestedManyWithoutCategoryInput
    monthly_featured_book?: monthly_featured_bookCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: bookUncheckedCreateNestedManyWithoutCategoryInput
    monthly_featured_book?: monthly_featured_bookUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: bookUpdateManyWithoutCategoryNestedInput
    monthly_featured_book?: monthly_featured_bookUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: bookUncheckedUpdateManyWithoutCategoryNestedInput
    monthly_featured_book?: monthly_featured_bookUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookCreateInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
    category: CategoryCreateNestedOneWithoutBooksInput
    favoriteByUsers?: userCreateNestedManyWithoutFavoriteBooksInput
    user_book_readerId?: user_book_readerCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    categoryId: string
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
    favoriteByUsers?: userUncheckedCreateNestedManyWithoutFavoriteBooksInput
    user_book_readerId?: user_book_readerUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneRequiredWithoutBooksNestedInput
    favoriteByUsers?: userUpdateManyWithoutFavoriteBooksNestedInput
    user_book_readerId?: user_book_readerUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    favoriteByUsers?: userUncheckedUpdateManyWithoutFavoriteBooksNestedInput
    user_book_readerId?: user_book_readerUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateManyInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    categoryId: string
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
  }

  export type bookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type bookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type passwordResetCreateInput = {
    id?: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    user: userCreateNestedOneWithoutPasswordResetInput
  }

  export type passwordResetUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type passwordResetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutPasswordResetNestedInput
  }

  export type passwordResetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetCreateManyInput = {
    id?: string
    userId: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type passwordResetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type monthly_featured_bookCreateInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
    category: CategoryCreateNestedOneWithoutMonthly_featured_bookInput
    user_book_readerId?: user_book_readerCreateNestedManyWithoutMonthly_featured_bookInput
    user?: userCreateNestedManyWithoutMonthly_featured_bookInput
  }

  export type monthly_featured_bookUncheckedCreateInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    categoryId: string
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
    user_book_readerId?: user_book_readerUncheckedCreateNestedManyWithoutMonthly_featured_bookInput
    user?: userUncheckedCreateNestedManyWithoutMonthly_featured_bookInput
  }

  export type monthly_featured_bookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneRequiredWithoutMonthly_featured_bookNestedInput
    user_book_readerId?: user_book_readerUpdateManyWithoutMonthly_featured_bookNestedInput
    user?: userUpdateManyWithoutMonthly_featured_bookNestedInput
  }

  export type monthly_featured_bookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_book_readerId?: user_book_readerUncheckedUpdateManyWithoutMonthly_featured_bookNestedInput
    user?: userUncheckedUpdateManyWithoutMonthly_featured_bookNestedInput
  }

  export type monthly_featured_bookCreateManyInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    categoryId: string
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
  }

  export type monthly_featured_bookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type monthly_featured_bookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
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
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookListRelationFilter = {
    every?: bookWhereInput
    some?: bookWhereInput
    none?: bookWhereInput
  }

  export type User_book_readerListRelationFilter = {
    every?: user_book_readerWhereInput
    some?: user_book_readerWhereInput
    none?: user_book_readerWhereInput
  }

  export type PasswordResetNullableScalarRelationFilter = {
    is?: passwordResetWhereInput | null
    isNot?: passwordResetWhereInput | null
  }

  export type Monthly_featured_bookNullableScalarRelationFilter = {
    is?: monthly_featured_bookWhereInput | null
    isNot?: monthly_featured_bookWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type bookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_book_readerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    subscriptionId?: SortOrder
    subscriptionStatus?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionPrice?: SortOrder
    subscriptionEndDate?: SortOrder
    monthly_featured_bookId?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    subscriptionPrice?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    subscriptionId?: SortOrder
    subscriptionStatus?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionPrice?: SortOrder
    subscriptionEndDate?: SortOrder
    monthly_featured_bookId?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    subscriptionId?: SortOrder
    subscriptionStatus?: SortOrder
    subscriptionPlan?: SortOrder
    subscriptionPrice?: SortOrder
    subscriptionEndDate?: SortOrder
    monthly_featured_bookId?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    subscriptionPrice?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: bookWhereInput
    isNot?: bookWhereInput
  }

  export type user_book_readerCountOrderByAggregateInput = {
    id?: SortOrder
    pagesRead?: SortOrder
    pagesRemaining?: SortOrder
    pagesTotal?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthly_featured_bookId?: SortOrder
  }

  export type user_book_readerAvgOrderByAggregateInput = {
    pagesRead?: SortOrder
    pagesRemaining?: SortOrder
    pagesTotal?: SortOrder
  }

  export type user_book_readerMaxOrderByAggregateInput = {
    id?: SortOrder
    pagesRead?: SortOrder
    pagesRemaining?: SortOrder
    pagesTotal?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthly_featured_bookId?: SortOrder
  }

  export type user_book_readerMinOrderByAggregateInput = {
    id?: SortOrder
    pagesRead?: SortOrder
    pagesRemaining?: SortOrder
    pagesTotal?: SortOrder
    completed?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthly_featured_bookId?: SortOrder
  }

  export type user_book_readerSumOrderByAggregateInput = {
    pagesRead?: SortOrder
    pagesRemaining?: SortOrder
    pagesTotal?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Monthly_featured_bookListRelationFilter = {
    every?: monthly_featured_bookWhereInput
    some?: monthly_featured_bookWhereInput
    none?: monthly_featured_bookWhereInput
  }

  export type monthly_featured_bookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    coverPath?: SortOrder
    filePath?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCandidate?: SortOrder
  }

  export type bookAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type bookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    coverPath?: SortOrder
    filePath?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCandidate?: SortOrder
  }

  export type bookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    coverPath?: SortOrder
    filePath?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    monthlyCandidate?: SortOrder
  }

  export type bookSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type passwordResetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type passwordResetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type monthly_featured_bookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    coverPath?: SortOrder
    filePath?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalBookId?: SortOrder
    monthlyCandidate?: SortOrder
  }

  export type monthly_featured_bookAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type monthly_featured_bookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    coverPath?: SortOrder
    filePath?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalBookId?: SortOrder
    monthlyCandidate?: SortOrder
  }

  export type monthly_featured_bookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    description?: SortOrder
    cover?: SortOrder
    coverPath?: SortOrder
    filePath?: SortOrder
    categoryId?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    originalBookId?: SortOrder
    monthlyCandidate?: SortOrder
  }

  export type monthly_featured_bookSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    reviewCount?: SortOrder
  }

  export type bookCreateNestedManyWithoutFavoriteByUsersInput = {
    create?: XOR<bookCreateWithoutFavoriteByUsersInput, bookUncheckedCreateWithoutFavoriteByUsersInput> | bookCreateWithoutFavoriteByUsersInput[] | bookUncheckedCreateWithoutFavoriteByUsersInput[]
    connectOrCreate?: bookCreateOrConnectWithoutFavoriteByUsersInput | bookCreateOrConnectWithoutFavoriteByUsersInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
  }

  export type user_book_readerCreateNestedManyWithoutUserInput = {
    create?: XOR<user_book_readerCreateWithoutUserInput, user_book_readerUncheckedCreateWithoutUserInput> | user_book_readerCreateWithoutUserInput[] | user_book_readerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutUserInput | user_book_readerCreateOrConnectWithoutUserInput[]
    createMany?: user_book_readerCreateManyUserInputEnvelope
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
  }

  export type passwordResetCreateNestedOneWithoutUserInput = {
    create?: XOR<passwordResetCreateWithoutUserInput, passwordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: passwordResetCreateOrConnectWithoutUserInput
    connect?: passwordResetWhereUniqueInput
  }

  export type monthly_featured_bookCreateNestedOneWithoutUserInput = {
    create?: XOR<monthly_featured_bookCreateWithoutUserInput, monthly_featured_bookUncheckedCreateWithoutUserInput>
    connectOrCreate?: monthly_featured_bookCreateOrConnectWithoutUserInput
    connect?: monthly_featured_bookWhereUniqueInput
  }

  export type bookUncheckedCreateNestedManyWithoutFavoriteByUsersInput = {
    create?: XOR<bookCreateWithoutFavoriteByUsersInput, bookUncheckedCreateWithoutFavoriteByUsersInput> | bookCreateWithoutFavoriteByUsersInput[] | bookUncheckedCreateWithoutFavoriteByUsersInput[]
    connectOrCreate?: bookCreateOrConnectWithoutFavoriteByUsersInput | bookCreateOrConnectWithoutFavoriteByUsersInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
  }

  export type user_book_readerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_book_readerCreateWithoutUserInput, user_book_readerUncheckedCreateWithoutUserInput> | user_book_readerCreateWithoutUserInput[] | user_book_readerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutUserInput | user_book_readerCreateOrConnectWithoutUserInput[]
    createMany?: user_book_readerCreateManyUserInputEnvelope
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
  }

  export type passwordResetUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<passwordResetCreateWithoutUserInput, passwordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: passwordResetCreateOrConnectWithoutUserInput
    connect?: passwordResetWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bookUpdateManyWithoutFavoriteByUsersNestedInput = {
    create?: XOR<bookCreateWithoutFavoriteByUsersInput, bookUncheckedCreateWithoutFavoriteByUsersInput> | bookCreateWithoutFavoriteByUsersInput[] | bookUncheckedCreateWithoutFavoriteByUsersInput[]
    connectOrCreate?: bookCreateOrConnectWithoutFavoriteByUsersInput | bookCreateOrConnectWithoutFavoriteByUsersInput[]
    upsert?: bookUpsertWithWhereUniqueWithoutFavoriteByUsersInput | bookUpsertWithWhereUniqueWithoutFavoriteByUsersInput[]
    set?: bookWhereUniqueInput | bookWhereUniqueInput[]
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    update?: bookUpdateWithWhereUniqueWithoutFavoriteByUsersInput | bookUpdateWithWhereUniqueWithoutFavoriteByUsersInput[]
    updateMany?: bookUpdateManyWithWhereWithoutFavoriteByUsersInput | bookUpdateManyWithWhereWithoutFavoriteByUsersInput[]
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[]
  }

  export type user_book_readerUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_book_readerCreateWithoutUserInput, user_book_readerUncheckedCreateWithoutUserInput> | user_book_readerCreateWithoutUserInput[] | user_book_readerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutUserInput | user_book_readerCreateOrConnectWithoutUserInput[]
    upsert?: user_book_readerUpsertWithWhereUniqueWithoutUserInput | user_book_readerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_book_readerCreateManyUserInputEnvelope
    set?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    disconnect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    delete?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    update?: user_book_readerUpdateWithWhereUniqueWithoutUserInput | user_book_readerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_book_readerUpdateManyWithWhereWithoutUserInput | user_book_readerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_book_readerScalarWhereInput | user_book_readerScalarWhereInput[]
  }

  export type passwordResetUpdateOneWithoutUserNestedInput = {
    create?: XOR<passwordResetCreateWithoutUserInput, passwordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: passwordResetCreateOrConnectWithoutUserInput
    upsert?: passwordResetUpsertWithoutUserInput
    disconnect?: passwordResetWhereInput | boolean
    delete?: passwordResetWhereInput | boolean
    connect?: passwordResetWhereUniqueInput
    update?: XOR<XOR<passwordResetUpdateToOneWithWhereWithoutUserInput, passwordResetUpdateWithoutUserInput>, passwordResetUncheckedUpdateWithoutUserInput>
  }

  export type monthly_featured_bookUpdateOneWithoutUserNestedInput = {
    create?: XOR<monthly_featured_bookCreateWithoutUserInput, monthly_featured_bookUncheckedCreateWithoutUserInput>
    connectOrCreate?: monthly_featured_bookCreateOrConnectWithoutUserInput
    upsert?: monthly_featured_bookUpsertWithoutUserInput
    disconnect?: monthly_featured_bookWhereInput | boolean
    delete?: monthly_featured_bookWhereInput | boolean
    connect?: monthly_featured_bookWhereUniqueInput
    update?: XOR<XOR<monthly_featured_bookUpdateToOneWithWhereWithoutUserInput, monthly_featured_bookUpdateWithoutUserInput>, monthly_featured_bookUncheckedUpdateWithoutUserInput>
  }

  export type bookUncheckedUpdateManyWithoutFavoriteByUsersNestedInput = {
    create?: XOR<bookCreateWithoutFavoriteByUsersInput, bookUncheckedCreateWithoutFavoriteByUsersInput> | bookCreateWithoutFavoriteByUsersInput[] | bookUncheckedCreateWithoutFavoriteByUsersInput[]
    connectOrCreate?: bookCreateOrConnectWithoutFavoriteByUsersInput | bookCreateOrConnectWithoutFavoriteByUsersInput[]
    upsert?: bookUpsertWithWhereUniqueWithoutFavoriteByUsersInput | bookUpsertWithWhereUniqueWithoutFavoriteByUsersInput[]
    set?: bookWhereUniqueInput | bookWhereUniqueInput[]
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    update?: bookUpdateWithWhereUniqueWithoutFavoriteByUsersInput | bookUpdateWithWhereUniqueWithoutFavoriteByUsersInput[]
    updateMany?: bookUpdateManyWithWhereWithoutFavoriteByUsersInput | bookUpdateManyWithWhereWithoutFavoriteByUsersInput[]
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[]
  }

  export type user_book_readerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_book_readerCreateWithoutUserInput, user_book_readerUncheckedCreateWithoutUserInput> | user_book_readerCreateWithoutUserInput[] | user_book_readerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutUserInput | user_book_readerCreateOrConnectWithoutUserInput[]
    upsert?: user_book_readerUpsertWithWhereUniqueWithoutUserInput | user_book_readerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_book_readerCreateManyUserInputEnvelope
    set?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    disconnect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    delete?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    update?: user_book_readerUpdateWithWhereUniqueWithoutUserInput | user_book_readerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_book_readerUpdateManyWithWhereWithoutUserInput | user_book_readerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_book_readerScalarWhereInput | user_book_readerScalarWhereInput[]
  }

  export type passwordResetUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<passwordResetCreateWithoutUserInput, passwordResetUncheckedCreateWithoutUserInput>
    connectOrCreate?: passwordResetCreateOrConnectWithoutUserInput
    upsert?: passwordResetUpsertWithoutUserInput
    disconnect?: passwordResetWhereInput | boolean
    delete?: passwordResetWhereInput | boolean
    connect?: passwordResetWhereUniqueInput
    update?: XOR<XOR<passwordResetUpdateToOneWithWhereWithoutUserInput, passwordResetUpdateWithoutUserInput>, passwordResetUncheckedUpdateWithoutUserInput>
  }

  export type userCreateNestedOneWithoutUser_book_readerInput = {
    create?: XOR<userCreateWithoutUser_book_readerInput, userUncheckedCreateWithoutUser_book_readerInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_book_readerInput
    connect?: userWhereUniqueInput
  }

  export type bookCreateNestedOneWithoutUser_book_readerIdInput = {
    create?: XOR<bookCreateWithoutUser_book_readerIdInput, bookUncheckedCreateWithoutUser_book_readerIdInput>
    connectOrCreate?: bookCreateOrConnectWithoutUser_book_readerIdInput
    connect?: bookWhereUniqueInput
  }

  export type monthly_featured_bookCreateNestedOneWithoutUser_book_readerIdInput = {
    create?: XOR<monthly_featured_bookCreateWithoutUser_book_readerIdInput, monthly_featured_bookUncheckedCreateWithoutUser_book_readerIdInput>
    connectOrCreate?: monthly_featured_bookCreateOrConnectWithoutUser_book_readerIdInput
    connect?: monthly_featured_bookWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type userUpdateOneRequiredWithoutUser_book_readerNestedInput = {
    create?: XOR<userCreateWithoutUser_book_readerInput, userUncheckedCreateWithoutUser_book_readerInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_book_readerInput
    upsert?: userUpsertWithoutUser_book_readerInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_book_readerInput, userUpdateWithoutUser_book_readerInput>, userUncheckedUpdateWithoutUser_book_readerInput>
  }

  export type bookUpdateOneRequiredWithoutUser_book_readerIdNestedInput = {
    create?: XOR<bookCreateWithoutUser_book_readerIdInput, bookUncheckedCreateWithoutUser_book_readerIdInput>
    connectOrCreate?: bookCreateOrConnectWithoutUser_book_readerIdInput
    upsert?: bookUpsertWithoutUser_book_readerIdInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutUser_book_readerIdInput, bookUpdateWithoutUser_book_readerIdInput>, bookUncheckedUpdateWithoutUser_book_readerIdInput>
  }

  export type monthly_featured_bookUpdateOneWithoutUser_book_readerIdNestedInput = {
    create?: XOR<monthly_featured_bookCreateWithoutUser_book_readerIdInput, monthly_featured_bookUncheckedCreateWithoutUser_book_readerIdInput>
    connectOrCreate?: monthly_featured_bookCreateOrConnectWithoutUser_book_readerIdInput
    upsert?: monthly_featured_bookUpsertWithoutUser_book_readerIdInput
    disconnect?: monthly_featured_bookWhereInput | boolean
    delete?: monthly_featured_bookWhereInput | boolean
    connect?: monthly_featured_bookWhereUniqueInput
    update?: XOR<XOR<monthly_featured_bookUpdateToOneWithWhereWithoutUser_book_readerIdInput, monthly_featured_bookUpdateWithoutUser_book_readerIdInput>, monthly_featured_bookUncheckedUpdateWithoutUser_book_readerIdInput>
  }

  export type bookCreateNestedManyWithoutCategoryInput = {
    create?: XOR<bookCreateWithoutCategoryInput, bookUncheckedCreateWithoutCategoryInput> | bookCreateWithoutCategoryInput[] | bookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: bookCreateOrConnectWithoutCategoryInput | bookCreateOrConnectWithoutCategoryInput[]
    createMany?: bookCreateManyCategoryInputEnvelope
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
  }

  export type monthly_featured_bookCreateNestedManyWithoutCategoryInput = {
    create?: XOR<monthly_featured_bookCreateWithoutCategoryInput, monthly_featured_bookUncheckedCreateWithoutCategoryInput> | monthly_featured_bookCreateWithoutCategoryInput[] | monthly_featured_bookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: monthly_featured_bookCreateOrConnectWithoutCategoryInput | monthly_featured_bookCreateOrConnectWithoutCategoryInput[]
    createMany?: monthly_featured_bookCreateManyCategoryInputEnvelope
    connect?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
  }

  export type bookUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<bookCreateWithoutCategoryInput, bookUncheckedCreateWithoutCategoryInput> | bookCreateWithoutCategoryInput[] | bookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: bookCreateOrConnectWithoutCategoryInput | bookCreateOrConnectWithoutCategoryInput[]
    createMany?: bookCreateManyCategoryInputEnvelope
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
  }

  export type monthly_featured_bookUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<monthly_featured_bookCreateWithoutCategoryInput, monthly_featured_bookUncheckedCreateWithoutCategoryInput> | monthly_featured_bookCreateWithoutCategoryInput[] | monthly_featured_bookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: monthly_featured_bookCreateOrConnectWithoutCategoryInput | monthly_featured_bookCreateOrConnectWithoutCategoryInput[]
    createMany?: monthly_featured_bookCreateManyCategoryInputEnvelope
    connect?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
  }

  export type bookUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<bookCreateWithoutCategoryInput, bookUncheckedCreateWithoutCategoryInput> | bookCreateWithoutCategoryInput[] | bookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: bookCreateOrConnectWithoutCategoryInput | bookCreateOrConnectWithoutCategoryInput[]
    upsert?: bookUpsertWithWhereUniqueWithoutCategoryInput | bookUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: bookCreateManyCategoryInputEnvelope
    set?: bookWhereUniqueInput | bookWhereUniqueInput[]
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    update?: bookUpdateWithWhereUniqueWithoutCategoryInput | bookUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: bookUpdateManyWithWhereWithoutCategoryInput | bookUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[]
  }

  export type monthly_featured_bookUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<monthly_featured_bookCreateWithoutCategoryInput, monthly_featured_bookUncheckedCreateWithoutCategoryInput> | monthly_featured_bookCreateWithoutCategoryInput[] | monthly_featured_bookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: monthly_featured_bookCreateOrConnectWithoutCategoryInput | monthly_featured_bookCreateOrConnectWithoutCategoryInput[]
    upsert?: monthly_featured_bookUpsertWithWhereUniqueWithoutCategoryInput | monthly_featured_bookUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: monthly_featured_bookCreateManyCategoryInputEnvelope
    set?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
    disconnect?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
    delete?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
    connect?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
    update?: monthly_featured_bookUpdateWithWhereUniqueWithoutCategoryInput | monthly_featured_bookUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: monthly_featured_bookUpdateManyWithWhereWithoutCategoryInput | monthly_featured_bookUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: monthly_featured_bookScalarWhereInput | monthly_featured_bookScalarWhereInput[]
  }

  export type bookUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<bookCreateWithoutCategoryInput, bookUncheckedCreateWithoutCategoryInput> | bookCreateWithoutCategoryInput[] | bookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: bookCreateOrConnectWithoutCategoryInput | bookCreateOrConnectWithoutCategoryInput[]
    upsert?: bookUpsertWithWhereUniqueWithoutCategoryInput | bookUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: bookCreateManyCategoryInputEnvelope
    set?: bookWhereUniqueInput | bookWhereUniqueInput[]
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    update?: bookUpdateWithWhereUniqueWithoutCategoryInput | bookUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: bookUpdateManyWithWhereWithoutCategoryInput | bookUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[]
  }

  export type monthly_featured_bookUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<monthly_featured_bookCreateWithoutCategoryInput, monthly_featured_bookUncheckedCreateWithoutCategoryInput> | monthly_featured_bookCreateWithoutCategoryInput[] | monthly_featured_bookUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: monthly_featured_bookCreateOrConnectWithoutCategoryInput | monthly_featured_bookCreateOrConnectWithoutCategoryInput[]
    upsert?: monthly_featured_bookUpsertWithWhereUniqueWithoutCategoryInput | monthly_featured_bookUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: monthly_featured_bookCreateManyCategoryInputEnvelope
    set?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
    disconnect?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
    delete?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
    connect?: monthly_featured_bookWhereUniqueInput | monthly_featured_bookWhereUniqueInput[]
    update?: monthly_featured_bookUpdateWithWhereUniqueWithoutCategoryInput | monthly_featured_bookUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: monthly_featured_bookUpdateManyWithWhereWithoutCategoryInput | monthly_featured_bookUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: monthly_featured_bookScalarWhereInput | monthly_featured_bookScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutBooksInput = {
    create?: XOR<CategoryCreateWithoutBooksInput, CategoryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput
    connect?: CategoryWhereUniqueInput
  }

  export type userCreateNestedManyWithoutFavoriteBooksInput = {
    create?: XOR<userCreateWithoutFavoriteBooksInput, userUncheckedCreateWithoutFavoriteBooksInput> | userCreateWithoutFavoriteBooksInput[] | userUncheckedCreateWithoutFavoriteBooksInput[]
    connectOrCreate?: userCreateOrConnectWithoutFavoriteBooksInput | userCreateOrConnectWithoutFavoriteBooksInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type user_book_readerCreateNestedManyWithoutBookInput = {
    create?: XOR<user_book_readerCreateWithoutBookInput, user_book_readerUncheckedCreateWithoutBookInput> | user_book_readerCreateWithoutBookInput[] | user_book_readerUncheckedCreateWithoutBookInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutBookInput | user_book_readerCreateOrConnectWithoutBookInput[]
    createMany?: user_book_readerCreateManyBookInputEnvelope
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutFavoriteBooksInput = {
    create?: XOR<userCreateWithoutFavoriteBooksInput, userUncheckedCreateWithoutFavoriteBooksInput> | userCreateWithoutFavoriteBooksInput[] | userUncheckedCreateWithoutFavoriteBooksInput[]
    connectOrCreate?: userCreateOrConnectWithoutFavoriteBooksInput | userCreateOrConnectWithoutFavoriteBooksInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type user_book_readerUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<user_book_readerCreateWithoutBookInput, user_book_readerUncheckedCreateWithoutBookInput> | user_book_readerCreateWithoutBookInput[] | user_book_readerUncheckedCreateWithoutBookInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutBookInput | user_book_readerCreateOrConnectWithoutBookInput[]
    createMany?: user_book_readerCreateManyBookInputEnvelope
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CategoryUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<CategoryCreateWithoutBooksInput, CategoryUncheckedCreateWithoutBooksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutBooksInput
    upsert?: CategoryUpsertWithoutBooksInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutBooksInput, CategoryUpdateWithoutBooksInput>, CategoryUncheckedUpdateWithoutBooksInput>
  }

  export type userUpdateManyWithoutFavoriteBooksNestedInput = {
    create?: XOR<userCreateWithoutFavoriteBooksInput, userUncheckedCreateWithoutFavoriteBooksInput> | userCreateWithoutFavoriteBooksInput[] | userUncheckedCreateWithoutFavoriteBooksInput[]
    connectOrCreate?: userCreateOrConnectWithoutFavoriteBooksInput | userCreateOrConnectWithoutFavoriteBooksInput[]
    upsert?: userUpsertWithWhereUniqueWithoutFavoriteBooksInput | userUpsertWithWhereUniqueWithoutFavoriteBooksInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutFavoriteBooksInput | userUpdateWithWhereUniqueWithoutFavoriteBooksInput[]
    updateMany?: userUpdateManyWithWhereWithoutFavoriteBooksInput | userUpdateManyWithWhereWithoutFavoriteBooksInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type user_book_readerUpdateManyWithoutBookNestedInput = {
    create?: XOR<user_book_readerCreateWithoutBookInput, user_book_readerUncheckedCreateWithoutBookInput> | user_book_readerCreateWithoutBookInput[] | user_book_readerUncheckedCreateWithoutBookInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutBookInput | user_book_readerCreateOrConnectWithoutBookInput[]
    upsert?: user_book_readerUpsertWithWhereUniqueWithoutBookInput | user_book_readerUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: user_book_readerCreateManyBookInputEnvelope
    set?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    disconnect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    delete?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    update?: user_book_readerUpdateWithWhereUniqueWithoutBookInput | user_book_readerUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: user_book_readerUpdateManyWithWhereWithoutBookInput | user_book_readerUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: user_book_readerScalarWhereInput | user_book_readerScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutFavoriteBooksNestedInput = {
    create?: XOR<userCreateWithoutFavoriteBooksInput, userUncheckedCreateWithoutFavoriteBooksInput> | userCreateWithoutFavoriteBooksInput[] | userUncheckedCreateWithoutFavoriteBooksInput[]
    connectOrCreate?: userCreateOrConnectWithoutFavoriteBooksInput | userCreateOrConnectWithoutFavoriteBooksInput[]
    upsert?: userUpsertWithWhereUniqueWithoutFavoriteBooksInput | userUpsertWithWhereUniqueWithoutFavoriteBooksInput[]
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutFavoriteBooksInput | userUpdateWithWhereUniqueWithoutFavoriteBooksInput[]
    updateMany?: userUpdateManyWithWhereWithoutFavoriteBooksInput | userUpdateManyWithWhereWithoutFavoriteBooksInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type user_book_readerUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<user_book_readerCreateWithoutBookInput, user_book_readerUncheckedCreateWithoutBookInput> | user_book_readerCreateWithoutBookInput[] | user_book_readerUncheckedCreateWithoutBookInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutBookInput | user_book_readerCreateOrConnectWithoutBookInput[]
    upsert?: user_book_readerUpsertWithWhereUniqueWithoutBookInput | user_book_readerUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: user_book_readerCreateManyBookInputEnvelope
    set?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    disconnect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    delete?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    update?: user_book_readerUpdateWithWhereUniqueWithoutBookInput | user_book_readerUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: user_book_readerUpdateManyWithWhereWithoutBookInput | user_book_readerUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: user_book_readerScalarWhereInput | user_book_readerScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutPasswordResetInput = {
    create?: XOR<userCreateWithoutPasswordResetInput, userUncheckedCreateWithoutPasswordResetInput>
    connectOrCreate?: userCreateOrConnectWithoutPasswordResetInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutPasswordResetNestedInput = {
    create?: XOR<userCreateWithoutPasswordResetInput, userUncheckedCreateWithoutPasswordResetInput>
    connectOrCreate?: userCreateOrConnectWithoutPasswordResetInput
    upsert?: userUpsertWithoutPasswordResetInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPasswordResetInput, userUpdateWithoutPasswordResetInput>, userUncheckedUpdateWithoutPasswordResetInput>
  }

  export type CategoryCreateNestedOneWithoutMonthly_featured_bookInput = {
    create?: XOR<CategoryCreateWithoutMonthly_featured_bookInput, CategoryUncheckedCreateWithoutMonthly_featured_bookInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMonthly_featured_bookInput
    connect?: CategoryWhereUniqueInput
  }

  export type user_book_readerCreateNestedManyWithoutMonthly_featured_bookInput = {
    create?: XOR<user_book_readerCreateWithoutMonthly_featured_bookInput, user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput> | user_book_readerCreateWithoutMonthly_featured_bookInput[] | user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput | user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput[]
    createMany?: user_book_readerCreateManyMonthly_featured_bookInputEnvelope
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
  }

  export type userCreateNestedManyWithoutMonthly_featured_bookInput = {
    create?: XOR<userCreateWithoutMonthly_featured_bookInput, userUncheckedCreateWithoutMonthly_featured_bookInput> | userCreateWithoutMonthly_featured_bookInput[] | userUncheckedCreateWithoutMonthly_featured_bookInput[]
    connectOrCreate?: userCreateOrConnectWithoutMonthly_featured_bookInput | userCreateOrConnectWithoutMonthly_featured_bookInput[]
    createMany?: userCreateManyMonthly_featured_bookInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type user_book_readerUncheckedCreateNestedManyWithoutMonthly_featured_bookInput = {
    create?: XOR<user_book_readerCreateWithoutMonthly_featured_bookInput, user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput> | user_book_readerCreateWithoutMonthly_featured_bookInput[] | user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput | user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput[]
    createMany?: user_book_readerCreateManyMonthly_featured_bookInputEnvelope
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutMonthly_featured_bookInput = {
    create?: XOR<userCreateWithoutMonthly_featured_bookInput, userUncheckedCreateWithoutMonthly_featured_bookInput> | userCreateWithoutMonthly_featured_bookInput[] | userUncheckedCreateWithoutMonthly_featured_bookInput[]
    connectOrCreate?: userCreateOrConnectWithoutMonthly_featured_bookInput | userCreateOrConnectWithoutMonthly_featured_bookInput[]
    createMany?: userCreateManyMonthly_featured_bookInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutMonthly_featured_bookNestedInput = {
    create?: XOR<CategoryCreateWithoutMonthly_featured_bookInput, CategoryUncheckedCreateWithoutMonthly_featured_bookInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutMonthly_featured_bookInput
    upsert?: CategoryUpsertWithoutMonthly_featured_bookInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutMonthly_featured_bookInput, CategoryUpdateWithoutMonthly_featured_bookInput>, CategoryUncheckedUpdateWithoutMonthly_featured_bookInput>
  }

  export type user_book_readerUpdateManyWithoutMonthly_featured_bookNestedInput = {
    create?: XOR<user_book_readerCreateWithoutMonthly_featured_bookInput, user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput> | user_book_readerCreateWithoutMonthly_featured_bookInput[] | user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput | user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput[]
    upsert?: user_book_readerUpsertWithWhereUniqueWithoutMonthly_featured_bookInput | user_book_readerUpsertWithWhereUniqueWithoutMonthly_featured_bookInput[]
    createMany?: user_book_readerCreateManyMonthly_featured_bookInputEnvelope
    set?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    disconnect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    delete?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    update?: user_book_readerUpdateWithWhereUniqueWithoutMonthly_featured_bookInput | user_book_readerUpdateWithWhereUniqueWithoutMonthly_featured_bookInput[]
    updateMany?: user_book_readerUpdateManyWithWhereWithoutMonthly_featured_bookInput | user_book_readerUpdateManyWithWhereWithoutMonthly_featured_bookInput[]
    deleteMany?: user_book_readerScalarWhereInput | user_book_readerScalarWhereInput[]
  }

  export type userUpdateManyWithoutMonthly_featured_bookNestedInput = {
    create?: XOR<userCreateWithoutMonthly_featured_bookInput, userUncheckedCreateWithoutMonthly_featured_bookInput> | userCreateWithoutMonthly_featured_bookInput[] | userUncheckedCreateWithoutMonthly_featured_bookInput[]
    connectOrCreate?: userCreateOrConnectWithoutMonthly_featured_bookInput | userCreateOrConnectWithoutMonthly_featured_bookInput[]
    upsert?: userUpsertWithWhereUniqueWithoutMonthly_featured_bookInput | userUpsertWithWhereUniqueWithoutMonthly_featured_bookInput[]
    createMany?: userCreateManyMonthly_featured_bookInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutMonthly_featured_bookInput | userUpdateWithWhereUniqueWithoutMonthly_featured_bookInput[]
    updateMany?: userUpdateManyWithWhereWithoutMonthly_featured_bookInput | userUpdateManyWithWhereWithoutMonthly_featured_bookInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type user_book_readerUncheckedUpdateManyWithoutMonthly_featured_bookNestedInput = {
    create?: XOR<user_book_readerCreateWithoutMonthly_featured_bookInput, user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput> | user_book_readerCreateWithoutMonthly_featured_bookInput[] | user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput[]
    connectOrCreate?: user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput | user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput[]
    upsert?: user_book_readerUpsertWithWhereUniqueWithoutMonthly_featured_bookInput | user_book_readerUpsertWithWhereUniqueWithoutMonthly_featured_bookInput[]
    createMany?: user_book_readerCreateManyMonthly_featured_bookInputEnvelope
    set?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    disconnect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    delete?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    connect?: user_book_readerWhereUniqueInput | user_book_readerWhereUniqueInput[]
    update?: user_book_readerUpdateWithWhereUniqueWithoutMonthly_featured_bookInput | user_book_readerUpdateWithWhereUniqueWithoutMonthly_featured_bookInput[]
    updateMany?: user_book_readerUpdateManyWithWhereWithoutMonthly_featured_bookInput | user_book_readerUpdateManyWithWhereWithoutMonthly_featured_bookInput[]
    deleteMany?: user_book_readerScalarWhereInput | user_book_readerScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutMonthly_featured_bookNestedInput = {
    create?: XOR<userCreateWithoutMonthly_featured_bookInput, userUncheckedCreateWithoutMonthly_featured_bookInput> | userCreateWithoutMonthly_featured_bookInput[] | userUncheckedCreateWithoutMonthly_featured_bookInput[]
    connectOrCreate?: userCreateOrConnectWithoutMonthly_featured_bookInput | userCreateOrConnectWithoutMonthly_featured_bookInput[]
    upsert?: userUpsertWithWhereUniqueWithoutMonthly_featured_bookInput | userUpsertWithWhereUniqueWithoutMonthly_featured_bookInput[]
    createMany?: userCreateManyMonthly_featured_bookInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutMonthly_featured_bookInput | userUpdateWithWhereUniqueWithoutMonthly_featured_bookInput[]
    updateMany?: userUpdateManyWithWhereWithoutMonthly_featured_bookInput | userUpdateManyWithWhereWithoutMonthly_featured_bookInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type bookCreateWithoutFavoriteByUsersInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
    category: CategoryCreateNestedOneWithoutBooksInput
    user_book_readerId?: user_book_readerCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutFavoriteByUsersInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    categoryId: string
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
    user_book_readerId?: user_book_readerUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutFavoriteByUsersInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutFavoriteByUsersInput, bookUncheckedCreateWithoutFavoriteByUsersInput>
  }

  export type user_book_readerCreateWithoutUserInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    book: bookCreateNestedOneWithoutUser_book_readerIdInput
    monthly_featured_book?: monthly_featured_bookCreateNestedOneWithoutUser_book_readerIdInput
  }

  export type user_book_readerUncheckedCreateWithoutUserInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    bookId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    monthly_featured_bookId?: string | null
  }

  export type user_book_readerCreateOrConnectWithoutUserInput = {
    where: user_book_readerWhereUniqueInput
    create: XOR<user_book_readerCreateWithoutUserInput, user_book_readerUncheckedCreateWithoutUserInput>
  }

  export type user_book_readerCreateManyUserInputEnvelope = {
    data: user_book_readerCreateManyUserInput | user_book_readerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type passwordResetCreateWithoutUserInput = {
    id?: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type passwordResetUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type passwordResetCreateOrConnectWithoutUserInput = {
    where: passwordResetWhereUniqueInput
    create: XOR<passwordResetCreateWithoutUserInput, passwordResetUncheckedCreateWithoutUserInput>
  }

  export type monthly_featured_bookCreateWithoutUserInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
    category: CategoryCreateNestedOneWithoutMonthly_featured_bookInput
    user_book_readerId?: user_book_readerCreateNestedManyWithoutMonthly_featured_bookInput
  }

  export type monthly_featured_bookUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    categoryId: string
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
    user_book_readerId?: user_book_readerUncheckedCreateNestedManyWithoutMonthly_featured_bookInput
  }

  export type monthly_featured_bookCreateOrConnectWithoutUserInput = {
    where: monthly_featured_bookWhereUniqueInput
    create: XOR<monthly_featured_bookCreateWithoutUserInput, monthly_featured_bookUncheckedCreateWithoutUserInput>
  }

  export type bookUpsertWithWhereUniqueWithoutFavoriteByUsersInput = {
    where: bookWhereUniqueInput
    update: XOR<bookUpdateWithoutFavoriteByUsersInput, bookUncheckedUpdateWithoutFavoriteByUsersInput>
    create: XOR<bookCreateWithoutFavoriteByUsersInput, bookUncheckedCreateWithoutFavoriteByUsersInput>
  }

  export type bookUpdateWithWhereUniqueWithoutFavoriteByUsersInput = {
    where: bookWhereUniqueInput
    data: XOR<bookUpdateWithoutFavoriteByUsersInput, bookUncheckedUpdateWithoutFavoriteByUsersInput>
  }

  export type bookUpdateManyWithWhereWithoutFavoriteByUsersInput = {
    where: bookScalarWhereInput
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyWithoutFavoriteByUsersInput>
  }

  export type bookScalarWhereInput = {
    AND?: bookScalarWhereInput | bookScalarWhereInput[]
    OR?: bookScalarWhereInput[]
    NOT?: bookScalarWhereInput | bookScalarWhereInput[]
    id?: StringFilter<"book"> | string
    title?: StringFilter<"book"> | string
    author?: StringFilter<"book"> | string
    description?: StringFilter<"book"> | string
    cover?: StringNullableFilter<"book"> | string | null
    coverPath?: StringNullableFilter<"book"> | string | null
    filePath?: StringNullableFilter<"book"> | string | null
    categoryId?: StringFilter<"book"> | string
    price?: FloatFilter<"book"> | number
    rating?: FloatNullableFilter<"book"> | number | null
    reviewCount?: IntNullableFilter<"book"> | number | null
    createdAt?: DateTimeFilter<"book"> | Date | string
    updatedAt?: DateTimeFilter<"book"> | Date | string
    monthlyCandidate?: BoolNullableFilter<"book"> | boolean | null
  }

  export type user_book_readerUpsertWithWhereUniqueWithoutUserInput = {
    where: user_book_readerWhereUniqueInput
    update: XOR<user_book_readerUpdateWithoutUserInput, user_book_readerUncheckedUpdateWithoutUserInput>
    create: XOR<user_book_readerCreateWithoutUserInput, user_book_readerUncheckedCreateWithoutUserInput>
  }

  export type user_book_readerUpdateWithWhereUniqueWithoutUserInput = {
    where: user_book_readerWhereUniqueInput
    data: XOR<user_book_readerUpdateWithoutUserInput, user_book_readerUncheckedUpdateWithoutUserInput>
  }

  export type user_book_readerUpdateManyWithWhereWithoutUserInput = {
    where: user_book_readerScalarWhereInput
    data: XOR<user_book_readerUpdateManyMutationInput, user_book_readerUncheckedUpdateManyWithoutUserInput>
  }

  export type user_book_readerScalarWhereInput = {
    AND?: user_book_readerScalarWhereInput | user_book_readerScalarWhereInput[]
    OR?: user_book_readerScalarWhereInput[]
    NOT?: user_book_readerScalarWhereInput | user_book_readerScalarWhereInput[]
    id?: StringFilter<"user_book_reader"> | string
    pagesRead?: IntFilter<"user_book_reader"> | number
    pagesRemaining?: IntFilter<"user_book_reader"> | number
    pagesTotal?: IntFilter<"user_book_reader"> | number
    completed?: BoolFilter<"user_book_reader"> | boolean
    userId?: StringFilter<"user_book_reader"> | string
    bookId?: StringFilter<"user_book_reader"> | string
    createdAt?: DateTimeFilter<"user_book_reader"> | Date | string
    updatedAt?: DateTimeFilter<"user_book_reader"> | Date | string
    monthly_featured_bookId?: StringNullableFilter<"user_book_reader"> | string | null
  }

  export type passwordResetUpsertWithoutUserInput = {
    update: XOR<passwordResetUpdateWithoutUserInput, passwordResetUncheckedUpdateWithoutUserInput>
    create: XOR<passwordResetCreateWithoutUserInput, passwordResetUncheckedCreateWithoutUserInput>
    where?: passwordResetWhereInput
  }

  export type passwordResetUpdateToOneWithWhereWithoutUserInput = {
    where?: passwordResetWhereInput
    data: XOR<passwordResetUpdateWithoutUserInput, passwordResetUncheckedUpdateWithoutUserInput>
  }

  export type passwordResetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type passwordResetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type monthly_featured_bookUpsertWithoutUserInput = {
    update: XOR<monthly_featured_bookUpdateWithoutUserInput, monthly_featured_bookUncheckedUpdateWithoutUserInput>
    create: XOR<monthly_featured_bookCreateWithoutUserInput, monthly_featured_bookUncheckedCreateWithoutUserInput>
    where?: monthly_featured_bookWhereInput
  }

  export type monthly_featured_bookUpdateToOneWithWhereWithoutUserInput = {
    where?: monthly_featured_bookWhereInput
    data: XOR<monthly_featured_bookUpdateWithoutUserInput, monthly_featured_bookUncheckedUpdateWithoutUserInput>
  }

  export type monthly_featured_bookUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneRequiredWithoutMonthly_featured_bookNestedInput
    user_book_readerId?: user_book_readerUpdateManyWithoutMonthly_featured_bookNestedInput
  }

  export type monthly_featured_bookUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_book_readerId?: user_book_readerUncheckedUpdateManyWithoutMonthly_featured_bookNestedInput
  }

  export type userCreateWithoutUser_book_readerInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    favoriteBooks?: bookCreateNestedManyWithoutFavoriteByUsersInput
    passwordReset?: passwordResetCreateNestedOneWithoutUserInput
    monthly_featured_book?: monthly_featured_bookCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_book_readerInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    monthly_featured_bookId?: string | null
    favoriteBooks?: bookUncheckedCreateNestedManyWithoutFavoriteByUsersInput
    passwordReset?: passwordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_book_readerInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_book_readerInput, userUncheckedCreateWithoutUser_book_readerInput>
  }

  export type bookCreateWithoutUser_book_readerIdInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
    category: CategoryCreateNestedOneWithoutBooksInput
    favoriteByUsers?: userCreateNestedManyWithoutFavoriteBooksInput
  }

  export type bookUncheckedCreateWithoutUser_book_readerIdInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    categoryId: string
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
    favoriteByUsers?: userUncheckedCreateNestedManyWithoutFavoriteBooksInput
  }

  export type bookCreateOrConnectWithoutUser_book_readerIdInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutUser_book_readerIdInput, bookUncheckedCreateWithoutUser_book_readerIdInput>
  }

  export type monthly_featured_bookCreateWithoutUser_book_readerIdInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
    category: CategoryCreateNestedOneWithoutMonthly_featured_bookInput
    user?: userCreateNestedManyWithoutMonthly_featured_bookInput
  }

  export type monthly_featured_bookUncheckedCreateWithoutUser_book_readerIdInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    categoryId: string
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
    user?: userUncheckedCreateNestedManyWithoutMonthly_featured_bookInput
  }

  export type monthly_featured_bookCreateOrConnectWithoutUser_book_readerIdInput = {
    where: monthly_featured_bookWhereUniqueInput
    create: XOR<monthly_featured_bookCreateWithoutUser_book_readerIdInput, monthly_featured_bookUncheckedCreateWithoutUser_book_readerIdInput>
  }

  export type userUpsertWithoutUser_book_readerInput = {
    update: XOR<userUpdateWithoutUser_book_readerInput, userUncheckedUpdateWithoutUser_book_readerInput>
    create: XOR<userCreateWithoutUser_book_readerInput, userUncheckedCreateWithoutUser_book_readerInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_book_readerInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_book_readerInput, userUncheckedUpdateWithoutUser_book_readerInput>
  }

  export type userUpdateWithoutUser_book_readerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoriteBooks?: bookUpdateManyWithoutFavoriteByUsersNestedInput
    passwordReset?: passwordResetUpdateOneWithoutUserNestedInput
    monthly_featured_book?: monthly_featured_bookUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_book_readerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteBooks?: bookUncheckedUpdateManyWithoutFavoriteByUsersNestedInput
    passwordReset?: passwordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type bookUpsertWithoutUser_book_readerIdInput = {
    update: XOR<bookUpdateWithoutUser_book_readerIdInput, bookUncheckedUpdateWithoutUser_book_readerIdInput>
    create: XOR<bookCreateWithoutUser_book_readerIdInput, bookUncheckedCreateWithoutUser_book_readerIdInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutUser_book_readerIdInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutUser_book_readerIdInput, bookUncheckedUpdateWithoutUser_book_readerIdInput>
  }

  export type bookUpdateWithoutUser_book_readerIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneRequiredWithoutBooksNestedInput
    favoriteByUsers?: userUpdateManyWithoutFavoriteBooksNestedInput
  }

  export type bookUncheckedUpdateWithoutUser_book_readerIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    favoriteByUsers?: userUncheckedUpdateManyWithoutFavoriteBooksNestedInput
  }

  export type monthly_featured_bookUpsertWithoutUser_book_readerIdInput = {
    update: XOR<monthly_featured_bookUpdateWithoutUser_book_readerIdInput, monthly_featured_bookUncheckedUpdateWithoutUser_book_readerIdInput>
    create: XOR<monthly_featured_bookCreateWithoutUser_book_readerIdInput, monthly_featured_bookUncheckedCreateWithoutUser_book_readerIdInput>
    where?: monthly_featured_bookWhereInput
  }

  export type monthly_featured_bookUpdateToOneWithWhereWithoutUser_book_readerIdInput = {
    where?: monthly_featured_bookWhereInput
    data: XOR<monthly_featured_bookUpdateWithoutUser_book_readerIdInput, monthly_featured_bookUncheckedUpdateWithoutUser_book_readerIdInput>
  }

  export type monthly_featured_bookUpdateWithoutUser_book_readerIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneRequiredWithoutMonthly_featured_bookNestedInput
    user?: userUpdateManyWithoutMonthly_featured_bookNestedInput
  }

  export type monthly_featured_bookUncheckedUpdateWithoutUser_book_readerIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: userUncheckedUpdateManyWithoutMonthly_featured_bookNestedInput
  }

  export type bookCreateWithoutCategoryInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
    favoriteByUsers?: userCreateNestedManyWithoutFavoriteBooksInput
    user_book_readerId?: user_book_readerCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
    favoriteByUsers?: userUncheckedCreateNestedManyWithoutFavoriteBooksInput
    user_book_readerId?: user_book_readerUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutCategoryInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutCategoryInput, bookUncheckedCreateWithoutCategoryInput>
  }

  export type bookCreateManyCategoryInputEnvelope = {
    data: bookCreateManyCategoryInput | bookCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type monthly_featured_bookCreateWithoutCategoryInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
    user_book_readerId?: user_book_readerCreateNestedManyWithoutMonthly_featured_bookInput
    user?: userCreateNestedManyWithoutMonthly_featured_bookInput
  }

  export type monthly_featured_bookUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
    user_book_readerId?: user_book_readerUncheckedCreateNestedManyWithoutMonthly_featured_bookInput
    user?: userUncheckedCreateNestedManyWithoutMonthly_featured_bookInput
  }

  export type monthly_featured_bookCreateOrConnectWithoutCategoryInput = {
    where: monthly_featured_bookWhereUniqueInput
    create: XOR<monthly_featured_bookCreateWithoutCategoryInput, monthly_featured_bookUncheckedCreateWithoutCategoryInput>
  }

  export type monthly_featured_bookCreateManyCategoryInputEnvelope = {
    data: monthly_featured_bookCreateManyCategoryInput | monthly_featured_bookCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type bookUpsertWithWhereUniqueWithoutCategoryInput = {
    where: bookWhereUniqueInput
    update: XOR<bookUpdateWithoutCategoryInput, bookUncheckedUpdateWithoutCategoryInput>
    create: XOR<bookCreateWithoutCategoryInput, bookUncheckedCreateWithoutCategoryInput>
  }

  export type bookUpdateWithWhereUniqueWithoutCategoryInput = {
    where: bookWhereUniqueInput
    data: XOR<bookUpdateWithoutCategoryInput, bookUncheckedUpdateWithoutCategoryInput>
  }

  export type bookUpdateManyWithWhereWithoutCategoryInput = {
    where: bookScalarWhereInput
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyWithoutCategoryInput>
  }

  export type monthly_featured_bookUpsertWithWhereUniqueWithoutCategoryInput = {
    where: monthly_featured_bookWhereUniqueInput
    update: XOR<monthly_featured_bookUpdateWithoutCategoryInput, monthly_featured_bookUncheckedUpdateWithoutCategoryInput>
    create: XOR<monthly_featured_bookCreateWithoutCategoryInput, monthly_featured_bookUncheckedCreateWithoutCategoryInput>
  }

  export type monthly_featured_bookUpdateWithWhereUniqueWithoutCategoryInput = {
    where: monthly_featured_bookWhereUniqueInput
    data: XOR<monthly_featured_bookUpdateWithoutCategoryInput, monthly_featured_bookUncheckedUpdateWithoutCategoryInput>
  }

  export type monthly_featured_bookUpdateManyWithWhereWithoutCategoryInput = {
    where: monthly_featured_bookScalarWhereInput
    data: XOR<monthly_featured_bookUpdateManyMutationInput, monthly_featured_bookUncheckedUpdateManyWithoutCategoryInput>
  }

  export type monthly_featured_bookScalarWhereInput = {
    AND?: monthly_featured_bookScalarWhereInput | monthly_featured_bookScalarWhereInput[]
    OR?: monthly_featured_bookScalarWhereInput[]
    NOT?: monthly_featured_bookScalarWhereInput | monthly_featured_bookScalarWhereInput[]
    id?: StringFilter<"monthly_featured_book"> | string
    title?: StringFilter<"monthly_featured_book"> | string
    author?: StringFilter<"monthly_featured_book"> | string
    description?: StringFilter<"monthly_featured_book"> | string
    cover?: StringNullableFilter<"monthly_featured_book"> | string | null
    coverPath?: StringNullableFilter<"monthly_featured_book"> | string | null
    filePath?: StringNullableFilter<"monthly_featured_book"> | string | null
    categoryId?: StringFilter<"monthly_featured_book"> | string
    price?: FloatFilter<"monthly_featured_book"> | number
    rating?: FloatNullableFilter<"monthly_featured_book"> | number | null
    reviewCount?: IntNullableFilter<"monthly_featured_book"> | number | null
    createdAt?: DateTimeFilter<"monthly_featured_book"> | Date | string
    updatedAt?: DateTimeFilter<"monthly_featured_book"> | Date | string
    originalBookId?: StringNullableFilter<"monthly_featured_book"> | string | null
    monthlyCandidate?: BoolNullableFilter<"monthly_featured_book"> | boolean | null
  }

  export type CategoryCreateWithoutBooksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    monthly_featured_book?: monthly_featured_bookCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutBooksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    monthly_featured_book?: monthly_featured_bookUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutBooksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutBooksInput, CategoryUncheckedCreateWithoutBooksInput>
  }

  export type userCreateWithoutFavoriteBooksInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    user_book_reader?: user_book_readerCreateNestedManyWithoutUserInput
    passwordReset?: passwordResetCreateNestedOneWithoutUserInput
    monthly_featured_book?: monthly_featured_bookCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutFavoriteBooksInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    monthly_featured_bookId?: string | null
    user_book_reader?: user_book_readerUncheckedCreateNestedManyWithoutUserInput
    passwordReset?: passwordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutFavoriteBooksInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFavoriteBooksInput, userUncheckedCreateWithoutFavoriteBooksInput>
  }

  export type user_book_readerCreateWithoutBookInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutUser_book_readerInput
    monthly_featured_book?: monthly_featured_bookCreateNestedOneWithoutUser_book_readerIdInput
  }

  export type user_book_readerUncheckedCreateWithoutBookInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    monthly_featured_bookId?: string | null
  }

  export type user_book_readerCreateOrConnectWithoutBookInput = {
    where: user_book_readerWhereUniqueInput
    create: XOR<user_book_readerCreateWithoutBookInput, user_book_readerUncheckedCreateWithoutBookInput>
  }

  export type user_book_readerCreateManyBookInputEnvelope = {
    data: user_book_readerCreateManyBookInput | user_book_readerCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutBooksInput = {
    update: XOR<CategoryUpdateWithoutBooksInput, CategoryUncheckedUpdateWithoutBooksInput>
    create: XOR<CategoryCreateWithoutBooksInput, CategoryUncheckedCreateWithoutBooksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutBooksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutBooksInput, CategoryUncheckedUpdateWithoutBooksInput>
  }

  export type CategoryUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_featured_book?: monthly_featured_bookUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_featured_book?: monthly_featured_bookUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type userUpsertWithWhereUniqueWithoutFavoriteBooksInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutFavoriteBooksInput, userUncheckedUpdateWithoutFavoriteBooksInput>
    create: XOR<userCreateWithoutFavoriteBooksInput, userUncheckedCreateWithoutFavoriteBooksInput>
  }

  export type userUpdateWithWhereUniqueWithoutFavoriteBooksInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutFavoriteBooksInput, userUncheckedUpdateWithoutFavoriteBooksInput>
  }

  export type userUpdateManyWithWhereWithoutFavoriteBooksInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutFavoriteBooksInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    emailVerified?: DateTimeNullableFilter<"user"> | Date | string | null
    image?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    role?: StringFilter<"user"> | string
    subscriptionId?: StringNullableFilter<"user"> | string | null
    subscriptionStatus?: StringNullableFilter<"user"> | string | null
    subscriptionPlan?: StringNullableFilter<"user"> | string | null
    subscriptionPrice?: FloatNullableFilter<"user"> | number | null
    subscriptionEndDate?: DateTimeNullableFilter<"user"> | Date | string | null
    monthly_featured_bookId?: StringNullableFilter<"user"> | string | null
  }

  export type user_book_readerUpsertWithWhereUniqueWithoutBookInput = {
    where: user_book_readerWhereUniqueInput
    update: XOR<user_book_readerUpdateWithoutBookInput, user_book_readerUncheckedUpdateWithoutBookInput>
    create: XOR<user_book_readerCreateWithoutBookInput, user_book_readerUncheckedCreateWithoutBookInput>
  }

  export type user_book_readerUpdateWithWhereUniqueWithoutBookInput = {
    where: user_book_readerWhereUniqueInput
    data: XOR<user_book_readerUpdateWithoutBookInput, user_book_readerUncheckedUpdateWithoutBookInput>
  }

  export type user_book_readerUpdateManyWithWhereWithoutBookInput = {
    where: user_book_readerScalarWhereInput
    data: XOR<user_book_readerUpdateManyMutationInput, user_book_readerUncheckedUpdateManyWithoutBookInput>
  }

  export type userCreateWithoutPasswordResetInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    favoriteBooks?: bookCreateNestedManyWithoutFavoriteByUsersInput
    user_book_reader?: user_book_readerCreateNestedManyWithoutUserInput
    monthly_featured_book?: monthly_featured_bookCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutPasswordResetInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    monthly_featured_bookId?: string | null
    favoriteBooks?: bookUncheckedCreateNestedManyWithoutFavoriteByUsersInput
    user_book_reader?: user_book_readerUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutPasswordResetInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPasswordResetInput, userUncheckedCreateWithoutPasswordResetInput>
  }

  export type userUpsertWithoutPasswordResetInput = {
    update: XOR<userUpdateWithoutPasswordResetInput, userUncheckedUpdateWithoutPasswordResetInput>
    create: XOR<userCreateWithoutPasswordResetInput, userUncheckedCreateWithoutPasswordResetInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPasswordResetInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPasswordResetInput, userUncheckedUpdateWithoutPasswordResetInput>
  }

  export type userUpdateWithoutPasswordResetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoriteBooks?: bookUpdateManyWithoutFavoriteByUsersNestedInput
    user_book_reader?: user_book_readerUpdateManyWithoutUserNestedInput
    monthly_featured_book?: monthly_featured_bookUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutPasswordResetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
    favoriteBooks?: bookUncheckedUpdateManyWithoutFavoriteByUsersNestedInput
    user_book_reader?: user_book_readerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryCreateWithoutMonthly_featured_bookInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: bookCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutMonthly_featured_bookInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: bookUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutMonthly_featured_bookInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutMonthly_featured_bookInput, CategoryUncheckedCreateWithoutMonthly_featured_bookInput>
  }

  export type user_book_readerCreateWithoutMonthly_featured_bookInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutUser_book_readerInput
    book: bookCreateNestedOneWithoutUser_book_readerIdInput
  }

  export type user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    userId: string
    bookId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type user_book_readerCreateOrConnectWithoutMonthly_featured_bookInput = {
    where: user_book_readerWhereUniqueInput
    create: XOR<user_book_readerCreateWithoutMonthly_featured_bookInput, user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput>
  }

  export type user_book_readerCreateManyMonthly_featured_bookInputEnvelope = {
    data: user_book_readerCreateManyMonthly_featured_bookInput | user_book_readerCreateManyMonthly_featured_bookInput[]
    skipDuplicates?: boolean
  }

  export type userCreateWithoutMonthly_featured_bookInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    favoriteBooks?: bookCreateNestedManyWithoutFavoriteByUsersInput
    user_book_reader?: user_book_readerCreateNestedManyWithoutUserInput
    passwordReset?: passwordResetCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutMonthly_featured_bookInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
    favoriteBooks?: bookUncheckedCreateNestedManyWithoutFavoriteByUsersInput
    user_book_reader?: user_book_readerUncheckedCreateNestedManyWithoutUserInput
    passwordReset?: passwordResetUncheckedCreateNestedOneWithoutUserInput
  }

  export type userCreateOrConnectWithoutMonthly_featured_bookInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutMonthly_featured_bookInput, userUncheckedCreateWithoutMonthly_featured_bookInput>
  }

  export type userCreateManyMonthly_featured_bookInputEnvelope = {
    data: userCreateManyMonthly_featured_bookInput | userCreateManyMonthly_featured_bookInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutMonthly_featured_bookInput = {
    update: XOR<CategoryUpdateWithoutMonthly_featured_bookInput, CategoryUncheckedUpdateWithoutMonthly_featured_bookInput>
    create: XOR<CategoryCreateWithoutMonthly_featured_bookInput, CategoryUncheckedCreateWithoutMonthly_featured_bookInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutMonthly_featured_bookInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutMonthly_featured_bookInput, CategoryUncheckedUpdateWithoutMonthly_featured_bookInput>
  }

  export type CategoryUpdateWithoutMonthly_featured_bookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: bookUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutMonthly_featured_bookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: bookUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type user_book_readerUpsertWithWhereUniqueWithoutMonthly_featured_bookInput = {
    where: user_book_readerWhereUniqueInput
    update: XOR<user_book_readerUpdateWithoutMonthly_featured_bookInput, user_book_readerUncheckedUpdateWithoutMonthly_featured_bookInput>
    create: XOR<user_book_readerCreateWithoutMonthly_featured_bookInput, user_book_readerUncheckedCreateWithoutMonthly_featured_bookInput>
  }

  export type user_book_readerUpdateWithWhereUniqueWithoutMonthly_featured_bookInput = {
    where: user_book_readerWhereUniqueInput
    data: XOR<user_book_readerUpdateWithoutMonthly_featured_bookInput, user_book_readerUncheckedUpdateWithoutMonthly_featured_bookInput>
  }

  export type user_book_readerUpdateManyWithWhereWithoutMonthly_featured_bookInput = {
    where: user_book_readerScalarWhereInput
    data: XOR<user_book_readerUpdateManyMutationInput, user_book_readerUncheckedUpdateManyWithoutMonthly_featured_bookInput>
  }

  export type userUpsertWithWhereUniqueWithoutMonthly_featured_bookInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutMonthly_featured_bookInput, userUncheckedUpdateWithoutMonthly_featured_bookInput>
    create: XOR<userCreateWithoutMonthly_featured_bookInput, userUncheckedCreateWithoutMonthly_featured_bookInput>
  }

  export type userUpdateWithWhereUniqueWithoutMonthly_featured_bookInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutMonthly_featured_bookInput, userUncheckedUpdateWithoutMonthly_featured_bookInput>
  }

  export type userUpdateManyWithWhereWithoutMonthly_featured_bookInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutMonthly_featured_bookInput>
  }

  export type user_book_readerCreateManyUserInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    bookId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    monthly_featured_bookId?: string | null
  }

  export type bookUpdateWithoutFavoriteByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    category?: CategoryUpdateOneRequiredWithoutBooksNestedInput
    user_book_readerId?: user_book_readerUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutFavoriteByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_book_readerId?: user_book_readerUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateManyWithoutFavoriteByUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_book_readerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: bookUpdateOneRequiredWithoutUser_book_readerIdNestedInput
    monthly_featured_book?: monthly_featured_bookUpdateOneWithoutUser_book_readerIdNestedInput
  }

  export type user_book_readerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_book_readerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type bookCreateManyCategoryInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    monthlyCandidate?: boolean | null
  }

  export type monthly_featured_bookCreateManyCategoryInput = {
    id?: string
    title: string
    author: string
    description: string
    cover?: string | null
    coverPath?: string | null
    filePath?: string | null
    price: number
    rating?: number | null
    reviewCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    originalBookId?: string | null
    monthlyCandidate?: boolean | null
  }

  export type bookUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    favoriteByUsers?: userUpdateManyWithoutFavoriteBooksNestedInput
    user_book_readerId?: user_book_readerUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    favoriteByUsers?: userUncheckedUpdateManyWithoutFavoriteBooksNestedInput
    user_book_readerId?: user_book_readerUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type monthly_featured_bookUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_book_readerId?: user_book_readerUpdateManyWithoutMonthly_featured_bookNestedInput
    user?: userUpdateManyWithoutMonthly_featured_bookNestedInput
  }

  export type monthly_featured_bookUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user_book_readerId?: user_book_readerUncheckedUpdateManyWithoutMonthly_featured_bookNestedInput
    user?: userUncheckedUpdateManyWithoutMonthly_featured_bookNestedInput
  }

  export type monthly_featured_bookUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cover?: NullableStringFieldUpdateOperationsInput | string | null
    coverPath?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    originalBookId?: NullableStringFieldUpdateOperationsInput | string | null
    monthlyCandidate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_book_readerCreateManyBookInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    monthly_featured_bookId?: string | null
  }

  export type userUpdateWithoutFavoriteBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_book_reader?: user_book_readerUpdateManyWithoutUserNestedInput
    passwordReset?: passwordResetUpdateOneWithoutUserNestedInput
    monthly_featured_book?: monthly_featured_bookUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFavoriteBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
    user_book_reader?: user_book_readerUncheckedUpdateManyWithoutUserNestedInput
    passwordReset?: passwordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutFavoriteBooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_book_readerUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUser_book_readerNestedInput
    monthly_featured_book?: monthly_featured_bookUpdateOneWithoutUser_book_readerIdNestedInput
  }

  export type user_book_readerUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_book_readerUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    monthly_featured_bookId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type user_book_readerCreateManyMonthly_featured_bookInput = {
    id?: string
    pagesRead?: number
    pagesRemaining?: number
    pagesTotal?: number
    completed?: boolean
    userId: string
    bookId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userCreateManyMonthly_featured_bookInput = {
    id?: string
    name: string
    email: string
    password: string
    emailVerified?: Date | string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: string
    subscriptionId?: string | null
    subscriptionStatus?: string | null
    subscriptionPlan?: string | null
    subscriptionPrice?: number | null
    subscriptionEndDate?: Date | string | null
  }

  export type user_book_readerUpdateWithoutMonthly_featured_bookInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutUser_book_readerNestedInput
    book?: bookUpdateOneRequiredWithoutUser_book_readerIdNestedInput
  }

  export type user_book_readerUncheckedUpdateWithoutMonthly_featured_bookInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_book_readerUncheckedUpdateManyWithoutMonthly_featured_bookInput = {
    id?: StringFieldUpdateOperationsInput | string
    pagesRead?: IntFieldUpdateOperationsInput | number
    pagesRemaining?: IntFieldUpdateOperationsInput | number
    pagesTotal?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    bookId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUpdateWithoutMonthly_featured_bookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoriteBooks?: bookUpdateManyWithoutFavoriteByUsersNestedInput
    user_book_reader?: user_book_readerUpdateManyWithoutUserNestedInput
    passwordReset?: passwordResetUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutMonthly_featured_bookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favoriteBooks?: bookUncheckedUpdateManyWithoutFavoriteByUsersNestedInput
    user_book_reader?: user_book_readerUncheckedUpdateManyWithoutUserNestedInput
    passwordReset?: passwordResetUncheckedUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutMonthly_featured_bookInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionStatus?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPlan?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    subscriptionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
  export const dmmf: runtime.BaseDMMF
}