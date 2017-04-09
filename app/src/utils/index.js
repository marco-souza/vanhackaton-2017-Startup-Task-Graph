module.exports = {
    // SImple pluralize function
    pluralize: (num,str)=> {
        if (num > 1 || num === 0)
            return `${num} ${str}s`;
        else
            return `${num} ${str}`;
    },
}
