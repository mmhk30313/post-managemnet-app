import { request } from "./request/request"

export const findPosts = () => {
    const json_place_holder_post_url = "https://jsonplaceholder.typicode.com/posts";
    return request(json_place_holder_post_url, { 
        method: "GET",
    });
}

export const getImages = () => {
    const image_url = "https://api.unsplash.com/photos/?client_id=eYF-rzW776nic2O-HgC1Ee_gocdleMtcIb3n5FbxLjg";
    return request(image_url, { 
        method: "GET",
    });
}