import jsonApi from '../json-api'

const logic = {
    retrieveData() {
        return jsonApi.retrieveData()
            .then(data => data)
    }
}

export default logic