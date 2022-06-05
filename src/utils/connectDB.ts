import { Sequelize } from 'sequelize';
const sequelize = new Sequelize('elearning', 'root', 'daiprodn1235', {
  host: 'tidb.b46cada9.555a27ee.ap-southeast-1.prod.aws.tidbcloud.com',
  port: 4000,
  dialect: 'mysql',
});

export async function connectDB() {
  try {
    await sequelize.sync();
    console.log('Connection has been established successfully');
    console.log('-------------------------------------------');
  } catch (err: any) {
    throw new Error('Unable to connect to the database: "\n ' + err);
  }
}
export default sequelize;
