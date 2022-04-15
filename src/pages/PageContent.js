import React from "react";
import {usePageContent} from "../hooks/usePageContent";
import { useNavigate } from 'react-router-dom'
import '../css/pages.css'

export default function PageContent({pageOne, pageTwo}) {

    const {loading, data} = usePageContent()

    const navigate = useNavigate()

    //splits the page content into an array of words
    function splitPageContent(content) {
        let arr = content.split(" ");
        return arr
    }

    //get the token value when a corresponding word is clicked
    function getTokenValue(e) {
        const data = JSON.parse(e.target.dataset.token)
        console.log(data)
        console.log(data.value)

        //navigate to the token view and send the token value to be rendered on that view
        navigate('/token', {
            state:{tokenValue: data.value}
        })
    }

    if (loading) 
        return <div>Loading...</div>

    return (
        <div>
            <div className="bookHeader">
                <h1>{data.book.title}</h1>
                <p>By {data.book.author}</p>
            </div>
            <div class="row">
                {data
            .book
            .pages
            .map((page, index) => {
                if (index == pageOne) {
                    return (
                    <div class="column" style={{background: "#5E9DD8"}}>
                        <p className="pageIndex">Page {pageOne}</p>
                        {splitPageContent(page.content).map((text, index) => {
                                //the split content is displayed as a span, it's an array of words and each word is clickable
                                //onClick, get the token value
                                return <span data-token={JSON.stringify(page.tokens[index])} onClick={getTokenValue}>{text + " "}
                                </span>
                            })}
                        
                    </div>
                )
                }
                if (index == pageTwo) {
                    return (
                <div class="column" style={{background: "#CAEAF3"}}>
                    <p>Page {pageTwo}</p>
                    {splitPageContent(page.content).map((text, index) => {
                                //Second Page
                                return <span data-token={JSON.stringify(page.tokens[index])} onClick={getTokenValue}>{text + " "}
                                </span>
                            })}
                    
                </div>
                )
                }
            })
        }
            </div>
    </div>
    )
}
