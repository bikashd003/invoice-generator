const errorHandler = (err, req, res, next) => {
    console.error(err)
    res.status(500).json({
        message: "Something went wrong! Please try after some time."
    });
};

export default errorHandler;