const Tab = require('../models/Tab')

module.exports = {
    getTabs: async (req,res)=>{
        console.log(req.user)
        try{
            // const recentTabs = await Tab.find({})
            const tabItems = await Tab.find({userId:req.user.id}).sort({})
            const itemsLeft = await Tab.countDocuments({userId:req.user.id,completed: false})
            res.render('tabs.ejs', {tabs: tabItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createTab: async (req, res)=>{
        try{
            await Tab.create({tab: req.body.tabItem, completed: false, userId: req.user.id})
            console.log('Tab has been added!')
            res.redirect('/tabs')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Tab.findOneAndUpdate({_id:req.body.tabIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Tab.findOneAndUpdate({_id:req.body.tabIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTab: async (req, res)=>{
        console.log(req.body.tabIdFromJSFile)
        try{
            await Tab.findOneAndDelete({_id:req.body.tabIdFromJSFile})
            console.log('Deleted Tab')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    