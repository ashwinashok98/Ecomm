import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component'
class Directory extends React.Component{
    constructor(){
        super();
        this.state ={
            sections:[
            {
                title: 'hats',
                imgUrl:'https://i.ibb.co/cvpntL1/hats.png',
                id:1
            },
            {
                title: 'jackects',
                imgUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                id:2
            },
            {
                title: 'Sneakers',
                imgUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                id:3
            },
            {
                title: 'womens',
                imgUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                size:'large',
                id:4
            },
            {
                title: 'mens',
                imgUrl:'https://i.ibb.co/R70vBrQ/men.png',
                size:'large',
                id:5
            }]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title,imgUrl,id,size}) =>(
                        <MenuItem key ={id} title={title} imgUrl= {imgUrl} size={size}/>
                    ))
                }
                </div>

        )

    }
}
export default Directory;