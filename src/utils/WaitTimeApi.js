import axios from 'axios';
const BASEURL = 'https://api.themeparks.wiki/v1/entity/'

export default {
    search: function (query) {
        return axios.get(BASEURL + query + '/live');
    }
};