const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const getText =async(req,res)=>{
    const promp = req.body.body;
    try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(`${promp}`);
    const response = await result.response;
    const text = response.text();
 return  res.status(200).send({resp:text});
    } catch (error) {
        console.log(error);
    }
    
}
module.exports = {getText};