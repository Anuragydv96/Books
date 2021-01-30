import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Books from './Books';
import Sdata from './Sdata';
import web from '../src/img.png';

function ncard(val)
{
  return(
    <Books
    imgsrc={val.imgsrc}
    heading={val.heading}
    para={val.para}
  />

  );
}


function Home() {
    return (
      <>
             <div className="searchbox">
               <input type="text" placeholder="Search books" />
               <SearchIcon style={{ fontSize: 40, cursor:"pointer" }} />
             </div>      

             <div className="library">
               <div className="image">
                 <img src={web} alt="lib"/>
               </div>
               <div className="content">
                <h1>About Library</h1>
                   <p>Data design creates a model of data and or information that is represented at 
                     a high level of abstraction. The structure of data has always been an important
                      part of software design. The data design activity translates these elements of
                       requirement model into data structure at the software component level.
                        In actuality, the design of data begins during the creation of the analysis
                         model.
                         The database modeling involves Normalization of the database structure so
                          as to avoid data redundancy. The different levels of normalization are
                           first level, second level and third level. Normally normalization up to 
                           3rd level is followed. But in certain cases we normalize up to fourth
                            level is called Boyce code normal form. In this project we have normalized
                             up to second level. Also we have added a bit of renormalization into the 
                             databases for easy generation of reports in the future.</p>
                  
               </div>
             </div>




            
        {Sdata.map(ncard)};

           
     </>
    );
}

export default Home;