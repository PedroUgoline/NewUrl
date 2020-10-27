import { url } from "inspector";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('url')
export class Url extends BaseEntity {
    constructor(init?: Partial<Url>) {
        super();
        Object.assign(this, init);
    }
    @PrimaryGeneratedColumn('uuid', {name: 'id'})
    id : string;

    @Column({name: 'url_indentifier', unique: true })
    urlIndentifier: string;

    @Column({name: 'url'})
    url: string;

    @Column({name: 'count'})
    count: number;
}