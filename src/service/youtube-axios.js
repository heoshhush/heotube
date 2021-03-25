import axios from 'axios'


class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient
        }

    async getPopular(){
        const response = await this.youtube.get('videos', {
            params: {
                part : 'snippet',
                chart : 'mostPopular',
                maxResults : 25,
            }
        })
        return response.data.items
    }

    async getSearch(query){
        const response = await this.youtube.get('search', {
            params: {
                part : 'snippet',
                maxResults : 25,
                type : 'video',
                q: query,
            }
        })
        return response.data.items
    }
  
}

export default Youtube