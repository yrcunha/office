/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable(
    "users",
    {
      id: {
        type: "char(26)",
        primaryKey: true,
      },
      name: {
        type: "text",
        notNull: true,
      },
      social_name: {
        type: "text",
        notNull: false,
      },
      document: {
        type: "varchar(11)",
        notNull: true,
        unique: true,
      },
      password: {
        type: "text",
        notNull: false,
      },
      professional_code: {
        type: "text",
        notNull: false,
        unique: true,
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
      status: {
        type: "boolean",
        default: true,
      },
      created_at: {
        type: "timestamptz",
        default: pgm.func("now()"),
      },
    },
    {
      ifNotExists: true,
    },
  );
};
