module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("Order", {
       
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        finalQuote: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        
    })

    Order.associate = (models) => {
        Order.belongsTo(models.Client, {
           foreignKey: {
               allowNull: false
           } 
        })
    }
    return Order;
}