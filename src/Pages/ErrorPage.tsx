import { Link, useRouteError } from "react-router-dom";

interface ErrorInstance extends Error {
    statusText: string,
    message: string
}


export const ErrorPage = () => {
    const error = useRouteError() as ErrorInstance
    console.error(error);
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
                <Link to={'/'}> Go back home</Link>
            </p>
        </div>
    );
}