let servers = [
    {id: 1, name: "AWS", status: "working"},
    {id: 2, name: "Google", status: "working"},
    {id: 3, name: "Yandex", status: "pending"},
]


const getAll = (req, res) =>{
     res.json(servers);
};

module.exports = getAll; 
