import { endpointPost } from '../utils/endpoint'

const hacerOrden = (item) => {
    const endpoint = `http://localhost:5100/payment/${item.duration}`;
    return fetch(endpoint).then(
        function (response) {
            const data = response.json();
            
            return data;
        },
        function (error) { console.log(error) }
    );
}


async function postOrder(item){
    try {
      const data = await hacerOrden(item)
      if (data != null) {
        location.href = data;
        }
      else{
        throw new Error();
      }
    } catch (error) {
      
    }
  }


export default postOrder;