import React, {useState, useEffect} from 'react';
import {Footer} from '../../components';
export default function Bookmarks() {
    return(
        <>
         <div className='bookmarks'>
             <div className='bookmarks-item container'>
             <div className='bookmarks-up container'>
                 <div className='bookmarks-up_items'>
                <img src="../../../assets2/ellipse.svg"/>
                <img src="../../../assets2/split.svg"/><a>Split</a>
                <img src="../../../assets2/settings.svg"/><a>Settings</a>
                </div>
                <div className='bookmarks-up_title'><h1>Bookmarks</h1>
</div>
            </div>
             <div className="bookmarks-item_banner">
                <div className='bookmarks_baba'>
                   <img src="../../../assets2/zemra.svg"/>
                    <h2>Your watchlist is empty</h2>
                    <p>Click the heart icon to save crafters for later. Don’t forget to log in so that you can view and edit your watch list later!</p>
                   <div className='butoni'><a>Here we go</a></div>
                </div>
                </div>
                </div>
            </div>
            <Footer/>
            </>
    )
}