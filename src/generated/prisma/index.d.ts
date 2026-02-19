
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>
/**
 * Model Participant
 * 
 */
export type Participant = $Result.DefaultSelection<Prisma.$ParticipantPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Registrations
 * const registrations = await prisma.registration.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Registrations
   * const registrations = await prisma.registration.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.registration`: Exposes CRUD operations for the **Registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registration.findMany()
    * ```
    */
  get registration(): Prisma.RegistrationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participant`: Exposes CRUD operations for the **Participant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participants
    * const participants = await prisma.participant.findMany()
    * ```
    */
  get participant(): Prisma.ParticipantDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Registration: 'Registration',
    Participant: 'Participant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "registration" | "participant"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Registration: {
        payload: Prisma.$RegistrationPayload<ExtArgs>
        fields: Prisma.RegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findFirst: {
            args: Prisma.RegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findMany: {
            args: Prisma.RegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          create: {
            args: Prisma.RegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          createMany: {
            args: Prisma.RegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          delete: {
            args: Prisma.RegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          update: {
            args: Prisma.RegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistrationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          upsert: {
            args: Prisma.RegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistration>
          }
          groupBy: {
            args: Prisma.RegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCountAggregateOutputType> | number
          }
        }
      }
      Participant: {
        payload: Prisma.$ParticipantPayload<ExtArgs>
        fields: Prisma.ParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findFirst: {
            args: Prisma.ParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          findMany: {
            args: Prisma.ParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          create: {
            args: Prisma.ParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          createMany: {
            args: Prisma.ParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          delete: {
            args: Prisma.ParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          update: {
            args: Prisma.ParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          deleteMany: {
            args: Prisma.ParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>[]
          }
          upsert: {
            args: Prisma.ParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipantPayload>
          }
          aggregate: {
            args: Prisma.ParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipant>
          }
          groupBy: {
            args: Prisma.ParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipantCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    registration?: RegistrationOmit
    participant?: ParticipantOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type RegistrationCountOutputType
   */

  export type RegistrationCountOutputType = {
    members: number
  }

  export type RegistrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | RegistrationCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * RegistrationCountOutputType without action
   */
  export type RegistrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCountOutputType
     */
    select?: RegistrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistrationCountOutputType without action
   */
  export type RegistrationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationAvgAggregateOutputType = {
    teamSize: number | null
  }

  export type RegistrationSumAggregateOutputType = {
    teamSize: number | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: string | null
    teamName: string | null
    teamSize: number | null
    pptLink: string | null
    videoLink: string | null
    paymentScreenshot: string | null
    registrationStatus: string | null
    leaderId: string | null
    createdAt: Date | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: string | null
    teamName: string | null
    teamSize: number | null
    pptLink: string | null
    videoLink: string | null
    paymentScreenshot: string | null
    registrationStatus: string | null
    leaderId: string | null
    createdAt: Date | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    teamName: number
    teamSize: number
    pptLink: number
    videoLink: number
    paymentScreenshot: number
    registrationStatus: number
    leaderId: number
    createdAt: number
    _all: number
  }


  export type RegistrationAvgAggregateInputType = {
    teamSize?: true
  }

  export type RegistrationSumAggregateInputType = {
    teamSize?: true
  }

  export type RegistrationMinAggregateInputType = {
    id?: true
    teamName?: true
    teamSize?: true
    pptLink?: true
    videoLink?: true
    paymentScreenshot?: true
    registrationStatus?: true
    leaderId?: true
    createdAt?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    teamName?: true
    teamSize?: true
    pptLink?: true
    videoLink?: true
    paymentScreenshot?: true
    registrationStatus?: true
    leaderId?: true
    createdAt?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    teamName?: true
    teamSize?: true
    pptLink?: true
    videoLink?: true
    paymentScreenshot?: true
    registrationStatus?: true
    leaderId?: true
    createdAt?: true
    _all?: true
  }

  export type RegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registration to aggregate.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationMaxAggregateInputType
  }

  export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistration[P]>
      : GetScalarType<T[P], AggregateRegistration[P]>
  }




  export type RegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithAggregationInput | RegistrationOrderByWithAggregationInput[]
    by: RegistrationScalarFieldEnum[] | RegistrationScalarFieldEnum
    having?: RegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCountAggregateInputType | true
    _avg?: RegistrationAvgAggregateInputType
    _sum?: RegistrationSumAggregateInputType
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: string
    teamName: string
    teamSize: number
    pptLink: string
    videoLink: string
    paymentScreenshot: string
    registrationStatus: string
    leaderId: string
    createdAt: Date
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    teamSize?: boolean
    pptLink?: boolean
    videoLink?: boolean
    paymentScreenshot?: boolean
    registrationStatus?: boolean
    leaderId?: boolean
    createdAt?: boolean
    leader?: boolean | ParticipantDefaultArgs<ExtArgs>
    members?: boolean | Registration$membersArgs<ExtArgs>
    _count?: boolean | RegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    teamSize?: boolean
    pptLink?: boolean
    videoLink?: boolean
    paymentScreenshot?: boolean
    registrationStatus?: boolean
    leaderId?: boolean
    createdAt?: boolean
    leader?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamName?: boolean
    teamSize?: boolean
    pptLink?: boolean
    videoLink?: boolean
    paymentScreenshot?: boolean
    registrationStatus?: boolean
    leaderId?: boolean
    createdAt?: boolean
    leader?: boolean | ParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>

  export type RegistrationSelectScalar = {
    id?: boolean
    teamName?: boolean
    teamSize?: boolean
    pptLink?: boolean
    videoLink?: boolean
    paymentScreenshot?: boolean
    registrationStatus?: boolean
    leaderId?: boolean
    createdAt?: boolean
  }

  export type RegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamName" | "teamSize" | "pptLink" | "videoLink" | "paymentScreenshot" | "registrationStatus" | "leaderId" | "createdAt", ExtArgs["result"]["registration"]>
  export type RegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | ParticipantDefaultArgs<ExtArgs>
    members?: boolean | Registration$membersArgs<ExtArgs>
    _count?: boolean | RegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegistrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | ParticipantDefaultArgs<ExtArgs>
  }
  export type RegistrationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leader?: boolean | ParticipantDefaultArgs<ExtArgs>
  }

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {
      leader: Prisma.$ParticipantPayload<ExtArgs>
      members: Prisma.$ParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamName: string
      teamSize: number
      pptLink: string
      videoLink: string
      paymentScreenshot: string
      registrationStatus: string
      leaderId: string
      createdAt: Date
    }, ExtArgs["result"]["registration"]>
    composites: {}
  }

  type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = $Result.GetResult<Prisma.$RegistrationPayload, S>

  type RegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationCountAggregateInputType | true
    }

  export interface RegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registration'], meta: { name: 'Registration' } }
    /**
     * Find zero or one Registration that matches the filter.
     * @param {RegistrationFindUniqueArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationFindUniqueArgs>(args: SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationFindUniqueOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationFindFirstArgs>(args?: SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registration.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationWithIdOnly = await prisma.registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationFindManyArgs>(args?: SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registration.
     * @param {RegistrationCreateArgs} args - Arguments to create a Registration.
     * @example
     * // Create one Registration
     * const Registration = await prisma.registration.create({
     *   data: {
     *     // ... data to create a Registration
     *   }
     * })
     * 
     */
    create<T extends RegistrationCreateArgs>(args: SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {RegistrationCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCreateManyArgs>(args?: SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registrations and returns the data saved in the database.
     * @param {RegistrationCreateManyAndReturnArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registrations and only return the `id`
     * const registrationWithIdOnly = await prisma.registration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistrationCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registration.
     * @param {RegistrationDeleteArgs} args - Arguments to delete one Registration.
     * @example
     * // Delete one Registration
     * const Registration = await prisma.registration.delete({
     *   where: {
     *     // ... filter to delete one Registration
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDeleteArgs>(args: SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registration.
     * @param {RegistrationUpdateArgs} args - Arguments to update one Registration.
     * @example
     * // Update one Registration
     * const registration = await prisma.registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationUpdateArgs>(args: SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationUpdateManyArgs>(args: SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations and returns the data updated in the database.
     * @param {RegistrationUpdateManyAndReturnArgs} args - Arguments to update many Registrations.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registrations and only return the `id`
     * const registrationWithIdOnly = await prisma.registration.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistrationUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registration.
     * @param {RegistrationUpsertArgs} args - Arguments to update or create a Registration.
     * @example
     * // Update or create a Registration
     * const registration = await prisma.registration.upsert({
     *   create: {
     *     // ... data to create a Registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registration we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationUpsertArgs>(args: SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registration.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCountArgs>(
      args?: Subset<T, RegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationAggregateArgs>(args: Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>

    /**
     * Group by Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationGroupByArgs} args - Group by arguments.
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
      T extends RegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registration model
   */
  readonly fields: RegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leader<T extends ParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParticipantDefaultArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Registration$membersArgs<ExtArgs> = {}>(args?: Subset<T, Registration$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Registration model
   */
  interface RegistrationFieldRefs {
    readonly id: FieldRef<"Registration", 'String'>
    readonly teamName: FieldRef<"Registration", 'String'>
    readonly teamSize: FieldRef<"Registration", 'Int'>
    readonly pptLink: FieldRef<"Registration", 'String'>
    readonly videoLink: FieldRef<"Registration", 'String'>
    readonly paymentScreenshot: FieldRef<"Registration", 'String'>
    readonly registrationStatus: FieldRef<"Registration", 'String'>
    readonly leaderId: FieldRef<"Registration", 'String'>
    readonly createdAt: FieldRef<"Registration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registration findUnique
   */
  export type RegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findUniqueOrThrow
   */
  export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findFirst
   */
  export type RegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findFirstOrThrow
   */
  export type RegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findMany
   */
  export type RegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration create
   */
  export type RegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Registration.
     */
    data: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
  }

  /**
   * Registration createMany
   */
  export type RegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registration createManyAndReturn
   */
  export type RegistrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registration update
   */
  export type RegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Registration.
     */
    data: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
    /**
     * Choose, which Registration to update.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration updateMany
   */
  export type RegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
  }

  /**
   * Registration updateManyAndReturn
   */
  export type RegistrationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Registration upsert
   */
  export type RegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Registration to update in case it exists.
     */
    where: RegistrationWhereUniqueInput
    /**
     * In case the Registration found by the `where` argument doesn't exist, create a new Registration with this data.
     */
    create: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
    /**
     * In case the Registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
  }

  /**
   * Registration delete
   */
  export type RegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter which Registration to delete.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration deleteMany
   */
  export type RegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to delete.
     */
    limit?: number
  }

  /**
   * Registration.members
   */
  export type Registration$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    cursor?: ParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Registration without action
   */
  export type RegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
  }


  /**
   * Model Participant
   */

  export type AggregateParticipant = {
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  export type ParticipantMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    gender: string | null
    instituteName: string | null
    type: string | null
    course: string | null
    courseSpecialization: string | null
    graduationYear: string | null
    isAcesMember: boolean | null
    receipt: string | null
    registrationMemberId: string | null
  }

  export type ParticipantMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    gender: string | null
    instituteName: string | null
    type: string | null
    course: string | null
    courseSpecialization: string | null
    graduationYear: string | null
    isAcesMember: boolean | null
    receipt: string | null
    registrationMemberId: string | null
  }

  export type ParticipantCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    mobile: number
    gender: number
    instituteName: number
    type: number
    course: number
    courseSpecialization: number
    graduationYear: number
    isAcesMember: number
    receipt: number
    registrationMemberId: number
    _all: number
  }


  export type ParticipantMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    gender?: true
    instituteName?: true
    type?: true
    course?: true
    courseSpecialization?: true
    graduationYear?: true
    isAcesMember?: true
    receipt?: true
    registrationMemberId?: true
  }

  export type ParticipantMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    gender?: true
    instituteName?: true
    type?: true
    course?: true
    courseSpecialization?: true
    graduationYear?: true
    isAcesMember?: true
    receipt?: true
    registrationMemberId?: true
  }

  export type ParticipantCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    mobile?: true
    gender?: true
    instituteName?: true
    type?: true
    course?: true
    courseSpecialization?: true
    graduationYear?: true
    isAcesMember?: true
    receipt?: true
    registrationMemberId?: true
    _all?: true
  }

  export type ParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participant to aggregate.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participants
    **/
    _count?: true | ParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipantMaxAggregateInputType
  }

  export type GetParticipantAggregateType<T extends ParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipant[P]>
      : GetScalarType<T[P], AggregateParticipant[P]>
  }




  export type ParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipantWhereInput
    orderBy?: ParticipantOrderByWithAggregationInput | ParticipantOrderByWithAggregationInput[]
    by: ParticipantScalarFieldEnum[] | ParticipantScalarFieldEnum
    having?: ParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipantCountAggregateInputType | true
    _min?: ParticipantMinAggregateInputType
    _max?: ParticipantMaxAggregateInputType
  }

  export type ParticipantGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt: string | null
    registrationMemberId: string | null
    _count: ParticipantCountAggregateOutputType | null
    _min: ParticipantMinAggregateOutputType | null
    _max: ParticipantMaxAggregateOutputType | null
  }

  type GetParticipantGroupByPayload<T extends ParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipantGroupByOutputType[P]>
        }
      >
    >


  export type ParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    gender?: boolean
    instituteName?: boolean
    type?: boolean
    course?: boolean
    courseSpecialization?: boolean
    graduationYear?: boolean
    isAcesMember?: boolean
    receipt?: boolean
    registrationMemberId?: boolean
    registrationLeader?: boolean | Participant$registrationLeaderArgs<ExtArgs>
    registrationMember?: boolean | Participant$registrationMemberArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    gender?: boolean
    instituteName?: boolean
    type?: boolean
    course?: boolean
    courseSpecialization?: boolean
    graduationYear?: boolean
    isAcesMember?: boolean
    receipt?: boolean
    registrationMemberId?: boolean
    registrationMember?: boolean | Participant$registrationMemberArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    gender?: boolean
    instituteName?: boolean
    type?: boolean
    course?: boolean
    courseSpecialization?: boolean
    graduationYear?: boolean
    isAcesMember?: boolean
    receipt?: boolean
    registrationMemberId?: boolean
    registrationMember?: boolean | Participant$registrationMemberArgs<ExtArgs>
  }, ExtArgs["result"]["participant"]>

  export type ParticipantSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    mobile?: boolean
    gender?: boolean
    instituteName?: boolean
    type?: boolean
    course?: boolean
    courseSpecialization?: boolean
    graduationYear?: boolean
    isAcesMember?: boolean
    receipt?: boolean
    registrationMemberId?: boolean
  }

  export type ParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "mobile" | "gender" | "instituteName" | "type" | "course" | "courseSpecialization" | "graduationYear" | "isAcesMember" | "receipt" | "registrationMemberId", ExtArgs["result"]["participant"]>
  export type ParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrationLeader?: boolean | Participant$registrationLeaderArgs<ExtArgs>
    registrationMember?: boolean | Participant$registrationMemberArgs<ExtArgs>
  }
  export type ParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrationMember?: boolean | Participant$registrationMemberArgs<ExtArgs>
  }
  export type ParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrationMember?: boolean | Participant$registrationMemberArgs<ExtArgs>
  }

  export type $ParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participant"
    objects: {
      registrationLeader: Prisma.$RegistrationPayload<ExtArgs> | null
      registrationMember: Prisma.$RegistrationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      mobile: string
      gender: string
      instituteName: string
      type: string
      course: string
      courseSpecialization: string
      graduationYear: string
      isAcesMember: boolean
      receipt: string | null
      registrationMemberId: string | null
    }, ExtArgs["result"]["participant"]>
    composites: {}
  }

  type ParticipantGetPayload<S extends boolean | null | undefined | ParticipantDefaultArgs> = $Result.GetResult<Prisma.$ParticipantPayload, S>

  type ParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipantCountAggregateInputType | true
    }

  export interface ParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participant'], meta: { name: 'Participant' } }
    /**
     * Find zero or one Participant that matches the filter.
     * @param {ParticipantFindUniqueArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipantFindUniqueArgs>(args: SelectSubset<T, ParticipantFindUniqueArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipantFindUniqueOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipantFindFirstArgs>(args?: SelectSubset<T, ParticipantFindFirstArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindFirstOrThrowArgs} args - Arguments to find a Participant
     * @example
     * // Get one Participant
     * const participant = await prisma.participant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participants
     * const participants = await prisma.participant.findMany()
     * 
     * // Get first 10 Participants
     * const participants = await prisma.participant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participantWithIdOnly = await prisma.participant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipantFindManyArgs>(args?: SelectSubset<T, ParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participant.
     * @param {ParticipantCreateArgs} args - Arguments to create a Participant.
     * @example
     * // Create one Participant
     * const Participant = await prisma.participant.create({
     *   data: {
     *     // ... data to create a Participant
     *   }
     * })
     * 
     */
    create<T extends ParticipantCreateArgs>(args: SelectSubset<T, ParticipantCreateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participants.
     * @param {ParticipantCreateManyArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipantCreateManyArgs>(args?: SelectSubset<T, ParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participants and returns the data saved in the database.
     * @param {ParticipantCreateManyAndReturnArgs} args - Arguments to create many Participants.
     * @example
     * // Create many Participants
     * const participant = await prisma.participant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participant.
     * @param {ParticipantDeleteArgs} args - Arguments to delete one Participant.
     * @example
     * // Delete one Participant
     * const Participant = await prisma.participant.delete({
     *   where: {
     *     // ... filter to delete one Participant
     *   }
     * })
     * 
     */
    delete<T extends ParticipantDeleteArgs>(args: SelectSubset<T, ParticipantDeleteArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participant.
     * @param {ParticipantUpdateArgs} args - Arguments to update one Participant.
     * @example
     * // Update one Participant
     * const participant = await prisma.participant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipantUpdateArgs>(args: SelectSubset<T, ParticipantUpdateArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participants.
     * @param {ParticipantDeleteManyArgs} args - Arguments to filter Participants to delete.
     * @example
     * // Delete a few Participants
     * const { count } = await prisma.participant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipantDeleteManyArgs>(args?: SelectSubset<T, ParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipantUpdateManyArgs>(args: SelectSubset<T, ParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participants and returns the data updated in the database.
     * @param {ParticipantUpdateManyAndReturnArgs} args - Arguments to update many Participants.
     * @example
     * // Update many Participants
     * const participant = await prisma.participant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participants and only return the `id`
     * const participantWithIdOnly = await prisma.participant.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participant.
     * @param {ParticipantUpsertArgs} args - Arguments to update or create a Participant.
     * @example
     * // Update or create a Participant
     * const participant = await prisma.participant.upsert({
     *   create: {
     *     // ... data to create a Participant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participant we want to update
     *   }
     * })
     */
    upsert<T extends ParticipantUpsertArgs>(args: SelectSubset<T, ParticipantUpsertArgs<ExtArgs>>): Prisma__ParticipantClient<$Result.GetResult<Prisma.$ParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantCountArgs} args - Arguments to filter Participants to count.
     * @example
     * // Count the number of Participants
     * const count = await prisma.participant.count({
     *   where: {
     *     // ... the filter for the Participants we want to count
     *   }
     * })
    **/
    count<T extends ParticipantCountArgs>(
      args?: Subset<T, ParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipantAggregateArgs>(args: Subset<T, ParticipantAggregateArgs>): Prisma.PrismaPromise<GetParticipantAggregateType<T>>

    /**
     * Group by Participant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipantGroupByArgs} args - Group by arguments.
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
      T extends ParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipantGroupByArgs['orderBy'] }
        : { orderBy?: ParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participant model
   */
  readonly fields: ParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrationLeader<T extends Participant$registrationLeaderArgs<ExtArgs> = {}>(args?: Subset<T, Participant$registrationLeaderArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registrationMember<T extends Participant$registrationMemberArgs<ExtArgs> = {}>(args?: Subset<T, Participant$registrationMemberArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Participant model
   */
  interface ParticipantFieldRefs {
    readonly id: FieldRef<"Participant", 'String'>
    readonly firstName: FieldRef<"Participant", 'String'>
    readonly lastName: FieldRef<"Participant", 'String'>
    readonly email: FieldRef<"Participant", 'String'>
    readonly mobile: FieldRef<"Participant", 'String'>
    readonly gender: FieldRef<"Participant", 'String'>
    readonly instituteName: FieldRef<"Participant", 'String'>
    readonly type: FieldRef<"Participant", 'String'>
    readonly course: FieldRef<"Participant", 'String'>
    readonly courseSpecialization: FieldRef<"Participant", 'String'>
    readonly graduationYear: FieldRef<"Participant", 'String'>
    readonly isAcesMember: FieldRef<"Participant", 'Boolean'>
    readonly receipt: FieldRef<"Participant", 'String'>
    readonly registrationMemberId: FieldRef<"Participant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Participant findUnique
   */
  export type ParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findUniqueOrThrow
   */
  export type ParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant findFirst
   */
  export type ParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findFirstOrThrow
   */
  export type ParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participant to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participants.
     */
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant findMany
   */
  export type ParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter, which Participants to fetch.
     */
    where?: ParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participants to fetch.
     */
    orderBy?: ParticipantOrderByWithRelationInput | ParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participants.
     */
    cursor?: ParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participants.
     */
    skip?: number
    distinct?: ParticipantScalarFieldEnum | ParticipantScalarFieldEnum[]
  }

  /**
   * Participant create
   */
  export type ParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a Participant.
     */
    data: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
  }

  /**
   * Participant createMany
   */
  export type ParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participant createManyAndReturn
   */
  export type ParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many Participants.
     */
    data: ParticipantCreateManyInput | ParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant update
   */
  export type ParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a Participant.
     */
    data: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
    /**
     * Choose, which Participant to update.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant updateMany
   */
  export type ParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
  }

  /**
   * Participant updateManyAndReturn
   */
  export type ParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * The data used to update Participants.
     */
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyInput>
    /**
     * Filter which Participants to update
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participant upsert
   */
  export type ParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the Participant to update in case it exists.
     */
    where: ParticipantWhereUniqueInput
    /**
     * In case the Participant found by the `where` argument doesn't exist, create a new Participant with this data.
     */
    create: XOR<ParticipantCreateInput, ParticipantUncheckedCreateInput>
    /**
     * In case the Participant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipantUpdateInput, ParticipantUncheckedUpdateInput>
  }

  /**
   * Participant delete
   */
  export type ParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
    /**
     * Filter which Participant to delete.
     */
    where: ParticipantWhereUniqueInput
  }

  /**
   * Participant deleteMany
   */
  export type ParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participants to delete
     */
    where?: ParticipantWhereInput
    /**
     * Limit how many Participants to delete.
     */
    limit?: number
  }

  /**
   * Participant.registrationLeader
   */
  export type Participant$registrationLeaderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
  }

  /**
   * Participant.registrationMember
   */
  export type Participant$registrationMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
  }

  /**
   * Participant without action
   */
  export type ParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participant
     */
    select?: ParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participant
     */
    omit?: ParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipantInclude<ExtArgs> | null
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


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    teamName: 'teamName',
    teamSize: 'teamSize',
    pptLink: 'pptLink',
    videoLink: 'videoLink',
    paymentScreenshot: 'paymentScreenshot',
    registrationStatus: 'registrationStatus',
    leaderId: 'leaderId',
    createdAt: 'createdAt'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const ParticipantScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    mobile: 'mobile',
    gender: 'gender',
    instituteName: 'instituteName',
    type: 'type',
    course: 'course',
    courseSpecialization: 'courseSpecialization',
    graduationYear: 'graduationYear',
    isAcesMember: 'isAcesMember',
    receipt: 'receipt',
    registrationMemberId: 'registrationMemberId'
  };

  export type ParticipantScalarFieldEnum = (typeof ParticipantScalarFieldEnum)[keyof typeof ParticipantScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: StringFilter<"Registration"> | string
    teamName?: StringFilter<"Registration"> | string
    teamSize?: IntFilter<"Registration"> | number
    pptLink?: StringFilter<"Registration"> | string
    videoLink?: StringFilter<"Registration"> | string
    paymentScreenshot?: StringFilter<"Registration"> | string
    registrationStatus?: StringFilter<"Registration"> | string
    leaderId?: StringFilter<"Registration"> | string
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    leader?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    members?: ParticipantListRelationFilter
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamSize?: SortOrder
    pptLink?: SortOrder
    videoLink?: SortOrder
    paymentScreenshot?: SortOrder
    registrationStatus?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
    leader?: ParticipantOrderByWithRelationInput
    members?: ParticipantOrderByRelationAggregateInput
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    leaderId?: string
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    teamName?: StringFilter<"Registration"> | string
    teamSize?: IntFilter<"Registration"> | number
    pptLink?: StringFilter<"Registration"> | string
    videoLink?: StringFilter<"Registration"> | string
    paymentScreenshot?: StringFilter<"Registration"> | string
    registrationStatus?: StringFilter<"Registration"> | string
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    leader?: XOR<ParticipantScalarRelationFilter, ParticipantWhereInput>
    members?: ParticipantListRelationFilter
  }, "id" | "leaderId">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamSize?: SortOrder
    pptLink?: SortOrder
    videoLink?: SortOrder
    paymentScreenshot?: SortOrder
    registrationStatus?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _avg?: RegistrationAvgOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
    _sum?: RegistrationSumOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Registration"> | string
    teamName?: StringWithAggregatesFilter<"Registration"> | string
    teamSize?: IntWithAggregatesFilter<"Registration"> | number
    pptLink?: StringWithAggregatesFilter<"Registration"> | string
    videoLink?: StringWithAggregatesFilter<"Registration"> | string
    paymentScreenshot?: StringWithAggregatesFilter<"Registration"> | string
    registrationStatus?: StringWithAggregatesFilter<"Registration"> | string
    leaderId?: StringWithAggregatesFilter<"Registration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
  }

  export type ParticipantWhereInput = {
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    id?: StringFilter<"Participant"> | string
    firstName?: StringFilter<"Participant"> | string
    lastName?: StringFilter<"Participant"> | string
    email?: StringFilter<"Participant"> | string
    mobile?: StringFilter<"Participant"> | string
    gender?: StringFilter<"Participant"> | string
    instituteName?: StringFilter<"Participant"> | string
    type?: StringFilter<"Participant"> | string
    course?: StringFilter<"Participant"> | string
    courseSpecialization?: StringFilter<"Participant"> | string
    graduationYear?: StringFilter<"Participant"> | string
    isAcesMember?: BoolFilter<"Participant"> | boolean
    receipt?: StringNullableFilter<"Participant"> | string | null
    registrationMemberId?: StringNullableFilter<"Participant"> | string | null
    registrationLeader?: XOR<RegistrationNullableScalarRelationFilter, RegistrationWhereInput> | null
    registrationMember?: XOR<RegistrationNullableScalarRelationFilter, RegistrationWhereInput> | null
  }

  export type ParticipantOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    gender?: SortOrder
    instituteName?: SortOrder
    type?: SortOrder
    course?: SortOrder
    courseSpecialization?: SortOrder
    graduationYear?: SortOrder
    isAcesMember?: SortOrder
    receipt?: SortOrderInput | SortOrder
    registrationMemberId?: SortOrderInput | SortOrder
    registrationLeader?: RegistrationOrderByWithRelationInput
    registrationMember?: RegistrationOrderByWithRelationInput
  }

  export type ParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParticipantWhereInput | ParticipantWhereInput[]
    OR?: ParticipantWhereInput[]
    NOT?: ParticipantWhereInput | ParticipantWhereInput[]
    firstName?: StringFilter<"Participant"> | string
    lastName?: StringFilter<"Participant"> | string
    email?: StringFilter<"Participant"> | string
    mobile?: StringFilter<"Participant"> | string
    gender?: StringFilter<"Participant"> | string
    instituteName?: StringFilter<"Participant"> | string
    type?: StringFilter<"Participant"> | string
    course?: StringFilter<"Participant"> | string
    courseSpecialization?: StringFilter<"Participant"> | string
    graduationYear?: StringFilter<"Participant"> | string
    isAcesMember?: BoolFilter<"Participant"> | boolean
    receipt?: StringNullableFilter<"Participant"> | string | null
    registrationMemberId?: StringNullableFilter<"Participant"> | string | null
    registrationLeader?: XOR<RegistrationNullableScalarRelationFilter, RegistrationWhereInput> | null
    registrationMember?: XOR<RegistrationNullableScalarRelationFilter, RegistrationWhereInput> | null
  }, "id">

  export type ParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    gender?: SortOrder
    instituteName?: SortOrder
    type?: SortOrder
    course?: SortOrder
    courseSpecialization?: SortOrder
    graduationYear?: SortOrder
    isAcesMember?: SortOrder
    receipt?: SortOrderInput | SortOrder
    registrationMemberId?: SortOrderInput | SortOrder
    _count?: ParticipantCountOrderByAggregateInput
    _max?: ParticipantMaxOrderByAggregateInput
    _min?: ParticipantMinOrderByAggregateInput
  }

  export type ParticipantScalarWhereWithAggregatesInput = {
    AND?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    OR?: ParticipantScalarWhereWithAggregatesInput[]
    NOT?: ParticipantScalarWhereWithAggregatesInput | ParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Participant"> | string
    firstName?: StringWithAggregatesFilter<"Participant"> | string
    lastName?: StringWithAggregatesFilter<"Participant"> | string
    email?: StringWithAggregatesFilter<"Participant"> | string
    mobile?: StringWithAggregatesFilter<"Participant"> | string
    gender?: StringWithAggregatesFilter<"Participant"> | string
    instituteName?: StringWithAggregatesFilter<"Participant"> | string
    type?: StringWithAggregatesFilter<"Participant"> | string
    course?: StringWithAggregatesFilter<"Participant"> | string
    courseSpecialization?: StringWithAggregatesFilter<"Participant"> | string
    graduationYear?: StringWithAggregatesFilter<"Participant"> | string
    isAcesMember?: BoolWithAggregatesFilter<"Participant"> | boolean
    receipt?: StringNullableWithAggregatesFilter<"Participant"> | string | null
    registrationMemberId?: StringNullableWithAggregatesFilter<"Participant"> | string | null
  }

  export type RegistrationCreateInput = {
    id?: string
    teamName: string
    teamSize: number
    pptLink: string
    videoLink: string
    paymentScreenshot: string
    registrationStatus?: string
    createdAt?: Date | string
    leader: ParticipantCreateNestedOneWithoutRegistrationLeaderInput
    members?: ParticipantCreateNestedManyWithoutRegistrationMemberInput
  }

  export type RegistrationUncheckedCreateInput = {
    id?: string
    teamName: string
    teamSize: number
    pptLink: string
    videoLink: string
    paymentScreenshot: string
    registrationStatus?: string
    leaderId: string
    createdAt?: Date | string
    members?: ParticipantUncheckedCreateNestedManyWithoutRegistrationMemberInput
  }

  export type RegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    pptLink?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    paymentScreenshot?: StringFieldUpdateOperationsInput | string
    registrationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: ParticipantUpdateOneRequiredWithoutRegistrationLeaderNestedInput
    members?: ParticipantUpdateManyWithoutRegistrationMemberNestedInput
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    pptLink?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    paymentScreenshot?: StringFieldUpdateOperationsInput | string
    registrationStatus?: StringFieldUpdateOperationsInput | string
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ParticipantUncheckedUpdateManyWithoutRegistrationMemberNestedInput
  }

  export type RegistrationCreateManyInput = {
    id?: string
    teamName: string
    teamSize: number
    pptLink: string
    videoLink: string
    paymentScreenshot: string
    registrationStatus?: string
    leaderId: string
    createdAt?: Date | string
  }

  export type RegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    pptLink?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    paymentScreenshot?: StringFieldUpdateOperationsInput | string
    registrationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    pptLink?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    paymentScreenshot?: StringFieldUpdateOperationsInput | string
    registrationStatus?: StringFieldUpdateOperationsInput | string
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt?: string | null
    registrationLeader?: RegistrationCreateNestedOneWithoutLeaderInput
    registrationMember?: RegistrationCreateNestedOneWithoutMembersInput
  }

  export type ParticipantUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt?: string | null
    registrationMemberId?: string | null
    registrationLeader?: RegistrationUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type ParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    registrationLeader?: RegistrationUpdateOneWithoutLeaderNestedInput
    registrationMember?: RegistrationUpdateOneWithoutMembersNestedInput
  }

  export type ParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    registrationMemberId?: NullableStringFieldUpdateOperationsInput | string | null
    registrationLeader?: RegistrationUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type ParticipantCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt?: string | null
    registrationMemberId?: string | null
  }

  export type ParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    registrationMemberId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ParticipantScalarRelationFilter = {
    is?: ParticipantWhereInput
    isNot?: ParticipantWhereInput
  }

  export type ParticipantListRelationFilter = {
    every?: ParticipantWhereInput
    some?: ParticipantWhereInput
    none?: ParticipantWhereInput
  }

  export type ParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamSize?: SortOrder
    pptLink?: SortOrder
    videoLink?: SortOrder
    paymentScreenshot?: SortOrder
    registrationStatus?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationAvgOrderByAggregateInput = {
    teamSize?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamSize?: SortOrder
    pptLink?: SortOrder
    videoLink?: SortOrder
    paymentScreenshot?: SortOrder
    registrationStatus?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    teamName?: SortOrder
    teamSize?: SortOrder
    pptLink?: SortOrder
    videoLink?: SortOrder
    paymentScreenshot?: SortOrder
    registrationStatus?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
  }

  export type RegistrationSumOrderByAggregateInput = {
    teamSize?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RegistrationNullableScalarRelationFilter = {
    is?: RegistrationWhereInput | null
    isNot?: RegistrationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    gender?: SortOrder
    instituteName?: SortOrder
    type?: SortOrder
    course?: SortOrder
    courseSpecialization?: SortOrder
    graduationYear?: SortOrder
    isAcesMember?: SortOrder
    receipt?: SortOrder
    registrationMemberId?: SortOrder
  }

  export type ParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    gender?: SortOrder
    instituteName?: SortOrder
    type?: SortOrder
    course?: SortOrder
    courseSpecialization?: SortOrder
    graduationYear?: SortOrder
    isAcesMember?: SortOrder
    receipt?: SortOrder
    registrationMemberId?: SortOrder
  }

  export type ParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    gender?: SortOrder
    instituteName?: SortOrder
    type?: SortOrder
    course?: SortOrder
    courseSpecialization?: SortOrder
    graduationYear?: SortOrder
    isAcesMember?: SortOrder
    receipt?: SortOrder
    registrationMemberId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ParticipantCreateNestedOneWithoutRegistrationLeaderInput = {
    create?: XOR<ParticipantCreateWithoutRegistrationLeaderInput, ParticipantUncheckedCreateWithoutRegistrationLeaderInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegistrationLeaderInput
    connect?: ParticipantWhereUniqueInput
  }

  export type ParticipantCreateNestedManyWithoutRegistrationMemberInput = {
    create?: XOR<ParticipantCreateWithoutRegistrationMemberInput, ParticipantUncheckedCreateWithoutRegistrationMemberInput> | ParticipantCreateWithoutRegistrationMemberInput[] | ParticipantUncheckedCreateWithoutRegistrationMemberInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegistrationMemberInput | ParticipantCreateOrConnectWithoutRegistrationMemberInput[]
    createMany?: ParticipantCreateManyRegistrationMemberInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type ParticipantUncheckedCreateNestedManyWithoutRegistrationMemberInput = {
    create?: XOR<ParticipantCreateWithoutRegistrationMemberInput, ParticipantUncheckedCreateWithoutRegistrationMemberInput> | ParticipantCreateWithoutRegistrationMemberInput[] | ParticipantUncheckedCreateWithoutRegistrationMemberInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegistrationMemberInput | ParticipantCreateOrConnectWithoutRegistrationMemberInput[]
    createMany?: ParticipantCreateManyRegistrationMemberInputEnvelope
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParticipantUpdateOneRequiredWithoutRegistrationLeaderNestedInput = {
    create?: XOR<ParticipantCreateWithoutRegistrationLeaderInput, ParticipantUncheckedCreateWithoutRegistrationLeaderInput>
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegistrationLeaderInput
    upsert?: ParticipantUpsertWithoutRegistrationLeaderInput
    connect?: ParticipantWhereUniqueInput
    update?: XOR<XOR<ParticipantUpdateToOneWithWhereWithoutRegistrationLeaderInput, ParticipantUpdateWithoutRegistrationLeaderInput>, ParticipantUncheckedUpdateWithoutRegistrationLeaderInput>
  }

  export type ParticipantUpdateManyWithoutRegistrationMemberNestedInput = {
    create?: XOR<ParticipantCreateWithoutRegistrationMemberInput, ParticipantUncheckedCreateWithoutRegistrationMemberInput> | ParticipantCreateWithoutRegistrationMemberInput[] | ParticipantUncheckedCreateWithoutRegistrationMemberInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegistrationMemberInput | ParticipantCreateOrConnectWithoutRegistrationMemberInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutRegistrationMemberInput | ParticipantUpsertWithWhereUniqueWithoutRegistrationMemberInput[]
    createMany?: ParticipantCreateManyRegistrationMemberInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutRegistrationMemberInput | ParticipantUpdateWithWhereUniqueWithoutRegistrationMemberInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutRegistrationMemberInput | ParticipantUpdateManyWithWhereWithoutRegistrationMemberInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type ParticipantUncheckedUpdateManyWithoutRegistrationMemberNestedInput = {
    create?: XOR<ParticipantCreateWithoutRegistrationMemberInput, ParticipantUncheckedCreateWithoutRegistrationMemberInput> | ParticipantCreateWithoutRegistrationMemberInput[] | ParticipantUncheckedCreateWithoutRegistrationMemberInput[]
    connectOrCreate?: ParticipantCreateOrConnectWithoutRegistrationMemberInput | ParticipantCreateOrConnectWithoutRegistrationMemberInput[]
    upsert?: ParticipantUpsertWithWhereUniqueWithoutRegistrationMemberInput | ParticipantUpsertWithWhereUniqueWithoutRegistrationMemberInput[]
    createMany?: ParticipantCreateManyRegistrationMemberInputEnvelope
    set?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    disconnect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    delete?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    connect?: ParticipantWhereUniqueInput | ParticipantWhereUniqueInput[]
    update?: ParticipantUpdateWithWhereUniqueWithoutRegistrationMemberInput | ParticipantUpdateWithWhereUniqueWithoutRegistrationMemberInput[]
    updateMany?: ParticipantUpdateManyWithWhereWithoutRegistrationMemberInput | ParticipantUpdateManyWithWhereWithoutRegistrationMemberInput[]
    deleteMany?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
  }

  export type RegistrationCreateNestedOneWithoutLeaderInput = {
    create?: XOR<RegistrationCreateWithoutLeaderInput, RegistrationUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutLeaderInput
    connect?: RegistrationWhereUniqueInput
  }

  export type RegistrationCreateNestedOneWithoutMembersInput = {
    create?: XOR<RegistrationCreateWithoutMembersInput, RegistrationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutMembersInput
    connect?: RegistrationWhereUniqueInput
  }

  export type RegistrationUncheckedCreateNestedOneWithoutLeaderInput = {
    create?: XOR<RegistrationCreateWithoutLeaderInput, RegistrationUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutLeaderInput
    connect?: RegistrationWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RegistrationUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<RegistrationCreateWithoutLeaderInput, RegistrationUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutLeaderInput
    upsert?: RegistrationUpsertWithoutLeaderInput
    disconnect?: RegistrationWhereInput | boolean
    delete?: RegistrationWhereInput | boolean
    connect?: RegistrationWhereUniqueInput
    update?: XOR<XOR<RegistrationUpdateToOneWithWhereWithoutLeaderInput, RegistrationUpdateWithoutLeaderInput>, RegistrationUncheckedUpdateWithoutLeaderInput>
  }

  export type RegistrationUpdateOneWithoutMembersNestedInput = {
    create?: XOR<RegistrationCreateWithoutMembersInput, RegistrationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutMembersInput
    upsert?: RegistrationUpsertWithoutMembersInput
    disconnect?: RegistrationWhereInput | boolean
    delete?: RegistrationWhereInput | boolean
    connect?: RegistrationWhereUniqueInput
    update?: XOR<XOR<RegistrationUpdateToOneWithWhereWithoutMembersInput, RegistrationUpdateWithoutMembersInput>, RegistrationUncheckedUpdateWithoutMembersInput>
  }

  export type RegistrationUncheckedUpdateOneWithoutLeaderNestedInput = {
    create?: XOR<RegistrationCreateWithoutLeaderInput, RegistrationUncheckedCreateWithoutLeaderInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutLeaderInput
    upsert?: RegistrationUpsertWithoutLeaderInput
    disconnect?: RegistrationWhereInput | boolean
    delete?: RegistrationWhereInput | boolean
    connect?: RegistrationWhereUniqueInput
    update?: XOR<XOR<RegistrationUpdateToOneWithWhereWithoutLeaderInput, RegistrationUpdateWithoutLeaderInput>, RegistrationUncheckedUpdateWithoutLeaderInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ParticipantCreateWithoutRegistrationLeaderInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt?: string | null
    registrationMember?: RegistrationCreateNestedOneWithoutMembersInput
  }

  export type ParticipantUncheckedCreateWithoutRegistrationLeaderInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt?: string | null
    registrationMemberId?: string | null
  }

  export type ParticipantCreateOrConnectWithoutRegistrationLeaderInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutRegistrationLeaderInput, ParticipantUncheckedCreateWithoutRegistrationLeaderInput>
  }

  export type ParticipantCreateWithoutRegistrationMemberInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt?: string | null
    registrationLeader?: RegistrationCreateNestedOneWithoutLeaderInput
  }

  export type ParticipantUncheckedCreateWithoutRegistrationMemberInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt?: string | null
    registrationLeader?: RegistrationUncheckedCreateNestedOneWithoutLeaderInput
  }

  export type ParticipantCreateOrConnectWithoutRegistrationMemberInput = {
    where: ParticipantWhereUniqueInput
    create: XOR<ParticipantCreateWithoutRegistrationMemberInput, ParticipantUncheckedCreateWithoutRegistrationMemberInput>
  }

  export type ParticipantCreateManyRegistrationMemberInputEnvelope = {
    data: ParticipantCreateManyRegistrationMemberInput | ParticipantCreateManyRegistrationMemberInput[]
    skipDuplicates?: boolean
  }

  export type ParticipantUpsertWithoutRegistrationLeaderInput = {
    update: XOR<ParticipantUpdateWithoutRegistrationLeaderInput, ParticipantUncheckedUpdateWithoutRegistrationLeaderInput>
    create: XOR<ParticipantCreateWithoutRegistrationLeaderInput, ParticipantUncheckedCreateWithoutRegistrationLeaderInput>
    where?: ParticipantWhereInput
  }

  export type ParticipantUpdateToOneWithWhereWithoutRegistrationLeaderInput = {
    where?: ParticipantWhereInput
    data: XOR<ParticipantUpdateWithoutRegistrationLeaderInput, ParticipantUncheckedUpdateWithoutRegistrationLeaderInput>
  }

  export type ParticipantUpdateWithoutRegistrationLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    registrationMember?: RegistrationUpdateOneWithoutMembersNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutRegistrationLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    registrationMemberId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParticipantUpsertWithWhereUniqueWithoutRegistrationMemberInput = {
    where: ParticipantWhereUniqueInput
    update: XOR<ParticipantUpdateWithoutRegistrationMemberInput, ParticipantUncheckedUpdateWithoutRegistrationMemberInput>
    create: XOR<ParticipantCreateWithoutRegistrationMemberInput, ParticipantUncheckedCreateWithoutRegistrationMemberInput>
  }

  export type ParticipantUpdateWithWhereUniqueWithoutRegistrationMemberInput = {
    where: ParticipantWhereUniqueInput
    data: XOR<ParticipantUpdateWithoutRegistrationMemberInput, ParticipantUncheckedUpdateWithoutRegistrationMemberInput>
  }

  export type ParticipantUpdateManyWithWhereWithoutRegistrationMemberInput = {
    where: ParticipantScalarWhereInput
    data: XOR<ParticipantUpdateManyMutationInput, ParticipantUncheckedUpdateManyWithoutRegistrationMemberInput>
  }

  export type ParticipantScalarWhereInput = {
    AND?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    OR?: ParticipantScalarWhereInput[]
    NOT?: ParticipantScalarWhereInput | ParticipantScalarWhereInput[]
    id?: StringFilter<"Participant"> | string
    firstName?: StringFilter<"Participant"> | string
    lastName?: StringFilter<"Participant"> | string
    email?: StringFilter<"Participant"> | string
    mobile?: StringFilter<"Participant"> | string
    gender?: StringFilter<"Participant"> | string
    instituteName?: StringFilter<"Participant"> | string
    type?: StringFilter<"Participant"> | string
    course?: StringFilter<"Participant"> | string
    courseSpecialization?: StringFilter<"Participant"> | string
    graduationYear?: StringFilter<"Participant"> | string
    isAcesMember?: BoolFilter<"Participant"> | boolean
    receipt?: StringNullableFilter<"Participant"> | string | null
    registrationMemberId?: StringNullableFilter<"Participant"> | string | null
  }

  export type RegistrationCreateWithoutLeaderInput = {
    id?: string
    teamName: string
    teamSize: number
    pptLink: string
    videoLink: string
    paymentScreenshot: string
    registrationStatus?: string
    createdAt?: Date | string
    members?: ParticipantCreateNestedManyWithoutRegistrationMemberInput
  }

  export type RegistrationUncheckedCreateWithoutLeaderInput = {
    id?: string
    teamName: string
    teamSize: number
    pptLink: string
    videoLink: string
    paymentScreenshot: string
    registrationStatus?: string
    createdAt?: Date | string
    members?: ParticipantUncheckedCreateNestedManyWithoutRegistrationMemberInput
  }

  export type RegistrationCreateOrConnectWithoutLeaderInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutLeaderInput, RegistrationUncheckedCreateWithoutLeaderInput>
  }

  export type RegistrationCreateWithoutMembersInput = {
    id?: string
    teamName: string
    teamSize: number
    pptLink: string
    videoLink: string
    paymentScreenshot: string
    registrationStatus?: string
    createdAt?: Date | string
    leader: ParticipantCreateNestedOneWithoutRegistrationLeaderInput
  }

  export type RegistrationUncheckedCreateWithoutMembersInput = {
    id?: string
    teamName: string
    teamSize: number
    pptLink: string
    videoLink: string
    paymentScreenshot: string
    registrationStatus?: string
    leaderId: string
    createdAt?: Date | string
  }

  export type RegistrationCreateOrConnectWithoutMembersInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutMembersInput, RegistrationUncheckedCreateWithoutMembersInput>
  }

  export type RegistrationUpsertWithoutLeaderInput = {
    update: XOR<RegistrationUpdateWithoutLeaderInput, RegistrationUncheckedUpdateWithoutLeaderInput>
    create: XOR<RegistrationCreateWithoutLeaderInput, RegistrationUncheckedCreateWithoutLeaderInput>
    where?: RegistrationWhereInput
  }

  export type RegistrationUpdateToOneWithWhereWithoutLeaderInput = {
    where?: RegistrationWhereInput
    data: XOR<RegistrationUpdateWithoutLeaderInput, RegistrationUncheckedUpdateWithoutLeaderInput>
  }

  export type RegistrationUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    pptLink?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    paymentScreenshot?: StringFieldUpdateOperationsInput | string
    registrationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ParticipantUpdateManyWithoutRegistrationMemberNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    pptLink?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    paymentScreenshot?: StringFieldUpdateOperationsInput | string
    registrationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ParticipantUncheckedUpdateManyWithoutRegistrationMemberNestedInput
  }

  export type RegistrationUpsertWithoutMembersInput = {
    update: XOR<RegistrationUpdateWithoutMembersInput, RegistrationUncheckedUpdateWithoutMembersInput>
    create: XOR<RegistrationCreateWithoutMembersInput, RegistrationUncheckedCreateWithoutMembersInput>
    where?: RegistrationWhereInput
  }

  export type RegistrationUpdateToOneWithWhereWithoutMembersInput = {
    where?: RegistrationWhereInput
    data: XOR<RegistrationUpdateWithoutMembersInput, RegistrationUncheckedUpdateWithoutMembersInput>
  }

  export type RegistrationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    pptLink?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    paymentScreenshot?: StringFieldUpdateOperationsInput | string
    registrationStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: ParticipantUpdateOneRequiredWithoutRegistrationLeaderNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    teamSize?: IntFieldUpdateOperationsInput | number
    pptLink?: StringFieldUpdateOperationsInput | string
    videoLink?: StringFieldUpdateOperationsInput | string
    paymentScreenshot?: StringFieldUpdateOperationsInput | string
    registrationStatus?: StringFieldUpdateOperationsInput | string
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipantCreateManyRegistrationMemberInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    mobile: string
    gender: string
    instituteName: string
    type: string
    course: string
    courseSpecialization: string
    graduationYear: string
    isAcesMember: boolean
    receipt?: string | null
  }

  export type ParticipantUpdateWithoutRegistrationMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    registrationLeader?: RegistrationUpdateOneWithoutLeaderNestedInput
  }

  export type ParticipantUncheckedUpdateWithoutRegistrationMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    registrationLeader?: RegistrationUncheckedUpdateOneWithoutLeaderNestedInput
  }

  export type ParticipantUncheckedUpdateManyWithoutRegistrationMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    instituteName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    course?: StringFieldUpdateOperationsInput | string
    courseSpecialization?: StringFieldUpdateOperationsInput | string
    graduationYear?: StringFieldUpdateOperationsInput | string
    isAcesMember?: BoolFieldUpdateOperationsInput | boolean
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
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