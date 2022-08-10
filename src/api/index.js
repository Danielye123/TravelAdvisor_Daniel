import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


  
export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, { 
            params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '34f36149e2msh72eca30b8fda5fcp1e1ad7jsnd9b8a2ea9c73',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
          });
        
        return data;
    } catch (error) {
        console.log(error)
    }
}