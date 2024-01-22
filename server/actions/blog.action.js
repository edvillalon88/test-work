const Blog = require("../model/blog");
const { Op } = require('sequelize');

const getActions = async (req, res)=>{
    const { search } = req.query;
    let whereObject = {}
    if(search && search !== '')
        whereObject = { 
            where: {  
                [Op.or]:{
                    title:{ [Op.substring]: search },
                    content:{ [Op.substring]: search }
                }
            }
        };
    try {
        const blogs = await Blog.findAll(whereObject);
        const blogsWithStringDate = blogs.map(item=>({ ...item.dataValues, date: (new Date(item.date)).toISOString() }))
        return res.status(200).send(blogsWithStringDate);
    } catch (error) {
        console.error(error);
    }

}
const getAction = async (req, res)=>{
    const { idAction } = req.params;
    try {
        const blog = await Blog.findByPk(idAction);
        return res.status(200).send(blog);
    } catch (error) {
        console.error(error);
        return res.status(400).send(error);
    }
}
const saveAction = async (req, res)=>{
    const { blog } = req.body;
    try {
        const blogCreated = await Blog.create(blog);
        return res.status(200).send(blogCreated);
    } catch (error) {
        console.error(error);
        return res.status(400).send(error);
    }

}
module.exports = {
    getActions,
    saveAction,
    getAction
}