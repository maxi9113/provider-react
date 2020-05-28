const ServicesTasks = {

    async getTask() {        
        // let url = "http://www.mocky.io/v2/5ebf1ac532000070000c338b"
        let url = "api/"
        const res = await fetch(url)
        var data = await res.json()
        return data;
    },
    async addTask(task) {
        
        // let url = "http://www.mocky.io/v2/5ebf1ac532000070000c338b"
        let url = "api/"
        const res = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(task)
        })
        var data = await res.json()
        return data;
    },


}


export default ServicesTasks