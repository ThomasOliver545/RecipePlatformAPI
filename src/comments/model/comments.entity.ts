import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';
import { UserEntity } from 'src/user/models/user.entity';
import { RecipeEntity } from 'src/recipe/model/recipe-entry.entity';
import { User } from 'src/user/models/user.interface';

@Entity('comments_entry')
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(
    type => UserEntity,
    user => user.id,
  )
  author: UserEntity;

  @Column()
  recipe_id: number;

  @Column()
  author_id: number;

  @ManyToOne(
    type => RecipeEntity,
    recipe => recipe.id,
  )
  @JoinColumn({ name: 'recipe_id', referencedColumnName: 'id' })
  comment: RecipeEntity;
}
