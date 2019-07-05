const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')
const app = express()
const bookRouter = express.Router()

const port = process.env.PORT || 4040

app.use(morgan('tiny'))
// app.use(express.static(__dirname, 'public'))
app.set('views', './src/views')
app.set('view engine', 'ejs')

const nav = [{
    link:'/javascript',
    title:'Javascript'
    }, 
    {
    link:'/react',
    title:'React'
    },
    {
    link:'/node',
    title:'My NodeJS'
    }]

const jsRoute = require('./src/routes/jsRoute')(nav)

app.use('/javascript', jsRoute)

app.get('/', (req,res) => {
    res.render('vindex', 
        {   
            title: 'My Working Projects',
            nav:[
                {
                link:'/javascript',
                title:'Javascript'
                }, 
                {
                link:'/react',
                title:'React'
                },
                {
                link:'/node',
                title:'My NodeJS'
                }
                ]
        }
    )
})

app.listen(port, (err) => {
    debug(`Listening on port ${chalk.blue('4040')}`)
})
 