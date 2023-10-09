let NotFound = (_, res) => res.status(404).json({ message: "Page not found!" });

export default NotFound;
