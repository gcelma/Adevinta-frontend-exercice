const jsonApi = {
    url: "https://jsonplaceholder.typicode.com",

    async retrieveData() {
        const response = await fetch(`${this.url}/posts`)

        const data = await response.json()
        return data
    }
}

export default jsonApi