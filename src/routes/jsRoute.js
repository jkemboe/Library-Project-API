const express = require('express')
const bookRouter = express.Router()

function router(nav){

    const javascript = [
        {
            title:'Me and You',
            genre:'Romance',
            author:'Maasai Sang',
            read: false
        },
        {
            title:'Travelling the universe',
            genre:'Science Fiction',
            author:'Edward Kipkemoi Sang',
            read: false
        },
        {
            title:'Checking out things',
            genre:'Science Fiction',
            author:'Samuel Kibet',
            read: false
        },
        {
            title:'Walking past the sandy beaches',
            genre:'Science Fiction',
            author:'Evans Ludwig Graph',
            read: false
        },
        {
            title:'Not talking just watchiing sunset',
            genre:'Science Fiction',
            author:'Muthoni Drummer',
            read: false
        },
        {
            title:'How cool is that',
            genre:'Science Fiction',
            author:'fally Ipupa',
            read: false
        },
        {
            title:'Very much thank you',
            genre:'Science Fiction',
            author:'Jeneviv Lamadaa',
            read: false
        },
        {
            title:'Loveing the system for sure',
            genre:'Science Fiction',
            author:'William Ruto',
            read: false
        }
    ]
    
    bookRouter.route('/')
    .get((req, res) => {
        res.render('bookList', 
            {   
                title: 'My Javascript Projects',
                nav,
                javascript,
            }
        )
    })
    
    bookRouter.route('/:id')
    .get((req, res) => {
        const {id} = req.params.id
        res.render('bookJs', 
        {   
            title: 'My Javascript Projects',
            nav,
            javascript:javascript[req.params.id],
        }
    )
    })
    return bookRouter
}


module.exports = router