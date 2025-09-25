export let globalErr = (err, req, res, next)=> {
    res.stat(500).json({msg: `Error - ${err.message}`});
};

export let log = (req, res, next) => {
    console.log(`${req.method} - ${req.path}`);
    next();
};


