import React from "react";
import {usePageContent} from "../hooks/usePageContent";

export default function PageContent() {

    const {loading, data} = usePageContent()


    function splitPageContent(content) {
        let arr = content.split(" ");
        return arr
    }
    function getTokenValue(e) {
        const data = JSON.parse(e.target.dataset.token)
        console.log(data)
    }


    if (loading) 
        return <div>Loading...</div>

    return (
        <div>
            {data
                .book
                .pages
                .map((page) => {
                    return (
                        <div>
                            {splitPageContent(page.content).map((text, index) => {
                                return <span data-token={JSON.stringify(page.tokens[index])} onClick={getTokenValue}>{text + " "}
                                </span>
                            })}
                        </div>
                    )
                })}
        </div>
    )
}
