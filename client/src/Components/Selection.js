import React from 'react';

class Selection extends React.Component{
    constructor(){
        super();
    };

    state = {};

    render(){

        //This selection component should reside within the navbar on a mobile screen
        //when displayed on a desktop, it should appear off to the right with the given 
        //search criteria highlighted at the top of the box. Mobile should also use 
        //dropdowns for some of the more complicated types of selections such as name
        //searches.
        return(
            <div>
                <ul>
                    <li>This is a link</li>
                    <li>This is a link</li>
                </ul>
            </div>
        );
    }
}

export default Selection;