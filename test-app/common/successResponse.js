
const sendResponse =(result)=>{

   return  {

        "currentPage": 1,
 
        "pageSize": 10,
 
        "totalPages": 3,
 
        "totalCount": 25,
 
        "data": result
 
      }

}

module.exports= sendResponse;
