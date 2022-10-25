
export default () => ({
    database: {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema: 'DB_TEST.dbo',
        entities: ['dist/**/*.entity{.ts,.js}'],
            
        synchronize: false,
        extra: {
            trustServerCertificate: true,
        }
    }

})

