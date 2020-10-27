import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration21603759386742 implements MigrationInterface {
    name = 'initialMigration21603759386742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "url" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "url_indentifier" character varying NOT NULL, "url" character varying NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_7421088122ee64b55556dfc3a91" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "url"`);
    }

}
