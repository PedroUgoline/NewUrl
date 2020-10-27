import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('url')
export class Url extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', {name: 'id'})
    id : string;

    @Column({name: 'url_indentifier'})
    urlIndentifier: string;

    @Column({name: 'url'})
    url: string;

    @Column({name: 'count'})
    count: number;
}