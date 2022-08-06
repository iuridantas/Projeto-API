const teamsbrazilian2022service = require('../services/teamsbrazilian2022.service');

const findALLteamsbrazilian2022controller = (req, res) => {
    const teamsbrazilian2022 = teamsbrazilian2022service.findALLteamsbrazilian2022service();
    res.send(teamsbrazilian2022)
};

const findByIdteambrazilian2022controller = (req, res) => {
    const idParam = Number(req.params.id);
    const chosenteamsbrazilian2022 = teamsbrazilian2022service.findByIdteambrazilian2022service(idParam);
    res.send(chosenteamsbrazilian2022);
};

module.exports = {
    findALLteamsbrazilian2022controller, 
    findByIdteambrazilian2022controller,
};