const jFile = require("jsonfile")

const getAllData = (file)=>{
    return jFile.readFile(file)
}

const setData = async (file,arr)=>{
await jFile.writeFile(file,arr)
return "Done"
} 

module.exports = {getAllData,setData}