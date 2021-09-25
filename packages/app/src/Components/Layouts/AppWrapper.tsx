import React, { ReactNode } from 'react';

interface IAppWrapper {
    children: ReactNode
} 

const AppWrapper = ({
    children
}: IAppWrapper) => {

    return (
        <article>
            { children }
        </article>
    )
}

export default AppWrapper