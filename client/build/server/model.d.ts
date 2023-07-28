import { RowDataPacket } from 'mysql2';
import { DataRow } from '../interfaces';
export declare const getMaxValue: () => Promise<[RowDataPacket[], import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket").FieldPacket[]]>;
export declare const getValueRange: (start: string, end: string) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/OkPacket").OkPacket | RowDataPacket[] | RowDataPacket[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket").OkPacket[] | import("mysql2/typings/mysql/lib/protocol/packets/ProcedurePacket").ProcedureCallPacket | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader").ResultSetHeader[], import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket").FieldPacket[]]>;
export declare const saveValue: (values: DataRow[]) => Promise<[import("mysql2/typings/mysql/lib/protocol/packets/OkPacket").OkPacket | RowDataPacket[] | RowDataPacket[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket").OkPacket[] | import("mysql2/typings/mysql/lib/protocol/packets/ProcedurePacket").ProcedureCallPacket | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader").ResultSetHeader[], import("mysql2/typings/mysql/lib/protocol/packets/FieldPacket").FieldPacket[]]>;
