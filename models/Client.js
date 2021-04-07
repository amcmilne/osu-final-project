module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define("Client", {
        
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })

    Client.associate = (models) => {
        Client.hasMany(models.Order, {
            // onDelete: "cascade"
        })
    }
    

    Client.beforeCreate = (dbClient) => {
        dbClient.fullName = dbClient.fullName.toLowerCase()
        
    }

    
    
    return Client;
}