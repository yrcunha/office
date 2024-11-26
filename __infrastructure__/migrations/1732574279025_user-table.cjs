/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createSequence("user_id_seq", {
    type: "bigint",
    minvalue: 1,
    start: 1,
    increment: 1,
    cache: 1,
    ifNotExists: true,
  });

  pgm.createTable(
    "users",
    {
      id: {
        type: "bigint",
        primaryKey: true,
        default: pgm.func("nextval('user_id_seq'::regclass)"),
      },
      email: {
        type: "text",
        notNull: true,
        unique: true,
      },
      phone: {
        type: "text",
        notNull: true,
        unique: true,
      },
      created_at: {
        type: "timestamptz",
        notNull: true,
        default: pgm.func("now()"),
      },
    },
    {
      ifNotExists: true,
    },
  );
};
