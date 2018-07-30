import * as React from "react";

export interface ICardProps {
    title: string
    children: any;
}
export const Card = (props: ICardProps) => {
    return <div className="border border-secondary">
        <h5 className="p-3 mb-2 bg-secondary text-white">{props.title}</h5>
        <div className="p-2">
            {props.children}
        </div>
    </div>
}
