class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }
    
    getPopular = () => {
        return(
        fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCZXDRLbSN5PYj_YcV21Vl8Pc52XX5np5A"
        , this.getRequestOptions)
        .then(response => response.json())
        .then(result => result.items)
        )}
    
    getSearch = (query) => {
        return (
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCZXDRLbSN5PYj_YcV21Vl8Pc52XX5np5A`
        , this.getRequestOptions)
          .then(response => response.json())
          .then(response => response.items.map(item => ({...item, id : item.id.videoId})))
        )
        }

}

export default Youtube