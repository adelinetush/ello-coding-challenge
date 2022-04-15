import React from "react";
import PageContent from "../pages/PageContent";
import '../css/pages.css'


export default class PageComponent extends React.Component {

    firstPage = 0;
    secondPage = 1;

    //handles page navigation
    nextPage=()=>{
        //I hardcoded the last page because it wasn't a requirement for the challenge
        if(this.secondPage < 27){
            this.setState({
                firstPage: this.firstPage += 2,
                secondPage: this.secondPage += 2
            })
        } else {
            this.setState({
                firstPage: this.firstPage = 0,
                secondPage: this.secondPage = 1
            })
        }
        
    }
    render() {
        return <div>
            <PageContent pageOne={this.firstPage} pageTwo={this.secondPage}></PageContent>
            <div className="nextButton">
                <button onClick={this.nextPage}>Next</button>
            </div>
        </div>
    }

}