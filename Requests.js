class Requests {
    constructor()
    {}
    
    async carregarConexoes(){
        const apiResponse = await fetch("https://randomuser.me/api/?result=5");
        const data = await apiResponse.json();
        const { name, picture } = data.results[0];
        console.log({ name, picture });
    }
}

var req = new Requests();
req.carregarConexoes();