import app from "./config/server";
import sequelize from "./infrastructure/database";

const startApp = async() => {
    try{
        await sequelize.authenticate();
        app.listen(3350, () => console.log("Servidor rodando na porta 3350!"));
    }
    catch(error){
        console.log("Erro:", error);
    }
}

startApp();