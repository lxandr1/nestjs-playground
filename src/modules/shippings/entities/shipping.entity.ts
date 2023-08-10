import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  INIT = 'init',
  ON_PROGRESS = 'on_progress',
  DONE = 'done',
}

@Entity('shippings')
export class ShippingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  containerName: string;

  @Column({ type: 'enum', enum: Status, default: Status.INIT })
  status: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
