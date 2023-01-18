import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity() // es un decorador que le dice a TypeORM que esta clase es una entidad
export class User extends BaseEntity{ 
  @PrimaryGeneratedColumn() // es un decorador que le dice a TypeORM que esta propiedad es una columna y es autoincrementable
  id: number;

  @Column()
  firstName: string;

  @Column({unique:true})
  email: string;

  @Column()
  lastName: string;

  @Column({ default: true})
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
