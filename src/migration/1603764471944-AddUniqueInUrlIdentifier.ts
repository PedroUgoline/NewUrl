import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUniqueInUrlIdentifier1603764471944 implements MigrationInterface {
    name = 'AddUniqueInUrlIdentifier1603764471944'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "url" ADD CONSTRAINT "UQ_0e0dc82bf538e48c7ec88f990ff" UNIQUE ("url_indentifier")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "url" DROP CONSTRAINT "UQ_0e0dc82bf538e48c7ec88f990ff"`);
    }

}
