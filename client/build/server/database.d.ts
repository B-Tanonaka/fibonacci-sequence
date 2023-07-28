import mysql from 'mysql2/promise';
declare const db: {
    onAsync: (event: "enqueue") => globalThis.Promise<undefined>;
    escapeAsync: () => globalThis.Promise<unknown>;
    formatAsync: () => globalThis.Promise<unknown>;
    queryAsync: (options: mysql.QueryOptions) => globalThis.Promise<unknown>;
    executeAsync: (options: mysql.QueryOptions) => globalThis.Promise<unknown>;
    addListenerAsync: (eventName: string | symbol) => globalThis.Promise<any>;
    onceAsync: (eventName: string | symbol) => globalThis.Promise<any>;
    removeListenerAsync: (eventName: string | symbol) => globalThis.Promise<any>;
    offAsync: (eventName: string | symbol) => globalThis.Promise<any>;
    prependListenerAsync: (eventName: string | symbol) => globalThis.Promise<any>;
    prependOnceListenerAsync: (eventName: string | symbol) => globalThis.Promise<any>;
} & mysql.Pool;
export default db;
