import { url } from "inspector";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('User')
export class User extends BaseEntity {
    constructor(init?: Partial<User>) {
        super();
        Object.assign(this, init);
    }
    @PrimaryGeneratedColumn('uuid', {name: 'id'})
    id : string;

    @Column({name: 'email', unique: true })
    email: string;

    @Column({name: 'password'})
    password: string;

    @Column({name: 'username'})
    username: string;
}