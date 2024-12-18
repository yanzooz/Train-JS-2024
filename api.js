// export async function fetchJSON (url, options = {}) {
//     const headers = {Accept: 'application/JSON', ...options.headers}
//     const r = await fetch(url, {...options, headers})
//     if (r.ok){
//         return r.json()
//     }
//     throw new Error ('Erreur serveur', {cause: r})
// }

function basicOp(operation, value1, value2){
    if(operation == "addition"){
      return value1+value2;
    }else if(operation == "soustraction"){
      return value1-value2;
    }else if(operation == "division"){
      return value1/value2 
    }else if(operation == "multiplication") {
      return value1*value2
    }else{
    return 0;
      }
  }
  
  basicOp(addition,10,20)