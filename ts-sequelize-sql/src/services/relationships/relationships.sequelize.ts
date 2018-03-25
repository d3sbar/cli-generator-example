
/* tslint:disable:quotemark */
// Defines Sequelize model for service `relationships`. (Can be re-generated.)
import merge from 'lodash.merge';
import Sequelize, { DefineAttributes } from 'sequelize';
// tslint:disable-next-line no-unused-variable
const DataTypes = (Sequelize as any).DataTypes as Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.INTEGER
    },
    followerUuid: {
      type: DataTypes.INTEGER
    },
    followeeUuid: {
      type: DataTypes.INTEGER
    }
  } as DefineAttributes,
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end
