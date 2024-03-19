import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Multiplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;
  @Column({ type: 'double precision', default: 0 })
  multiplier: number;
}
