import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tolerance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;

  @Column()
  tolerance: string;
}
