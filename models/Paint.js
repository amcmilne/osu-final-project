module.exports = ( sequelize, DataTypes ) => {
    const Paint = sequelize.define("Paint", {
        
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        pricePerGal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })

    
    return Paint
}