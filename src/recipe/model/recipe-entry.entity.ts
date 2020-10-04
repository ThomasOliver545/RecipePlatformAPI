import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';

@Entity('recipe_entry')
export class RecipeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column('text', { array: true, nullable: true })
  ingr: string[];

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  @Column({ nullable: true })
  headerImage: string;

  @Column({ nullable: true })
  publishedDate: Date;

  @Column({ nullable: true })
  isPublished: boolean;

  @ManyToOne(
    type => UserEntity,
    user => user.recipeEntries,
  )
  author: UserEntity;

  @Column({ default: 0 })
  totalWeight: number;

  @Column('text', { array: true, default: '{}' })
  dietLabels: string[];

  @Column({ default: 0 })
  calorieQuantity: number;

  @Column({ default: 0 })
  proteinQuantity: number;

  @Column({ default: 0 })
  carbQuantity: number;

  @Column({ default: 0 })
  fatQuantity: number;

  @Column({ default: 0 })
  sugarQuantity: number;

  @Column('text', { array: true, nullable: true })
  likes: string[];

  @Column({ default: false, nullable: true })
  isLiked: boolean;
}