

import axios from 'axios';

export default {

    getc: function (service = '') {
        return axios
            .get('http://127.0.0.1:5000/api/' + service)
            .then(response => {
                return response;
            })
            .catch(error => {
                return error;
            });
    },


    postEvent: async function (service, request) {        

        return axios
            .post('http://127.0.0.1:5000/api/' + service, request)
            .then(response => {
                return {
                    error: false,
                    status: 200,
                    data: response.data
                };
            })
            .catch(error => {
                if (error.response) {
                    return {
                        error: true,
                        status: error.response.status,
                        data: error.response.data
                    };
                } else if (error.request) {
                    return {
                        error: true,
                        status: 500,
                        data: error.request
                    };
                } else {
                    return {
                        error: true,
                        status: 500,
                        data: error.message
                    };
                }
            });

    }

}