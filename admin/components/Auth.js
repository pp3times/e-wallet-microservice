const Auth = (token) => {
    if (!token) {
        return false;
    }

    return true;
}

export { Auth };