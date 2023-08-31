import Page404 from "../views/Page404"

export const ValidURL = (param1, param2 = 0) => {
    if (isNaN(param1) || isNaN(param2)) {
        return { bool: true, error: <Page404 /> }
    }

    return { bool: false }
}