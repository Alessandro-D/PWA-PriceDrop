import React, { Component } from "react";
import UrlSearch from "./UrlSearch";
import ReviewForm from "./ReviewForm";


class SearchManager extends Component {
    state = { reviewFlag: false }

    toggleReviewFlag = () => {
        this.setState({reviewFlag : !this.state.reviewFlag})
    }

    showForm = () => {
        if(!this.state.reviewFlag){
            return <UrlSearch onSubmit={this.toggleReviewFlag} />
        }else{
            return <ReviewForm />
        }
    }


    render() { 
        return ( 
            <React.Fragment>
               {this.showForm()}
            </React.Fragment>
         );
    }
}
 

export default SearchManager;