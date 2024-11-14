window.addEventListener('DOMContentLoaded', (Event) =>{
    getVistCount();
})

const functionApi = '';
    
const getVistCount = () => {
     let count = 30;
     fetch(functionApi).then(Response => { 
        return response.json()
     })then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    ));
    return count;   
}