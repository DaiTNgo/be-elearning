import { DataTypes, Model } from 'sequelize';
import sequelize from '../utils/connectDB';
import TopicModel from './topic-model';

class CourseModel extends Model {
  declare course_id: number;
  declare instructor_id: number;
  declare price: string;
  declare description: string;
  declare name: string;
  declare image: string;
  declare type: string;
  declare watch: 'normal' | 'livestream' | 'tutorial';
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt: Date;
}
CourseModel.init(
  {
    course_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    instructor_id: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.STRING,
      defaultValue: '',
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT('tiny'),
      // defaultValue: '',
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    type: {
      type: DataTypes.STRING(100),
    },
    watch: {
      type: DataTypes.STRING(20),
      defaultValue: 'normal',
    },
  },
  {
    sequelize,
    paranoid: true,
    modelName: 'Course',
    tableName: 'courses',
  }
);
//1:n
CourseModel.hasMany(TopicModel, { foreignKey: 'course_id' });
TopicModel.belongsTo(CourseModel, { foreignKey: 'course_id' });

export default CourseModel;
