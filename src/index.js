const express = require('express');

const { ServerConfig } = require('./config');
const { City, Airport } = require('./models');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    // const city = await City.findByPk(2);
    // const airport = await Airport.create({ name: "my airport", code: "MA" })
    // console.log('airport :>> ', airport);
    // const airport = await city.createAirport({ name: "my airport 2", code: "MA2" })
    // console.log(airport)
    // const airports = await city.getAirports()
    // console.log(airports)
    // const myAirport = await Airport.findByPk(3)
    // console.log('myAirport >>', myAirport)
    // await city.removeAirport(myAirport) it will not work because cityId can not be null
    // await City.destroy({
    //     where: {
    //         id: 2
    //     }
    // })
});
