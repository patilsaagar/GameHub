import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '35656fcb01a140928969e1ff2bee166f'
    }
})