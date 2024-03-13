const test = (req, res) => {
  res.json({ message: "API IS WORKING" });
};

const train = (req, res) => {
    res.json({message: "train"})
}
export {test, train};
